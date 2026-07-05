// Generate 48×48 PNG tab icons for uni-app native app compatibility
const fs = require('fs')
const zlib = require('zlib')
const path = require('path')

const SIZE = 48
const tabDir = path.join(__dirname, '..', 'static', 'tab')

function crc32(buf) {
	let c, table = []
	for (let n = 0; n < 256; n++) {
		c = n
		for (let k = 0; k < 8; k++)
			c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
		table[n] = c
	}
	c = 0xffffffff
	for (let i = 0; i < buf.length; i++)
		c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
	return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
	const typeBytes = Buffer.from(type, 'ascii')
	const dataLen = Buffer.alloc(4)
	dataLen.writeUInt32BE(data.length, 0)
	const crcInput = Buffer.concat([typeBytes, data])
	const crcVal = Buffer.alloc(4)
	crcVal.writeUInt32BE(crc32(crcInput), 0)
	return Buffer.concat([dataLen, typeBytes, data, crcVal])
}

function createBuffer(w, h) {
	const rowLen = 1 + w * 4
	return { buf: Buffer.alloc(h * rowLen), w, h, rowLen }
}

function setPixel(canvas, x, y, r, g, b, a = 255) {
	if (x < 0 || x >= canvas.w || y < 0 || y >= canvas.h) return
	const off = y * canvas.rowLen + 1 + x * 4
	canvas.buf[off] = r
	canvas.buf[off + 1] = g
	canvas.buf[off + 2] = b
	canvas.buf[off + 3] = a
}

function fillRect(canvas, rx, ry, rw, rh, r, g, b, a = 255) {
	for (let y = ry; y < ry + rh; y++)
		for (let x = rx; x < rx + rw; x++)
			setPixel(canvas, x, y, r, g, b, a)
}

function fillCircle(canvas, cx, cy, radius, r, g, b, a = 255) {
	for (let y = cy - radius; y <= cy + radius; y++)
		for (let x = cx - radius; x <= cx + radius; x++)
			if ((x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2)
				setPixel(canvas, x, y, r, g, b, a)
}

function drawLine(canvas, x1, y1, x2, y2, r, g, b, width = 3) {
	const dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1)
	const steps = Math.max(dx, dy)
	for (let i = 0; i <= steps; i++) {
		const t = steps === 0 ? 0 : i / steps
		const px = Math.round(x1 + (x2 - x1) * t)
		const py = Math.round(y1 + (y2 - y1) * t)
		for (let wy = -Math.floor(width / 2); wy <= Math.floor(width / 2); wy++)
			for (let wx = -Math.floor(width / 2); wx <= Math.floor(width / 2); wx++)
				setPixel(canvas, px + wx, py + wy, r, g, b)
	}
}

function encodePNG(canvas) {
	const rawData = canvas.buf
	const compressed = zlib.deflateSync(rawData)

	const ihdr = Buffer.alloc(13)
	ihdr.writeUInt32BE(canvas.w, 0)
	ihdr.writeUInt32BE(canvas.h, 4)
	ihdr[8] = 8  // bit depth
	ihdr[9] = 6  // color type: RGBA
	ihdr[10] = 0 // compression
	ihdr[11] = 0 // filter
	ihdr[12] = 0 // interlace

	const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
	return Buffer.concat([
		signature,
		chunk('IHDR', ihdr),
		chunk('IDAT', compressed),
		chunk('IEND', Buffer.alloc(0))
	])
}

function hexToRGB(hex) {
	return {
		r: parseInt(hex.slice(1, 3), 16),
		g: parseInt(hex.slice(3, 5), 16),
		b: parseInt(hex.slice(5, 7), 16)
	}
}

// --- Draw icons ---

function drawHome(color) {
	const c = hexToRGB(color)
	const canvas = createBuffer(SIZE, SIZE)
	// roof - triangle
	const roofTop = 10, roofBot = 25, roofLeft = 6, roofRight = 42
	for (let y = roofTop; y <= roofBot; y++) {
		const t = (y - roofTop) / (roofBot - roofTop)
		const x1 = roofLeft + (24 - roofLeft) * t
		const x2 = roofRight - (roofRight - 24) * t
		for (let x = Math.round(x1); x <= Math.round(x2); x++)
			setPixel(canvas, x, y, c.r, c.g, c.b)
	}
	// body
	fillRect(canvas, 10, 25, 28, 18, c.r, c.g, c.b)
	return encodePNG(canvas)
}

function drawWord(color) {
	const c = hexToRGB(color)
	const canvas = createBuffer(SIZE, SIZE)
	const gap = 6
	// 3 horizontal bars, each 28px wide, 4px tall
	for (let i = 0; i < 3; i++) {
		const y = 12 + i * (4 + gap)
		fillRect(canvas, 10, y, 28, 4, c.r, c.g, c.b)
	}
	return encodePNG(canvas)
}

function drawPractice(color) {
	const c = hexToRGB(color)
	const canvas = createBuffer(SIZE, SIZE)
	// circle
	const cx = 24, cy = 24, r = 17, thickness = 3
	for (let y = 0; y < SIZE; y++)
		for (let x = 0; x < SIZE; x++) {
			const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
			if (dist >= r - thickness && dist <= r)
				setPixel(canvas, x, y, c.r, c.g, c.b)
		}
	// checkmark
	drawLine(canvas, 15, 25, 21, 31, c.r, c.g, c.b, 3)
	drawLine(canvas, 21, 31, 33, 16, c.r, c.g, c.b, 3)
	return encodePNG(canvas)
}

function drawProfile(color) {
	const c = hexToRGB(color)
	const canvas = createBuffer(SIZE, SIZE)
	// head circle
	fillCircle(canvas, 24, 15, 8, c.r, c.g, c.b)
	// body - arc (simplified as a filled shape)
	for (let y = 22; y < 44; y++) {
		const t = (y - 22) / 22
		const halfW = 12 + Math.sin(t * Math.PI) * 8
		for (let x = Math.round(24 - halfW); x <= Math.round(24 + halfW); x++)
			setPixel(canvas, x, y, c.r, c.g, c.b)
	}
	return encodePNG(canvas)
}

// --- Generate all icons ---

const activeColor = '#FF7043'
const defaultColor = '#78909C'

const icons = {
	'home': drawHome,
	'word': drawWord,
	'practice': drawPractice,
	'profile': drawProfile
}

for (const [name, drawFn] of Object.entries(icons)) {
	fs.writeFileSync(path.join(tabDir, `${name}.png`), drawFn(defaultColor))
	fs.writeFileSync(path.join(tabDir, `${name}-active.png`), drawFn(activeColor))
	console.log(`Generated ${name}.png and ${name}-active.png`)
}

console.log('All PNG icons generated.')
