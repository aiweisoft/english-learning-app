<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	page {
		background-color: #FFF9E6;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		color: #263238;
	}
	view, text, image, scroll-view, swiper, swiper-item, input, button {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>
