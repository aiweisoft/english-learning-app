const wordData = [
	{
		"id": 1,
		"category": "小学英语",
		"icon": "🏫",
		"words": [
			{
				"id": 1001,
				"en": "a",
				"zh": "一个",
				"phonetic": "/.../",
				"example": "Let's talk about a.",
				"exampleZh": "让我们来谈谈一个吧。"
			},
			{
				"id": 1002,
				"en": "about",
				"zh": "关于；大约",
				"phonetic": "/aʊ/",
				"example": "I think about is important.",
				"exampleZh": "我认为关于；大约很重要。"
			},
			{
				"id": 1003,
				"en": "above",
				"zh": "在...上方",
				"phonetic": "/.../",
				"example": "Let's talk about above.",
				"exampleZh": "让我们来谈谈在...上方吧。"
			},
			{
				"id": 1004,
				"en": "across",
				"zh": "穿过",
				"phonetic": "/.../",
				"example": "I think across is important.",
				"exampleZh": "我认为穿过很重要。"
			},
			{
				"id": 1005,
				"en": "act",
				"zh": "行动；表演",
				"phonetic": "/.../",
				"example": "I need to act before the deadline.",
				"exampleZh": "我需要在截止日期前行动；表演。"
			},
			{
				"id": 1006,
				"en": "add",
				"zh": "添加",
				"phonetic": "/.../",
				"example": "We should add more carefully.",
				"exampleZh": "我们应该更仔细地添加。"
			},
			{
				"id": 1007,
				"en": "afraid",
				"zh": "害怕的",
				"phonetic": "/eɪ/",
				"example": "She looks afraid today.",
				"exampleZh": "她今天看起来很害怕的。"
			},
			{
				"id": 1008,
				"en": "after",
				"zh": "在...之后",
				"phonetic": "/ər/",
				"example": "I think after is important.",
				"exampleZh": "我认为在...之后很重要。"
			},
			{
				"id": 1009,
				"en": "afternoon",
				"zh": "下午",
				"phonetic": "/uː/",
				"example": "Do you understand this afternoon?",
				"exampleZh": "你理解这个下午吗？"
			},
			{
				"id": 1010,
				"en": "again",
				"zh": "再一次",
				"phonetic": "/eɪ/",
				"example": "He spoke again to the audience.",
				"exampleZh": "他再一次地对观众说话。"
			},
			{
				"id": 1011,
				"en": "age",
				"zh": "年龄",
				"phonetic": "/.../",
				"example": "This is an important age.",
				"exampleZh": "这是一个重要的年龄。"
			},
			{
				"id": 1012,
				"en": "ago",
				"zh": "以前",
				"phonetic": "/.../",
				"example": "They worked ago on the project.",
				"exampleZh": "他们以前地在这个项目上工作。"
			},
			{
				"id": 1013,
				"en": "agree",
				"zh": "同意",
				"phonetic": "/iː/",
				"example": "Let's agree together.",
				"exampleZh": "让我们一起同意吧。"
			},
			{
				"id": 1014,
				"en": "air",
				"zh": "空气",
				"phonetic": "/eɪ/",
				"example": "Do you understand this air?",
				"exampleZh": "你理解这个空气吗？"
			},
			{
				"id": 1015,
				"en": "airport",
				"zh": "机场",
				"phonetic": "/eɪ/",
				"example": "airport plays a key role in our life.",
				"exampleZh": "机场在我们的生活中起着关键作用。"
			},
			{
				"id": 1016,
				"en": "all",
				"zh": "所有的",
				"phonetic": "/.../",
				"example": "This is very all.",
				"exampleZh": "这非常所有的。"
			},
			{
				"id": 1017,
				"en": "almost",
				"zh": "几乎",
				"phonetic": "/.../",
				"example": "She almost agreed with us.",
				"exampleZh": "她几乎地同意了我们的意见。"
			},
			{
				"id": 1018,
				"en": "alone",
				"zh": "独自的",
				"phonetic": "/.../",
				"example": "It's a alone idea.",
				"exampleZh": "这是一个独自的的主意。"
			},
			{
				"id": 1019,
				"en": "along",
				"zh": "沿着",
				"phonetic": "/.../",
				"example": "Let's talk about along.",
				"exampleZh": "让我们来谈谈沿着吧。"
			},
			{
				"id": 1020,
				"en": "already",
				"zh": "已经",
				"phonetic": "/iː/",
				"example": "She already agreed with us.",
				"exampleZh": "她已经地同意了我们的意见。"
			},
			{
				"id": 1021,
				"en": "also",
				"zh": "也",
				"phonetic": "/.../",
				"example": "They worked also on the project.",
				"exampleZh": "他们也地在这个项目上工作。"
			},
			{
				"id": 1022,
				"en": "always",
				"zh": "总是",
				"phonetic": "/eɪ/",
				"example": "He spoke always to the audience.",
				"exampleZh": "他总是地对观众说话。"
			},
			{
				"id": 1023,
				"en": "and",
				"zh": "和",
				"phonetic": "/.../",
				"example": "Let's talk about and.",
				"exampleZh": "让我们来谈谈和吧。"
			},
			{
				"id": 1024,
				"en": "angry",
				"zh": "生气的",
				"phonetic": "/.../",
				"example": "The result is quite angry.",
				"exampleZh": "结果是相当生气的的。"
			},
			{
				"id": 1025,
				"en": "animal",
				"zh": "动物",
				"phonetic": "/.../",
				"example": "animal plays a key role in our life.",
				"exampleZh": "动物在我们的生活中起着关键作用。"
			},
			{
				"id": 1026,
				"en": "another",
				"zh": "另一个",
				"phonetic": "/ər/",
				"example": "This is very another.",
				"exampleZh": "这非常另一个。"
			},
			{
				"id": 1027,
				"en": "answer",
				"zh": "回答；答案",
				"phonetic": "/ər/",
				"example": "I really like the answer.",
				"exampleZh": "我真的很喜欢这个回答；答案。"
			},
			{
				"id": 1028,
				"en": "any",
				"zh": "任何的",
				"phonetic": "/.../",
				"example": "It's a any idea.",
				"exampleZh": "这是一个任何的的主意。"
			},
			{
				"id": 1029,
				"en": "apple",
				"zh": "苹果",
				"phonetic": "/.../",
				"example": "Do you understand this apple?",
				"exampleZh": "你理解这个苹果吗？"
			},
			{
				"id": 1030,
				"en": "April",
				"zh": "四月",
				"phonetic": "/.../",
				"example": "April plays a key role in our life.",
				"exampleZh": "四月在我们的生活中起着关键作用。"
			},
			{
				"id": 1031,
				"en": "arm",
				"zh": "手臂",
				"phonetic": "/.../",
				"example": "This is an important arm.",
				"exampleZh": "这是一个重要的手臂。"
			},
			{
				"id": 1032,
				"en": "around",
				"zh": "围绕；大约",
				"phonetic": "/aʊ/",
				"example": "I think around is important.",
				"exampleZh": "我认为围绕；大约很重要。"
			},
			{
				"id": 1033,
				"en": "arrive",
				"zh": "到达",
				"phonetic": "/.../",
				"example": "Let's arrive together.",
				"exampleZh": "让我们一起到达吧。"
			},
			{
				"id": 1034,
				"en": "art",
				"zh": "艺术",
				"phonetic": "/.../",
				"example": "Do you understand this art?",
				"exampleZh": "你理解这个艺术吗？"
			},
			{
				"id": 1035,
				"en": "ask",
				"zh": "问",
				"phonetic": "/.../",
				"example": "I need to ask before the deadline.",
				"exampleZh": "我需要在截止日期前问。"
			},
			{
				"id": 1036,
				"en": "at",
				"zh": "在",
				"phonetic": "/.../",
				"example": "I think at is important.",
				"exampleZh": "我认为在很重要。"
			},
			{
				"id": 1037,
				"en": "August",
				"zh": "八月",
				"phonetic": "/ɔː/",
				"example": "I really like the August.",
				"exampleZh": "我真的很喜欢这个八月。"
			},
			{
				"id": 1038,
				"en": "aunt",
				"zh": "阿姨；姑姑",
				"phonetic": "/ɔː/",
				"example": "The aunt is very useful.",
				"exampleZh": "阿姨；姑姑非常有用。"
			},
			{
				"id": 1039,
				"en": "autumn",
				"zh": "秋天",
				"phonetic": "/ɔː/",
				"example": "Do you understand this autumn?",
				"exampleZh": "你理解这个秋天吗？"
			},
			{
				"id": 1040,
				"en": "away",
				"zh": "离开",
				"phonetic": "/eɪ/",
				"example": "He spoke away to the audience.",
				"exampleZh": "他离开地对观众说话。"
			},
			{
				"id": 1041,
				"en": "baby",
				"zh": "婴儿",
				"phonetic": "/.../",
				"example": "This is an important baby.",
				"exampleZh": "这是一个重要的婴儿。"
			},
			{
				"id": 1042,
				"en": "back",
				"zh": "背部；后面",
				"phonetic": "/k/",
				"example": "I really like the back.",
				"exampleZh": "我真的很喜欢这个背部；后面。"
			},
			{
				"id": 1043,
				"en": "bad",
				"zh": "坏的",
				"phonetic": "/.../",
				"example": "It's a bad idea.",
				"exampleZh": "这是一个坏的的主意。"
			},
			{
				"id": 1044,
				"en": "bag",
				"zh": "包；袋子",
				"phonetic": "/.../",
				"example": "Do you understand this bag?",
				"exampleZh": "你理解这个包；袋子吗？"
			},
			{
				"id": 1045,
				"en": "ball",
				"zh": "球",
				"phonetic": "/.../",
				"example": "ball plays a key role in our life.",
				"exampleZh": "球在我们的生活中起着关键作用。"
			},
			{
				"id": 1046,
				"en": "banana",
				"zh": "香蕉",
				"phonetic": "/.../",
				"example": "This is an important banana.",
				"exampleZh": "这是一个重要的香蕉。"
			},
			{
				"id": 1047,
				"en": "bank",
				"zh": "银行",
				"phonetic": "/.../",
				"example": "I really like the bank.",
				"exampleZh": "我真的很喜欢这个银行。"
			},
			{
				"id": 1048,
				"en": "baseball",
				"zh": "棒球",
				"phonetic": "/.../",
				"example": "The baseball is very useful.",
				"exampleZh": "棒球非常有用。"
			},
			{
				"id": 1049,
				"en": "basketball",
				"zh": "篮球",
				"phonetic": "/.../",
				"example": "Do you understand this basketball?",
				"exampleZh": "你理解这个篮球吗？"
			},
			{
				"id": 1050,
				"en": "bath",
				"zh": "洗澡",
				"phonetic": "/θ/",
				"example": "bath plays a key role in our life.",
				"exampleZh": "洗澡在我们的生活中起着关键作用。"
			},
			{
				"id": 1051,
				"en": "bathroom",
				"zh": "浴室",
				"phonetic": "/uː/",
				"example": "This is an important bathroom.",
				"exampleZh": "这是一个重要的浴室。"
			},
			{
				"id": 1052,
				"en": "be",
				"zh": "是",
				"phonetic": "/.../",
				"example": "She wants to be this task.",
				"exampleZh": "她想是这个任务。"
			},
			{
				"id": 1053,
				"en": "beach",
				"zh": "海滩",
				"phonetic": "/tʃ/",
				"example": "The beach is very useful.",
				"exampleZh": "海滩非常有用。"
			},
			{
				"id": 1054,
				"en": "bear",
				"zh": "熊",
				"phonetic": "/ɑːr/",
				"example": "Do you understand this bear?",
				"exampleZh": "你理解这个熊吗？"
			},
			{
				"id": 1055,
				"en": "beat",
				"zh": "打败；击败",
				"phonetic": "/iː/",
				"example": "I need to beat before the deadline.",
				"exampleZh": "我需要在截止日期前打败；击败。"
			},
			{
				"id": 1056,
				"en": "beautiful",
				"zh": "美丽的",
				"phonetic": "/fəl/",
				"example": "This is very beautiful.",
				"exampleZh": "这非常美丽的。"
			},
			{
				"id": 1057,
				"en": "because",
				"zh": "因为",
				"phonetic": "/ɔː/",
				"example": "Let's talk about because.",
				"exampleZh": "让我们来谈谈因为吧。"
			},
			{
				"id": 1058,
				"en": "become",
				"zh": "变得",
				"phonetic": "/.../",
				"example": "Let's become together.",
				"exampleZh": "让我们一起变得吧。"
			},
			{
				"id": 1059,
				"en": "bed",
				"zh": "床",
				"phonetic": "/d/",
				"example": "Do you understand this bed?",
				"exampleZh": "你理解这个床吗？"
			},
			{
				"id": 1060,
				"en": "bedroom",
				"zh": "卧室",
				"phonetic": "/uː/",
				"example": "bedroom plays a key role in our life.",
				"exampleZh": "卧室在我们的生活中起着关键作用。"
			},
			{
				"id": 1061,
				"en": "bee",
				"zh": "蜜蜂",
				"phonetic": "/iː/",
				"example": "This is an important bee.",
				"exampleZh": "这是一个重要的蜜蜂。"
			},
			{
				"id": 1062,
				"en": "beef",
				"zh": "牛肉",
				"phonetic": "/iː/",
				"example": "I really like the beef.",
				"exampleZh": "我真的很喜欢这个牛肉。"
			},
			{
				"id": 1063,
				"en": "before",
				"zh": "在...之前",
				"phonetic": "/.../",
				"example": "Let's talk about before.",
				"exampleZh": "让我们来谈谈在...之前吧。"
			},
			{
				"id": 1064,
				"en": "begin",
				"zh": "开始",
				"phonetic": "/.../",
				"example": "They decided to begin the plan.",
				"exampleZh": "他们决定开始这个计划。"
			},
			{
				"id": 1065,
				"en": "behind",
				"zh": "在...后面",
				"phonetic": "/.../",
				"example": "Let's talk about behind.",
				"exampleZh": "让我们来谈谈在...后面吧。"
			},
			{
				"id": 1066,
				"en": "believe",
				"zh": "相信",
				"phonetic": "/.../",
				"example": "We should believe more carefully.",
				"exampleZh": "我们应该更仔细地相信。"
			},
			{
				"id": 1067,
				"en": "bell",
				"zh": "铃铛",
				"phonetic": "/.../",
				"example": "I really like the bell.",
				"exampleZh": "我真的很喜欢这个铃铛。"
			},
			{
				"id": 1068,
				"en": "below",
				"zh": "在...下面",
				"phonetic": "/aʊ/",
				"example": "I think below is important.",
				"exampleZh": "我认为在...下面很重要。"
			},
			{
				"id": 1069,
				"en": "beside",
				"zh": "在...旁边",
				"phonetic": "/.../",
				"example": "Let's talk about beside.",
				"exampleZh": "让我们来谈谈在...旁边吧。"
			},
			{
				"id": 1070,
				"en": "best",
				"zh": "最好的",
				"phonetic": "/.../",
				"example": "He found the task best.",
				"exampleZh": "他发现这个任务是最好的的。"
			},
			{
				"id": 1071,
				"en": "better",
				"zh": "更好的",
				"phonetic": "/ər/",
				"example": "This is very better.",
				"exampleZh": "这非常更好的。"
			},
			{
				"id": 1072,
				"en": "between",
				"zh": "在...之间",
				"phonetic": "/iː/",
				"example": "I think between is important.",
				"exampleZh": "我认为在...之间很重要。"
			},
			{
				"id": 1073,
				"en": "big",
				"zh": "大的",
				"phonetic": "/.../",
				"example": "It's a big idea.",
				"exampleZh": "这是一个大的的主意。"
			},
			{
				"id": 1074,
				"en": "bike",
				"zh": "自行车",
				"phonetic": "/.../",
				"example": "Do you understand this bike?",
				"exampleZh": "你理解这个自行车吗？"
			},
			{
				"id": 1075,
				"en": "bird",
				"zh": "鸟",
				"phonetic": "/.../",
				"example": "bird plays a key role in our life.",
				"exampleZh": "鸟在我们的生活中起着关键作用。"
			},
			{
				"id": 1076,
				"en": "birthday",
				"zh": "生日",
				"phonetic": "/eɪ/",
				"example": "This is an important birthday.",
				"exampleZh": "这是一个重要的生日。"
			},
			{
				"id": 1077,
				"en": "bit",
				"zh": "一点",
				"phonetic": "/.../",
				"example": "I really like the bit.",
				"exampleZh": "我真的很喜欢这个一点。"
			},
			{
				"id": 1078,
				"en": "black",
				"zh": "黑色的",
				"phonetic": "/k/",
				"example": "It's a black idea.",
				"exampleZh": "这是一个黑色的的主意。"
			},
			{
				"id": 1079,
				"en": "blind",
				"zh": "盲的",
				"phonetic": "/.../",
				"example": "The result is quite blind.",
				"exampleZh": "结果是相当盲的的。"
			},
			{
				"id": 1080,
				"en": "block",
				"zh": "街区",
				"phonetic": "/k/",
				"example": "block plays a key role in our life.",
				"exampleZh": "街区在我们的生活中起着关键作用。"
			},
			{
				"id": 1081,
				"en": "blow",
				"zh": "吹",
				"phonetic": "/aʊ/",
				"example": "We should blow more carefully.",
				"exampleZh": "我们应该更仔细地吹。"
			},
			{
				"id": 1082,
				"en": "blue",
				"zh": "蓝色的",
				"phonetic": "/.../",
				"example": "She looks blue today.",
				"exampleZh": "她今天看起来很蓝色的。"
			},
			{
				"id": 1083,
				"en": "board",
				"zh": "板",
				"phonetic": "/oʊ/",
				"example": "The board is very useful.",
				"exampleZh": "板非常有用。"
			},
			{
				"id": 1084,
				"en": "boat",
				"zh": "船",
				"phonetic": "/oʊ/",
				"example": "Do you understand this boat?",
				"exampleZh": "你理解这个船吗？"
			},
			{
				"id": 1085,
				"en": "body",
				"zh": "身体",
				"phonetic": "/.../",
				"example": "body plays a key role in our life.",
				"exampleZh": "身体在我们的生活中起着关键作用。"
			},
			{
				"id": 1086,
				"en": "bone",
				"zh": "骨头",
				"phonetic": "/.../",
				"example": "This is an important bone.",
				"exampleZh": "这是一个重要的骨头。"
			},
			{
				"id": 1087,
				"en": "book",
				"zh": "书",
				"phonetic": "/uː/",
				"example": "I really like the book.",
				"exampleZh": "我真的很喜欢这个书。"
			},
			{
				"id": 1088,
				"en": "boring",
				"zh": "无聊的",
				"phonetic": "/ɪŋ/",
				"example": "It's a boring idea.",
				"exampleZh": "这是一个无聊的的主意。"
			},
			{
				"id": 1089,
				"en": "born",
				"zh": "出生",
				"phonetic": "/.../",
				"example": "They decided to born the plan.",
				"exampleZh": "他们决定出生这个计划。"
			},
			{
				"id": 1090,
				"en": "both",
				"zh": "两者都",
				"phonetic": "/θ/",
				"example": "I think both is important.",
				"exampleZh": "我认为两者都很重要。"
			},
			{
				"id": 1091,
				"en": "bottle",
				"zh": "瓶子",
				"phonetic": "/.../",
				"example": "This is an important bottle.",
				"exampleZh": "这是一个重要的瓶子。"
			},
			{
				"id": 1092,
				"en": "bottom",
				"zh": "底部",
				"phonetic": "/.../",
				"example": "I really like the bottom.",
				"exampleZh": "我真的很喜欢这个底部。"
			},
			{
				"id": 1093,
				"en": "bowl",
				"zh": "碗",
				"phonetic": "/aʊ/",
				"example": "The bowl is very useful.",
				"exampleZh": "碗非常有用。"
			},
			{
				"id": 1094,
				"en": "box",
				"zh": "盒子",
				"phonetic": "/.../",
				"example": "Do you understand this box?",
				"exampleZh": "你理解这个盒子吗？"
			},
			{
				"id": 1095,
				"en": "boy",
				"zh": "男孩",
				"phonetic": "/ɔɪ/",
				"example": "boy plays a key role in our life.",
				"exampleZh": "男孩在我们的生活中起着关键作用。"
			},
			{
				"id": 1096,
				"en": "bread",
				"zh": "面包",
				"phonetic": "/iː/",
				"example": "This is an important bread.",
				"exampleZh": "这是一个重要的面包。"
			},
			{
				"id": 1097,
				"en": "break",
				"zh": "打破",
				"phonetic": "/iː/",
				"example": "She wants to break this task.",
				"exampleZh": "她想打破这个任务。"
			},
			{
				"id": 1098,
				"en": "breakfast",
				"zh": "早餐",
				"phonetic": "/iː/",
				"example": "The breakfast is very useful.",
				"exampleZh": "早餐非常有用。"
			},
			{
				"id": 1099,
				"en": "bridge",
				"zh": "桥",
				"phonetic": "/.../",
				"example": "Do you understand this bridge?",
				"exampleZh": "你理解这个桥吗？"
			},
			{
				"id": 1100,
				"en": "bright",
				"zh": "明亮的",
				"phonetic": "/aɪt/",
				"example": "He found the task bright.",
				"exampleZh": "他发现这个任务是明亮的的。"
			},
			{
				"id": 1101,
				"en": "bring",
				"zh": "带来",
				"phonetic": "/ɪŋ/",
				"example": "We should bring more carefully.",
				"exampleZh": "我们应该更仔细地带来。"
			},
			{
				"id": 1102,
				"en": "brother",
				"zh": "兄弟",
				"phonetic": "/ər/",
				"example": "I really like the brother.",
				"exampleZh": "我真的很喜欢这个兄弟。"
			},
			{
				"id": 1103,
				"en": "brown",
				"zh": "棕色的",
				"phonetic": "/aʊ/",
				"example": "It's a brown idea.",
				"exampleZh": "这是一个棕色的的主意。"
			},
			{
				"id": 1104,
				"en": "brush",
				"zh": "刷子；刷",
				"phonetic": "/ʃ/",
				"example": "Do you understand this brush?",
				"exampleZh": "你理解这个刷子；刷吗？"
			},
			{
				"id": 1105,
				"en": "build",
				"zh": "建造",
				"phonetic": "/.../",
				"example": "I need to build before the deadline.",
				"exampleZh": "我需要在截止日期前建造。"
			},
			{
				"id": 1106,
				"en": "building",
				"zh": "建筑物",
				"phonetic": "/ɪŋ/",
				"example": "This is an important building.",
				"exampleZh": "这是一个重要的建筑物。"
			},
			{
				"id": 1107,
				"en": "bus",
				"zh": "公交车",
				"phonetic": "/.../",
				"example": "I really like the bus.",
				"exampleZh": "我真的很喜欢这个公交车。"
			},
			{
				"id": 1108,
				"en": "busy",
				"zh": "忙碌的",
				"phonetic": "/.../",
				"example": "It's a busy idea.",
				"exampleZh": "这是一个忙碌的的主意。"
			},
			{
				"id": 1109,
				"en": "but",
				"zh": "但是",
				"phonetic": "/.../",
				"example": "Let's talk about but.",
				"exampleZh": "让我们来谈谈但是吧。"
			},
			{
				"id": 1110,
				"en": "butter",
				"zh": "黄油",
				"phonetic": "/ər/",
				"example": "butter plays a key role in our life.",
				"exampleZh": "黄油在我们的生活中起着关键作用。"
			},
			{
				"id": 1111,
				"en": "butterfly",
				"zh": "蝴蝶",
				"phonetic": "/li/",
				"example": "This is an important butterfly.",
				"exampleZh": "这是一个重要的蝴蝶。"
			},
			{
				"id": 1112,
				"en": "buy",
				"zh": "买",
				"phonetic": "/.../",
				"example": "She wants to buy this task.",
				"exampleZh": "她想买这个任务。"
			},
			{
				"id": 1113,
				"en": "by",
				"zh": "通过；由",
				"phonetic": "/.../",
				"example": "Let's talk about by.",
				"exampleZh": "让我们来谈谈通过；由吧。"
			},
			{
				"id": 1114,
				"en": "cake",
				"zh": "蛋糕",
				"phonetic": "/.../",
				"example": "Do you understand this cake?",
				"exampleZh": "你理解这个蛋糕吗？"
			},
			{
				"id": 1115,
				"en": "call",
				"zh": "打电话；称呼",
				"phonetic": "/.../",
				"example": "I need to call before the deadline.",
				"exampleZh": "我需要在截止日期前打电话；称呼。"
			},
			{
				"id": 1116,
				"en": "can",
				"zh": "能够",
				"phonetic": "/.../",
				"example": "We should can more carefully.",
				"exampleZh": "我们应该更仔细地能够。"
			},
			{
				"id": 1117,
				"en": "candle",
				"zh": "蜡烛",
				"phonetic": "/.../",
				"example": "I really like the candle.",
				"exampleZh": "我真的很喜欢这个蜡烛。"
			},
			{
				"id": 1118,
				"en": "candy",
				"zh": "糖果",
				"phonetic": "/.../",
				"example": "The candy is very useful.",
				"exampleZh": "糖果非常有用。"
			},
			{
				"id": 1119,
				"en": "cap",
				"zh": "帽子",
				"phonetic": "/.../",
				"example": "Do you understand this cap?",
				"exampleZh": "你理解这个帽子吗？"
			},
			{
				"id": 1120,
				"en": "car",
				"zh": "汽车",
				"phonetic": "/ɑːr/",
				"example": "car plays a key role in our life.",
				"exampleZh": "汽车在我们的生活中起着关键作用。"
			},
			{
				"id": 1121,
				"en": "card",
				"zh": "卡片",
				"phonetic": "/.../",
				"example": "This is an important card.",
				"exampleZh": "这是一个重要的卡片。"
			},
			{
				"id": 1122,
				"en": "care",
				"zh": "关心",
				"phonetic": "/.../",
				"example": "She wants to care this task.",
				"exampleZh": "她想关心这个任务。"
			},
			{
				"id": 1123,
				"en": "careful",
				"zh": "小心的",
				"phonetic": "/fəl/",
				"example": "It's a careful idea.",
				"exampleZh": "这是一个小心的的主意。"
			},
			{
				"id": 1124,
				"en": "carry",
				"zh": "携带",
				"phonetic": "/.../",
				"example": "They decided to carry the plan.",
				"exampleZh": "他们决定携带这个计划。"
			},
			{
				"id": 1125,
				"en": "case",
				"zh": "情况；箱子",
				"phonetic": "/.../",
				"example": "case plays a key role in our life.",
				"exampleZh": "情况；箱子在我们的生活中起着关键作用。"
			},
			{
				"id": 1126,
				"en": "cat",
				"zh": "猫",
				"phonetic": "/.../",
				"example": "This is an important cat.",
				"exampleZh": "这是一个重要的猫。"
			},
			{
				"id": 1127,
				"en": "catch",
				"zh": "抓住",
				"phonetic": "/tʃ/",
				"example": "She wants to catch this task.",
				"exampleZh": "她想抓住这个任务。"
			},
			{
				"id": 1128,
				"en": "center",
				"zh": "中心",
				"phonetic": "/ər/",
				"example": "The center is very useful.",
				"exampleZh": "中心非常有用。"
			},
			{
				"id": 1129,
				"en": "chair",
				"zh": "椅子",
				"phonetic": "/eɪ/",
				"example": "Do you understand this chair?",
				"exampleZh": "你理解这个椅子吗？"
			},
			{
				"id": 1130,
				"en": "change",
				"zh": "改变；零钱",
				"phonetic": "/.../",
				"example": "I need to change before the deadline.",
				"exampleZh": "我需要在截止日期前改变；零钱。"
			},
			{
				"id": 1131,
				"en": "cheap",
				"zh": "便宜的",
				"phonetic": "/iː/",
				"example": "This is very cheap.",
				"exampleZh": "这非常便宜的。"
			},
			{
				"id": 1132,
				"en": "check",
				"zh": "检查",
				"phonetic": "/k/",
				"example": "She wants to check this task.",
				"exampleZh": "她想检查这个任务。"
			},
			{
				"id": 1133,
				"en": "cheese",
				"zh": "奶酪",
				"phonetic": "/iː/",
				"example": "The cheese is very useful.",
				"exampleZh": "奶酪非常有用。"
			},
			{
				"id": 1134,
				"en": "chicken",
				"zh": "鸡；鸡肉",
				"phonetic": "/.../",
				"example": "Do you understand this chicken?",
				"exampleZh": "你理解这个鸡；鸡肉吗？"
			},
			{
				"id": 1135,
				"en": "child",
				"zh": "孩子",
				"phonetic": "/.../",
				"example": "child plays a key role in our life.",
				"exampleZh": "孩子在我们的生活中起着关键作用。"
			},
			{
				"id": 1136,
				"en": "chocolate",
				"zh": "巧克力",
				"phonetic": "/.../",
				"example": "This is an important chocolate.",
				"exampleZh": "这是一个重要的巧克力。"
			},
			{
				"id": 1137,
				"en": "choose",
				"zh": "选择",
				"phonetic": "/uː/",
				"example": "She wants to choose this task.",
				"exampleZh": "她想选择这个任务。"
			},
			{
				"id": 1138,
				"en": "cinema",
				"zh": "电影院",
				"phonetic": "/.../",
				"example": "The cinema is very useful.",
				"exampleZh": "电影院非常有用。"
			},
			{
				"id": 1139,
				"en": "circle",
				"zh": "圆形",
				"phonetic": "/.../",
				"example": "Do you understand this circle?",
				"exampleZh": "你理解这个圆形吗？"
			},
			{
				"id": 1140,
				"en": "city",
				"zh": "城市",
				"phonetic": "/.../",
				"example": "city plays a key role in our life.",
				"exampleZh": "城市在我们的生活中起着关键作用。"
			},
			{
				"id": 1141,
				"en": "class",
				"zh": "班级；课",
				"phonetic": "/.../",
				"example": "This is an important class.",
				"exampleZh": "这是一个重要的班级；课。"
			},
			{
				"id": 1142,
				"en": "classroom",
				"zh": "教室",
				"phonetic": "/uː/",
				"example": "I really like the classroom.",
				"exampleZh": "我真的很喜欢这个教室。"
			},
			{
				"id": 1143,
				"en": "clean",
				"zh": "干净的；打扫",
				"phonetic": "/iː/",
				"example": "It's a clean idea.",
				"exampleZh": "这是一个干净的；打扫的主意。"
			},
			{
				"id": 1144,
				"en": "clear",
				"zh": "清楚的",
				"phonetic": "/ɑːr/",
				"example": "The result is quite clear.",
				"exampleZh": "结果是相当清楚的的。"
			},
			{
				"id": 1145,
				"en": "clever",
				"zh": "聪明的",
				"phonetic": "/ər/",
				"example": "He found the task clever.",
				"exampleZh": "他发现这个任务是聪明的的。"
			},
			{
				"id": 1146,
				"en": "climb",
				"zh": "爬",
				"phonetic": "/.../",
				"example": "We should climb more carefully.",
				"exampleZh": "我们应该更仔细地爬。"
			},
			{
				"id": 1147,
				"en": "clock",
				"zh": "钟",
				"phonetic": "/k/",
				"example": "I really like the clock.",
				"exampleZh": "我真的很喜欢这个钟。"
			},
			{
				"id": 1148,
				"en": "close",
				"zh": "关闭；近的",
				"phonetic": "/.../",
				"example": "Let's close together.",
				"exampleZh": "让我们一起关闭；近的吧。"
			},
			{
				"id": 1149,
				"en": "clothes",
				"zh": "衣服",
				"phonetic": "/.../",
				"example": "Do you understand this clothes?",
				"exampleZh": "你理解这个衣服吗？"
			},
			{
				"id": 1150,
				"en": "cloud",
				"zh": "云",
				"phonetic": "/aʊ/",
				"example": "cloud plays a key role in our life.",
				"exampleZh": "云在我们的生活中起着关键作用。"
			},
			{
				"id": 1151,
				"en": "cloudy",
				"zh": "多云的",
				"phonetic": "/aʊ/",
				"example": "This is very cloudy.",
				"exampleZh": "这非常多云的。"
			},
			{
				"id": 1152,
				"en": "coat",
				"zh": "外套",
				"phonetic": "/oʊ/",
				"example": "I really like the coat.",
				"exampleZh": "我真的很喜欢这个外套。"
			},
			{
				"id": 1153,
				"en": "coffee",
				"zh": "咖啡",
				"phonetic": "/iː/",
				"example": "The coffee is very useful.",
				"exampleZh": "咖啡非常有用。"
			},
			{
				"id": 1154,
				"en": "coin",
				"zh": "硬币",
				"phonetic": "/ɔɪ/",
				"example": "Do you understand this coin?",
				"exampleZh": "你理解这个硬币吗？"
			},
			{
				"id": 1155,
				"en": "cold",
				"zh": "冷的",
				"phonetic": "/.../",
				"example": "He found the task cold.",
				"exampleZh": "他发现这个任务是冷的的。"
			},
			{
				"id": 1156,
				"en": "collect",
				"zh": "收集",
				"phonetic": "/.../",
				"example": "We should collect more carefully.",
				"exampleZh": "我们应该更仔细地收集。"
			},
			{
				"id": 1157,
				"en": "color",
				"zh": "颜色",
				"phonetic": "/ər/",
				"example": "I really like the color.",
				"exampleZh": "我真的很喜欢这个颜色。"
			},
			{
				"id": 1158,
				"en": "come",
				"zh": "来",
				"phonetic": "/.../",
				"example": "Let's come together.",
				"exampleZh": "让我们一起来吧。"
			},
			{
				"id": 1159,
				"en": "computer",
				"zh": "电脑",
				"phonetic": "/ər/",
				"example": "Do you understand this computer?",
				"exampleZh": "你理解这个电脑吗？"
			},
			{
				"id": 1160,
				"en": "cook",
				"zh": "烹饪",
				"phonetic": "/uː/",
				"example": "I need to cook before the deadline.",
				"exampleZh": "我需要在截止日期前烹饪。"
			},
			{
				"id": 1161,
				"en": "cool",
				"zh": "凉爽的",
				"phonetic": "/uː/",
				"example": "This is very cool.",
				"exampleZh": "这非常凉爽的。"
			},
			{
				"id": 1162,
				"en": "corner",
				"zh": "角落",
				"phonetic": "/ər/",
				"example": "I really like the corner.",
				"exampleZh": "我真的很喜欢这个角落。"
			},
			{
				"id": 1163,
				"en": "correct",
				"zh": "正确的",
				"phonetic": "/.../",
				"example": "It's a correct idea.",
				"exampleZh": "这是一个正确的的主意。"
			},
			{
				"id": 1164,
				"en": "count",
				"zh": "数数",
				"phonetic": "/aʊ/",
				"example": "They decided to count the plan.",
				"exampleZh": "他们决定数数这个计划。"
			},
			{
				"id": 1165,
				"en": "country",
				"zh": "国家",
				"phonetic": "/aʊ/",
				"example": "country plays a key role in our life.",
				"exampleZh": "国家在我们的生活中起着关键作用。"
			},
			{
				"id": 1166,
				"en": "cousin",
				"zh": "表亲",
				"phonetic": "/aʊ/",
				"example": "This is an important cousin.",
				"exampleZh": "这是一个重要的表亲。"
			},
			{
				"id": 1167,
				"en": "cover",
				"zh": "覆盖",
				"phonetic": "/ər/",
				"example": "She wants to cover this task.",
				"exampleZh": "她想覆盖这个任务。"
			},
			{
				"id": 1168,
				"en": "cow",
				"zh": "奶牛",
				"phonetic": "/aʊ/",
				"example": "The cow is very useful.",
				"exampleZh": "奶牛非常有用。"
			},
			{
				"id": 1169,
				"en": "cream",
				"zh": "奶油",
				"phonetic": "/iː/",
				"example": "Do you understand this cream?",
				"exampleZh": "你理解这个奶油吗？"
			},
			{
				"id": 1170,
				"en": "cross",
				"zh": "穿过；交叉",
				"phonetic": "/.../",
				"example": "I need to cross before the deadline.",
				"exampleZh": "我需要在截止日期前穿过；交叉。"
			},
			{
				"id": 1171,
				"en": "cry",
				"zh": "哭",
				"phonetic": "/.../",
				"example": "We should cry more carefully.",
				"exampleZh": "我们应该更仔细地哭。"
			},
			{
				"id": 1172,
				"en": "cup",
				"zh": "杯子",
				"phonetic": "/.../",
				"example": "I really like the cup.",
				"exampleZh": "我真的很喜欢这个杯子。"
			},
			{
				"id": 1173,
				"en": "cut",
				"zh": "切",
				"phonetic": "/.../",
				"example": "Let's cut together.",
				"exampleZh": "让我们一起切吧。"
			},
			{
				"id": 1174,
				"en": "dad",
				"zh": "爸爸",
				"phonetic": "/.../",
				"example": "Do you understand this dad?",
				"exampleZh": "你理解这个爸爸吗？"
			},
			{
				"id": 1175,
				"en": "dance",
				"zh": "跳舞",
				"phonetic": "/əns/",
				"example": "I need to dance before the deadline.",
				"exampleZh": "我需要在截止日期前跳舞。"
			},
			{
				"id": 1176,
				"en": "dangerous",
				"zh": "危险的",
				"phonetic": "/əs/",
				"example": "This is very dangerous.",
				"exampleZh": "这非常危险的。"
			},
			{
				"id": 1177,
				"en": "dark",
				"zh": "黑暗的",
				"phonetic": "/.../",
				"example": "She looks dark today.",
				"exampleZh": "她今天看起来很黑暗的。"
			},
			{
				"id": 1178,
				"en": "date",
				"zh": "日期",
				"phonetic": "/.../",
				"example": "The date is very useful.",
				"exampleZh": "日期非常有用。"
			},
			{
				"id": 1179,
				"en": "daughter",
				"zh": "女儿",
				"phonetic": "/ər/",
				"example": "Do you understand this daughter?",
				"exampleZh": "你理解这个女儿吗？"
			},
			{
				"id": 1180,
				"en": "day",
				"zh": "天；白天",
				"phonetic": "/eɪ/",
				"example": "day plays a key role in our life.",
				"exampleZh": "天；白天在我们的生活中起着关键作用。"
			},
			{
				"id": 1181,
				"en": "dead",
				"zh": "死的",
				"phonetic": "/iː/",
				"example": "This is very dead.",
				"exampleZh": "这非常死的。"
			},
			{
				"id": 1182,
				"en": "dear",
				"zh": "亲爱的",
				"phonetic": "/ɑːr/",
				"example": "She looks dear today.",
				"exampleZh": "她今天看起来很亲爱的。"
			},
			{
				"id": 1183,
				"en": "December",
				"zh": "十二月",
				"phonetic": "/ər/",
				"example": "The December is very useful.",
				"exampleZh": "十二月非常有用。"
			},
			{
				"id": 1184,
				"en": "decide",
				"zh": "决定",
				"phonetic": "/.../",
				"example": "They decided to decide the plan.",
				"exampleZh": "他们决定决定这个计划。"
			},
			{
				"id": 1185,
				"en": "deep",
				"zh": "深的",
				"phonetic": "/iː/",
				"example": "He found the task deep.",
				"exampleZh": "他发现这个任务是深的的。"
			},
			{
				"id": 1186,
				"en": "dentist",
				"zh": "牙医",
				"phonetic": "/.../",
				"example": "This is an important dentist.",
				"exampleZh": "这是一个重要的牙医。"
			},
			{
				"id": 1187,
				"en": "describe",
				"zh": "描述",
				"phonetic": "/.../",
				"example": "She wants to describe this task.",
				"exampleZh": "她想描述这个任务。"
			},
			{
				"id": 1188,
				"en": "desk",
				"zh": "书桌",
				"phonetic": "/.../",
				"example": "The desk is very useful.",
				"exampleZh": "书桌非常有用。"
			},
			{
				"id": 1189,
				"en": "diary",
				"zh": "日记",
				"phonetic": "/.../",
				"example": "Do you understand this diary?",
				"exampleZh": "你理解这个日记吗？"
			},
			{
				"id": 1190,
				"en": "dictionary",
				"zh": "字典",
				"phonetic": "/ʃən/",
				"example": "dictionary plays a key role in our life.",
				"exampleZh": "字典在我们的生活中起着关键作用。"
			},
			{
				"id": 1191,
				"en": "die",
				"zh": "死",
				"phonetic": "/.../",
				"example": "We should die more carefully.",
				"exampleZh": "我们应该更仔细地死。"
			},
			{
				"id": 1192,
				"en": "different",
				"zh": "不同的",
				"phonetic": "/.../",
				"example": "She looks different today.",
				"exampleZh": "她今天看起来很不同的。"
			},
			{
				"id": 1193,
				"en": "difficult",
				"zh": "困难的",
				"phonetic": "/.../",
				"example": "It's a difficult idea.",
				"exampleZh": "这是一个困难的的主意。"
			},
			{
				"id": 1194,
				"en": "dinner",
				"zh": "晚餐",
				"phonetic": "/ər/",
				"example": "Do you understand this dinner?",
				"exampleZh": "你理解这个晚餐吗？"
			},
			{
				"id": 1195,
				"en": "dirty",
				"zh": "脏的",
				"phonetic": "/.../",
				"example": "He found the task dirty.",
				"exampleZh": "他发现这个任务是脏的的。"
			},
			{
				"id": 1196,
				"en": "dish",
				"zh": "盘子",
				"phonetic": "/ʃ/",
				"example": "This is an important dish.",
				"exampleZh": "这是一个重要的盘子。"
			},
			{
				"id": 1197,
				"en": "do",
				"zh": "做",
				"phonetic": "/.../",
				"example": "She wants to do this task.",
				"exampleZh": "她想做这个任务。"
			},
			{
				"id": 1198,
				"en": "doctor",
				"zh": "医生",
				"phonetic": "/ər/",
				"example": "The doctor is very useful.",
				"exampleZh": "医生非常有用。"
			},
			{
				"id": 1199,
				"en": "dog",
				"zh": "狗",
				"phonetic": "/.../",
				"example": "Do you understand this dog?",
				"exampleZh": "你理解这个狗吗？"
			},
			{
				"id": 1200,
				"en": "doll",
				"zh": "娃娃",
				"phonetic": "/.../",
				"example": "doll plays a key role in our life.",
				"exampleZh": "娃娃在我们的生活中起着关键作用。"
			},
			{
				"id": 1201,
				"en": "dollar",
				"zh": "美元",
				"phonetic": "/ɑːr/",
				"example": "This is an important dollar.",
				"exampleZh": "这是一个重要的美元。"
			},
			{
				"id": 1202,
				"en": "door",
				"zh": "门",
				"phonetic": "/ər/",
				"example": "I really like the door.",
				"exampleZh": "我真的很喜欢这个门。"
			},
			{
				"id": 1203,
				"en": "down",
				"zh": "向下",
				"phonetic": "/aʊ/",
				"example": "Let's talk about down.",
				"exampleZh": "让我们来谈谈向下吧。"
			},
			{
				"id": 1204,
				"en": "draw",
				"zh": "画",
				"phonetic": "/ɔː/",
				"example": "They decided to draw the plan.",
				"exampleZh": "他们决定画这个计划。"
			},
			{
				"id": 1205,
				"en": "dream",
				"zh": "梦想",
				"phonetic": "/iː/",
				"example": "dream plays a key role in our life.",
				"exampleZh": "梦想在我们的生活中起着关键作用。"
			},
			{
				"id": 1206,
				"en": "dress",
				"zh": "连衣裙",
				"phonetic": "/.../",
				"example": "This is an important dress.",
				"exampleZh": "这是一个重要的连衣裙。"
			},
			{
				"id": 1207,
				"en": "drink",
				"zh": "喝",
				"phonetic": "/.../",
				"example": "She wants to drink this task.",
				"exampleZh": "她想喝这个任务。"
			},
			{
				"id": 1208,
				"en": "drive",
				"zh": "驾驶",
				"phonetic": "/.../",
				"example": "Let's drive together.",
				"exampleZh": "让我们一起驾驶吧。"
			},
			{
				"id": 1209,
				"en": "driver",
				"zh": "司机",
				"phonetic": "/ər/",
				"example": "Do you understand this driver?",
				"exampleZh": "你理解这个司机吗？"
			},
			{
				"id": 1210,
				"en": "drop",
				"zh": "落下",
				"phonetic": "/.../",
				"example": "I need to drop before the deadline.",
				"exampleZh": "我需要在截止日期前落下。"
			},
			{
				"id": 1211,
				"en": "dry",
				"zh": "干燥的",
				"phonetic": "/.../",
				"example": "This is very dry.",
				"exampleZh": "这非常干燥的。"
			},
			{
				"id": 1212,
				"en": "duck",
				"zh": "鸭子",
				"phonetic": "/k/",
				"example": "I really like the duck.",
				"exampleZh": "我真的很喜欢这个鸭子。"
			},
			{
				"id": 1213,
				"en": "during",
				"zh": "在...期间",
				"phonetic": "/ɪŋ/",
				"example": "Let's talk about during.",
				"exampleZh": "让我们来谈谈在...期间吧。"
			},
			{
				"id": 1214,
				"en": "each",
				"zh": "每个",
				"phonetic": "/tʃ/",
				"example": "The result is quite each.",
				"exampleZh": "结果是相当每个的。"
			},
			{
				"id": 1215,
				"en": "ear",
				"zh": "耳朵",
				"phonetic": "/ɑːr/",
				"example": "ear plays a key role in our life.",
				"exampleZh": "耳朵在我们的生活中起着关键作用。"
			},
			{
				"id": 1216,
				"en": "early",
				"zh": "早的",
				"phonetic": "/li/",
				"example": "This is very early.",
				"exampleZh": "这非常早的。"
			},
			{
				"id": 1217,
				"en": "earth",
				"zh": "地球",
				"phonetic": "/θ/",
				"example": "I really like the earth.",
				"exampleZh": "我真的很喜欢这个地球。"
			},
			{
				"id": 1218,
				"en": "east",
				"zh": "东方的",
				"phonetic": "/iː/",
				"example": "The east is very useful.",
				"exampleZh": "东方的非常有用。"
			},
			{
				"id": 1219,
				"en": "easy",
				"zh": "容易的",
				"phonetic": "/iː/",
				"example": "The result is quite easy.",
				"exampleZh": "结果是相当容易的的。"
			},
			{
				"id": 1220,
				"en": "eat",
				"zh": "吃",
				"phonetic": "/iː/",
				"example": "I need to eat before the deadline.",
				"exampleZh": "我需要在截止日期前吃。"
			},
			{
				"id": 1221,
				"en": "egg",
				"zh": "蛋",
				"phonetic": "/.../",
				"example": "This is an important egg.",
				"exampleZh": "这是一个重要的蛋。"
			},
			{
				"id": 1222,
				"en": "eight",
				"zh": "八",
				"phonetic": "/aɪt/",
				"example": "I think eight is important.",
				"exampleZh": "我认为八很重要。"
			},
			{
				"id": 1223,
				"en": "eighteen",
				"zh": "十八",
				"phonetic": "/iː/",
				"example": "Let's talk about eighteen.",
				"exampleZh": "让我们来谈谈十八吧。"
			},
			{
				"id": 1224,
				"en": "eighth",
				"zh": "第八",
				"phonetic": "/θ/",
				"example": "I think eighth is important.",
				"exampleZh": "我认为第八很重要。"
			},
			{
				"id": 1225,
				"en": "eighty",
				"zh": "八十",
				"phonetic": "/.../",
				"example": "Let's talk about eighty.",
				"exampleZh": "让我们来谈谈八十吧。"
			},
			{
				"id": 1226,
				"en": "either",
				"zh": "两者之一",
				"phonetic": "/ər/",
				"example": "I think either is important.",
				"exampleZh": "我认为两者之一很重要。"
			},
			{
				"id": 1227,
				"en": "elephant",
				"zh": "大象",
				"phonetic": "/.../",
				"example": "I really like the elephant.",
				"exampleZh": "我真的很喜欢这个大象。"
			},
			{
				"id": 1228,
				"en": "eleven",
				"zh": "十一",
				"phonetic": "/.../",
				"example": "I think eleven is important.",
				"exampleZh": "我认为十一很重要。"
			},
			{
				"id": 1229,
				"en": "else",
				"zh": "其他的",
				"phonetic": "/.../",
				"example": "The result is quite else.",
				"exampleZh": "结果是相当其他的的。"
			},
			{
				"id": 1230,
				"en": "email",
				"zh": "电子邮件",
				"phonetic": "/eɪ/",
				"example": "email plays a key role in our life.",
				"exampleZh": "电子邮件在我们的生活中起着关键作用。"
			},
			{
				"id": 1231,
				"en": "empty",
				"zh": "空的",
				"phonetic": "/.../",
				"example": "This is very empty.",
				"exampleZh": "这非常空的。"
			},
			{
				"id": 1232,
				"en": "end",
				"zh": "结束",
				"phonetic": "/.../",
				"example": "She wants to end this task.",
				"exampleZh": "她想结束这个任务。"
			},
			{
				"id": 1233,
				"en": "enjoy",
				"zh": "享受",
				"phonetic": "/ɔɪ/",
				"example": "Let's enjoy together.",
				"exampleZh": "让我们一起享受吧。"
			},
			{
				"id": 1234,
				"en": "enough",
				"zh": "足够的",
				"phonetic": "/ʌf/",
				"example": "The result is quite enough.",
				"exampleZh": "结果是相当足够的的。"
			},
			{
				"id": 1235,
				"en": "enter",
				"zh": "进入",
				"phonetic": "/ər/",
				"example": "I need to enter before the deadline.",
				"exampleZh": "我需要在截止日期前进入。"
			},
			{
				"id": 1236,
				"en": "even",
				"zh": "甚至",
				"phonetic": "/.../",
				"example": "She even agreed with us.",
				"exampleZh": "她甚至地同意了我们的意见。"
			},
			{
				"id": 1237,
				"en": "evening",
				"zh": "晚上",
				"phonetic": "/ɪŋ/",
				"example": "I really like the evening.",
				"exampleZh": "我真的很喜欢这个晚上。"
			},
			{
				"id": 1238,
				"en": "ever",
				"zh": "曾经",
				"phonetic": "/ər/",
				"example": "He spoke ever to the audience.",
				"exampleZh": "他曾经地对观众说话。"
			},
			{
				"id": 1239,
				"en": "every",
				"zh": "每个",
				"phonetic": "/.../",
				"example": "The result is quite every.",
				"exampleZh": "结果是相当每个的。"
			},
			{
				"id": 1240,
				"en": "everyone",
				"zh": "每个人",
				"phonetic": "/.../",
				"example": "I think everyone is important.",
				"exampleZh": "我认为每个人很重要。"
			},
			{
				"id": 1241,
				"en": "everything",
				"zh": "一切",
				"phonetic": "/ɪŋ/",
				"example": "Let's talk about everything.",
				"exampleZh": "让我们来谈谈一切吧。"
			},
			{
				"id": 1242,
				"en": "exam",
				"zh": "考试",
				"phonetic": "/.../",
				"example": "I really like the exam.",
				"exampleZh": "我真的很喜欢这个考试。"
			},
			{
				"id": 1243,
				"en": "example",
				"zh": "例子",
				"phonetic": "/.../",
				"example": "The example is very useful.",
				"exampleZh": "例子非常有用。"
			},
			{
				"id": 1244,
				"en": "except",
				"zh": "除了",
				"phonetic": "/.../",
				"example": "I think except is important.",
				"exampleZh": "我认为除了很重要。"
			},
			{
				"id": 1245,
				"en": "excited",
				"zh": "兴奋的",
				"phonetic": "/d/",
				"example": "He found the task excited.",
				"exampleZh": "他发现这个任务是兴奋的的。"
			},
			{
				"id": 1246,
				"en": "excuse",
				"zh": "原谅",
				"phonetic": "/.../",
				"example": "We should excuse more carefully.",
				"exampleZh": "我们应该更仔细地原谅。"
			},
			{
				"id": 1247,
				"en": "exercise",
				"zh": "练习",
				"phonetic": "/.../",
				"example": "I really like the exercise.",
				"exampleZh": "我真的很喜欢这个练习。"
			},
			{
				"id": 1248,
				"en": "expensive",
				"zh": "昂贵的",
				"phonetic": "/.../",
				"example": "It's a expensive idea.",
				"exampleZh": "这是一个昂贵的的主意。"
			},
			{
				"id": 1249,
				"en": "eye",
				"zh": "眼睛",
				"phonetic": "/.../",
				"example": "Do you understand this eye?",
				"exampleZh": "你理解这个眼睛吗？"
			},
			{
				"id": 1250,
				"en": "face",
				"zh": "脸",
				"phonetic": "/.../",
				"example": "face plays a key role in our life.",
				"exampleZh": "脸在我们的生活中起着关键作用。"
			},
			{
				"id": 1251,
				"en": "fact",
				"zh": "事实",
				"phonetic": "/.../",
				"example": "This is an important fact.",
				"exampleZh": "这是一个重要的事实。"
			},
			{
				"id": 1252,
				"en": "fail",
				"zh": "失败",
				"phonetic": "/eɪ/",
				"example": "She wants to fail this task.",
				"exampleZh": "她想失败这个任务。"
			},
			{
				"id": 1253,
				"en": "fair",
				"zh": "公平的",
				"phonetic": "/eɪ/",
				"example": "It's a fair idea.",
				"exampleZh": "这是一个公平的的主意。"
			},
			{
				"id": 1254,
				"en": "fall",
				"zh": "落下；秋天",
				"phonetic": "/.../",
				"example": "They decided to fall the plan.",
				"exampleZh": "他们决定落下；秋天这个计划。"
			},
			{
				"id": 1255,
				"en": "family",
				"zh": "家庭",
				"phonetic": "/li/",
				"example": "family plays a key role in our life.",
				"exampleZh": "家庭在我们的生活中起着关键作用。"
			},
			{
				"id": 1256,
				"en": "famous",
				"zh": "著名的",
				"phonetic": "/əs/",
				"example": "This is very famous.",
				"exampleZh": "这非常著名的。"
			},
			{
				"id": 1257,
				"en": "fan",
				"zh": "风扇",
				"phonetic": "/.../",
				"example": "I really like the fan.",
				"exampleZh": "我真的很喜欢这个风扇。"
			},
			{
				"id": 1258,
				"en": "far",
				"zh": "远的",
				"phonetic": "/ɑːr/",
				"example": "It's a far idea.",
				"exampleZh": "这是一个远的的主意。"
			},
			{
				"id": 1259,
				"en": "farm",
				"zh": "农场",
				"phonetic": "/.../",
				"example": "Do you understand this farm?",
				"exampleZh": "你理解这个农场吗？"
			},
			{
				"id": 1260,
				"en": "farmer",
				"zh": "农民",
				"phonetic": "/ər/",
				"example": "farmer plays a key role in our life.",
				"exampleZh": "农民在我们的生活中起着关键作用。"
			},
			{
				"id": 1261,
				"en": "fast",
				"zh": "快的",
				"phonetic": "/.../",
				"example": "This is very fast.",
				"exampleZh": "这非常快的。"
			},
			{
				"id": 1262,
				"en": "fat",
				"zh": "胖的",
				"phonetic": "/.../",
				"example": "She looks fat today.",
				"exampleZh": "她今天看起来很胖的。"
			},
			{
				"id": 1263,
				"en": "father",
				"zh": "父亲",
				"phonetic": "/ər/",
				"example": "The father is very useful.",
				"exampleZh": "父亲非常有用。"
			},
			{
				"id": 1264,
				"en": "favorite",
				"zh": "最喜欢的",
				"phonetic": "/.../",
				"example": "The result is quite favorite.",
				"exampleZh": "结果是相当最喜欢的的。"
			},
			{
				"id": 1265,
				"en": "February",
				"zh": "二月",
				"phonetic": "/.../",
				"example": "February plays a key role in our life.",
				"exampleZh": "二月在我们的生活中起着关键作用。"
			},
			{
				"id": 1266,
				"en": "feed",
				"zh": "喂养",
				"phonetic": "/d/",
				"example": "We should feed more carefully.",
				"exampleZh": "我们应该更仔细地喂养。"
			},
			{
				"id": 1267,
				"en": "feel",
				"zh": "感觉",
				"phonetic": "/iː/",
				"example": "She wants to feel this task.",
				"exampleZh": "她想感觉这个任务。"
			},
			{
				"id": 1268,
				"en": "festival",
				"zh": "节日",
				"phonetic": "/.../",
				"example": "The festival is very useful.",
				"exampleZh": "节日非常有用。"
			},
			{
				"id": 1269,
				"en": "few",
				"zh": "很少的",
				"phonetic": "/.../",
				"example": "The result is quite few.",
				"exampleZh": "结果是相当很少的的。"
			},
			{
				"id": 1270,
				"en": "fifteen",
				"zh": "十五",
				"phonetic": "/iː/",
				"example": "I think fifteen is important.",
				"exampleZh": "我认为十五很重要。"
			},
			{
				"id": 1271,
				"en": "fifth",
				"zh": "第五",
				"phonetic": "/θ/",
				"example": "Let's talk about fifth.",
				"exampleZh": "让我们来谈谈第五吧。"
			},
			{
				"id": 1272,
				"en": "fifty",
				"zh": "五十",
				"phonetic": "/.../",
				"example": "I think fifty is important.",
				"exampleZh": "我认为五十很重要。"
			},
			{
				"id": 1273,
				"en": "fill",
				"zh": "填满",
				"phonetic": "/.../",
				"example": "Let's fill together.",
				"exampleZh": "让我们一起填满吧。"
			},
			{
				"id": 1274,
				"en": "film",
				"zh": "电影",
				"phonetic": "/.../",
				"example": "Do you understand this film?",
				"exampleZh": "你理解这个电影吗？"
			},
			{
				"id": 1275,
				"en": "find",
				"zh": "找到",
				"phonetic": "/.../",
				"example": "I need to find before the deadline.",
				"exampleZh": "我需要在截止日期前找到。"
			},
			{
				"id": 1276,
				"en": "fine",
				"zh": "好的",
				"phonetic": "/.../",
				"example": "This is very fine.",
				"exampleZh": "这非常好的。"
			},
			{
				"id": 1277,
				"en": "finger",
				"zh": "手指",
				"phonetic": "/ər/",
				"example": "I really like the finger.",
				"exampleZh": "我真的很喜欢这个手指。"
			},
			{
				"id": 1278,
				"en": "finish",
				"zh": "完成",
				"phonetic": "/ʃ/",
				"example": "Let's finish together.",
				"exampleZh": "让我们一起完成吧。"
			},
			{
				"id": 1279,
				"en": "fire",
				"zh": "火",
				"phonetic": "/.../",
				"example": "Do you understand this fire?",
				"exampleZh": "你理解这个火吗？"
			},
			{
				"id": 1280,
				"en": "first",
				"zh": "第一",
				"phonetic": "/.../",
				"example": "I think first is important.",
				"exampleZh": "我认为第一很重要。"
			},
			{
				"id": 1281,
				"en": "fish",
				"zh": "鱼",
				"phonetic": "/ʃ/",
				"example": "This is an important fish.",
				"exampleZh": "这是一个重要的鱼。"
			},
			{
				"id": 1282,
				"en": "five",
				"zh": "五",
				"phonetic": "/.../",
				"example": "I think five is important.",
				"exampleZh": "我认为五很重要。"
			},
			{
				"id": 1283,
				"en": "flag",
				"zh": "旗子",
				"phonetic": "/.../",
				"example": "The flag is very useful.",
				"exampleZh": "旗子非常有用。"
			},
			{
				"id": 1284,
				"en": "flat",
				"zh": "平的；公寓",
				"phonetic": "/.../",
				"example": "The result is quite flat.",
				"exampleZh": "结果是相当平的；公寓的。"
			},
			{
				"id": 1285,
				"en": "floor",
				"zh": "地板",
				"phonetic": "/ər/",
				"example": "floor plays a key role in our life.",
				"exampleZh": "地板在我们的生活中起着关键作用。"
			},
			{
				"id": 1286,
				"en": "flower",
				"zh": "花",
				"phonetic": "/ər/",
				"example": "This is an important flower.",
				"exampleZh": "这是一个重要的花。"
			},
			{
				"id": 1287,
				"en": "fly",
				"zh": "飞",
				"phonetic": "/li/",
				"example": "She wants to fly this task.",
				"exampleZh": "她想飞这个任务。"
			},
			{
				"id": 1288,
				"en": "follow",
				"zh": "跟随",
				"phonetic": "/aʊ/",
				"example": "Let's follow together.",
				"exampleZh": "让我们一起跟随吧。"
			},
			{
				"id": 1289,
				"en": "food",
				"zh": "食物",
				"phonetic": "/uː/",
				"example": "Do you understand this food?",
				"exampleZh": "你理解这个食物吗？"
			},
			{
				"id": 1290,
				"en": "foot",
				"zh": "脚",
				"phonetic": "/uː/",
				"example": "foot plays a key role in our life.",
				"exampleZh": "脚在我们的生活中起着关键作用。"
			},
			{
				"id": 1291,
				"en": "football",
				"zh": "足球",
				"phonetic": "/uː/",
				"example": "This is an important football.",
				"exampleZh": "这是一个重要的足球。"
			},
			{
				"id": 1292,
				"en": "for",
				"zh": "为了",
				"phonetic": "/ər/",
				"example": "I think for is important.",
				"exampleZh": "我认为为了很重要。"
			},
			{
				"id": 1293,
				"en": "forest",
				"zh": "森林",
				"phonetic": "/.../",
				"example": "The forest is very useful.",
				"exampleZh": "森林非常有用。"
			},
			{
				"id": 1294,
				"en": "forget",
				"zh": "忘记",
				"phonetic": "/.../",
				"example": "They decided to forget the plan.",
				"exampleZh": "他们决定忘记这个计划。"
			},
			{
				"id": 1295,
				"en": "fork",
				"zh": "叉子",
				"phonetic": "/.../",
				"example": "fork plays a key role in our life.",
				"exampleZh": "叉子在我们的生活中起着关键作用。"
			},
			{
				"id": 1296,
				"en": "forty",
				"zh": "四十",
				"phonetic": "/.../",
				"example": "I think forty is important.",
				"exampleZh": "我认为四十很重要。"
			},
			{
				"id": 1297,
				"en": "four",
				"zh": "四",
				"phonetic": "/aʊ/",
				"example": "Let's talk about four.",
				"exampleZh": "让我们来谈谈四吧。"
			},
			{
				"id": 1298,
				"en": "fourteen",
				"zh": "十四",
				"phonetic": "/iː/",
				"example": "I think fourteen is important.",
				"exampleZh": "我认为十四很重要。"
			},
			{
				"id": 1299,
				"en": "fourth",
				"zh": "第四",
				"phonetic": "/θ/",
				"example": "Let's talk about fourth.",
				"exampleZh": "让我们来谈谈第四吧。"
			},
			{
				"id": 1300,
				"en": "fox",
				"zh": "狐狸",
				"phonetic": "/.../",
				"example": "fox plays a key role in our life.",
				"exampleZh": "狐狸在我们的生活中起着关键作用。"
			},
			{
				"id": 1301,
				"en": "free",
				"zh": "自由的；免费的",
				"phonetic": "/iː/",
				"example": "This is very free.",
				"exampleZh": "这非常自由的；免费的。"
			},
			{
				"id": 1302,
				"en": "fresh",
				"zh": "新鲜的",
				"phonetic": "/ʃ/",
				"example": "She looks fresh today.",
				"exampleZh": "她今天看起来很新鲜的。"
			},
			{
				"id": 1303,
				"en": "Friday",
				"zh": "周五",
				"phonetic": "/eɪ/",
				"example": "The Friday is very useful.",
				"exampleZh": "周五非常有用。"
			},
			{
				"id": 1304,
				"en": "fridge",
				"zh": "冰箱",
				"phonetic": "/.../",
				"example": "Do you understand this fridge?",
				"exampleZh": "你理解这个冰箱吗？"
			},
			{
				"id": 1305,
				"en": "friend",
				"zh": "朋友",
				"phonetic": "/.../",
				"example": "friend plays a key role in our life.",
				"exampleZh": "朋友在我们的生活中起着关键作用。"
			},
			{
				"id": 1306,
				"en": "friendly",
				"zh": "友好的",
				"phonetic": "/li/",
				"example": "This is very friendly.",
				"exampleZh": "这非常友好的。"
			},
			{
				"id": 1307,
				"en": "from",
				"zh": "从",
				"phonetic": "/.../",
				"example": "Let's talk about from.",
				"exampleZh": "让我们来谈谈从吧。"
			},
			{
				"id": 1308,
				"en": "front",
				"zh": "前面",
				"phonetic": "/.../",
				"example": "The front is very useful.",
				"exampleZh": "前面非常有用。"
			},
			{
				"id": 1309,
				"en": "fruit",
				"zh": "水果",
				"phonetic": "/.../",
				"example": "Do you understand this fruit?",
				"exampleZh": "你理解这个水果吗？"
			},
			{
				"id": 1310,
				"en": "full",
				"zh": "满的",
				"phonetic": "/.../",
				"example": "He found the task full.",
				"exampleZh": "他发现这个任务是满的的。"
			},
			{
				"id": 1311,
				"en": "fun",
				"zh": "有趣的",
				"phonetic": "/.../",
				"example": "This is very fun.",
				"exampleZh": "这非常有趣的。"
			},
			{
				"id": 1312,
				"en": "funny",
				"zh": "滑稽的",
				"phonetic": "/.../",
				"example": "She looks funny today.",
				"exampleZh": "她今天看起来很滑稽的。"
			},
			{
				"id": 1313,
				"en": "future",
				"zh": "未来",
				"phonetic": "/tʃər/",
				"example": "The future is very useful.",
				"exampleZh": "未来非常有用。"
			},
			{
				"id": 1314,
				"en": "game",
				"zh": "游戏",
				"phonetic": "/.../",
				"example": "Do you understand this game?",
				"exampleZh": "你理解这个游戏吗？"
			},
			{
				"id": 1315,
				"en": "garden",
				"zh": "花园",
				"phonetic": "/.../",
				"example": "garden plays a key role in our life.",
				"exampleZh": "花园在我们的生活中起着关键作用。"
			},
			{
				"id": 1316,
				"en": "gate",
				"zh": "大门",
				"phonetic": "/.../",
				"example": "This is an important gate.",
				"exampleZh": "这是一个重要的大门。"
			},
			{
				"id": 1317,
				"en": "get",
				"zh": "得到",
				"phonetic": "/.../",
				"example": "She wants to get this task.",
				"exampleZh": "她想得到这个任务。"
			},
			{
				"id": 1318,
				"en": "gift",
				"zh": "礼物",
				"phonetic": "/.../",
				"example": "The gift is very useful.",
				"exampleZh": "礼物非常有用。"
			},
			{
				"id": 1319,
				"en": "girl",
				"zh": "女孩",
				"phonetic": "/.../",
				"example": "Do you understand this girl?",
				"exampleZh": "你理解这个女孩吗？"
			},
			{
				"id": 1320,
				"en": "give",
				"zh": "给",
				"phonetic": "/.../",
				"example": "I need to give before the deadline.",
				"exampleZh": "我需要在截止日期前给。"
			},
			{
				"id": 1321,
				"en": "glad",
				"zh": "高兴的",
				"phonetic": "/.../",
				"example": "This is very glad.",
				"exampleZh": "这非常高兴的。"
			},
			{
				"id": 1322,
				"en": "glass",
				"zh": "玻璃",
				"phonetic": "/.../",
				"example": "I really like the glass.",
				"exampleZh": "我真的很喜欢这个玻璃。"
			},
			{
				"id": 1323,
				"en": "glove",
				"zh": "手套",
				"phonetic": "/.../",
				"example": "The glove is very useful.",
				"exampleZh": "手套非常有用。"
			},
			{
				"id": 1324,
				"en": "go",
				"zh": "去",
				"phonetic": "/.../",
				"example": "They decided to go the plan.",
				"exampleZh": "他们决定去这个计划。"
			},
			{
				"id": 1325,
				"en": "goat",
				"zh": "山羊",
				"phonetic": "/oʊ/",
				"example": "goat plays a key role in our life.",
				"exampleZh": "山羊在我们的生活中起着关键作用。"
			},
			{
				"id": 1326,
				"en": "god",
				"zh": "上帝",
				"phonetic": "/.../",
				"example": "This is an important god.",
				"exampleZh": "这是一个重要的上帝。"
			},
			{
				"id": 1327,
				"en": "gold",
				"zh": "金子",
				"phonetic": "/.../",
				"example": "I really like the gold.",
				"exampleZh": "我真的很喜欢这个金子。"
			},
			{
				"id": 1328,
				"en": "good",
				"zh": "好的",
				"phonetic": "/uː/",
				"example": "It's a good idea.",
				"exampleZh": "这是一个好的的主意。"
			},
			{
				"id": 1329,
				"en": "goodbye",
				"zh": "再见",
				"phonetic": "/uː/",
				"example": "Let's talk about goodbye.",
				"exampleZh": "让我们来谈谈再见吧。"
			},
			{
				"id": 1330,
				"en": "grade",
				"zh": "年级",
				"phonetic": "/.../",
				"example": "grade plays a key role in our life.",
				"exampleZh": "年级在我们的生活中起着关键作用。"
			},
			{
				"id": 1331,
				"en": "grandfather",
				"zh": "爷爷",
				"phonetic": "/ər/",
				"example": "This is an important grandfather.",
				"exampleZh": "这是一个重要的爷爷。"
			},
			{
				"id": 1332,
				"en": "grandmother",
				"zh": "奶奶",
				"phonetic": "/ər/",
				"example": "I really like the grandmother.",
				"exampleZh": "我真的很喜欢这个奶奶。"
			},
			{
				"id": 1333,
				"en": "grass",
				"zh": "草",
				"phonetic": "/.../",
				"example": "The grass is very useful.",
				"exampleZh": "草非常有用。"
			},
			{
				"id": 1334,
				"en": "great",
				"zh": "伟大的",
				"phonetic": "/iː/",
				"example": "The result is quite great.",
				"exampleZh": "结果是相当伟大的的。"
			},
			{
				"id": 1335,
				"en": "green",
				"zh": "绿色的",
				"phonetic": "/iː/",
				"example": "He found the task green.",
				"exampleZh": "他发现这个任务是绿色的的。"
			},
			{
				"id": 1336,
				"en": "ground",
				"zh": "地面",
				"phonetic": "/aʊ/",
				"example": "This is an important ground.",
				"exampleZh": "这是一个重要的地面。"
			},
			{
				"id": 1337,
				"en": "group",
				"zh": "群组",
				"phonetic": "/aʊ/",
				"example": "I really like the group.",
				"exampleZh": "我真的很喜欢这个群组。"
			},
			{
				"id": 1338,
				"en": "grow",
				"zh": "成长",
				"phonetic": "/aʊ/",
				"example": "Let's grow together.",
				"exampleZh": "让我们一起成长吧。"
			},
			{
				"id": 1339,
				"en": "guess",
				"zh": "猜测",
				"phonetic": "/.../",
				"example": "They decided to guess the plan.",
				"exampleZh": "他们决定猜测这个计划。"
			},
			{
				"id": 1340,
				"en": "gun",
				"zh": "枪",
				"phonetic": "/.../",
				"example": "gun plays a key role in our life.",
				"exampleZh": "枪在我们的生活中起着关键作用。"
			},
			{
				"id": 1341,
				"en": "hair",
				"zh": "头发",
				"phonetic": "/eɪ/",
				"example": "This is an important hair.",
				"exampleZh": "这是一个重要的头发。"
			},
			{
				"id": 1342,
				"en": "half",
				"zh": "一半",
				"phonetic": "/.../",
				"example": "I really like the half.",
				"exampleZh": "我真的很喜欢这个一半。"
			},
			{
				"id": 1343,
				"en": "hall",
				"zh": "大厅",
				"phonetic": "/.../",
				"example": "The hall is very useful.",
				"exampleZh": "大厅非常有用。"
			},
			{
				"id": 1344,
				"en": "hand",
				"zh": "手",
				"phonetic": "/.../",
				"example": "Do you understand this hand?",
				"exampleZh": "你理解这个手吗？"
			},
			{
				"id": 1345,
				"en": "happen",
				"zh": "发生",
				"phonetic": "/.../",
				"example": "I need to happen before the deadline.",
				"exampleZh": "我需要在截止日期前发生。"
			},
			{
				"id": 1346,
				"en": "happy",
				"zh": "快乐的",
				"phonetic": "/.../",
				"example": "This is very happy.",
				"exampleZh": "这非常快乐的。"
			},
			{
				"id": 1347,
				"en": "hard",
				"zh": "困难的；硬的",
				"phonetic": "/.../",
				"example": "She looks hard today.",
				"exampleZh": "她今天看起来很困难的；硬的。"
			},
			{
				"id": 1348,
				"en": "hat",
				"zh": "帽子",
				"phonetic": "/.../",
				"example": "The hat is very useful.",
				"exampleZh": "帽子非常有用。"
			},
			{
				"id": 1349,
				"en": "hate",
				"zh": "讨厌",
				"phonetic": "/.../",
				"example": "They decided to hate the plan.",
				"exampleZh": "他们决定讨厌这个计划。"
			},
			{
				"id": 1350,
				"en": "have",
				"zh": "有",
				"phonetic": "/.../",
				"example": "I need to have before the deadline.",
				"exampleZh": "我需要在截止日期前有。"
			},
			{
				"id": 1351,
				"en": "he",
				"zh": "他",
				"phonetic": "/.../",
				"example": "Let's talk about he.",
				"exampleZh": "让我们来谈谈他吧。"
			},
			{
				"id": 1352,
				"en": "head",
				"zh": "头",
				"phonetic": "/iː/",
				"example": "I really like the head.",
				"exampleZh": "我真的很喜欢这个头。"
			},
			{
				"id": 1353,
				"en": "healthy",
				"zh": "健康的",
				"phonetic": "/iː/",
				"example": "It's a healthy idea.",
				"exampleZh": "这是一个健康的的主意。"
			},
			{
				"id": 1354,
				"en": "hear",
				"zh": "听到",
				"phonetic": "/ɑːr/",
				"example": "They decided to hear the plan.",
				"exampleZh": "他们决定听到这个计划。"
			},
			{
				"id": 1355,
				"en": "heart",
				"zh": "心",
				"phonetic": "/iː/",
				"example": "heart plays a key role in our life.",
				"exampleZh": "心在我们的生活中起着关键作用。"
			},
			{
				"id": 1356,
				"en": "heavy",
				"zh": "重的",
				"phonetic": "/iː/",
				"example": "This is very heavy.",
				"exampleZh": "这非常重的。"
			},
			{
				"id": 1357,
				"en": "hello",
				"zh": "你好",
				"phonetic": "/.../",
				"example": "Let's talk about hello.",
				"exampleZh": "让我们来谈谈你好吧。"
			},
			{
				"id": 1358,
				"en": "help",
				"zh": "帮助",
				"phonetic": "/.../",
				"example": "Let's help together.",
				"exampleZh": "让我们一起帮助吧。"
			},
			{
				"id": 1359,
				"en": "her",
				"zh": "她的",
				"phonetic": "/ər/",
				"example": "Let's talk about her.",
				"exampleZh": "让我们来谈谈她的吧。"
			},
			{
				"id": 1360,
				"en": "here",
				"zh": "这里",
				"phonetic": "/.../",
				"example": "They worked here on the project.",
				"exampleZh": "他们这里地在这个项目上工作。"
			},
			{
				"id": 1361,
				"en": "hers",
				"zh": "她的东西",
				"phonetic": "/.../",
				"example": "Let's talk about hers.",
				"exampleZh": "让我们来谈谈她的东西吧。"
			},
			{
				"id": 1362,
				"en": "herself",
				"zh": "她自己",
				"phonetic": "/.../",
				"example": "I think herself is important.",
				"exampleZh": "我认为她自己很重要。"
			},
			{
				"id": 1363,
				"en": "hi",
				"zh": "嗨",
				"phonetic": "/.../",
				"example": "Let's talk about hi.",
				"exampleZh": "让我们来谈谈嗨吧。"
			},
			{
				"id": 1364,
				"en": "high",
				"zh": "高的",
				"phonetic": "/f/",
				"example": "The result is quite high.",
				"exampleZh": "结果是相当高的的。"
			},
			{
				"id": 1365,
				"en": "hill",
				"zh": "小山",
				"phonetic": "/.../",
				"example": "hill plays a key role in our life.",
				"exampleZh": "小山在我们的生活中起着关键作用。"
			},
			{
				"id": 1366,
				"en": "him",
				"zh": "他（宾格）",
				"phonetic": "/.../",
				"example": "I think him is important.",
				"exampleZh": "我认为他（宾格）很重要。"
			},
			{
				"id": 1367,
				"en": "himself",
				"zh": "他自己",
				"phonetic": "/.../",
				"example": "Let's talk about himself.",
				"exampleZh": "让我们来谈谈他自己吧。"
			},
			{
				"id": 1368,
				"en": "his",
				"zh": "他的",
				"phonetic": "/.../",
				"example": "I think his is important.",
				"exampleZh": "我认为他的很重要。"
			},
			{
				"id": 1369,
				"en": "history",
				"zh": "历史",
				"phonetic": "/.../",
				"example": "Do you understand this history?",
				"exampleZh": "你理解这个历史吗？"
			},
			{
				"id": 1370,
				"en": "hit",
				"zh": "打",
				"phonetic": "/.../",
				"example": "I need to hit before the deadline.",
				"exampleZh": "我需要在截止日期前打。"
			},
			{
				"id": 1371,
				"en": "hobby",
				"zh": "爱好",
				"phonetic": "/.../",
				"example": "This is an important hobby.",
				"exampleZh": "这是一个重要的爱好。"
			},
			{
				"id": 1372,
				"en": "hold",
				"zh": "握住",
				"phonetic": "/.../",
				"example": "She wants to hold this task.",
				"exampleZh": "她想握住这个任务。"
			},
			{
				"id": 1373,
				"en": "hole",
				"zh": "洞",
				"phonetic": "/.../",
				"example": "The hole is very useful.",
				"exampleZh": "洞非常有用。"
			},
			{
				"id": 1374,
				"en": "holiday",
				"zh": "假日",
				"phonetic": "/eɪ/",
				"example": "Do you understand this holiday?",
				"exampleZh": "你理解这个假日吗？"
			},
			{
				"id": 1375,
				"en": "home",
				"zh": "家",
				"phonetic": "/.../",
				"example": "home plays a key role in our life.",
				"exampleZh": "家在我们的生活中起着关键作用。"
			},
			{
				"id": 1376,
				"en": "homework",
				"zh": "作业",
				"phonetic": "/.../",
				"example": "This is an important homework.",
				"exampleZh": "这是一个重要的作业。"
			},
			{
				"id": 1377,
				"en": "hope",
				"zh": "希望",
				"phonetic": "/.../",
				"example": "She wants to hope this task.",
				"exampleZh": "她想希望这个任务。"
			},
			{
				"id": 1378,
				"en": "horse",
				"zh": "马",
				"phonetic": "/.../",
				"example": "The horse is very useful.",
				"exampleZh": "马非常有用。"
			},
			{
				"id": 1379,
				"en": "hospital",
				"zh": "医院",
				"phonetic": "/.../",
				"example": "Do you understand this hospital?",
				"exampleZh": "你理解这个医院吗？"
			},
			{
				"id": 1380,
				"en": "hot",
				"zh": "热的",
				"phonetic": "/.../",
				"example": "He found the task hot.",
				"exampleZh": "他发现这个任务是热的的。"
			},
			{
				"id": 1381,
				"en": "hotel",
				"zh": "酒店",
				"phonetic": "/.../",
				"example": "This is an important hotel.",
				"exampleZh": "这是一个重要的酒店。"
			},
			{
				"id": 1382,
				"en": "hour",
				"zh": "小时",
				"phonetic": "/aʊ/",
				"example": "I really like the hour.",
				"exampleZh": "我真的很喜欢这个小时。"
			},
			{
				"id": 1383,
				"en": "house",
				"zh": "房子",
				"phonetic": "/aʊ/",
				"example": "The house is very useful.",
				"exampleZh": "房子非常有用。"
			},
			{
				"id": 1384,
				"en": "how",
				"zh": "怎样",
				"phonetic": "/aʊ/",
				"example": "They worked how on the project.",
				"exampleZh": "他们怎样地在这个项目上工作。"
			},
			{
				"id": 1385,
				"en": "hundred",
				"zh": "一百",
				"phonetic": "/d/",
				"example": "Let's talk about hundred.",
				"exampleZh": "让我们来谈谈一百吧。"
			},
			{
				"id": 1386,
				"en": "hungry",
				"zh": "饿的",
				"phonetic": "/.../",
				"example": "This is very hungry.",
				"exampleZh": "这非常饿的。"
			},
			{
				"id": 1387,
				"en": "hurry",
				"zh": "赶快",
				"phonetic": "/.../",
				"example": "She wants to hurry this task.",
				"exampleZh": "她想赶快这个任务。"
			},
			{
				"id": 1388,
				"en": "hurt",
				"zh": "受伤",
				"phonetic": "/.../",
				"example": "Let's hurt together.",
				"exampleZh": "让我们一起受伤吧。"
			},
			{
				"id": 1389,
				"en": "husband",
				"zh": "丈夫",
				"phonetic": "/.../",
				"example": "Do you understand this husband?",
				"exampleZh": "你理解这个丈夫吗？"
			},
			{
				"id": 1390,
				"en": "I",
				"zh": "我",
				"phonetic": "/.../",
				"example": "I think I is important.",
				"exampleZh": "我认为我很重要。"
			},
			{
				"id": 1391,
				"en": "ice",
				"zh": "冰",
				"phonetic": "/.../",
				"example": "This is an important ice.",
				"exampleZh": "这是一个重要的冰。"
			},
			{
				"id": 1392,
				"en": "idea",
				"zh": "主意",
				"phonetic": "/iː/",
				"example": "I really like the idea.",
				"exampleZh": "我真的很喜欢这个主意。"
			},
			{
				"id": 1393,
				"en": "if",
				"zh": "如果",
				"phonetic": "/.../",
				"example": "Let's talk about if.",
				"exampleZh": "让我们来谈谈如果吧。"
			},
			{
				"id": 1394,
				"en": "ill",
				"zh": "生病的",
				"phonetic": "/.../",
				"example": "The result is quite ill.",
				"exampleZh": "结果是相当生病的的。"
			},
			{
				"id": 1395,
				"en": "important",
				"zh": "重要的",
				"phonetic": "/.../",
				"example": "He found the task important.",
				"exampleZh": "他发现这个任务是重要的的。"
			},
			{
				"id": 1396,
				"en": "in",
				"zh": "在...里面",
				"phonetic": "/.../",
				"example": "I think in is important.",
				"exampleZh": "我认为在...里面很重要。"
			},
			{
				"id": 1397,
				"en": "inside",
				"zh": "在里面",
				"phonetic": "/.../",
				"example": "Let's talk about inside.",
				"exampleZh": "让我们来谈谈在里面吧。"
			},
			{
				"id": 1398,
				"en": "interest",
				"zh": "兴趣",
				"phonetic": "/.../",
				"example": "The interest is very useful.",
				"exampleZh": "兴趣非常有用。"
			},
			{
				"id": 1399,
				"en": "interesting",
				"zh": "有趣的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite interesting.",
				"exampleZh": "结果是相当有趣的的。"
			},
			{
				"id": 1400,
				"en": "internet",
				"zh": "互联网",
				"phonetic": "/.../",
				"example": "internet plays a key role in our life.",
				"exampleZh": "互联网在我们的生活中起着关键作用。"
			},
			{
				"id": 1401,
				"en": "into",
				"zh": "进入",
				"phonetic": "/.../",
				"example": "Let's talk about into.",
				"exampleZh": "让我们来谈谈进入吧。"
			},
			{
				"id": 1402,
				"en": "island",
				"zh": "岛屿",
				"phonetic": "/.../",
				"example": "I really like the island.",
				"exampleZh": "我真的很喜欢这个岛屿。"
			},
			{
				"id": 1403,
				"en": "it",
				"zh": "它",
				"phonetic": "/.../",
				"example": "Let's talk about it.",
				"exampleZh": "让我们来谈谈它吧。"
			},
			{
				"id": 1404,
				"en": "its",
				"zh": "它的",
				"phonetic": "/.../",
				"example": "I think its is important.",
				"exampleZh": "我认为它的很重要。"
			},
			{
				"id": 1405,
				"en": "itself",
				"zh": "它自己",
				"phonetic": "/.../",
				"example": "Let's talk about itself.",
				"exampleZh": "让我们来谈谈它自己吧。"
			},
			{
				"id": 1406,
				"en": "jacket",
				"zh": "夹克",
				"phonetic": "/.../",
				"example": "This is an important jacket.",
				"exampleZh": "这是一个重要的夹克。"
			},
			{
				"id": 1407,
				"en": "January",
				"zh": "一月",
				"phonetic": "/.../",
				"example": "I really like the January.",
				"exampleZh": "我真的很喜欢这个一月。"
			},
			{
				"id": 1408,
				"en": "job",
				"zh": "工作",
				"phonetic": "/.../",
				"example": "The job is very useful.",
				"exampleZh": "工作非常有用。"
			},
			{
				"id": 1409,
				"en": "join",
				"zh": "加入",
				"phonetic": "/ɔɪ/",
				"example": "They decided to join the plan.",
				"exampleZh": "他们决定加入这个计划。"
			},
			{
				"id": 1410,
				"en": "juice",
				"zh": "果汁",
				"phonetic": "/.../",
				"example": "juice plays a key role in our life.",
				"exampleZh": "果汁在我们的生活中起着关键作用。"
			},
			{
				"id": 1411,
				"en": "July",
				"zh": "七月",
				"phonetic": "/li/",
				"example": "This is an important July.",
				"exampleZh": "这是一个重要的七月。"
			},
			{
				"id": 1412,
				"en": "jump",
				"zh": "跳",
				"phonetic": "/.../",
				"example": "She wants to jump this task.",
				"exampleZh": "她想跳这个任务。"
			},
			{
				"id": 1413,
				"en": "June",
				"zh": "六月",
				"phonetic": "/.../",
				"example": "The June is very useful.",
				"exampleZh": "六月非常有用。"
			},
			{
				"id": 1414,
				"en": "just",
				"zh": "刚刚",
				"phonetic": "/.../",
				"example": "They worked just on the project.",
				"exampleZh": "他们刚刚地在这个项目上工作。"
			},
			{
				"id": 1415,
				"en": "keep",
				"zh": "保持",
				"phonetic": "/iː/",
				"example": "I need to keep before the deadline.",
				"exampleZh": "我需要在截止日期前保持。"
			},
			{
				"id": 1416,
				"en": "key",
				"zh": "钥匙",
				"phonetic": "/.../",
				"example": "This is an important key.",
				"exampleZh": "这是一个重要的钥匙。"
			},
			{
				"id": 1417,
				"en": "kid",
				"zh": "小孩",
				"phonetic": "/.../",
				"example": "I really like the kid.",
				"exampleZh": "我真的很喜欢这个小孩。"
			},
			{
				"id": 1418,
				"en": "kill",
				"zh": "杀",
				"phonetic": "/.../",
				"example": "Let's kill together.",
				"exampleZh": "让我们一起杀吧。"
			},
			{
				"id": 1419,
				"en": "kind",
				"zh": "种类；善良的",
				"phonetic": "/.../",
				"example": "Do you understand this kind?",
				"exampleZh": "你理解这个种类；善良的吗？"
			},
			{
				"id": 1420,
				"en": "king",
				"zh": "国王",
				"phonetic": "/ɪŋ/",
				"example": "king plays a key role in our life.",
				"exampleZh": "国王在我们的生活中起着关键作用。"
			},
			{
				"id": 1421,
				"en": "kiss",
				"zh": "亲吻",
				"phonetic": "/.../",
				"example": "We should kiss more carefully.",
				"exampleZh": "我们应该更仔细地亲吻。"
			},
			{
				"id": 1422,
				"en": "kitchen",
				"zh": "厨房",
				"phonetic": "/.../",
				"example": "I really like the kitchen.",
				"exampleZh": "我真的很喜欢这个厨房。"
			},
			{
				"id": 1423,
				"en": "kite",
				"zh": "风筝",
				"phonetic": "/.../",
				"example": "The kite is very useful.",
				"exampleZh": "风筝非常有用。"
			},
			{
				"id": 1424,
				"en": "knee",
				"zh": "膝盖",
				"phonetic": "/iː/",
				"example": "Do you understand this knee?",
				"exampleZh": "你理解这个膝盖吗？"
			},
			{
				"id": 1425,
				"en": "knife",
				"zh": "刀",
				"phonetic": "/.../",
				"example": "knife plays a key role in our life.",
				"exampleZh": "刀在我们的生活中起着关键作用。"
			},
			{
				"id": 1426,
				"en": "knock",
				"zh": "敲",
				"phonetic": "/k/",
				"example": "We should knock more carefully.",
				"exampleZh": "我们应该更仔细地敲。"
			},
			{
				"id": 1427,
				"en": "know",
				"zh": "知道",
				"phonetic": "/aʊ/",
				"example": "She wants to know this task.",
				"exampleZh": "她想知道这个任务。"
			},
			{
				"id": 1428,
				"en": "lake",
				"zh": "湖",
				"phonetic": "/.../",
				"example": "The lake is very useful.",
				"exampleZh": "湖非常有用。"
			},
			{
				"id": 1429,
				"en": "lamp",
				"zh": "灯",
				"phonetic": "/.../",
				"example": "Do you understand this lamp?",
				"exampleZh": "你理解这个灯吗？"
			},
			{
				"id": 1430,
				"en": "land",
				"zh": "陆地",
				"phonetic": "/.../",
				"example": "land plays a key role in our life.",
				"exampleZh": "陆地在我们的生活中起着关键作用。"
			},
			{
				"id": 1431,
				"en": "large",
				"zh": "大的",
				"phonetic": "/.../",
				"example": "This is very large.",
				"exampleZh": "这非常大的。"
			},
			{
				"id": 1432,
				"en": "last",
				"zh": "最后的",
				"phonetic": "/.../",
				"example": "She looks last today.",
				"exampleZh": "她今天看起来很最后的。"
			},
			{
				"id": 1433,
				"en": "late",
				"zh": "迟的",
				"phonetic": "/.../",
				"example": "It's a late idea.",
				"exampleZh": "这是一个迟的的主意。"
			},
			{
				"id": 1434,
				"en": "later",
				"zh": "后来",
				"phonetic": "/ər/",
				"example": "She later agreed with us.",
				"exampleZh": "她后来地同意了我们的意见。"
			},
			{
				"id": 1435,
				"en": "laugh",
				"zh": "笑",
				"phonetic": "/ɔː/",
				"example": "I need to laugh before the deadline.",
				"exampleZh": "我需要在截止日期前笑。"
			},
			{
				"id": 1436,
				"en": "lazy",
				"zh": "懒惰的",
				"phonetic": "/.../",
				"example": "This is very lazy.",
				"exampleZh": "这非常懒惰的。"
			},
			{
				"id": 1437,
				"en": "leaf",
				"zh": "叶子",
				"phonetic": "/iː/",
				"example": "I really like the leaf.",
				"exampleZh": "我真的很喜欢这个叶子。"
			},
			{
				"id": 1438,
				"en": "learn",
				"zh": "学习",
				"phonetic": "/iː/",
				"example": "Let's learn together.",
				"exampleZh": "让我们一起学习吧。"
			},
			{
				"id": 1439,
				"en": "leave",
				"zh": "离开",
				"phonetic": "/iː/",
				"example": "They decided to leave the plan.",
				"exampleZh": "他们决定离开这个计划。"
			},
			{
				"id": 1440,
				"en": "left",
				"zh": "左边的",
				"phonetic": "/.../",
				"example": "He found the task left.",
				"exampleZh": "他发现这个任务是左边的的。"
			},
			{
				"id": 1441,
				"en": "leg",
				"zh": "腿",
				"phonetic": "/.../",
				"example": "This is an important leg.",
				"exampleZh": "这是一个重要的腿。"
			},
			{
				"id": 1442,
				"en": "lesson",
				"zh": "课",
				"phonetic": "/.../",
				"example": "I really like the lesson.",
				"exampleZh": "我真的很喜欢这个课。"
			},
			{
				"id": 1443,
				"en": "let",
				"zh": "让",
				"phonetic": "/.../",
				"example": "Let's let together.",
				"exampleZh": "让我们一起让吧。"
			},
			{
				"id": 1444,
				"en": "letter",
				"zh": "信；字母",
				"phonetic": "/ər/",
				"example": "Do you understand this letter?",
				"exampleZh": "你理解这个信；字母吗？"
			},
			{
				"id": 1445,
				"en": "library",
				"zh": "图书馆",
				"phonetic": "/.../",
				"example": "library plays a key role in our life.",
				"exampleZh": "图书馆在我们的生活中起着关键作用。"
			},
			{
				"id": 1446,
				"en": "lie",
				"zh": "躺；说谎",
				"phonetic": "/.../",
				"example": "We should lie more carefully.",
				"exampleZh": "我们应该更仔细地躺；说谎。"
			},
			{
				"id": 1447,
				"en": "life",
				"zh": "生活",
				"phonetic": "/.../",
				"example": "I really like the life.",
				"exampleZh": "我真的很喜欢这个生活。"
			},
			{
				"id": 1448,
				"en": "lift",
				"zh": "举起",
				"phonetic": "/.../",
				"example": "Let's lift together.",
				"exampleZh": "让我们一起举起吧。"
			},
			{
				"id": 1449,
				"en": "light",
				"zh": "光；轻的",
				"phonetic": "/aɪt/",
				"example": "Do you understand this light?",
				"exampleZh": "你理解这个光；轻的吗？"
			},
			{
				"id": 1450,
				"en": "like",
				"zh": "喜欢；像",
				"phonetic": "/.../",
				"example": "I need to like before the deadline.",
				"exampleZh": "我需要在截止日期前喜欢；像。"
			},
			{
				"id": 1451,
				"en": "line",
				"zh": "线",
				"phonetic": "/.../",
				"example": "This is an important line.",
				"exampleZh": "这是一个重要的线。"
			},
			{
				"id": 1452,
				"en": "lion",
				"zh": "狮子",
				"phonetic": "/.../",
				"example": "I really like the lion.",
				"exampleZh": "我真的很喜欢这个狮子。"
			},
			{
				"id": 1453,
				"en": "list",
				"zh": "列表",
				"phonetic": "/.../",
				"example": "The list is very useful.",
				"exampleZh": "列表非常有用。"
			},
			{
				"id": 1454,
				"en": "listen",
				"zh": "听",
				"phonetic": "/.../",
				"example": "They decided to listen the plan.",
				"exampleZh": "他们决定听这个计划。"
			},
			{
				"id": 1455,
				"en": "little",
				"zh": "小的",
				"phonetic": "/.../",
				"example": "He found the task little.",
				"exampleZh": "他发现这个任务是小的的。"
			},
			{
				"id": 1456,
				"en": "live",
				"zh": "居住",
				"phonetic": "/.../",
				"example": "We should live more carefully.",
				"exampleZh": "我们应该更仔细地居住。"
			},
			{
				"id": 1457,
				"en": "long",
				"zh": "长的",
				"phonetic": "/.../",
				"example": "She looks long today.",
				"exampleZh": "她今天看起来很长的。"
			},
			{
				"id": 1458,
				"en": "look",
				"zh": "看",
				"phonetic": "/uː/",
				"example": "Let's look together.",
				"exampleZh": "让我们一起看吧。"
			},
			{
				"id": 1459,
				"en": "lose",
				"zh": "丢失",
				"phonetic": "/.../",
				"example": "They decided to lose the plan.",
				"exampleZh": "他们决定丢失这个计划。"
			},
			{
				"id": 1460,
				"en": "lot",
				"zh": "许多",
				"phonetic": "/.../",
				"example": "lot plays a key role in our life.",
				"exampleZh": "许多在我们的生活中起着关键作用。"
			},
			{
				"id": 1461,
				"en": "love",
				"zh": "爱",
				"phonetic": "/.../",
				"example": "We should love more carefully.",
				"exampleZh": "我们应该更仔细地爱。"
			},
			{
				"id": 1462,
				"en": "lovely",
				"zh": "可爱的",
				"phonetic": "/li/",
				"example": "She looks lovely today.",
				"exampleZh": "她今天看起来很可爱的。"
			},
			{
				"id": 1463,
				"en": "low",
				"zh": "低的",
				"phonetic": "/aʊ/",
				"example": "It's a low idea.",
				"exampleZh": "这是一个低的的主意。"
			},
			{
				"id": 1464,
				"en": "luck",
				"zh": "运气",
				"phonetic": "/k/",
				"example": "Do you understand this luck?",
				"exampleZh": "你理解这个运气吗？"
			},
			{
				"id": 1465,
				"en": "lunch",
				"zh": "午餐",
				"phonetic": "/tʃ/",
				"example": "lunch plays a key role in our life.",
				"exampleZh": "午餐在我们的生活中起着关键作用。"
			},
			{
				"id": 1466,
				"en": "machine",
				"zh": "机器",
				"phonetic": "/.../",
				"example": "This is an important machine.",
				"exampleZh": "这是一个重要的机器。"
			},
			{
				"id": 1467,
				"en": "mad",
				"zh": "生气的",
				"phonetic": "/.../",
				"example": "She looks mad today.",
				"exampleZh": "她今天看起来很生气的。"
			},
			{
				"id": 1468,
				"en": "make",
				"zh": "制作",
				"phonetic": "/.../",
				"example": "Let's make together.",
				"exampleZh": "让我们一起制作吧。"
			},
			{
				"id": 1469,
				"en": "man",
				"zh": "男人",
				"phonetic": "/.../",
				"example": "Do you understand this man?",
				"exampleZh": "你理解这个男人吗？"
			},
			{
				"id": 1470,
				"en": "many",
				"zh": "许多",
				"phonetic": "/.../",
				"example": "He found the task many.",
				"exampleZh": "他发现这个任务是许多的。"
			},
			{
				"id": 1471,
				"en": "map",
				"zh": "地图",
				"phonetic": "/.../",
				"example": "This is an important map.",
				"exampleZh": "这是一个重要的地图。"
			},
			{
				"id": 1472,
				"en": "March",
				"zh": "三月",
				"phonetic": "/tʃ/",
				"example": "I really like the March.",
				"exampleZh": "我真的很喜欢这个三月。"
			},
			{
				"id": 1473,
				"en": "market",
				"zh": "市场",
				"phonetic": "/.../",
				"example": "The market is very useful.",
				"exampleZh": "市场非常有用。"
			},
			{
				"id": 1474,
				"en": "match",
				"zh": "比赛；火柴",
				"phonetic": "/tʃ/",
				"example": "Do you understand this match?",
				"exampleZh": "你理解这个比赛；火柴吗？"
			},
			{
				"id": 1475,
				"en": "math",
				"zh": "数学",
				"phonetic": "/θ/",
				"example": "math plays a key role in our life.",
				"exampleZh": "数学在我们的生活中起着关键作用。"
			},
			{
				"id": 1476,
				"en": "May",
				"zh": "五月",
				"phonetic": "/eɪ/",
				"example": "This is an important May.",
				"exampleZh": "这是一个重要的五月。"
			},
			{
				"id": 1477,
				"en": "maybe",
				"zh": "也许",
				"phonetic": "/eɪ/",
				"example": "They worked maybe on the project.",
				"exampleZh": "他们也许地在这个项目上工作。"
			},
			{
				"id": 1478,
				"en": "me",
				"zh": "我（宾格）",
				"phonetic": "/.../",
				"example": "I think me is important.",
				"exampleZh": "我认为我（宾格）很重要。"
			},
			{
				"id": 1479,
				"en": "meal",
				"zh": "一顿饭",
				"phonetic": "/iː/",
				"example": "Do you understand this meal?",
				"exampleZh": "你理解这个一顿饭吗？"
			},
			{
				"id": 1480,
				"en": "mean",
				"zh": "意思是",
				"phonetic": "/iː/",
				"example": "I need to mean before the deadline.",
				"exampleZh": "我需要在截止日期前意思是。"
			},
			{
				"id": 1481,
				"en": "meat",
				"zh": "肉",
				"phonetic": "/iː/",
				"example": "This is an important meat.",
				"exampleZh": "这是一个重要的肉。"
			},
			{
				"id": 1482,
				"en": "medicine",
				"zh": "药",
				"phonetic": "/.../",
				"example": "I really like the medicine.",
				"exampleZh": "我真的很喜欢这个药。"
			},
			{
				"id": 1483,
				"en": "meet",
				"zh": "遇见",
				"phonetic": "/iː/",
				"example": "Let's meet together.",
				"exampleZh": "让我们一起遇见吧。"
			},
			{
				"id": 1484,
				"en": "meeting",
				"zh": "会议",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this meeting?",
				"exampleZh": "你理解这个会议吗？"
			},
			{
				"id": 1485,
				"en": "member",
				"zh": "成员",
				"phonetic": "/ər/",
				"example": "member plays a key role in our life.",
				"exampleZh": "成员在我们的生活中起着关键作用。"
			},
			{
				"id": 1486,
				"en": "menu",
				"zh": "菜单",
				"phonetic": "/.../",
				"example": "This is an important menu.",
				"exampleZh": "这是一个重要的菜单。"
			},
			{
				"id": 1487,
				"en": "milk",
				"zh": "牛奶",
				"phonetic": "/.../",
				"example": "I really like the milk.",
				"exampleZh": "我真的很喜欢这个牛奶。"
			},
			{
				"id": 1488,
				"en": "mind",
				"zh": "介意；头脑",
				"phonetic": "/.../",
				"example": "Let's mind together.",
				"exampleZh": "让我们一起介意；头脑吧。"
			},
			{
				"id": 1489,
				"en": "mine",
				"zh": "我的东西",
				"phonetic": "/.../",
				"example": "Let's talk about mine.",
				"exampleZh": "让我们来谈谈我的东西吧。"
			},
			{
				"id": 1490,
				"en": "minute",
				"zh": "分钟",
				"phonetic": "/.../",
				"example": "minute plays a key role in our life.",
				"exampleZh": "分钟在我们的生活中起着关键作用。"
			},
			{
				"id": 1491,
				"en": "miss",
				"zh": "想念；错过",
				"phonetic": "/.../",
				"example": "We should miss more carefully.",
				"exampleZh": "我们应该更仔细地想念；错过。"
			},
			{
				"id": 1492,
				"en": "mistake",
				"zh": "错误",
				"phonetic": "/.../",
				"example": "I really like the mistake.",
				"exampleZh": "我真的很喜欢这个错误。"
			},
			{
				"id": 1493,
				"en": "model",
				"zh": "模型",
				"phonetic": "/.../",
				"example": "The model is very useful.",
				"exampleZh": "模型非常有用。"
			},
			{
				"id": 1494,
				"en": "modern",
				"zh": "现代的",
				"phonetic": "/.../",
				"example": "The result is quite modern.",
				"exampleZh": "结果是相当现代的的。"
			},
			{
				"id": 1495,
				"en": "mom",
				"zh": "妈妈",
				"phonetic": "/.../",
				"example": "mom plays a key role in our life.",
				"exampleZh": "妈妈在我们的生活中起着关键作用。"
			},
			{
				"id": 1496,
				"en": "moment",
				"zh": "时刻",
				"phonetic": "/mənt/",
				"example": "This is an important moment.",
				"exampleZh": "这是一个重要的时刻。"
			},
			{
				"id": 1497,
				"en": "Monday",
				"zh": "周一",
				"phonetic": "/eɪ/",
				"example": "I really like the Monday.",
				"exampleZh": "我真的很喜欢这个周一。"
			},
			{
				"id": 1498,
				"en": "money",
				"zh": "钱",
				"phonetic": "/.../",
				"example": "The money is very useful.",
				"exampleZh": "钱非常有用。"
			},
			{
				"id": 1499,
				"en": "monkey",
				"zh": "猴子",
				"phonetic": "/.../",
				"example": "Do you understand this monkey?",
				"exampleZh": "你理解这个猴子吗？"
			},
			{
				"id": 1500,
				"en": "month",
				"zh": "月",
				"phonetic": "/θ/",
				"example": "month plays a key role in our life.",
				"exampleZh": "月在我们的生活中起着关键作用。"
			},
			{
				"id": 1501,
				"en": "moon",
				"zh": "月亮",
				"phonetic": "/uː/",
				"example": "This is an important moon.",
				"exampleZh": "这是一个重要的月亮。"
			},
			{
				"id": 1502,
				"en": "more",
				"zh": "更多的",
				"phonetic": "/.../",
				"example": "She looks more today.",
				"exampleZh": "她今天看起来很更多的。"
			},
			{
				"id": 1503,
				"en": "morning",
				"zh": "早上",
				"phonetic": "/ɪŋ/",
				"example": "The morning is very useful.",
				"exampleZh": "早上非常有用。"
			},
			{
				"id": 1504,
				"en": "most",
				"zh": "最多的",
				"phonetic": "/.../",
				"example": "The result is quite most.",
				"exampleZh": "结果是相当最多的的。"
			},
			{
				"id": 1505,
				"en": "mother",
				"zh": "母亲",
				"phonetic": "/ər/",
				"example": "mother plays a key role in our life.",
				"exampleZh": "母亲在我们的生活中起着关键作用。"
			},
			{
				"id": 1506,
				"en": "mountain",
				"zh": "山",
				"phonetic": "/eɪ/",
				"example": "This is an important mountain.",
				"exampleZh": "这是一个重要的山。"
			},
			{
				"id": 1507,
				"en": "mouth",
				"zh": "嘴",
				"phonetic": "/θ/",
				"example": "I really like the mouth.",
				"exampleZh": "我真的很喜欢这个嘴。"
			},
			{
				"id": 1508,
				"en": "move",
				"zh": "移动",
				"phonetic": "/.../",
				"example": "Let's move together.",
				"exampleZh": "让我们一起移动吧。"
			},
			{
				"id": 1509,
				"en": "movie",
				"zh": "电影",
				"phonetic": "/.../",
				"example": "Do you understand this movie?",
				"exampleZh": "你理解这个电影吗？"
			},
			{
				"id": 1510,
				"en": "Mr",
				"zh": "先生",
				"phonetic": "/.../",
				"example": "Mr plays a key role in our life.",
				"exampleZh": "先生在我们的生活中起着关键作用。"
			},
			{
				"id": 1511,
				"en": "Mrs",
				"zh": "夫人",
				"phonetic": "/.../",
				"example": "This is an important Mrs.",
				"exampleZh": "这是一个重要的夫人。"
			},
			{
				"id": 1512,
				"en": "much",
				"zh": "许多",
				"phonetic": "/tʃ/",
				"example": "She looks much today.",
				"exampleZh": "她今天看起来很许多。"
			},
			{
				"id": 1513,
				"en": "museum",
				"zh": "博物馆",
				"phonetic": "/.../",
				"example": "The museum is very useful.",
				"exampleZh": "博物馆非常有用。"
			},
			{
				"id": 1514,
				"en": "music",
				"zh": "音乐",
				"phonetic": "/.../",
				"example": "Do you understand this music?",
				"exampleZh": "你理解这个音乐吗？"
			},
			{
				"id": 1515,
				"en": "must",
				"zh": "必须",
				"phonetic": "/.../",
				"example": "I need to must before the deadline.",
				"exampleZh": "我需要在截止日期前必须。"
			},
			{
				"id": 1516,
				"en": "my",
				"zh": "我的",
				"phonetic": "/.../",
				"example": "I think my is important.",
				"exampleZh": "我认为我的很重要。"
			},
			{
				"id": 1517,
				"en": "myself",
				"zh": "我自己",
				"phonetic": "/.../",
				"example": "Let's talk about myself.",
				"exampleZh": "让我们来谈谈我自己吧。"
			},
			{
				"id": 1518,
				"en": "name",
				"zh": "名字",
				"phonetic": "/.../",
				"example": "The name is very useful.",
				"exampleZh": "名字非常有用。"
			},
			{
				"id": 1519,
				"en": "near",
				"zh": "在...附近",
				"phonetic": "/ɑːr/",
				"example": "Let's talk about near.",
				"exampleZh": "让我们来谈谈在...附近吧。"
			},
			{
				"id": 1520,
				"en": "need",
				"zh": "需要",
				"phonetic": "/d/",
				"example": "I need to need before the deadline.",
				"exampleZh": "我需要在截止日期前需要。"
			},
			{
				"id": 1521,
				"en": "never",
				"zh": "从不",
				"phonetic": "/ər/",
				"example": "She never agreed with us.",
				"exampleZh": "她从不地同意了我们的意见。"
			},
			{
				"id": 1522,
				"en": "new",
				"zh": "新的",
				"phonetic": "/.../",
				"example": "She looks new today.",
				"exampleZh": "她今天看起来很新的。"
			},
			{
				"id": 1523,
				"en": "news",
				"zh": "新闻",
				"phonetic": "/.../",
				"example": "The news is very useful.",
				"exampleZh": "新闻非常有用。"
			},
			{
				"id": 1524,
				"en": "newspaper",
				"zh": "报纸",
				"phonetic": "/ər/",
				"example": "Do you understand this newspaper?",
				"exampleZh": "你理解这个报纸吗？"
			},
			{
				"id": 1525,
				"en": "next",
				"zh": "下一个",
				"phonetic": "/.../",
				"example": "He found the task next.",
				"exampleZh": "他发现这个任务是下一个的。"
			},
			{
				"id": 1526,
				"en": "nice",
				"zh": "好的",
				"phonetic": "/.../",
				"example": "This is very nice.",
				"exampleZh": "这非常好的。"
			},
			{
				"id": 1527,
				"en": "night",
				"zh": "夜晚",
				"phonetic": "/aɪt/",
				"example": "I really like the night.",
				"exampleZh": "我真的很喜欢这个夜晚。"
			},
			{
				"id": 1528,
				"en": "nine",
				"zh": "九",
				"phonetic": "/.../",
				"example": "I think nine is important.",
				"exampleZh": "我认为九很重要。"
			},
			{
				"id": 1529,
				"en": "nineteen",
				"zh": "十九",
				"phonetic": "/iː/",
				"example": "Let's talk about nineteen.",
				"exampleZh": "让我们来谈谈十九吧。"
			},
			{
				"id": 1530,
				"en": "ninety",
				"zh": "九十",
				"phonetic": "/.../",
				"example": "I think ninety is important.",
				"exampleZh": "我认为九十很重要。"
			},
			{
				"id": 1531,
				"en": "ninth",
				"zh": "第九",
				"phonetic": "/θ/",
				"example": "Let's talk about ninth.",
				"exampleZh": "让我们来谈谈第九吧。"
			},
			{
				"id": 1532,
				"en": "no",
				"zh": "不",
				"phonetic": "/.../",
				"example": "He spoke no to the audience.",
				"exampleZh": "他不地对观众说话。"
			},
			{
				"id": 1533,
				"en": "nobody",
				"zh": "没有人",
				"phonetic": "/.../",
				"example": "Let's talk about nobody.",
				"exampleZh": "让我们来谈谈没有人吧。"
			},
			{
				"id": 1534,
				"en": "noise",
				"zh": "噪音",
				"phonetic": "/ɔɪ/",
				"example": "Do you understand this noise?",
				"exampleZh": "你理解这个噪音吗？"
			},
			{
				"id": 1535,
				"en": "noon",
				"zh": "中午",
				"phonetic": "/uː/",
				"example": "noon plays a key role in our life.",
				"exampleZh": "中午在我们的生活中起着关键作用。"
			},
			{
				"id": 1536,
				"en": "north",
				"zh": "北方",
				"phonetic": "/θ/",
				"example": "This is an important north.",
				"exampleZh": "这是一个重要的北方。"
			},
			{
				"id": 1537,
				"en": "nose",
				"zh": "鼻子",
				"phonetic": "/.../",
				"example": "I really like the nose.",
				"exampleZh": "我真的很喜欢这个鼻子。"
			},
			{
				"id": 1538,
				"en": "not",
				"zh": "不",
				"phonetic": "/.../",
				"example": "He spoke not to the audience.",
				"exampleZh": "他不地对观众说话。"
			},
			{
				"id": 1539,
				"en": "note",
				"zh": "笔记",
				"phonetic": "/.../",
				"example": "Do you understand this note?",
				"exampleZh": "你理解这个笔记吗？"
			},
			{
				"id": 1540,
				"en": "nothing",
				"zh": "没有什么",
				"phonetic": "/ɪŋ/",
				"example": "I think nothing is important.",
				"exampleZh": "我认为没有什么很重要。"
			},
			{
				"id": 1541,
				"en": "notice",
				"zh": "注意",
				"phonetic": "/.../",
				"example": "We should notice more carefully.",
				"exampleZh": "我们应该更仔细地注意。"
			},
			{
				"id": 1542,
				"en": "November",
				"zh": "十一月",
				"phonetic": "/ər/",
				"example": "I really like the November.",
				"exampleZh": "我真的很喜欢这个十一月。"
			},
			{
				"id": 1543,
				"en": "now",
				"zh": "现在",
				"phonetic": "/aʊ/",
				"example": "They worked now on the project.",
				"exampleZh": "他们现在地在这个项目上工作。"
			},
			{
				"id": 1544,
				"en": "number",
				"zh": "数字",
				"phonetic": "/ər/",
				"example": "Do you understand this number?",
				"exampleZh": "你理解这个数字吗？"
			},
			{
				"id": 1545,
				"en": "nurse",
				"zh": "护士",
				"phonetic": "/.../",
				"example": "nurse plays a key role in our life.",
				"exampleZh": "护士在我们的生活中起着关键作用。"
			},
			{
				"id": 1546,
				"en": "o'clock",
				"zh": "...点钟",
				"phonetic": "/k/",
				"example": "They worked o'clock on the project.",
				"exampleZh": "他们...点钟地在这个项目上工作。"
			},
			{
				"id": 1547,
				"en": "October",
				"zh": "十月",
				"phonetic": "/ər/",
				"example": "I really like the October.",
				"exampleZh": "我真的很喜欢这个十月。"
			},
			{
				"id": 1548,
				"en": "of",
				"zh": "...的",
				"phonetic": "/.../",
				"example": "I think of is important.",
				"exampleZh": "我认为...的很重要。"
			},
			{
				"id": 1549,
				"en": "off",
				"zh": "离开",
				"phonetic": "/.../",
				"example": "Let's talk about off.",
				"exampleZh": "让我们来谈谈离开吧。"
			},
			{
				"id": 1550,
				"en": "office",
				"zh": "办公室",
				"phonetic": "/.../",
				"example": "office plays a key role in our life.",
				"exampleZh": "办公室在我们的生活中起着关键作用。"
			},
			{
				"id": 1551,
				"en": "often",
				"zh": "经常",
				"phonetic": "/.../",
				"example": "She often agreed with us.",
				"exampleZh": "她经常地同意了我们的意见。"
			},
			{
				"id": 1552,
				"en": "oil",
				"zh": "油",
				"phonetic": "/ɔɪ/",
				"example": "I really like the oil.",
				"exampleZh": "我真的很喜欢这个油。"
			},
			{
				"id": 1553,
				"en": "OK",
				"zh": "好的",
				"phonetic": "/.../",
				"example": "Let's talk about OK.",
				"exampleZh": "让我们来谈谈好的吧。"
			},
			{
				"id": 1554,
				"en": "old",
				"zh": "老的",
				"phonetic": "/.../",
				"example": "The result is quite old.",
				"exampleZh": "结果是相当老的的。"
			},
			{
				"id": 1555,
				"en": "on",
				"zh": "在...上面",
				"phonetic": "/.../",
				"example": "Let's talk about on.",
				"exampleZh": "让我们来谈谈在...上面吧。"
			},
			{
				"id": 1556,
				"en": "once",
				"zh": "一次",
				"phonetic": "/.../",
				"example": "He spoke once to the audience.",
				"exampleZh": "他一次地对观众说话。"
			},
			{
				"id": 1557,
				"en": "one",
				"zh": "一",
				"phonetic": "/.../",
				"example": "Let's talk about one.",
				"exampleZh": "让我们来谈谈一吧。"
			},
			{
				"id": 1558,
				"en": "only",
				"zh": "仅仅",
				"phonetic": "/li/",
				"example": "They worked only on the project.",
				"exampleZh": "他们仅仅地在这个项目上工作。"
			},
			{
				"id": 1559,
				"en": "open",
				"zh": "打开",
				"phonetic": "/.../",
				"example": "They decided to open the plan.",
				"exampleZh": "他们决定打开这个计划。"
			},
			{
				"id": 1560,
				"en": "or",
				"zh": "或者",
				"phonetic": "/ər/",
				"example": "I think or is important.",
				"exampleZh": "我认为或者很重要。"
			},
			{
				"id": 1561,
				"en": "orange",
				"zh": "橙色的；橙子",
				"phonetic": "/.../",
				"example": "This is an important orange.",
				"exampleZh": "这是一个重要的橙色的；橙子。"
			},
			{
				"id": 1562,
				"en": "order",
				"zh": "命令；顺序",
				"phonetic": "/ər/",
				"example": "I really like the order.",
				"exampleZh": "我真的很喜欢这个命令；顺序。"
			},
			{
				"id": 1563,
				"en": "other",
				"zh": "其他的",
				"phonetic": "/ər/",
				"example": "It's a other idea.",
				"exampleZh": "这是一个其他的的主意。"
			},
			{
				"id": 1564,
				"en": "our",
				"zh": "我们的",
				"phonetic": "/aʊ/",
				"example": "I think our is important.",
				"exampleZh": "我认为我们的很重要。"
			},
			{
				"id": 1565,
				"en": "ours",
				"zh": "我们的东西",
				"phonetic": "/aʊ/",
				"example": "Let's talk about ours.",
				"exampleZh": "让我们来谈谈我们的东西吧。"
			},
			{
				"id": 1566,
				"en": "ourselves",
				"zh": "我们自己",
				"phonetic": "/aʊ/",
				"example": "I think ourselves is important.",
				"exampleZh": "我认为我们自己很重要。"
			},
			{
				"id": 1567,
				"en": "out",
				"zh": "出去",
				"phonetic": "/aʊ/",
				"example": "They worked out on the project.",
				"exampleZh": "他们出去地在这个项目上工作。"
			},
			{
				"id": 1568,
				"en": "outside",
				"zh": "在外面",
				"phonetic": "/aʊ/",
				"example": "He spoke outside to the audience.",
				"exampleZh": "他在外面地对观众说话。"
			},
			{
				"id": 1569,
				"en": "over",
				"zh": "在...上方",
				"phonetic": "/ər/",
				"example": "Let's talk about over.",
				"exampleZh": "让我们来谈谈在...上方吧。"
			},
			{
				"id": 1570,
				"en": "own",
				"zh": "自己的",
				"phonetic": "/aʊ/",
				"example": "He found the task own.",
				"exampleZh": "他发现这个任务是自己的的。"
			},
			{
				"id": 1571,
				"en": "page",
				"zh": "页",
				"phonetic": "/.../",
				"example": "This is an important page.",
				"exampleZh": "这是一个重要的页。"
			},
			{
				"id": 1572,
				"en": "paint",
				"zh": "画；油漆",
				"phonetic": "/eɪ/",
				"example": "She wants to paint this task.",
				"exampleZh": "她想画；油漆这个任务。"
			},
			{
				"id": 1573,
				"en": "pair",
				"zh": "一双",
				"phonetic": "/eɪ/",
				"example": "The pair is very useful.",
				"exampleZh": "一双非常有用。"
			},
			{
				"id": 1574,
				"en": "palace",
				"zh": "宫殿",
				"phonetic": "/.../",
				"example": "Do you understand this palace?",
				"exampleZh": "你理解这个宫殿吗？"
			},
			{
				"id": 1575,
				"en": "paper",
				"zh": "纸",
				"phonetic": "/ər/",
				"example": "paper plays a key role in our life.",
				"exampleZh": "纸在我们的生活中起着关键作用。"
			},
			{
				"id": 1576,
				"en": "pardon",
				"zh": "原谅",
				"phonetic": "/.../",
				"example": "We should pardon more carefully.",
				"exampleZh": "我们应该更仔细地原谅。"
			},
			{
				"id": 1577,
				"en": "parent",
				"zh": "父母",
				"phonetic": "/.../",
				"example": "I really like the parent.",
				"exampleZh": "我真的很喜欢这个父母。"
			},
			{
				"id": 1578,
				"en": "park",
				"zh": "公园",
				"phonetic": "/.../",
				"example": "The park is very useful.",
				"exampleZh": "公园非常有用。"
			},
			{
				"id": 1579,
				"en": "part",
				"zh": "部分",
				"phonetic": "/.../",
				"example": "Do you understand this part?",
				"exampleZh": "你理解这个部分吗？"
			},
			{
				"id": 1580,
				"en": "party",
				"zh": "派对",
				"phonetic": "/.../",
				"example": "party plays a key role in our life.",
				"exampleZh": "派对在我们的生活中起着关键作用。"
			},
			{
				"id": 1581,
				"en": "pass",
				"zh": "通过",
				"phonetic": "/.../",
				"example": "We should pass more carefully.",
				"exampleZh": "我们应该更仔细地通过。"
			},
			{
				"id": 1582,
				"en": "past",
				"zh": "过去的",
				"phonetic": "/.../",
				"example": "She looks past today.",
				"exampleZh": "她今天看起来很过去的。"
			},
			{
				"id": 1583,
				"en": "pay",
				"zh": "付款",
				"phonetic": "/eɪ/",
				"example": "Let's pay together.",
				"exampleZh": "让我们一起付款吧。"
			},
			{
				"id": 1584,
				"en": "PE",
				"zh": "体育",
				"phonetic": "/.../",
				"example": "Do you understand this PE?",
				"exampleZh": "你理解这个体育吗？"
			},
			{
				"id": 1585,
				"en": "pen",
				"zh": "钢笔",
				"phonetic": "/.../",
				"example": "pen plays a key role in our life.",
				"exampleZh": "钢笔在我们的生活中起着关键作用。"
			},
			{
				"id": 1586,
				"en": "pencil",
				"zh": "铅笔",
				"phonetic": "/.../",
				"example": "This is an important pencil.",
				"exampleZh": "这是一个重要的铅笔。"
			},
			{
				"id": 1587,
				"en": "people",
				"zh": "人们",
				"phonetic": "/.../",
				"example": "I really like the people.",
				"exampleZh": "我真的很喜欢这个人们。"
			},
			{
				"id": 1588,
				"en": "perfect",
				"zh": "完美的",
				"phonetic": "/.../",
				"example": "It's a perfect idea.",
				"exampleZh": "这是一个完美的的主意。"
			},
			{
				"id": 1589,
				"en": "person",
				"zh": "人",
				"phonetic": "/.../",
				"example": "Do you understand this person?",
				"exampleZh": "你理解这个人吗？"
			},
			{
				"id": 1590,
				"en": "pet",
				"zh": "宠物",
				"phonetic": "/.../",
				"example": "pet plays a key role in our life.",
				"exampleZh": "宠物在我们的生活中起着关键作用。"
			},
			{
				"id": 1591,
				"en": "phone",
				"zh": "电话",
				"phonetic": "/.../",
				"example": "This is an important phone.",
				"exampleZh": "这是一个重要的电话。"
			},
			{
				"id": 1592,
				"en": "photo",
				"zh": "照片",
				"phonetic": "/.../",
				"example": "I really like the photo.",
				"exampleZh": "我真的很喜欢这个照片。"
			},
			{
				"id": 1593,
				"en": "piano",
				"zh": "钢琴",
				"phonetic": "/.../",
				"example": "The piano is very useful.",
				"exampleZh": "钢琴非常有用。"
			},
			{
				"id": 1594,
				"en": "pick",
				"zh": "捡起",
				"phonetic": "/k/",
				"example": "They decided to pick the plan.",
				"exampleZh": "他们决定捡起这个计划。"
			},
			{
				"id": 1595,
				"en": "picnic",
				"zh": "野餐",
				"phonetic": "/.../",
				"example": "picnic plays a key role in our life.",
				"exampleZh": "野餐在我们的生活中起着关键作用。"
			},
			{
				"id": 1596,
				"en": "picture",
				"zh": "图片",
				"phonetic": "/tʃər/",
				"example": "This is an important picture.",
				"exampleZh": "这是一个重要的图片。"
			},
			{
				"id": 1597,
				"en": "piece",
				"zh": "片；块",
				"phonetic": "/.../",
				"example": "I really like the piece.",
				"exampleZh": "我真的很喜欢这个片；块。"
			},
			{
				"id": 1598,
				"en": "pig",
				"zh": "猪",
				"phonetic": "/.../",
				"example": "The pig is very useful.",
				"exampleZh": "猪非常有用。"
			},
			{
				"id": 1599,
				"en": "place",
				"zh": "地方",
				"phonetic": "/.../",
				"example": "Do you understand this place?",
				"exampleZh": "你理解这个地方吗？"
			},
			{
				"id": 1600,
				"en": "plan",
				"zh": "计划",
				"phonetic": "/.../",
				"example": "plan plays a key role in our life.",
				"exampleZh": "计划在我们的生活中起着关键作用。"
			},
			{
				"id": 1601,
				"en": "plane",
				"zh": "飞机",
				"phonetic": "/.../",
				"example": "This is an important plane.",
				"exampleZh": "这是一个重要的飞机。"
			},
			{
				"id": 1602,
				"en": "plant",
				"zh": "植物",
				"phonetic": "/.../",
				"example": "I really like the plant.",
				"exampleZh": "我真的很喜欢这个植物。"
			},
			{
				"id": 1603,
				"en": "play",
				"zh": "玩；播放",
				"phonetic": "/eɪ/",
				"example": "Let's play together.",
				"exampleZh": "让我们一起玩；播放吧。"
			},
			{
				"id": 1604,
				"en": "playground",
				"zh": "操场",
				"phonetic": "/eɪ/",
				"example": "Do you understand this playground?",
				"exampleZh": "你理解这个操场吗？"
			},
			{
				"id": 1605,
				"en": "please",
				"zh": "请",
				"phonetic": "/iː/",
				"example": "I need to please before the deadline.",
				"exampleZh": "我需要在截止日期前请。"
			},
			{
				"id": 1606,
				"en": "pocket",
				"zh": "口袋",
				"phonetic": "/.../",
				"example": "This is an important pocket.",
				"exampleZh": "这是一个重要的口袋。"
			},
			{
				"id": 1607,
				"en": "point",
				"zh": "点；指向",
				"phonetic": "/ɔɪ/",
				"example": "I really like the point.",
				"exampleZh": "我真的很喜欢这个点；指向。"
			},
			{
				"id": 1608,
				"en": "police",
				"zh": "警察",
				"phonetic": "/.../",
				"example": "The police is very useful.",
				"exampleZh": "警察非常有用。"
			},
			{
				"id": 1609,
				"en": "pool",
				"zh": "游泳池",
				"phonetic": "/uː/",
				"example": "Do you understand this pool?",
				"exampleZh": "你理解这个游泳池吗？"
			},
			{
				"id": 1610,
				"en": "poor",
				"zh": "贫穷的",
				"phonetic": "/ər/",
				"example": "He found the task poor.",
				"exampleZh": "他发现这个任务是贫穷的的。"
			},
			{
				"id": 1611,
				"en": "popular",
				"zh": "流行的",
				"phonetic": "/ɑːr/",
				"example": "This is very popular.",
				"exampleZh": "这非常流行的。"
			},
			{
				"id": 1612,
				"en": "possible",
				"zh": "可能的",
				"phonetic": "/ɪbəl/",
				"example": "She looks possible today.",
				"exampleZh": "她今天看起来很可能的。"
			},
			{
				"id": 1613,
				"en": "post",
				"zh": "邮寄",
				"phonetic": "/.../",
				"example": "Let's post together.",
				"exampleZh": "让我们一起邮寄吧。"
			},
			{
				"id": 1614,
				"en": "postcard",
				"zh": "明信片",
				"phonetic": "/.../",
				"example": "Do you understand this postcard?",
				"exampleZh": "你理解这个明信片吗？"
			},
			{
				"id": 1615,
				"en": "potato",
				"zh": "土豆",
				"phonetic": "/.../",
				"example": "potato plays a key role in our life.",
				"exampleZh": "土豆在我们的生活中起着关键作用。"
			},
			{
				"id": 1616,
				"en": "practice",
				"zh": "练习",
				"phonetic": "/.../",
				"example": "This is an important practice.",
				"exampleZh": "这是一个重要的练习。"
			},
			{
				"id": 1617,
				"en": "present",
				"zh": "礼物",
				"phonetic": "/.../",
				"example": "I really like the present.",
				"exampleZh": "我真的很喜欢这个礼物。"
			},
			{
				"id": 1618,
				"en": "price",
				"zh": "价格",
				"phonetic": "/.../",
				"example": "The price is very useful.",
				"exampleZh": "价格非常有用。"
			},
			{
				"id": 1619,
				"en": "problem",
				"zh": "问题",
				"phonetic": "/.../",
				"example": "Do you understand this problem?",
				"exampleZh": "你理解这个问题吗？"
			},
			{
				"id": 1620,
				"en": "pupil",
				"zh": "小学生",
				"phonetic": "/.../",
				"example": "pupil plays a key role in our life.",
				"exampleZh": "小学生在我们的生活中起着关键作用。"
			},
			{
				"id": 1621,
				"en": "purple",
				"zh": "紫色的",
				"phonetic": "/.../",
				"example": "This is very purple.",
				"exampleZh": "这非常紫色的。"
			},
			{
				"id": 1622,
				"en": "push",
				"zh": "推",
				"phonetic": "/ʃ/",
				"example": "She wants to push this task.",
				"exampleZh": "她想推这个任务。"
			},
			{
				"id": 1623,
				"en": "put",
				"zh": "放",
				"phonetic": "/.../",
				"example": "Let's put together.",
				"exampleZh": "让我们一起放吧。"
			},
			{
				"id": 1624,
				"en": "quarter",
				"zh": "四分之一；一刻钟",
				"phonetic": "/ər/",
				"example": "Do you understand this quarter?",
				"exampleZh": "你理解这个四分之一；一刻钟吗？"
			},
			{
				"id": 1625,
				"en": "queen",
				"zh": "女王",
				"phonetic": "/kw/",
				"example": "queen plays a key role in our life.",
				"exampleZh": "女王在我们的生活中起着关键作用。"
			},
			{
				"id": 1626,
				"en": "question",
				"zh": "问题",
				"phonetic": "/ʃən/",
				"example": "This is an important question.",
				"exampleZh": "这是一个重要的问题。"
			},
			{
				"id": 1627,
				"en": "quick",
				"zh": "快的",
				"phonetic": "/k/",
				"example": "She looks quick today.",
				"exampleZh": "她今天看起来很快的。"
			},
			{
				"id": 1628,
				"en": "quiet",
				"zh": "安静的",
				"phonetic": "/kw/",
				"example": "It's a quiet idea.",
				"exampleZh": "这是一个安静的的主意。"
			},
			{
				"id": 1629,
				"en": "quite",
				"zh": "相当",
				"phonetic": "/kw/",
				"example": "She quite agreed with us.",
				"exampleZh": "她相当地同意了我们的意见。"
			},
			{
				"id": 1630,
				"en": "rabbit",
				"zh": "兔子",
				"phonetic": "/.../",
				"example": "rabbit plays a key role in our life.",
				"exampleZh": "兔子在我们的生活中起着关键作用。"
			},
			{
				"id": 1631,
				"en": "race",
				"zh": "比赛",
				"phonetic": "/.../",
				"example": "This is an important race.",
				"exampleZh": "这是一个重要的比赛。"
			},
			{
				"id": 1632,
				"en": "radio",
				"zh": "收音机",
				"phonetic": "/.../",
				"example": "I really like the radio.",
				"exampleZh": "我真的很喜欢这个收音机。"
			},
			{
				"id": 1633,
				"en": "rain",
				"zh": "雨",
				"phonetic": "/eɪ/",
				"example": "The rain is very useful.",
				"exampleZh": "雨非常有用。"
			},
			{
				"id": 1634,
				"en": "rainy",
				"zh": "下雨的",
				"phonetic": "/eɪ/",
				"example": "The result is quite rainy.",
				"exampleZh": "结果是相当下雨的的。"
			},
			{
				"id": 1635,
				"en": "read",
				"zh": "读",
				"phonetic": "/iː/",
				"example": "I need to read before the deadline.",
				"exampleZh": "我需要在截止日期前读。"
			},
			{
				"id": 1636,
				"en": "ready",
				"zh": "准备好的",
				"phonetic": "/iː/",
				"example": "This is very ready.",
				"exampleZh": "这非常准备好的。"
			},
			{
				"id": 1637,
				"en": "real",
				"zh": "真实的",
				"phonetic": "/iː/",
				"example": "She looks real today.",
				"exampleZh": "她今天看起来很真实的。"
			},
			{
				"id": 1638,
				"en": "really",
				"zh": "真正地",
				"phonetic": "/li/",
				"example": "She really agreed with us.",
				"exampleZh": "她真正地地同意了我们的意见。"
			},
			{
				"id": 1639,
				"en": "red",
				"zh": "红色的",
				"phonetic": "/d/",
				"example": "The result is quite red.",
				"exampleZh": "结果是相当红色的的。"
			},
			{
				"id": 1640,
				"en": "remember",
				"zh": "记住",
				"phonetic": "/ər/",
				"example": "I need to remember before the deadline.",
				"exampleZh": "我需要在截止日期前记住。"
			},
			{
				"id": 1641,
				"en": "rest",
				"zh": "休息",
				"phonetic": "/.../",
				"example": "We should rest more carefully.",
				"exampleZh": "我们应该更仔细地休息。"
			},
			{
				"id": 1642,
				"en": "restaurant",
				"zh": "餐馆",
				"phonetic": "/ɔː/",
				"example": "I really like the restaurant.",
				"exampleZh": "我真的很喜欢这个餐馆。"
			},
			{
				"id": 1643,
				"en": "rice",
				"zh": "米饭",
				"phonetic": "/.../",
				"example": "The rice is very useful.",
				"exampleZh": "米饭非常有用。"
			},
			{
				"id": 1644,
				"en": "rich",
				"zh": "富裕的",
				"phonetic": "/tʃ/",
				"example": "The result is quite rich.",
				"exampleZh": "结果是相当富裕的的。"
			},
			{
				"id": 1645,
				"en": "ride",
				"zh": "骑",
				"phonetic": "/.../",
				"example": "I need to ride before the deadline.",
				"exampleZh": "我需要在截止日期前骑。"
			},
			{
				"id": 1646,
				"en": "right",
				"zh": "正确的；右边的",
				"phonetic": "/aɪt/",
				"example": "This is very right.",
				"exampleZh": "这非常正确的；右边的。"
			},
			{
				"id": 1647,
				"en": "ring",
				"zh": "戒指；响",
				"phonetic": "/ɪŋ/",
				"example": "I really like the ring.",
				"exampleZh": "我真的很喜欢这个戒指；响。"
			},
			{
				"id": 1648,
				"en": "river",
				"zh": "河流",
				"phonetic": "/ər/",
				"example": "The river is very useful.",
				"exampleZh": "河流非常有用。"
			},
			{
				"id": 1649,
				"en": "road",
				"zh": "路",
				"phonetic": "/oʊ/",
				"example": "Do you understand this road?",
				"exampleZh": "你理解这个路吗？"
			},
			{
				"id": 1650,
				"en": "robot",
				"zh": "机器人",
				"phonetic": "/.../",
				"example": "robot plays a key role in our life.",
				"exampleZh": "机器人在我们的生活中起着关键作用。"
			},
			{
				"id": 1651,
				"en": "room",
				"zh": "房间",
				"phonetic": "/uː/",
				"example": "This is an important room.",
				"exampleZh": "这是一个重要的房间。"
			},
			{
				"id": 1652,
				"en": "round",
				"zh": "圆的",
				"phonetic": "/aʊ/",
				"example": "She looks round today.",
				"exampleZh": "她今天看起来很圆的。"
			},
			{
				"id": 1653,
				"en": "ruler",
				"zh": "尺子",
				"phonetic": "/ər/",
				"example": "The ruler is very useful.",
				"exampleZh": "尺子非常有用。"
			},
			{
				"id": 1654,
				"en": "run",
				"zh": "跑",
				"phonetic": "/.../",
				"example": "They decided to run the plan.",
				"exampleZh": "他们决定跑这个计划。"
			},
			{
				"id": 1655,
				"en": "sad",
				"zh": "伤心的",
				"phonetic": "/.../",
				"example": "He found the task sad.",
				"exampleZh": "他发现这个任务是伤心的的。"
			},
			{
				"id": 1656,
				"en": "safe",
				"zh": "安全的",
				"phonetic": "/.../",
				"example": "This is very safe.",
				"exampleZh": "这非常安全的。"
			},
			{
				"id": 1657,
				"en": "salt",
				"zh": "盐",
				"phonetic": "/.../",
				"example": "I really like the salt.",
				"exampleZh": "我真的很喜欢这个盐。"
			},
			{
				"id": 1658,
				"en": "same",
				"zh": "相同的",
				"phonetic": "/.../",
				"example": "It's a same idea.",
				"exampleZh": "这是一个相同的的主意。"
			},
			{
				"id": 1659,
				"en": "Saturday",
				"zh": "周六",
				"phonetic": "/eɪ/",
				"example": "Do you understand this Saturday?",
				"exampleZh": "你理解这个周六吗？"
			},
			{
				"id": 1660,
				"en": "say",
				"zh": "说",
				"phonetic": "/eɪ/",
				"example": "I need to say before the deadline.",
				"exampleZh": "我需要在截止日期前说。"
			},
			{
				"id": 1661,
				"en": "school",
				"zh": "学校",
				"phonetic": "/uː/",
				"example": "This is an important school.",
				"exampleZh": "这是一个重要的学校。"
			},
			{
				"id": 1662,
				"en": "season",
				"zh": "季节",
				"phonetic": "/iː/",
				"example": "I really like the season.",
				"exampleZh": "我真的很喜欢这个季节。"
			},
			{
				"id": 1663,
				"en": "seat",
				"zh": "座位",
				"phonetic": "/iː/",
				"example": "The seat is very useful.",
				"exampleZh": "座位非常有用。"
			},
			{
				"id": 1664,
				"en": "second",
				"zh": "第二；秒",
				"phonetic": "/.../",
				"example": "I think second is important.",
				"exampleZh": "我认为第二；秒很重要。"
			},
			{
				"id": 1665,
				"en": "see",
				"zh": "看见",
				"phonetic": "/iː/",
				"example": "I need to see before the deadline.",
				"exampleZh": "我需要在截止日期前看见。"
			},
			{
				"id": 1666,
				"en": "sell",
				"zh": "卖",
				"phonetic": "/.../",
				"example": "We should sell more carefully.",
				"exampleZh": "我们应该更仔细地卖。"
			},
			{
				"id": 1667,
				"en": "send",
				"zh": "发送",
				"phonetic": "/.../",
				"example": "She wants to send this task.",
				"exampleZh": "她想发送这个任务。"
			},
			{
				"id": 1668,
				"en": "September",
				"zh": "九月",
				"phonetic": "/ər/",
				"example": "The September is very useful.",
				"exampleZh": "九月非常有用。"
			},
			{
				"id": 1669,
				"en": "seven",
				"zh": "七",
				"phonetic": "/.../",
				"example": "Let's talk about seven.",
				"exampleZh": "让我们来谈谈七吧。"
			},
			{
				"id": 1670,
				"en": "seventeen",
				"zh": "十七",
				"phonetic": "/iː/",
				"example": "I think seventeen is important.",
				"exampleZh": "我认为十七很重要。"
			},
			{
				"id": 1671,
				"en": "seventh",
				"zh": "第七",
				"phonetic": "/θ/",
				"example": "Let's talk about seventh.",
				"exampleZh": "让我们来谈谈第七吧。"
			},
			{
				"id": 1672,
				"en": "seventy",
				"zh": "七十",
				"phonetic": "/.../",
				"example": "I think seventy is important.",
				"exampleZh": "我认为七十很重要。"
			},
			{
				"id": 1673,
				"en": "shall",
				"zh": "将要",
				"phonetic": "/.../",
				"example": "Let's shall together.",
				"exampleZh": "让我们一起将要吧。"
			},
			{
				"id": 1674,
				"en": "she",
				"zh": "她",
				"phonetic": "/.../",
				"example": "I think she is important.",
				"exampleZh": "我认为她很重要。"
			},
			{
				"id": 1675,
				"en": "sheep",
				"zh": "羊",
				"phonetic": "/iː/",
				"example": "sheep plays a key role in our life.",
				"exampleZh": "羊在我们的生活中起着关键作用。"
			},
			{
				"id": 1676,
				"en": "shine",
				"zh": "照耀",
				"phonetic": "/.../",
				"example": "We should shine more carefully.",
				"exampleZh": "我们应该更仔细地照耀。"
			},
			{
				"id": 1677,
				"en": "ship",
				"zh": "船",
				"phonetic": "/.../",
				"example": "I really like the ship.",
				"exampleZh": "我真的很喜欢这个船。"
			},
			{
				"id": 1678,
				"en": "shirt",
				"zh": "衬衫",
				"phonetic": "/.../",
				"example": "The shirt is very useful.",
				"exampleZh": "衬衫非常有用。"
			},
			{
				"id": 1679,
				"en": "shoe",
				"zh": "鞋",
				"phonetic": "/.../",
				"example": "Do you understand this shoe?",
				"exampleZh": "你理解这个鞋吗？"
			},
			{
				"id": 1680,
				"en": "shop",
				"zh": "商店",
				"phonetic": "/.../",
				"example": "shop plays a key role in our life.",
				"exampleZh": "商店在我们的生活中起着关键作用。"
			},
			{
				"id": 1681,
				"en": "short",
				"zh": "短的",
				"phonetic": "/.../",
				"example": "This is very short.",
				"exampleZh": "这非常短的。"
			},
			{
				"id": 1682,
				"en": "shout",
				"zh": "喊叫",
				"phonetic": "/aʊ/",
				"example": "She wants to shout this task.",
				"exampleZh": "她想喊叫这个任务。"
			},
			{
				"id": 1683,
				"en": "show",
				"zh": "展示",
				"phonetic": "/aʊ/",
				"example": "Let's show together.",
				"exampleZh": "让我们一起展示吧。"
			},
			{
				"id": 1684,
				"en": "shy",
				"zh": "害羞的",
				"phonetic": "/.../",
				"example": "The result is quite shy.",
				"exampleZh": "结果是相当害羞的的。"
			},
			{
				"id": 1685,
				"en": "sick",
				"zh": "生病的",
				"phonetic": "/k/",
				"example": "He found the task sick.",
				"exampleZh": "他发现这个任务是生病的的。"
			},
			{
				"id": 1686,
				"en": "side",
				"zh": "边",
				"phonetic": "/.../",
				"example": "This is an important side.",
				"exampleZh": "这是一个重要的边。"
			},
			{
				"id": 1687,
				"en": "sign",
				"zh": "标志",
				"phonetic": "/.../",
				"example": "I really like the sign.",
				"exampleZh": "我真的很喜欢这个标志。"
			},
			{
				"id": 1688,
				"en": "silk",
				"zh": "丝绸",
				"phonetic": "/.../",
				"example": "The silk is very useful.",
				"exampleZh": "丝绸非常有用。"
			},
			{
				"id": 1689,
				"en": "since",
				"zh": "自从",
				"phonetic": "/.../",
				"example": "Let's talk about since.",
				"exampleZh": "让我们来谈谈自从吧。"
			},
			{
				"id": 1690,
				"en": "sing",
				"zh": "唱歌",
				"phonetic": "/ɪŋ/",
				"example": "I need to sing before the deadline.",
				"exampleZh": "我需要在截止日期前唱歌。"
			},
			{
				"id": 1691,
				"en": "sir",
				"zh": "先生",
				"phonetic": "/.../",
				"example": "This is an important sir.",
				"exampleZh": "这是一个重要的先生。"
			},
			{
				"id": 1692,
				"en": "sister",
				"zh": "姐妹",
				"phonetic": "/ər/",
				"example": "I really like the sister.",
				"exampleZh": "我真的很喜欢这个姐妹。"
			},
			{
				"id": 1693,
				"en": "sit",
				"zh": "坐",
				"phonetic": "/.../",
				"example": "Let's sit together.",
				"exampleZh": "让我们一起坐吧。"
			},
			{
				"id": 1694,
				"en": "six",
				"zh": "六",
				"phonetic": "/.../",
				"example": "I think six is important.",
				"exampleZh": "我认为六很重要。"
			},
			{
				"id": 1695,
				"en": "sixteen",
				"zh": "十六",
				"phonetic": "/iː/",
				"example": "Let's talk about sixteen.",
				"exampleZh": "让我们来谈谈十六吧。"
			},
			{
				"id": 1696,
				"en": "sixth",
				"zh": "第六",
				"phonetic": "/θ/",
				"example": "I think sixth is important.",
				"exampleZh": "我认为第六很重要。"
			},
			{
				"id": 1697,
				"en": "sixty",
				"zh": "六十",
				"phonetic": "/.../",
				"example": "Let's talk about sixty.",
				"exampleZh": "让我们来谈谈六十吧。"
			},
			{
				"id": 1698,
				"en": "size",
				"zh": "尺寸",
				"phonetic": "/.../",
				"example": "The size is very useful.",
				"exampleZh": "尺寸非常有用。"
			},
			{
				"id": 1699,
				"en": "skirt",
				"zh": "裙子",
				"phonetic": "/.../",
				"example": "Do you understand this skirt?",
				"exampleZh": "你理解这个裙子吗？"
			},
			{
				"id": 1700,
				"en": "sky",
				"zh": "天空",
				"phonetic": "/.../",
				"example": "sky plays a key role in our life.",
				"exampleZh": "天空在我们的生活中起着关键作用。"
			},
			{
				"id": 1701,
				"en": "sleep",
				"zh": "睡觉",
				"phonetic": "/iː/",
				"example": "We should sleep more carefully.",
				"exampleZh": "我们应该更仔细地睡觉。"
			},
			{
				"id": 1702,
				"en": "slow",
				"zh": "慢的",
				"phonetic": "/aʊ/",
				"example": "She looks slow today.",
				"exampleZh": "她今天看起来很慢的。"
			},
			{
				"id": 1703,
				"en": "small",
				"zh": "小的",
				"phonetic": "/.../",
				"example": "It's a small idea.",
				"exampleZh": "这是一个小的的主意。"
			},
			{
				"id": 1704,
				"en": "smell",
				"zh": "闻",
				"phonetic": "/.../",
				"example": "They decided to smell the plan.",
				"exampleZh": "他们决定闻这个计划。"
			},
			{
				"id": 1705,
				"en": "smile",
				"zh": "微笑",
				"phonetic": "/.../",
				"example": "I need to smile before the deadline.",
				"exampleZh": "我需要在截止日期前微笑。"
			},
			{
				"id": 1706,
				"en": "snow",
				"zh": "雪",
				"phonetic": "/aʊ/",
				"example": "This is an important snow.",
				"exampleZh": "这是一个重要的雪。"
			},
			{
				"id": 1707,
				"en": "so",
				"zh": "如此",
				"phonetic": "/.../",
				"example": "She so agreed with us.",
				"exampleZh": "她如此地同意了我们的意见。"
			},
			{
				"id": 1708,
				"en": "sock",
				"zh": "袜子",
				"phonetic": "/k/",
				"example": "The sock is very useful.",
				"exampleZh": "袜子非常有用。"
			},
			{
				"id": 1709,
				"en": "sofa",
				"zh": "沙发",
				"phonetic": "/.../",
				"example": "Do you understand this sofa?",
				"exampleZh": "你理解这个沙发吗？"
			},
			{
				"id": 1710,
				"en": "some",
				"zh": "一些",
				"phonetic": "/.../",
				"example": "He found the task some.",
				"exampleZh": "他发现这个任务是一些的。"
			},
			{
				"id": 1711,
				"en": "someone",
				"zh": "某人",
				"phonetic": "/.../",
				"example": "Let's talk about someone.",
				"exampleZh": "让我们来谈谈某人吧。"
			},
			{
				"id": 1712,
				"en": "something",
				"zh": "某事",
				"phonetic": "/ɪŋ/",
				"example": "I think something is important.",
				"exampleZh": "我认为某事很重要。"
			},
			{
				"id": 1713,
				"en": "sometimes",
				"zh": "有时候",
				"phonetic": "/.../",
				"example": "She sometimes agreed with us.",
				"exampleZh": "她有时候地同意了我们的意见。"
			},
			{
				"id": 1714,
				"en": "son",
				"zh": "儿子",
				"phonetic": "/.../",
				"example": "Do you understand this son?",
				"exampleZh": "你理解这个儿子吗？"
			},
			{
				"id": 1715,
				"en": "song",
				"zh": "歌曲",
				"phonetic": "/.../",
				"example": "song plays a key role in our life.",
				"exampleZh": "歌曲在我们的生活中起着关键作用。"
			},
			{
				"id": 1716,
				"en": "soon",
				"zh": "很快",
				"phonetic": "/uː/",
				"example": "She soon agreed with us.",
				"exampleZh": "她很快地同意了我们的意见。"
			},
			{
				"id": 1717,
				"en": "sorry",
				"zh": "对不起",
				"phonetic": "/.../",
				"example": "She looks sorry today.",
				"exampleZh": "她今天看起来很对不起。"
			},
			{
				"id": 1718,
				"en": "soup",
				"zh": "汤",
				"phonetic": "/aʊ/",
				"example": "The soup is very useful.",
				"exampleZh": "汤非常有用。"
			},
			{
				"id": 1719,
				"en": "south",
				"zh": "南方",
				"phonetic": "/θ/",
				"example": "Do you understand this south?",
				"exampleZh": "你理解这个南方吗？"
			},
			{
				"id": 1720,
				"en": "speak",
				"zh": "说",
				"phonetic": "/iː/",
				"example": "I need to speak before the deadline.",
				"exampleZh": "我需要在截止日期前说。"
			},
			{
				"id": 1721,
				"en": "spell",
				"zh": "拼写",
				"phonetic": "/.../",
				"example": "We should spell more carefully.",
				"exampleZh": "我们应该更仔细地拼写。"
			},
			{
				"id": 1722,
				"en": "spend",
				"zh": "花费",
				"phonetic": "/.../",
				"example": "She wants to spend this task.",
				"exampleZh": "她想花费这个任务。"
			},
			{
				"id": 1723,
				"en": "spoon",
				"zh": "勺子",
				"phonetic": "/uː/",
				"example": "The spoon is very useful.",
				"exampleZh": "勺子非常有用。"
			},
			{
				"id": 1724,
				"en": "sport",
				"zh": "运动",
				"phonetic": "/.../",
				"example": "Do you understand this sport?",
				"exampleZh": "你理解这个运动吗？"
			},
			{
				"id": 1725,
				"en": "spring",
				"zh": "春天",
				"phonetic": "/ɪŋ/",
				"example": "spring plays a key role in our life.",
				"exampleZh": "春天在我们的生活中起着关键作用。"
			},
			{
				"id": 1726,
				"en": "square",
				"zh": "正方形",
				"phonetic": "/kw/",
				"example": "This is an important square.",
				"exampleZh": "这是一个重要的正方形。"
			},
			{
				"id": 1727,
				"en": "stamp",
				"zh": "邮票",
				"phonetic": "/.../",
				"example": "I really like the stamp.",
				"exampleZh": "我真的很喜欢这个邮票。"
			},
			{
				"id": 1728,
				"en": "stand",
				"zh": "站立",
				"phonetic": "/.../",
				"example": "Let's stand together.",
				"exampleZh": "让我们一起站立吧。"
			},
			{
				"id": 1729,
				"en": "star",
				"zh": "星星",
				"phonetic": "/ɑːr/",
				"example": "Do you understand this star?",
				"exampleZh": "你理解这个星星吗？"
			},
			{
				"id": 1730,
				"en": "start",
				"zh": "开始",
				"phonetic": "/.../",
				"example": "I need to start before the deadline.",
				"exampleZh": "我需要在截止日期前开始。"
			},
			{
				"id": 1731,
				"en": "station",
				"zh": "车站",
				"phonetic": "/ʃən/",
				"example": "This is an important station.",
				"exampleZh": "这是一个重要的车站。"
			},
			{
				"id": 1732,
				"en": "stay",
				"zh": "停留",
				"phonetic": "/eɪ/",
				"example": "She wants to stay this task.",
				"exampleZh": "她想停留这个任务。"
			},
			{
				"id": 1733,
				"en": "step",
				"zh": "步；步骤",
				"phonetic": "/.../",
				"example": "The step is very useful.",
				"exampleZh": "步；步骤非常有用。"
			},
			{
				"id": 1734,
				"en": "stick",
				"zh": "棍子；粘贴",
				"phonetic": "/k/",
				"example": "Do you understand this stick?",
				"exampleZh": "你理解这个棍子；粘贴吗？"
			},
			{
				"id": 1735,
				"en": "still",
				"zh": "仍然",
				"phonetic": "/.../",
				"example": "They worked still on the project.",
				"exampleZh": "他们仍然地在这个项目上工作。"
			},
			{
				"id": 1736,
				"en": "stop",
				"zh": "停止",
				"phonetic": "/.../",
				"example": "We should stop more carefully.",
				"exampleZh": "我们应该更仔细地停止。"
			},
			{
				"id": 1737,
				"en": "store",
				"zh": "商店",
				"phonetic": "/.../",
				"example": "I really like the store.",
				"exampleZh": "我真的很喜欢这个商店。"
			},
			{
				"id": 1738,
				"en": "story",
				"zh": "故事",
				"phonetic": "/.../",
				"example": "The story is very useful.",
				"exampleZh": "故事非常有用。"
			},
			{
				"id": 1739,
				"en": "straight",
				"zh": "直的",
				"phonetic": "/aɪt/",
				"example": "The result is quite straight.",
				"exampleZh": "结果是相当直的的。"
			},
			{
				"id": 1740,
				"en": "strange",
				"zh": "奇怪的",
				"phonetic": "/.../",
				"example": "He found the task strange.",
				"exampleZh": "他发现这个任务是奇怪的的。"
			},
			{
				"id": 1741,
				"en": "street",
				"zh": "街道",
				"phonetic": "/iː/",
				"example": "This is an important street.",
				"exampleZh": "这是一个重要的街道。"
			},
			{
				"id": 1742,
				"en": "strong",
				"zh": "强壮的",
				"phonetic": "/.../",
				"example": "She looks strong today.",
				"exampleZh": "她今天看起来很强壮的。"
			},
			{
				"id": 1743,
				"en": "student",
				"zh": "学生",
				"phonetic": "/.../",
				"example": "The student is very useful.",
				"exampleZh": "学生非常有用。"
			},
			{
				"id": 1744,
				"en": "study",
				"zh": "学习",
				"phonetic": "/.../",
				"example": "They decided to study the plan.",
				"exampleZh": "他们决定学习这个计划。"
			},
			{
				"id": 1745,
				"en": "subject",
				"zh": "科目",
				"phonetic": "/.../",
				"example": "subject plays a key role in our life.",
				"exampleZh": "科目在我们的生活中起着关键作用。"
			},
			{
				"id": 1746,
				"en": "such",
				"zh": "这样的",
				"phonetic": "/tʃ/",
				"example": "This is very such.",
				"exampleZh": "这非常这样的。"
			},
			{
				"id": 1747,
				"en": "sugar",
				"zh": "糖",
				"phonetic": "/ɑːr/",
				"example": "I really like the sugar.",
				"exampleZh": "我真的很喜欢这个糖。"
			},
			{
				"id": 1748,
				"en": "summer",
				"zh": "夏天",
				"phonetic": "/ər/",
				"example": "The summer is very useful.",
				"exampleZh": "夏天非常有用。"
			},
			{
				"id": 1749,
				"en": "sun",
				"zh": "太阳",
				"phonetic": "/.../",
				"example": "Do you understand this sun?",
				"exampleZh": "你理解这个太阳吗？"
			},
			{
				"id": 1750,
				"en": "sunny",
				"zh": "晴朗的",
				"phonetic": "/.../",
				"example": "He found the task sunny.",
				"exampleZh": "他发现这个任务是晴朗的的。"
			},
			{
				"id": 1751,
				"en": "Sunday",
				"zh": "周日",
				"phonetic": "/eɪ/",
				"example": "This is an important Sunday.",
				"exampleZh": "这是一个重要的周日。"
			},
			{
				"id": 1752,
				"en": "supermarket",
				"zh": "超市",
				"phonetic": "/.../",
				"example": "I really like the supermarket.",
				"exampleZh": "我真的很喜欢这个超市。"
			},
			{
				"id": 1753,
				"en": "supper",
				"zh": "晚餐",
				"phonetic": "/ər/",
				"example": "The supper is very useful.",
				"exampleZh": "晚餐非常有用。"
			},
			{
				"id": 1754,
				"en": "sure",
				"zh": "确定的",
				"phonetic": "/ʒər/",
				"example": "The result is quite sure.",
				"exampleZh": "结果是相当确定的的。"
			},
			{
				"id": 1755,
				"en": "surprise",
				"zh": "惊喜",
				"phonetic": "/.../",
				"example": "surprise plays a key role in our life.",
				"exampleZh": "惊喜在我们的生活中起着关键作用。"
			},
			{
				"id": 1756,
				"en": "sweet",
				"zh": "甜的",
				"phonetic": "/iː/",
				"example": "This is very sweet.",
				"exampleZh": "这非常甜的。"
			},
			{
				"id": 1757,
				"en": "swim",
				"zh": "游泳",
				"phonetic": "/.../",
				"example": "She wants to swim this task.",
				"exampleZh": "她想游泳这个任务。"
			},
			{
				"id": 1758,
				"en": "table",
				"zh": "桌子",
				"phonetic": "/əbəl/",
				"example": "The table is very useful.",
				"exampleZh": "桌子非常有用。"
			},
			{
				"id": 1759,
				"en": "tall",
				"zh": "高的",
				"phonetic": "/.../",
				"example": "The result is quite tall.",
				"exampleZh": "结果是相当高的的。"
			},
			{
				"id": 1760,
				"en": "tape",
				"zh": "磁带",
				"phonetic": "/.../",
				"example": "tape plays a key role in our life.",
				"exampleZh": "磁带在我们的生活中起着关键作用。"
			},
			{
				"id": 1761,
				"en": "taste",
				"zh": "品尝",
				"phonetic": "/.../",
				"example": "We should taste more carefully.",
				"exampleZh": "我们应该更仔细地品尝。"
			},
			{
				"id": 1762,
				"en": "taxi",
				"zh": "出租车",
				"phonetic": "/.../",
				"example": "I really like the taxi.",
				"exampleZh": "我真的很喜欢这个出租车。"
			},
			{
				"id": 1763,
				"en": "tea",
				"zh": "茶",
				"phonetic": "/iː/",
				"example": "The tea is very useful.",
				"exampleZh": "茶非常有用。"
			},
			{
				"id": 1764,
				"en": "teach",
				"zh": "教",
				"phonetic": "/tʃ/",
				"example": "They decided to teach the plan.",
				"exampleZh": "他们决定教这个计划。"
			},
			{
				"id": 1765,
				"en": "teacher",
				"zh": "老师",
				"phonetic": "/ər/",
				"example": "teacher plays a key role in our life.",
				"exampleZh": "老师在我们的生活中起着关键作用。"
			},
			{
				"id": 1766,
				"en": "team",
				"zh": "团队",
				"phonetic": "/iː/",
				"example": "This is an important team.",
				"exampleZh": "这是一个重要的团队。"
			},
			{
				"id": 1767,
				"en": "telephone",
				"zh": "电话",
				"phonetic": "/.../",
				"example": "I really like the telephone.",
				"exampleZh": "我真的很喜欢这个电话。"
			},
			{
				"id": 1768,
				"en": "television",
				"zh": "电视",
				"phonetic": "/ʒən/",
				"example": "The television is very useful.",
				"exampleZh": "电视非常有用。"
			},
			{
				"id": 1769,
				"en": "tell",
				"zh": "告诉",
				"phonetic": "/.../",
				"example": "They decided to tell the plan.",
				"exampleZh": "他们决定告诉这个计划。"
			},
			{
				"id": 1770,
				"en": "ten",
				"zh": "十",
				"phonetic": "/.../",
				"example": "I think ten is important.",
				"exampleZh": "我认为十很重要。"
			},
			{
				"id": 1771,
				"en": "tenth",
				"zh": "第十",
				"phonetic": "/θ/",
				"example": "Let's talk about tenth.",
				"exampleZh": "让我们来谈谈第十吧。"
			},
			{
				"id": 1772,
				"en": "test",
				"zh": "测试",
				"phonetic": "/.../",
				"example": "I really like the test.",
				"exampleZh": "我真的很喜欢这个测试。"
			},
			{
				"id": 1773,
				"en": "than",
				"zh": "比",
				"phonetic": "/.../",
				"example": "Let's talk about than.",
				"exampleZh": "让我们来谈谈比吧。"
			},
			{
				"id": 1774,
				"en": "thank",
				"zh": "感谢",
				"phonetic": "/.../",
				"example": "They decided to thank the plan.",
				"exampleZh": "他们决定感谢这个计划。"
			},
			{
				"id": 1775,
				"en": "that",
				"zh": "那个",
				"phonetic": "/.../",
				"example": "Let's talk about that.",
				"exampleZh": "让我们来谈谈那个吧。"
			},
			{
				"id": 1776,
				"en": "the",
				"zh": "这个",
				"phonetic": "/.../",
				"example": "I think the is important.",
				"exampleZh": "我认为这个很重要。"
			},
			{
				"id": 1777,
				"en": "their",
				"zh": "他们的",
				"phonetic": "/.../",
				"example": "Let's talk about their.",
				"exampleZh": "让我们来谈谈他们的吧。"
			},
			{
				"id": 1778,
				"en": "theirs",
				"zh": "他们的东西",
				"phonetic": "/.../",
				"example": "I think theirs is important.",
				"exampleZh": "我认为他们的东西很重要。"
			},
			{
				"id": 1779,
				"en": "them",
				"zh": "他们（宾格）",
				"phonetic": "/.../",
				"example": "Let's talk about them.",
				"exampleZh": "让我们来谈谈他们（宾格）吧。"
			},
			{
				"id": 1780,
				"en": "themselves",
				"zh": "他们自己",
				"phonetic": "/.../",
				"example": "I think themselves is important.",
				"exampleZh": "我认为他们自己很重要。"
			},
			{
				"id": 1781,
				"en": "then",
				"zh": "然后",
				"phonetic": "/.../",
				"example": "He spoke then to the audience.",
				"exampleZh": "他然后地对观众说话。"
			},
			{
				"id": 1782,
				"en": "there",
				"zh": "那里",
				"phonetic": "/.../",
				"example": "She there agreed with us.",
				"exampleZh": "她那里地同意了我们的意见。"
			},
			{
				"id": 1783,
				"en": "these",
				"zh": "这些",
				"phonetic": "/.../",
				"example": "Let's talk about these.",
				"exampleZh": "让我们来谈谈这些吧。"
			},
			{
				"id": 1784,
				"en": "they",
				"zh": "他们",
				"phonetic": "/.../",
				"example": "I think they is important.",
				"exampleZh": "我认为他们很重要。"
			},
			{
				"id": 1785,
				"en": "thin",
				"zh": "瘦的；薄的",
				"phonetic": "/.../",
				"example": "He found the task thin.",
				"exampleZh": "他发现这个任务是瘦的；薄的的。"
			},
			{
				"id": 1786,
				"en": "thing",
				"zh": "东西",
				"phonetic": "/ɪŋ/",
				"example": "This is an important thing.",
				"exampleZh": "这是一个重要的东西。"
			},
			{
				"id": 1787,
				"en": "think",
				"zh": "想",
				"phonetic": "/.../",
				"example": "She wants to think this task.",
				"exampleZh": "她想想这个任务。"
			},
			{
				"id": 1788,
				"en": "third",
				"zh": "第三",
				"phonetic": "/.../",
				"example": "I think third is important.",
				"exampleZh": "我认为第三很重要。"
			},
			{
				"id": 1789,
				"en": "thirsty",
				"zh": "渴的",
				"phonetic": "/.../",
				"example": "The result is quite thirsty.",
				"exampleZh": "结果是相当渴的的。"
			},
			{
				"id": 1790,
				"en": "thirteen",
				"zh": "十三",
				"phonetic": "/iː/",
				"example": "I think thirteen is important.",
				"exampleZh": "我认为十三很重要。"
			},
			{
				"id": 1791,
				"en": "thirty",
				"zh": "三十",
				"phonetic": "/.../",
				"example": "Let's talk about thirty.",
				"exampleZh": "让我们来谈谈三十吧。"
			},
			{
				"id": 1792,
				"en": "this",
				"zh": "这个",
				"phonetic": "/.../",
				"example": "I think this is important.",
				"exampleZh": "我认为这个很重要。"
			},
			{
				"id": 1793,
				"en": "those",
				"zh": "那些",
				"phonetic": "/.../",
				"example": "Let's talk about those.",
				"exampleZh": "让我们来谈谈那些吧。"
			},
			{
				"id": 1794,
				"en": "though",
				"zh": "虽然",
				"phonetic": "/ʌf/",
				"example": "I think though is important.",
				"exampleZh": "我认为虽然很重要。"
			},
			{
				"id": 1795,
				"en": "thousand",
				"zh": "一千",
				"phonetic": "/aʊ/",
				"example": "Let's talk about thousand.",
				"exampleZh": "让我们来谈谈一千吧。"
			},
			{
				"id": 1796,
				"en": "three",
				"zh": "三",
				"phonetic": "/iː/",
				"example": "I think three is important.",
				"exampleZh": "我认为三很重要。"
			},
			{
				"id": 1797,
				"en": "through",
				"zh": "通过",
				"phonetic": "/ʌf/",
				"example": "Let's talk about through.",
				"exampleZh": "让我们来谈谈通过吧。"
			},
			{
				"id": 1798,
				"en": "Thursday",
				"zh": "周四",
				"phonetic": "/eɪ/",
				"example": "The Thursday is very useful.",
				"exampleZh": "周四非常有用。"
			},
			{
				"id": 1799,
				"en": "ticket",
				"zh": "票",
				"phonetic": "/.../",
				"example": "Do you understand this ticket?",
				"exampleZh": "你理解这个票吗？"
			},
			{
				"id": 1800,
				"en": "tidy",
				"zh": "整洁的",
				"phonetic": "/.../",
				"example": "He found the task tidy.",
				"exampleZh": "他发现这个任务是整洁的的。"
			},
			{
				"id": 1801,
				"en": "tiger",
				"zh": "老虎",
				"phonetic": "/ər/",
				"example": "This is an important tiger.",
				"exampleZh": "这是一个重要的老虎。"
			},
			{
				"id": 1802,
				"en": "till",
				"zh": "直到",
				"phonetic": "/.../",
				"example": "I think till is important.",
				"exampleZh": "我认为直到很重要。"
			},
			{
				"id": 1803,
				"en": "time",
				"zh": "时间",
				"phonetic": "/.../",
				"example": "The time is very useful.",
				"exampleZh": "时间非常有用。"
			},
			{
				"id": 1804,
				"en": "tired",
				"zh": "累的",
				"phonetic": "/d/",
				"example": "The result is quite tired.",
				"exampleZh": "结果是相当累的的。"
			},
			{
				"id": 1805,
				"en": "to",
				"zh": "到",
				"phonetic": "/.../",
				"example": "Let's talk about to.",
				"exampleZh": "让我们来谈谈到吧。"
			},
			{
				"id": 1806,
				"en": "today",
				"zh": "今天",
				"phonetic": "/eɪ/",
				"example": "This is an important today.",
				"exampleZh": "这是一个重要的今天。"
			},
			{
				"id": 1807,
				"en": "together",
				"zh": "一起",
				"phonetic": "/ər/",
				"example": "They worked together on the project.",
				"exampleZh": "他们一起地在这个项目上工作。"
			},
			{
				"id": 1808,
				"en": "toilet",
				"zh": "厕所",
				"phonetic": "/ɔɪ/",
				"example": "The toilet is very useful.",
				"exampleZh": "厕所非常有用。"
			},
			{
				"id": 1809,
				"en": "tomato",
				"zh": "西红柿",
				"phonetic": "/.../",
				"example": "Do you understand this tomato?",
				"exampleZh": "你理解这个西红柿吗？"
			},
			{
				"id": 1810,
				"en": "tomorrow",
				"zh": "明天",
				"phonetic": "/aʊ/",
				"example": "tomorrow plays a key role in our life.",
				"exampleZh": "明天在我们的生活中起着关键作用。"
			},
			{
				"id": 1811,
				"en": "tonight",
				"zh": "今晚",
				"phonetic": "/aɪt/",
				"example": "This is an important tonight.",
				"exampleZh": "这是一个重要的今晚。"
			},
			{
				"id": 1812,
				"en": "too",
				"zh": "也；太",
				"phonetic": "/uː/",
				"example": "She too agreed with us.",
				"exampleZh": "她也；太地同意了我们的意见。"
			},
			{
				"id": 1813,
				"en": "tooth",
				"zh": "牙齿",
				"phonetic": "/θ/",
				"example": "The tooth is very useful.",
				"exampleZh": "牙齿非常有用。"
			},
			{
				"id": 1814,
				"en": "top",
				"zh": "顶部",
				"phonetic": "/.../",
				"example": "Do you understand this top?",
				"exampleZh": "你理解这个顶部吗？"
			},
			{
				"id": 1815,
				"en": "tour",
				"zh": "旅行",
				"phonetic": "/aʊ/",
				"example": "tour plays a key role in our life.",
				"exampleZh": "旅行在我们的生活中起着关键作用。"
			},
			{
				"id": 1816,
				"en": "town",
				"zh": "城镇",
				"phonetic": "/aʊ/",
				"example": "This is an important town.",
				"exampleZh": "这是一个重要的城镇。"
			},
			{
				"id": 1817,
				"en": "toy",
				"zh": "玩具",
				"phonetic": "/ɔɪ/",
				"example": "I really like the toy.",
				"exampleZh": "我真的很喜欢这个玩具。"
			},
			{
				"id": 1818,
				"en": "train",
				"zh": "火车",
				"phonetic": "/eɪ/",
				"example": "The train is very useful.",
				"exampleZh": "火车非常有用。"
			},
			{
				"id": 1819,
				"en": "travel",
				"zh": "旅行",
				"phonetic": "/.../",
				"example": "They decided to travel the plan.",
				"exampleZh": "他们决定旅行这个计划。"
			},
			{
				"id": 1820,
				"en": "tree",
				"zh": "树",
				"phonetic": "/iː/",
				"example": "tree plays a key role in our life.",
				"exampleZh": "树在我们的生活中起着关键作用。"
			},
			{
				"id": 1821,
				"en": "trip",
				"zh": "旅行",
				"phonetic": "/.../",
				"example": "This is an important trip.",
				"exampleZh": "这是一个重要的旅行。"
			},
			{
				"id": 1822,
				"en": "trouble",
				"zh": "麻烦",
				"phonetic": "/aʊ/",
				"example": "I really like the trouble.",
				"exampleZh": "我真的很喜欢这个麻烦。"
			},
			{
				"id": 1823,
				"en": "trousers",
				"zh": "裤子",
				"phonetic": "/aʊ/",
				"example": "The trousers is very useful.",
				"exampleZh": "裤子非常有用。"
			},
			{
				"id": 1824,
				"en": "truck",
				"zh": "卡车",
				"phonetic": "/k/",
				"example": "Do you understand this truck?",
				"exampleZh": "你理解这个卡车吗？"
			},
			{
				"id": 1825,
				"en": "true",
				"zh": "真实的",
				"phonetic": "/.../",
				"example": "He found the task true.",
				"exampleZh": "他发现这个任务是真实的的。"
			},
			{
				"id": 1826,
				"en": "try",
				"zh": "尝试",
				"phonetic": "/.../",
				"example": "We should try more carefully.",
				"exampleZh": "我们应该更仔细地尝试。"
			},
			{
				"id": 1827,
				"en": "Tuesday",
				"zh": "周二",
				"phonetic": "/eɪ/",
				"example": "I really like the Tuesday.",
				"exampleZh": "我真的很喜欢这个周二。"
			},
			{
				"id": 1828,
				"en": "turn",
				"zh": "转",
				"phonetic": "/.../",
				"example": "Let's turn together.",
				"exampleZh": "让我们一起转吧。"
			},
			{
				"id": 1829,
				"en": "TV",
				"zh": "电视",
				"phonetic": "/.../",
				"example": "Do you understand this TV?",
				"exampleZh": "你理解这个电视吗？"
			},
			{
				"id": 1830,
				"en": "twelfth",
				"zh": "第十二",
				"phonetic": "/θ/",
				"example": "I think twelfth is important.",
				"exampleZh": "我认为第十二很重要。"
			},
			{
				"id": 1831,
				"en": "twelve",
				"zh": "十二",
				"phonetic": "/.../",
				"example": "Let's talk about twelve.",
				"exampleZh": "让我们来谈谈十二吧。"
			},
			{
				"id": 1832,
				"en": "twentieth",
				"zh": "第二十",
				"phonetic": "/θ/",
				"example": "I think twentieth is important.",
				"exampleZh": "我认为第二十很重要。"
			},
			{
				"id": 1833,
				"en": "twenty",
				"zh": "二十",
				"phonetic": "/.../",
				"example": "Let's talk about twenty.",
				"exampleZh": "让我们来谈谈二十吧。"
			},
			{
				"id": 1834,
				"en": "twice",
				"zh": "两次",
				"phonetic": "/.../",
				"example": "They worked twice on the project.",
				"exampleZh": "他们两次地在这个项目上工作。"
			},
			{
				"id": 1835,
				"en": "two",
				"zh": "二",
				"phonetic": "/.../",
				"example": "Let's talk about two.",
				"exampleZh": "让我们来谈谈二吧。"
			},
			{
				"id": 1836,
				"en": "uncle",
				"zh": "叔叔",
				"phonetic": "/.../",
				"example": "This is an important uncle.",
				"exampleZh": "这是一个重要的叔叔。"
			},
			{
				"id": 1837,
				"en": "under",
				"zh": "在...下面",
				"phonetic": "/ər/",
				"example": "Let's talk about under.",
				"exampleZh": "让我们来谈谈在...下面吧。"
			},
			{
				"id": 1838,
				"en": "understand",
				"zh": "理解",
				"phonetic": "/.../",
				"example": "Let's understand together.",
				"exampleZh": "让我们一起理解吧。"
			},
			{
				"id": 1839,
				"en": "until",
				"zh": "直到",
				"phonetic": "/.../",
				"example": "Let's talk about until.",
				"exampleZh": "让我们来谈谈直到吧。"
			},
			{
				"id": 1840,
				"en": "up",
				"zh": "向上",
				"phonetic": "/.../",
				"example": "They worked up on the project.",
				"exampleZh": "他们向上地在这个项目上工作。"
			},
			{
				"id": 1841,
				"en": "us",
				"zh": "我们（宾格）",
				"phonetic": "/.../",
				"example": "Let's talk about us.",
				"exampleZh": "让我们来谈谈我们（宾格）吧。"
			},
			{
				"id": 1842,
				"en": "use",
				"zh": "使用",
				"phonetic": "/.../",
				"example": "She wants to use this task.",
				"exampleZh": "她想使用这个任务。"
			},
			{
				"id": 1843,
				"en": "usually",
				"zh": "通常",
				"phonetic": "/li/",
				"example": "They worked usually on the project.",
				"exampleZh": "他们通常地在这个项目上工作。"
			},
			{
				"id": 1844,
				"en": "vegetable",
				"zh": "蔬菜",
				"phonetic": "/əbəl/",
				"example": "Do you understand this vegetable?",
				"exampleZh": "你理解这个蔬菜吗？"
			},
			{
				"id": 1845,
				"en": "very",
				"zh": "非常",
				"phonetic": "/.../",
				"example": "She very agreed with us.",
				"exampleZh": "她非常地同意了我们的意见。"
			},
			{
				"id": 1846,
				"en": "village",
				"zh": "村庄",
				"phonetic": "/.../",
				"example": "This is an important village.",
				"exampleZh": "这是一个重要的村庄。"
			},
			{
				"id": 1847,
				"en": "visit",
				"zh": "参观",
				"phonetic": "/.../",
				"example": "She wants to visit this task.",
				"exampleZh": "她想参观这个任务。"
			},
			{
				"id": 1848,
				"en": "voice",
				"zh": "声音",
				"phonetic": "/ɔɪ/",
				"example": "The voice is very useful.",
				"exampleZh": "声音非常有用。"
			},
			{
				"id": 1849,
				"en": "wait",
				"zh": "等待",
				"phonetic": "/eɪ/",
				"example": "They decided to wait the plan.",
				"exampleZh": "他们决定等待这个计划。"
			},
			{
				"id": 1850,
				"en": "wake",
				"zh": "醒来",
				"phonetic": "/.../",
				"example": "I need to wake before the deadline.",
				"exampleZh": "我需要在截止日期前醒来。"
			},
			{
				"id": 1851,
				"en": "walk",
				"zh": "走路",
				"phonetic": "/.../",
				"example": "We should walk more carefully.",
				"exampleZh": "我们应该更仔细地走路。"
			},
			{
				"id": 1852,
				"en": "wall",
				"zh": "墙",
				"phonetic": "/.../",
				"example": "I really like the wall.",
				"exampleZh": "我真的很喜欢这个墙。"
			},
			{
				"id": 1853,
				"en": "want",
				"zh": "想要",
				"phonetic": "/.../",
				"example": "Let's want together.",
				"exampleZh": "让我们一起想要吧。"
			},
			{
				"id": 1854,
				"en": "warm",
				"zh": "温暖的",
				"phonetic": "/.../",
				"example": "The result is quite warm.",
				"exampleZh": "结果是相当温暖的的。"
			},
			{
				"id": 1855,
				"en": "wash",
				"zh": "洗",
				"phonetic": "/ʃ/",
				"example": "I need to wash before the deadline.",
				"exampleZh": "我需要在截止日期前洗。"
			},
			{
				"id": 1856,
				"en": "watch",
				"zh": "观看；手表",
				"phonetic": "/tʃ/",
				"example": "We should watch more carefully.",
				"exampleZh": "我们应该更仔细地观看；手表。"
			},
			{
				"id": 1857,
				"en": "water",
				"zh": "水",
				"phonetic": "/ər/",
				"example": "I really like the water.",
				"exampleZh": "我真的很喜欢这个水。"
			},
			{
				"id": 1858,
				"en": "way",
				"zh": "路；方式",
				"phonetic": "/eɪ/",
				"example": "The way is very useful.",
				"exampleZh": "路；方式非常有用。"
			},
			{
				"id": 1859,
				"en": "we",
				"zh": "我们",
				"phonetic": "/.../",
				"example": "Let's talk about we.",
				"exampleZh": "让我们来谈谈我们吧。"
			},
			{
				"id": 1860,
				"en": "wear",
				"zh": "穿",
				"phonetic": "/ɑːr/",
				"example": "I need to wear before the deadline.",
				"exampleZh": "我需要在截止日期前穿。"
			},
			{
				"id": 1861,
				"en": "weather",
				"zh": "天气",
				"phonetic": "/ər/",
				"example": "This is an important weather.",
				"exampleZh": "这是一个重要的天气。"
			},
			{
				"id": 1862,
				"en": "Wednesday",
				"zh": "周三",
				"phonetic": "/eɪ/",
				"example": "I really like the Wednesday.",
				"exampleZh": "我真的很喜欢这个周三。"
			},
			{
				"id": 1863,
				"en": "week",
				"zh": "星期",
				"phonetic": "/iː/",
				"example": "The week is very useful.",
				"exampleZh": "星期非常有用。"
			},
			{
				"id": 1864,
				"en": "welcome",
				"zh": "欢迎",
				"phonetic": "/.../",
				"example": "They decided to welcome the plan.",
				"exampleZh": "他们决定欢迎这个计划。"
			},
			{
				"id": 1865,
				"en": "well",
				"zh": "好地",
				"phonetic": "/.../",
				"example": "He spoke well to the audience.",
				"exampleZh": "他好地地对观众说话。"
			},
			{
				"id": 1866,
				"en": "west",
				"zh": "西方",
				"phonetic": "/.../",
				"example": "This is an important west.",
				"exampleZh": "这是一个重要的西方。"
			},
			{
				"id": 1867,
				"en": "wet",
				"zh": "湿的",
				"phonetic": "/.../",
				"example": "She looks wet today.",
				"exampleZh": "她今天看起来很湿的。"
			},
			{
				"id": 1868,
				"en": "what",
				"zh": "什么",
				"phonetic": "/w/",
				"example": "I think what is important.",
				"exampleZh": "我认为什么很重要。"
			},
			{
				"id": 1869,
				"en": "when",
				"zh": "什么时候",
				"phonetic": "/w/",
				"example": "She when agreed with us.",
				"exampleZh": "她什么时候地同意了我们的意见。"
			},
			{
				"id": 1870,
				"en": "where",
				"zh": "哪里",
				"phonetic": "/w/",
				"example": "They worked where on the project.",
				"exampleZh": "他们哪里地在这个项目上工作。"
			},
			{
				"id": 1871,
				"en": "which",
				"zh": "哪一个",
				"phonetic": "/tʃ/",
				"example": "Let's talk about which.",
				"exampleZh": "让我们来谈谈哪一个吧。"
			},
			{
				"id": 1872,
				"en": "while",
				"zh": "当...时",
				"phonetic": "/w/",
				"example": "I think while is important.",
				"exampleZh": "我认为当...时很重要。"
			},
			{
				"id": 1873,
				"en": "white",
				"zh": "白色的",
				"phonetic": "/w/",
				"example": "It's a white idea.",
				"exampleZh": "这是一个白色的的主意。"
			},
			{
				"id": 1874,
				"en": "who",
				"zh": "谁",
				"phonetic": "/w/",
				"example": "I think who is important.",
				"exampleZh": "我认为谁很重要。"
			},
			{
				"id": 1875,
				"en": "whose",
				"zh": "谁的",
				"phonetic": "/w/",
				"example": "Let's talk about whose.",
				"exampleZh": "让我们来谈谈谁的吧。"
			},
			{
				"id": 1876,
				"en": "why",
				"zh": "为什么",
				"phonetic": "/w/",
				"example": "They worked why on the project.",
				"exampleZh": "他们为什么地在这个项目上工作。"
			},
			{
				"id": 1877,
				"en": "wide",
				"zh": "宽的",
				"phonetic": "/.../",
				"example": "She looks wide today.",
				"exampleZh": "她今天看起来很宽的。"
			},
			{
				"id": 1878,
				"en": "wife",
				"zh": "妻子",
				"phonetic": "/.../",
				"example": "The wife is very useful.",
				"exampleZh": "妻子非常有用。"
			},
			{
				"id": 1879,
				"en": "will",
				"zh": "将要",
				"phonetic": "/.../",
				"example": "They decided to will the plan.",
				"exampleZh": "他们决定将要这个计划。"
			},
			{
				"id": 1880,
				"en": "win",
				"zh": "赢",
				"phonetic": "/.../",
				"example": "I need to win before the deadline.",
				"exampleZh": "我需要在截止日期前赢。"
			},
			{
				"id": 1881,
				"en": "wind",
				"zh": "风",
				"phonetic": "/.../",
				"example": "This is an important wind.",
				"exampleZh": "这是一个重要的风。"
			},
			{
				"id": 1882,
				"en": "window",
				"zh": "窗户",
				"phonetic": "/aʊ/",
				"example": "I really like the window.",
				"exampleZh": "我真的很喜欢这个窗户。"
			},
			{
				"id": 1883,
				"en": "winter",
				"zh": "冬天",
				"phonetic": "/ər/",
				"example": "The winter is very useful.",
				"exampleZh": "冬天非常有用。"
			},
			{
				"id": 1884,
				"en": "wish",
				"zh": "祝愿",
				"phonetic": "/ʃ/",
				"example": "They decided to wish the plan.",
				"exampleZh": "他们决定祝愿这个计划。"
			},
			{
				"id": 1885,
				"en": "with",
				"zh": "和；用",
				"phonetic": "/θ/",
				"example": "Let's talk about with.",
				"exampleZh": "让我们来谈谈和；用吧。"
			},
			{
				"id": 1886,
				"en": "without",
				"zh": "没有",
				"phonetic": "/aʊ/",
				"example": "I think without is important.",
				"exampleZh": "我认为没有很重要。"
			},
			{
				"id": 1887,
				"en": "woman",
				"zh": "女人",
				"phonetic": "/.../",
				"example": "I really like the woman.",
				"exampleZh": "我真的很喜欢这个女人。"
			},
			{
				"id": 1888,
				"en": "wonderful",
				"zh": "精彩的",
				"phonetic": "/fəl/",
				"example": "It's a wonderful idea.",
				"exampleZh": "这是一个精彩的的主意。"
			},
			{
				"id": 1889,
				"en": "wood",
				"zh": "木头",
				"phonetic": "/uː/",
				"example": "Do you understand this wood?",
				"exampleZh": "你理解这个木头吗？"
			},
			{
				"id": 1890,
				"en": "word",
				"zh": "单词",
				"phonetic": "/.../",
				"example": "word plays a key role in our life.",
				"exampleZh": "单词在我们的生活中起着关键作用。"
			},
			{
				"id": 1891,
				"en": "work",
				"zh": "工作",
				"phonetic": "/.../",
				"example": "We should work more carefully.",
				"exampleZh": "我们应该更仔细地工作。"
			},
			{
				"id": 1892,
				"en": "world",
				"zh": "世界",
				"phonetic": "/.../",
				"example": "I really like the world.",
				"exampleZh": "我真的很喜欢这个世界。"
			},
			{
				"id": 1893,
				"en": "worry",
				"zh": "担心",
				"phonetic": "/.../",
				"example": "Let's worry together.",
				"exampleZh": "让我们一起担心吧。"
			},
			{
				"id": 1894,
				"en": "worse",
				"zh": "更糟的",
				"phonetic": "/.../",
				"example": "The result is quite worse.",
				"exampleZh": "结果是相当更糟的的。"
			},
			{
				"id": 1895,
				"en": "worst",
				"zh": "最糟的",
				"phonetic": "/.../",
				"example": "He found the task worst.",
				"exampleZh": "他发现这个任务是最糟的的。"
			},
			{
				"id": 1896,
				"en": "write",
				"zh": "写",
				"phonetic": "/r/",
				"example": "We should write more carefully.",
				"exampleZh": "我们应该更仔细地写。"
			},
			{
				"id": 1897,
				"en": "wrong",
				"zh": "错误的",
				"phonetic": "/r/",
				"example": "She looks wrong today.",
				"exampleZh": "她今天看起来很错误的。"
			},
			{
				"id": 1898,
				"en": "year",
				"zh": "年",
				"phonetic": "/ɑːr/",
				"example": "The year is very useful.",
				"exampleZh": "年非常有用。"
			},
			{
				"id": 1899,
				"en": "yellow",
				"zh": "黄色的",
				"phonetic": "/aʊ/",
				"example": "The result is quite yellow.",
				"exampleZh": "结果是相当黄色的的。"
			},
			{
				"id": 1900,
				"en": "yes",
				"zh": "是的",
				"phonetic": "/.../",
				"example": "They worked yes on the project.",
				"exampleZh": "他们是的地在这个项目上工作。"
			},
			{
				"id": 1901,
				"en": "yesterday",
				"zh": "昨天",
				"phonetic": "/eɪ/",
				"example": "This is an important yesterday.",
				"exampleZh": "这是一个重要的昨天。"
			},
			{
				"id": 1902,
				"en": "yet",
				"zh": "还",
				"phonetic": "/.../",
				"example": "She yet agreed with us.",
				"exampleZh": "她还地同意了我们的意见。"
			},
			{
				"id": 1903,
				"en": "you",
				"zh": "你",
				"phonetic": "/aʊ/",
				"example": "Let's talk about you.",
				"exampleZh": "让我们来谈谈你吧。"
			},
			{
				"id": 1904,
				"en": "young",
				"zh": "年轻的",
				"phonetic": "/aʊ/",
				"example": "The result is quite young.",
				"exampleZh": "结果是相当年轻的的。"
			},
			{
				"id": 1905,
				"en": "your",
				"zh": "你的",
				"phonetic": "/aʊ/",
				"example": "Let's talk about your.",
				"exampleZh": "让我们来谈谈你的吧。"
			},
			{
				"id": 1906,
				"en": "yours",
				"zh": "你的东西",
				"phonetic": "/aʊ/",
				"example": "I think yours is important.",
				"exampleZh": "我认为你的东西很重要。"
			},
			{
				"id": 1907,
				"en": "yourself",
				"zh": "你自己",
				"phonetic": "/aʊ/",
				"example": "Let's talk about yourself.",
				"exampleZh": "让我们来谈谈你自己吧。"
			},
			{
				"id": 1908,
				"en": "zoo",
				"zh": "动物园",
				"phonetic": "/uː/",
				"example": "The zoo is very useful.",
				"exampleZh": "动物园非常有用。"
			},
			{
				"id": 1909,
				"en": "actor",
				"zh": "演员",
				"phonetic": "/ər/",
				"example": "Do you understand this actor?",
				"exampleZh": "你理解这个演员吗？"
			},
			{
				"id": 1910,
				"en": "actress",
				"zh": "女演员",
				"phonetic": "/.../",
				"example": "actress plays a key role in our life.",
				"exampleZh": "女演员在我们的生活中起着关键作用。"
			},
			{
				"id": 1911,
				"en": "address",
				"zh": "地址",
				"phonetic": "/.../",
				"example": "This is an important address.",
				"exampleZh": "这是一个重要的地址。"
			},
			{
				"id": 1912,
				"en": "airplane",
				"zh": "飞机",
				"phonetic": "/eɪ/",
				"example": "I really like the airplane.",
				"exampleZh": "我真的很喜欢这个飞机。"
			},
			{
				"id": 1913,
				"en": "anything",
				"zh": "任何事",
				"phonetic": "/ɪŋ/",
				"example": "Let's talk about anything.",
				"exampleZh": "让我们来谈谈任何事吧。"
			},
			{
				"id": 1914,
				"en": "anywhere",
				"zh": "任何地方",
				"phonetic": "/w/",
				"example": "She anywhere agreed with us.",
				"exampleZh": "她任何地方地同意了我们的意见。"
			},
			{
				"id": 1915,
				"en": "band",
				"zh": "乐队",
				"phonetic": "/.../",
				"example": "band plays a key role in our life.",
				"exampleZh": "乐队在我们的生活中起着关键作用。"
			},
			{
				"id": 1916,
				"en": "bean",
				"zh": "豆子",
				"phonetic": "/iː/",
				"example": "This is an important bean.",
				"exampleZh": "这是一个重要的豆子。"
			},
			{
				"id": 1917,
				"en": "belt",
				"zh": "腰带",
				"phonetic": "/.../",
				"example": "I really like the belt.",
				"exampleZh": "我真的很喜欢这个腰带。"
			},
			{
				"id": 1918,
				"en": "blanket",
				"zh": "毯子",
				"phonetic": "/.../",
				"example": "The blanket is very useful.",
				"exampleZh": "毯子非常有用。"
			},
			{
				"id": 1919,
				"en": "blood",
				"zh": "血",
				"phonetic": "/uː/",
				"example": "Do you understand this blood?",
				"exampleZh": "你理解这个血吗？"
			},
			{
				"id": 1920,
				"en": "boating",
				"zh": "划船",
				"phonetic": "/ɪŋ/",
				"example": "boating plays a key role in our life.",
				"exampleZh": "划船在我们的生活中起着关键作用。"
			},
			{
				"id": 1921,
				"en": "bookstore",
				"zh": "书店",
				"phonetic": "/uː/",
				"example": "This is an important bookstore.",
				"exampleZh": "这是一个重要的书店。"
			},
			{
				"id": 1922,
				"en": "brave",
				"zh": "勇敢的",
				"phonetic": "/.../",
				"example": "She looks brave today.",
				"exampleZh": "她今天看起来很勇敢的。"
			},
			{
				"id": 1923,
				"en": "bunny",
				"zh": "小兔子",
				"phonetic": "/.../",
				"example": "The bunny is very useful.",
				"exampleZh": "小兔子非常有用。"
			},
			{
				"id": 1924,
				"en": "camera",
				"zh": "相机",
				"phonetic": "/.../",
				"example": "Do you understand this camera?",
				"exampleZh": "你理解这个相机吗？"
			},
			{
				"id": 1925,
				"en": "cartoon",
				"zh": "卡通",
				"phonetic": "/uː/",
				"example": "cartoon plays a key role in our life.",
				"exampleZh": "卡通在我们的生活中起着关键作用。"
			},
			{
				"id": 1926,
				"en": "chalk",
				"zh": "粉笔",
				"phonetic": "/.../",
				"example": "This is an important chalk.",
				"exampleZh": "这是一个重要的粉笔。"
			},
			{
				"id": 1927,
				"en": "chess",
				"zh": "国际象棋",
				"phonetic": "/.../",
				"example": "I really like the chess.",
				"exampleZh": "我真的很喜欢这个国际象棋。"
			},
			{
				"id": 1928,
				"en": "chopstick",
				"zh": "筷子",
				"phonetic": "/k/",
				"example": "The chopstick is very useful.",
				"exampleZh": "筷子非常有用。"
			},
			{
				"id": 1929,
				"en": "classmate",
				"zh": "同学",
				"phonetic": "/.../",
				"example": "Do you understand this classmate?",
				"exampleZh": "你理解这个同学吗？"
			},
			{
				"id": 1930,
				"en": "comic",
				"zh": "漫画",
				"phonetic": "/.../",
				"example": "comic plays a key role in our life.",
				"exampleZh": "漫画在我们的生活中起着关键作用。"
			},
			{
				"id": 1931,
				"en": "copy",
				"zh": "复印",
				"phonetic": "/.../",
				"example": "We should copy more carefully.",
				"exampleZh": "我们应该更仔细地复印。"
			},
			{
				"id": 1932,
				"en": "cotton",
				"zh": "棉花",
				"phonetic": "/.../",
				"example": "I really like the cotton.",
				"exampleZh": "我真的很喜欢这个棉花。"
			},
			{
				"id": 1933,
				"en": "cough",
				"zh": "咳嗽",
				"phonetic": "/ʌf/",
				"example": "Let's cough together.",
				"exampleZh": "让我们一起咳嗽吧。"
			},
			{
				"id": 1934,
				"en": "crayon",
				"zh": "蜡笔",
				"phonetic": "/eɪ/",
				"example": "Do you understand this crayon?",
				"exampleZh": "你理解这个蜡笔吗？"
			},
			{
				"id": 1935,
				"en": "cute",
				"zh": "可爱的",
				"phonetic": "/.../",
				"example": "He found the task cute.",
				"exampleZh": "他发现这个任务是可爱的的。"
			},
			{
				"id": 1936,
				"en": "danger",
				"zh": "危险",
				"phonetic": "/ər/",
				"example": "This is an important danger.",
				"exampleZh": "这是一个重要的危险。"
			},
			{
				"id": 1937,
				"en": "dinosaur",
				"zh": "恐龙",
				"phonetic": "/ɔː/",
				"example": "I really like the dinosaur.",
				"exampleZh": "我真的很喜欢这个恐龙。"
			},
			{
				"id": 1938,
				"en": "dragon",
				"zh": "龙",
				"phonetic": "/.../",
				"example": "The dragon is very useful.",
				"exampleZh": "龙非常有用。"
			},
			{
				"id": 1939,
				"en": "drum",
				"zh": "鼓",
				"phonetic": "/.../",
				"example": "Do you understand this drum?",
				"exampleZh": "你理解这个鼓吗？"
			},
			{
				"id": 1940,
				"en": "dumpling",
				"zh": "饺子",
				"phonetic": "/ɪŋ/",
				"example": "dumpling plays a key role in our life.",
				"exampleZh": "饺子在我们的生活中起着关键作用。"
			},
			{
				"id": 1941,
				"en": "energy",
				"zh": "能量",
				"phonetic": "/.../",
				"example": "This is an important energy.",
				"exampleZh": "这是一个重要的能量。"
			},
			{
				"id": 1942,
				"en": "envelope",
				"zh": "信封",
				"phonetic": "/.../",
				"example": "I really like the envelope.",
				"exampleZh": "我真的很喜欢这个信封。"
			},
			{
				"id": 1943,
				"en": "eraser",
				"zh": "橡皮",
				"phonetic": "/ər/",
				"example": "The eraser is very useful.",
				"exampleZh": "橡皮非常有用。"
			},
			{
				"id": 1944,
				"en": "fever",
				"zh": "发烧",
				"phonetic": "/ər/",
				"example": "Do you understand this fever?",
				"exampleZh": "你理解这个发烧吗？"
			},
			{
				"id": 1945,
				"en": "firework",
				"zh": "烟花",
				"phonetic": "/.../",
				"example": "firework plays a key role in our life.",
				"exampleZh": "烟花在我们的生活中起着关键作用。"
			},
			{
				"id": 1946,
				"en": "fishing",
				"zh": "钓鱼",
				"phonetic": "/ɪŋ/",
				"example": "This is an important fishing.",
				"exampleZh": "这是一个重要的钓鱼。"
			},
			{
				"id": 1947,
				"en": "flour",
				"zh": "面粉",
				"phonetic": "/aʊ/",
				"example": "I really like the flour.",
				"exampleZh": "我真的很喜欢这个面粉。"
			},
			{
				"id": 1948,
				"en": "frog",
				"zh": "青蛙",
				"phonetic": "/.../",
				"example": "The frog is very useful.",
				"exampleZh": "青蛙非常有用。"
			},
			{
				"id": 1949,
				"en": "geography",
				"zh": "地理",
				"phonetic": "/.../",
				"example": "Do you understand this geography?",
				"exampleZh": "你理解这个地理吗？"
			},
			{
				"id": 1950,
				"en": "giraffe",
				"zh": "长颈鹿",
				"phonetic": "/.../",
				"example": "giraffe plays a key role in our life.",
				"exampleZh": "长颈鹿在我们的生活中起着关键作用。"
			},
			{
				"id": 1951,
				"en": "glue",
				"zh": "胶水",
				"phonetic": "/.../",
				"example": "This is an important glue.",
				"exampleZh": "这是一个重要的胶水。"
			},
			{
				"id": 1952,
				"en": "goose",
				"zh": "鹅",
				"phonetic": "/uː/",
				"example": "I really like the goose.",
				"exampleZh": "我真的很喜欢这个鹅。"
			},
			{
				"id": 1953,
				"en": "grape",
				"zh": "葡萄",
				"phonetic": "/.../",
				"example": "The grape is very useful.",
				"exampleZh": "葡萄非常有用。"
			},
			{
				"id": 1954,
				"en": "gym",
				"zh": "体育馆",
				"phonetic": "/.../",
				"example": "Do you understand this gym?",
				"exampleZh": "你理解这个体育馆吗？"
			},
			{
				"id": 1955,
				"en": "hamster",
				"zh": "仓鼠",
				"phonetic": "/ər/",
				"example": "hamster plays a key role in our life.",
				"exampleZh": "仓鼠在我们的生活中起着关键作用。"
			},
			{
				"id": 1956,
				"en": "headache",
				"zh": "头痛",
				"phonetic": "/iː/",
				"example": "This is an important headache.",
				"exampleZh": "这是一个重要的头痛。"
			},
			{
				"id": 1957,
				"en": "hippo",
				"zh": "河马",
				"phonetic": "/.../",
				"example": "I really like the hippo.",
				"exampleZh": "我真的很喜欢这个河马。"
			},
			{
				"id": 1958,
				"en": "honey",
				"zh": "蜂蜜",
				"phonetic": "/.../",
				"example": "The honey is very useful.",
				"exampleZh": "蜂蜜非常有用。"
			},
			{
				"id": 1959,
				"en": "ice-cream",
				"zh": "冰淇淋",
				"phonetic": "/iː/",
				"example": "Do you understand this ice-cream?",
				"exampleZh": "你理解这个冰淇淋吗？"
			},
			{
				"id": 1960,
				"en": "jeans",
				"zh": "牛仔裤",
				"phonetic": "/iː/",
				"example": "jeans plays a key role in our life.",
				"exampleZh": "牛仔裤在我们的生活中起着关键作用。"
			},
			{
				"id": 1961,
				"en": "kangaroo",
				"zh": "袋鼠",
				"phonetic": "/uː/",
				"example": "This is an important kangaroo.",
				"exampleZh": "这是一个重要的袋鼠。"
			},
			{
				"id": 1962,
				"en": "magic",
				"zh": "魔术",
				"phonetic": "/.../",
				"example": "I really like the magic.",
				"exampleZh": "我真的很喜欢这个魔术。"
			},
			{
				"id": 1963,
				"en": "mark",
				"zh": "标记",
				"phonetic": "/.../",
				"example": "The mark is very useful.",
				"exampleZh": "标记非常有用。"
			},
			{
				"id": 1964,
				"en": "message",
				"zh": "消息",
				"phonetic": "/.../",
				"example": "Do you understand this message?",
				"exampleZh": "你理解这个消息吗？"
			},
			{
				"id": 1965,
				"en": "mirror",
				"zh": "镜子",
				"phonetic": "/ər/",
				"example": "mirror plays a key role in our life.",
				"exampleZh": "镜子在我们的生活中起着关键作用。"
			},
			{
				"id": 1966,
				"en": "mouse",
				"zh": "老鼠",
				"phonetic": "/aʊ/",
				"example": "This is an important mouse.",
				"exampleZh": "这是一个重要的老鼠。"
			},
			{
				"id": 1967,
				"en": "mushroom",
				"zh": "蘑菇",
				"phonetic": "/uː/",
				"example": "I really like the mushroom.",
				"exampleZh": "我真的很喜欢这个蘑菇。"
			},
			{
				"id": 1968,
				"en": "ocean",
				"zh": "海洋",
				"phonetic": "/iː/",
				"example": "The ocean is very useful.",
				"exampleZh": "海洋非常有用。"
			},
			{
				"id": 1969,
				"en": "panda",
				"zh": "熊猫",
				"phonetic": "/.../",
				"example": "Do you understand this panda?",
				"exampleZh": "你理解这个熊猫吗？"
			},
			{
				"id": 1970,
				"en": "peach",
				"zh": "桃子",
				"phonetic": "/tʃ/",
				"example": "peach plays a key role in our life.",
				"exampleZh": "桃子在我们的生活中起着关键作用。"
			},
			{
				"id": 1971,
				"en": "pear",
				"zh": "梨",
				"phonetic": "/ɑːr/",
				"example": "This is an important pear.",
				"exampleZh": "这是一个重要的梨。"
			},
			{
				"id": 1972,
				"en": "penguin",
				"zh": "企鹅",
				"phonetic": "/.../",
				"example": "I really like the penguin.",
				"exampleZh": "我真的很喜欢这个企鹅。"
			},
			{
				"id": 1973,
				"en": "pilot",
				"zh": "飞行员",
				"phonetic": "/.../",
				"example": "The pilot is very useful.",
				"exampleZh": "飞行员非常有用。"
			},
			{
				"id": 1974,
				"en": "pink",
				"zh": "粉色的",
				"phonetic": "/.../",
				"example": "The result is quite pink.",
				"exampleZh": "结果是相当粉色的的。"
			},
			{
				"id": 1975,
				"en": "plate",
				"zh": "盘子",
				"phonetic": "/.../",
				"example": "plate plays a key role in our life.",
				"exampleZh": "盘子在我们的生活中起着关键作用。"
			},
			{
				"id": 1976,
				"en": "popcorn",
				"zh": "爆米花",
				"phonetic": "/.../",
				"example": "This is an important popcorn.",
				"exampleZh": "这是一个重要的爆米花。"
			},
			{
				"id": 1977,
				"en": "prince",
				"zh": "王子",
				"phonetic": "/.../",
				"example": "I really like the prince.",
				"exampleZh": "我真的很喜欢这个王子。"
			},
			{
				"id": 1978,
				"en": "princess",
				"zh": "公主",
				"phonetic": "/.../",
				"example": "The princess is very useful.",
				"exampleZh": "公主非常有用。"
			},
			{
				"id": 1979,
				"en": "puzzle",
				"zh": "拼图",
				"phonetic": "/.../",
				"example": "Do you understand this puzzle?",
				"exampleZh": "你理解这个拼图吗？"
			},
			{
				"id": 1980,
				"en": "rainbow",
				"zh": "彩虹",
				"phonetic": "/eɪ/",
				"example": "rainbow plays a key role in our life.",
				"exampleZh": "彩虹在我们的生活中起着关键作用。"
			},
			{
				"id": 1981,
				"en": "rock",
				"zh": "石头",
				"phonetic": "/k/",
				"example": "This is an important rock.",
				"exampleZh": "这是一个重要的石头。"
			},
			{
				"id": 1982,
				"en": "sail",
				"zh": "航行",
				"phonetic": "/eɪ/",
				"example": "She wants to sail this task.",
				"exampleZh": "她想航行这个任务。"
			},
			{
				"id": 1983,
				"en": "sandwich",
				"zh": "三明治",
				"phonetic": "/tʃ/",
				"example": "The sandwich is very useful.",
				"exampleZh": "三明治非常有用。"
			},
			{
				"id": 1984,
				"en": "scarf",
				"zh": "围巾",
				"phonetic": "/.../",
				"example": "Do you understand this scarf?",
				"exampleZh": "你理解这个围巾吗？"
			},
			{
				"id": 1985,
				"en": "scissors",
				"zh": "剪刀",
				"phonetic": "/.../",
				"example": "scissors plays a key role in our life.",
				"exampleZh": "剪刀在我们的生活中起着关键作用。"
			},
			{
				"id": 1986,
				"en": "shape",
				"zh": "形状",
				"phonetic": "/.../",
				"example": "This is an important shape.",
				"exampleZh": "这是一个重要的形状。"
			},
			{
				"id": 1987,
				"en": "shell",
				"zh": "贝壳",
				"phonetic": "/.../",
				"example": "I really like the shell.",
				"exampleZh": "我真的很喜欢这个贝壳。"
			},
			{
				"id": 1988,
				"en": "shorts",
				"zh": "短裤",
				"phonetic": "/.../",
				"example": "The shorts is very useful.",
				"exampleZh": "短裤非常有用。"
			},
			{
				"id": 1989,
				"en": "smart",
				"zh": "聪明的",
				"phonetic": "/.../",
				"example": "The result is quite smart.",
				"exampleZh": "结果是相当聪明的的。"
			},
			{
				"id": 1990,
				"en": "snake",
				"zh": "蛇",
				"phonetic": "/.../",
				"example": "snake plays a key role in our life.",
				"exampleZh": "蛇在我们的生活中起着关键作用。"
			},
			{
				"id": 1991,
				"en": "snowman",
				"zh": "雪人",
				"phonetic": "/aʊ/",
				"example": "This is an important snowman.",
				"exampleZh": "这是一个重要的雪人。"
			},
			{
				"id": 1992,
				"en": "soldier",
				"zh": "士兵",
				"phonetic": "/ər/",
				"example": "I really like the soldier.",
				"exampleZh": "我真的很喜欢这个士兵。"
			},
			{
				"id": 1993,
				"en": "spider",
				"zh": "蜘蛛",
				"phonetic": "/ər/",
				"example": "The spider is very useful.",
				"exampleZh": "蜘蛛非常有用。"
			},
			{
				"id": 1994,
				"en": "stomach",
				"zh": "胃",
				"phonetic": "/tʃ/",
				"example": "Do you understand this stomach?",
				"exampleZh": "你理解这个胃吗？"
			},
			{
				"id": 1995,
				"en": "subway",
				"zh": "地铁",
				"phonetic": "/eɪ/",
				"example": "subway plays a key role in our life.",
				"exampleZh": "地铁在我们的生活中起着关键作用。"
			},
			{
				"id": 1996,
				"en": "sweater",
				"zh": "毛衣",
				"phonetic": "/ər/",
				"example": "This is an important sweater.",
				"exampleZh": "这是一个重要的毛衣。"
			},
			{
				"id": 1997,
				"en": "tail",
				"zh": "尾巴",
				"phonetic": "/eɪ/",
				"example": "I really like the tail.",
				"exampleZh": "我真的很喜欢这个尾巴。"
			},
			{
				"id": 1998,
				"en": "teeth",
				"zh": "牙齿",
				"phonetic": "/θ/",
				"example": "The teeth is very useful.",
				"exampleZh": "牙齿非常有用。"
			},
			{
				"id": 1999,
				"en": "toe",
				"zh": "脚趾",
				"phonetic": "/.../",
				"example": "Do you understand this toe?",
				"exampleZh": "你理解这个脚趾吗？"
			},
			{
				"id": 2000,
				"en": "toothbrush",
				"zh": "牙刷",
				"phonetic": "/ʃ/",
				"example": "toothbrush plays a key role in our life.",
				"exampleZh": "牙刷在我们的生活中起着关键作用。"
			}
		]
	},
	{
		"id": 2,
		"category": "初中英语",
		"icon": "📚",
		"words": [
			{
				"id": 2001,
				"en": "towel",
				"zh": "毛巾",
				"phonetic": "/aʊ/",
				"example": "This is an important towel.",
				"exampleZh": "这是一个重要的毛巾。"
			},
			{
				"id": 2002,
				"en": "turtle",
				"zh": "乌龟",
				"phonetic": "/.../",
				"example": "I really like the turtle.",
				"exampleZh": "我真的很喜欢这个乌龟。"
			},
			{
				"id": 2003,
				"en": "umbrella",
				"zh": "雨伞",
				"phonetic": "/.../",
				"example": "The umbrella is very useful.",
				"exampleZh": "雨伞非常有用。"
			},
			{
				"id": 2004,
				"en": "violin",
				"zh": "小提琴",
				"phonetic": "/.../",
				"example": "Do you understand this violin?",
				"exampleZh": "你理解这个小提琴吗？"
			},
			{
				"id": 2005,
				"en": "volleyball",
				"zh": "排球",
				"phonetic": "/.../",
				"example": "volleyball plays a key role in our life.",
				"exampleZh": "排球在我们的生活中起着关键作用。"
			},
			{
				"id": 2006,
				"en": "weekend",
				"zh": "周末",
				"phonetic": "/iː/",
				"example": "This is an important weekend.",
				"exampleZh": "这是一个重要的周末。"
			},
			{
				"id": 2007,
				"en": "wheel",
				"zh": "轮子",
				"phonetic": "/w/",
				"example": "I really like the wheel.",
				"exampleZh": "我真的很喜欢这个轮子。"
			},
			{
				"id": 2008,
				"en": "windy",
				"zh": "有风的",
				"phonetic": "/.../",
				"example": "It's a windy idea.",
				"exampleZh": "这是一个有风的的主意。"
			},
			{
				"id": 2009,
				"en": "wing",
				"zh": "翅膀",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this wing?",
				"exampleZh": "你理解这个翅膀吗？"
			},
			{
				"id": 2010,
				"en": "winner",
				"zh": "赢家",
				"phonetic": "/ər/",
				"example": "winner plays a key role in our life.",
				"exampleZh": "赢家在我们的生活中起着关键作用。"
			},
			{
				"id": 2011,
				"en": "yard",
				"zh": "院子",
				"phonetic": "/.../",
				"example": "This is an important yard.",
				"exampleZh": "这是一个重要的院子。"
			},
			{
				"id": 2012,
				"en": "ability",
				"zh": "能力",
				"phonetic": "/.../",
				"example": "I really like the ability.",
				"exampleZh": "我真的很喜欢这个能力。"
			},
			{
				"id": 2013,
				"en": "abroad",
				"zh": "在国外",
				"phonetic": "/oʊ/",
				"example": "She abroad agreed with us.",
				"exampleZh": "她在国外地同意了我们的意见。"
			},
			{
				"id": 2014,
				"en": "absent",
				"zh": "缺席的",
				"phonetic": "/.../",
				"example": "The result is quite absent.",
				"exampleZh": "结果是相当缺席的的。"
			},
			{
				"id": 2015,
				"en": "absorb",
				"zh": "吸收",
				"phonetic": "/.../",
				"example": "I need to absorb before the deadline.",
				"exampleZh": "我需要在截止日期前吸收。"
			},
			{
				"id": 2016,
				"en": "abstract",
				"zh": "抽象的",
				"phonetic": "/.../",
				"example": "This is very abstract.",
				"exampleZh": "这非常抽象的。"
			},
			{
				"id": 2017,
				"en": "accent",
				"zh": "口音",
				"phonetic": "/.../",
				"example": "I really like the accent.",
				"exampleZh": "我真的很喜欢这个口音。"
			},
			{
				"id": 2018,
				"en": "accept",
				"zh": "接受",
				"phonetic": "/.../",
				"example": "Let's accept together.",
				"exampleZh": "让我们一起接受吧。"
			},
			{
				"id": 2019,
				"en": "access",
				"zh": "通道；访问",
				"phonetic": "/.../",
				"example": "Do you understand this access?",
				"exampleZh": "你理解这个通道；访问吗？"
			},
			{
				"id": 2020,
				"en": "accident",
				"zh": "事故",
				"phonetic": "/.../",
				"example": "accident plays a key role in our life.",
				"exampleZh": "事故在我们的生活中起着关键作用。"
			},
			{
				"id": 2021,
				"en": "according",
				"zh": "根据",
				"phonetic": "/ɪŋ/",
				"example": "Let's talk about according.",
				"exampleZh": "让我们来谈谈根据吧。"
			},
			{
				"id": 2022,
				"en": "account",
				"zh": "账户",
				"phonetic": "/aʊ/",
				"example": "I really like the account.",
				"exampleZh": "我真的很喜欢这个账户。"
			},
			{
				"id": 2023,
				"en": "accurate",
				"zh": "准确的",
				"phonetic": "/.../",
				"example": "It's a accurate idea.",
				"exampleZh": "这是一个准确的的主意。"
			},
			{
				"id": 2024,
				"en": "achieve",
				"zh": "实现",
				"phonetic": "/.../",
				"example": "They decided to achieve the plan.",
				"exampleZh": "他们决定实现这个计划。"
			},
			{
				"id": 2025,
				"en": "achievement",
				"zh": "成就",
				"phonetic": "/mənt/",
				"example": "achievement plays a key role in our life.",
				"exampleZh": "成就在我们的生活中起着关键作用。"
			},
			{
				"id": 2026,
				"en": "action",
				"zh": "行动",
				"phonetic": "/ʃən/",
				"example": "This is an important action.",
				"exampleZh": "这是一个重要的行动。"
			},
			{
				"id": 2027,
				"en": "active",
				"zh": "积极的",
				"phonetic": "/.../",
				"example": "She looks active today.",
				"exampleZh": "她今天看起来很积极的。"
			},
			{
				"id": 2028,
				"en": "activity",
				"zh": "活动",
				"phonetic": "/.../",
				"example": "The activity is very useful.",
				"exampleZh": "活动非常有用。"
			},
			{
				"id": 2029,
				"en": "actual",
				"zh": "实际的",
				"phonetic": "/.../",
				"example": "The result is quite actual.",
				"exampleZh": "结果是相当实际的的。"
			},
			{
				"id": 2030,
				"en": "admire",
				"zh": "欣赏；钦佩",
				"phonetic": "/.../",
				"example": "I need to admire before the deadline.",
				"exampleZh": "我需要在截止日期前欣赏；钦佩。"
			},
			{
				"id": 2031,
				"en": "admit",
				"zh": "承认",
				"phonetic": "/.../",
				"example": "We should admit more carefully.",
				"exampleZh": "我们应该更仔细地承认。"
			},
			{
				"id": 2032,
				"en": "adopt",
				"zh": "采用；收养",
				"phonetic": "/.../",
				"example": "She wants to adopt this task.",
				"exampleZh": "她想采用；收养这个任务。"
			},
			{
				"id": 2033,
				"en": "adult",
				"zh": "成年人",
				"phonetic": "/.../",
				"example": "The adult is very useful.",
				"exampleZh": "成年人非常有用。"
			},
			{
				"id": 2034,
				"en": "advance",
				"zh": "前进",
				"phonetic": "/əns/",
				"example": "They decided to advance the plan.",
				"exampleZh": "他们决定前进这个计划。"
			},
			{
				"id": 2035,
				"en": "advantage",
				"zh": "优势",
				"phonetic": "/.../",
				"example": "advantage plays a key role in our life.",
				"exampleZh": "优势在我们的生活中起着关键作用。"
			},
			{
				"id": 2036,
				"en": "adventure",
				"zh": "冒险",
				"phonetic": "/tʃər/",
				"example": "This is an important adventure.",
				"exampleZh": "这是一个重要的冒险。"
			},
			{
				"id": 2037,
				"en": "advertise",
				"zh": "做广告",
				"phonetic": "/.../",
				"example": "She wants to advertise this task.",
				"exampleZh": "她想做广告这个任务。"
			},
			{
				"id": 2038,
				"en": "advice",
				"zh": "建议",
				"phonetic": "/.../",
				"example": "The advice is very useful.",
				"exampleZh": "建议非常有用。"
			},
			{
				"id": 2039,
				"en": "advise",
				"zh": "建议",
				"phonetic": "/.../",
				"example": "They decided to advise the plan.",
				"exampleZh": "他们决定建议这个计划。"
			},
			{
				"id": 2040,
				"en": "affair",
				"zh": "事件",
				"phonetic": "/eɪ/",
				"example": "affair plays a key role in our life.",
				"exampleZh": "事件在我们的生活中起着关键作用。"
			},
			{
				"id": 2041,
				"en": "affect",
				"zh": "影响",
				"phonetic": "/.../",
				"example": "We should affect more carefully.",
				"exampleZh": "我们应该更仔细地影响。"
			},
			{
				"id": 2042,
				"en": "afford",
				"zh": "负担得起",
				"phonetic": "/.../",
				"example": "She wants to afford this task.",
				"exampleZh": "她想负担得起这个任务。"
			},
			{
				"id": 2043,
				"en": "afterwards",
				"zh": "之后",
				"phonetic": "/.../",
				"example": "She afterwards agreed with us.",
				"exampleZh": "她之后地同意了我们的意见。"
			},
			{
				"id": 2044,
				"en": "against",
				"zh": "反对",
				"phonetic": "/eɪ/",
				"example": "I think against is important.",
				"exampleZh": "我认为反对很重要。"
			},
			{
				"id": 2045,
				"en": "agency",
				"zh": "机构",
				"phonetic": "/.../",
				"example": "agency plays a key role in our life.",
				"exampleZh": "机构在我们的生活中起着关键作用。"
			},
			{
				"id": 2046,
				"en": "agreement",
				"zh": "协议",
				"phonetic": "/mənt/",
				"example": "This is an important agreement.",
				"exampleZh": "这是一个重要的协议。"
			},
			{
				"id": 2047,
				"en": "ahead",
				"zh": "在前面",
				"phonetic": "/iː/",
				"example": "They worked ahead on the project.",
				"exampleZh": "他们在前面地在这个项目上工作。"
			},
			{
				"id": 2048,
				"en": "aim",
				"zh": "目标",
				"phonetic": "/eɪ/",
				"example": "The aim is very useful.",
				"exampleZh": "目标非常有用。"
			},
			{
				"id": 2049,
				"en": "alarm",
				"zh": "闹钟",
				"phonetic": "/.../",
				"example": "Do you understand this alarm?",
				"exampleZh": "你理解这个闹钟吗？"
			},
			{
				"id": 2050,
				"en": "alive",
				"zh": "活着的",
				"phonetic": "/.../",
				"example": "He found the task alive.",
				"exampleZh": "他发现这个任务是活着的的。"
			},
			{
				"id": 2051,
				"en": "allow",
				"zh": "允许",
				"phonetic": "/aʊ/",
				"example": "We should allow more carefully.",
				"exampleZh": "我们应该更仔细地允许。"
			},
			{
				"id": 2052,
				"en": "although",
				"zh": "虽然",
				"phonetic": "/ʌf/",
				"example": "I think although is important.",
				"exampleZh": "我认为虽然很重要。"
			},
			{
				"id": 2053,
				"en": "among",
				"zh": "在...之中",
				"phonetic": "/.../",
				"example": "Let's talk about among.",
				"exampleZh": "让我们来谈谈在...之中吧。"
			},
			{
				"id": 2054,
				"en": "amount",
				"zh": "数量",
				"phonetic": "/aʊ/",
				"example": "Do you understand this amount?",
				"exampleZh": "你理解这个数量吗？"
			},
			{
				"id": 2055,
				"en": "amusement",
				"zh": "娱乐",
				"phonetic": "/mənt/",
				"example": "amusement plays a key role in our life.",
				"exampleZh": "娱乐在我们的生活中起着关键作用。"
			},
			{
				"id": 2056,
				"en": "ancient",
				"zh": "古代的",
				"phonetic": "/.../",
				"example": "This is very ancient.",
				"exampleZh": "这非常古代的。"
			},
			{
				"id": 2057,
				"en": "anger",
				"zh": "愤怒",
				"phonetic": "/ər/",
				"example": "I really like the anger.",
				"exampleZh": "我真的很喜欢这个愤怒。"
			},
			{
				"id": 2058,
				"en": "announce",
				"zh": "宣布",
				"phonetic": "/aʊ/",
				"example": "Let's announce together.",
				"exampleZh": "让我们一起宣布吧。"
			},
			{
				"id": 2059,
				"en": "annoy",
				"zh": "使恼怒",
				"phonetic": "/ɔɪ/",
				"example": "They decided to annoy the plan.",
				"exampleZh": "他们决定使恼怒这个计划。"
			},
			{
				"id": 2060,
				"en": "anxious",
				"zh": "焦虑的",
				"phonetic": "/iəs/",
				"example": "He found the task anxious.",
				"exampleZh": "他发现这个任务是焦虑的的。"
			},
			{
				"id": 2061,
				"en": "anybody",
				"zh": "任何人",
				"phonetic": "/.../",
				"example": "Let's talk about anybody.",
				"exampleZh": "让我们来谈谈任何人吧。"
			},
			{
				"id": 2062,
				"en": "anyhow",
				"zh": "无论如何",
				"phonetic": "/aʊ/",
				"example": "They worked anyhow on the project.",
				"exampleZh": "他们无论如何地在这个项目上工作。"
			},
			{
				"id": 2063,
				"en": "anyway",
				"zh": "无论如何",
				"phonetic": "/eɪ/",
				"example": "He spoke anyway to the audience.",
				"exampleZh": "他无论如何地对观众说话。"
			},
			{
				"id": 2064,
				"en": "apart",
				"zh": "分开",
				"phonetic": "/.../",
				"example": "She apart agreed with us.",
				"exampleZh": "她分开地同意了我们的意见。"
			},
			{
				"id": 2065,
				"en": "apartment",
				"zh": "公寓",
				"phonetic": "/mənt/",
				"example": "apartment plays a key role in our life.",
				"exampleZh": "公寓在我们的生活中起着关键作用。"
			},
			{
				"id": 2066,
				"en": "apologize",
				"zh": "道歉",
				"phonetic": "/.../",
				"example": "We should apologize more carefully.",
				"exampleZh": "我们应该更仔细地道歉。"
			},
			{
				"id": 2067,
				"en": "appear",
				"zh": "出现",
				"phonetic": "/ɑːr/",
				"example": "She wants to appear this task.",
				"exampleZh": "她想出现这个任务。"
			},
			{
				"id": 2068,
				"en": "appearance",
				"zh": "外表",
				"phonetic": "/əns/",
				"example": "The appearance is very useful.",
				"exampleZh": "外表非常有用。"
			},
			{
				"id": 2069,
				"en": "application",
				"zh": "申请",
				"phonetic": "/ʃən/",
				"example": "Do you understand this application?",
				"exampleZh": "你理解这个申请吗？"
			},
			{
				"id": 2070,
				"en": "apply",
				"zh": "申请",
				"phonetic": "/li/",
				"example": "I need to apply before the deadline.",
				"exampleZh": "我需要在截止日期前申请。"
			},
			{
				"id": 2071,
				"en": "appointment",
				"zh": "预约",
				"phonetic": "/mənt/",
				"example": "This is an important appointment.",
				"exampleZh": "这是一个重要的预约。"
			},
			{
				"id": 2072,
				"en": "appreciate",
				"zh": "感激",
				"phonetic": "/.../",
				"example": "She wants to appreciate this task.",
				"exampleZh": "她想感激这个任务。"
			},
			{
				"id": 2073,
				"en": "area",
				"zh": "区域",
				"phonetic": "/iː/",
				"example": "The area is very useful.",
				"exampleZh": "区域非常有用。"
			},
			{
				"id": 2074,
				"en": "argue",
				"zh": "争论",
				"phonetic": "/.../",
				"example": "They decided to argue the plan.",
				"exampleZh": "他们决定争论这个计划。"
			},
			{
				"id": 2075,
				"en": "argument",
				"zh": "争论",
				"phonetic": "/mənt/",
				"example": "argument plays a key role in our life.",
				"exampleZh": "争论在我们的生活中起着关键作用。"
			},
			{
				"id": 2076,
				"en": "army",
				"zh": "军队",
				"phonetic": "/.../",
				"example": "This is an important army.",
				"exampleZh": "这是一个重要的军队。"
			},
			{
				"id": 2077,
				"en": "arrange",
				"zh": "安排",
				"phonetic": "/.../",
				"example": "She wants to arrange this task.",
				"exampleZh": "她想安排这个任务。"
			},
			{
				"id": 2078,
				"en": "arrest",
				"zh": "逮捕",
				"phonetic": "/.../",
				"example": "Let's arrest together.",
				"exampleZh": "让我们一起逮捕吧。"
			},
			{
				"id": 2079,
				"en": "article",
				"zh": "文章",
				"phonetic": "/.../",
				"example": "Do you understand this article?",
				"exampleZh": "你理解这个文章吗？"
			},
			{
				"id": 2080,
				"en": "artist",
				"zh": "艺术家",
				"phonetic": "/.../",
				"example": "artist plays a key role in our life.",
				"exampleZh": "艺术家在我们的生活中起着关键作用。"
			},
			{
				"id": 2081,
				"en": "ash",
				"zh": "灰",
				"phonetic": "/ʃ/",
				"example": "This is an important ash.",
				"exampleZh": "这是一个重要的灰。"
			},
			{
				"id": 2082,
				"en": "ashamed",
				"zh": "羞愧的",
				"phonetic": "/d/",
				"example": "She looks ashamed today.",
				"exampleZh": "她今天看起来很羞愧的。"
			},
			{
				"id": 2083,
				"en": "assistant",
				"zh": "助手",
				"phonetic": "/.../",
				"example": "The assistant is very useful.",
				"exampleZh": "助手非常有用。"
			},
			{
				"id": 2084,
				"en": "attack",
				"zh": "攻击",
				"phonetic": "/k/",
				"example": "They decided to attack the plan.",
				"exampleZh": "他们决定攻击这个计划。"
			},
			{
				"id": 2085,
				"en": "attempt",
				"zh": "尝试",
				"phonetic": "/.../",
				"example": "I need to attempt before the deadline.",
				"exampleZh": "我需要在截止日期前尝试。"
			},
			{
				"id": 2086,
				"en": "attend",
				"zh": "参加",
				"phonetic": "/.../",
				"example": "We should attend more carefully.",
				"exampleZh": "我们应该更仔细地参加。"
			},
			{
				"id": 2087,
				"en": "attention",
				"zh": "注意力",
				"phonetic": "/ʃən/",
				"example": "I really like the attention.",
				"exampleZh": "我真的很喜欢这个注意力。"
			},
			{
				"id": 2088,
				"en": "attitude",
				"zh": "态度",
				"phonetic": "/.../",
				"example": "The attitude is very useful.",
				"exampleZh": "态度非常有用。"
			},
			{
				"id": 2089,
				"en": "attract",
				"zh": "吸引",
				"phonetic": "/.../",
				"example": "They decided to attract the plan.",
				"exampleZh": "他们决定吸引这个计划。"
			},
			{
				"id": 2090,
				"en": "audience",
				"zh": "观众",
				"phonetic": "/əns/",
				"example": "audience plays a key role in our life.",
				"exampleZh": "观众在我们的生活中起着关键作用。"
			},
			{
				"id": 2091,
				"en": "author",
				"zh": "作者",
				"phonetic": "/ər/",
				"example": "This is an important author.",
				"exampleZh": "这是一个重要的作者。"
			},
			{
				"id": 2092,
				"en": "available",
				"zh": "可用的",
				"phonetic": "/əbəl/",
				"example": "She looks available today.",
				"exampleZh": "她今天看起来很可用的。"
			},
			{
				"id": 2093,
				"en": "average",
				"zh": "平均的",
				"phonetic": "/.../",
				"example": "It's a average idea.",
				"exampleZh": "这是一个平均的的主意。"
			},
			{
				"id": 2094,
				"en": "avoid",
				"zh": "避免",
				"phonetic": "/ɔɪ/",
				"example": "They decided to avoid the plan.",
				"exampleZh": "他们决定避免这个计划。"
			},
			{
				"id": 2095,
				"en": "awake",
				"zh": "醒着的",
				"phonetic": "/ɔː/",
				"example": "He found the task awake.",
				"exampleZh": "他发现这个任务是醒着的的。"
			},
			{
				"id": 2096,
				"en": "award",
				"zh": "奖品",
				"phonetic": "/ɔː/",
				"example": "This is an important award.",
				"exampleZh": "这是一个重要的奖品。"
			},
			{
				"id": 2097,
				"en": "aware",
				"zh": "意识到的",
				"phonetic": "/ɔː/",
				"example": "She looks aware today.",
				"exampleZh": "她今天看起来很意识到的。"
			},
			{
				"id": 2098,
				"en": "background",
				"zh": "背景",
				"phonetic": "/aʊ/",
				"example": "The background is very useful.",
				"exampleZh": "背景非常有用。"
			},
			{
				"id": 2099,
				"en": "backward",
				"zh": "向后",
				"phonetic": "/.../",
				"example": "He spoke backward to the audience.",
				"exampleZh": "他向后地对观众说话。"
			},
			{
				"id": 2100,
				"en": "badly",
				"zh": "严重地",
				"phonetic": "/li/",
				"example": "She badly agreed with us.",
				"exampleZh": "她严重地地同意了我们的意见。"
			},
			{
				"id": 2101,
				"en": "baggage",
				"zh": "行李",
				"phonetic": "/.../",
				"example": "This is an important baggage.",
				"exampleZh": "这是一个重要的行李。"
			},
			{
				"id": 2102,
				"en": "balance",
				"zh": "平衡",
				"phonetic": "/əns/",
				"example": "I really like the balance.",
				"exampleZh": "我真的很喜欢这个平衡。"
			},
			{
				"id": 2103,
				"en": "balloon",
				"zh": "气球",
				"phonetic": "/uː/",
				"example": "The balloon is very useful.",
				"exampleZh": "气球非常有用。"
			},
			{
				"id": 2104,
				"en": "ban",
				"zh": "禁止",
				"phonetic": "/.../",
				"example": "They decided to ban the plan.",
				"exampleZh": "他们决定禁止这个计划。"
			},
			{
				"id": 2105,
				"en": "bar",
				"zh": "酒吧",
				"phonetic": "/ɑːr/",
				"example": "bar plays a key role in our life.",
				"exampleZh": "酒吧在我们的生活中起着关键作用。"
			},
			{
				"id": 2106,
				"en": "bare",
				"zh": "光秃的",
				"phonetic": "/.../",
				"example": "This is very bare.",
				"exampleZh": "这非常光秃的。"
			},
			{
				"id": 2107,
				"en": "base",
				"zh": "基础",
				"phonetic": "/.../",
				"example": "I really like the base.",
				"exampleZh": "我真的很喜欢这个基础。"
			},
			{
				"id": 2108,
				"en": "basic",
				"zh": "基本的",
				"phonetic": "/.../",
				"example": "It's a basic idea.",
				"exampleZh": "这是一个基本的的主意。"
			},
			{
				"id": 2109,
				"en": "basin",
				"zh": "盆",
				"phonetic": "/.../",
				"example": "Do you understand this basin?",
				"exampleZh": "你理解这个盆吗？"
			},
			{
				"id": 2110,
				"en": "basis",
				"zh": "基础",
				"phonetic": "/.../",
				"example": "basis plays a key role in our life.",
				"exampleZh": "基础在我们的生活中起着关键作用。"
			},
			{
				"id": 2111,
				"en": "battle",
				"zh": "战役",
				"phonetic": "/.../",
				"example": "This is an important battle.",
				"exampleZh": "这是一个重要的战役。"
			},
			{
				"id": 2112,
				"en": "bay",
				"zh": "海湾",
				"phonetic": "/eɪ/",
				"example": "I really like the bay.",
				"exampleZh": "我真的很喜欢这个海湾。"
			},
			{
				"id": 2113,
				"en": "beard",
				"zh": "胡须",
				"phonetic": "/iː/",
				"example": "The beard is very useful.",
				"exampleZh": "胡须非常有用。"
			},
			{
				"id": 2114,
				"en": "beauty",
				"zh": "美",
				"phonetic": "/iː/",
				"example": "Do you understand this beauty?",
				"exampleZh": "你理解这个美吗？"
			},
			{
				"id": 2115,
				"en": "beer",
				"zh": "啤酒",
				"phonetic": "/ər/",
				"example": "beer plays a key role in our life.",
				"exampleZh": "啤酒在我们的生活中起着关键作用。"
			},
			{
				"id": 2116,
				"en": "beg",
				"zh": "乞求",
				"phonetic": "/.../",
				"example": "We should beg more carefully.",
				"exampleZh": "我们应该更仔细地乞求。"
			},
			{
				"id": 2117,
				"en": "beginning",
				"zh": "开始",
				"phonetic": "/ɪŋ/",
				"example": "I really like the beginning.",
				"exampleZh": "我真的很喜欢这个开始。"
			},
			{
				"id": 2118,
				"en": "behavior",
				"zh": "行为",
				"phonetic": "/ər/",
				"example": "The behavior is very useful.",
				"exampleZh": "行为非常有用。"
			},
			{
				"id": 2119,
				"en": "belief",
				"zh": "信念",
				"phonetic": "/.../",
				"example": "Do you understand this belief?",
				"exampleZh": "你理解这个信念吗？"
			},
			{
				"id": 2120,
				"en": "belong",
				"zh": "属于",
				"phonetic": "/.../",
				"example": "I need to belong before the deadline.",
				"exampleZh": "我需要在截止日期前属于。"
			},
			{
				"id": 2121,
				"en": "bench",
				"zh": "长椅",
				"phonetic": "/tʃ/",
				"example": "This is an important bench.",
				"exampleZh": "这是一个重要的长椅。"
			},
			{
				"id": 2122,
				"en": "bend",
				"zh": "弯曲",
				"phonetic": "/.../",
				"example": "She wants to bend this task.",
				"exampleZh": "她想弯曲这个任务。"
			},
			{
				"id": 2123,
				"en": "benefit",
				"zh": "利益",
				"phonetic": "/.../",
				"example": "The benefit is very useful.",
				"exampleZh": "利益非常有用。"
			},
			{
				"id": 2124,
				"en": "besides",
				"zh": "此外",
				"phonetic": "/.../",
				"example": "She besides agreed with us.",
				"exampleZh": "她此外地同意了我们的意见。"
			},
			{
				"id": 2125,
				"en": "bill",
				"zh": "账单",
				"phonetic": "/.../",
				"example": "bill plays a key role in our life.",
				"exampleZh": "账单在我们的生活中起着关键作用。"
			},
			{
				"id": 2126,
				"en": "billion",
				"zh": "十亿",
				"phonetic": "/.../",
				"example": "I think billion is important.",
				"exampleZh": "我认为十亿很重要。"
			},
			{
				"id": 2127,
				"en": "biology",
				"zh": "生物",
				"phonetic": "/.../",
				"example": "I really like the biology.",
				"exampleZh": "我真的很喜欢这个生物。"
			},
			{
				"id": 2128,
				"en": "birth",
				"zh": "出生",
				"phonetic": "/θ/",
				"example": "The birth is very useful.",
				"exampleZh": "出生非常有用。"
			},
			{
				"id": 2129,
				"en": "bite",
				"zh": "咬",
				"phonetic": "/.../",
				"example": "They decided to bite the plan.",
				"exampleZh": "他们决定咬这个计划。"
			},
			{
				"id": 2130,
				"en": "bitter",
				"zh": "苦的",
				"phonetic": "/ər/",
				"example": "He found the task bitter.",
				"exampleZh": "他发现这个任务是苦的的。"
			},
			{
				"id": 2131,
				"en": "blame",
				"zh": "责备",
				"phonetic": "/.../",
				"example": "We should blame more carefully.",
				"exampleZh": "我们应该更仔细地责备。"
			},
			{
				"id": 2132,
				"en": "blank",
				"zh": "空白的",
				"phonetic": "/.../",
				"example": "She looks blank today.",
				"exampleZh": "她今天看起来很空白的。"
			},
			{
				"id": 2133,
				"en": "bless",
				"zh": "祝福",
				"phonetic": "/ləs/",
				"example": "Let's bless together.",
				"exampleZh": "让我们一起祝福吧。"
			},
			{
				"id": 2134,
				"en": "boil",
				"zh": "沸腾",
				"phonetic": "/ɔɪ/",
				"example": "They decided to boil the plan.",
				"exampleZh": "他们决定沸腾这个计划。"
			},
			{
				"id": 2135,
				"en": "bomb",
				"zh": "炸弹",
				"phonetic": "/.../",
				"example": "bomb plays a key role in our life.",
				"exampleZh": "炸弹在我们的生活中起着关键作用。"
			},
			{
				"id": 2136,
				"en": "border",
				"zh": "边界",
				"phonetic": "/ər/",
				"example": "This is an important border.",
				"exampleZh": "这是一个重要的边界。"
			},
			{
				"id": 2137,
				"en": "bored",
				"zh": "无聊的",
				"phonetic": "/d/",
				"example": "She looks bored today.",
				"exampleZh": "她今天看起来很无聊的。"
			},
			{
				"id": 2138,
				"en": "boss",
				"zh": "老板",
				"phonetic": "/.../",
				"example": "The boss is very useful.",
				"exampleZh": "老板非常有用。"
			},
			{
				"id": 2139,
				"en": "bother",
				"zh": "打扰",
				"phonetic": "/ər/",
				"example": "They decided to bother the plan.",
				"exampleZh": "他们决定打扰这个计划。"
			},
			{
				"id": 2140,
				"en": "brain",
				"zh": "大脑",
				"phonetic": "/eɪ/",
				"example": "brain plays a key role in our life.",
				"exampleZh": "大脑在我们的生活中起着关键作用。"
			},
			{
				"id": 2141,
				"en": "branch",
				"zh": "分支",
				"phonetic": "/tʃ/",
				"example": "This is an important branch.",
				"exampleZh": "这是一个重要的分支。"
			},
			{
				"id": 2142,
				"en": "breath",
				"zh": "呼吸",
				"phonetic": "/θ/",
				"example": "I really like the breath.",
				"exampleZh": "我真的很喜欢这个呼吸。"
			},
			{
				"id": 2143,
				"en": "breathe",
				"zh": "呼吸",
				"phonetic": "/iː/",
				"example": "Let's breathe together.",
				"exampleZh": "让我们一起呼吸吧。"
			},
			{
				"id": 2144,
				"en": "brick",
				"zh": "砖",
				"phonetic": "/k/",
				"example": "Do you understand this brick?",
				"exampleZh": "你理解这个砖吗？"
			},
			{
				"id": 2145,
				"en": "brief",
				"zh": "简短的",
				"phonetic": "/.../",
				"example": "He found the task brief.",
				"exampleZh": "他发现这个任务是简短的的。"
			},
			{
				"id": 2146,
				"en": "broad",
				"zh": "宽阔的",
				"phonetic": "/oʊ/",
				"example": "This is very broad.",
				"exampleZh": "这非常宽阔的。"
			},
			{
				"id": 2147,
				"en": "broadcast",
				"zh": "广播",
				"phonetic": "/oʊ/",
				"example": "She wants to broadcast this task.",
				"exampleZh": "她想广播这个任务。"
			},
			{
				"id": 2148,
				"en": "broom",
				"zh": "扫帚",
				"phonetic": "/uː/",
				"example": "The broom is very useful.",
				"exampleZh": "扫帚非常有用。"
			},
			{
				"id": 2149,
				"en": "budget",
				"zh": "预算",
				"phonetic": "/.../",
				"example": "Do you understand this budget?",
				"exampleZh": "你理解这个预算吗？"
			},
			{
				"id": 2150,
				"en": "bunch",
				"zh": "束",
				"phonetic": "/tʃ/",
				"example": "bunch plays a key role in our life.",
				"exampleZh": "束在我们的生活中起着关键作用。"
			},
			{
				"id": 2151,
				"en": "burden",
				"zh": "负担",
				"phonetic": "/.../",
				"example": "This is an important burden.",
				"exampleZh": "这是一个重要的负担。"
			},
			{
				"id": 2152,
				"en": "burn",
				"zh": "燃烧",
				"phonetic": "/.../",
				"example": "She wants to burn this task.",
				"exampleZh": "她想燃烧这个任务。"
			},
			{
				"id": 2153,
				"en": "burst",
				"zh": "爆发",
				"phonetic": "/.../",
				"example": "Let's burst together.",
				"exampleZh": "让我们一起爆发吧。"
			},
			{
				"id": 2154,
				"en": "bury",
				"zh": "埋葬",
				"phonetic": "/.../",
				"example": "They decided to bury the plan.",
				"exampleZh": "他们决定埋葬这个计划。"
			},
			{
				"id": 2155,
				"en": "bush",
				"zh": "灌木",
				"phonetic": "/ʃ/",
				"example": "bush plays a key role in our life.",
				"exampleZh": "灌木在我们的生活中起着关键作用。"
			},
			{
				"id": 2156,
				"en": "business",
				"zh": "生意",
				"phonetic": "/nəs/",
				"example": "This is an important business.",
				"exampleZh": "这是一个重要的生意。"
			},
			{
				"id": 2157,
				"en": "businessman",
				"zh": "商人",
				"phonetic": "/.../",
				"example": "I really like the businessman.",
				"exampleZh": "我真的很喜欢这个商人。"
			},
			{
				"id": 2158,
				"en": "butcher",
				"zh": "屠夫",
				"phonetic": "/ər/",
				"example": "The butcher is very useful.",
				"exampleZh": "屠夫非常有用。"
			},
			{
				"id": 2159,
				"en": "button",
				"zh": "按钮",
				"phonetic": "/.../",
				"example": "Do you understand this button?",
				"exampleZh": "你理解这个按钮吗？"
			},
			{
				"id": 2160,
				"en": "cabbage",
				"zh": "卷心菜",
				"phonetic": "/.../",
				"example": "cabbage plays a key role in our life.",
				"exampleZh": "卷心菜在我们的生活中起着关键作用。"
			},
			{
				"id": 2161,
				"en": "cage",
				"zh": "笼子",
				"phonetic": "/.../",
				"example": "This is an important cage.",
				"exampleZh": "这是一个重要的笼子。"
			},
			{
				"id": 2162,
				"en": "calm",
				"zh": "冷静的",
				"phonetic": "/.../",
				"example": "She looks calm today.",
				"exampleZh": "她今天看起来很冷静的。"
			},
			{
				"id": 2163,
				"en": "camp",
				"zh": "营地",
				"phonetic": "/.../",
				"example": "The camp is very useful.",
				"exampleZh": "营地非常有用。"
			},
			{
				"id": 2164,
				"en": "campaign",
				"zh": "运动",
				"phonetic": "/eɪ/",
				"example": "Do you understand this campaign?",
				"exampleZh": "你理解这个运动吗？"
			},
			{
				"id": 2165,
				"en": "campus",
				"zh": "校园",
				"phonetic": "/.../",
				"example": "campus plays a key role in our life.",
				"exampleZh": "校园在我们的生活中起着关键作用。"
			},
			{
				"id": 2166,
				"en": "cancel",
				"zh": "取消",
				"phonetic": "/əns/",
				"example": "We should cancel more carefully.",
				"exampleZh": "我们应该更仔细地取消。"
			},
			{
				"id": 2167,
				"en": "cancer",
				"zh": "癌症",
				"phonetic": "/əns/",
				"example": "I really like the cancer.",
				"exampleZh": "我真的很喜欢这个癌症。"
			},
			{
				"id": 2168,
				"en": "capable",
				"zh": "有能力的",
				"phonetic": "/əbəl/",
				"example": "It's a capable idea.",
				"exampleZh": "这是一个有能力的的主意。"
			},
			{
				"id": 2169,
				"en": "capital",
				"zh": "首都；资本",
				"phonetic": "/.../",
				"example": "Do you understand this capital?",
				"exampleZh": "你理解这个首都；资本吗？"
			},
			{
				"id": 2170,
				"en": "captain",
				"zh": "队长",
				"phonetic": "/eɪ/",
				"example": "captain plays a key role in our life.",
				"exampleZh": "队长在我们的生活中起着关键作用。"
			},
			{
				"id": 2171,
				"en": "carbon",
				"zh": "碳",
				"phonetic": "/.../",
				"example": "This is an important carbon.",
				"exampleZh": "这是一个重要的碳。"
			},
			{
				"id": 2172,
				"en": "career",
				"zh": "职业生涯",
				"phonetic": "/ər/",
				"example": "I really like the career.",
				"exampleZh": "我真的很喜欢这个职业生涯。"
			},
			{
				"id": 2173,
				"en": "careless",
				"zh": "粗心的",
				"phonetic": "/ləs/",
				"example": "It's a careless idea.",
				"exampleZh": "这是一个粗心的的主意。"
			},
			{
				"id": 2174,
				"en": "carpet",
				"zh": "地毯",
				"phonetic": "/.../",
				"example": "Do you understand this carpet?",
				"exampleZh": "你理解这个地毯吗？"
			},
			{
				"id": 2175,
				"en": "carrot",
				"zh": "胡萝卜",
				"phonetic": "/.../",
				"example": "carrot plays a key role in our life.",
				"exampleZh": "胡萝卜在我们的生活中起着关键作用。"
			},
			{
				"id": 2176,
				"en": "cart",
				"zh": "手推车",
				"phonetic": "/.../",
				"example": "This is an important cart.",
				"exampleZh": "这是一个重要的手推车。"
			},
			{
				"id": 2177,
				"en": "cash",
				"zh": "现金",
				"phonetic": "/ʃ/",
				"example": "I really like the cash.",
				"exampleZh": "我真的很喜欢这个现金。"
			},
			{
				"id": 2178,
				"en": "castle",
				"zh": "城堡",
				"phonetic": "/.../",
				"example": "The castle is very useful.",
				"exampleZh": "城堡非常有用。"
			},
			{
				"id": 2179,
				"en": "cause",
				"zh": "原因；引起",
				"phonetic": "/ɔː/",
				"example": "Do you understand this cause?",
				"exampleZh": "你理解这个原因；引起吗？"
			},
			{
				"id": 2180,
				"en": "ceiling",
				"zh": "天花板",
				"phonetic": "/ɪŋ/",
				"example": "ceiling plays a key role in our life.",
				"exampleZh": "天花板在我们的生活中起着关键作用。"
			},
			{
				"id": 2181,
				"en": "celebrate",
				"zh": "庆祝",
				"phonetic": "/.../",
				"example": "We should celebrate more carefully.",
				"exampleZh": "我们应该更仔细地庆祝。"
			},
			{
				"id": 2182,
				"en": "cell",
				"zh": "细胞；牢房",
				"phonetic": "/.../",
				"example": "I really like the cell.",
				"exampleZh": "我真的很喜欢这个细胞；牢房。"
			},
			{
				"id": 2183,
				"en": "cent",
				"zh": "分",
				"phonetic": "/.../",
				"example": "The cent is very useful.",
				"exampleZh": "分非常有用。"
			},
			{
				"id": 2184,
				"en": "century",
				"zh": "世纪",
				"phonetic": "/.../",
				"example": "Do you understand this century?",
				"exampleZh": "你理解这个世纪吗？"
			},
			{
				"id": 2185,
				"en": "ceremony",
				"zh": "仪式",
				"phonetic": "/.../",
				"example": "ceremony plays a key role in our life.",
				"exampleZh": "仪式在我们的生活中起着关键作用。"
			},
			{
				"id": 2186,
				"en": "chain",
				"zh": "链子",
				"phonetic": "/eɪ/",
				"example": "This is an important chain.",
				"exampleZh": "这是一个重要的链子。"
			},
			{
				"id": 2187,
				"en": "chairman",
				"zh": "主席",
				"phonetic": "/eɪ/",
				"example": "I really like the chairman.",
				"exampleZh": "我真的很喜欢这个主席。"
			},
			{
				"id": 2188,
				"en": "challenge",
				"zh": "挑战",
				"phonetic": "/.../",
				"example": "The challenge is very useful.",
				"exampleZh": "挑战非常有用。"
			},
			{
				"id": 2189,
				"en": "champion",
				"zh": "冠军",
				"phonetic": "/.../",
				"example": "Do you understand this champion?",
				"exampleZh": "你理解这个冠军吗？"
			},
			{
				"id": 2190,
				"en": "chance",
				"zh": "机会",
				"phonetic": "/əns/",
				"example": "chance plays a key role in our life.",
				"exampleZh": "机会在我们的生活中起着关键作用。"
			},
			{
				"id": 2191,
				"en": "channel",
				"zh": "频道",
				"phonetic": "/.../",
				"example": "This is an important channel.",
				"exampleZh": "这是一个重要的频道。"
			},
			{
				"id": 2192,
				"en": "chapter",
				"zh": "章节",
				"phonetic": "/ər/",
				"example": "I really like the chapter.",
				"exampleZh": "我真的很喜欢这个章节。"
			},
			{
				"id": 2193,
				"en": "character",
				"zh": "性格；角色",
				"phonetic": "/ər/",
				"example": "The character is very useful.",
				"exampleZh": "性格；角色非常有用。"
			},
			{
				"id": 2194,
				"en": "charge",
				"zh": "收费；充电",
				"phonetic": "/.../",
				"example": "They decided to charge the plan.",
				"exampleZh": "他们决定收费；充电这个计划。"
			},
			{
				"id": 2195,
				"en": "charity",
				"zh": "慈善",
				"phonetic": "/.../",
				"example": "charity plays a key role in our life.",
				"exampleZh": "慈善在我们的生活中起着关键作用。"
			},
			{
				"id": 2196,
				"en": "chart",
				"zh": "图表",
				"phonetic": "/.../",
				"example": "This is an important chart.",
				"exampleZh": "这是一个重要的图表。"
			},
			{
				"id": 2197,
				"en": "chat",
				"zh": "聊天",
				"phonetic": "/.../",
				"example": "She wants to chat this task.",
				"exampleZh": "她想聊天这个任务。"
			},
			{
				"id": 2198,
				"en": "cheek",
				"zh": "脸颊",
				"phonetic": "/iː/",
				"example": "The cheek is very useful.",
				"exampleZh": "脸颊非常有用。"
			},
			{
				"id": 2199,
				"en": "cheer",
				"zh": "欢呼",
				"phonetic": "/ər/",
				"example": "They decided to cheer the plan.",
				"exampleZh": "他们决定欢呼这个计划。"
			},
			{
				"id": 2200,
				"en": "chemical",
				"zh": "化学的",
				"phonetic": "/.../",
				"example": "He found the task chemical.",
				"exampleZh": "他发现这个任务是化学的的。"
			},
			{
				"id": 2201,
				"en": "chest",
				"zh": "胸部",
				"phonetic": "/.../",
				"example": "This is an important chest.",
				"exampleZh": "这是一个重要的胸部。"
			},
			{
				"id": 2202,
				"en": "chief",
				"zh": "首领",
				"phonetic": "/.../",
				"example": "I really like the chief.",
				"exampleZh": "我真的很喜欢这个首领。"
			},
			{
				"id": 2203,
				"en": "chimney",
				"zh": "烟囱",
				"phonetic": "/.../",
				"example": "The chimney is very useful.",
				"exampleZh": "烟囱非常有用。"
			},
			{
				"id": 2204,
				"en": "chip",
				"zh": "芯片；薯片",
				"phonetic": "/.../",
				"example": "Do you understand this chip?",
				"exampleZh": "你理解这个芯片；薯片吗？"
			},
			{
				"id": 2205,
				"en": "choice",
				"zh": "选择",
				"phonetic": "/ɔɪ/",
				"example": "choice plays a key role in our life.",
				"exampleZh": "选择在我们的生活中起着关键作用。"
			},
			{
				"id": 2206,
				"en": "church",
				"zh": "教堂",
				"phonetic": "/tʃ/",
				"example": "This is an important church.",
				"exampleZh": "这是一个重要的教堂。"
			},
			{
				"id": 2207,
				"en": "cigarette",
				"zh": "香烟",
				"phonetic": "/.../",
				"example": "I really like the cigarette.",
				"exampleZh": "我真的很喜欢这个香烟。"
			},
			{
				"id": 2208,
				"en": "citizen",
				"zh": "公民",
				"phonetic": "/.../",
				"example": "The citizen is very useful.",
				"exampleZh": "公民非常有用。"
			},
			{
				"id": 2209,
				"en": "clap",
				"zh": "拍手",
				"phonetic": "/.../",
				"example": "They decided to clap the plan.",
				"exampleZh": "他们决定拍手这个计划。"
			},
			{
				"id": 2210,
				"en": "classic",
				"zh": "经典的",
				"phonetic": "/.../",
				"example": "He found the task classic.",
				"exampleZh": "他发现这个任务是经典的的。"
			},
			{
				"id": 2211,
				"en": "clerk",
				"zh": "职员",
				"phonetic": "/.../",
				"example": "This is an important clerk.",
				"exampleZh": "这是一个重要的职员。"
			},
			{
				"id": 2212,
				"en": "climate",
				"zh": "气候",
				"phonetic": "/.../",
				"example": "I really like the climate.",
				"exampleZh": "我真的很喜欢这个气候。"
			},
			{
				"id": 2213,
				"en": "clinic",
				"zh": "诊所",
				"phonetic": "/.../",
				"example": "The clinic is very useful.",
				"exampleZh": "诊所非常有用。"
			},
			{
				"id": 2214,
				"en": "cloth",
				"zh": "布",
				"phonetic": "/θ/",
				"example": "Do you understand this cloth?",
				"exampleZh": "你理解这个布吗？"
			},
			{
				"id": 2215,
				"en": "coach",
				"zh": "教练",
				"phonetic": "/tʃ/",
				"example": "coach plays a key role in our life.",
				"exampleZh": "教练在我们的生活中起着关键作用。"
			},
			{
				"id": 2216,
				"en": "coal",
				"zh": "煤",
				"phonetic": "/oʊ/",
				"example": "This is an important coal.",
				"exampleZh": "这是一个重要的煤。"
			},
			{
				"id": 2217,
				"en": "coast",
				"zh": "海岸",
				"phonetic": "/oʊ/",
				"example": "I really like the coast.",
				"exampleZh": "我真的很喜欢这个海岸。"
			},
			{
				"id": 2218,
				"en": "code",
				"zh": "代码",
				"phonetic": "/.../",
				"example": "The code is very useful.",
				"exampleZh": "代码非常有用。"
			},
			{
				"id": 2219,
				"en": "collar",
				"zh": "衣领",
				"phonetic": "/ɑːr/",
				"example": "Do you understand this collar?",
				"exampleZh": "你理解这个衣领吗？"
			},
			{
				"id": 2220,
				"en": "colleague",
				"zh": "同事",
				"phonetic": "/iː/",
				"example": "colleague plays a key role in our life.",
				"exampleZh": "同事在我们的生活中起着关键作用。"
			},
			{
				"id": 2221,
				"en": "college",
				"zh": "大学",
				"phonetic": "/.../",
				"example": "This is an important college.",
				"exampleZh": "这是一个重要的大学。"
			},
			{
				"id": 2222,
				"en": "comb",
				"zh": "梳子",
				"phonetic": "/.../",
				"example": "I really like the comb.",
				"exampleZh": "我真的很喜欢这个梳子。"
			},
			{
				"id": 2223,
				"en": "combine",
				"zh": "结合",
				"phonetic": "/.../",
				"example": "Let's combine together.",
				"exampleZh": "让我们一起结合吧。"
			},
			{
				"id": 2224,
				"en": "comfort",
				"zh": "舒适",
				"phonetic": "/.../",
				"example": "Do you understand this comfort?",
				"exampleZh": "你理解这个舒适吗？"
			},
			{
				"id": 2225,
				"en": "command",
				"zh": "命令",
				"phonetic": "/.../",
				"example": "I need to command before the deadline.",
				"exampleZh": "我需要在截止日期前命令。"
			},
			{
				"id": 2226,
				"en": "comment",
				"zh": "评论",
				"phonetic": "/mənt/",
				"example": "This is an important comment.",
				"exampleZh": "这是一个重要的评论。"
			},
			{
				"id": 2227,
				"en": "commercial",
				"zh": "商业的",
				"phonetic": "/ʃəl/",
				"example": "She looks commercial today.",
				"exampleZh": "她今天看起来很商业的。"
			},
			{
				"id": 2228,
				"en": "committee",
				"zh": "委员会",
				"phonetic": "/iː/",
				"example": "The committee is very useful.",
				"exampleZh": "委员会非常有用。"
			},
			{
				"id": 2229,
				"en": "common",
				"zh": "普通的",
				"phonetic": "/.../",
				"example": "The result is quite common.",
				"exampleZh": "结果是相当普通的的。"
			},
			{
				"id": 2230,
				"en": "communicate",
				"zh": "交流",
				"phonetic": "/.../",
				"example": "I need to communicate before the deadline.",
				"exampleZh": "我需要在截止日期前交流。"
			},
			{
				"id": 2231,
				"en": "community",
				"zh": "社区",
				"phonetic": "/.../",
				"example": "This is an important community.",
				"exampleZh": "这是一个重要的社区。"
			},
			{
				"id": 2232,
				"en": "company",
				"zh": "公司",
				"phonetic": "/.../",
				"example": "I really like the company.",
				"exampleZh": "我真的很喜欢这个公司。"
			},
			{
				"id": 2233,
				"en": "compare",
				"zh": "比较",
				"phonetic": "/.../",
				"example": "Let's compare together.",
				"exampleZh": "让我们一起比较吧。"
			},
			{
				"id": 2234,
				"en": "compete",
				"zh": "竞争",
				"phonetic": "/.../",
				"example": "They decided to compete the plan.",
				"exampleZh": "他们决定竞争这个计划。"
			},
			{
				"id": 2235,
				"en": "complain",
				"zh": "抱怨",
				"phonetic": "/eɪ/",
				"example": "I need to complain before the deadline.",
				"exampleZh": "我需要在截止日期前抱怨。"
			},
			{
				"id": 2236,
				"en": "complete",
				"zh": "完成",
				"phonetic": "/.../",
				"example": "We should complete more carefully.",
				"exampleZh": "我们应该更仔细地完成。"
			},
			{
				"id": 2237,
				"en": "condition",
				"zh": "条件",
				"phonetic": "/ʃən/",
				"example": "I really like the condition.",
				"exampleZh": "我真的很喜欢这个条件。"
			},
			{
				"id": 2238,
				"en": "conduct",
				"zh": "行为；指挥",
				"phonetic": "/.../",
				"example": "The conduct is very useful.",
				"exampleZh": "行为；指挥非常有用。"
			},
			{
				"id": 2239,
				"en": "conference",
				"zh": "会议",
				"phonetic": "/əns/",
				"example": "Do you understand this conference?",
				"exampleZh": "你理解这个会议吗？"
			},
			{
				"id": 2240,
				"en": "confidence",
				"zh": "信心",
				"phonetic": "/əns/",
				"example": "confidence plays a key role in our life.",
				"exampleZh": "信心在我们的生活中起着关键作用。"
			},
			{
				"id": 2241,
				"en": "confirm",
				"zh": "确认",
				"phonetic": "/.../",
				"example": "We should confirm more carefully.",
				"exampleZh": "我们应该更仔细地确认。"
			},
			{
				"id": 2242,
				"en": "conflict",
				"zh": "冲突",
				"phonetic": "/.../",
				"example": "I really like the conflict.",
				"exampleZh": "我真的很喜欢这个冲突。"
			},
			{
				"id": 2243,
				"en": "confuse",
				"zh": "使困惑",
				"phonetic": "/.../",
				"example": "Let's confuse together.",
				"exampleZh": "让我们一起使困惑吧。"
			},
			{
				"id": 2244,
				"en": "congratulate",
				"zh": "祝贺",
				"phonetic": "/.../",
				"example": "They decided to congratulate the plan.",
				"exampleZh": "他们决定祝贺这个计划。"
			},
			{
				"id": 2245,
				"en": "connect",
				"zh": "连接",
				"phonetic": "/.../",
				"example": "I need to connect before the deadline.",
				"exampleZh": "我需要在截止日期前连接。"
			},
			{
				"id": 2246,
				"en": "consider",
				"zh": "考虑",
				"phonetic": "/ər/",
				"example": "We should consider more carefully.",
				"exampleZh": "我们应该更仔细地考虑。"
			},
			{
				"id": 2247,
				"en": "contain",
				"zh": "包含",
				"phonetic": "/eɪ/",
				"example": "She wants to contain this task.",
				"exampleZh": "她想包含这个任务。"
			},
			{
				"id": 2248,
				"en": "content",
				"zh": "内容",
				"phonetic": "/.../",
				"example": "The content is very useful.",
				"exampleZh": "内容非常有用。"
			},
			{
				"id": 2249,
				"en": "context",
				"zh": "上下文",
				"phonetic": "/.../",
				"example": "Do you understand this context?",
				"exampleZh": "你理解这个上下文吗？"
			},
			{
				"id": 2250,
				"en": "continue",
				"zh": "继续",
				"phonetic": "/.../",
				"example": "I need to continue before the deadline.",
				"exampleZh": "我需要在截止日期前继续。"
			},
			{
				"id": 2251,
				"en": "contract",
				"zh": "合同",
				"phonetic": "/.../",
				"example": "This is an important contract.",
				"exampleZh": "这是一个重要的合同。"
			},
			{
				"id": 2252,
				"en": "control",
				"zh": "控制",
				"phonetic": "/.../",
				"example": "She wants to control this task.",
				"exampleZh": "她想控制这个任务。"
			},
			{
				"id": 2253,
				"en": "conversation",
				"zh": "对话",
				"phonetic": "/ʃən/",
				"example": "The conversation is very useful.",
				"exampleZh": "对话非常有用。"
			},
			{
				"id": 2254,
				"en": "convince",
				"zh": "说服",
				"phonetic": "/.../",
				"example": "They decided to convince the plan.",
				"exampleZh": "他们决定说服这个计划。"
			},
			{
				"id": 2255,
				"en": "cooperate",
				"zh": "合作",
				"phonetic": "/uː/",
				"example": "I need to cooperate before the deadline.",
				"exampleZh": "我需要在截止日期前合作。"
			},
			{
				"id": 2256,
				"en": "corn",
				"zh": "玉米",
				"phonetic": "/.../",
				"example": "This is an important corn.",
				"exampleZh": "这是一个重要的玉米。"
			},
			{
				"id": 2257,
				"en": "cost",
				"zh": "成本",
				"phonetic": "/.../",
				"example": "I really like the cost.",
				"exampleZh": "我真的很喜欢这个成本。"
			},
			{
				"id": 2258,
				"en": "counter",
				"zh": "柜台",
				"phonetic": "/ər/",
				"example": "The counter is very useful.",
				"exampleZh": "柜台非常有用。"
			},
			{
				"id": 2259,
				"en": "couple",
				"zh": "一对",
				"phonetic": "/aʊ/",
				"example": "Do you understand this couple?",
				"exampleZh": "你理解这个一对吗？"
			},
			{
				"id": 2260,
				"en": "courage",
				"zh": "勇气",
				"phonetic": "/aʊ/",
				"example": "courage plays a key role in our life.",
				"exampleZh": "勇气在我们的生活中起着关键作用。"
			},
			{
				"id": 2261,
				"en": "course",
				"zh": "课程",
				"phonetic": "/aʊ/",
				"example": "This is an important course.",
				"exampleZh": "这是一个重要的课程。"
			},
			{
				"id": 2262,
				"en": "court",
				"zh": "法庭",
				"phonetic": "/aʊ/",
				"example": "I really like the court.",
				"exampleZh": "我真的很喜欢这个法庭。"
			},
			{
				"id": 2263,
				"en": "create",
				"zh": "创造",
				"phonetic": "/iː/",
				"example": "Let's create together.",
				"exampleZh": "让我们一起创造吧。"
			},
			{
				"id": 2264,
				"en": "credit",
				"zh": "信用",
				"phonetic": "/.../",
				"example": "Do you understand this credit?",
				"exampleZh": "你理解这个信用吗？"
			},
			{
				"id": 2265,
				"en": "crime",
				"zh": "犯罪",
				"phonetic": "/.../",
				"example": "crime plays a key role in our life.",
				"exampleZh": "犯罪在我们的生活中起着关键作用。"
			},
			{
				"id": 2266,
				"en": "crisis",
				"zh": "危机",
				"phonetic": "/.../",
				"example": "This is an important crisis.",
				"exampleZh": "这是一个重要的危机。"
			},
			{
				"id": 2267,
				"en": "crowd",
				"zh": "人群",
				"phonetic": "/aʊ/",
				"example": "I really like the crowd.",
				"exampleZh": "我真的很喜欢这个人群。"
			},
			{
				"id": 2268,
				"en": "cruel",
				"zh": "残忍的",
				"phonetic": "/.../",
				"example": "It's a cruel idea.",
				"exampleZh": "这是一个残忍的的主意。"
			},
			{
				"id": 2269,
				"en": "culture",
				"zh": "文化",
				"phonetic": "/tʃər/",
				"example": "Do you understand this culture?",
				"exampleZh": "你理解这个文化吗？"
			},
			{
				"id": 2270,
				"en": "cupboard",
				"zh": "橱柜",
				"phonetic": "/oʊ/",
				"example": "cupboard plays a key role in our life.",
				"exampleZh": "橱柜在我们的生活中起着关键作用。"
			},
			{
				"id": 2271,
				"en": "cure",
				"zh": "治愈",
				"phonetic": "/.../",
				"example": "We should cure more carefully.",
				"exampleZh": "我们应该更仔细地治愈。"
			},
			{
				"id": 2272,
				"en": "curious",
				"zh": "好奇的",
				"phonetic": "/iəs/",
				"example": "She looks curious today.",
				"exampleZh": "她今天看起来很好奇的。"
			},
			{
				"id": 2273,
				"en": "current",
				"zh": "当前的",
				"phonetic": "/.../",
				"example": "It's a current idea.",
				"exampleZh": "这是一个当前的的主意。"
			},
			{
				"id": 2274,
				"en": "curtain",
				"zh": "窗帘",
				"phonetic": "/eɪ/",
				"example": "Do you understand this curtain?",
				"exampleZh": "你理解这个窗帘吗？"
			},
			{
				"id": 2275,
				"en": "custom",
				"zh": "习俗",
				"phonetic": "/.../",
				"example": "custom plays a key role in our life.",
				"exampleZh": "习俗在我们的生活中起着关键作用。"
			},
			{
				"id": 2276,
				"en": "customer",
				"zh": "顾客",
				"phonetic": "/ər/",
				"example": "This is an important customer.",
				"exampleZh": "这是一个重要的顾客。"
			},
			{
				"id": 2277,
				"en": "cycle",
				"zh": "循环",
				"phonetic": "/.../",
				"example": "I really like the cycle.",
				"exampleZh": "我真的很喜欢这个循环。"
			},
			{
				"id": 2278,
				"en": "cyclist",
				"zh": "骑自行车的人",
				"phonetic": "/.../",
				"example": "The cyclist is very useful.",
				"exampleZh": "骑自行车的人非常有用。"
			},
			{
				"id": 2279,
				"en": "daily",
				"zh": "每日的",
				"phonetic": "/li/",
				"example": "The result is quite daily.",
				"exampleZh": "结果是相当每日的的。"
			},
			{
				"id": 2280,
				"en": "damage",
				"zh": "损害",
				"phonetic": "/.../",
				"example": "I need to damage before the deadline.",
				"exampleZh": "我需要在截止日期前损害。"
			},
			{
				"id": 2281,
				"en": "dare",
				"zh": "敢",
				"phonetic": "/.../",
				"example": "We should dare more carefully.",
				"exampleZh": "我们应该更仔细地敢。"
			},
			{
				"id": 2282,
				"en": "data",
				"zh": "数据",
				"phonetic": "/.../",
				"example": "I really like the data.",
				"exampleZh": "我真的很喜欢这个数据。"
			},
			{
				"id": 2283,
				"en": "database",
				"zh": "数据库",
				"phonetic": "/.../",
				"example": "The database is very useful.",
				"exampleZh": "数据库非常有用。"
			},
			{
				"id": 2284,
				"en": "deal",
				"zh": "处理",
				"phonetic": "/iː/",
				"example": "They decided to deal the plan.",
				"exampleZh": "他们决定处理这个计划。"
			},
			{
				"id": 2285,
				"en": "death",
				"zh": "死亡",
				"phonetic": "/θ/",
				"example": "death plays a key role in our life.",
				"exampleZh": "死亡在我们的生活中起着关键作用。"
			},
			{
				"id": 2286,
				"en": "debate",
				"zh": "辩论",
				"phonetic": "/.../",
				"example": "This is an important debate.",
				"exampleZh": "这是一个重要的辩论。"
			},
			{
				"id": 2287,
				"en": "debt",
				"zh": "债务",
				"phonetic": "/.../",
				"example": "I really like the debt.",
				"exampleZh": "我真的很喜欢这个债务。"
			},
			{
				"id": 2288,
				"en": "decade",
				"zh": "十年",
				"phonetic": "/.../",
				"example": "The decade is very useful.",
				"exampleZh": "十年非常有用。"
			},
			{
				"id": 2289,
				"en": "decision",
				"zh": "决定",
				"phonetic": "/ʒən/",
				"example": "Do you understand this decision?",
				"exampleZh": "你理解这个决定吗？"
			},
			{
				"id": 2290,
				"en": "declare",
				"zh": "宣布",
				"phonetic": "/.../",
				"example": "I need to declare before the deadline.",
				"exampleZh": "我需要在截止日期前宣布。"
			},
			{
				"id": 2291,
				"en": "decline",
				"zh": "下降",
				"phonetic": "/.../",
				"example": "We should decline more carefully.",
				"exampleZh": "我们应该更仔细地下降。"
			},
			{
				"id": 2292,
				"en": "decorate",
				"zh": "装饰",
				"phonetic": "/.../",
				"example": "She wants to decorate this task.",
				"exampleZh": "她想装饰这个任务。"
			},
			{
				"id": 2293,
				"en": "decrease",
				"zh": "减少",
				"phonetic": "/iː/",
				"example": "Let's decrease together.",
				"exampleZh": "让我们一起减少吧。"
			},
			{
				"id": 2294,
				"en": "defeat",
				"zh": "击败",
				"phonetic": "/iː/",
				"example": "They decided to defeat the plan.",
				"exampleZh": "他们决定击败这个计划。"
			},
			{
				"id": 2295,
				"en": "defend",
				"zh": "防御",
				"phonetic": "/.../",
				"example": "I need to defend before the deadline.",
				"exampleZh": "我需要在截止日期前防御。"
			},
			{
				"id": 2296,
				"en": "define",
				"zh": "定义",
				"phonetic": "/.../",
				"example": "We should define more carefully.",
				"exampleZh": "我们应该更仔细地定义。"
			},
			{
				"id": 2297,
				"en": "degree",
				"zh": "学位；程度",
				"phonetic": "/iː/",
				"example": "I really like the degree.",
				"exampleZh": "我真的很喜欢这个学位；程度。"
			},
			{
				"id": 2298,
				"en": "delay",
				"zh": "延迟",
				"phonetic": "/eɪ/",
				"example": "Let's delay together.",
				"exampleZh": "让我们一起延迟吧。"
			},
			{
				"id": 2299,
				"en": "deliver",
				"zh": "递送",
				"phonetic": "/ər/",
				"example": "They decided to deliver the plan.",
				"exampleZh": "他们决定递送这个计划。"
			},
			{
				"id": 2300,
				"en": "demand",
				"zh": "要求",
				"phonetic": "/.../",
				"example": "I need to demand before the deadline.",
				"exampleZh": "我需要在截止日期前要求。"
			},
			{
				"id": 2301,
				"en": "department",
				"zh": "部门",
				"phonetic": "/mənt/",
				"example": "This is an important department.",
				"exampleZh": "这是一个重要的部门。"
			},
			{
				"id": 2302,
				"en": "depend",
				"zh": "依赖",
				"phonetic": "/.../",
				"example": "She wants to depend this task.",
				"exampleZh": "她想依赖这个任务。"
			},
			{
				"id": 2303,
				"en": "deposit",
				"zh": "存款",
				"phonetic": "/.../",
				"example": "The deposit is very useful.",
				"exampleZh": "存款非常有用。"
			},
			{
				"id": 2304,
				"en": "description",
				"zh": "描述",
				"phonetic": "/ʃən/",
				"example": "Do you understand this description?",
				"exampleZh": "你理解这个描述吗？"
			},
			{
				"id": 2305,
				"en": "desert",
				"zh": "沙漠",
				"phonetic": "/.../",
				"example": "desert plays a key role in our life.",
				"exampleZh": "沙漠在我们的生活中起着关键作用。"
			},
			{
				"id": 2306,
				"en": "design",
				"zh": "设计",
				"phonetic": "/.../",
				"example": "We should design more carefully.",
				"exampleZh": "我们应该更仔细地设计。"
			},
			{
				"id": 2307,
				"en": "desire",
				"zh": "渴望",
				"phonetic": "/.../",
				"example": "She wants to desire this task.",
				"exampleZh": "她想渴望这个任务。"
			},
			{
				"id": 2308,
				"en": "destroy",
				"zh": "破坏",
				"phonetic": "/ɔɪ/",
				"example": "Let's destroy together.",
				"exampleZh": "让我们一起破坏吧。"
			},
			{
				"id": 2309,
				"en": "detail",
				"zh": "细节",
				"phonetic": "/eɪ/",
				"example": "Do you understand this detail?",
				"exampleZh": "你理解这个细节吗？"
			},
			{
				"id": 2310,
				"en": "detect",
				"zh": "发现",
				"phonetic": "/.../",
				"example": "I need to detect before the deadline.",
				"exampleZh": "我需要在截止日期前发现。"
			},
			{
				"id": 2311,
				"en": "determine",
				"zh": "决定",
				"phonetic": "/.../",
				"example": "We should determine more carefully.",
				"exampleZh": "我们应该更仔细地决定。"
			},
			{
				"id": 2312,
				"en": "develop",
				"zh": "发展",
				"phonetic": "/.../",
				"example": "She wants to develop this task.",
				"exampleZh": "她想发展这个任务。"
			},
			{
				"id": 2313,
				"en": "device",
				"zh": "设备",
				"phonetic": "/.../",
				"example": "The device is very useful.",
				"exampleZh": "设备非常有用。"
			},
			{
				"id": 2314,
				"en": "devote",
				"zh": "致力于",
				"phonetic": "/.../",
				"example": "They decided to devote the plan.",
				"exampleZh": "他们决定致力于这个计划。"
			},
			{
				"id": 2315,
				"en": "dialogue",
				"zh": "对话",
				"phonetic": "/.../",
				"example": "dialogue plays a key role in our life.",
				"exampleZh": "对话在我们的生活中起着关键作用。"
			},
			{
				"id": 2316,
				"en": "diamond",
				"zh": "钻石",
				"phonetic": "/.../",
				"example": "This is an important diamond.",
				"exampleZh": "这是一个重要的钻石。"
			},
			{
				"id": 2317,
				"en": "diet",
				"zh": "饮食",
				"phonetic": "/.../",
				"example": "I really like the diet.",
				"exampleZh": "我真的很喜欢这个饮食。"
			},
			{
				"id": 2318,
				"en": "differ",
				"zh": "不同",
				"phonetic": "/ər/",
				"example": "Let's differ together.",
				"exampleZh": "让我们一起不同吧。"
			},
			{
				"id": 2319,
				"en": "difficulty",
				"zh": "困难",
				"phonetic": "/.../",
				"example": "Do you understand this difficulty?",
				"exampleZh": "你理解这个困难吗？"
			},
			{
				"id": 2320,
				"en": "dig",
				"zh": "挖",
				"phonetic": "/.../",
				"example": "I need to dig before the deadline.",
				"exampleZh": "我需要在截止日期前挖。"
			},
			{
				"id": 2321,
				"en": "digital",
				"zh": "数字的",
				"phonetic": "/.../",
				"example": "This is very digital.",
				"exampleZh": "这非常数字的。"
			},
			{
				"id": 2322,
				"en": "dining",
				"zh": "用餐",
				"phonetic": "/ɪŋ/",
				"example": "I really like the dining.",
				"exampleZh": "我真的很喜欢这个用餐。"
			},
			{
				"id": 2323,
				"en": "direct",
				"zh": "直接的",
				"phonetic": "/.../",
				"example": "It's a direct idea.",
				"exampleZh": "这是一个直接的的主意。"
			},
			{
				"id": 2324,
				"en": "direction",
				"zh": "方向",
				"phonetic": "/ʃən/",
				"example": "Do you understand this direction?",
				"exampleZh": "你理解这个方向吗？"
			},
			{
				"id": 2325,
				"en": "director",
				"zh": "导演",
				"phonetic": "/ər/",
				"example": "director plays a key role in our life.",
				"exampleZh": "导演在我们的生活中起着关键作用。"
			},
			{
				"id": 2326,
				"en": "disabled",
				"zh": "残疾的",
				"phonetic": "/əbəl/",
				"example": "This is very disabled.",
				"exampleZh": "这非常残疾的。"
			},
			{
				"id": 2327,
				"en": "disadvantage",
				"zh": "劣势",
				"phonetic": "/.../",
				"example": "I really like the disadvantage.",
				"exampleZh": "我真的很喜欢这个劣势。"
			},
			{
				"id": 2328,
				"en": "disagree",
				"zh": "不同意",
				"phonetic": "/iː/",
				"example": "Let's disagree together.",
				"exampleZh": "让我们一起不同意吧。"
			},
			{
				"id": 2329,
				"en": "disappear",
				"zh": "消失",
				"phonetic": "/ɑːr/",
				"example": "They decided to disappear the plan.",
				"exampleZh": "他们决定消失这个计划。"
			},
			{
				"id": 2330,
				"en": "disappoint",
				"zh": "使失望",
				"phonetic": "/ɔɪ/",
				"example": "I need to disappoint before the deadline.",
				"exampleZh": "我需要在截止日期前使失望。"
			},
			{
				"id": 2331,
				"en": "disaster",
				"zh": "灾难",
				"phonetic": "/ər/",
				"example": "This is an important disaster.",
				"exampleZh": "这是一个重要的灾难。"
			},
			{
				"id": 2332,
				"en": "discount",
				"zh": "折扣",
				"phonetic": "/aʊ/",
				"example": "I really like the discount.",
				"exampleZh": "我真的很喜欢这个折扣。"
			},
			{
				"id": 2333,
				"en": "discover",
				"zh": "发现",
				"phonetic": "/ər/",
				"example": "Let's discover together.",
				"exampleZh": "让我们一起发现吧。"
			},
			{
				"id": 2334,
				"en": "discovery",
				"zh": "发现",
				"phonetic": "/.../",
				"example": "Do you understand this discovery?",
				"exampleZh": "你理解这个发现吗？"
			},
			{
				"id": 2335,
				"en": "discuss",
				"zh": "讨论",
				"phonetic": "/.../",
				"example": "I need to discuss before the deadline.",
				"exampleZh": "我需要在截止日期前讨论。"
			},
			{
				"id": 2336,
				"en": "discussion",
				"zh": "讨论",
				"phonetic": "/ʃən/",
				"example": "This is an important discussion.",
				"exampleZh": "这是一个重要的讨论。"
			},
			{
				"id": 2337,
				"en": "disease",
				"zh": "疾病",
				"phonetic": "/iː/",
				"example": "I really like the disease.",
				"exampleZh": "我真的很喜欢这个疾病。"
			},
			{
				"id": 2338,
				"en": "dismiss",
				"zh": "解散",
				"phonetic": "/.../",
				"example": "Let's dismiss together.",
				"exampleZh": "让我们一起解散吧。"
			},
			{
				"id": 2339,
				"en": "display",
				"zh": "展示",
				"phonetic": "/eɪ/",
				"example": "They decided to display the plan.",
				"exampleZh": "他们决定展示这个计划。"
			},
			{
				"id": 2340,
				"en": "distance",
				"zh": "距离",
				"phonetic": "/əns/",
				"example": "distance plays a key role in our life.",
				"exampleZh": "距离在我们的生活中起着关键作用。"
			},
			{
				"id": 2341,
				"en": "distant",
				"zh": "遥远的",
				"phonetic": "/.../",
				"example": "This is very distant.",
				"exampleZh": "这非常遥远的。"
			},
			{
				"id": 2342,
				"en": "district",
				"zh": "地区",
				"phonetic": "/.../",
				"example": "I really like the district.",
				"exampleZh": "我真的很喜欢这个地区。"
			},
			{
				"id": 2343,
				"en": "disturb",
				"zh": "打扰",
				"phonetic": "/.../",
				"example": "Let's disturb together.",
				"exampleZh": "让我们一起打扰吧。"
			},
			{
				"id": 2344,
				"en": "divide",
				"zh": "分开",
				"phonetic": "/.../",
				"example": "They decided to divide the plan.",
				"exampleZh": "他们决定分开这个计划。"
			},
			{
				"id": 2345,
				"en": "document",
				"zh": "文件",
				"phonetic": "/mənt/",
				"example": "document plays a key role in our life.",
				"exampleZh": "文件在我们的生活中起着关键作用。"
			},
			{
				"id": 2346,
				"en": "donate",
				"zh": "捐赠",
				"phonetic": "/.../",
				"example": "We should donate more carefully.",
				"exampleZh": "我们应该更仔细地捐赠。"
			},
			{
				"id": 2347,
				"en": "double",
				"zh": "双倍的",
				"phonetic": "/aʊ/",
				"example": "She looks double today.",
				"exampleZh": "她今天看起来很双倍的。"
			},
			{
				"id": 2348,
				"en": "doubt",
				"zh": "怀疑",
				"phonetic": "/aʊ/",
				"example": "Let's doubt together.",
				"exampleZh": "让我们一起怀疑吧。"
			},
			{
				"id": 2349,
				"en": "download",
				"zh": "下载",
				"phonetic": "/oʊ/",
				"example": "They decided to download the plan.",
				"exampleZh": "他们决定下载这个计划。"
			},
			{
				"id": 2350,
				"en": "downstairs",
				"zh": "楼下",
				"phonetic": "/eɪ/",
				"example": "They worked downstairs on the project.",
				"exampleZh": "他们楼下地在这个项目上工作。"
			},
			{
				"id": 2351,
				"en": "downtown",
				"zh": "市中心",
				"phonetic": "/aʊ/",
				"example": "This is an important downtown.",
				"exampleZh": "这是一个重要的市中心。"
			},
			{
				"id": 2352,
				"en": "dozen",
				"zh": "一打",
				"phonetic": "/.../",
				"example": "I really like the dozen.",
				"exampleZh": "我真的很喜欢这个一打。"
			},
			{
				"id": 2353,
				"en": "drag",
				"zh": "拖",
				"phonetic": "/.../",
				"example": "Let's drag together.",
				"exampleZh": "让我们一起拖吧。"
			},
			{
				"id": 2354,
				"en": "drawer",
				"zh": "抽屉",
				"phonetic": "/ər/",
				"example": "Do you understand this drawer?",
				"exampleZh": "你理解这个抽屉吗？"
			},
			{
				"id": 2355,
				"en": "drill",
				"zh": "钻头",
				"phonetic": "/.../",
				"example": "drill plays a key role in our life.",
				"exampleZh": "钻头在我们的生活中起着关键作用。"
			},
			{
				"id": 2356,
				"en": "drown",
				"zh": "溺水",
				"phonetic": "/aʊ/",
				"example": "We should drown more carefully.",
				"exampleZh": "我们应该更仔细地溺水。"
			},
			{
				"id": 2357,
				"en": "drug",
				"zh": "药物",
				"phonetic": "/.../",
				"example": "I really like the drug.",
				"exampleZh": "我真的很喜欢这个药物。"
			},
			{
				"id": 2358,
				"en": "drunk",
				"zh": "醉的",
				"phonetic": "/.../",
				"example": "It's a drunk idea.",
				"exampleZh": "这是一个醉的的主意。"
			},
			{
				"id": 2359,
				"en": "due",
				"zh": "到期的",
				"phonetic": "/.../",
				"example": "The result is quite due.",
				"exampleZh": "结果是相当到期的的。"
			},
			{
				"id": 2360,
				"en": "dull",
				"zh": "枯燥的",
				"phonetic": "/.../",
				"example": "He found the task dull.",
				"exampleZh": "他发现这个任务是枯燥的的。"
			},
			{
				"id": 2361,
				"en": "dust",
				"zh": "灰尘",
				"phonetic": "/.../",
				"example": "This is an important dust.",
				"exampleZh": "这是一个重要的灰尘。"
			},
			{
				"id": 2362,
				"en": "duty",
				"zh": "责任",
				"phonetic": "/.../",
				"example": "I really like the duty.",
				"exampleZh": "我真的很喜欢这个责任。"
			},
			{
				"id": 2363,
				"en": "eager",
				"zh": "渴望的",
				"phonetic": "/ər/",
				"example": "It's a eager idea.",
				"exampleZh": "这是一个渴望的的主意。"
			},
			{
				"id": 2364,
				"en": "earn",
				"zh": "赚取",
				"phonetic": "/iː/",
				"example": "They decided to earn the plan.",
				"exampleZh": "他们决定赚取这个计划。"
			},
			{
				"id": 2365,
				"en": "earthquake",
				"zh": "地震",
				"phonetic": "/kw/",
				"example": "earthquake plays a key role in our life.",
				"exampleZh": "地震在我们的生活中起着关键作用。"
			},
			{
				"id": 2366,
				"en": "ease",
				"zh": "放松",
				"phonetic": "/iː/",
				"example": "We should ease more carefully.",
				"exampleZh": "我们应该更仔细地放松。"
			},
			{
				"id": 2367,
				"en": "eastern",
				"zh": "东方的",
				"phonetic": "/iː/",
				"example": "She looks eastern today.",
				"exampleZh": "她今天看起来很东方的。"
			},
			{
				"id": 2368,
				"en": "edge",
				"zh": "边缘",
				"phonetic": "/.../",
				"example": "The edge is very useful.",
				"exampleZh": "边缘非常有用。"
			},
			{
				"id": 2369,
				"en": "edit",
				"zh": "编辑",
				"phonetic": "/.../",
				"example": "They decided to edit the plan.",
				"exampleZh": "他们决定编辑这个计划。"
			},
			{
				"id": 2370,
				"en": "edition",
				"zh": "版本",
				"phonetic": "/ʃən/",
				"example": "edition plays a key role in our life.",
				"exampleZh": "版本在我们的生活中起着关键作用。"
			},
			{
				"id": 2371,
				"en": "editor",
				"zh": "编辑",
				"phonetic": "/ər/",
				"example": "This is an important editor.",
				"exampleZh": "这是一个重要的编辑。"
			},
			{
				"id": 2372,
				"en": "educate",
				"zh": "教育",
				"phonetic": "/.../",
				"example": "She wants to educate this task.",
				"exampleZh": "她想教育这个任务。"
			},
			{
				"id": 2373,
				"en": "education",
				"zh": "教育",
				"phonetic": "/ʃən/",
				"example": "The education is very useful.",
				"exampleZh": "教育非常有用。"
			},
			{
				"id": 2374,
				"en": "effect",
				"zh": "影响",
				"phonetic": "/.../",
				"example": "Do you understand this effect?",
				"exampleZh": "你理解这个影响吗？"
			},
			{
				"id": 2375,
				"en": "effort",
				"zh": "努力",
				"phonetic": "/.../",
				"example": "effort plays a key role in our life.",
				"exampleZh": "努力在我们的生活中起着关键作用。"
			},
			{
				"id": 2376,
				"en": "elder",
				"zh": "年长的",
				"phonetic": "/ər/",
				"example": "This is very elder.",
				"exampleZh": "这非常年长的。"
			},
			{
				"id": 2377,
				"en": "elect",
				"zh": "选举",
				"phonetic": "/.../",
				"example": "She wants to elect this task.",
				"exampleZh": "她想选举这个任务。"
			},
			{
				"id": 2378,
				"en": "electricity",
				"zh": "电",
				"phonetic": "/.../",
				"example": "The electricity is very useful.",
				"exampleZh": "电非常有用。"
			},
			{
				"id": 2379,
				"en": "element",
				"zh": "元素",
				"phonetic": "/mənt/",
				"example": "Do you understand this element?",
				"exampleZh": "你理解这个元素吗？"
			},
			{
				"id": 2380,
				"en": "embarrass",
				"zh": "使尴尬",
				"phonetic": "/.../",
				"example": "I need to embarrass before the deadline.",
				"exampleZh": "我需要在截止日期前使尴尬。"
			},
			{
				"id": 2381,
				"en": "emergency",
				"zh": "紧急情况",
				"phonetic": "/.../",
				"example": "This is an important emergency.",
				"exampleZh": "这是一个重要的紧急情况。"
			},
			{
				"id": 2382,
				"en": "emotion",
				"zh": "情绪",
				"phonetic": "/ʃən/",
				"example": "I really like the emotion.",
				"exampleZh": "我真的很喜欢这个情绪。"
			},
			{
				"id": 2383,
				"en": "employ",
				"zh": "雇佣",
				"phonetic": "/ɔɪ/",
				"example": "Let's employ together.",
				"exampleZh": "让我们一起雇佣吧。"
			},
			{
				"id": 2384,
				"en": "enable",
				"zh": "使能够",
				"phonetic": "/əbəl/",
				"example": "They decided to enable the plan.",
				"exampleZh": "他们决定使能够这个计划。"
			},
			{
				"id": 2385,
				"en": "encourage",
				"zh": "鼓励",
				"phonetic": "/aʊ/",
				"example": "I need to encourage before the deadline.",
				"exampleZh": "我需要在截止日期前鼓励。"
			},
			{
				"id": 2386,
				"en": "engine",
				"zh": "引擎",
				"phonetic": "/.../",
				"example": "This is an important engine.",
				"exampleZh": "这是一个重要的引擎。"
			},
			{
				"id": 2387,
				"en": "engineer",
				"zh": "工程师",
				"phonetic": "/ər/",
				"example": "I really like the engineer.",
				"exampleZh": "我真的很喜欢这个工程师。"
			},
			{
				"id": 2388,
				"en": "enjoyable",
				"zh": "愉快的",
				"phonetic": "/əbəl/",
				"example": "It's a enjoyable idea.",
				"exampleZh": "这是一个愉快的的主意。"
			},
			{
				"id": 2389,
				"en": "enormous",
				"zh": "巨大的",
				"phonetic": "/əs/",
				"example": "The result is quite enormous.",
				"exampleZh": "结果是相当巨大的的。"
			},
			{
				"id": 2390,
				"en": "entertainment",
				"zh": "娱乐",
				"phonetic": "/mənt/",
				"example": "entertainment plays a key role in our life.",
				"exampleZh": "娱乐在我们的生活中起着关键作用。"
			},
			{
				"id": 2391,
				"en": "entire",
				"zh": "整个的",
				"phonetic": "/.../",
				"example": "This is very entire.",
				"exampleZh": "这非常整个的。"
			},
			{
				"id": 2392,
				"en": "entrance",
				"zh": "入口",
				"phonetic": "/əns/",
				"example": "I really like the entrance.",
				"exampleZh": "我真的很喜欢这个入口。"
			},
			{
				"id": 2393,
				"en": "environment",
				"zh": "环境",
				"phonetic": "/mənt/",
				"example": "The environment is very useful.",
				"exampleZh": "环境非常有用。"
			},
			{
				"id": 2394,
				"en": "equal",
				"zh": "平等的",
				"phonetic": "/kw/",
				"example": "The result is quite equal.",
				"exampleZh": "结果是相当平等的的。"
			},
			{
				"id": 2395,
				"en": "equipment",
				"zh": "设备",
				"phonetic": "/mənt/",
				"example": "equipment plays a key role in our life.",
				"exampleZh": "设备在我们的生活中起着关键作用。"
			},
			{
				"id": 2396,
				"en": "error",
				"zh": "错误",
				"phonetic": "/ər/",
				"example": "This is an important error.",
				"exampleZh": "这是一个重要的错误。"
			},
			{
				"id": 2397,
				"en": "escape",
				"zh": "逃跑",
				"phonetic": "/.../",
				"example": "She wants to escape this task.",
				"exampleZh": "她想逃跑这个任务。"
			},
			{
				"id": 2398,
				"en": "especially",
				"zh": "尤其是",
				"phonetic": "/li/",
				"example": "They worked especially on the project.",
				"exampleZh": "他们尤其是地在这个项目上工作。"
			},
			{
				"id": 2399,
				"en": "essay",
				"zh": "文章",
				"phonetic": "/eɪ/",
				"example": "Do you understand this essay?",
				"exampleZh": "你理解这个文章吗？"
			},
			{
				"id": 2400,
				"en": "event",
				"zh": "事件",
				"phonetic": "/.../",
				"example": "event plays a key role in our life.",
				"exampleZh": "事件在我们的生活中起着关键作用。"
			},
			{
				"id": 2401,
				"en": "eventually",
				"zh": "最终",
				"phonetic": "/li/",
				"example": "They worked eventually on the project.",
				"exampleZh": "他们最终地在这个项目上工作。"
			},
			{
				"id": 2402,
				"en": "evidence",
				"zh": "证据",
				"phonetic": "/əns/",
				"example": "I really like the evidence.",
				"exampleZh": "我真的很喜欢这个证据。"
			},
			{
				"id": 2403,
				"en": "exact",
				"zh": "确切的",
				"phonetic": "/.../",
				"example": "It's a exact idea.",
				"exampleZh": "这是一个确切的的主意。"
			},
			{
				"id": 2404,
				"en": "examine",
				"zh": "检查",
				"phonetic": "/.../",
				"example": "They decided to examine the plan.",
				"exampleZh": "他们决定检查这个计划。"
			},
			{
				"id": 2405,
				"en": "excellent",
				"zh": "优秀的",
				"phonetic": "/.../",
				"example": "He found the task excellent.",
				"exampleZh": "他发现这个任务是优秀的的。"
			},
			{
				"id": 2406,
				"en": "exchange",
				"zh": "交换",
				"phonetic": "/.../",
				"example": "We should exchange more carefully.",
				"exampleZh": "我们应该更仔细地交换。"
			},
			{
				"id": 2407,
				"en": "excite",
				"zh": "使兴奋",
				"phonetic": "/.../",
				"example": "She wants to excite this task.",
				"exampleZh": "她想使兴奋这个任务。"
			},
			{
				"id": 2408,
				"en": "exist",
				"zh": "存在",
				"phonetic": "/.../",
				"example": "Let's exist together.",
				"exampleZh": "让我们一起存在吧。"
			},
			{
				"id": 2409,
				"en": "expect",
				"zh": "期望",
				"phonetic": "/.../",
				"example": "They decided to expect the plan.",
				"exampleZh": "他们决定期望这个计划。"
			},
			{
				"id": 2410,
				"en": "experiment",
				"zh": "实验",
				"phonetic": "/mənt/",
				"example": "experiment plays a key role in our life.",
				"exampleZh": "实验在我们的生活中起着关键作用。"
			},
			{
				"id": 2411,
				"en": "expert",
				"zh": "专家",
				"phonetic": "/.../",
				"example": "This is an important expert.",
				"exampleZh": "这是一个重要的专家。"
			},
			{
				"id": 2412,
				"en": "explain",
				"zh": "解释",
				"phonetic": "/eɪ/",
				"example": "She wants to explain this task.",
				"exampleZh": "她想解释这个任务。"
			},
			{
				"id": 2413,
				"en": "explode",
				"zh": "爆炸",
				"phonetic": "/.../",
				"example": "Let's explode together.",
				"exampleZh": "让我们一起爆炸吧。"
			},
			{
				"id": 2414,
				"en": "explore",
				"zh": "探索",
				"phonetic": "/.../",
				"example": "They decided to explore the plan.",
				"exampleZh": "他们决定探索这个计划。"
			},
			{
				"id": 2415,
				"en": "export",
				"zh": "出口",
				"phonetic": "/.../",
				"example": "I need to export before the deadline.",
				"exampleZh": "我需要在截止日期前出口。"
			},
			{
				"id": 2416,
				"en": "express",
				"zh": "表达",
				"phonetic": "/.../",
				"example": "We should express more carefully.",
				"exampleZh": "我们应该更仔细地表达。"
			},
			{
				"id": 2417,
				"en": "expression",
				"zh": "表达",
				"phonetic": "/ʃən/",
				"example": "I really like the expression.",
				"exampleZh": "我真的很喜欢这个表达。"
			},
			{
				"id": 2418,
				"en": "extra",
				"zh": "额外的",
				"phonetic": "/.../",
				"example": "It's a extra idea.",
				"exampleZh": "这是一个额外的的主意。"
			},
			{
				"id": 2419,
				"en": "extraordinary",
				"zh": "非凡的",
				"phonetic": "/.../",
				"example": "The result is quite extraordinary.",
				"exampleZh": "结果是相当非凡的的。"
			},
			{
				"id": 2420,
				"en": "extreme",
				"zh": "极端的",
				"phonetic": "/.../",
				"example": "He found the task extreme.",
				"exampleZh": "他发现这个任务是极端的的。"
			},
			{
				"id": 2421,
				"en": "factor",
				"zh": "因素",
				"phonetic": "/ər/",
				"example": "This is an important factor.",
				"exampleZh": "这是一个重要的因素。"
			},
			{
				"id": 2422,
				"en": "failure",
				"zh": "失败",
				"phonetic": "/eɪ/",
				"example": "I really like the failure.",
				"exampleZh": "我真的很喜欢这个失败。"
			},
			{
				"id": 2423,
				"en": "fairly",
				"zh": "相当",
				"phonetic": "/li/",
				"example": "He spoke fairly to the audience.",
				"exampleZh": "他相当地对观众说话。"
			},
			{
				"id": 2424,
				"en": "faith",
				"zh": "信仰",
				"phonetic": "/θ/",
				"example": "Do you understand this faith?",
				"exampleZh": "你理解这个信仰吗？"
			},
			{
				"id": 2425,
				"en": "false",
				"zh": "假的",
				"phonetic": "/.../",
				"example": "He found the task false.",
				"exampleZh": "他发现这个任务是假的的。"
			},
			{
				"id": 2426,
				"en": "familiar",
				"zh": "熟悉的",
				"phonetic": "/ɑːr/",
				"example": "This is very familiar.",
				"exampleZh": "这非常熟悉的。"
			},
			{
				"id": 2427,
				"en": "fancy",
				"zh": "想象",
				"phonetic": "/.../",
				"example": "She wants to fancy this task.",
				"exampleZh": "她想想象这个任务。"
			},
			{
				"id": 2428,
				"en": "fashion",
				"zh": "时尚",
				"phonetic": "/.../",
				"example": "The fashion is very useful.",
				"exampleZh": "时尚非常有用。"
			},
			{
				"id": 2429,
				"en": "fasten",
				"zh": "系紧",
				"phonetic": "/.../",
				"example": "They decided to fasten the plan.",
				"exampleZh": "他们决定系紧这个计划。"
			},
			{
				"id": 2430,
				"en": "fault",
				"zh": "过错",
				"phonetic": "/ɔː/",
				"example": "fault plays a key role in our life.",
				"exampleZh": "过错在我们的生活中起着关键作用。"
			},
			{
				"id": 2431,
				"en": "favor",
				"zh": "恩惠",
				"phonetic": "/ər/",
				"example": "This is an important favor.",
				"exampleZh": "这是一个重要的恩惠。"
			},
			{
				"id": 2432,
				"en": "fear",
				"zh": "恐惧",
				"phonetic": "/ɑːr/",
				"example": "I really like the fear.",
				"exampleZh": "我真的很喜欢这个恐惧。"
			},
			{
				"id": 2433,
				"en": "feather",
				"zh": "羽毛",
				"phonetic": "/ər/",
				"example": "The feather is very useful.",
				"exampleZh": "羽毛非常有用。"
			},
			{
				"id": 2434,
				"en": "feature",
				"zh": "特征",
				"phonetic": "/tʃər/",
				"example": "Do you understand this feature?",
				"exampleZh": "你理解这个特征吗？"
			},
			{
				"id": 2435,
				"en": "federal",
				"zh": "联邦的",
				"phonetic": "/.../",
				"example": "He found the task federal.",
				"exampleZh": "他发现这个任务是联邦的的。"
			},
			{
				"id": 2436,
				"en": "fee",
				"zh": "费用",
				"phonetic": "/iː/",
				"example": "This is an important fee.",
				"exampleZh": "这是一个重要的费用。"
			},
			{
				"id": 2437,
				"en": "fellow",
				"zh": "家伙",
				"phonetic": "/aʊ/",
				"example": "I really like the fellow.",
				"exampleZh": "我真的很喜欢这个家伙。"
			},
			{
				"id": 2438,
				"en": "female",
				"zh": "女性的",
				"phonetic": "/.../",
				"example": "It's a female idea.",
				"exampleZh": "这是一个女性的的主意。"
			},
			{
				"id": 2439,
				"en": "fence",
				"zh": "栅栏",
				"phonetic": "/əns/",
				"example": "Do you understand this fence?",
				"exampleZh": "你理解这个栅栏吗？"
			},
			{
				"id": 2440,
				"en": "fiction",
				"zh": "小说",
				"phonetic": "/ʃən/",
				"example": "fiction plays a key role in our life.",
				"exampleZh": "小说在我们的生活中起着关键作用。"
			},
			{
				"id": 2441,
				"en": "field",
				"zh": "田野",
				"phonetic": "/.../",
				"example": "This is an important field.",
				"exampleZh": "这是一个重要的田野。"
			},
			{
				"id": 2442,
				"en": "fierce",
				"zh": "凶猛的",
				"phonetic": "/.../",
				"example": "She looks fierce today.",
				"exampleZh": "她今天看起来很凶猛的。"
			},
			{
				"id": 2443,
				"en": "figure",
				"zh": "数字；人物",
				"phonetic": "/.../",
				"example": "The figure is very useful.",
				"exampleZh": "数字；人物非常有用。"
			},
			{
				"id": 2444,
				"en": "file",
				"zh": "文件",
				"phonetic": "/.../",
				"example": "Do you understand this file?",
				"exampleZh": "你理解这个文件吗？"
			},
			{
				"id": 2445,
				"en": "final",
				"zh": "最终的",
				"phonetic": "/.../",
				"example": "He found the task final.",
				"exampleZh": "他发现这个任务是最终的的。"
			},
			{
				"id": 2446,
				"en": "financial",
				"zh": "金融的",
				"phonetic": "/ʃəl/",
				"example": "This is very financial.",
				"exampleZh": "这非常金融的。"
			},
			{
				"id": 2447,
				"en": "firm",
				"zh": "公司",
				"phonetic": "/.../",
				"example": "I really like the firm.",
				"exampleZh": "我真的很喜欢这个公司。"
			},
			{
				"id": 2448,
				"en": "fist",
				"zh": "拳头",
				"phonetic": "/.../",
				"example": "The fist is very useful.",
				"exampleZh": "拳头非常有用。"
			},
			{
				"id": 2449,
				"en": "fit",
				"zh": "适合",
				"phonetic": "/.../",
				"example": "They decided to fit the plan.",
				"exampleZh": "他们决定适合这个计划。"
			},
			{
				"id": 2450,
				"en": "fix",
				"zh": "修理",
				"phonetic": "/.../",
				"example": "I need to fix before the deadline.",
				"exampleZh": "我需要在截止日期前修理。"
			},
			{
				"id": 2451,
				"en": "flame",
				"zh": "火焰",
				"phonetic": "/.../",
				"example": "This is an important flame.",
				"exampleZh": "这是一个重要的火焰。"
			},
			{
				"id": 2452,
				"en": "flash",
				"zh": "闪光",
				"phonetic": "/ʃ/",
				"example": "I really like the flash.",
				"exampleZh": "我真的很喜欢这个闪光。"
			},
			{
				"id": 2453,
				"en": "float",
				"zh": "漂浮",
				"phonetic": "/oʊ/",
				"example": "Let's float together.",
				"exampleZh": "让我们一起漂浮吧。"
			},
			{
				"id": 2454,
				"en": "flood",
				"zh": "洪水",
				"phonetic": "/uː/",
				"example": "Do you understand this flood?",
				"exampleZh": "你理解这个洪水吗？"
			},
			{
				"id": 2455,
				"en": "flow",
				"zh": "流动",
				"phonetic": "/aʊ/",
				"example": "I need to flow before the deadline.",
				"exampleZh": "我需要在截止日期前流动。"
			},
			{
				"id": 2456,
				"en": "fluent",
				"zh": "流利的",
				"phonetic": "/.../",
				"example": "This is very fluent.",
				"exampleZh": "这非常流利的。"
			},
			{
				"id": 2457,
				"en": "focus",
				"zh": "集中",
				"phonetic": "/.../",
				"example": "She wants to focus this task.",
				"exampleZh": "她想集中这个任务。"
			},
			{
				"id": 2458,
				"en": "fog",
				"zh": "雾",
				"phonetic": "/.../",
				"example": "The fog is very useful.",
				"exampleZh": "雾非常有用。"
			},
			{
				"id": 2459,
				"en": "fold",
				"zh": "折叠",
				"phonetic": "/.../",
				"example": "They decided to fold the plan.",
				"exampleZh": "他们决定折叠这个计划。"
			},
			{
				"id": 2460,
				"en": "folk",
				"zh": "民间的",
				"phonetic": "/.../",
				"example": "He found the task folk.",
				"exampleZh": "他发现这个任务是民间的的。"
			},
			{
				"id": 2461,
				"en": "fond",
				"zh": "喜欢的",
				"phonetic": "/.../",
				"example": "This is very fond.",
				"exampleZh": "这非常喜欢的。"
			},
			{
				"id": 2462,
				"en": "foolish",
				"zh": "愚蠢的",
				"phonetic": "/ʃ/",
				"example": "She looks foolish today.",
				"exampleZh": "她今天看起来很愚蠢的。"
			},
			{
				"id": 2463,
				"en": "forbid",
				"zh": "禁止",
				"phonetic": "/.../",
				"example": "Let's forbid together.",
				"exampleZh": "让我们一起禁止吧。"
			},
			{
				"id": 2464,
				"en": "force",
				"zh": "力量",
				"phonetic": "/.../",
				"example": "Do you understand this force?",
				"exampleZh": "你理解这个力量吗？"
			},
			{
				"id": 2465,
				"en": "foreign",
				"zh": "外国的",
				"phonetic": "/.../",
				"example": "He found the task foreign.",
				"exampleZh": "他发现这个任务是外国的的。"
			},
			{
				"id": 2466,
				"en": "foresee",
				"zh": "预见",
				"phonetic": "/iː/",
				"example": "We should foresee more carefully.",
				"exampleZh": "我们应该更仔细地预见。"
			},
			{
				"id": 2467,
				"en": "form",
				"zh": "形式",
				"phonetic": "/.../",
				"example": "I really like the form.",
				"exampleZh": "我真的很喜欢这个形式。"
			},
			{
				"id": 2468,
				"en": "former",
				"zh": "从前的",
				"phonetic": "/ər/",
				"example": "It's a former idea.",
				"exampleZh": "这是一个从前的的主意。"
			},
			{
				"id": 2469,
				"en": "fortune",
				"zh": "财富",
				"phonetic": "/.../",
				"example": "Do you understand this fortune?",
				"exampleZh": "你理解这个财富吗？"
			},
			{
				"id": 2470,
				"en": "found",
				"zh": "成立",
				"phonetic": "/aʊ/",
				"example": "I need to found before the deadline.",
				"exampleZh": "我需要在截止日期前成立。"
			},
			{
				"id": 2471,
				"en": "fountain",
				"zh": "喷泉",
				"phonetic": "/eɪ/",
				"example": "This is an important fountain.",
				"exampleZh": "这是一个重要的喷泉。"
			},
			{
				"id": 2472,
				"en": "frame",
				"zh": "框架",
				"phonetic": "/.../",
				"example": "I really like the frame.",
				"exampleZh": "我真的很喜欢这个框架。"
			},
			{
				"id": 2473,
				"en": "freedom",
				"zh": "自由",
				"phonetic": "/iː/",
				"example": "The freedom is very useful.",
				"exampleZh": "自由非常有用。"
			},
			{
				"id": 2474,
				"en": "freeze",
				"zh": "冻结",
				"phonetic": "/iː/",
				"example": "They decided to freeze the plan.",
				"exampleZh": "他们决定冻结这个计划。"
			},
			{
				"id": 2475,
				"en": "frequent",
				"zh": "频繁的",
				"phonetic": "/kw/",
				"example": "He found the task frequent.",
				"exampleZh": "他发现这个任务是频繁的的。"
			},
			{
				"id": 2476,
				"en": "friendship",
				"zh": "友谊",
				"phonetic": "/.../",
				"example": "This is an important friendship.",
				"exampleZh": "这是一个重要的友谊。"
			},
			{
				"id": 2477,
				"en": "frighten",
				"zh": "吓唬",
				"phonetic": "/.../",
				"example": "She wants to frighten this task.",
				"exampleZh": "她想吓唬这个任务。"
			},
			{
				"id": 2478,
				"en": "fry",
				"zh": "油炸",
				"phonetic": "/.../",
				"example": "Let's fry together.",
				"exampleZh": "让我们一起油炸吧。"
			},
			{
				"id": 2479,
				"en": "fuel",
				"zh": "燃料",
				"phonetic": "/.../",
				"example": "Do you understand this fuel?",
				"exampleZh": "你理解这个燃料吗？"
			},
			{
				"id": 2480,
				"en": "function",
				"zh": "功能",
				"phonetic": "/ʃən/",
				"example": "function plays a key role in our life.",
				"exampleZh": "功能在我们的生活中起着关键作用。"
			},
			{
				"id": 2481,
				"en": "fund",
				"zh": "基金",
				"phonetic": "/.../",
				"example": "This is an important fund.",
				"exampleZh": "这是一个重要的基金。"
			},
			{
				"id": 2482,
				"en": "funeral",
				"zh": "葬礼",
				"phonetic": "/.../",
				"example": "I really like the funeral.",
				"exampleZh": "我真的很喜欢这个葬礼。"
			},
			{
				"id": 2483,
				"en": "furniture",
				"zh": "家具",
				"phonetic": "/tʃər/",
				"example": "The furniture is very useful.",
				"exampleZh": "家具非常有用。"
			},
			{
				"id": 2484,
				"en": "further",
				"zh": "进一步的",
				"phonetic": "/ər/",
				"example": "The result is quite further.",
				"exampleZh": "结果是相当进一步的的。"
			},
			{
				"id": 2485,
				"en": "gain",
				"zh": "获得",
				"phonetic": "/eɪ/",
				"example": "I need to gain before the deadline.",
				"exampleZh": "我需要在截止日期前获得。"
			},
			{
				"id": 2486,
				"en": "gallery",
				"zh": "画廊",
				"phonetic": "/.../",
				"example": "This is an important gallery.",
				"exampleZh": "这是一个重要的画廊。"
			},
			{
				"id": 2487,
				"en": "gap",
				"zh": "差距",
				"phonetic": "/.../",
				"example": "I really like the gap.",
				"exampleZh": "我真的很喜欢这个差距。"
			},
			{
				"id": 2488,
				"en": "garage",
				"zh": "车库",
				"phonetic": "/.../",
				"example": "The garage is very useful.",
				"exampleZh": "车库非常有用。"
			},
			{
				"id": 2489,
				"en": "garbage",
				"zh": "垃圾",
				"phonetic": "/.../",
				"example": "Do you understand this garbage?",
				"exampleZh": "你理解这个垃圾吗？"
			},
			{
				"id": 2490,
				"en": "gas",
				"zh": "汽油",
				"phonetic": "/.../",
				"example": "gas plays a key role in our life.",
				"exampleZh": "汽油在我们的生活中起着关键作用。"
			},
			{
				"id": 2491,
				"en": "gather",
				"zh": "聚集",
				"phonetic": "/ər/",
				"example": "We should gather more carefully.",
				"exampleZh": "我们应该更仔细地聚集。"
			},
			{
				"id": 2492,
				"en": "gay",
				"zh": "快乐的",
				"phonetic": "/eɪ/",
				"example": "She looks gay today.",
				"exampleZh": "她今天看起来很快乐的。"
			},
			{
				"id": 2493,
				"en": "general",
				"zh": "一般的",
				"phonetic": "/.../",
				"example": "It's a general idea.",
				"exampleZh": "这是一个一般的的主意。"
			},
			{
				"id": 2494,
				"en": "generate",
				"zh": "产生",
				"phonetic": "/.../",
				"example": "They decided to generate the plan.",
				"exampleZh": "他们决定产生这个计划。"
			},
			{
				"id": 2495,
				"en": "generation",
				"zh": "一代人",
				"phonetic": "/ʃən/",
				"example": "generation plays a key role in our life.",
				"exampleZh": "一代人在我们的生活中起着关键作用。"
			},
			{
				"id": 2496,
				"en": "generous",
				"zh": "慷慨的",
				"phonetic": "/əs/",
				"example": "This is very generous.",
				"exampleZh": "这非常慷慨的。"
			},
			{
				"id": 2497,
				"en": "gentle",
				"zh": "温柔的",
				"phonetic": "/.../",
				"example": "She looks gentle today.",
				"exampleZh": "她今天看起来很温柔的。"
			},
			{
				"id": 2498,
				"en": "gentleman",
				"zh": "绅士",
				"phonetic": "/.../",
				"example": "The gentleman is very useful.",
				"exampleZh": "绅士非常有用。"
			},
			{
				"id": 2499,
				"en": "gesture",
				"zh": "手势",
				"phonetic": "/tʃər/",
				"example": "Do you understand this gesture?",
				"exampleZh": "你理解这个手势吗？"
			},
			{
				"id": 2500,
				"en": "giant",
				"zh": "巨大的",
				"phonetic": "/.../",
				"example": "He found the task giant.",
				"exampleZh": "他发现这个任务是巨大的的。"
			},
			{
				"id": 2501,
				"en": "global",
				"zh": "全球的",
				"phonetic": "/.../",
				"example": "This is very global.",
				"exampleZh": "这非常全球的。"
			},
			{
				"id": 2502,
				"en": "globe",
				"zh": "地球",
				"phonetic": "/.../",
				"example": "I really like the globe.",
				"exampleZh": "我真的很喜欢这个地球。"
			},
			{
				"id": 2503,
				"en": "goal",
				"zh": "目标",
				"phonetic": "/oʊ/",
				"example": "The goal is very useful.",
				"exampleZh": "目标非常有用。"
			},
			{
				"id": 2504,
				"en": "goods",
				"zh": "商品",
				"phonetic": "/uː/",
				"example": "Do you understand this goods?",
				"exampleZh": "你理解这个商品吗？"
			},
			{
				"id": 2505,
				"en": "gradual",
				"zh": "逐渐的",
				"phonetic": "/.../",
				"example": "He found the task gradual.",
				"exampleZh": "他发现这个任务是逐渐的的。"
			},
			{
				"id": 2506,
				"en": "graduate",
				"zh": "毕业",
				"phonetic": "/.../",
				"example": "We should graduate more carefully.",
				"exampleZh": "我们应该更仔细地毕业。"
			},
			{
				"id": 2507,
				"en": "grain",
				"zh": "谷物",
				"phonetic": "/eɪ/",
				"example": "I really like the grain.",
				"exampleZh": "我真的很喜欢这个谷物。"
			},
			{
				"id": 2508,
				"en": "grand",
				"zh": "宏伟的",
				"phonetic": "/.../",
				"example": "It's a grand idea.",
				"exampleZh": "这是一个宏伟的的主意。"
			},
			{
				"id": 2509,
				"en": "grateful",
				"zh": "感激的",
				"phonetic": "/fəl/",
				"example": "The result is quite grateful.",
				"exampleZh": "结果是相当感激的的。"
			},
			{
				"id": 2510,
				"en": "gray",
				"zh": "灰色的",
				"phonetic": "/eɪ/",
				"example": "He found the task gray.",
				"exampleZh": "他发现这个任务是灰色的的。"
			},
			{
				"id": 2511,
				"en": "greeting",
				"zh": "问候",
				"phonetic": "/ɪŋ/",
				"example": "This is an important greeting.",
				"exampleZh": "这是一个重要的问候。"
			},
			{
				"id": 2512,
				"en": "guard",
				"zh": "守卫",
				"phonetic": "/.../",
				"example": "I really like the guard.",
				"exampleZh": "我真的很喜欢这个守卫。"
			},
			{
				"id": 2513,
				"en": "guide",
				"zh": "指南",
				"phonetic": "/.../",
				"example": "The guide is very useful.",
				"exampleZh": "指南非常有用。"
			},
			{
				"id": 2514,
				"en": "guilty",
				"zh": "有罪的",
				"phonetic": "/.../",
				"example": "The result is quite guilty.",
				"exampleZh": "结果是相当有罪的的。"
			},
			{
				"id": 2515,
				"en": "habit",
				"zh": "习惯",
				"phonetic": "/.../",
				"example": "habit plays a key role in our life.",
				"exampleZh": "习惯在我们的生活中起着关键作用。"
			},
			{
				"id": 2516,
				"en": "handle",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "We should handle more carefully.",
				"exampleZh": "我们应该更仔细地处理。"
			},
			{
				"id": 2517,
				"en": "hang",
				"zh": "悬挂",
				"phonetic": "/.../",
				"example": "She wants to hang this task.",
				"exampleZh": "她想悬挂这个任务。"
			},
			{
				"id": 2518,
				"en": "harbor",
				"zh": "港口",
				"phonetic": "/ər/",
				"example": "The harbor is very useful.",
				"exampleZh": "港口非常有用。"
			},
			{
				"id": 2519,
				"en": "harm",
				"zh": "伤害",
				"phonetic": "/.../",
				"example": "They decided to harm the plan.",
				"exampleZh": "他们决定伤害这个计划。"
			},
			{
				"id": 2520,
				"en": "harvest",
				"zh": "收获",
				"phonetic": "/.../",
				"example": "harvest plays a key role in our life.",
				"exampleZh": "收获在我们的生活中起着关键作用。"
			},
			{
				"id": 2521,
				"en": "headline",
				"zh": "标题",
				"phonetic": "/iː/",
				"example": "This is an important headline.",
				"exampleZh": "这是一个重要的标题。"
			},
			{
				"id": 2522,
				"en": "headmaster",
				"zh": "校长",
				"phonetic": "/ər/",
				"example": "I really like the headmaster.",
				"exampleZh": "我真的很喜欢这个校长。"
			},
			{
				"id": 2523,
				"en": "heal",
				"zh": "治愈",
				"phonetic": "/iː/",
				"example": "Let's heal together.",
				"exampleZh": "让我们一起治愈吧。"
			},
			{
				"id": 2524,
				"en": "heap",
				"zh": "堆",
				"phonetic": "/iː/",
				"example": "Do you understand this heap?",
				"exampleZh": "你理解这个堆吗？"
			},
			{
				"id": 2525,
				"en": "heat",
				"zh": "热",
				"phonetic": "/iː/",
				"example": "heat plays a key role in our life.",
				"exampleZh": "热在我们的生活中起着关键作用。"
			},
			{
				"id": 2526,
				"en": "height",
				"zh": "高度",
				"phonetic": "/aɪt/",
				"example": "This is an important height.",
				"exampleZh": "这是一个重要的高度。"
			},
			{
				"id": 2527,
				"en": "helicopter",
				"zh": "直升机",
				"phonetic": "/ər/",
				"example": "I really like the helicopter.",
				"exampleZh": "我真的很喜欢这个直升机。"
			},
			{
				"id": 2528,
				"en": "hero",
				"zh": "英雄",
				"phonetic": "/.../",
				"example": "The hero is very useful.",
				"exampleZh": "英雄非常有用。"
			},
			{
				"id": 2529,
				"en": "hide",
				"zh": "隐藏",
				"phonetic": "/.../",
				"example": "They decided to hide the plan.",
				"exampleZh": "他们决定隐藏这个计划。"
			},
			{
				"id": 2530,
				"en": "highway",
				"zh": "高速公路",
				"phonetic": "/eɪ/",
				"example": "highway plays a key role in our life.",
				"exampleZh": "高速公路在我们的生活中起着关键作用。"
			},
			{
				"id": 2531,
				"en": "hire",
				"zh": "雇佣",
				"phonetic": "/.../",
				"example": "We should hire more carefully.",
				"exampleZh": "我们应该更仔细地雇佣。"
			},
			{
				"id": 2532,
				"en": "honest",
				"zh": "诚实的",
				"phonetic": "/.../",
				"example": "She looks honest today.",
				"exampleZh": "她今天看起来很诚实的。"
			},
			{
				"id": 2533,
				"en": "honor",
				"zh": "荣誉",
				"phonetic": "/ər/",
				"example": "The honor is very useful.",
				"exampleZh": "荣誉非常有用。"
			},
			{
				"id": 2534,
				"en": "horrible",
				"zh": "可怕的",
				"phonetic": "/ɪbəl/",
				"example": "The result is quite horrible.",
				"exampleZh": "结果是相当可怕的的。"
			},
			{
				"id": 2535,
				"en": "host",
				"zh": "主人",
				"phonetic": "/.../",
				"example": "host plays a key role in our life.",
				"exampleZh": "主人在我们的生活中起着关键作用。"
			},
			{
				"id": 2536,
				"en": "household",
				"zh": "家庭",
				"phonetic": "/aʊ/",
				"example": "This is an important household.",
				"exampleZh": "这是一个重要的家庭。"
			},
			{
				"id": 2537,
				"en": "housewife",
				"zh": "家庭主妇",
				"phonetic": "/aʊ/",
				"example": "I really like the housewife.",
				"exampleZh": "我真的很喜欢这个家庭主妇。"
			},
			{
				"id": 2538,
				"en": "humor",
				"zh": "幽默",
				"phonetic": "/ər/",
				"example": "The humor is very useful.",
				"exampleZh": "幽默非常有用。"
			},
			{
				"id": 2539,
				"en": "hunt",
				"zh": "打猎",
				"phonetic": "/.../",
				"example": "They decided to hunt the plan.",
				"exampleZh": "他们决定打猎这个计划。"
			},
			{
				"id": 2540,
				"en": "hurricane",
				"zh": "飓风",
				"phonetic": "/.../",
				"example": "hurricane plays a key role in our life.",
				"exampleZh": "飓风在我们的生活中起着关键作用。"
			},
			{
				"id": 2541,
				"en": "identity",
				"zh": "身份",
				"phonetic": "/.../",
				"example": "This is an important identity.",
				"exampleZh": "这是一个重要的身份。"
			},
			{
				"id": 2542,
				"en": "ignore",
				"zh": "忽视",
				"phonetic": "/.../",
				"example": "She wants to ignore this task.",
				"exampleZh": "她想忽视这个任务。"
			},
			{
				"id": 2543,
				"en": "illegal",
				"zh": "非法的",
				"phonetic": "/.../",
				"example": "It's a illegal idea.",
				"exampleZh": "这是一个非法的的主意。"
			},
			{
				"id": 2544,
				"en": "imagine",
				"zh": "想象",
				"phonetic": "/.../",
				"example": "They decided to imagine the plan.",
				"exampleZh": "他们决定想象这个计划。"
			},
			{
				"id": 2545,
				"en": "immediate",
				"zh": "立即的",
				"phonetic": "/.../",
				"example": "He found the task immediate.",
				"exampleZh": "他发现这个任务是立即的的。"
			},
			{
				"id": 2546,
				"en": "immigrate",
				"zh": "移民",
				"phonetic": "/.../",
				"example": "We should immigrate more carefully.",
				"exampleZh": "我们应该更仔细地移民。"
			},
			{
				"id": 2547,
				"en": "impact",
				"zh": "影响",
				"phonetic": "/.../",
				"example": "I really like the impact.",
				"exampleZh": "我真的很喜欢这个影响。"
			},
			{
				"id": 2548,
				"en": "import",
				"zh": "进口",
				"phonetic": "/.../",
				"example": "Let's import together.",
				"exampleZh": "让我们一起进口吧。"
			},
			{
				"id": 2549,
				"en": "impress",
				"zh": "使印象深刻",
				"phonetic": "/.../",
				"example": "They decided to impress the plan.",
				"exampleZh": "他们决定使印象深刻这个计划。"
			},
			{
				"id": 2550,
				"en": "improve",
				"zh": "改善",
				"phonetic": "/.../",
				"example": "I need to improve before the deadline.",
				"exampleZh": "我需要在截止日期前改善。"
			},
			{
				"id": 2551,
				"en": "include",
				"zh": "包括",
				"phonetic": "/.../",
				"example": "We should include more carefully.",
				"exampleZh": "我们应该更仔细地包括。"
			},
			{
				"id": 2552,
				"en": "income",
				"zh": "收入",
				"phonetic": "/.../",
				"example": "I really like the income.",
				"exampleZh": "我真的很喜欢这个收入。"
			},
			{
				"id": 2553,
				"en": "increase",
				"zh": "增加",
				"phonetic": "/iː/",
				"example": "Let's increase together.",
				"exampleZh": "让我们一起增加吧。"
			},
			{
				"id": 2554,
				"en": "indeed",
				"zh": "确实",
				"phonetic": "/d/",
				"example": "They worked indeed on the project.",
				"exampleZh": "他们确实地在这个项目上工作。"
			},
			{
				"id": 2555,
				"en": "independent",
				"zh": "独立的",
				"phonetic": "/.../",
				"example": "He found the task independent.",
				"exampleZh": "他发现这个任务是独立的的。"
			},
			{
				"id": 2556,
				"en": "indicate",
				"zh": "表明",
				"phonetic": "/.../",
				"example": "We should indicate more carefully.",
				"exampleZh": "我们应该更仔细地表明。"
			},
			{
				"id": 2557,
				"en": "individual",
				"zh": "个人",
				"phonetic": "/.../",
				"example": "I really like the individual.",
				"exampleZh": "我真的很喜欢这个个人。"
			},
			{
				"id": 2558,
				"en": "industrial",
				"zh": "工业的",
				"phonetic": "/.../",
				"example": "It's a industrial idea.",
				"exampleZh": "这是一个工业的的主意。"
			},
			{
				"id": 2559,
				"en": "infer",
				"zh": "推断",
				"phonetic": "/ər/",
				"example": "They decided to infer the plan.",
				"exampleZh": "他们决定推断这个计划。"
			},
			{
				"id": 2560,
				"en": "influence",
				"zh": "影响",
				"phonetic": "/əns/",
				"example": "influence plays a key role in our life.",
				"exampleZh": "影响在我们的生活中起着关键作用。"
			},
			{
				"id": 2561,
				"en": "inform",
				"zh": "通知",
				"phonetic": "/.../",
				"example": "We should inform more carefully.",
				"exampleZh": "我们应该更仔细地通知。"
			},
			{
				"id": 2562,
				"en": "injure",
				"zh": "受伤",
				"phonetic": "/.../",
				"example": "She wants to injure this task.",
				"exampleZh": "她想受伤这个任务。"
			},
			{
				"id": 2563,
				"en": "innocent",
				"zh": "无辜的",
				"phonetic": "/.../",
				"example": "It's a innocent idea.",
				"exampleZh": "这是一个无辜的的主意。"
			},
			{
				"id": 2564,
				"en": "insert",
				"zh": "插入",
				"phonetic": "/.../",
				"example": "They decided to insert the plan.",
				"exampleZh": "他们决定插入这个计划。"
			},
			{
				"id": 2565,
				"en": "insist",
				"zh": "坚持",
				"phonetic": "/.../",
				"example": "I need to insist before the deadline.",
				"exampleZh": "我需要在截止日期前坚持。"
			},
			{
				"id": 2566,
				"en": "inspect",
				"zh": "检查",
				"phonetic": "/.../",
				"example": "We should inspect more carefully.",
				"exampleZh": "我们应该更仔细地检查。"
			},
			{
				"id": 2567,
				"en": "inspire",
				"zh": "激励",
				"phonetic": "/.../",
				"example": "She wants to inspire this task.",
				"exampleZh": "她想激励这个任务。"
			},
			{
				"id": 2568,
				"en": "instant",
				"zh": "瞬间的",
				"phonetic": "/.../",
				"example": "It's a instant idea.",
				"exampleZh": "这是一个瞬间的的主意。"
			},
			{
				"id": 2569,
				"en": "instead",
				"zh": "代替",
				"phonetic": "/iː/",
				"example": "They worked instead on the project.",
				"exampleZh": "他们代替地在这个项目上工作。"
			},
			{
				"id": 2570,
				"en": "institute",
				"zh": "学院",
				"phonetic": "/.../",
				"example": "institute plays a key role in our life.",
				"exampleZh": "学院在我们的生活中起着关键作用。"
			},
			{
				"id": 2571,
				"en": "instruct",
				"zh": "指导",
				"phonetic": "/.../",
				"example": "We should instruct more carefully.",
				"exampleZh": "我们应该更仔细地指导。"
			},
			{
				"id": 2572,
				"en": "instruction",
				"zh": "指令",
				"phonetic": "/ʃən/",
				"example": "I really like the instruction.",
				"exampleZh": "我真的很喜欢这个指令。"
			},
			{
				"id": 2573,
				"en": "instrument",
				"zh": "乐器",
				"phonetic": "/mənt/",
				"example": "The instrument is very useful.",
				"exampleZh": "乐器非常有用。"
			},
			{
				"id": 2574,
				"en": "insurance",
				"zh": "保险",
				"phonetic": "/əns/",
				"example": "Do you understand this insurance?",
				"exampleZh": "你理解这个保险吗？"
			},
			{
				"id": 2575,
				"en": "intelligent",
				"zh": "聪明的",
				"phonetic": "/.../",
				"example": "He found the task intelligent.",
				"exampleZh": "他发现这个任务是聪明的的。"
			},
			{
				"id": 2576,
				"en": "intend",
				"zh": "打算",
				"phonetic": "/.../",
				"example": "We should intend more carefully.",
				"exampleZh": "我们应该更仔细地打算。"
			},
			{
				"id": 2577,
				"en": "intention",
				"zh": "意图",
				"phonetic": "/ʃən/",
				"example": "I really like the intention.",
				"exampleZh": "我真的很喜欢这个意图。"
			},
			{
				"id": 2578,
				"en": "interview",
				"zh": "面试",
				"phonetic": "/.../",
				"example": "The interview is very useful.",
				"exampleZh": "面试非常有用。"
			},
			{
				"id": 2579,
				"en": "introduce",
				"zh": "介绍",
				"phonetic": "/.../",
				"example": "They decided to introduce the plan.",
				"exampleZh": "他们决定介绍这个计划。"
			},
			{
				"id": 2580,
				"en": "invent",
				"zh": "发明",
				"phonetic": "/.../",
				"example": "I need to invent before the deadline.",
				"exampleZh": "我需要在截止日期前发明。"
			},
			{
				"id": 2581,
				"en": "invest",
				"zh": "投资",
				"phonetic": "/.../",
				"example": "We should invest more carefully.",
				"exampleZh": "我们应该更仔细地投资。"
			},
			{
				"id": 2582,
				"en": "invite",
				"zh": "邀请",
				"phonetic": "/.../",
				"example": "She wants to invite this task.",
				"exampleZh": "她想邀请这个任务。"
			},
			{
				"id": 2583,
				"en": "involve",
				"zh": "涉及",
				"phonetic": "/.../",
				"example": "Let's involve together.",
				"exampleZh": "让我们一起涉及吧。"
			},
			{
				"id": 2584,
				"en": "iron",
				"zh": "铁",
				"phonetic": "/.../",
				"example": "Do you understand this iron?",
				"exampleZh": "你理解这个铁吗？"
			},
			{
				"id": 2585,
				"en": "issue",
				"zh": "问题",
				"phonetic": "/.../",
				"example": "issue plays a key role in our life.",
				"exampleZh": "问题在我们的生活中起着关键作用。"
			},
			{
				"id": 2586,
				"en": "jam",
				"zh": "果酱；堵塞",
				"phonetic": "/.../",
				"example": "This is an important jam.",
				"exampleZh": "这是一个重要的果酱；堵塞。"
			},
			{
				"id": 2587,
				"en": "jar",
				"zh": "罐子",
				"phonetic": "/ɑːr/",
				"example": "I really like the jar.",
				"exampleZh": "我真的很喜欢这个罐子。"
			},
			{
				"id": 2588,
				"en": "jazz",
				"zh": "爵士乐",
				"phonetic": "/.../",
				"example": "The jazz is very useful.",
				"exampleZh": "爵士乐非常有用。"
			},
			{
				"id": 2589,
				"en": "jealous",
				"zh": "嫉妒的",
				"phonetic": "/əs/",
				"example": "The result is quite jealous.",
				"exampleZh": "结果是相当嫉妒的的。"
			},
			{
				"id": 2590,
				"en": "jewel",
				"zh": "宝石",
				"phonetic": "/.../",
				"example": "jewel plays a key role in our life.",
				"exampleZh": "宝石在我们的生活中起着关键作用。"
			},
			{
				"id": 2591,
				"en": "journalist",
				"zh": "记者",
				"phonetic": "/aʊ/",
				"example": "This is an important journalist.",
				"exampleZh": "这是一个重要的记者。"
			},
			{
				"id": 2592,
				"en": "journey",
				"zh": "旅程",
				"phonetic": "/aʊ/",
				"example": "I really like the journey.",
				"exampleZh": "我真的很喜欢这个旅程。"
			},
			{
				"id": 2593,
				"en": "joy",
				"zh": "快乐",
				"phonetic": "/ɔɪ/",
				"example": "The joy is very useful.",
				"exampleZh": "快乐非常有用。"
			},
			{
				"id": 2594,
				"en": "judge",
				"zh": "法官；判断",
				"phonetic": "/.../",
				"example": "Do you understand this judge?",
				"exampleZh": "你理解这个法官；判断吗？"
			},
			{
				"id": 2595,
				"en": "justice",
				"zh": "正义",
				"phonetic": "/.../",
				"example": "justice plays a key role in our life.",
				"exampleZh": "正义在我们的生活中起着关键作用。"
			},
			{
				"id": 2596,
				"en": "keen",
				"zh": "热衷的",
				"phonetic": "/iː/",
				"example": "This is very keen.",
				"exampleZh": "这非常热衷的。"
			},
			{
				"id": 2597,
				"en": "kick",
				"zh": "踢",
				"phonetic": "/k/",
				"example": "She wants to kick this task.",
				"exampleZh": "她想踢这个任务。"
			},
			{
				"id": 2598,
				"en": "kindergarten",
				"zh": "幼儿园",
				"phonetic": "/.../",
				"example": "The kindergarten is very useful.",
				"exampleZh": "幼儿园非常有用。"
			},
			{
				"id": 2599,
				"en": "kingdom",
				"zh": "王国",
				"phonetic": "/.../",
				"example": "Do you understand this kingdom?",
				"exampleZh": "你理解这个王国吗？"
			},
			{
				"id": 2600,
				"en": "knowledge",
				"zh": "知识",
				"phonetic": "/aʊ/",
				"example": "knowledge plays a key role in our life.",
				"exampleZh": "知识在我们的生活中起着关键作用。"
			},
			{
				"id": 2601,
				"en": "lab",
				"zh": "实验室",
				"phonetic": "/.../",
				"example": "This is an important lab.",
				"exampleZh": "这是一个重要的实验室。"
			},
			{
				"id": 2602,
				"en": "label",
				"zh": "标签",
				"phonetic": "/.../",
				"example": "I really like the label.",
				"exampleZh": "我真的很喜欢这个标签。"
			},
			{
				"id": 2603,
				"en": "labor",
				"zh": "劳动",
				"phonetic": "/ər/",
				"example": "The labor is very useful.",
				"exampleZh": "劳动非常有用。"
			},
			{
				"id": 2604,
				"en": "lack",
				"zh": "缺乏",
				"phonetic": "/k/",
				"example": "They decided to lack the plan.",
				"exampleZh": "他们决定缺乏这个计划。"
			},
			{
				"id": 2605,
				"en": "ladder",
				"zh": "梯子",
				"phonetic": "/ər/",
				"example": "ladder plays a key role in our life.",
				"exampleZh": "梯子在我们的生活中起着关键作用。"
			},
			{
				"id": 2606,
				"en": "lap",
				"zh": "膝盖",
				"phonetic": "/.../",
				"example": "This is an important lap.",
				"exampleZh": "这是一个重要的膝盖。"
			},
			{
				"id": 2607,
				"en": "largely",
				"zh": "主要地",
				"phonetic": "/li/",
				"example": "She largely agreed with us.",
				"exampleZh": "她主要地地同意了我们的意见。"
			},
			{
				"id": 2608,
				"en": "laser",
				"zh": "激光",
				"phonetic": "/ər/",
				"example": "The laser is very useful.",
				"exampleZh": "激光非常有用。"
			},
			{
				"id": 2609,
				"en": "latest",
				"zh": "最新的",
				"phonetic": "/.../",
				"example": "The result is quite latest.",
				"exampleZh": "结果是相当最新的的。"
			},
			{
				"id": 2610,
				"en": "latter",
				"zh": "后者的",
				"phonetic": "/ər/",
				"example": "He found the task latter.",
				"exampleZh": "他发现这个任务是后者的的。"
			},
			{
				"id": 2611,
				"en": "laughter",
				"zh": "笑声",
				"phonetic": "/ər/",
				"example": "This is an important laughter.",
				"exampleZh": "这是一个重要的笑声。"
			},
			{
				"id": 2612,
				"en": "launch",
				"zh": "发射",
				"phonetic": "/tʃ/",
				"example": "She wants to launch this task.",
				"exampleZh": "她想发射这个任务。"
			},
			{
				"id": 2613,
				"en": "lawyer",
				"zh": "律师",
				"phonetic": "/ər/",
				"example": "The lawyer is very useful.",
				"exampleZh": "律师非常有用。"
			},
			{
				"id": 2614,
				"en": "layer",
				"zh": "层",
				"phonetic": "/ər/",
				"example": "Do you understand this layer?",
				"exampleZh": "你理解这个层吗？"
			},
			{
				"id": 2615,
				"en": "lead",
				"zh": "领导",
				"phonetic": "/iː/",
				"example": "I need to lead before the deadline.",
				"exampleZh": "我需要在截止日期前领导。"
			},
			{
				"id": 2616,
				"en": "leader",
				"zh": "领袖",
				"phonetic": "/ər/",
				"example": "This is an important leader.",
				"exampleZh": "这是一个重要的领袖。"
			},
			{
				"id": 2617,
				"en": "league",
				"zh": "联盟",
				"phonetic": "/iː/",
				"example": "I really like the league.",
				"exampleZh": "我真的很喜欢这个联盟。"
			},
			{
				"id": 2618,
				"en": "lean",
				"zh": "瘦的",
				"phonetic": "/iː/",
				"example": "It's a lean idea.",
				"exampleZh": "这是一个瘦的的主意。"
			},
			{
				"id": 2619,
				"en": "leather",
				"zh": "皮革",
				"phonetic": "/ər/",
				"example": "Do you understand this leather?",
				"exampleZh": "你理解这个皮革吗？"
			},
			{
				"id": 2620,
				"en": "lecture",
				"zh": "讲座",
				"phonetic": "/tʃər/",
				"example": "lecture plays a key role in our life.",
				"exampleZh": "讲座在我们的生活中起着关键作用。"
			},
			{
				"id": 2621,
				"en": "legal",
				"zh": "合法的",
				"phonetic": "/.../",
				"example": "This is very legal.",
				"exampleZh": "这非常合法的。"
			},
			{
				"id": 2622,
				"en": "lemon",
				"zh": "柠檬",
				"phonetic": "/.../",
				"example": "I really like the lemon.",
				"exampleZh": "我真的很喜欢这个柠檬。"
			},
			{
				"id": 2623,
				"en": "length",
				"zh": "长度",
				"phonetic": "/θ/",
				"example": "The length is very useful.",
				"exampleZh": "长度非常有用。"
			},
			{
				"id": 2624,
				"en": "level",
				"zh": "水平",
				"phonetic": "/.../",
				"example": "Do you understand this level?",
				"exampleZh": "你理解这个水平吗？"
			},
			{
				"id": 2625,
				"en": "liberate",
				"zh": "解放",
				"phonetic": "/.../",
				"example": "I need to liberate before the deadline.",
				"exampleZh": "我需要在截止日期前解放。"
			},
			{
				"id": 2626,
				"en": "liberty",
				"zh": "自由",
				"phonetic": "/.../",
				"example": "This is an important liberty.",
				"exampleZh": "这是一个重要的自由。"
			},
			{
				"id": 2627,
				"en": "license",
				"zh": "执照",
				"phonetic": "/.../",
				"example": "I really like the license.",
				"exampleZh": "我真的很喜欢这个执照。"
			},
			{
				"id": 2628,
				"en": "likely",
				"zh": "可能的",
				"phonetic": "/li/",
				"example": "It's a likely idea.",
				"exampleZh": "这是一个可能的的主意。"
			},
			{
				"id": 2629,
				"en": "limit",
				"zh": "限制",
				"phonetic": "/.../",
				"example": "Do you understand this limit?",
				"exampleZh": "你理解这个限制吗？"
			},
			{
				"id": 2630,
				"en": "link",
				"zh": "链接",
				"phonetic": "/.../",
				"example": "link plays a key role in our life.",
				"exampleZh": "链接在我们的生活中起着关键作用。"
			},
			{
				"id": 2631,
				"en": "liquid",
				"zh": "液体",
				"phonetic": "/kw/",
				"example": "This is an important liquid.",
				"exampleZh": "这是一个重要的液体。"
			},
			{
				"id": 2632,
				"en": "literature",
				"zh": "文学",
				"phonetic": "/tʃər/",
				"example": "I really like the literature.",
				"exampleZh": "我真的很喜欢这个文学。"
			},
			{
				"id": 2633,
				"en": "lively",
				"zh": "活泼的",
				"phonetic": "/li/",
				"example": "It's a lively idea.",
				"exampleZh": "这是一个活泼的的主意。"
			},
			{
				"id": 2634,
				"en": "living",
				"zh": "活的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite living.",
				"exampleZh": "结果是相当活的的。"
			},
			{
				"id": 2635,
				"en": "load",
				"zh": "负荷",
				"phonetic": "/oʊ/",
				"example": "load plays a key role in our life.",
				"exampleZh": "负荷在我们的生活中起着关键作用。"
			},
			{
				"id": 2636,
				"en": "local",
				"zh": "当地的",
				"phonetic": "/.../",
				"example": "This is very local.",
				"exampleZh": "这非常当地的。"
			},
			{
				"id": 2637,
				"en": "locate",
				"zh": "位于",
				"phonetic": "/.../",
				"example": "She wants to locate this task.",
				"exampleZh": "她想位于这个任务。"
			},
			{
				"id": 2638,
				"en": "location",
				"zh": "位置",
				"phonetic": "/ʃən/",
				"example": "The location is very useful.",
				"exampleZh": "位置非常有用。"
			},
			{
				"id": 2639,
				"en": "lock",
				"zh": "锁",
				"phonetic": "/k/",
				"example": "They decided to lock the plan.",
				"exampleZh": "他们决定锁这个计划。"
			},
			{
				"id": 2640,
				"en": "lonely",
				"zh": "孤独的",
				"phonetic": "/li/",
				"example": "He found the task lonely.",
				"exampleZh": "他发现这个任务是孤独的的。"
			},
			{
				"id": 2641,
				"en": "loose",
				"zh": "松的",
				"phonetic": "/uː/",
				"example": "This is very loose.",
				"exampleZh": "这非常松的。"
			},
			{
				"id": 2642,
				"en": "loss",
				"zh": "损失",
				"phonetic": "/.../",
				"example": "I really like the loss.",
				"exampleZh": "我真的很喜欢这个损失。"
			},
			{
				"id": 2643,
				"en": "loud",
				"zh": "大声的",
				"phonetic": "/aʊ/",
				"example": "It's a loud idea.",
				"exampleZh": "这是一个大声的的主意。"
			},
			{
				"id": 2644,
				"en": "lower",
				"zh": "降低",
				"phonetic": "/ər/",
				"example": "They decided to lower the plan.",
				"exampleZh": "他们决定降低这个计划。"
			},
			{
				"id": 2645,
				"en": "loyal",
				"zh": "忠诚的",
				"phonetic": "/ɔɪ/",
				"example": "He found the task loyal.",
				"exampleZh": "他发现这个任务是忠诚的的。"
			},
			{
				"id": 2646,
				"en": "lung",
				"zh": "肺",
				"phonetic": "/.../",
				"example": "This is an important lung.",
				"exampleZh": "这是一个重要的肺。"
			},
			{
				"id": 2647,
				"en": "magazine",
				"zh": "杂志",
				"phonetic": "/.../",
				"example": "I really like the magazine.",
				"exampleZh": "我真的很喜欢这个杂志。"
			},
			{
				"id": 2648,
				"en": "major",
				"zh": "主要的",
				"phonetic": "/ər/",
				"example": "It's a major idea.",
				"exampleZh": "这是一个主要的的主意。"
			},
			{
				"id": 2649,
				"en": "majority",
				"zh": "大多数",
				"phonetic": "/.../",
				"example": "Do you understand this majority?",
				"exampleZh": "你理解这个大多数吗？"
			},
			{
				"id": 2650,
				"en": "male",
				"zh": "男性的",
				"phonetic": "/.../",
				"example": "He found the task male.",
				"exampleZh": "他发现这个任务是男性的的。"
			},
			{
				"id": 2651,
				"en": "manage",
				"zh": "管理",
				"phonetic": "/.../",
				"example": "We should manage more carefully.",
				"exampleZh": "我们应该更仔细地管理。"
			},
			{
				"id": 2652,
				"en": "manner",
				"zh": "方式",
				"phonetic": "/ər/",
				"example": "I really like the manner.",
				"exampleZh": "我真的很喜欢这个方式。"
			},
			{
				"id": 2653,
				"en": "manufacture",
				"zh": "制造",
				"phonetic": "/tʃər/",
				"example": "Let's manufacture together.",
				"exampleZh": "让我们一起制造吧。"
			},
			{
				"id": 2654,
				"en": "marriage",
				"zh": "婚姻",
				"phonetic": "/.../",
				"example": "Do you understand this marriage?",
				"exampleZh": "你理解这个婚姻吗？"
			},
			{
				"id": 2655,
				"en": "marry",
				"zh": "结婚",
				"phonetic": "/.../",
				"example": "I need to marry before the deadline.",
				"exampleZh": "我需要在截止日期前结婚。"
			},
			{
				"id": 2656,
				"en": "mass",
				"zh": "大量的",
				"phonetic": "/.../",
				"example": "This is very mass.",
				"exampleZh": "这非常大量的。"
			},
			{
				"id": 2657,
				"en": "master",
				"zh": "掌握",
				"phonetic": "/ər/",
				"example": "She wants to master this task.",
				"exampleZh": "她想掌握这个任务。"
			},
			{
				"id": 2658,
				"en": "material",
				"zh": "材料",
				"phonetic": "/.../",
				"example": "The material is very useful.",
				"exampleZh": "材料非常有用。"
			},
			{
				"id": 2659,
				"en": "matter",
				"zh": "事情",
				"phonetic": "/ər/",
				"example": "Do you understand this matter?",
				"exampleZh": "你理解这个事情吗？"
			},
			{
				"id": 2660,
				"en": "maximum",
				"zh": "最大",
				"phonetic": "/.../",
				"example": "maximum plays a key role in our life.",
				"exampleZh": "最大在我们的生活中起着关键作用。"
			},
			{
				"id": 2661,
				"en": "mayor",
				"zh": "市长",
				"phonetic": "/ər/",
				"example": "This is an important mayor.",
				"exampleZh": "这是一个重要的市长。"
			},
			{
				"id": 2662,
				"en": "means",
				"zh": "方法",
				"phonetic": "/iː/",
				"example": "I really like the means.",
				"exampleZh": "我真的很喜欢这个方法。"
			},
			{
				"id": 2663,
				"en": "meanwhile",
				"zh": "同时",
				"phonetic": "/w/",
				"example": "He spoke meanwhile to the audience.",
				"exampleZh": "他同时地对观众说话。"
			},
			{
				"id": 2664,
				"en": "measure",
				"zh": "测量",
				"phonetic": "/ʒər/",
				"example": "They decided to measure the plan.",
				"exampleZh": "他们决定测量这个计划。"
			},
			{
				"id": 2665,
				"en": "media",
				"zh": "媒体",
				"phonetic": "/.../",
				"example": "media plays a key role in our life.",
				"exampleZh": "媒体在我们的生活中起着关键作用。"
			},
			{
				"id": 2666,
				"en": "memory",
				"zh": "记忆",
				"phonetic": "/.../",
				"example": "This is an important memory.",
				"exampleZh": "这是一个重要的记忆。"
			},
			{
				"id": 2667,
				"en": "mental",
				"zh": "精神的",
				"phonetic": "/mənt/",
				"example": "She looks mental today.",
				"exampleZh": "她今天看起来很精神的。"
			},
			{
				"id": 2668,
				"en": "mention",
				"zh": "提到",
				"phonetic": "/ʃən/",
				"example": "Let's mention together.",
				"exampleZh": "让我们一起提到吧。"
			},
			{
				"id": 2669,
				"en": "merchant",
				"zh": "商人",
				"phonetic": "/.../",
				"example": "Do you understand this merchant?",
				"exampleZh": "你理解这个商人吗？"
			},
			{
				"id": 2670,
				"en": "mercy",
				"zh": "怜悯",
				"phonetic": "/.../",
				"example": "mercy plays a key role in our life.",
				"exampleZh": "怜悯在我们的生活中起着关键作用。"
			},
			{
				"id": 2671,
				"en": "merely",
				"zh": "仅仅",
				"phonetic": "/li/",
				"example": "They worked merely on the project.",
				"exampleZh": "他们仅仅地在这个项目上工作。"
			},
			{
				"id": 2672,
				"en": "method",
				"zh": "方法",
				"phonetic": "/.../",
				"example": "I really like the method.",
				"exampleZh": "我真的很喜欢这个方法。"
			},
			{
				"id": 2673,
				"en": "midnight",
				"zh": "午夜",
				"phonetic": "/aɪt/",
				"example": "The midnight is very useful.",
				"exampleZh": "午夜非常有用。"
			},
			{
				"id": 2674,
				"en": "mild",
				"zh": "温和的",
				"phonetic": "/.../",
				"example": "The result is quite mild.",
				"exampleZh": "结果是相当温和的的。"
			},
			{
				"id": 2675,
				"en": "million",
				"zh": "百万",
				"phonetic": "/.../",
				"example": "Let's talk about million.",
				"exampleZh": "让我们来谈谈百万吧。"
			},
			{
				"id": 2676,
				"en": "minister",
				"zh": "部长",
				"phonetic": "/ər/",
				"example": "This is an important minister.",
				"exampleZh": "这是一个重要的部长。"
			},
			{
				"id": 2677,
				"en": "minority",
				"zh": "少数",
				"phonetic": "/.../",
				"example": "I really like the minority.",
				"exampleZh": "我真的很喜欢这个少数。"
			},
			{
				"id": 2678,
				"en": "miracle",
				"zh": "奇迹",
				"phonetic": "/.../",
				"example": "The miracle is very useful.",
				"exampleZh": "奇迹非常有用。"
			},
			{
				"id": 2679,
				"en": "miserable",
				"zh": "痛苦的",
				"phonetic": "/əbəl/",
				"example": "The result is quite miserable.",
				"exampleZh": "结果是相当痛苦的的。"
			},
			{
				"id": 2680,
				"en": "missile",
				"zh": "导弹",
				"phonetic": "/.../",
				"example": "missile plays a key role in our life.",
				"exampleZh": "导弹在我们的生活中起着关键作用。"
			},
			{
				"id": 2681,
				"en": "missing",
				"zh": "失踪的",
				"phonetic": "/ɪŋ/",
				"example": "This is very missing.",
				"exampleZh": "这非常失踪的。"
			},
			{
				"id": 2682,
				"en": "mission",
				"zh": "任务",
				"phonetic": "/ʃən/",
				"example": "I really like the mission.",
				"exampleZh": "我真的很喜欢这个任务。"
			},
			{
				"id": 2683,
				"en": "mist",
				"zh": "薄雾",
				"phonetic": "/.../",
				"example": "The mist is very useful.",
				"exampleZh": "薄雾非常有用。"
			},
			{
				"id": 2684,
				"en": "mix",
				"zh": "混合",
				"phonetic": "/.../",
				"example": "They decided to mix the plan.",
				"exampleZh": "他们决定混合这个计划。"
			},
			{
				"id": 2685,
				"en": "mobile",
				"zh": "移动的",
				"phonetic": "/.../",
				"example": "He found the task mobile.",
				"exampleZh": "他发现这个任务是移动的的。"
			},
			{
				"id": 2686,
				"en": "moderate",
				"zh": "适度的",
				"phonetic": "/.../",
				"example": "This is very moderate.",
				"exampleZh": "这非常适度的。"
			},
			{
				"id": 2687,
				"en": "monitor",
				"zh": "监视器",
				"phonetic": "/ər/",
				"example": "I really like the monitor.",
				"exampleZh": "我真的很喜欢这个监视器。"
			},
			{
				"id": 2688,
				"en": "moral",
				"zh": "道德的",
				"phonetic": "/.../",
				"example": "It's a moral idea.",
				"exampleZh": "这是一个道德的的主意。"
			},
			{
				"id": 2689,
				"en": "motor",
				"zh": "马达",
				"phonetic": "/ər/",
				"example": "Do you understand this motor?",
				"exampleZh": "你理解这个马达吗？"
			},
			{
				"id": 2690,
				"en": "mourn",
				"zh": "哀悼",
				"phonetic": "/aʊ/",
				"example": "I need to mourn before the deadline.",
				"exampleZh": "我需要在截止日期前哀悼。"
			},
			{
				"id": 2691,
				"en": "movement",
				"zh": "运动",
				"phonetic": "/mənt/",
				"example": "This is an important movement.",
				"exampleZh": "这是一个重要的运动。"
			},
			{
				"id": 2692,
				"en": "murder",
				"zh": "谋杀",
				"phonetic": "/ər/",
				"example": "I really like the murder.",
				"exampleZh": "我真的很喜欢这个谋杀。"
			},
			{
				"id": 2693,
				"en": "muscle",
				"zh": "肌肉",
				"phonetic": "/.../",
				"example": "The muscle is very useful.",
				"exampleZh": "肌肉非常有用。"
			},
			{
				"id": 2694,
				"en": "musical",
				"zh": "音乐的",
				"phonetic": "/.../",
				"example": "The result is quite musical.",
				"exampleZh": "结果是相当音乐的的。"
			},
			{
				"id": 2695,
				"en": "mystery",
				"zh": "神秘",
				"phonetic": "/.../",
				"example": "mystery plays a key role in our life.",
				"exampleZh": "神秘在我们的生活中起着关键作用。"
			},
			{
				"id": 2696,
				"en": "nail",
				"zh": "钉子；指甲",
				"phonetic": "/eɪ/",
				"example": "This is an important nail.",
				"exampleZh": "这是一个重要的钉子；指甲。"
			},
			{
				"id": 2697,
				"en": "narrow",
				"zh": "窄的",
				"phonetic": "/aʊ/",
				"example": "She looks narrow today.",
				"exampleZh": "她今天看起来很窄的。"
			},
			{
				"id": 2698,
				"en": "nation",
				"zh": "国家",
				"phonetic": "/ʃən/",
				"example": "The nation is very useful.",
				"exampleZh": "国家非常有用。"
			},
			{
				"id": 2699,
				"en": "national",
				"zh": "国家的",
				"phonetic": "/ʃən/",
				"example": "The result is quite national.",
				"exampleZh": "结果是相当国家的的。"
			},
			{
				"id": 2700,
				"en": "natural",
				"zh": "自然的",
				"phonetic": "/.../",
				"example": "He found the task natural.",
				"exampleZh": "他发现这个任务是自然的的。"
			},
			{
				"id": 2701,
				"en": "navy",
				"zh": "海军",
				"phonetic": "/.../",
				"example": "This is an important navy.",
				"exampleZh": "这是一个重要的海军。"
			},
			{
				"id": 2702,
				"en": "neat",
				"zh": "整洁的",
				"phonetic": "/iː/",
				"example": "She looks neat today.",
				"exampleZh": "她今天看起来很整洁的。"
			},
			{
				"id": 2703,
				"en": "necessary",
				"zh": "必要的",
				"phonetic": "/.../",
				"example": "It's a necessary idea.",
				"exampleZh": "这是一个必要的的主意。"
			},
			{
				"id": 2704,
				"en": "necklace",
				"zh": "项链",
				"phonetic": "/.../",
				"example": "Do you understand this necklace?",
				"exampleZh": "你理解这个项链吗？"
			},
			{
				"id": 2705,
				"en": "needle",
				"zh": "针",
				"phonetic": "/iː/",
				"example": "needle plays a key role in our life.",
				"exampleZh": "针在我们的生活中起着关键作用。"
			},
			{
				"id": 2706,
				"en": "negotiate",
				"zh": "谈判",
				"phonetic": "/.../",
				"example": "We should negotiate more carefully.",
				"exampleZh": "我们应该更仔细地谈判。"
			},
			{
				"id": 2707,
				"en": "neighbor",
				"zh": "邻居",
				"phonetic": "/ər/",
				"example": "I really like the neighbor.",
				"exampleZh": "我真的很喜欢这个邻居。"
			},
			{
				"id": 2708,
				"en": "nephew",
				"zh": "侄子",
				"phonetic": "/.../",
				"example": "The nephew is very useful.",
				"exampleZh": "侄子非常有用。"
			},
			{
				"id": 2709,
				"en": "nervous",
				"zh": "紧张的",
				"phonetic": "/əs/",
				"example": "The result is quite nervous.",
				"exampleZh": "结果是相当紧张的的。"
			},
			{
				"id": 2710,
				"en": "network",
				"zh": "网络",
				"phonetic": "/.../",
				"example": "network plays a key role in our life.",
				"exampleZh": "网络在我们的生活中起着关键作用。"
			},
			{
				"id": 2711,
				"en": "niece",
				"zh": "侄女",
				"phonetic": "/.../",
				"example": "This is an important niece.",
				"exampleZh": "这是一个重要的侄女。"
			},
			{
				"id": 2712,
				"en": "noble",
				"zh": "高贵的",
				"phonetic": "/.../",
				"example": "She looks noble today.",
				"exampleZh": "她今天看起来很高贵的。"
			},
			{
				"id": 2713,
				"en": "nod",
				"zh": "点头",
				"phonetic": "/.../",
				"example": "Let's nod together.",
				"exampleZh": "让我们一起点头吧。"
			},
			{
				"id": 2714,
				"en": "noisy",
				"zh": "吵闹的",
				"phonetic": "/ɔɪ/",
				"example": "The result is quite noisy.",
				"exampleZh": "结果是相当吵闹的的。"
			},
			{
				"id": 2715,
				"en": "normal",
				"zh": "正常的",
				"phonetic": "/.../",
				"example": "He found the task normal.",
				"exampleZh": "他发现这个任务是正常的的。"
			},
			{
				"id": 2716,
				"en": "notebook",
				"zh": "笔记本",
				"phonetic": "/uː/",
				"example": "This is an important notebook.",
				"exampleZh": "这是一个重要的笔记本。"
			},
			{
				"id": 2717,
				"en": "novel",
				"zh": "小说",
				"phonetic": "/.../",
				"example": "I really like the novel.",
				"exampleZh": "我真的很喜欢这个小说。"
			},
			{
				"id": 2718,
				"en": "nowadays",
				"zh": "如今",
				"phonetic": "/eɪ/",
				"example": "She nowadays agreed with us.",
				"exampleZh": "她如今地同意了我们的意见。"
			},
			{
				"id": 2719,
				"en": "nowhere",
				"zh": "无处",
				"phonetic": "/w/",
				"example": "They worked nowhere on the project.",
				"exampleZh": "他们无处地在这个项目上工作。"
			},
			{
				"id": 2720,
				"en": "nuclear",
				"zh": "核的",
				"phonetic": "/ɑːr/",
				"example": "He found the task nuclear.",
				"exampleZh": "他发现这个任务是核的的。"
			},
			{
				"id": 2721,
				"en": "numerous",
				"zh": "许多的",
				"phonetic": "/əs/",
				"example": "This is very numerous.",
				"exampleZh": "这非常许多的。"
			},
			{
				"id": 2722,
				"en": "nutrition",
				"zh": "营养",
				"phonetic": "/ʃən/",
				"example": "I really like the nutrition.",
				"exampleZh": "我真的很喜欢这个营养。"
			},
			{
				"id": 2723,
				"en": "obey",
				"zh": "服从",
				"phonetic": "/.../",
				"example": "Let's obey together.",
				"exampleZh": "让我们一起服从吧。"
			},
			{
				"id": 2724,
				"en": "object",
				"zh": "物体",
				"phonetic": "/.../",
				"example": "Do you understand this object?",
				"exampleZh": "你理解这个物体吗？"
			},
			{
				"id": 2725,
				"en": "objective",
				"zh": "目标",
				"phonetic": "/.../",
				"example": "objective plays a key role in our life.",
				"exampleZh": "目标在我们的生活中起着关键作用。"
			},
			{
				"id": 2726,
				"en": "observe",
				"zh": "观察",
				"phonetic": "/.../",
				"example": "We should observe more carefully.",
				"exampleZh": "我们应该更仔细地观察。"
			},
			{
				"id": 2727,
				"en": "obtain",
				"zh": "获得",
				"phonetic": "/eɪ/",
				"example": "She wants to obtain this task.",
				"exampleZh": "她想获得这个任务。"
			},
			{
				"id": 2728,
				"en": "obvious",
				"zh": "明显的",
				"phonetic": "/iəs/",
				"example": "It's a obvious idea.",
				"exampleZh": "这是一个明显的的主意。"
			},
			{
				"id": 2729,
				"en": "occupation",
				"zh": "职业",
				"phonetic": "/ʃən/",
				"example": "Do you understand this occupation?",
				"exampleZh": "你理解这个职业吗？"
			},
			{
				"id": 2730,
				"en": "occupy",
				"zh": "占据",
				"phonetic": "/.../",
				"example": "I need to occupy before the deadline.",
				"exampleZh": "我需要在截止日期前占据。"
			},
			{
				"id": 2731,
				"en": "occur",
				"zh": "发生",
				"phonetic": "/.../",
				"example": "We should occur more carefully.",
				"exampleZh": "我们应该更仔细地发生。"
			},
			{
				"id": 2732,
				"en": "officer",
				"zh": "官员",
				"phonetic": "/ər/",
				"example": "I really like the officer.",
				"exampleZh": "我真的很喜欢这个官员。"
			},
			{
				"id": 2733,
				"en": "official",
				"zh": "官方的",
				"phonetic": "/ʃəl/",
				"example": "It's a official idea.",
				"exampleZh": "这是一个官方的的主意。"
			},
			{
				"id": 2734,
				"en": "onto",
				"zh": "到...上",
				"phonetic": "/.../",
				"example": "I think onto is important.",
				"exampleZh": "我认为到...上很重要。"
			},
			{
				"id": 2735,
				"en": "operate",
				"zh": "操作",
				"phonetic": "/.../",
				"example": "I need to operate before the deadline.",
				"exampleZh": "我需要在截止日期前操作。"
			},
			{
				"id": 2736,
				"en": "opinion",
				"zh": "意见",
				"phonetic": "/.../",
				"example": "This is an important opinion.",
				"exampleZh": "这是一个重要的意见。"
			},
			{
				"id": 2737,
				"en": "oppose",
				"zh": "反对",
				"phonetic": "/.../",
				"example": "She wants to oppose this task.",
				"exampleZh": "她想反对这个任务。"
			},
			{
				"id": 2738,
				"en": "opposite",
				"zh": "相反的",
				"phonetic": "/.../",
				"example": "It's a opposite idea.",
				"exampleZh": "这是一个相反的的主意。"
			},
			{
				"id": 2739,
				"en": "ordinary",
				"zh": "普通的",
				"phonetic": "/.../",
				"example": "The result is quite ordinary.",
				"exampleZh": "结果是相当普通的的。"
			},
			{
				"id": 2740,
				"en": "organize",
				"zh": "组织",
				"phonetic": "/.../",
				"example": "I need to organize before the deadline.",
				"exampleZh": "我需要在截止日期前组织。"
			},
			{
				"id": 2741,
				"en": "origin",
				"zh": "起源",
				"phonetic": "/.../",
				"example": "This is an important origin.",
				"exampleZh": "这是一个重要的起源。"
			},
			{
				"id": 2742,
				"en": "otherwise",
				"zh": "否则",
				"phonetic": "/.../",
				"example": "She otherwise agreed with us.",
				"exampleZh": "她否则地同意了我们的意见。"
			},
			{
				"id": 2743,
				"en": "ought",
				"zh": "应该",
				"phonetic": "/aʊ/",
				"example": "Let's ought together.",
				"exampleZh": "让我们一起应该吧。"
			},
			{
				"id": 2744,
				"en": "outcome",
				"zh": "结果",
				"phonetic": "/aʊ/",
				"example": "Do you understand this outcome?",
				"exampleZh": "你理解这个结果吗？"
			},
			{
				"id": 2745,
				"en": "outdoor",
				"zh": "户外的",
				"phonetic": "/ər/",
				"example": "He found the task outdoor.",
				"exampleZh": "他发现这个任务是户外的的。"
			},
			{
				"id": 2746,
				"en": "outer",
				"zh": "外部的",
				"phonetic": "/ər/",
				"example": "This is very outer.",
				"exampleZh": "这非常外部的。"
			},
			{
				"id": 2747,
				"en": "outline",
				"zh": "大纲",
				"phonetic": "/aʊ/",
				"example": "I really like the outline.",
				"exampleZh": "我真的很喜欢这个大纲。"
			},
			{
				"id": 2748,
				"en": "output",
				"zh": "输出",
				"phonetic": "/aʊ/",
				"example": "The output is very useful.",
				"exampleZh": "输出非常有用。"
			},
			{
				"id": 2749,
				"en": "outstanding",
				"zh": "杰出的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite outstanding.",
				"exampleZh": "结果是相当杰出的的。"
			},
			{
				"id": 2750,
				"en": "overcome",
				"zh": "克服",
				"phonetic": "/.../",
				"example": "I need to overcome before the deadline.",
				"exampleZh": "我需要在截止日期前克服。"
			},
			{
				"id": 2751,
				"en": "owe",
				"zh": "欠",
				"phonetic": "/aʊ/",
				"example": "We should owe more carefully.",
				"exampleZh": "我们应该更仔细地欠。"
			},
			{
				"id": 2752,
				"en": "oxygen",
				"zh": "氧气",
				"phonetic": "/.../",
				"example": "I really like the oxygen.",
				"exampleZh": "我真的很喜欢这个氧气。"
			},
			{
				"id": 2753,
				"en": "pace",
				"zh": "步伐",
				"phonetic": "/.../",
				"example": "The pace is very useful.",
				"exampleZh": "步伐非常有用。"
			},
			{
				"id": 2754,
				"en": "pack",
				"zh": "打包",
				"phonetic": "/k/",
				"example": "They decided to pack the plan.",
				"exampleZh": "他们决定打包这个计划。"
			},
			{
				"id": 2755,
				"en": "package",
				"zh": "包裹",
				"phonetic": "/.../",
				"example": "package plays a key role in our life.",
				"exampleZh": "包裹在我们的生活中起着关键作用。"
			},
			{
				"id": 2756,
				"en": "painful",
				"zh": "痛苦的",
				"phonetic": "/fəl/",
				"example": "This is very painful.",
				"exampleZh": "这非常痛苦的。"
			},
			{
				"id": 2757,
				"en": "painter",
				"zh": "画家",
				"phonetic": "/ər/",
				"example": "I really like the painter.",
				"exampleZh": "我真的很喜欢这个画家。"
			},
			{
				"id": 2758,
				"en": "pale",
				"zh": "苍白的",
				"phonetic": "/.../",
				"example": "It's a pale idea.",
				"exampleZh": "这是一个苍白的的主意。"
			},
			{
				"id": 2759,
				"en": "panic",
				"zh": "恐慌",
				"phonetic": "/.../",
				"example": "Do you understand this panic?",
				"exampleZh": "你理解这个恐慌吗？"
			},
			{
				"id": 2760,
				"en": "paragraph",
				"zh": "段落",
				"phonetic": "/f/",
				"example": "paragraph plays a key role in our life.",
				"exampleZh": "段落在我们的生活中起着关键作用。"
			},
			{
				"id": 2761,
				"en": "participate",
				"zh": "参加",
				"phonetic": "/.../",
				"example": "We should participate more carefully.",
				"exampleZh": "我们应该更仔细地参加。"
			},
			{
				"id": 2762,
				"en": "particular",
				"zh": "特别的",
				"phonetic": "/ɑːr/",
				"example": "She looks particular today.",
				"exampleZh": "她今天看起来很特别的。"
			},
			{
				"id": 2763,
				"en": "partly",
				"zh": "部分地",
				"phonetic": "/li/",
				"example": "She partly agreed with us.",
				"exampleZh": "她部分地地同意了我们的意见。"
			},
			{
				"id": 2764,
				"en": "partner",
				"zh": "伙伴",
				"phonetic": "/ər/",
				"example": "Do you understand this partner?",
				"exampleZh": "你理解这个伙伴吗？"
			},
			{
				"id": 2765,
				"en": "passage",
				"zh": "段落；通道",
				"phonetic": "/.../",
				"example": "passage plays a key role in our life.",
				"exampleZh": "段落；通道在我们的生活中起着关键作用。"
			},
			{
				"id": 2766,
				"en": "passenger",
				"zh": "乘客",
				"phonetic": "/ər/",
				"example": "This is an important passenger.",
				"exampleZh": "这是一个重要的乘客。"
			},
			{
				"id": 2767,
				"en": "passerby",
				"zh": "路人",
				"phonetic": "/.../",
				"example": "I really like the passerby.",
				"exampleZh": "我真的很喜欢这个路人。"
			},
			{
				"id": 2768,
				"en": "passive",
				"zh": "被动的",
				"phonetic": "/.../",
				"example": "It's a passive idea.",
				"exampleZh": "这是一个被动的的主意。"
			},
			{
				"id": 2769,
				"en": "patent",
				"zh": "专利",
				"phonetic": "/.../",
				"example": "Do you understand this patent?",
				"exampleZh": "你理解这个专利吗？"
			},
			{
				"id": 2770,
				"en": "path",
				"zh": "小路",
				"phonetic": "/θ/",
				"example": "path plays a key role in our life.",
				"exampleZh": "小路在我们的生活中起着关键作用。"
			},
			{
				"id": 2771,
				"en": "patience",
				"zh": "耐心",
				"phonetic": "/əns/",
				"example": "This is an important patience.",
				"exampleZh": "这是一个重要的耐心。"
			},
			{
				"id": 2772,
				"en": "pattern",
				"zh": "模式",
				"phonetic": "/.../",
				"example": "I really like the pattern.",
				"exampleZh": "我真的很喜欢这个模式。"
			},
			{
				"id": 2773,
				"en": "pause",
				"zh": "暂停",
				"phonetic": "/ɔː/",
				"example": "Let's pause together.",
				"exampleZh": "让我们一起暂停吧。"
			},
			{
				"id": 2774,
				"en": "peaceful",
				"zh": "平静的",
				"phonetic": "/fəl/",
				"example": "The result is quite peaceful.",
				"exampleZh": "结果是相当平静的的。"
			},
			{
				"id": 2775,
				"en": "peak",
				"zh": "顶峰",
				"phonetic": "/iː/",
				"example": "peak plays a key role in our life.",
				"exampleZh": "顶峰在我们的生活中起着关键作用。"
			},
			{
				"id": 2776,
				"en": "peasant",
				"zh": "农民",
				"phonetic": "/iː/",
				"example": "This is an important peasant.",
				"exampleZh": "这是一个重要的农民。"
			},
			{
				"id": 2777,
				"en": "penny",
				"zh": "便士",
				"phonetic": "/.../",
				"example": "I really like the penny.",
				"exampleZh": "我真的很喜欢这个便士。"
			},
			{
				"id": 2778,
				"en": "pension",
				"zh": "退休金",
				"phonetic": "/ʒən/",
				"example": "The pension is very useful.",
				"exampleZh": "退休金非常有用。"
			},
			{
				"id": 2779,
				"en": "percent",
				"zh": "百分比",
				"phonetic": "/.../",
				"example": "Do you understand this percent?",
				"exampleZh": "你理解这个百分比吗？"
			},
			{
				"id": 2780,
				"en": "perform",
				"zh": "表演",
				"phonetic": "/.../",
				"example": "I need to perform before the deadline.",
				"exampleZh": "我需要在截止日期前表演。"
			},
			{
				"id": 2781,
				"en": "performance",
				"zh": "表演",
				"phonetic": "/əns/",
				"example": "This is an important performance.",
				"exampleZh": "这是一个重要的表演。"
			},
			{
				"id": 2782,
				"en": "period",
				"zh": "时期",
				"phonetic": "/.../",
				"example": "I really like the period.",
				"exampleZh": "我真的很喜欢这个时期。"
			},
			{
				"id": 2783,
				"en": "permission",
				"zh": "许可",
				"phonetic": "/ʃən/",
				"example": "The permission is very useful.",
				"exampleZh": "许可非常有用。"
			},
			{
				"id": 2784,
				"en": "permit",
				"zh": "允许",
				"phonetic": "/.../",
				"example": "They decided to permit the plan.",
				"exampleZh": "他们决定允许这个计划。"
			},
			{
				"id": 2785,
				"en": "personal",
				"zh": "个人的",
				"phonetic": "/.../",
				"example": "He found the task personal.",
				"exampleZh": "他发现这个任务是个人的的。"
			},
			{
				"id": 2786,
				"en": "personality",
				"zh": "个性",
				"phonetic": "/.../",
				"example": "This is an important personality.",
				"exampleZh": "这是一个重要的个性。"
			},
			{
				"id": 2787,
				"en": "persuade",
				"zh": "说服",
				"phonetic": "/.../",
				"example": "She wants to persuade this task.",
				"exampleZh": "她想说服这个任务。"
			},
			{
				"id": 2788,
				"en": "petrol",
				"zh": "汽油",
				"phonetic": "/.../",
				"example": "The petrol is very useful.",
				"exampleZh": "汽油非常有用。"
			},
			{
				"id": 2789,
				"en": "phenomenon",
				"zh": "现象",
				"phonetic": "/.../",
				"example": "Do you understand this phenomenon?",
				"exampleZh": "你理解这个现象吗？"
			},
			{
				"id": 2790,
				"en": "philosophy",
				"zh": "哲学",
				"phonetic": "/.../",
				"example": "philosophy plays a key role in our life.",
				"exampleZh": "哲学在我们的生活中起着关键作用。"
			},
			{
				"id": 2791,
				"en": "phrase",
				"zh": "短语",
				"phonetic": "/.../",
				"example": "This is an important phrase.",
				"exampleZh": "这是一个重要的短语。"
			},
			{
				"id": 2792,
				"en": "physical",
				"zh": "物理的",
				"phonetic": "/.../",
				"example": "She looks physical today.",
				"exampleZh": "她今天看起来很物理的。"
			},
			{
				"id": 2793,
				"en": "physician",
				"zh": "医生",
				"phonetic": "/.../",
				"example": "The physician is very useful.",
				"exampleZh": "医生非常有用。"
			},
			{
				"id": 2794,
				"en": "pile",
				"zh": "堆",
				"phonetic": "/.../",
				"example": "Do you understand this pile?",
				"exampleZh": "你理解这个堆吗？"
			},
			{
				"id": 2795,
				"en": "pill",
				"zh": "药丸",
				"phonetic": "/.../",
				"example": "pill plays a key role in our life.",
				"exampleZh": "药丸在我们的生活中起着关键作用。"
			},
			{
				"id": 2796,
				"en": "pity",
				"zh": "同情",
				"phonetic": "/.../",
				"example": "This is an important pity.",
				"exampleZh": "这是一个重要的同情。"
			},
			{
				"id": 2797,
				"en": "plain",
				"zh": "平原",
				"phonetic": "/eɪ/",
				"example": "I really like the plain.",
				"exampleZh": "我真的很喜欢这个平原。"
			},
			{
				"id": 2798,
				"en": "plastic",
				"zh": "塑料的",
				"phonetic": "/.../",
				"example": "It's a plastic idea.",
				"exampleZh": "这是一个塑料的的主意。"
			},
			{
				"id": 2799,
				"en": "pleasure",
				"zh": "快乐",
				"phonetic": "/ʒər/",
				"example": "Do you understand this pleasure?",
				"exampleZh": "你理解这个快乐吗？"
			},
			{
				"id": 2800,
				"en": "plus",
				"zh": "加",
				"phonetic": "/.../",
				"example": "I think plus is important.",
				"exampleZh": "我认为加很重要。"
			},
			{
				"id": 2801,
				"en": "poem",
				"zh": "诗",
				"phonetic": "/.../",
				"example": "This is an important poem.",
				"exampleZh": "这是一个重要的诗。"
			},
			{
				"id": 2802,
				"en": "poet",
				"zh": "诗人",
				"phonetic": "/.../",
				"example": "I really like the poet.",
				"exampleZh": "我真的很喜欢这个诗人。"
			},
			{
				"id": 2803,
				"en": "poison",
				"zh": "毒药",
				"phonetic": "/ɔɪ/",
				"example": "The poison is very useful.",
				"exampleZh": "毒药非常有用。"
			},
			{
				"id": 2804,
				"en": "policy",
				"zh": "政策",
				"phonetic": "/.../",
				"example": "Do you understand this policy?",
				"exampleZh": "你理解这个政策吗？"
			},
			{
				"id": 2805,
				"en": "polite",
				"zh": "有礼貌的",
				"phonetic": "/.../",
				"example": "He found the task polite.",
				"exampleZh": "他发现这个任务是有礼貌的的。"
			},
			{
				"id": 2806,
				"en": "politics",
				"zh": "政治",
				"phonetic": "/.../",
				"example": "This is an important politics.",
				"exampleZh": "这是一个重要的政治。"
			},
			{
				"id": 2807,
				"en": "pollute",
				"zh": "污染",
				"phonetic": "/.../",
				"example": "She wants to pollute this task.",
				"exampleZh": "她想污染这个任务。"
			},
			{
				"id": 2808,
				"en": "pollution",
				"zh": "污染",
				"phonetic": "/ʃən/",
				"example": "The pollution is very useful.",
				"exampleZh": "污染非常有用。"
			},
			{
				"id": 2809,
				"en": "population",
				"zh": "人口",
				"phonetic": "/ʃən/",
				"example": "Do you understand this population?",
				"exampleZh": "你理解这个人口吗？"
			},
			{
				"id": 2810,
				"en": "pork",
				"zh": "猪肉",
				"phonetic": "/.../",
				"example": "pork plays a key role in our life.",
				"exampleZh": "猪肉在我们的生活中起着关键作用。"
			},
			{
				"id": 2811,
				"en": "port",
				"zh": "港口",
				"phonetic": "/.../",
				"example": "This is an important port.",
				"exampleZh": "这是一个重要的港口。"
			},
			{
				"id": 2812,
				"en": "position",
				"zh": "位置",
				"phonetic": "/ʃən/",
				"example": "I really like the position.",
				"exampleZh": "我真的很喜欢这个位置。"
			},
			{
				"id": 2813,
				"en": "positive",
				"zh": "积极的",
				"phonetic": "/.../",
				"example": "It's a positive idea.",
				"exampleZh": "这是一个积极的的主意。"
			},
			{
				"id": 2814,
				"en": "possess",
				"zh": "拥有",
				"phonetic": "/.../",
				"example": "They decided to possess the plan.",
				"exampleZh": "他们决定拥有这个计划。"
			},
			{
				"id": 2815,
				"en": "poster",
				"zh": "海报",
				"phonetic": "/ər/",
				"example": "poster plays a key role in our life.",
				"exampleZh": "海报在我们的生活中起着关键作用。"
			},
			{
				"id": 2816,
				"en": "postman",
				"zh": "邮递员",
				"phonetic": "/.../",
				"example": "This is an important postman.",
				"exampleZh": "这是一个重要的邮递员。"
			},
			{
				"id": 2817,
				"en": "pot",
				"zh": "锅",
				"phonetic": "/.../",
				"example": "I really like the pot.",
				"exampleZh": "我真的很喜欢这个锅。"
			},
			{
				"id": 2818,
				"en": "potential",
				"zh": "潜力",
				"phonetic": "/ʃəl/",
				"example": "The potential is very useful.",
				"exampleZh": "潜力非常有用。"
			},
			{
				"id": 2819,
				"en": "pour",
				"zh": "倾倒",
				"phonetic": "/aʊ/",
				"example": "They decided to pour the plan.",
				"exampleZh": "他们决定倾倒这个计划。"
			},
			{
				"id": 2820,
				"en": "powder",
				"zh": "粉末",
				"phonetic": "/ər/",
				"example": "powder plays a key role in our life.",
				"exampleZh": "粉末在我们的生活中起着关键作用。"
			},
			{
				"id": 2821,
				"en": "power",
				"zh": "力量",
				"phonetic": "/ər/",
				"example": "This is an important power.",
				"exampleZh": "这是一个重要的力量。"
			},
			{
				"id": 2822,
				"en": "powerful",
				"zh": "强大的",
				"phonetic": "/fəl/",
				"example": "She looks powerful today.",
				"exampleZh": "她今天看起来很强大的。"
			},
			{
				"id": 2823,
				"en": "practical",
				"zh": "实用的",
				"phonetic": "/.../",
				"example": "It's a practical idea.",
				"exampleZh": "这是一个实用的的主意。"
			},
			{
				"id": 2824,
				"en": "praise",
				"zh": "赞扬",
				"phonetic": "/eɪ/",
				"example": "They decided to praise the plan.",
				"exampleZh": "他们决定赞扬这个计划。"
			},
			{
				"id": 2825,
				"en": "pray",
				"zh": "祈祷",
				"phonetic": "/eɪ/",
				"example": "I need to pray before the deadline.",
				"exampleZh": "我需要在截止日期前祈祷。"
			},
			{
				"id": 2826,
				"en": "predict",
				"zh": "预测",
				"phonetic": "/.../",
				"example": "We should predict more carefully.",
				"exampleZh": "我们应该更仔细地预测。"
			},
			{
				"id": 2827,
				"en": "prefer",
				"zh": "更喜欢",
				"phonetic": "/ər/",
				"example": "She wants to prefer this task.",
				"exampleZh": "她想更喜欢这个任务。"
			},
			{
				"id": 2828,
				"en": "prepare",
				"zh": "准备",
				"phonetic": "/.../",
				"example": "Let's prepare together.",
				"exampleZh": "让我们一起准备吧。"
			},
			{
				"id": 2829,
				"en": "press",
				"zh": "按；压",
				"phonetic": "/.../",
				"example": "They decided to press the plan.",
				"exampleZh": "他们决定按；压这个计划。"
			},
			{
				"id": 2830,
				"en": "pressure",
				"zh": "压力",
				"phonetic": "/ʒər/",
				"example": "pressure plays a key role in our life.",
				"exampleZh": "压力在我们的生活中起着关键作用。"
			},
			{
				"id": 2831,
				"en": "pretend",
				"zh": "假装",
				"phonetic": "/.../",
				"example": "We should pretend more carefully.",
				"exampleZh": "我们应该更仔细地假装。"
			},
			{
				"id": 2832,
				"en": "prevent",
				"zh": "预防",
				"phonetic": "/.../",
				"example": "She wants to prevent this task.",
				"exampleZh": "她想预防这个任务。"
			},
			{
				"id": 2833,
				"en": "previous",
				"zh": "以前的",
				"phonetic": "/iəs/",
				"example": "It's a previous idea.",
				"exampleZh": "这是一个以前的的主意。"
			},
			{
				"id": 2834,
				"en": "pride",
				"zh": "骄傲",
				"phonetic": "/.../",
				"example": "Do you understand this pride?",
				"exampleZh": "你理解这个骄傲吗？"
			},
			{
				"id": 2835,
				"en": "primary",
				"zh": "首要的",
				"phonetic": "/.../",
				"example": "He found the task primary.",
				"exampleZh": "他发现这个任务是首要的的。"
			},
			{
				"id": 2836,
				"en": "principle",
				"zh": "原则",
				"phonetic": "/.../",
				"example": "This is an important principle.",
				"exampleZh": "这是一个重要的原则。"
			},
			{
				"id": 2837,
				"en": "print",
				"zh": "打印",
				"phonetic": "/.../",
				"example": "She wants to print this task.",
				"exampleZh": "她想打印这个任务。"
			},
			{
				"id": 2838,
				"en": "prison",
				"zh": "监狱",
				"phonetic": "/.../",
				"example": "The prison is very useful.",
				"exampleZh": "监狱非常有用。"
			},
			{
				"id": 2839,
				"en": "private",
				"zh": "私人的",
				"phonetic": "/.../",
				"example": "The result is quite private.",
				"exampleZh": "结果是相当私人的的。"
			},
			{
				"id": 2840,
				"en": "prize",
				"zh": "奖品",
				"phonetic": "/.../",
				"example": "prize plays a key role in our life.",
				"exampleZh": "奖品在我们的生活中起着关键作用。"
			},
			{
				"id": 2841,
				"en": "probably",
				"zh": "可能",
				"phonetic": "/li/",
				"example": "She probably agreed with us.",
				"exampleZh": "她可能地同意了我们的意见。"
			},
			{
				"id": 2842,
				"en": "process",
				"zh": "过程",
				"phonetic": "/.../",
				"example": "I really like the process.",
				"exampleZh": "我真的很喜欢这个过程。"
			},
			{
				"id": 2843,
				"en": "produce",
				"zh": "生产",
				"phonetic": "/.../",
				"example": "Let's produce together.",
				"exampleZh": "让我们一起生产吧。"
			},
			{
				"id": 2844,
				"en": "product",
				"zh": "产品",
				"phonetic": "/.../",
				"example": "Do you understand this product?",
				"exampleZh": "你理解这个产品吗？"
			},
			{
				"id": 2845,
				"en": "production",
				"zh": "生产",
				"phonetic": "/ʃən/",
				"example": "production plays a key role in our life.",
				"exampleZh": "生产在我们的生活中起着关键作用。"
			},
			{
				"id": 2846,
				"en": "profession",
				"zh": "职业",
				"phonetic": "/ʃən/",
				"example": "This is an important profession.",
				"exampleZh": "这是一个重要的职业。"
			},
			{
				"id": 2847,
				"en": "professor",
				"zh": "教授",
				"phonetic": "/ər/",
				"example": "I really like the professor.",
				"exampleZh": "我真的很喜欢这个教授。"
			},
			{
				"id": 2848,
				"en": "profit",
				"zh": "利润",
				"phonetic": "/.../",
				"example": "The profit is very useful.",
				"exampleZh": "利润非常有用。"
			},
			{
				"id": 2849,
				"en": "program",
				"zh": "节目；程序",
				"phonetic": "/.../",
				"example": "Do you understand this program?",
				"exampleZh": "你理解这个节目；程序吗？"
			},
			{
				"id": 2850,
				"en": "progress",
				"zh": "进步",
				"phonetic": "/.../",
				"example": "progress plays a key role in our life.",
				"exampleZh": "进步在我们的生活中起着关键作用。"
			},
			{
				"id": 2851,
				"en": "project",
				"zh": "项目",
				"phonetic": "/.../",
				"example": "This is an important project.",
				"exampleZh": "这是一个重要的项目。"
			},
			{
				"id": 2852,
				"en": "promise",
				"zh": "承诺",
				"phonetic": "/.../",
				"example": "She wants to promise this task.",
				"exampleZh": "她想承诺这个任务。"
			},
			{
				"id": 2853,
				"en": "promote",
				"zh": "促进",
				"phonetic": "/.../",
				"example": "Let's promote together.",
				"exampleZh": "让我们一起促进吧。"
			},
			{
				"id": 2854,
				"en": "pronounce",
				"zh": "发音",
				"phonetic": "/aʊ/",
				"example": "They decided to pronounce the plan.",
				"exampleZh": "他们决定发音这个计划。"
			},
			{
				"id": 2855,
				"en": "proof",
				"zh": "证据",
				"phonetic": "/uː/",
				"example": "proof plays a key role in our life.",
				"exampleZh": "证据在我们的生活中起着关键作用。"
			},
			{
				"id": 2856,
				"en": "proper",
				"zh": "适当的",
				"phonetic": "/ər/",
				"example": "This is very proper.",
				"exampleZh": "这非常适当的。"
			},
			{
				"id": 2857,
				"en": "property",
				"zh": "财产",
				"phonetic": "/.../",
				"example": "I really like the property.",
				"exampleZh": "我真的很喜欢这个财产。"
			},
			{
				"id": 2858,
				"en": "protect",
				"zh": "保护",
				"phonetic": "/.../",
				"example": "Let's protect together.",
				"exampleZh": "让我们一起保护吧。"
			},
			{
				"id": 2859,
				"en": "proud",
				"zh": "自豪的",
				"phonetic": "/aʊ/",
				"example": "The result is quite proud.",
				"exampleZh": "结果是相当自豪的的。"
			},
			{
				"id": 2860,
				"en": "prove",
				"zh": "证明",
				"phonetic": "/.../",
				"example": "I need to prove before the deadline.",
				"exampleZh": "我需要在截止日期前证明。"
			},
			{
				"id": 2861,
				"en": "provide",
				"zh": "提供",
				"phonetic": "/.../",
				"example": "We should provide more carefully.",
				"exampleZh": "我们应该更仔细地提供。"
			},
			{
				"id": 2862,
				"en": "province",
				"zh": "省份",
				"phonetic": "/.../",
				"example": "I really like the province.",
				"exampleZh": "我真的很喜欢这个省份。"
			},
			{
				"id": 2863,
				"en": "psychology",
				"zh": "心理学",
				"phonetic": "/.../",
				"example": "The psychology is very useful.",
				"exampleZh": "心理学非常有用。"
			},
			{
				"id": 2864,
				"en": "public",
				"zh": "公共的",
				"phonetic": "/.../",
				"example": "The result is quite public.",
				"exampleZh": "结果是相当公共的的。"
			},
			{
				"id": 2865,
				"en": "publish",
				"zh": "出版",
				"phonetic": "/ʃ/",
				"example": "I need to publish before the deadline.",
				"exampleZh": "我需要在截止日期前出版。"
			},
			{
				"id": 2866,
				"en": "pull",
				"zh": "拉",
				"phonetic": "/.../",
				"example": "We should pull more carefully.",
				"exampleZh": "我们应该更仔细地拉。"
			},
			{
				"id": 2867,
				"en": "punish",
				"zh": "惩罚",
				"phonetic": "/ʃ/",
				"example": "She wants to punish this task.",
				"exampleZh": "她想惩罚这个任务。"
			},
			{
				"id": 2868,
				"en": "purpose",
				"zh": "目的",
				"phonetic": "/.../",
				"example": "The purpose is very useful.",
				"exampleZh": "目的非常有用。"
			},
			{
				"id": 2869,
				"en": "quality",
				"zh": "质量",
				"phonetic": "/kw/",
				"example": "Do you understand this quality?",
				"exampleZh": "你理解这个质量吗？"
			},
			{
				"id": 2870,
				"en": "quantity",
				"zh": "数量",
				"phonetic": "/kw/",
				"example": "quantity plays a key role in our life.",
				"exampleZh": "数量在我们的生活中起着关键作用。"
			},
			{
				"id": 2871,
				"en": "rapid",
				"zh": "迅速的",
				"phonetic": "/.../",
				"example": "This is very rapid.",
				"exampleZh": "这非常迅速的。"
			},
			{
				"id": 2872,
				"en": "rare",
				"zh": "稀有的",
				"phonetic": "/.../",
				"example": "She looks rare today.",
				"exampleZh": "她今天看起来很稀有的。"
			},
			{
				"id": 2873,
				"en": "rate",
				"zh": "比率",
				"phonetic": "/.../",
				"example": "The rate is very useful.",
				"exampleZh": "比率非常有用。"
			},
			{
				"id": 2874,
				"en": "rather",
				"zh": "相当",
				"phonetic": "/ər/",
				"example": "She rather agreed with us.",
				"exampleZh": "她相当地同意了我们的意见。"
			},
			{
				"id": 2875,
				"en": "raw",
				"zh": "生的",
				"phonetic": "/ɔː/",
				"example": "He found the task raw.",
				"exampleZh": "他发现这个任务是生的的。"
			},
			{
				"id": 2876,
				"en": "react",
				"zh": "反应",
				"phonetic": "/iː/",
				"example": "We should react more carefully.",
				"exampleZh": "我们应该更仔细地反应。"
			},
			{
				"id": 2877,
				"en": "realistic",
				"zh": "现实的",
				"phonetic": "/iː/",
				"example": "She looks realistic today.",
				"exampleZh": "她今天看起来很现实的。"
			},
			{
				"id": 2878,
				"en": "reality",
				"zh": "现实",
				"phonetic": "/iː/",
				"example": "The reality is very useful.",
				"exampleZh": "现实非常有用。"
			},
			{
				"id": 2879,
				"en": "realize",
				"zh": "意识到",
				"phonetic": "/iː/",
				"example": "They decided to realize the plan.",
				"exampleZh": "他们决定意识到这个计划。"
			},
			{
				"id": 2880,
				"en": "reasonable",
				"zh": "合理的",
				"phonetic": "/əbəl/",
				"example": "He found the task reasonable.",
				"exampleZh": "他发现这个任务是合理的的。"
			},
			{
				"id": 2881,
				"en": "receive",
				"zh": "收到",
				"phonetic": "/.../",
				"example": "We should receive more carefully.",
				"exampleZh": "我们应该更仔细地收到。"
			},
			{
				"id": 2882,
				"en": "recent",
				"zh": "最近的",
				"phonetic": "/.../",
				"example": "She looks recent today.",
				"exampleZh": "她今天看起来很最近的。"
			},
			{
				"id": 2883,
				"en": "reception",
				"zh": "接待",
				"phonetic": "/ʃən/",
				"example": "The reception is very useful.",
				"exampleZh": "接待非常有用。"
			},
			{
				"id": 2884,
				"en": "recognize",
				"zh": "认出",
				"phonetic": "/.../",
				"example": "They decided to recognize the plan.",
				"exampleZh": "他们决定认出这个计划。"
			},
			{
				"id": 2885,
				"en": "recommend",
				"zh": "推荐",
				"phonetic": "/.../",
				"example": "I need to recommend before the deadline.",
				"exampleZh": "我需要在截止日期前推荐。"
			},
			{
				"id": 2886,
				"en": "record",
				"zh": "记录",
				"phonetic": "/.../",
				"example": "We should record more carefully.",
				"exampleZh": "我们应该更仔细地记录。"
			},
			{
				"id": 2887,
				"en": "recover",
				"zh": "恢复",
				"phonetic": "/ər/",
				"example": "She wants to recover this task.",
				"exampleZh": "她想恢复这个任务。"
			},
			{
				"id": 2888,
				"en": "reduce",
				"zh": "减少",
				"phonetic": "/.../",
				"example": "Let's reduce together.",
				"exampleZh": "让我们一起减少吧。"
			},
			{
				"id": 2889,
				"en": "refer",
				"zh": "参考",
				"phonetic": "/ər/",
				"example": "They decided to refer the plan.",
				"exampleZh": "他们决定参考这个计划。"
			},
			{
				"id": 2890,
				"en": "reflect",
				"zh": "反映",
				"phonetic": "/.../",
				"example": "I need to reflect before the deadline.",
				"exampleZh": "我需要在截止日期前反映。"
			},
			{
				"id": 2891,
				"en": "reform",
				"zh": "改革",
				"phonetic": "/.../",
				"example": "We should reform more carefully.",
				"exampleZh": "我们应该更仔细地改革。"
			},
			{
				"id": 2892,
				"en": "refuse",
				"zh": "拒绝",
				"phonetic": "/.../",
				"example": "She wants to refuse this task.",
				"exampleZh": "她想拒绝这个任务。"
			},
			{
				"id": 2893,
				"en": "regard",
				"zh": "看待",
				"phonetic": "/.../",
				"example": "Let's regard together.",
				"exampleZh": "让我们一起看待吧。"
			},
			{
				"id": 2894,
				"en": "region",
				"zh": "地区",
				"phonetic": "/.../",
				"example": "Do you understand this region?",
				"exampleZh": "你理解这个地区吗？"
			},
			{
				"id": 2895,
				"en": "regret",
				"zh": "后悔",
				"phonetic": "/.../",
				"example": "I need to regret before the deadline.",
				"exampleZh": "我需要在截止日期前后悔。"
			},
			{
				"id": 2896,
				"en": "regular",
				"zh": "规则的",
				"phonetic": "/ɑːr/",
				"example": "This is very regular.",
				"exampleZh": "这非常规则的。"
			},
			{
				"id": 2897,
				"en": "reject",
				"zh": "拒绝",
				"phonetic": "/.../",
				"example": "She wants to reject this task.",
				"exampleZh": "她想拒绝这个任务。"
			},
			{
				"id": 2898,
				"en": "relate",
				"zh": "关联",
				"phonetic": "/.../",
				"example": "Let's relate together.",
				"exampleZh": "让我们一起关联吧。"
			},
			{
				"id": 2899,
				"en": "relation",
				"zh": "关系",
				"phonetic": "/ʃən/",
				"example": "Do you understand this relation?",
				"exampleZh": "你理解这个关系吗？"
			},
			{
				"id": 2900,
				"en": "relative",
				"zh": "亲戚",
				"phonetic": "/.../",
				"example": "relative plays a key role in our life.",
				"exampleZh": "亲戚在我们的生活中起着关键作用。"
			},
			{
				"id": 2901,
				"en": "relax",
				"zh": "放松",
				"phonetic": "/.../",
				"example": "We should relax more carefully.",
				"exampleZh": "我们应该更仔细地放松。"
			},
			{
				"id": 2902,
				"en": "reliable",
				"zh": "可靠的",
				"phonetic": "/əbəl/",
				"example": "She looks reliable today.",
				"exampleZh": "她今天看起来很可靠的。"
			},
			{
				"id": 2903,
				"en": "relief",
				"zh": "减轻",
				"phonetic": "/.../",
				"example": "The relief is very useful.",
				"exampleZh": "减轻非常有用。"
			},
			{
				"id": 2904,
				"en": "rely",
				"zh": "依靠",
				"phonetic": "/li/",
				"example": "They decided to rely the plan.",
				"exampleZh": "他们决定依靠这个计划。"
			},
			{
				"id": 2905,
				"en": "remain",
				"zh": "保持",
				"phonetic": "/eɪ/",
				"example": "I need to remain before the deadline.",
				"exampleZh": "我需要在截止日期前保持。"
			},
			{
				"id": 2906,
				"en": "remark",
				"zh": "评论",
				"phonetic": "/.../",
				"example": "This is an important remark.",
				"exampleZh": "这是一个重要的评论。"
			},
			{
				"id": 2907,
				"en": "remind",
				"zh": "提醒",
				"phonetic": "/.../",
				"example": "She wants to remind this task.",
				"exampleZh": "她想提醒这个任务。"
			},
			{
				"id": 2908,
				"en": "remote",
				"zh": "遥远的",
				"phonetic": "/.../",
				"example": "It's a remote idea.",
				"exampleZh": "这是一个遥远的的主意。"
			},
			{
				"id": 2909,
				"en": "remove",
				"zh": "移除",
				"phonetic": "/.../",
				"example": "They decided to remove the plan.",
				"exampleZh": "他们决定移除这个计划。"
			},
			{
				"id": 2910,
				"en": "rent",
				"zh": "租",
				"phonetic": "/.../",
				"example": "I need to rent before the deadline.",
				"exampleZh": "我需要在截止日期前租。"
			},
			{
				"id": 2911,
				"en": "repair",
				"zh": "修理",
				"phonetic": "/eɪ/",
				"example": "We should repair more carefully.",
				"exampleZh": "我们应该更仔细地修理。"
			},
			{
				"id": 2912,
				"en": "repeat",
				"zh": "重复",
				"phonetic": "/iː/",
				"example": "She wants to repeat this task.",
				"exampleZh": "她想重复这个任务。"
			},
			{
				"id": 2913,
				"en": "replace",
				"zh": "替换",
				"phonetic": "/.../",
				"example": "Let's replace together.",
				"exampleZh": "让我们一起替换吧。"
			},
			{
				"id": 2914,
				"en": "reply",
				"zh": "回答",
				"phonetic": "/li/",
				"example": "They decided to reply the plan.",
				"exampleZh": "他们决定回答这个计划。"
			},
			{
				"id": 2915,
				"en": "report",
				"zh": "报告",
				"phonetic": "/.../",
				"example": "I need to report before the deadline.",
				"exampleZh": "我需要在截止日期前报告。"
			},
			{
				"id": 2916,
				"en": "represent",
				"zh": "代表",
				"phonetic": "/.../",
				"example": "We should represent more carefully.",
				"exampleZh": "我们应该更仔细地代表。"
			},
			{
				"id": 2917,
				"en": "republic",
				"zh": "共和国",
				"phonetic": "/.../",
				"example": "I really like the republic.",
				"exampleZh": "我真的很喜欢这个共和国。"
			},
			{
				"id": 2918,
				"en": "request",
				"zh": "请求",
				"phonetic": "/kw/",
				"example": "Let's request together.",
				"exampleZh": "让我们一起请求吧。"
			},
			{
				"id": 2919,
				"en": "require",
				"zh": "需要",
				"phonetic": "/kw/",
				"example": "They decided to require the plan.",
				"exampleZh": "他们决定需要这个计划。"
			},
			{
				"id": 2920,
				"en": "research",
				"zh": "研究",
				"phonetic": "/tʃ/",
				"example": "research plays a key role in our life.",
				"exampleZh": "研究在我们的生活中起着关键作用。"
			},
			{
				"id": 2921,
				"en": "reserve",
				"zh": "预订",
				"phonetic": "/.../",
				"example": "We should reserve more carefully.",
				"exampleZh": "我们应该更仔细地预订。"
			},
			{
				"id": 2922,
				"en": "respect",
				"zh": "尊重",
				"phonetic": "/.../",
				"example": "She wants to respect this task.",
				"exampleZh": "她想尊重这个任务。"
			},
			{
				"id": 2923,
				"en": "respond",
				"zh": "回应",
				"phonetic": "/.../",
				"example": "Let's respond together.",
				"exampleZh": "让我们一起回应吧。"
			},
			{
				"id": 2924,
				"en": "responsible",
				"zh": "负责的",
				"phonetic": "/ɪbəl/",
				"example": "The result is quite responsible.",
				"exampleZh": "结果是相当负责的的。"
			},
			{
				"id": 2925,
				"en": "result",
				"zh": "结果",
				"phonetic": "/.../",
				"example": "result plays a key role in our life.",
				"exampleZh": "结果在我们的生活中起着关键作用。"
			},
			{
				"id": 2926,
				"en": "retire",
				"zh": "退休",
				"phonetic": "/.../",
				"example": "We should retire more carefully.",
				"exampleZh": "我们应该更仔细地退休。"
			},
			{
				"id": 2927,
				"en": "reveal",
				"zh": "揭示",
				"phonetic": "/iː/",
				"example": "She wants to reveal this task.",
				"exampleZh": "她想揭示这个任务。"
			},
			{
				"id": 2928,
				"en": "review",
				"zh": "复习",
				"phonetic": "/.../",
				"example": "Let's review together.",
				"exampleZh": "让我们一起复习吧。"
			},
			{
				"id": 2929,
				"en": "revolution",
				"zh": "革命",
				"phonetic": "/ʃən/",
				"example": "Do you understand this revolution?",
				"exampleZh": "你理解这个革命吗？"
			},
			{
				"id": 2930,
				"en": "reward",
				"zh": "奖励",
				"phonetic": "/.../",
				"example": "reward plays a key role in our life.",
				"exampleZh": "奖励在我们的生活中起着关键作用。"
			},
			{
				"id": 2931,
				"en": "risk",
				"zh": "风险",
				"phonetic": "/.../",
				"example": "This is an important risk.",
				"exampleZh": "这是一个重要的风险。"
			},
			{
				"id": 2932,
				"en": "rob",
				"zh": "抢劫",
				"phonetic": "/.../",
				"example": "She wants to rob this task.",
				"exampleZh": "她想抢劫这个任务。"
			},
			{
				"id": 2933,
				"en": "rocket",
				"zh": "火箭",
				"phonetic": "/.../",
				"example": "The rocket is very useful.",
				"exampleZh": "火箭非常有用。"
			},
			{
				"id": 2934,
				"en": "role",
				"zh": "角色",
				"phonetic": "/.../",
				"example": "Do you understand this role?",
				"exampleZh": "你理解这个角色吗？"
			},
			{
				"id": 2935,
				"en": "roll",
				"zh": "滚动",
				"phonetic": "/.../",
				"example": "I need to roll before the deadline.",
				"exampleZh": "我需要在截止日期前滚动。"
			},
			{
				"id": 2936,
				"en": "roof",
				"zh": "屋顶",
				"phonetic": "/uː/",
				"example": "This is an important roof.",
				"exampleZh": "这是一个重要的屋顶。"
			},
			{
				"id": 2937,
				"en": "root",
				"zh": "根",
				"phonetic": "/uː/",
				"example": "I really like the root.",
				"exampleZh": "我真的很喜欢这个根。"
			},
			{
				"id": 2938,
				"en": "rope",
				"zh": "绳子",
				"phonetic": "/.../",
				"example": "The rope is very useful.",
				"exampleZh": "绳子非常有用。"
			},
			{
				"id": 2939,
				"en": "rough",
				"zh": "粗糙的",
				"phonetic": "/ʌf/",
				"example": "The result is quite rough.",
				"exampleZh": "结果是相当粗糙的的。"
			},
			{
				"id": 2940,
				"en": "route",
				"zh": "路线",
				"phonetic": "/aʊ/",
				"example": "route plays a key role in our life.",
				"exampleZh": "路线在我们的生活中起着关键作用。"
			},
			{
				"id": 2941,
				"en": "royal",
				"zh": "皇家的",
				"phonetic": "/ɔɪ/",
				"example": "This is very royal.",
				"exampleZh": "这非常皇家的。"
			},
			{
				"id": 2942,
				"en": "rubber",
				"zh": "橡胶",
				"phonetic": "/ər/",
				"example": "I really like the rubber.",
				"exampleZh": "我真的很喜欢这个橡胶。"
			},
			{
				"id": 2943,
				"en": "rubbish",
				"zh": "垃圾",
				"phonetic": "/ʃ/",
				"example": "The rubbish is very useful.",
				"exampleZh": "垃圾非常有用。"
			},
			{
				"id": 2944,
				"en": "rude",
				"zh": "粗鲁的",
				"phonetic": "/.../",
				"example": "The result is quite rude.",
				"exampleZh": "结果是相当粗鲁的的。"
			},
			{
				"id": 2945,
				"en": "rush",
				"zh": "冲",
				"phonetic": "/ʃ/",
				"example": "I need to rush before the deadline.",
				"exampleZh": "我需要在截止日期前冲。"
			},
			{
				"id": 2946,
				"en": "sacrifice",
				"zh": "牺牲",
				"phonetic": "/.../",
				"example": "We should sacrifice more carefully.",
				"exampleZh": "我们应该更仔细地牺牲。"
			},
			{
				"id": 2947,
				"en": "sailor",
				"zh": "水手",
				"phonetic": "/ər/",
				"example": "I really like the sailor.",
				"exampleZh": "我真的很喜欢这个水手。"
			},
			{
				"id": 2948,
				"en": "salary",
				"zh": "薪水",
				"phonetic": "/.../",
				"example": "The salary is very useful.",
				"exampleZh": "薪水非常有用。"
			},
			{
				"id": 2949,
				"en": "sample",
				"zh": "样本",
				"phonetic": "/.../",
				"example": "Do you understand this sample?",
				"exampleZh": "你理解这个样本吗？"
			},
			{
				"id": 2950,
				"en": "satellite",
				"zh": "卫星",
				"phonetic": "/.../",
				"example": "satellite plays a key role in our life.",
				"exampleZh": "卫星在我们的生活中起着关键作用。"
			},
			{
				"id": 2951,
				"en": "satisfy",
				"zh": "使满意",
				"phonetic": "/.../",
				"example": "We should satisfy more carefully.",
				"exampleZh": "我们应该更仔细地使满意。"
			},
			{
				"id": 2952,
				"en": "scan",
				"zh": "扫描",
				"phonetic": "/.../",
				"example": "She wants to scan this task.",
				"exampleZh": "她想扫描这个任务。"
			},
			{
				"id": 2953,
				"en": "scare",
				"zh": "惊吓",
				"phonetic": "/.../",
				"example": "Let's scare together.",
				"exampleZh": "让我们一起惊吓吧。"
			},
			{
				"id": 2954,
				"en": "scene",
				"zh": "场景",
				"phonetic": "/.../",
				"example": "Do you understand this scene?",
				"exampleZh": "你理解这个场景吗？"
			},
			{
				"id": 2955,
				"en": "schedule",
				"zh": "日程",
				"phonetic": "/.../",
				"example": "schedule plays a key role in our life.",
				"exampleZh": "日程在我们的生活中起着关键作用。"
			},
			{
				"id": 2956,
				"en": "scholar",
				"zh": "学者",
				"phonetic": "/ɑːr/",
				"example": "This is an important scholar.",
				"exampleZh": "这是一个重要的学者。"
			},
			{
				"id": 2957,
				"en": "scold",
				"zh": "责骂",
				"phonetic": "/.../",
				"example": "She wants to scold this task.",
				"exampleZh": "她想责骂这个任务。"
			},
			{
				"id": 2958,
				"en": "score",
				"zh": "分数",
				"phonetic": "/.../",
				"example": "The score is very useful.",
				"exampleZh": "分数非常有用。"
			},
			{
				"id": 2959,
				"en": "scream",
				"zh": "尖叫",
				"phonetic": "/iː/",
				"example": "They decided to scream the plan.",
				"exampleZh": "他们决定尖叫这个计划。"
			},
			{
				"id": 2960,
				"en": "screen",
				"zh": "屏幕",
				"phonetic": "/iː/",
				"example": "screen plays a key role in our life.",
				"exampleZh": "屏幕在我们的生活中起着关键作用。"
			},
			{
				"id": 2961,
				"en": "search",
				"zh": "搜索",
				"phonetic": "/tʃ/",
				"example": "We should search more carefully.",
				"exampleZh": "我们应该更仔细地搜索。"
			},
			{
				"id": 2962,
				"en": "secret",
				"zh": "秘密",
				"phonetic": "/.../",
				"example": "I really like the secret.",
				"exampleZh": "我真的很喜欢这个秘密。"
			},
			{
				"id": 2963,
				"en": "secretary",
				"zh": "秘书",
				"phonetic": "/.../",
				"example": "The secretary is very useful.",
				"exampleZh": "秘书非常有用。"
			},
			{
				"id": 2964,
				"en": "section",
				"zh": "部分",
				"phonetic": "/ʃən/",
				"example": "Do you understand this section?",
				"exampleZh": "你理解这个部分吗？"
			},
			{
				"id": 2965,
				"en": "secure",
				"zh": "安全的",
				"phonetic": "/.../",
				"example": "He found the task secure.",
				"exampleZh": "他发现这个任务是安全的的。"
			},
			{
				"id": 2966,
				"en": "seed",
				"zh": "种子",
				"phonetic": "/d/",
				"example": "This is an important seed.",
				"exampleZh": "这是一个重要的种子。"
			},
			{
				"id": 2967,
				"en": "seek",
				"zh": "寻找",
				"phonetic": "/iː/",
				"example": "She wants to seek this task.",
				"exampleZh": "她想寻找这个任务。"
			},
			{
				"id": 2968,
				"en": "seize",
				"zh": "抓住",
				"phonetic": "/.../",
				"example": "Let's seize together.",
				"exampleZh": "让我们一起抓住吧。"
			},
			{
				"id": 2969,
				"en": "seldom",
				"zh": "很少",
				"phonetic": "/.../",
				"example": "He spoke seldom to the audience.",
				"exampleZh": "他很少地对观众说话。"
			},
			{
				"id": 2970,
				"en": "select",
				"zh": "选择",
				"phonetic": "/.../",
				"example": "I need to select before the deadline.",
				"exampleZh": "我需要在截止日期前选择。"
			},
			{
				"id": 2971,
				"en": "self",
				"zh": "自己",
				"phonetic": "/.../",
				"example": "This is an important self.",
				"exampleZh": "这是一个重要的自己。"
			},
			{
				"id": 2972,
				"en": "selfish",
				"zh": "自私的",
				"phonetic": "/ʃ/",
				"example": "She looks selfish today.",
				"exampleZh": "她今天看起来很自私的。"
			},
			{
				"id": 2973,
				"en": "senior",
				"zh": "高级的",
				"phonetic": "/ər/",
				"example": "It's a senior idea.",
				"exampleZh": "这是一个高级的的主意。"
			},
			{
				"id": 2974,
				"en": "sense",
				"zh": "感觉",
				"phonetic": "/.../",
				"example": "Do you understand this sense?",
				"exampleZh": "你理解这个感觉吗？"
			},
			{
				"id": 2975,
				"en": "sentence",
				"zh": "句子",
				"phonetic": "/əns/",
				"example": "sentence plays a key role in our life.",
				"exampleZh": "句子在我们的生活中起着关键作用。"
			},
			{
				"id": 2976,
				"en": "separate",
				"zh": "分开的",
				"phonetic": "/.../",
				"example": "This is very separate.",
				"exampleZh": "这非常分开的。"
			},
			{
				"id": 2977,
				"en": "series",
				"zh": "系列",
				"phonetic": "/.../",
				"example": "I really like the series.",
				"exampleZh": "我真的很喜欢这个系列。"
			},
			{
				"id": 2978,
				"en": "serious",
				"zh": "严肃的",
				"phonetic": "/iəs/",
				"example": "It's a serious idea.",
				"exampleZh": "这是一个严肃的的主意。"
			},
			{
				"id": 2979,
				"en": "servant",
				"zh": "仆人",
				"phonetic": "/.../",
				"example": "Do you understand this servant?",
				"exampleZh": "你理解这个仆人吗？"
			},
			{
				"id": 2980,
				"en": "serve",
				"zh": "服务",
				"phonetic": "/.../",
				"example": "I need to serve before the deadline.",
				"exampleZh": "我需要在截止日期前服务。"
			},
			{
				"id": 2981,
				"en": "service",
				"zh": "服务",
				"phonetic": "/.../",
				"example": "This is an important service.",
				"exampleZh": "这是一个重要的服务。"
			},
			{
				"id": 2982,
				"en": "settle",
				"zh": "解决",
				"phonetic": "/.../",
				"example": "She wants to settle this task.",
				"exampleZh": "她想解决这个任务。"
			},
			{
				"id": 2983,
				"en": "severe",
				"zh": "严重的",
				"phonetic": "/.../",
				"example": "It's a severe idea.",
				"exampleZh": "这是一个严重的的主意。"
			},
			{
				"id": 2984,
				"en": "shadow",
				"zh": "阴影",
				"phonetic": "/aʊ/",
				"example": "Do you understand this shadow?",
				"exampleZh": "你理解这个阴影吗？"
			},
			{
				"id": 2985,
				"en": "shame",
				"zh": "羞耻",
				"phonetic": "/.../",
				"example": "shame plays a key role in our life.",
				"exampleZh": "羞耻在我们的生活中起着关键作用。"
			},
			{
				"id": 2986,
				"en": "share",
				"zh": "分享",
				"phonetic": "/.../",
				"example": "We should share more carefully.",
				"exampleZh": "我们应该更仔细地分享。"
			},
			{
				"id": 2987,
				"en": "shark",
				"zh": "鲨鱼",
				"phonetic": "/.../",
				"example": "I really like the shark.",
				"exampleZh": "我真的很喜欢这个鲨鱼。"
			},
			{
				"id": 2988,
				"en": "sharp",
				"zh": "尖锐的",
				"phonetic": "/.../",
				"example": "It's a sharp idea.",
				"exampleZh": "这是一个尖锐的的主意。"
			},
			{
				"id": 2989,
				"en": "shave",
				"zh": "刮胡子",
				"phonetic": "/.../",
				"example": "They decided to shave the plan.",
				"exampleZh": "他们决定刮胡子这个计划。"
			},
			{
				"id": 2990,
				"en": "sheet",
				"zh": "床单",
				"phonetic": "/iː/",
				"example": "sheet plays a key role in our life.",
				"exampleZh": "床单在我们的生活中起着关键作用。"
			},
			{
				"id": 2991,
				"en": "shelter",
				"zh": "遮蔽",
				"phonetic": "/ər/",
				"example": "This is an important shelter.",
				"exampleZh": "这是一个重要的遮蔽。"
			},
			{
				"id": 2992,
				"en": "shock",
				"zh": "震惊",
				"phonetic": "/k/",
				"example": "I really like the shock.",
				"exampleZh": "我真的很喜欢这个震惊。"
			},
			{
				"id": 2993,
				"en": "shoot",
				"zh": "射击",
				"phonetic": "/uː/",
				"example": "Let's shoot together.",
				"exampleZh": "让我们一起射击吧。"
			},
			{
				"id": 2994,
				"en": "shore",
				"zh": "海岸",
				"phonetic": "/.../",
				"example": "Do you understand this shore?",
				"exampleZh": "你理解这个海岸吗？"
			},
			{
				"id": 2995,
				"en": "shortcoming",
				"zh": "缺点",
				"phonetic": "/ɪŋ/",
				"example": "shortcoming plays a key role in our life.",
				"exampleZh": "缺点在我们的生活中起着关键作用。"
			},
			{
				"id": 2996,
				"en": "shot",
				"zh": "射击",
				"phonetic": "/.../",
				"example": "This is an important shot.",
				"exampleZh": "这是一个重要的射击。"
			},
			{
				"id": 2997,
				"en": "shoulder",
				"zh": "肩膀",
				"phonetic": "/ər/",
				"example": "I really like the shoulder.",
				"exampleZh": "我真的很喜欢这个肩膀。"
			},
			{
				"id": 2998,
				"en": "shower",
				"zh": "淋浴",
				"phonetic": "/ər/",
				"example": "The shower is very useful.",
				"exampleZh": "淋浴非常有用。"
			},
			{
				"id": 2999,
				"en": "sigh",
				"zh": "叹气",
				"phonetic": "/f/",
				"example": "They decided to sigh the plan.",
				"exampleZh": "他们决定叹气这个计划。"
			},
			{
				"id": 3000,
				"en": "sight",
				"zh": "视力",
				"phonetic": "/aɪt/",
				"example": "sight plays a key role in our life.",
				"exampleZh": "视力在我们的生活中起着关键作用。"
			},
			{
				"id": 3001,
				"en": "signal",
				"zh": "信号",
				"phonetic": "/.../",
				"example": "This is an important signal.",
				"exampleZh": "这是一个重要的信号。"
			},
			{
				"id": 3002,
				"en": "significance",
				"zh": "意义",
				"phonetic": "/əns/",
				"example": "I really like the significance.",
				"exampleZh": "我真的很喜欢这个意义。"
			},
			{
				"id": 3003,
				"en": "silence",
				"zh": "沉默",
				"phonetic": "/əns/",
				"example": "The silence is very useful.",
				"exampleZh": "沉默非常有用。"
			},
			{
				"id": 3004,
				"en": "silent",
				"zh": "安静的",
				"phonetic": "/.../",
				"example": "The result is quite silent.",
				"exampleZh": "结果是相当安静的的。"
			},
			{
				"id": 3005,
				"en": "silly",
				"zh": "傻的",
				"phonetic": "/li/",
				"example": "He found the task silly.",
				"exampleZh": "他发现这个任务是傻的的。"
			},
			{
				"id": 3006,
				"en": "silver",
				"zh": "银色的",
				"phonetic": "/ər/",
				"example": "This is very silver.",
				"exampleZh": "这非常银色的。"
			},
			{
				"id": 3007,
				"en": "similar",
				"zh": "相似的",
				"phonetic": "/ɑːr/",
				"example": "She looks similar today.",
				"exampleZh": "她今天看起来很相似的。"
			},
			{
				"id": 3008,
				"en": "simple",
				"zh": "简单的",
				"phonetic": "/.../",
				"example": "It's a simple idea.",
				"exampleZh": "这是一个简单的的主意。"
			},
			{
				"id": 3009,
				"en": "sincerely",
				"zh": "真诚地",
				"phonetic": "/li/",
				"example": "She sincerely agreed with us.",
				"exampleZh": "她真诚地地同意了我们的意见。"
			},
			{
				"id": 3010,
				"en": "sink",
				"zh": "下沉",
				"phonetic": "/.../",
				"example": "I need to sink before the deadline.",
				"exampleZh": "我需要在截止日期前下沉。"
			},
			{
				"id": 3011,
				"en": "situation",
				"zh": "情况",
				"phonetic": "/ʃən/",
				"example": "This is an important situation.",
				"exampleZh": "这是一个重要的情况。"
			},
			{
				"id": 3012,
				"en": "skate",
				"zh": "滑冰",
				"phonetic": "/.../",
				"example": "She wants to skate this task.",
				"exampleZh": "她想滑冰这个任务。"
			},
			{
				"id": 3013,
				"en": "skill",
				"zh": "技能",
				"phonetic": "/.../",
				"example": "The skill is very useful.",
				"exampleZh": "技能非常有用。"
			},
			{
				"id": 3014,
				"en": "skin",
				"zh": "皮肤",
				"phonetic": "/.../",
				"example": "Do you understand this skin?",
				"exampleZh": "你理解这个皮肤吗？"
			},
			{
				"id": 3015,
				"en": "skip",
				"zh": "跳过",
				"phonetic": "/.../",
				"example": "I need to skip before the deadline.",
				"exampleZh": "我需要在截止日期前跳过。"
			},
			{
				"id": 3016,
				"en": "slave",
				"zh": "奴隶",
				"phonetic": "/.../",
				"example": "This is an important slave.",
				"exampleZh": "这是一个重要的奴隶。"
			},
			{
				"id": 3017,
				"en": "slight",
				"zh": "轻微的",
				"phonetic": "/aɪt/",
				"example": "She looks slight today.",
				"exampleZh": "她今天看起来很轻微的。"
			},
			{
				"id": 3018,
				"en": "slip",
				"zh": "滑倒",
				"phonetic": "/.../",
				"example": "Let's slip together.",
				"exampleZh": "让我们一起滑倒吧。"
			},
			{
				"id": 3019,
				"en": "smooth",
				"zh": "平滑的",
				"phonetic": "/θ/",
				"example": "The result is quite smooth.",
				"exampleZh": "结果是相当平滑的的。"
			},
			{
				"id": 3020,
				"en": "social",
				"zh": "社会的",
				"phonetic": "/ʃəl/",
				"example": "He found the task social.",
				"exampleZh": "他发现这个任务是社会的的。"
			},
			{
				"id": 3021,
				"en": "society",
				"zh": "社会",
				"phonetic": "/.../",
				"example": "This is an important society.",
				"exampleZh": "这是一个重要的社会。"
			},
			{
				"id": 3022,
				"en": "soil",
				"zh": "土壤",
				"phonetic": "/ɔɪ/",
				"example": "I really like the soil.",
				"exampleZh": "我真的很喜欢这个土壤。"
			},
			{
				"id": 3023,
				"en": "solid",
				"zh": "固体的",
				"phonetic": "/.../",
				"example": "It's a solid idea.",
				"exampleZh": "这是一个固体的的主意。"
			},
			{
				"id": 3024,
				"en": "solve",
				"zh": "解决",
				"phonetic": "/.../",
				"example": "They decided to solve the plan.",
				"exampleZh": "他们决定解决这个计划。"
			},
			{
				"id": 3025,
				"en": "sorrow",
				"zh": "悲伤",
				"phonetic": "/aʊ/",
				"example": "sorrow plays a key role in our life.",
				"exampleZh": "悲伤在我们的生活中起着关键作用。"
			},
			{
				"id": 3026,
				"en": "sort",
				"zh": "种类",
				"phonetic": "/.../",
				"example": "This is an important sort.",
				"exampleZh": "这是一个重要的种类。"
			},
			{
				"id": 3027,
				"en": "soul",
				"zh": "灵魂",
				"phonetic": "/aʊ/",
				"example": "I really like the soul.",
				"exampleZh": "我真的很喜欢这个灵魂。"
			},
			{
				"id": 3028,
				"en": "sound",
				"zh": "声音",
				"phonetic": "/aʊ/",
				"example": "The sound is very useful.",
				"exampleZh": "声音非常有用。"
			},
			{
				"id": 3029,
				"en": "source",
				"zh": "来源",
				"phonetic": "/aʊ/",
				"example": "Do you understand this source?",
				"exampleZh": "你理解这个来源吗？"
			},
			{
				"id": 3030,
				"en": "spare",
				"zh": "空闲的",
				"phonetic": "/.../",
				"example": "He found the task spare.",
				"exampleZh": "他发现这个任务是空闲的的。"
			},
			{
				"id": 3031,
				"en": "specific",
				"zh": "具体的",
				"phonetic": "/.../",
				"example": "This is very specific.",
				"exampleZh": "这非常具体的。"
			},
			{
				"id": 3032,
				"en": "speech",
				"zh": "演讲",
				"phonetic": "/tʃ/",
				"example": "I really like the speech.",
				"exampleZh": "我真的很喜欢这个演讲。"
			},
			{
				"id": 3033,
				"en": "spirit",
				"zh": "精神",
				"phonetic": "/.../",
				"example": "The spirit is very useful.",
				"exampleZh": "精神非常有用。"
			},
			{
				"id": 3034,
				"en": "spit",
				"zh": "吐痰",
				"phonetic": "/.../",
				"example": "They decided to spit the plan.",
				"exampleZh": "他们决定吐痰这个计划。"
			},
			{
				"id": 3035,
				"en": "spread",
				"zh": "传播",
				"phonetic": "/iː/",
				"example": "I need to spread before the deadline.",
				"exampleZh": "我需要在截止日期前传播。"
			},
			{
				"id": 3036,
				"en": "stable",
				"zh": "稳定的",
				"phonetic": "/əbəl/",
				"example": "This is very stable.",
				"exampleZh": "这非常稳定的。"
			},
			{
				"id": 3037,
				"en": "staff",
				"zh": "员工",
				"phonetic": "/.../",
				"example": "I really like the staff.",
				"exampleZh": "我真的很喜欢这个员工。"
			},
			{
				"id": 3038,
				"en": "stage",
				"zh": "舞台",
				"phonetic": "/.../",
				"example": "The stage is very useful.",
				"exampleZh": "舞台非常有用。"
			},
			{
				"id": 3039,
				"en": "stair",
				"zh": "楼梯",
				"phonetic": "/eɪ/",
				"example": "Do you understand this stair?",
				"exampleZh": "你理解这个楼梯吗？"
			},
			{
				"id": 3040,
				"en": "standard",
				"zh": "标准",
				"phonetic": "/.../",
				"example": "standard plays a key role in our life.",
				"exampleZh": "标准在我们的生活中起着关键作用。"
			},
			{
				"id": 3041,
				"en": "stare",
				"zh": "盯着",
				"phonetic": "/.../",
				"example": "We should stare more carefully.",
				"exampleZh": "我们应该更仔细地盯着。"
			},
			{
				"id": 3042,
				"en": "state",
				"zh": "状态；州",
				"phonetic": "/.../",
				"example": "I really like the state.",
				"exampleZh": "我真的很喜欢这个状态；州。"
			},
			{
				"id": 3043,
				"en": "status",
				"zh": "地位",
				"phonetic": "/.../",
				"example": "The status is very useful.",
				"exampleZh": "地位非常有用。"
			},
			{
				"id": 3044,
				"en": "steal",
				"zh": "偷",
				"phonetic": "/iː/",
				"example": "They decided to steal the plan.",
				"exampleZh": "他们决定偷这个计划。"
			},
			{
				"id": 3045,
				"en": "steam",
				"zh": "蒸汽",
				"phonetic": "/iː/",
				"example": "steam plays a key role in our life.",
				"exampleZh": "蒸汽在我们的生活中起着关键作用。"
			},
			{
				"id": 3046,
				"en": "steel",
				"zh": "钢",
				"phonetic": "/iː/",
				"example": "This is an important steel.",
				"exampleZh": "这是一个重要的钢。"
			},
			{
				"id": 3047,
				"en": "steep",
				"zh": "陡峭的",
				"phonetic": "/iː/",
				"example": "She looks steep today.",
				"exampleZh": "她今天看起来很陡峭的。"
			},
			{
				"id": 3048,
				"en": "stock",
				"zh": "股票",
				"phonetic": "/k/",
				"example": "The stock is very useful.",
				"exampleZh": "股票非常有用。"
			},
			{
				"id": 3049,
				"en": "storm",
				"zh": "暴风雨",
				"phonetic": "/.../",
				"example": "Do you understand this storm?",
				"exampleZh": "你理解这个暴风雨吗？"
			},
			{
				"id": 3050,
				"en": "stranger",
				"zh": "陌生人",
				"phonetic": "/ər/",
				"example": "stranger plays a key role in our life.",
				"exampleZh": "陌生人在我们的生活中起着关键作用。"
			},
			{
				"id": 3051,
				"en": "stream",
				"zh": "溪流",
				"phonetic": "/iː/",
				"example": "This is an important stream.",
				"exampleZh": "这是一个重要的溪流。"
			},
			{
				"id": 3052,
				"en": "strength",
				"zh": "力量",
				"phonetic": "/θ/",
				"example": "I really like the strength.",
				"exampleZh": "我真的很喜欢这个力量。"
			},
			{
				"id": 3053,
				"en": "strike",
				"zh": "打击",
				"phonetic": "/.../",
				"example": "Let's strike together.",
				"exampleZh": "让我们一起打击吧。"
			},
			{
				"id": 3054,
				"en": "structure",
				"zh": "结构",
				"phonetic": "/tʃər/",
				"example": "Do you understand this structure?",
				"exampleZh": "你理解这个结构吗？"
			},
			{
				"id": 3055,
				"en": "struggle",
				"zh": "斗争",
				"phonetic": "/.../",
				"example": "I need to struggle before the deadline.",
				"exampleZh": "我需要在截止日期前斗争。"
			},
			{
				"id": 3056,
				"en": "style",
				"zh": "风格",
				"phonetic": "/.../",
				"example": "This is an important style.",
				"exampleZh": "这是一个重要的风格。"
			},
			{
				"id": 3057,
				"en": "suffer",
				"zh": "遭受",
				"phonetic": "/ər/",
				"example": "She wants to suffer this task.",
				"exampleZh": "她想遭受这个任务。"
			},
			{
				"id": 3058,
				"en": "suggestion",
				"zh": "建议",
				"phonetic": "/ʃən/",
				"example": "The suggestion is very useful.",
				"exampleZh": "建议非常有用。"
			},
			{
				"id": 3059,
				"en": "suitable",
				"zh": "合适的",
				"phonetic": "/əbəl/",
				"example": "The result is quite suitable.",
				"exampleZh": "结果是相当合适的的。"
			},
			{
				"id": 3060,
				"en": "sum",
				"zh": "总和",
				"phonetic": "/.../",
				"example": "sum plays a key role in our life.",
				"exampleZh": "总和在我们的生活中起着关键作用。"
			},
			{
				"id": 3061,
				"en": "summary",
				"zh": "总结",
				"phonetic": "/.../",
				"example": "This is an important summary.",
				"exampleZh": "这是一个重要的总结。"
			},
			{
				"id": 3062,
				"en": "supply",
				"zh": "供应",
				"phonetic": "/li/",
				"example": "She wants to supply this task.",
				"exampleZh": "她想供应这个任务。"
			},
			{
				"id": 3063,
				"en": "support",
				"zh": "支持",
				"phonetic": "/.../",
				"example": "Let's support together.",
				"exampleZh": "让我们一起支持吧。"
			},
			{
				"id": 3064,
				"en": "suppose",
				"zh": "假设",
				"phonetic": "/.../",
				"example": "They decided to suppose the plan.",
				"exampleZh": "他们决定假设这个计划。"
			},
			{
				"id": 3065,
				"en": "surface",
				"zh": "表面",
				"phonetic": "/.../",
				"example": "surface plays a key role in our life.",
				"exampleZh": "表面在我们的生活中起着关键作用。"
			},
			{
				"id": 3066,
				"en": "surround",
				"zh": "包围",
				"phonetic": "/aʊ/",
				"example": "We should surround more carefully.",
				"exampleZh": "我们应该更仔细地包围。"
			},
			{
				"id": 3067,
				"en": "survive",
				"zh": "幸存",
				"phonetic": "/.../",
				"example": "She wants to survive this task.",
				"exampleZh": "她想幸存这个任务。"
			},
			{
				"id": 3068,
				"en": "suspect",
				"zh": "怀疑",
				"phonetic": "/.../",
				"example": "Let's suspect together.",
				"exampleZh": "让我们一起怀疑吧。"
			},
			{
				"id": 3069,
				"en": "symbol",
				"zh": "符号",
				"phonetic": "/.../",
				"example": "Do you understand this symbol?",
				"exampleZh": "你理解这个符号吗？"
			},
			{
				"id": 3070,
				"en": "system",
				"zh": "系统",
				"phonetic": "/.../",
				"example": "system plays a key role in our life.",
				"exampleZh": "系统在我们的生活中起着关键作用。"
			},
			{
				"id": 3071,
				"en": "tablet",
				"zh": "药片",
				"phonetic": "/əbəl/",
				"example": "This is an important tablet.",
				"exampleZh": "这是一个重要的药片。"
			},
			{
				"id": 3072,
				"en": "tale",
				"zh": "故事",
				"phonetic": "/.../",
				"example": "I really like the tale.",
				"exampleZh": "我真的很喜欢这个故事。"
			},
			{
				"id": 3073,
				"en": "tank",
				"zh": "坦克",
				"phonetic": "/.../",
				"example": "The tank is very useful.",
				"exampleZh": "坦克非常有用。"
			},
			{
				"id": 3074,
				"en": "tap",
				"zh": "水龙头",
				"phonetic": "/.../",
				"example": "Do you understand this tap?",
				"exampleZh": "你理解这个水龙头吗？"
			},
			{
				"id": 3075,
				"en": "target",
				"zh": "目标",
				"phonetic": "/.../",
				"example": "target plays a key role in our life.",
				"exampleZh": "目标在我们的生活中起着关键作用。"
			},
			{
				"id": 3076,
				"en": "task",
				"zh": "任务",
				"phonetic": "/.../",
				"example": "This is an important task.",
				"exampleZh": "这是一个重要的任务。"
			},
			{
				"id": 3077,
				"en": "technique",
				"zh": "技术",
				"phonetic": "/kw/",
				"example": "I really like the technique.",
				"exampleZh": "我真的很喜欢这个技术。"
			},
			{
				"id": 3078,
				"en": "temperature",
				"zh": "温度",
				"phonetic": "/tʃər/",
				"example": "The temperature is very useful.",
				"exampleZh": "温度非常有用。"
			},
			{
				"id": 3079,
				"en": "temple",
				"zh": "寺庙",
				"phonetic": "/.../",
				"example": "Do you understand this temple?",
				"exampleZh": "你理解这个寺庙吗？"
			},
			{
				"id": 3080,
				"en": "tend",
				"zh": "倾向于",
				"phonetic": "/.../",
				"example": "I need to tend before the deadline.",
				"exampleZh": "我需要在截止日期前倾向于。"
			},
			{
				"id": 3081,
				"en": "tennis",
				"zh": "网球",
				"phonetic": "/.../",
				"example": "This is an important tennis.",
				"exampleZh": "这是一个重要的网球。"
			},
			{
				"id": 3082,
				"en": "tense",
				"zh": "紧张的",
				"phonetic": "/.../",
				"example": "She looks tense today.",
				"exampleZh": "她今天看起来很紧张的。"
			},
			{
				"id": 3083,
				"en": "theory",
				"zh": "理论",
				"phonetic": "/.../",
				"example": "The theory is very useful.",
				"exampleZh": "理论非常有用。"
			},
			{
				"id": 3084,
				"en": "therefore",
				"zh": "因此",
				"phonetic": "/.../",
				"example": "She therefore agreed with us.",
				"exampleZh": "她因此地同意了我们的意见。"
			},
			{
				"id": 3085,
				"en": "thick",
				"zh": "厚的",
				"phonetic": "/k/",
				"example": "He found the task thick.",
				"exampleZh": "他发现这个任务是厚的的。"
			},
			{
				"id": 3086,
				"en": "thief",
				"zh": "小偷",
				"phonetic": "/.../",
				"example": "This is an important thief.",
				"exampleZh": "这是一个重要的小偷。"
			},
			{
				"id": 3087,
				"en": "thorough",
				"zh": "彻底的",
				"phonetic": "/ʌf/",
				"example": "She looks thorough today.",
				"exampleZh": "她今天看起来很彻底的。"
			},
			{
				"id": 3088,
				"en": "thought",
				"zh": "想法",
				"phonetic": "/aʊ/",
				"example": "The thought is very useful.",
				"exampleZh": "想法非常有用。"
			},
			{
				"id": 3089,
				"en": "thread",
				"zh": "线",
				"phonetic": "/iː/",
				"example": "Do you understand this thread?",
				"exampleZh": "你理解这个线吗？"
			},
			{
				"id": 3090,
				"en": "threat",
				"zh": "威胁",
				"phonetic": "/iː/",
				"example": "threat plays a key role in our life.",
				"exampleZh": "威胁在我们的生活中起着关键作用。"
			},
			{
				"id": 3091,
				"en": "throat",
				"zh": "喉咙",
				"phonetic": "/oʊ/",
				"example": "This is an important throat.",
				"exampleZh": "这是一个重要的喉咙。"
			},
			{
				"id": 3092,
				"en": "throughout",
				"zh": "遍及",
				"phonetic": "/aʊ/",
				"example": "I think throughout is important.",
				"exampleZh": "我认为遍及很重要。"
			},
			{
				"id": 3093,
				"en": "thus",
				"zh": "因此",
				"phonetic": "/.../",
				"example": "She thus agreed with us.",
				"exampleZh": "她因此地同意了我们的意见。"
			},
			{
				"id": 3094,
				"en": "tide",
				"zh": "潮汐",
				"phonetic": "/.../",
				"example": "Do you understand this tide?",
				"exampleZh": "你理解这个潮汐吗？"
			},
			{
				"id": 3095,
				"en": "tight",
				"zh": "紧的",
				"phonetic": "/aɪt/",
				"example": "He found the task tight.",
				"exampleZh": "他发现这个任务是紧的的。"
			},
			{
				"id": 3096,
				"en": "tiny",
				"zh": "微小的",
				"phonetic": "/.../",
				"example": "This is very tiny.",
				"exampleZh": "这非常微小的。"
			},
			{
				"id": 3097,
				"en": "tip",
				"zh": "小费；提示",
				"phonetic": "/.../",
				"example": "I really like the tip.",
				"exampleZh": "我真的很喜欢这个小费；提示。"
			},
			{
				"id": 3098,
				"en": "tire",
				"zh": "轮胎",
				"phonetic": "/.../",
				"example": "The tire is very useful.",
				"exampleZh": "轮胎非常有用。"
			},
			{
				"id": 3099,
				"en": "title",
				"zh": "标题",
				"phonetic": "/.../",
				"example": "Do you understand this title?",
				"exampleZh": "你理解这个标题吗？"
			},
			{
				"id": 3100,
				"en": "tobacco",
				"zh": "烟草",
				"phonetic": "/.../",
				"example": "tobacco plays a key role in our life.",
				"exampleZh": "烟草在我们的生活中起着关键作用。"
			},
			{
				"id": 3101,
				"en": "tolerant",
				"zh": "宽容的",
				"phonetic": "/.../",
				"example": "This is very tolerant.",
				"exampleZh": "这非常宽容的。"
			},
			{
				"id": 3102,
				"en": "tool",
				"zh": "工具",
				"phonetic": "/uː/",
				"example": "I really like the tool.",
				"exampleZh": "我真的很喜欢这个工具。"
			},
			{
				"id": 3103,
				"en": "topic",
				"zh": "话题",
				"phonetic": "/.../",
				"example": "The topic is very useful.",
				"exampleZh": "话题非常有用。"
			},
			{
				"id": 3104,
				"en": "total",
				"zh": "总的",
				"phonetic": "/.../",
				"example": "The result is quite total.",
				"exampleZh": "结果是相当总的的。"
			},
			{
				"id": 3105,
				"en": "tough",
				"zh": "坚韧的",
				"phonetic": "/ʌf/",
				"example": "He found the task tough.",
				"exampleZh": "他发现这个任务是坚韧的的。"
			},
			{
				"id": 3106,
				"en": "tourist",
				"zh": "游客",
				"phonetic": "/aʊ/",
				"example": "This is an important tourist.",
				"exampleZh": "这是一个重要的游客。"
			},
			{
				"id": 3107,
				"en": "tower",
				"zh": "塔",
				"phonetic": "/ər/",
				"example": "I really like the tower.",
				"exampleZh": "我真的很喜欢这个塔。"
			},
			{
				"id": 3108,
				"en": "track",
				"zh": "轨道",
				"phonetic": "/k/",
				"example": "The track is very useful.",
				"exampleZh": "轨道非常有用。"
			},
			{
				"id": 3109,
				"en": "trade",
				"zh": "贸易",
				"phonetic": "/.../",
				"example": "Do you understand this trade?",
				"exampleZh": "你理解这个贸易吗？"
			},
			{
				"id": 3110,
				"en": "tradition",
				"zh": "传统",
				"phonetic": "/ʃən/",
				"example": "tradition plays a key role in our life.",
				"exampleZh": "传统在我们的生活中起着关键作用。"
			},
			{
				"id": 3111,
				"en": "traffic",
				"zh": "交通",
				"phonetic": "/.../",
				"example": "This is an important traffic.",
				"exampleZh": "这是一个重要的交通。"
			},
			{
				"id": 3112,
				"en": "translate",
				"zh": "翻译",
				"phonetic": "/.../",
				"example": "She wants to translate this task.",
				"exampleZh": "她想翻译这个任务。"
			},
			{
				"id": 3113,
				"en": "transport",
				"zh": "运输",
				"phonetic": "/.../",
				"example": "Let's transport together.",
				"exampleZh": "让我们一起运输吧。"
			},
			{
				"id": 3114,
				"en": "trap",
				"zh": "陷阱",
				"phonetic": "/.../",
				"example": "Do you understand this trap?",
				"exampleZh": "你理解这个陷阱吗？"
			},
			{
				"id": 3115,
				"en": "treasure",
				"zh": "宝藏",
				"phonetic": "/ʒər/",
				"example": "treasure plays a key role in our life.",
				"exampleZh": "宝藏在我们的生活中起着关键作用。"
			},
			{
				"id": 3116,
				"en": "treat",
				"zh": "对待",
				"phonetic": "/iː/",
				"example": "We should treat more carefully.",
				"exampleZh": "我们应该更仔细地对待。"
			},
			{
				"id": 3117,
				"en": "treatment",
				"zh": "治疗",
				"phonetic": "/mənt/",
				"example": "I really like the treatment.",
				"exampleZh": "我真的很喜欢这个治疗。"
			},
			{
				"id": 3118,
				"en": "tremble",
				"zh": "颤抖",
				"phonetic": "/.../",
				"example": "Let's tremble together.",
				"exampleZh": "让我们一起颤抖吧。"
			},
			{
				"id": 3119,
				"en": "trial",
				"zh": "审判；试验",
				"phonetic": "/.../",
				"example": "Do you understand this trial?",
				"exampleZh": "你理解这个审判；试验吗？"
			},
			{
				"id": 3120,
				"en": "trick",
				"zh": "诡计",
				"phonetic": "/k/",
				"example": "trick plays a key role in our life.",
				"exampleZh": "诡计在我们的生活中起着关键作用。"
			},
			{
				"id": 3121,
				"en": "trust",
				"zh": "信任",
				"phonetic": "/.../",
				"example": "We should trust more carefully.",
				"exampleZh": "我们应该更仔细地信任。"
			},
			{
				"id": 3122,
				"en": "tube",
				"zh": "管子",
				"phonetic": "/.../",
				"example": "I really like the tube.",
				"exampleZh": "我真的很喜欢这个管子。"
			},
			{
				"id": 3123,
				"en": "tune",
				"zh": "曲调",
				"phonetic": "/.../",
				"example": "The tune is very useful.",
				"exampleZh": "曲调非常有用。"
			},
			{
				"id": 3124,
				"en": "type",
				"zh": "类型",
				"phonetic": "/.../",
				"example": "Do you understand this type?",
				"exampleZh": "你理解这个类型吗？"
			},
			{
				"id": 3125,
				"en": "typical",
				"zh": "典型的",
				"phonetic": "/.../",
				"example": "He found the task typical.",
				"exampleZh": "他发现这个任务是典型的的。"
			},
			{
				"id": 3126,
				"en": "tyre",
				"zh": "轮胎",
				"phonetic": "/.../",
				"example": "This is an important tyre.",
				"exampleZh": "这是一个重要的轮胎。"
			},
			{
				"id": 3127,
				"en": "ugly",
				"zh": "丑陋的",
				"phonetic": "/li/",
				"example": "She looks ugly today.",
				"exampleZh": "她今天看起来很丑陋的。"
			},
			{
				"id": 3128,
				"en": "uniform",
				"zh": "制服",
				"phonetic": "/.../",
				"example": "The uniform is very useful.",
				"exampleZh": "制服非常有用。"
			},
			{
				"id": 3129,
				"en": "union",
				"zh": "联盟",
				"phonetic": "/.../",
				"example": "Do you understand this union?",
				"exampleZh": "你理解这个联盟吗？"
			},
			{
				"id": 3130,
				"en": "unit",
				"zh": "单位",
				"phonetic": "/.../",
				"example": "unit plays a key role in our life.",
				"exampleZh": "单位在我们的生活中起着关键作用。"
			},
			{
				"id": 3131,
				"en": "unite",
				"zh": "团结",
				"phonetic": "/.../",
				"example": "We should unite more carefully.",
				"exampleZh": "我们应该更仔细地团结。"
			},
			{
				"id": 3132,
				"en": "universe",
				"zh": "宇宙",
				"phonetic": "/.../",
				"example": "I really like the universe.",
				"exampleZh": "我真的很喜欢这个宇宙。"
			},
			{
				"id": 3133,
				"en": "upper",
				"zh": "上面的",
				"phonetic": "/ər/",
				"example": "It's a upper idea.",
				"exampleZh": "这是一个上面的的主意。"
			},
			{
				"id": 3134,
				"en": "upset",
				"zh": "不安的",
				"phonetic": "/.../",
				"example": "The result is quite upset.",
				"exampleZh": "结果是相当不安的的。"
			},
			{
				"id": 3135,
				"en": "urge",
				"zh": "催促",
				"phonetic": "/.../",
				"example": "I need to urge before the deadline.",
				"exampleZh": "我需要在截止日期前催促。"
			},
			{
				"id": 3136,
				"en": "urgent",
				"zh": "紧急的",
				"phonetic": "/.../",
				"example": "This is very urgent.",
				"exampleZh": "这非常紧急的。"
			},
			{
				"id": 3137,
				"en": "vacation",
				"zh": "假期",
				"phonetic": "/ʃən/",
				"example": "I really like the vacation.",
				"exampleZh": "我真的很喜欢这个假期。"
			},
			{
				"id": 3138,
				"en": "vague",
				"zh": "模糊的",
				"phonetic": "/.../",
				"example": "It's a vague idea.",
				"exampleZh": "这是一个模糊的的主意。"
			},
			{
				"id": 3139,
				"en": "valley",
				"zh": "山谷",
				"phonetic": "/.../",
				"example": "Do you understand this valley?",
				"exampleZh": "你理解这个山谷吗？"
			},
			{
				"id": 3140,
				"en": "value",
				"zh": "价值",
				"phonetic": "/.../",
				"example": "value plays a key role in our life.",
				"exampleZh": "价值在我们的生活中起着关键作用。"
			},
			{
				"id": 3141,
				"en": "variety",
				"zh": "多样性",
				"phonetic": "/.../",
				"example": "This is an important variety.",
				"exampleZh": "这是一个重要的多样性。"
			},
			{
				"id": 3142,
				"en": "various",
				"zh": "各种各样的",
				"phonetic": "/iəs/",
				"example": "She looks various today.",
				"exampleZh": "她今天看起来很各种各样的。"
			},
			{
				"id": 3143,
				"en": "victim",
				"zh": "受害者",
				"phonetic": "/.../",
				"example": "The victim is very useful.",
				"exampleZh": "受害者非常有用。"
			},
			{
				"id": 3144,
				"en": "view",
				"zh": "观点",
				"phonetic": "/.../",
				"example": "Do you understand this view?",
				"exampleZh": "你理解这个观点吗？"
			},
			{
				"id": 3145,
				"en": "violence",
				"zh": "暴力",
				"phonetic": "/əns/",
				"example": "violence plays a key role in our life.",
				"exampleZh": "暴力在我们的生活中起着关键作用。"
			},
			{
				"id": 3146,
				"en": "virtue",
				"zh": "美德",
				"phonetic": "/.../",
				"example": "This is an important virtue.",
				"exampleZh": "这是一个重要的美德。"
			},
			{
				"id": 3147,
				"en": "virus",
				"zh": "病毒",
				"phonetic": "/.../",
				"example": "I really like the virus.",
				"exampleZh": "我真的很喜欢这个病毒。"
			},
			{
				"id": 3148,
				"en": "visa",
				"zh": "签证",
				"phonetic": "/.../",
				"example": "The visa is very useful.",
				"exampleZh": "签证非常有用。"
			},
			{
				"id": 3149,
				"en": "vocabulary",
				"zh": "词汇",
				"phonetic": "/.../",
				"example": "Do you understand this vocabulary?",
				"exampleZh": "你理解这个词汇吗？"
			},
			{
				"id": 3150,
				"en": "volcano",
				"zh": "火山",
				"phonetic": "/.../",
				"example": "volcano plays a key role in our life.",
				"exampleZh": "火山在我们的生活中起着关键作用。"
			},
			{
				"id": 3151,
				"en": "volunteer",
				"zh": "志愿者",
				"phonetic": "/ər/",
				"example": "This is an important volunteer.",
				"exampleZh": "这是一个重要的志愿者。"
			},
			{
				"id": 3152,
				"en": "vote",
				"zh": "投票",
				"phonetic": "/.../",
				"example": "She wants to vote this task.",
				"exampleZh": "她想投票这个任务。"
			},
			{
				"id": 3153,
				"en": "voyage",
				"zh": "航行",
				"phonetic": "/ɔɪ/",
				"example": "The voyage is very useful.",
				"exampleZh": "航行非常有用。"
			},
			{
				"id": 3154,
				"en": "wage",
				"zh": "工资",
				"phonetic": "/.../",
				"example": "Do you understand this wage?",
				"exampleZh": "你理解这个工资吗？"
			},
			{
				"id": 3155,
				"en": "waiter",
				"zh": "服务员",
				"phonetic": "/ər/",
				"example": "waiter plays a key role in our life.",
				"exampleZh": "服务员在我们的生活中起着关键作用。"
			},
			{
				"id": 3156,
				"en": "wander",
				"zh": "漫步",
				"phonetic": "/ər/",
				"example": "We should wander more carefully.",
				"exampleZh": "我们应该更仔细地漫步。"
			},
			{
				"id": 3157,
				"en": "warn",
				"zh": "警告",
				"phonetic": "/.../",
				"example": "She wants to warn this task.",
				"exampleZh": "她想警告这个任务。"
			},
			{
				"id": 3158,
				"en": "wave",
				"zh": "波浪",
				"phonetic": "/.../",
				"example": "The wave is very useful.",
				"exampleZh": "波浪非常有用。"
			},
			{
				"id": 3159,
				"en": "weakness",
				"zh": "弱点",
				"phonetic": "/nəs/",
				"example": "Do you understand this weakness?",
				"exampleZh": "你理解这个弱点吗？"
			},
			{
				"id": 3160,
				"en": "wealth",
				"zh": "财富",
				"phonetic": "/θ/",
				"example": "wealth plays a key role in our life.",
				"exampleZh": "财富在我们的生活中起着关键作用。"
			},
			{
				"id": 3161,
				"en": "weapon",
				"zh": "武器",
				"phonetic": "/iː/",
				"example": "This is an important weapon.",
				"exampleZh": "这是一个重要的武器。"
			},
			{
				"id": 3162,
				"en": "website",
				"zh": "网站",
				"phonetic": "/.../",
				"example": "I really like the website.",
				"exampleZh": "我真的很喜欢这个网站。"
			},
			{
				"id": 3163,
				"en": "wedding",
				"zh": "婚礼",
				"phonetic": "/ɪŋ/",
				"example": "The wedding is very useful.",
				"exampleZh": "婚礼非常有用。"
			},
			{
				"id": 3164,
				"en": "weed",
				"zh": "杂草",
				"phonetic": "/d/",
				"example": "Do you understand this weed?",
				"exampleZh": "你理解这个杂草吗？"
			},
			{
				"id": 3165,
				"en": "weight",
				"zh": "重量",
				"phonetic": "/aɪt/",
				"example": "weight plays a key role in our life.",
				"exampleZh": "重量在我们的生活中起着关键作用。"
			},
			{
				"id": 3166,
				"en": "weird",
				"zh": "奇怪的",
				"phonetic": "/.../",
				"example": "This is very weird.",
				"exampleZh": "这非常奇怪的。"
			},
			{
				"id": 3167,
				"en": "welfare",
				"zh": "福利",
				"phonetic": "/.../",
				"example": "I really like the welfare.",
				"exampleZh": "我真的很喜欢这个福利。"
			},
			{
				"id": 3168,
				"en": "western",
				"zh": "西方的",
				"phonetic": "/.../",
				"example": "It's a western idea.",
				"exampleZh": "这是一个西方的的主意。"
			},
			{
				"id": 3169,
				"en": "wherever",
				"zh": "无论哪里",
				"phonetic": "/ər/",
				"example": "They worked wherever on the project.",
				"exampleZh": "他们无论哪里地在这个项目上工作。"
			},
			{
				"id": 3170,
				"en": "whisper",
				"zh": "耳语",
				"phonetic": "/ər/",
				"example": "I need to whisper before the deadline.",
				"exampleZh": "我需要在截止日期前耳语。"
			},
			{
				"id": 3171,
				"en": "widespread",
				"zh": "广泛的",
				"phonetic": "/iː/",
				"example": "This is very widespread.",
				"exampleZh": "这非常广泛的。"
			},
			{
				"id": 3172,
				"en": "willing",
				"zh": "愿意的",
				"phonetic": "/ɪŋ/",
				"example": "She looks willing today.",
				"exampleZh": "她今天看起来很愿意的。"
			},
			{
				"id": 3173,
				"en": "wine",
				"zh": "葡萄酒",
				"phonetic": "/.../",
				"example": "The wine is very useful.",
				"exampleZh": "葡萄酒非常有用。"
			},
			{
				"id": 3174,
				"en": "wipe",
				"zh": "擦",
				"phonetic": "/.../",
				"example": "They decided to wipe the plan.",
				"exampleZh": "他们决定擦这个计划。"
			},
			{
				"id": 3175,
				"en": "wire",
				"zh": "电线",
				"phonetic": "/.../",
				"example": "wire plays a key role in our life.",
				"exampleZh": "电线在我们的生活中起着关键作用。"
			},
			{
				"id": 3176,
				"en": "wise",
				"zh": "明智的",
				"phonetic": "/.../",
				"example": "This is very wise.",
				"exampleZh": "这非常明智的。"
			},
			{
				"id": 3177,
				"en": "within",
				"zh": "在...之内",
				"phonetic": "/.../",
				"example": "Let's talk about within.",
				"exampleZh": "让我们来谈谈在...之内吧。"
			},
			{
				"id": 3178,
				"en": "witness",
				"zh": "目击者",
				"phonetic": "/nəs/",
				"example": "The witness is very useful.",
				"exampleZh": "目击者非常有用。"
			},
			{
				"id": 3179,
				"en": "wonder",
				"zh": "想知道",
				"phonetic": "/ər/",
				"example": "They decided to wonder the plan.",
				"exampleZh": "他们决定想知道这个计划。"
			},
			{
				"id": 3180,
				"en": "worth",
				"zh": "值得",
				"phonetic": "/θ/",
				"example": "He found the task worth.",
				"exampleZh": "他发现这个任务是值得的。"
			},
			{
				"id": 3181,
				"en": "wound",
				"zh": "伤口",
				"phonetic": "/aʊ/",
				"example": "This is an important wound.",
				"exampleZh": "这是一个重要的伤口。"
			},
			{
				"id": 3182,
				"en": "wrap",
				"zh": "包",
				"phonetic": "/r/",
				"example": "She wants to wrap this task.",
				"exampleZh": "她想包这个任务。"
			},
			{
				"id": 3183,
				"en": "wrist",
				"zh": "手腕",
				"phonetic": "/r/",
				"example": "The wrist is very useful.",
				"exampleZh": "手腕非常有用。"
			},
			{
				"id": 3184,
				"en": "youth",
				"zh": "青春",
				"phonetic": "/θ/",
				"example": "Do you understand this youth?",
				"exampleZh": "你理解这个青春吗？"
			},
			{
				"id": 3185,
				"en": "zone",
				"zh": "区域",
				"phonetic": "/.../",
				"example": "zone plays a key role in our life.",
				"exampleZh": "区域在我们的生活中起着关键作用。"
			},
			{
				"id": 3186,
				"en": "abandon",
				"zh": "放弃",
				"phonetic": "/.../",
				"example": "We should abandon more carefully.",
				"exampleZh": "我们应该更仔细地放弃。"
			},
			{
				"id": 3187,
				"en": "absence",
				"zh": "缺席",
				"phonetic": "/əns/",
				"example": "I really like the absence.",
				"exampleZh": "我真的很喜欢这个缺席。"
			},
			{
				"id": 3188,
				"en": "absolute",
				"zh": "绝对的",
				"phonetic": "/.../",
				"example": "It's a absolute idea.",
				"exampleZh": "这是一个绝对的的主意。"
			},
			{
				"id": 3189,
				"en": "academic",
				"zh": "学术的",
				"phonetic": "/.../",
				"example": "The result is quite academic.",
				"exampleZh": "结果是相当学术的的。"
			},
			{
				"id": 3190,
				"en": "accelerate",
				"zh": "加速",
				"phonetic": "/.../",
				"example": "I need to accelerate before the deadline.",
				"exampleZh": "我需要在截止日期前加速。"
			},
			{
				"id": 3191,
				"en": "accompany",
				"zh": "陪伴",
				"phonetic": "/.../",
				"example": "We should accompany more carefully.",
				"exampleZh": "我们应该更仔细地陪伴。"
			},
			{
				"id": 3192,
				"en": "accumulate",
				"zh": "积累",
				"phonetic": "/.../",
				"example": "She wants to accumulate this task.",
				"exampleZh": "她想积累这个任务。"
			},
			{
				"id": 3193,
				"en": "accuse",
				"zh": "指控",
				"phonetic": "/.../",
				"example": "Let's accuse together.",
				"exampleZh": "让我们一起指控吧。"
			},
			{
				"id": 3194,
				"en": "acid",
				"zh": "酸",
				"phonetic": "/.../",
				"example": "Do you understand this acid?",
				"exampleZh": "你理解这个酸吗？"
			},
			{
				"id": 3195,
				"en": "acknowledge",
				"zh": "承认",
				"phonetic": "/aʊ/",
				"example": "I need to acknowledge before the deadline.",
				"exampleZh": "我需要在截止日期前承认。"
			},
			{
				"id": 3196,
				"en": "acquire",
				"zh": "获得",
				"phonetic": "/kw/",
				"example": "We should acquire more carefully.",
				"exampleZh": "我们应该更仔细地获得。"
			},
			{
				"id": 3197,
				"en": "adapt",
				"zh": "适应",
				"phonetic": "/.../",
				"example": "She wants to adapt this task.",
				"exampleZh": "她想适应这个任务。"
			},
			{
				"id": 3198,
				"en": "addict",
				"zh": "上瘾",
				"phonetic": "/.../",
				"example": "Let's addict together.",
				"exampleZh": "让我们一起上瘾吧。"
			},
			{
				"id": 3199,
				"en": "adequate",
				"zh": "足够的",
				"phonetic": "/kw/",
				"example": "The result is quite adequate.",
				"exampleZh": "结果是相当足够的的。"
			},
			{
				"id": 3200,
				"en": "adjust",
				"zh": "调整",
				"phonetic": "/.../",
				"example": "I need to adjust before the deadline.",
				"exampleZh": "我需要在截止日期前调整。"
			},
			{
				"id": 3201,
				"en": "administration",
				"zh": "管理",
				"phonetic": "/ʃən/",
				"example": "This is an important administration.",
				"exampleZh": "这是一个重要的管理。"
			},
			{
				"id": 3202,
				"en": "adolescent",
				"zh": "青少年",
				"phonetic": "/.../",
				"example": "I really like the adolescent.",
				"exampleZh": "我真的很喜欢这个青少年。"
			},
			{
				"id": 3203,
				"en": "advocate",
				"zh": "提倡",
				"phonetic": "/.../",
				"example": "Let's advocate together.",
				"exampleZh": "让我们一起提倡吧。"
			},
			{
				"id": 3204,
				"en": "aggressive",
				"zh": "侵略的",
				"phonetic": "/.../",
				"example": "The result is quite aggressive.",
				"exampleZh": "结果是相当侵略的的。"
			},
			{
				"id": 3205,
				"en": "agriculture",
				"zh": "农业",
				"phonetic": "/tʃər/",
				"example": "agriculture plays a key role in our life.",
				"exampleZh": "农业在我们的生活中起着关键作用。"
			},
			{
				"id": 3206,
				"en": "allocate",
				"zh": "分配",
				"phonetic": "/.../",
				"example": "We should allocate more carefully.",
				"exampleZh": "我们应该更仔细地分配。"
			},
			{
				"id": 3207,
				"en": "alternative",
				"zh": "替代的",
				"phonetic": "/.../",
				"example": "She looks alternative today.",
				"exampleZh": "她今天看起来很替代的。"
			},
			{
				"id": 3208,
				"en": "amaze",
				"zh": "使惊奇",
				"phonetic": "/.../",
				"example": "Let's amaze together.",
				"exampleZh": "让我们一起使惊奇吧。"
			},
			{
				"id": 3209,
				"en": "ambiguous",
				"zh": "模糊的",
				"phonetic": "/əs/",
				"example": "The result is quite ambiguous.",
				"exampleZh": "结果是相当模糊的的。"
			},
			{
				"id": 3210,
				"en": "analyze",
				"zh": "分析",
				"phonetic": "/.../",
				"example": "I need to analyze before the deadline.",
				"exampleZh": "我需要在截止日期前分析。"
			},
			{
				"id": 3211,
				"en": "angle",
				"zh": "角度",
				"phonetic": "/.../",
				"example": "This is an important angle.",
				"exampleZh": "这是一个重要的角度。"
			},
			{
				"id": 3212,
				"en": "anniversary",
				"zh": "周年",
				"phonetic": "/.../",
				"example": "I really like the anniversary.",
				"exampleZh": "我真的很喜欢这个周年。"
			},
			{
				"id": 3213,
				"en": "annual",
				"zh": "每年的",
				"phonetic": "/.../",
				"example": "It's a annual idea.",
				"exampleZh": "这是一个每年的的主意。"
			},
			{
				"id": 3214,
				"en": "apparent",
				"zh": "明显的",
				"phonetic": "/.../",
				"example": "The result is quite apparent.",
				"exampleZh": "结果是相当明显的的。"
			},
			{
				"id": 3215,
				"en": "appetite",
				"zh": "食欲",
				"phonetic": "/.../",
				"example": "appetite plays a key role in our life.",
				"exampleZh": "食欲在我们的生活中起着关键作用。"
			},
			{
				"id": 3216,
				"en": "appliance",
				"zh": "电器",
				"phonetic": "/əns/",
				"example": "This is an important appliance.",
				"exampleZh": "这是一个重要的电器。"
			},
			{
				"id": 3217,
				"en": "appoint",
				"zh": "任命",
				"phonetic": "/ɔɪ/",
				"example": "She wants to appoint this task.",
				"exampleZh": "她想任命这个任务。"
			},
			{
				"id": 3218,
				"en": "appropriate",
				"zh": "适当的",
				"phonetic": "/.../",
				"example": "It's a appropriate idea.",
				"exampleZh": "这是一个适当的的主意。"
			},
			{
				"id": 3219,
				"en": "approve",
				"zh": "批准",
				"phonetic": "/.../",
				"example": "They decided to approve the plan.",
				"exampleZh": "他们决定批准这个计划。"
			},
			{
				"id": 3220,
				"en": "architecture",
				"zh": "建筑",
				"phonetic": "/tʃər/",
				"example": "architecture plays a key role in our life.",
				"exampleZh": "建筑在我们的生活中起着关键作用。"
			},
			{
				"id": 3221,
				"en": "arise",
				"zh": "出现",
				"phonetic": "/.../",
				"example": "We should arise more carefully.",
				"exampleZh": "我们应该更仔细地出现。"
			},
			{
				"id": 3222,
				"en": "artificial",
				"zh": "人工的",
				"phonetic": "/ʃəl/",
				"example": "She looks artificial today.",
				"exampleZh": "她今天看起来很人工的。"
			},
			{
				"id": 3223,
				"en": "aspect",
				"zh": "方面",
				"phonetic": "/.../",
				"example": "The aspect is very useful.",
				"exampleZh": "方面非常有用。"
			},
			{
				"id": 3224,
				"en": "assess",
				"zh": "评估",
				"phonetic": "/.../",
				"example": "They decided to assess the plan.",
				"exampleZh": "他们决定评估这个计划。"
			},
			{
				"id": 3225,
				"en": "assign",
				"zh": "分配",
				"phonetic": "/.../",
				"example": "I need to assign before the deadline.",
				"exampleZh": "我需要在截止日期前分配。"
			},
			{
				"id": 3226,
				"en": "assist",
				"zh": "协助",
				"phonetic": "/.../",
				"example": "We should assist more carefully.",
				"exampleZh": "我们应该更仔细地协助。"
			},
			{
				"id": 3227,
				"en": "associate",
				"zh": "联系",
				"phonetic": "/.../",
				"example": "She wants to associate this task.",
				"exampleZh": "她想联系这个任务。"
			},
			{
				"id": 3228,
				"en": "assume",
				"zh": "假设",
				"phonetic": "/.../",
				"example": "Let's assume together.",
				"exampleZh": "让我们一起假设吧。"
			},
			{
				"id": 3229,
				"en": "atmosphere",
				"zh": "气氛",
				"phonetic": "/.../",
				"example": "Do you understand this atmosphere?",
				"exampleZh": "你理解这个气氛吗？"
			},
			{
				"id": 3230,
				"en": "atom",
				"zh": "原子",
				"phonetic": "/.../",
				"example": "atom plays a key role in our life.",
				"exampleZh": "原子在我们的生活中起着关键作用。"
			},
			{
				"id": 3231,
				"en": "attach",
				"zh": "附上",
				"phonetic": "/tʃ/",
				"example": "We should attach more carefully.",
				"exampleZh": "我们应该更仔细地附上。"
			},
			{
				"id": 3232,
				"en": "authority",
				"zh": "权威",
				"phonetic": "/ɔː/",
				"example": "I really like the authority.",
				"exampleZh": "我真的很喜欢这个权威。"
			},
			{
				"id": 3233,
				"en": "automatic",
				"zh": "自动的",
				"phonetic": "/ɔː/",
				"example": "It's a automatic idea.",
				"exampleZh": "这是一个自动的的主意。"
			},
			{
				"id": 3234,
				"en": "avenue",
				"zh": "大道",
				"phonetic": "/.../",
				"example": "Do you understand this avenue?",
				"exampleZh": "你理解这个大道吗？"
			},
			{
				"id": 3235,
				"en": "bankrupt",
				"zh": "破产的",
				"phonetic": "/.../",
				"example": "He found the task bankrupt.",
				"exampleZh": "他发现这个任务是破产的的。"
			},
			{
				"id": 3236,
				"en": "bargain",
				"zh": "讨价还价",
				"phonetic": "/eɪ/",
				"example": "We should bargain more carefully.",
				"exampleZh": "我们应该更仔细地讨价还价。"
			},
			{
				"id": 3237,
				"en": "barrier",
				"zh": "障碍",
				"phonetic": "/ər/",
				"example": "I really like the barrier.",
				"exampleZh": "我真的很喜欢这个障碍。"
			},
			{
				"id": 3238,
				"en": "betray",
				"zh": "背叛",
				"phonetic": "/eɪ/",
				"example": "Let's betray together.",
				"exampleZh": "让我们一起背叛吧。"
			},
			{
				"id": 3239,
				"en": "biography",
				"zh": "传记",
				"phonetic": "/.../",
				"example": "Do you understand this biography?",
				"exampleZh": "你理解这个传记吗？"
			},
			{
				"id": 3240,
				"en": "blade",
				"zh": "刀片",
				"phonetic": "/.../",
				"example": "blade plays a key role in our life.",
				"exampleZh": "刀片在我们的生活中起着关键作用。"
			},
			{
				"id": 3241,
				"en": "bond",
				"zh": "纽带",
				"phonetic": "/.../",
				"example": "This is an important bond.",
				"exampleZh": "这是一个重要的纽带。"
			},
			{
				"id": 3242,
				"en": "boom",
				"zh": "繁荣",
				"phonetic": "/uː/",
				"example": "I really like the boom.",
				"exampleZh": "我真的很喜欢这个繁荣。"
			},
			{
				"id": 3243,
				"en": "bound",
				"zh": "必定",
				"phonetic": "/aʊ/",
				"example": "It's a bound idea.",
				"exampleZh": "这是一个必定的主意。"
			},
			{
				"id": 3244,
				"en": "brand",
				"zh": "品牌",
				"phonetic": "/.../",
				"example": "Do you understand this brand?",
				"exampleZh": "你理解这个品牌吗？"
			},
			{
				"id": 3245,
				"en": "breakthrough",
				"zh": "突破",
				"phonetic": "/ʌf/",
				"example": "breakthrough plays a key role in our life.",
				"exampleZh": "突破在我们的生活中起着关键作用。"
			},
			{
				"id": 3246,
				"en": "breed",
				"zh": "品种",
				"phonetic": "/d/",
				"example": "This is an important breed.",
				"exampleZh": "这是一个重要的品种。"
			},
			{
				"id": 3247,
				"en": "bribe",
				"zh": "贿赂",
				"phonetic": "/.../",
				"example": "She wants to bribe this task.",
				"exampleZh": "她想贿赂这个任务。"
			},
			{
				"id": 3248,
				"en": "brilliant",
				"zh": "杰出的",
				"phonetic": "/.../",
				"example": "It's a brilliant idea.",
				"exampleZh": "这是一个杰出的的主意。"
			},
			{
				"id": 3249,
				"en": "bubble",
				"zh": "气泡",
				"phonetic": "/.../",
				"example": "Do you understand this bubble?",
				"exampleZh": "你理解这个气泡吗？"
			},
			{
				"id": 3250,
				"en": "bulletin",
				"zh": "公告",
				"phonetic": "/.../",
				"example": "bulletin plays a key role in our life.",
				"exampleZh": "公告在我们的生活中起着关键作用。"
			},
			{
				"id": 3251,
				"en": "cabinet",
				"zh": "橱柜",
				"phonetic": "/.../",
				"example": "This is an important cabinet.",
				"exampleZh": "这是一个重要的橱柜。"
			},
			{
				"id": 3252,
				"en": "calculate",
				"zh": "计算",
				"phonetic": "/.../",
				"example": "She wants to calculate this task.",
				"exampleZh": "她想计算这个任务。"
			},
			{
				"id": 3253,
				"en": "capacity",
				"zh": "容量",
				"phonetic": "/.../",
				"example": "The capacity is very useful.",
				"exampleZh": "容量非常有用。"
			},
			{
				"id": 3254,
				"en": "capture",
				"zh": "捕获",
				"phonetic": "/tʃər/",
				"example": "They decided to capture the plan.",
				"exampleZh": "他们决定捕获这个计划。"
			},
			{
				"id": 3255,
				"en": "cast",
				"zh": "投掷",
				"phonetic": "/.../",
				"example": "I need to cast before the deadline.",
				"exampleZh": "我需要在截止日期前投掷。"
			},
			{
				"id": 3256,
				"en": "catalog",
				"zh": "目录",
				"phonetic": "/.../",
				"example": "This is an important catalog.",
				"exampleZh": "这是一个重要的目录。"
			},
			{
				"id": 3257,
				"en": "category",
				"zh": "类别",
				"phonetic": "/.../",
				"example": "I really like the category.",
				"exampleZh": "我真的很喜欢这个类别。"
			},
			{
				"id": 3258,
				"en": "cease",
				"zh": "停止",
				"phonetic": "/iː/",
				"example": "Let's cease together.",
				"exampleZh": "让我们一起停止吧。"
			},
			{
				"id": 3259,
				"en": "celebrity",
				"zh": "名人",
				"phonetic": "/.../",
				"example": "Do you understand this celebrity?",
				"exampleZh": "你理解这个名人吗？"
			},
			{
				"id": 3260,
				"en": "certificate",
				"zh": "证书",
				"phonetic": "/.../",
				"example": "certificate plays a key role in our life.",
				"exampleZh": "证书在我们的生活中起着关键作用。"
			},
			{
				"id": 3261,
				"en": "chamber",
				"zh": "房间",
				"phonetic": "/ər/",
				"example": "This is an important chamber.",
				"exampleZh": "这是一个重要的房间。"
			},
			{
				"id": 3262,
				"en": "chaos",
				"zh": "混乱",
				"phonetic": "/.../",
				"example": "I really like the chaos.",
				"exampleZh": "我真的很喜欢这个混乱。"
			},
			{
				"id": 3263,
				"en": "characteristic",
				"zh": "特征",
				"phonetic": "/.../",
				"example": "The characteristic is very useful.",
				"exampleZh": "特征非常有用。"
			},
			{
				"id": 3264,
				"en": "civil",
				"zh": "公民的",
				"phonetic": "/.../",
				"example": "The result is quite civil.",
				"exampleZh": "结果是相当公民的的。"
			},
			{
				"id": 3265,
				"en": "claim",
				"zh": "声称",
				"phonetic": "/eɪ/",
				"example": "I need to claim before the deadline.",
				"exampleZh": "我需要在截止日期前声称。"
			},
			{
				"id": 3266,
				"en": "classify",
				"zh": "分类",
				"phonetic": "/.../",
				"example": "We should classify more carefully.",
				"exampleZh": "我们应该更仔细地分类。"
			},
			{
				"id": 3267,
				"en": "client",
				"zh": "客户",
				"phonetic": "/.../",
				"example": "I really like the client.",
				"exampleZh": "我真的很喜欢这个客户。"
			},
			{
				"id": 3268,
				"en": "collapse",
				"zh": "倒塌",
				"phonetic": "/.../",
				"example": "Let's collapse together.",
				"exampleZh": "让我们一起倒塌吧。"
			},
			{
				"id": 3269,
				"en": "colony",
				"zh": "殖民地",
				"phonetic": "/.../",
				"example": "Do you understand this colony?",
				"exampleZh": "你理解这个殖民地吗？"
			},
			{
				"id": 3270,
				"en": "column",
				"zh": "栏目",
				"phonetic": "/.../",
				"example": "column plays a key role in our life.",
				"exampleZh": "栏目在我们的生活中起着关键作用。"
			},
			{
				"id": 3271,
				"en": "combat",
				"zh": "战斗",
				"phonetic": "/.../",
				"example": "This is an important combat.",
				"exampleZh": "这是一个重要的战斗。"
			},
			{
				"id": 3272,
				"en": "comedy",
				"zh": "喜剧",
				"phonetic": "/.../",
				"example": "I really like the comedy.",
				"exampleZh": "我真的很喜欢这个喜剧。"
			},
			{
				"id": 3273,
				"en": "commerce",
				"zh": "商业",
				"phonetic": "/.../",
				"example": "The commerce is very useful.",
				"exampleZh": "商业非常有用。"
			},
			{
				"id": 3274,
				"en": "commission",
				"zh": "委员会",
				"phonetic": "/ʃən/",
				"example": "Do you understand this commission?",
				"exampleZh": "你理解这个委员会吗？"
			},
			{
				"id": 3275,
				"en": "commit",
				"zh": "承诺",
				"phonetic": "/.../",
				"example": "I need to commit before the deadline.",
				"exampleZh": "我需要在截止日期前承诺。"
			},
			{
				"id": 3276,
				"en": "commodity",
				"zh": "商品",
				"phonetic": "/.../",
				"example": "This is an important commodity.",
				"exampleZh": "这是一个重要的商品。"
			},
			{
				"id": 3277,
				"en": "companion",
				"zh": "同伴",
				"phonetic": "/.../",
				"example": "I really like the companion.",
				"exampleZh": "我真的很喜欢这个同伴。"
			},
			{
				"id": 3278,
				"en": "compensate",
				"zh": "补偿",
				"phonetic": "/.../",
				"example": "Let's compensate together.",
				"exampleZh": "让我们一起补偿吧。"
			},
			{
				"id": 3279,
				"en": "competent",
				"zh": "有能力的",
				"phonetic": "/.../",
				"example": "The result is quite competent.",
				"exampleZh": "结果是相当有能力的的。"
			},
			{
				"id": 3280,
				"en": "complex",
				"zh": "复杂的",
				"phonetic": "/.../",
				"example": "He found the task complex.",
				"exampleZh": "他发现这个任务是复杂的的。"
			},
			{
				"id": 3281,
				"en": "complicate",
				"zh": "使复杂",
				"phonetic": "/.../",
				"example": "We should complicate more carefully.",
				"exampleZh": "我们应该更仔细地使复杂。"
			},
			{
				"id": 3282,
				"en": "component",
				"zh": "组成部分",
				"phonetic": "/.../",
				"example": "I really like the component.",
				"exampleZh": "我真的很喜欢这个组成部分。"
			},
			{
				"id": 3283,
				"en": "compose",
				"zh": "组成",
				"phonetic": "/.../",
				"example": "Let's compose together.",
				"exampleZh": "让我们一起组成吧。"
			},
			{
				"id": 3284,
				"en": "comprehend",
				"zh": "理解",
				"phonetic": "/.../",
				"example": "They decided to comprehend the plan.",
				"exampleZh": "他们决定理解这个计划。"
			},
			{
				"id": 3285,
				"en": "concentrate",
				"zh": "集中",
				"phonetic": "/.../",
				"example": "I need to concentrate before the deadline.",
				"exampleZh": "我需要在截止日期前集中。"
			},
			{
				"id": 3286,
				"en": "concept",
				"zh": "概念",
				"phonetic": "/.../",
				"example": "This is an important concept.",
				"exampleZh": "这是一个重要的概念。"
			},
			{
				"id": 3287,
				"en": "concerning",
				"zh": "关于",
				"phonetic": "/ɪŋ/",
				"example": "Let's talk about concerning.",
				"exampleZh": "让我们来谈谈关于吧。"
			},
			{
				"id": 3288,
				"en": "conclude",
				"zh": "结论",
				"phonetic": "/.../",
				"example": "Let's conclude together.",
				"exampleZh": "让我们一起结论吧。"
			},
			{
				"id": 3289,
				"en": "concrete",
				"zh": "具体的",
				"phonetic": "/.../",
				"example": "The result is quite concrete.",
				"exampleZh": "结果是相当具体的的。"
			},
			{
				"id": 3290,
				"en": "confront",
				"zh": "面对",
				"phonetic": "/.../",
				"example": "I need to confront before the deadline.",
				"exampleZh": "我需要在截止日期前面对。"
			},
			{
				"id": 3291,
				"en": "congress",
				"zh": "国会",
				"phonetic": "/.../",
				"example": "This is an important congress.",
				"exampleZh": "这是一个重要的国会。"
			},
			{
				"id": 3292,
				"en": "conscience",
				"zh": "良心",
				"phonetic": "/əns/",
				"example": "I really like the conscience.",
				"exampleZh": "我真的很喜欢这个良心。"
			},
			{
				"id": 3293,
				"en": "conscious",
				"zh": "有意识的",
				"phonetic": "/ʃəs/",
				"example": "It's a conscious idea.",
				"exampleZh": "这是一个有意识的的主意。"
			},
			{
				"id": 3294,
				"en": "consequence",
				"zh": "后果",
				"phonetic": "/əns/",
				"example": "Do you understand this consequence?",
				"exampleZh": "你理解这个后果吗？"
			},
			{
				"id": 3295,
				"en": "conservative",
				"zh": "保守的",
				"phonetic": "/.../",
				"example": "He found the task conservative.",
				"exampleZh": "他发现这个任务是保守的的。"
			},
			{
				"id": 3296,
				"en": "consist",
				"zh": "组成",
				"phonetic": "/.../",
				"example": "We should consist more carefully.",
				"exampleZh": "我们应该更仔细地组成。"
			},
			{
				"id": 3297,
				"en": "consistent",
				"zh": "一致的",
				"phonetic": "/.../",
				"example": "She looks consistent today.",
				"exampleZh": "她今天看起来很一致的。"
			},
			{
				"id": 3298,
				"en": "constant",
				"zh": "持续的",
				"phonetic": "/.../",
				"example": "It's a constant idea.",
				"exampleZh": "这是一个持续的的主意。"
			},
			{
				"id": 3299,
				"en": "constitution",
				"zh": "宪法",
				"phonetic": "/ʃən/",
				"example": "Do you understand this constitution?",
				"exampleZh": "你理解这个宪法吗？"
			},
			{
				"id": 3300,
				"en": "construct",
				"zh": "建造",
				"phonetic": "/.../",
				"example": "I need to construct before the deadline.",
				"exampleZh": "我需要在截止日期前建造。"
			},
			{
				"id": 3301,
				"en": "consult",
				"zh": "咨询",
				"phonetic": "/.../",
				"example": "We should consult more carefully.",
				"exampleZh": "我们应该更仔细地咨询。"
			},
			{
				"id": 3302,
				"en": "consume",
				"zh": "消费",
				"phonetic": "/.../",
				"example": "She wants to consume this task.",
				"exampleZh": "她想消费这个任务。"
			},
			{
				"id": 3303,
				"en": "contact",
				"zh": "联系",
				"phonetic": "/.../",
				"example": "Let's contact together.",
				"exampleZh": "让我们一起联系吧。"
			},
			{
				"id": 3304,
				"en": "contemporary",
				"zh": "当代的",
				"phonetic": "/.../",
				"example": "The result is quite contemporary.",
				"exampleZh": "结果是相当当代的的。"
			},
			{
				"id": 3305,
				"en": "contest",
				"zh": "竞赛",
				"phonetic": "/.../",
				"example": "contest plays a key role in our life.",
				"exampleZh": "竞赛在我们的生活中起着关键作用。"
			},
			{
				"id": 3306,
				"en": "continent",
				"zh": "大陆",
				"phonetic": "/.../",
				"example": "This is an important continent.",
				"exampleZh": "这是一个重要的大陆。"
			},
			{
				"id": 3307,
				"en": "contradict",
				"zh": "反驳",
				"phonetic": "/.../",
				"example": "She wants to contradict this task.",
				"exampleZh": "她想反驳这个任务。"
			},
			{
				"id": 3308,
				"en": "contrary",
				"zh": "相反的",
				"phonetic": "/.../",
				"example": "It's a contrary idea.",
				"exampleZh": "这是一个相反的的主意。"
			},
			{
				"id": 3309,
				"en": "contribute",
				"zh": "贡献",
				"phonetic": "/.../",
				"example": "They decided to contribute the plan.",
				"exampleZh": "他们决定贡献这个计划。"
			},
			{
				"id": 3310,
				"en": "controversy",
				"zh": "争议",
				"phonetic": "/.../",
				"example": "controversy plays a key role in our life.",
				"exampleZh": "争议在我们的生活中起着关键作用。"
			},
			{
				"id": 3311,
				"en": "convenient",
				"zh": "方便的",
				"phonetic": "/.../",
				"example": "This is very convenient.",
				"exampleZh": "这非常方便的。"
			},
			{
				"id": 3312,
				"en": "convention",
				"zh": "惯例",
				"phonetic": "/ʃən/",
				"example": "I really like the convention.",
				"exampleZh": "我真的很喜欢这个惯例。"
			},
			{
				"id": 3313,
				"en": "convey",
				"zh": "传达",
				"phonetic": "/.../",
				"example": "Let's convey together.",
				"exampleZh": "让我们一起传达吧。"
			},
			{
				"id": 3314,
				"en": "coordinate",
				"zh": "协调",
				"phonetic": "/uː/",
				"example": "They decided to coordinate the plan.",
				"exampleZh": "他们决定协调这个计划。"
			},
			{
				"id": 3315,
				"en": "core",
				"zh": "核心",
				"phonetic": "/.../",
				"example": "core plays a key role in our life.",
				"exampleZh": "核心在我们的生活中起着关键作用。"
			},
			{
				"id": 3316,
				"en": "corporation",
				"zh": "公司",
				"phonetic": "/ʃən/",
				"example": "This is an important corporation.",
				"exampleZh": "这是一个重要的公司。"
			},
			{
				"id": 3317,
				"en": "correspond",
				"zh": "对应",
				"phonetic": "/.../",
				"example": "She wants to correspond this task.",
				"exampleZh": "她想对应这个任务。"
			},
			{
				"id": 3318,
				"en": "corrupt",
				"zh": "腐败的",
				"phonetic": "/.../",
				"example": "It's a corrupt idea.",
				"exampleZh": "这是一个腐败的的主意。"
			},
			{
				"id": 3319,
				"en": "council",
				"zh": "理事会",
				"phonetic": "/aʊ/",
				"example": "Do you understand this council?",
				"exampleZh": "你理解这个理事会吗？"
			},
			{
				"id": 3320,
				"en": "county",
				"zh": "县",
				"phonetic": "/aʊ/",
				"example": "county plays a key role in our life.",
				"exampleZh": "县在我们的生活中起着关键作用。"
			},
			{
				"id": 3321,
				"en": "craft",
				"zh": "工艺",
				"phonetic": "/.../",
				"example": "This is an important craft.",
				"exampleZh": "这是一个重要的工艺。"
			},
			{
				"id": 3322,
				"en": "crash",
				"zh": "坠毁",
				"phonetic": "/ʃ/",
				"example": "She wants to crash this task.",
				"exampleZh": "她想坠毁这个任务。"
			},
			{
				"id": 3323,
				"en": "creature",
				"zh": "生物",
				"phonetic": "/tʃər/",
				"example": "The creature is very useful.",
				"exampleZh": "生物非常有用。"
			},
			{
				"id": 3324,
				"en": "criminal",
				"zh": "罪犯",
				"phonetic": "/.../",
				"example": "Do you understand this criminal?",
				"exampleZh": "你理解这个罪犯吗？"
			},
			{
				"id": 3325,
				"en": "criticize",
				"zh": "批评",
				"phonetic": "/.../",
				"example": "I need to criticize before the deadline.",
				"exampleZh": "我需要在截止日期前批评。"
			},
			{
				"id": 3326,
				"en": "crop",
				"zh": "庄稼",
				"phonetic": "/.../",
				"example": "This is an important crop.",
				"exampleZh": "这是一个重要的庄稼。"
			},
			{
				"id": 3327,
				"en": "crucial",
				"zh": "关键的",
				"phonetic": "/ʃəl/",
				"example": "She looks crucial today.",
				"exampleZh": "她今天看起来很关键的。"
			},
			{
				"id": 3328,
				"en": "cultivate",
				"zh": "培养",
				"phonetic": "/.../",
				"example": "Let's cultivate together.",
				"exampleZh": "让我们一起培养吧。"
			},
			{
				"id": 3329,
				"en": "currency",
				"zh": "货币",
				"phonetic": "/.../",
				"example": "Do you understand this currency?",
				"exampleZh": "你理解这个货币吗？"
			},
			{
				"id": 3330,
				"en": "curriculum",
				"zh": "课程",
				"phonetic": "/.../",
				"example": "curriculum plays a key role in our life.",
				"exampleZh": "课程在我们的生活中起着关键作用。"
			},
			{
				"id": 3331,
				"en": "curve",
				"zh": "曲线",
				"phonetic": "/.../",
				"example": "This is an important curve.",
				"exampleZh": "这是一个重要的曲线。"
			},
			{
				"id": 3332,
				"en": "dairy",
				"zh": "乳制品",
				"phonetic": "/eɪ/",
				"example": "I really like the dairy.",
				"exampleZh": "我真的很喜欢这个乳制品。"
			},
			{
				"id": 3333,
				"en": "dam",
				"zh": "水坝",
				"phonetic": "/.../",
				"example": "The dam is very useful.",
				"exampleZh": "水坝非常有用。"
			},
			{
				"id": 3334,
				"en": "deadline",
				"zh": "截止日期",
				"phonetic": "/iː/",
				"example": "Do you understand this deadline?",
				"exampleZh": "你理解这个截止日期吗？"
			},
			{
				"id": 3335,
				"en": "decay",
				"zh": "腐烂",
				"phonetic": "/eɪ/",
				"example": "I need to decay before the deadline.",
				"exampleZh": "我需要在截止日期前腐烂。"
			},
			{
				"id": 3336,
				"en": "deceive",
				"zh": "欺骗",
				"phonetic": "/.../",
				"example": "We should deceive more carefully.",
				"exampleZh": "我们应该更仔细地欺骗。"
			},
			{
				"id": 3337,
				"en": "decent",
				"zh": "体面的",
				"phonetic": "/.../",
				"example": "She looks decent today.",
				"exampleZh": "她今天看起来很体面的。"
			},
			{
				"id": 3338,
				"en": "deck",
				"zh": "甲板",
				"phonetic": "/k/",
				"example": "The deck is very useful.",
				"exampleZh": "甲板非常有用。"
			},
			{
				"id": 3339,
				"en": "declaration",
				"zh": "宣言",
				"phonetic": "/ʃən/",
				"example": "Do you understand this declaration?",
				"exampleZh": "你理解这个宣言吗？"
			},
			{
				"id": 3340,
				"en": "deed",
				"zh": "行为",
				"phonetic": "/d/",
				"example": "deed plays a key role in our life.",
				"exampleZh": "行为在我们的生活中起着关键作用。"
			},
			{
				"id": 3341,
				"en": "defense",
				"zh": "防御",
				"phonetic": "/.../",
				"example": "This is an important defense.",
				"exampleZh": "这是一个重要的防御。"
			},
			{
				"id": 3342,
				"en": "definite",
				"zh": "明确的",
				"phonetic": "/.../",
				"example": "She looks definite today.",
				"exampleZh": "她今天看起来很明确的。"
			},
			{
				"id": 3343,
				"en": "delegate",
				"zh": "代表",
				"phonetic": "/.../",
				"example": "The delegate is very useful.",
				"exampleZh": "代表非常有用。"
			},
			{
				"id": 3344,
				"en": "deliberate",
				"zh": "故意的",
				"phonetic": "/.../",
				"example": "The result is quite deliberate.",
				"exampleZh": "结果是相当故意的的。"
			},
			{
				"id": 3345,
				"en": "delicate",
				"zh": "精致的",
				"phonetic": "/.../",
				"example": "He found the task delicate.",
				"exampleZh": "他发现这个任务是精致的的。"
			},
			{
				"id": 3346,
				"en": "democracy",
				"zh": "民主",
				"phonetic": "/.../",
				"example": "This is an important democracy.",
				"exampleZh": "这是一个重要的民主。"
			},
			{
				"id": 3347,
				"en": "dense",
				"zh": "密集的",
				"phonetic": "/.../",
				"example": "She looks dense today.",
				"exampleZh": "她今天看起来很密集的。"
			},
			{
				"id": 3348,
				"en": "deny",
				"zh": "否认",
				"phonetic": "/.../",
				"example": "Let's deny together.",
				"exampleZh": "让我们一起否认吧。"
			},
			{
				"id": 3349,
				"en": "depart",
				"zh": "离开",
				"phonetic": "/.../",
				"example": "They decided to depart the plan.",
				"exampleZh": "他们决定离开这个计划。"
			},
			{
				"id": 3350,
				"en": "depress",
				"zh": "使沮丧",
				"phonetic": "/.../",
				"example": "I need to depress before the deadline.",
				"exampleZh": "我需要在截止日期前使沮丧。"
			},
			{
				"id": 3351,
				"en": "derive",
				"zh": "源自",
				"phonetic": "/.../",
				"example": "We should derive more carefully.",
				"exampleZh": "我们应该更仔细地源自。"
			},
			{
				"id": 3352,
				"en": "deserve",
				"zh": "值得",
				"phonetic": "/.../",
				"example": "She wants to deserve this task.",
				"exampleZh": "她想值得这个任务。"
			},
			{
				"id": 3353,
				"en": "desperate",
				"zh": "绝望的",
				"phonetic": "/.../",
				"example": "It's a desperate idea.",
				"exampleZh": "这是一个绝望的的主意。"
			},
			{
				"id": 3354,
				"en": "destination",
				"zh": "目的地",
				"phonetic": "/ʃən/",
				"example": "Do you understand this destination?",
				"exampleZh": "你理解这个目的地吗？"
			},
			{
				"id": 3355,
				"en": "destruction",
				"zh": "破坏",
				"phonetic": "/ʃən/",
				"example": "destruction plays a key role in our life.",
				"exampleZh": "破坏在我们的生活中起着关键作用。"
			},
			{
				"id": 3356,
				"en": "dialect",
				"zh": "方言",
				"phonetic": "/.../",
				"example": "This is an important dialect.",
				"exampleZh": "这是一个重要的方言。"
			},
			{
				"id": 3357,
				"en": "digest",
				"zh": "消化",
				"phonetic": "/.../",
				"example": "She wants to digest this task.",
				"exampleZh": "她想消化这个任务。"
			},
			{
				"id": 3358,
				"en": "dignity",
				"zh": "尊严",
				"phonetic": "/.../",
				"example": "The dignity is very useful.",
				"exampleZh": "尊严非常有用。"
			},
			{
				"id": 3359,
				"en": "dilemma",
				"zh": "困境",
				"phonetic": "/.../",
				"example": "Do you understand this dilemma?",
				"exampleZh": "你理解这个困境吗？"
			},
			{
				"id": 3360,
				"en": "dimension",
				"zh": "维度",
				"phonetic": "/ʒən/",
				"example": "dimension plays a key role in our life.",
				"exampleZh": "维度在我们的生活中起着关键作用。"
			},
			{
				"id": 3361,
				"en": "diploma",
				"zh": "文凭",
				"phonetic": "/.../",
				"example": "This is an important diploma.",
				"exampleZh": "这是一个重要的文凭。"
			},
			{
				"id": 3362,
				"en": "discipline",
				"zh": "纪律",
				"phonetic": "/.../",
				"example": "I really like the discipline.",
				"exampleZh": "我真的很喜欢这个纪律。"
			},
			{
				"id": 3363,
				"en": "disclose",
				"zh": "揭露",
				"phonetic": "/.../",
				"example": "Let's disclose together.",
				"exampleZh": "让我们一起揭露吧。"
			},
			{
				"id": 3364,
				"en": "discrimination",
				"zh": "歧视",
				"phonetic": "/ʃən/",
				"example": "Do you understand this discrimination?",
				"exampleZh": "你理解这个歧视吗？"
			},
			{
				"id": 3365,
				"en": "disgust",
				"zh": "厌恶",
				"phonetic": "/.../",
				"example": "disgust plays a key role in our life.",
				"exampleZh": "厌恶在我们的生活中起着关键作用。"
			},
			{
				"id": 3366,
				"en": "disorder",
				"zh": "混乱",
				"phonetic": "/ər/",
				"example": "This is an important disorder.",
				"exampleZh": "这是一个重要的混乱。"
			},
			{
				"id": 3367,
				"en": "dispose",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "She wants to dispose this task.",
				"exampleZh": "她想处理这个任务。"
			},
			{
				"id": 3368,
				"en": "dispute",
				"zh": "争论",
				"phonetic": "/.../",
				"example": "The dispute is very useful.",
				"exampleZh": "争论非常有用。"
			},
			{
				"id": 3369,
				"en": "dissolve",
				"zh": "溶解",
				"phonetic": "/.../",
				"example": "They decided to dissolve the plan.",
				"exampleZh": "他们决定溶解这个计划。"
			},
			{
				"id": 3370,
				"en": "distinct",
				"zh": "明显的",
				"phonetic": "/.../",
				"example": "He found the task distinct.",
				"exampleZh": "他发现这个任务是明显的的。"
			},
			{
				"id": 3371,
				"en": "distinguish",
				"zh": "区分",
				"phonetic": "/ʃ/",
				"example": "We should distinguish more carefully.",
				"exampleZh": "我们应该更仔细地区分。"
			},
			{
				"id": 3372,
				"en": "distribute",
				"zh": "分配",
				"phonetic": "/.../",
				"example": "She wants to distribute this task.",
				"exampleZh": "她想分配这个任务。"
			},
			{
				"id": 3373,
				"en": "diverse",
				"zh": "多样的",
				"phonetic": "/.../",
				"example": "It's a diverse idea.",
				"exampleZh": "这是一个多样的的主意。"
			},
			{
				"id": 3374,
				"en": "domestic",
				"zh": "国内的",
				"phonetic": "/.../",
				"example": "The result is quite domestic.",
				"exampleZh": "结果是相当国内的的。"
			},
			{
				"id": 3375,
				"en": "dominate",
				"zh": "主导",
				"phonetic": "/.../",
				"example": "I need to dominate before the deadline.",
				"exampleZh": "我需要在截止日期前主导。"
			},
			{
				"id": 3376,
				"en": "dose",
				"zh": "剂量",
				"phonetic": "/.../",
				"example": "This is an important dose.",
				"exampleZh": "这是一个重要的剂量。"
			},
			{
				"id": 3377,
				"en": "draft",
				"zh": "草稿",
				"phonetic": "/.../",
				"example": "I really like the draft.",
				"exampleZh": "我真的很喜欢这个草稿。"
			},
			{
				"id": 3378,
				"en": "drain",
				"zh": "排水",
				"phonetic": "/eɪ/",
				"example": "Let's drain together.",
				"exampleZh": "让我们一起排水吧。"
			},
			{
				"id": 3379,
				"en": "drama",
				"zh": "戏剧",
				"phonetic": "/.../",
				"example": "Do you understand this drama?",
				"exampleZh": "你理解这个戏剧吗？"
			},
			{
				"id": 3380,
				"en": "dramatic",
				"zh": "戏剧性的",
				"phonetic": "/.../",
				"example": "He found the task dramatic.",
				"exampleZh": "他发现这个任务是戏剧性的的。"
			},
			{
				"id": 3381,
				"en": "drift",
				"zh": "漂流",
				"phonetic": "/.../",
				"example": "We should drift more carefully.",
				"exampleZh": "我们应该更仔细地漂流。"
			},
			{
				"id": 3382,
				"en": "drought",
				"zh": "干旱",
				"phonetic": "/aʊ/",
				"example": "I really like the drought.",
				"exampleZh": "我真的很喜欢这个干旱。"
			},
			{
				"id": 3383,
				"en": "dump",
				"zh": "倾倒",
				"phonetic": "/.../",
				"example": "Let's dump together.",
				"exampleZh": "让我们一起倾倒吧。"
			},
			{
				"id": 3384,
				"en": "durable",
				"zh": "耐用的",
				"phonetic": "/əbəl/",
				"example": "The result is quite durable.",
				"exampleZh": "结果是相当耐用的的。"
			},
			{
				"id": 3385,
				"en": "dynamic",
				"zh": "动态的",
				"phonetic": "/.../",
				"example": "He found the task dynamic.",
				"exampleZh": "他发现这个任务是动态的的。"
			},
			{
				"id": 3386,
				"en": "earnest",
				"zh": "认真的",
				"phonetic": "/iː/",
				"example": "This is very earnest.",
				"exampleZh": "这非常认真的。"
			},
			{
				"id": 3387,
				"en": "echo",
				"zh": "回声",
				"phonetic": "/.../",
				"example": "I really like the echo.",
				"exampleZh": "我真的很喜欢这个回声。"
			},
			{
				"id": 3388,
				"en": "ecology",
				"zh": "生态",
				"phonetic": "/.../",
				"example": "The ecology is very useful.",
				"exampleZh": "生态非常有用。"
			},
			{
				"id": 3389,
				"en": "elaborate",
				"zh": "详细阐述",
				"phonetic": "/.../",
				"example": "They decided to elaborate the plan.",
				"exampleZh": "他们决定详细阐述这个计划。"
			},
			{
				"id": 3390,
				"en": "elegant",
				"zh": "优雅的",
				"phonetic": "/.../",
				"example": "He found the task elegant.",
				"exampleZh": "他发现这个任务是优雅的的。"
			},
			{
				"id": 3391,
				"en": "eliminate",
				"zh": "消除",
				"phonetic": "/.../",
				"example": "We should eliminate more carefully.",
				"exampleZh": "我们应该更仔细地消除。"
			},
			{
				"id": 3392,
				"en": "embassy",
				"zh": "大使馆",
				"phonetic": "/.../",
				"example": "I really like the embassy.",
				"exampleZh": "我真的很喜欢这个大使馆。"
			},
			{
				"id": 3393,
				"en": "embrace",
				"zh": "拥抱",
				"phonetic": "/.../",
				"example": "Let's embrace together.",
				"exampleZh": "让我们一起拥抱吧。"
			},
			{
				"id": 3394,
				"en": "emerge",
				"zh": "出现",
				"phonetic": "/.../",
				"example": "They decided to emerge the plan.",
				"exampleZh": "他们决定出现这个计划。"
			},
			{
				"id": 3395,
				"en": "emission",
				"zh": "排放",
				"phonetic": "/ʃən/",
				"example": "emission plays a key role in our life.",
				"exampleZh": "排放在我们的生活中起着关键作用。"
			},
			{
				"id": 3396,
				"en": "emphasis",
				"zh": "强调",
				"phonetic": "/.../",
				"example": "This is an important emphasis.",
				"exampleZh": "这是一个重要的强调。"
			},
			{
				"id": 3397,
				"en": "empire",
				"zh": "帝国",
				"phonetic": "/.../",
				"example": "I really like the empire.",
				"exampleZh": "我真的很喜欢这个帝国。"
			},
			{
				"id": 3398,
				"en": "encounter",
				"zh": "遭遇",
				"phonetic": "/ər/",
				"example": "Let's encounter together.",
				"exampleZh": "让我们一起遭遇吧。"
			},
			{
				"id": 3399,
				"en": "endure",
				"zh": "忍受",
				"phonetic": "/dʒər/",
				"example": "They decided to endure the plan.",
				"exampleZh": "他们决定忍受这个计划。"
			},
			{
				"id": 3400,
				"en": "engage",
				"zh": "参与",
				"phonetic": "/.../",
				"example": "I need to engage before the deadline.",
				"exampleZh": "我需要在截止日期前参与。"
			},
			{
				"id": 3401,
				"en": "enhance",
				"zh": "增强",
				"phonetic": "/əns/",
				"example": "We should enhance more carefully.",
				"exampleZh": "我们应该更仔细地增强。"
			},
			{
				"id": 3402,
				"en": "enterprise",
				"zh": "企业",
				"phonetic": "/.../",
				"example": "I really like the enterprise.",
				"exampleZh": "我真的很喜欢这个企业。"
			},
			{
				"id": 3403,
				"en": "enthusiasm",
				"zh": "热情",
				"phonetic": "/.../",
				"example": "The enthusiasm is very useful.",
				"exampleZh": "热情非常有用。"
			},
			{
				"id": 3404,
				"en": "entry",
				"zh": "入口",
				"phonetic": "/.../",
				"example": "Do you understand this entry?",
				"exampleZh": "你理解这个入口吗？"
			},
			{
				"id": 3405,
				"en": "episode",
				"zh": "插曲",
				"phonetic": "/.../",
				"example": "episode plays a key role in our life.",
				"exampleZh": "插曲在我们的生活中起着关键作用。"
			},
			{
				"id": 3406,
				"en": "equality",
				"zh": "平等",
				"phonetic": "/kw/",
				"example": "This is an important equality.",
				"exampleZh": "这是一个重要的平等。"
			},
			{
				"id": 3407,
				"en": "equation",
				"zh": "方程",
				"phonetic": "/ʃən/",
				"example": "I really like the equation.",
				"exampleZh": "我真的很喜欢这个方程。"
			},
			{
				"id": 3408,
				"en": "equivalent",
				"zh": "等价的",
				"phonetic": "/kw/",
				"example": "It's a equivalent idea.",
				"exampleZh": "这是一个等价的的主意。"
			},
			{
				"id": 3409,
				"en": "era",
				"zh": "时代",
				"phonetic": "/.../",
				"example": "Do you understand this era?",
				"exampleZh": "你理解这个时代吗？"
			},
			{
				"id": 3410,
				"en": "essential",
				"zh": "必要的",
				"phonetic": "/ʃəl/",
				"example": "He found the task essential.",
				"exampleZh": "他发现这个任务是必要的的。"
			},
			{
				"id": 3411,
				"en": "establish",
				"zh": "建立",
				"phonetic": "/ʃ/",
				"example": "We should establish more carefully.",
				"exampleZh": "我们应该更仔细地建立。"
			},
			{
				"id": 3412,
				"en": "estate",
				"zh": "房产",
				"phonetic": "/.../",
				"example": "I really like the estate.",
				"exampleZh": "我真的很喜欢这个房产。"
			},
			{
				"id": 3413,
				"en": "estimate",
				"zh": "估计",
				"phonetic": "/.../",
				"example": "Let's estimate together.",
				"exampleZh": "让我们一起估计吧。"
			},
			{
				"id": 3414,
				"en": "evaluate",
				"zh": "评估",
				"phonetic": "/.../",
				"example": "They decided to evaluate the plan.",
				"exampleZh": "他们决定评估这个计划。"
			},
			{
				"id": 3415,
				"en": "evolution",
				"zh": "进化",
				"phonetic": "/ʃən/",
				"example": "evolution plays a key role in our life.",
				"exampleZh": "进化在我们的生活中起着关键作用。"
			},
			{
				"id": 3416,
				"en": "evolve",
				"zh": "进化",
				"phonetic": "/.../",
				"example": "We should evolve more carefully.",
				"exampleZh": "我们应该更仔细地进化。"
			},
			{
				"id": 3417,
				"en": "exaggerate",
				"zh": "夸张",
				"phonetic": "/.../",
				"example": "She wants to exaggerate this task.",
				"exampleZh": "她想夸张这个任务。"
			},
			{
				"id": 3418,
				"en": "exceed",
				"zh": "超过",
				"phonetic": "/d/",
				"example": "Let's exceed together.",
				"exampleZh": "让我们一起超过吧。"
			},
			{
				"id": 3419,
				"en": "excel",
				"zh": "擅长",
				"phonetic": "/.../",
				"example": "They decided to excel the plan.",
				"exampleZh": "他们决定擅长这个计划。"
			},
			{
				"id": 3420,
				"en": "exception",
				"zh": "例外",
				"phonetic": "/ʃən/",
				"example": "exception plays a key role in our life.",
				"exampleZh": "例外在我们的生活中起着关键作用。"
			},
			{
				"id": 3421,
				"en": "excess",
				"zh": "过量",
				"phonetic": "/.../",
				"example": "This is an important excess.",
				"exampleZh": "这是一个重要的过量。"
			},
			{
				"id": 3422,
				"en": "exclusive",
				"zh": "独有的",
				"phonetic": "/.../",
				"example": "She looks exclusive today.",
				"exampleZh": "她今天看起来很独有的。"
			},
			{
				"id": 3423,
				"en": "execute",
				"zh": "执行",
				"phonetic": "/.../",
				"example": "Let's execute together.",
				"exampleZh": "让我们一起执行吧。"
			},
			{
				"id": 3424,
				"en": "exhibit",
				"zh": "展览",
				"phonetic": "/.../",
				"example": "They decided to exhibit the plan.",
				"exampleZh": "他们决定展览这个计划。"
			},
			{
				"id": 3425,
				"en": "existence",
				"zh": "存在",
				"phonetic": "/əns/",
				"example": "existence plays a key role in our life.",
				"exampleZh": "存在在我们的生活中起着关键作用。"
			},
			{
				"id": 3426,
				"en": "expand",
				"zh": "扩展",
				"phonetic": "/.../",
				"example": "We should expand more carefully.",
				"exampleZh": "我们应该更仔细地扩展。"
			},
			{
				"id": 3427,
				"en": "expense",
				"zh": "花费",
				"phonetic": "/.../",
				"example": "I really like the expense.",
				"exampleZh": "我真的很喜欢这个花费。"
			},
			{
				"id": 3428,
				"en": "exploit",
				"zh": "开发",
				"phonetic": "/ɔɪ/",
				"example": "Let's exploit together.",
				"exampleZh": "让我们一起开发吧。"
			},
			{
				"id": 3429,
				"en": "explosion",
				"zh": "爆炸",
				"phonetic": "/ʒən/",
				"example": "Do you understand this explosion?",
				"exampleZh": "你理解这个爆炸吗？"
			},
			{
				"id": 3430,
				"en": "expose",
				"zh": "暴露",
				"phonetic": "/.../",
				"example": "I need to expose before the deadline.",
				"exampleZh": "我需要在截止日期前暴露。"
			},
			{
				"id": 3431,
				"en": "extend",
				"zh": "延伸",
				"phonetic": "/.../",
				"example": "We should extend more carefully.",
				"exampleZh": "我们应该更仔细地延伸。"
			},
			{
				"id": 3432,
				"en": "extensive",
				"zh": "广泛的",
				"phonetic": "/.../",
				"example": "She looks extensive today.",
				"exampleZh": "她今天看起来很广泛的。"
			},
			{
				"id": 3433,
				"en": "external",
				"zh": "外部的",
				"phonetic": "/.../",
				"example": "It's a external idea.",
				"exampleZh": "这是一个外部的的主意。"
			},
			{
				"id": 3434,
				"en": "fabric",
				"zh": "织物",
				"phonetic": "/.../",
				"example": "Do you understand this fabric?",
				"exampleZh": "你理解这个织物吗？"
			},
			{
				"id": 3435,
				"en": "facility",
				"zh": "设施",
				"phonetic": "/.../",
				"example": "facility plays a key role in our life.",
				"exampleZh": "设施在我们的生活中起着关键作用。"
			},
			{
				"id": 3436,
				"en": "faithful",
				"zh": "忠诚的",
				"phonetic": "/fəl/",
				"example": "This is very faithful.",
				"exampleZh": "这非常忠诚的。"
			},
			{
				"id": 3437,
				"en": "fantasy",
				"zh": "幻想",
				"phonetic": "/.../",
				"example": "I really like the fantasy.",
				"exampleZh": "我真的很喜欢这个幻想。"
			},
			{
				"id": 3438,
				"en": "fate",
				"zh": "命运",
				"phonetic": "/.../",
				"example": "The fate is very useful.",
				"exampleZh": "命运非常有用。"
			},
			{
				"id": 3439,
				"en": "feast",
				"zh": "盛宴",
				"phonetic": "/iː/",
				"example": "Do you understand this feast?",
				"exampleZh": "你理解这个盛宴吗？"
			},
			{
				"id": 3440,
				"en": "feedback",
				"zh": "反馈",
				"phonetic": "/k/",
				"example": "feedback plays a key role in our life.",
				"exampleZh": "反馈在我们的生活中起着关键作用。"
			},
			{
				"id": 3441,
				"en": "finance",
				"zh": "金融",
				"phonetic": "/əns/",
				"example": "This is an important finance.",
				"exampleZh": "这是一个重要的金融。"
			},
			{
				"id": 3442,
				"en": "flee",
				"zh": "逃跑",
				"phonetic": "/iː/",
				"example": "She wants to flee this task.",
				"exampleZh": "她想逃跑这个任务。"
			},
			{
				"id": 3443,
				"en": "flexible",
				"zh": "灵活的",
				"phonetic": "/ɪbəl/",
				"example": "It's a flexible idea.",
				"exampleZh": "这是一个灵活的的主意。"
			},
			{
				"id": 3444,
				"en": "flourish",
				"zh": "繁荣",
				"phonetic": "/ʃ/",
				"example": "They decided to flourish the plan.",
				"exampleZh": "他们决定繁荣这个计划。"
			},
			{
				"id": 3445,
				"en": "forecast",
				"zh": "预报",
				"phonetic": "/.../",
				"example": "I need to forecast before the deadline.",
				"exampleZh": "我需要在截止日期前预报。"
			},
			{
				"id": 3446,
				"en": "formula",
				"zh": "公式",
				"phonetic": "/.../",
				"example": "This is an important formula.",
				"exampleZh": "这是一个重要的公式。"
			},
			{
				"id": 3447,
				"en": "foundation",
				"zh": "基础",
				"phonetic": "/ʃən/",
				"example": "I really like the foundation.",
				"exampleZh": "我真的很喜欢这个基础。"
			},
			{
				"id": 3448,
				"en": "fraction",
				"zh": "分数",
				"phonetic": "/ʃən/",
				"example": "The fraction is very useful.",
				"exampleZh": "分数非常有用。"
			},
			{
				"id": 3449,
				"en": "fragile",
				"zh": "脆弱的",
				"phonetic": "/.../",
				"example": "The result is quite fragile.",
				"exampleZh": "结果是相当脆弱的的。"
			},
			{
				"id": 3450,
				"en": "frontier",
				"zh": "边境",
				"phonetic": "/ər/",
				"example": "frontier plays a key role in our life.",
				"exampleZh": "边境在我们的生活中起着关键作用。"
			},
			{
				"id": 3451,
				"en": "fundamental",
				"zh": "基本的",
				"phonetic": "/mənt/",
				"example": "This is very fundamental.",
				"exampleZh": "这非常基本的。"
			},
			{
				"id": 3452,
				"en": "furnish",
				"zh": "提供",
				"phonetic": "/ʃ/",
				"example": "She wants to furnish this task.",
				"exampleZh": "她想提供这个任务。"
			},
			{
				"id": 3453,
				"en": "gene",
				"zh": "基因",
				"phonetic": "/.../",
				"example": "The gene is very useful.",
				"exampleZh": "基因非常有用。"
			},
			{
				"id": 3454,
				"en": "genius",
				"zh": "天才",
				"phonetic": "/.../",
				"example": "Do you understand this genius?",
				"exampleZh": "你理解这个天才吗？"
			},
			{
				"id": 3455,
				"en": "genuine",
				"zh": "真正的",
				"phonetic": "/.../",
				"example": "He found the task genuine.",
				"exampleZh": "他发现这个任务是真正的的。"
			},
			{
				"id": 3456,
				"en": "grace",
				"zh": "优雅",
				"phonetic": "/.../",
				"example": "This is an important grace.",
				"exampleZh": "这是一个重要的优雅。"
			},
			{
				"id": 3457,
				"en": "grant",
				"zh": "授予",
				"phonetic": "/.../",
				"example": "She wants to grant this task.",
				"exampleZh": "她想授予这个任务。"
			},
			{
				"id": 3458,
				"en": "grasp",
				"zh": "抓住",
				"phonetic": "/.../",
				"example": "Let's grasp together.",
				"exampleZh": "让我们一起抓住吧。"
			},
			{
				"id": 3459,
				"en": "gravity",
				"zh": "重力",
				"phonetic": "/.../",
				"example": "Do you understand this gravity?",
				"exampleZh": "你理解这个重力吗？"
			},
			{
				"id": 3460,
				"en": "guarantee",
				"zh": "保证",
				"phonetic": "/iː/",
				"example": "I need to guarantee before the deadline.",
				"exampleZh": "我需要在截止日期前保证。"
			},
			{
				"id": 3461,
				"en": "guidance",
				"zh": "指导",
				"phonetic": "/əns/",
				"example": "This is an important guidance.",
				"exampleZh": "这是一个重要的指导。"
			},
			{
				"id": 3462,
				"en": "habitat",
				"zh": "栖息地",
				"phonetic": "/.../",
				"example": "I really like the habitat.",
				"exampleZh": "我真的很喜欢这个栖息地。"
			},
			{
				"id": 3463,
				"en": "halt",
				"zh": "停止",
				"phonetic": "/.../",
				"example": "Let's halt together.",
				"exampleZh": "让我们一起停止吧。"
			},
			{
				"id": 3464,
				"en": "handy",
				"zh": "方便的",
				"phonetic": "/.../",
				"example": "The result is quite handy.",
				"exampleZh": "结果是相当方便的的。"
			},
			{
				"id": 3465,
				"en": "harsh",
				"zh": "严厉的",
				"phonetic": "/ʃ/",
				"example": "He found the task harsh.",
				"exampleZh": "他发现这个任务是严厉的的。"
			},
			{
				"id": 3466,
				"en": "hatred",
				"zh": "仇恨",
				"phonetic": "/d/",
				"example": "This is an important hatred.",
				"exampleZh": "这是一个重要的仇恨。"
			},
			{
				"id": 3467,
				"en": "hazard",
				"zh": "危险",
				"phonetic": "/.../",
				"example": "I really like the hazard.",
				"exampleZh": "我真的很喜欢这个危险。"
			},
			{
				"id": 3468,
				"en": "heritage",
				"zh": "遗产",
				"phonetic": "/.../",
				"example": "The heritage is very useful.",
				"exampleZh": "遗产非常有用。"
			},
			{
				"id": 3469,
				"en": "hesitate",
				"zh": "犹豫",
				"phonetic": "/.../",
				"example": "They decided to hesitate the plan.",
				"exampleZh": "他们决定犹豫这个计划。"
			},
			{
				"id": 3470,
				"en": "highlight",
				"zh": "突出",
				"phonetic": "/aɪt/",
				"example": "I need to highlight before the deadline.",
				"exampleZh": "我需要在截止日期前突出。"
			},
			{
				"id": 3471,
				"en": "horizon",
				"zh": "地平线",
				"phonetic": "/.../",
				"example": "This is an important horizon.",
				"exampleZh": "这是一个重要的地平线。"
			},
			{
				"id": 3472,
				"en": "horror",
				"zh": "恐怖",
				"phonetic": "/ər/",
				"example": "I really like the horror.",
				"exampleZh": "我真的很喜欢这个恐怖。"
			},
			{
				"id": 3473,
				"en": "hostile",
				"zh": "敌对的",
				"phonetic": "/.../",
				"example": "It's a hostile idea.",
				"exampleZh": "这是一个敌对的的主意。"
			},
			{
				"id": 3474,
				"en": "ideal",
				"zh": "理想的",
				"phonetic": "/iː/",
				"example": "The result is quite ideal.",
				"exampleZh": "结果是相当理想的的。"
			},
			{
				"id": 3475,
				"en": "identify",
				"zh": "识别",
				"phonetic": "/.../",
				"example": "I need to identify before the deadline.",
				"exampleZh": "我需要在截止日期前识别。"
			},
			{
				"id": 3476,
				"en": "ideology",
				"zh": "意识形态",
				"phonetic": "/.../",
				"example": "This is an important ideology.",
				"exampleZh": "这是一个重要的意识形态。"
			},
			{
				"id": 3477,
				"en": "ignorance",
				"zh": "无知",
				"phonetic": "/əns/",
				"example": "I really like the ignorance.",
				"exampleZh": "我真的很喜欢这个无知。"
			},
			{
				"id": 3478,
				"en": "illustrate",
				"zh": "说明",
				"phonetic": "/.../",
				"example": "Let's illustrate together.",
				"exampleZh": "让我们一起说明吧。"
			},
			{
				"id": 3479,
				"en": "image",
				"zh": "形象",
				"phonetic": "/.../",
				"example": "Do you understand this image?",
				"exampleZh": "你理解这个形象吗？"
			},
			{
				"id": 3480,
				"en": "imagination",
				"zh": "想象力",
				"phonetic": "/ʃən/",
				"example": "imagination plays a key role in our life.",
				"exampleZh": "想象力在我们的生活中起着关键作用。"
			},
			{
				"id": 3481,
				"en": "immense",
				"zh": "巨大的",
				"phonetic": "/.../",
				"example": "This is very immense.",
				"exampleZh": "这非常巨大的。"
			},
			{
				"id": 3482,
				"en": "immigrant",
				"zh": "移民",
				"phonetic": "/.../",
				"example": "I really like the immigrant.",
				"exampleZh": "我真的很喜欢这个移民。"
			},
			{
				"id": 3483,
				"en": "immune",
				"zh": "免疫的",
				"phonetic": "/.../",
				"example": "It's a immune idea.",
				"exampleZh": "这是一个免疫的的主意。"
			},
			{
				"id": 3484,
				"en": "implement",
				"zh": "实施",
				"phonetic": "/mənt/",
				"example": "They decided to implement the plan.",
				"exampleZh": "他们决定实施这个计划。"
			},
			{
				"id": 3485,
				"en": "implication",
				"zh": "含义",
				"phonetic": "/ʃən/",
				"example": "implication plays a key role in our life.",
				"exampleZh": "含义在我们的生活中起着关键作用。"
			},
			{
				"id": 3486,
				"en": "impose",
				"zh": "强加",
				"phonetic": "/.../",
				"example": "We should impose more carefully.",
				"exampleZh": "我们应该更仔细地强加。"
			},
			{
				"id": 3487,
				"en": "impulse",
				"zh": "冲动",
				"phonetic": "/.../",
				"example": "I really like the impulse.",
				"exampleZh": "我真的很喜欢这个冲动。"
			},
			{
				"id": 3488,
				"en": "incident",
				"zh": "事件",
				"phonetic": "/.../",
				"example": "The incident is very useful.",
				"exampleZh": "事件非常有用。"
			},
			{
				"id": 3489,
				"en": "index",
				"zh": "索引",
				"phonetic": "/.../",
				"example": "Do you understand this index?",
				"exampleZh": "你理解这个索引吗？"
			},
			{
				"id": 3490,
				"en": "inevitable",
				"zh": "不可避免的",
				"phonetic": "/əbəl/",
				"example": "He found the task inevitable.",
				"exampleZh": "他发现这个任务是不可避免的的。"
			},
			{
				"id": 3491,
				"en": "infant",
				"zh": "婴儿",
				"phonetic": "/.../",
				"example": "This is an important infant.",
				"exampleZh": "这是一个重要的婴儿。"
			},
			{
				"id": 3492,
				"en": "inflation",
				"zh": "通货膨胀",
				"phonetic": "/ʃən/",
				"example": "I really like the inflation.",
				"exampleZh": "我真的很喜欢这个通货膨胀。"
			},
			{
				"id": 3493,
				"en": "initial",
				"zh": "最初的",
				"phonetic": "/ʃəl/",
				"example": "It's a initial idea.",
				"exampleZh": "这是一个最初的的主意。"
			},
			{
				"id": 3494,
				"en": "initiative",
				"zh": "主动权",
				"phonetic": "/.../",
				"example": "Do you understand this initiative?",
				"exampleZh": "你理解这个主动权吗？"
			},
			{
				"id": 3495,
				"en": "innovate",
				"zh": "创新",
				"phonetic": "/.../",
				"example": "I need to innovate before the deadline.",
				"exampleZh": "我需要在截止日期前创新。"
			},
			{
				"id": 3496,
				"en": "input",
				"zh": "输入",
				"phonetic": "/.../",
				"example": "This is an important input.",
				"exampleZh": "这是一个重要的输入。"
			},
			{
				"id": 3497,
				"en": "insight",
				"zh": "洞察",
				"phonetic": "/aɪt/",
				"example": "I really like the insight.",
				"exampleZh": "我真的很喜欢这个洞察。"
			},
			{
				"id": 3498,
				"en": "install",
				"zh": "安装",
				"phonetic": "/.../",
				"example": "Let's install together.",
				"exampleZh": "让我们一起安装吧。"
			},
			{
				"id": 3499,
				"en": "instance",
				"zh": "实例",
				"phonetic": "/əns/",
				"example": "Do you understand this instance?",
				"exampleZh": "你理解这个实例吗？"
			},
			{
				"id": 3500,
				"en": "instinct",
				"zh": "本能",
				"phonetic": "/.../",
				"example": "instinct plays a key role in our life.",
				"exampleZh": "本能在我们的生活中起着关键作用。"
			}
		]
	},
	{
		"id": 3,
		"category": "高中英语",
		"icon": "🎓",
		"words": [
			{
				"id": 3001,
				"en": "institution",
				"zh": "机构",
				"phonetic": "/ʃən/",
				"example": "This is an important institution.",
				"exampleZh": "这是一个重要的机构。"
			},
			{
				"id": 3002,
				"en": "insure",
				"zh": "保险",
				"phonetic": "/ʒər/",
				"example": "She wants to insure this task.",
				"exampleZh": "她想保险这个任务。"
			},
			{
				"id": 3003,
				"en": "integrate",
				"zh": "整合",
				"phonetic": "/.../",
				"example": "Let's integrate together.",
				"exampleZh": "让我们一起整合吧。"
			},
			{
				"id": 3004,
				"en": "intellectual",
				"zh": "智力的",
				"phonetic": "/.../",
				"example": "The result is quite intellectual.",
				"exampleZh": "结果是相当智力的的。"
			},
			{
				"id": 3005,
				"en": "intense",
				"zh": "强烈的",
				"phonetic": "/.../",
				"example": "He found the task intense.",
				"exampleZh": "他发现这个任务是强烈的的。"
			},
			{
				"id": 3006,
				"en": "interact",
				"zh": "互动",
				"phonetic": "/.../",
				"example": "We should interact more carefully.",
				"exampleZh": "我们应该更仔细地互动。"
			},
			{
				"id": 3007,
				"en": "interfere",
				"zh": "干涉",
				"phonetic": "/.../",
				"example": "She wants to interfere this task.",
				"exampleZh": "她想干涉这个任务。"
			},
			{
				"id": 3008,
				"en": "internal",
				"zh": "内部的",
				"phonetic": "/.../",
				"example": "It's a internal idea.",
				"exampleZh": "这是一个内部的的主意。"
			},
			{
				"id": 3009,
				"en": "interpret",
				"zh": "解释",
				"phonetic": "/.../",
				"example": "They decided to interpret the plan.",
				"exampleZh": "他们决定解释这个计划。"
			},
			{
				"id": 3010,
				"en": "interval",
				"zh": "间隔",
				"phonetic": "/.../",
				"example": "interval plays a key role in our life.",
				"exampleZh": "间隔在我们的生活中起着关键作用。"
			},
			{
				"id": 3011,
				"en": "intimate",
				"zh": "亲密的",
				"phonetic": "/.../",
				"example": "This is very intimate.",
				"exampleZh": "这非常亲密的。"
			},
			{
				"id": 3012,
				"en": "invade",
				"zh": "入侵",
				"phonetic": "/.../",
				"example": "She wants to invade this task.",
				"exampleZh": "她想入侵这个任务。"
			},
			{
				"id": 3013,
				"en": "investigate",
				"zh": "调查",
				"phonetic": "/.../",
				"example": "Let's investigate together.",
				"exampleZh": "让我们一起调查吧。"
			},
			{
				"id": 3014,
				"en": "invisible",
				"zh": "看不见的",
				"phonetic": "/ɪbəl/",
				"example": "The result is quite invisible.",
				"exampleZh": "结果是相当看不见的的。"
			},
			{
				"id": 3015,
				"en": "isolate",
				"zh": "孤立",
				"phonetic": "/.../",
				"example": "I need to isolate before the deadline.",
				"exampleZh": "我需要在截止日期前孤立。"
			},
			{
				"id": 3016,
				"en": "joint",
				"zh": "关节",
				"phonetic": "/ɔɪ/",
				"example": "This is an important joint.",
				"exampleZh": "这是一个重要的关节。"
			},
			{
				"id": 3017,
				"en": "journal",
				"zh": "期刊",
				"phonetic": "/aʊ/",
				"example": "I really like the journal.",
				"exampleZh": "我真的很喜欢这个期刊。"
			},
			{
				"id": 3018,
				"en": "jungle",
				"zh": "丛林",
				"phonetic": "/.../",
				"example": "The jungle is very useful.",
				"exampleZh": "丛林非常有用。"
			},
			{
				"id": 3019,
				"en": "justify",
				"zh": "证明合理",
				"phonetic": "/.../",
				"example": "They decided to justify the plan.",
				"exampleZh": "他们决定证明合理这个计划。"
			},
			{
				"id": 3020,
				"en": "kit",
				"zh": "工具包",
				"phonetic": "/.../",
				"example": "kit plays a key role in our life.",
				"exampleZh": "工具包在我们的生活中起着关键作用。"
			},
			{
				"id": 3021,
				"en": "landscape",
				"zh": "风景",
				"phonetic": "/.../",
				"example": "This is an important landscape.",
				"exampleZh": "这是一个重要的风景。"
			},
			{
				"id": 3022,
				"en": "lane",
				"zh": "小巷",
				"phonetic": "/.../",
				"example": "I really like the lane.",
				"exampleZh": "我真的很喜欢这个小巷。"
			},
			{
				"id": 3023,
				"en": "laundry",
				"zh": "洗衣",
				"phonetic": "/ɔː/",
				"example": "The laundry is very useful.",
				"exampleZh": "洗衣非常有用。"
			},
			{
				"id": 3024,
				"en": "lease",
				"zh": "租约",
				"phonetic": "/iː/",
				"example": "Do you understand this lease?",
				"exampleZh": "你理解这个租约吗？"
			},
			{
				"id": 3025,
				"en": "legacy",
				"zh": "遗产",
				"phonetic": "/.../",
				"example": "legacy plays a key role in our life.",
				"exampleZh": "遗产在我们的生活中起着关键作用。"
			},
			{
				"id": 3026,
				"en": "legend",
				"zh": "传说",
				"phonetic": "/.../",
				"example": "This is an important legend.",
				"exampleZh": "这是一个重要的传说。"
			},
			{
				"id": 3027,
				"en": "legislation",
				"zh": "立法",
				"phonetic": "/ʃən/",
				"example": "I really like the legislation.",
				"exampleZh": "我真的很喜欢这个立法。"
			},
			{
				"id": 3028,
				"en": "liberal",
				"zh": "自由的",
				"phonetic": "/.../",
				"example": "It's a liberal idea.",
				"exampleZh": "这是一个自由的的主意。"
			},
			{
				"id": 3029,
				"en": "likewise",
				"zh": "同样地",
				"phonetic": "/.../",
				"example": "They worked likewise on the project.",
				"exampleZh": "他们同样地地在这个项目上工作。"
			},
			{
				"id": 3030,
				"en": "limitation",
				"zh": "限制",
				"phonetic": "/ʃən/",
				"example": "limitation plays a key role in our life.",
				"exampleZh": "限制在我们的生活中起着关键作用。"
			},
			{
				"id": 3031,
				"en": "loan",
				"zh": "贷款",
				"phonetic": "/oʊ/",
				"example": "This is an important loan.",
				"exampleZh": "这是一个重要的贷款。"
			},
			{
				"id": 3032,
				"en": "lodge",
				"zh": "住宿",
				"phonetic": "/.../",
				"example": "She wants to lodge this task.",
				"exampleZh": "她想住宿这个任务。"
			},
			{
				"id": 3033,
				"en": "logic",
				"zh": "逻辑",
				"phonetic": "/.../",
				"example": "The logic is very useful.",
				"exampleZh": "逻辑非常有用。"
			},
			{
				"id": 3034,
				"en": "lord",
				"zh": "领主",
				"phonetic": "/.../",
				"example": "Do you understand this lord?",
				"exampleZh": "你理解这个领主吗？"
			},
			{
				"id": 3035,
				"en": "lump",
				"zh": "块",
				"phonetic": "/.../",
				"example": "lump plays a key role in our life.",
				"exampleZh": "块在我们的生活中起着关键作用。"
			},
			{
				"id": 3036,
				"en": "luxury",
				"zh": "奢侈",
				"phonetic": "/.../",
				"example": "This is an important luxury.",
				"exampleZh": "这是一个重要的奢侈。"
			},
			{
				"id": 3037,
				"en": "magnetic",
				"zh": "磁的",
				"phonetic": "/.../",
				"example": "She looks magnetic today.",
				"exampleZh": "她今天看起来很磁的。"
			},
			{
				"id": 3038,
				"en": "magnificent",
				"zh": "壮丽的",
				"phonetic": "/.../",
				"example": "It's a magnificent idea.",
				"exampleZh": "这是一个壮丽的的主意。"
			},
			{
				"id": 3039,
				"en": "maintain",
				"zh": "维持",
				"phonetic": "/eɪ/",
				"example": "They decided to maintain the plan.",
				"exampleZh": "他们决定维持这个计划。"
			},
			{
				"id": 3040,
				"en": "manifest",
				"zh": "表明",
				"phonetic": "/.../",
				"example": "I need to manifest before the deadline.",
				"exampleZh": "我需要在截止日期前表明。"
			},
			{
				"id": 3041,
				"en": "manipulate",
				"zh": "操纵",
				"phonetic": "/.../",
				"example": "We should manipulate more carefully.",
				"exampleZh": "我们应该更仔细地操纵。"
			},
			{
				"id": 3042,
				"en": "manual",
				"zh": "手册",
				"phonetic": "/.../",
				"example": "I really like the manual.",
				"exampleZh": "我真的很喜欢这个手册。"
			},
			{
				"id": 3043,
				"en": "margin",
				"zh": "边缘",
				"phonetic": "/.../",
				"example": "The margin is very useful.",
				"exampleZh": "边缘非常有用。"
			},
			{
				"id": 3044,
				"en": "marine",
				"zh": "海洋的",
				"phonetic": "/.../",
				"example": "The result is quite marine.",
				"exampleZh": "结果是相当海洋的的。"
			},
			{
				"id": 3045,
				"en": "massive",
				"zh": "巨大的",
				"phonetic": "/.../",
				"example": "He found the task massive.",
				"exampleZh": "他发现这个任务是巨大的的。"
			},
			{
				"id": 3046,
				"en": "mature",
				"zh": "成熟的",
				"phonetic": "/tʃər/",
				"example": "This is very mature.",
				"exampleZh": "这非常成熟的。"
			},
			{
				"id": 3047,
				"en": "mechanism",
				"zh": "机制",
				"phonetic": "/.../",
				"example": "I really like the mechanism.",
				"exampleZh": "我真的很喜欢这个机制。"
			},
			{
				"id": 3048,
				"en": "medium",
				"zh": "媒介",
				"phonetic": "/.../",
				"example": "The medium is very useful.",
				"exampleZh": "媒介非常有用。"
			},
			{
				"id": 3049,
				"en": "memorial",
				"zh": "纪念的",
				"phonetic": "/.../",
				"example": "The result is quite memorial.",
				"exampleZh": "结果是相当纪念的的。"
			},
			{
				"id": 3050,
				"en": "military",
				"zh": "军事的",
				"phonetic": "/.../",
				"example": "He found the task military.",
				"exampleZh": "他发现这个任务是军事的的。"
			},
			{
				"id": 3051,
				"en": "mineral",
				"zh": "矿物",
				"phonetic": "/.../",
				"example": "This is an important mineral.",
				"exampleZh": "这是一个重要的矿物。"
			},
			{
				"id": 3052,
				"en": "minimum",
				"zh": "最小值",
				"phonetic": "/.../",
				"example": "I really like the minimum.",
				"exampleZh": "我真的很喜欢这个最小值。"
			},
			{
				"id": 3053,
				"en": "ministry",
				"zh": "部",
				"phonetic": "/.../",
				"example": "The ministry is very useful.",
				"exampleZh": "部非常有用。"
			},
			{
				"id": 3054,
				"en": "modest",
				"zh": "谦虚的",
				"phonetic": "/.../",
				"example": "The result is quite modest.",
				"exampleZh": "结果是相当谦虚的的。"
			},
			{
				"id": 3055,
				"en": "monument",
				"zh": "纪念碑",
				"phonetic": "/mənt/",
				"example": "monument plays a key role in our life.",
				"exampleZh": "纪念碑在我们的生活中起着关键作用。"
			},
			{
				"id": 3056,
				"en": "mortal",
				"zh": "凡人的",
				"phonetic": "/.../",
				"example": "This is very mortal.",
				"exampleZh": "这非常凡人的。"
			},
			{
				"id": 3057,
				"en": "motion",
				"zh": "运动",
				"phonetic": "/ʃən/",
				"example": "I really like the motion.",
				"exampleZh": "我真的很喜欢这个运动。"
			},
			{
				"id": 3058,
				"en": "motivate",
				"zh": "激励",
				"phonetic": "/.../",
				"example": "Let's motivate together.",
				"exampleZh": "让我们一起激励吧。"
			},
			{
				"id": 3059,
				"en": "motive",
				"zh": "动机",
				"phonetic": "/.../",
				"example": "Do you understand this motive?",
				"exampleZh": "你理解这个动机吗？"
			},
			{
				"id": 3060,
				"en": "municipal",
				"zh": "市政的",
				"phonetic": "/.../",
				"example": "He found the task municipal.",
				"exampleZh": "他发现这个任务是市政的的。"
			},
			{
				"id": 3061,
				"en": "mutual",
				"zh": "相互的",
				"phonetic": "/.../",
				"example": "This is very mutual.",
				"exampleZh": "这非常相互的。"
			},
			{
				"id": 3062,
				"en": "myth",
				"zh": "神话",
				"phonetic": "/θ/",
				"example": "I really like the myth.",
				"exampleZh": "我真的很喜欢这个神话。"
			},
			{
				"id": 3063,
				"en": "narrative",
				"zh": "叙述",
				"phonetic": "/.../",
				"example": "The narrative is very useful.",
				"exampleZh": "叙述非常有用。"
			},
			{
				"id": 3064,
				"en": "nasty",
				"zh": "令人厌恶的",
				"phonetic": "/.../",
				"example": "The result is quite nasty.",
				"exampleZh": "结果是相当令人厌恶的的。"
			},
			{
				"id": 3065,
				"en": "negative",
				"zh": "消极的",
				"phonetic": "/.../",
				"example": "He found the task negative.",
				"exampleZh": "他发现这个任务是消极的的。"
			},
			{
				"id": 3066,
				"en": "neglect",
				"zh": "忽视",
				"phonetic": "/.../",
				"example": "We should neglect more carefully.",
				"exampleZh": "我们应该更仔细地忽视。"
			},
			{
				"id": 3067,
				"en": "neutral",
				"zh": "中立的",
				"phonetic": "/.../",
				"example": "She looks neutral today.",
				"exampleZh": "她今天看起来很中立的。"
			},
			{
				"id": 3068,
				"en": "nevertheless",
				"zh": "然而",
				"phonetic": "/ləs/",
				"example": "They worked nevertheless on the project.",
				"exampleZh": "他们然而地在这个项目上工作。"
			},
			{
				"id": 3069,
				"en": "nominate",
				"zh": "提名",
				"phonetic": "/.../",
				"example": "They decided to nominate the plan.",
				"exampleZh": "他们决定提名这个计划。"
			},
			{
				"id": 3070,
				"en": "notion",
				"zh": "概念",
				"phonetic": "/ʃən/",
				"example": "notion plays a key role in our life.",
				"exampleZh": "概念在我们的生活中起着关键作用。"
			},
			{
				"id": 3071,
				"en": "oblige",
				"zh": "迫使",
				"phonetic": "/.../",
				"example": "We should oblige more carefully.",
				"exampleZh": "我们应该更仔细地迫使。"
			},
			{
				"id": 3072,
				"en": "obstacle",
				"zh": "障碍",
				"phonetic": "/.../",
				"example": "I really like the obstacle.",
				"exampleZh": "我真的很喜欢这个障碍。"
			},
			{
				"id": 3073,
				"en": "offense",
				"zh": "冒犯",
				"phonetic": "/.../",
				"example": "The offense is very useful.",
				"exampleZh": "冒犯非常有用。"
			},
			{
				"id": 3074,
				"en": "opponent",
				"zh": "对手",
				"phonetic": "/.../",
				"example": "Do you understand this opponent?",
				"exampleZh": "你理解这个对手吗？"
			},
			{
				"id": 3075,
				"en": "optimistic",
				"zh": "乐观的",
				"phonetic": "/.../",
				"example": "He found the task optimistic.",
				"exampleZh": "他发现这个任务是乐观的的。"
			},
			{
				"id": 3076,
				"en": "orbit",
				"zh": "轨道",
				"phonetic": "/.../",
				"example": "This is an important orbit.",
				"exampleZh": "这是一个重要的轨道。"
			},
			{
				"id": 3077,
				"en": "organ",
				"zh": "器官",
				"phonetic": "/.../",
				"example": "I really like the organ.",
				"exampleZh": "我真的很喜欢这个器官。"
			},
			{
				"id": 3078,
				"en": "overlook",
				"zh": "俯瞰",
				"phonetic": "/uː/",
				"example": "Let's overlook together.",
				"exampleZh": "让我们一起俯瞰吧。"
			},
			{
				"id": 3079,
				"en": "overwhelm",
				"zh": "压倒",
				"phonetic": "/w/",
				"example": "They decided to overwhelm the plan.",
				"exampleZh": "他们决定压倒这个计划。"
			},
			{
				"id": 3080,
				"en": "ownership",
				"zh": "所有权",
				"phonetic": "/aʊ/",
				"example": "ownership plays a key role in our life.",
				"exampleZh": "所有权在我们的生活中起着关键作用。"
			},
			{
				"id": 3081,
				"en": "panel",
				"zh": "面板",
				"phonetic": "/.../",
				"example": "This is an important panel.",
				"exampleZh": "这是一个重要的面板。"
			},
			{
				"id": 3082,
				"en": "paradox",
				"zh": "悖论",
				"phonetic": "/.../",
				"example": "I really like the paradox.",
				"exampleZh": "我真的很喜欢这个悖论。"
			},
			{
				"id": 3083,
				"en": "parallel",
				"zh": "平行的",
				"phonetic": "/.../",
				"example": "It's a parallel idea.",
				"exampleZh": "这是一个平行的的主意。"
			},
			{
				"id": 3084,
				"en": "parcel",
				"zh": "包裹",
				"phonetic": "/.../",
				"example": "Do you understand this parcel?",
				"exampleZh": "你理解这个包裹吗？"
			},
			{
				"id": 3085,
				"en": "parliament",
				"zh": "议会",
				"phonetic": "/mənt/",
				"example": "parliament plays a key role in our life.",
				"exampleZh": "议会在我们的生活中起着关键作用。"
			},
			{
				"id": 3086,
				"en": "passion",
				"zh": "热情",
				"phonetic": "/ʃən/",
				"example": "This is an important passion.",
				"exampleZh": "这是一个重要的热情。"
			},
			{
				"id": 3087,
				"en": "penalty",
				"zh": "惩罚",
				"phonetic": "/.../",
				"example": "I really like the penalty.",
				"exampleZh": "我真的很喜欢这个惩罚。"
			},
			{
				"id": 3088,
				"en": "perceive",
				"zh": "感知",
				"phonetic": "/.../",
				"example": "Let's perceive together.",
				"exampleZh": "让我们一起感知吧。"
			},
			{
				"id": 3089,
				"en": "permanent",
				"zh": "永久的",
				"phonetic": "/.../",
				"example": "The result is quite permanent.",
				"exampleZh": "结果是相当永久的的。"
			},
			{
				"id": 3090,
				"en": "persist",
				"zh": "坚持",
				"phonetic": "/.../",
				"example": "I need to persist before the deadline.",
				"exampleZh": "我需要在截止日期前坚持。"
			},
			{
				"id": 3091,
				"en": "perspective",
				"zh": "观点",
				"phonetic": "/.../",
				"example": "This is an important perspective.",
				"exampleZh": "这是一个重要的观点。"
			},
			{
				"id": 3092,
				"en": "phase",
				"zh": "阶段",
				"phonetic": "/.../",
				"example": "I really like the phase.",
				"exampleZh": "我真的很喜欢这个阶段。"
			},
			{
				"id": 3093,
				"en": "pillar",
				"zh": "柱",
				"phonetic": "/ɑːr/",
				"example": "The pillar is very useful.",
				"exampleZh": "柱非常有用。"
			},
			{
				"id": 3094,
				"en": "pioneer",
				"zh": "先驱",
				"phonetic": "/ər/",
				"example": "Do you understand this pioneer?",
				"exampleZh": "你理解这个先驱吗？"
			},
			{
				"id": 3095,
				"en": "platform",
				"zh": "平台",
				"phonetic": "/.../",
				"example": "platform plays a key role in our life.",
				"exampleZh": "平台在我们的生活中起着关键作用。"
			},
			{
				"id": 3096,
				"en": "pledge",
				"zh": "誓言",
				"phonetic": "/.../",
				"example": "This is an important pledge.",
				"exampleZh": "这是一个重要的誓言。"
			},
			{
				"id": 3097,
				"en": "plot",
				"zh": "情节",
				"phonetic": "/.../",
				"example": "I really like the plot.",
				"exampleZh": "我真的很喜欢这个情节。"
			},
			{
				"id": 3098,
				"en": "plunge",
				"zh": "跳入",
				"phonetic": "/.../",
				"example": "Let's plunge together.",
				"exampleZh": "让我们一起跳入吧。"
			},
			{
				"id": 3099,
				"en": "pole",
				"zh": "杆",
				"phonetic": "/.../",
				"example": "Do you understand this pole?",
				"exampleZh": "你理解这个杆吗？"
			},
			{
				"id": 3100,
				"en": "poll",
				"zh": "民意调查",
				"phonetic": "/.../",
				"example": "poll plays a key role in our life.",
				"exampleZh": "民意调查在我们的生活中起着关键作用。"
			},
			{
				"id": 3101,
				"en": "portion",
				"zh": "部分",
				"phonetic": "/ʃən/",
				"example": "This is an important portion.",
				"exampleZh": "这是一个重要的部分。"
			},
			{
				"id": 3102,
				"en": "portray",
				"zh": "描绘",
				"phonetic": "/eɪ/",
				"example": "She wants to portray this task.",
				"exampleZh": "她想描绘这个任务。"
			},
			{
				"id": 3103,
				"en": "pose",
				"zh": "姿势",
				"phonetic": "/.../",
				"example": "Let's pose together.",
				"exampleZh": "让我们一起姿势吧。"
			},
			{
				"id": 3104,
				"en": "poverty",
				"zh": "贫困",
				"phonetic": "/.../",
				"example": "Do you understand this poverty?",
				"exampleZh": "你理解这个贫困吗？"
			},
			{
				"id": 3105,
				"en": "precaution",
				"zh": "预防",
				"phonetic": "/ʃən/",
				"example": "precaution plays a key role in our life.",
				"exampleZh": "预防在我们的生活中起着关键作用。"
			},
			{
				"id": 3106,
				"en": "precede",
				"zh": "先于",
				"phonetic": "/.../",
				"example": "We should precede more carefully.",
				"exampleZh": "我们应该更仔细地先于。"
			},
			{
				"id": 3107,
				"en": "precise",
				"zh": "精确的",
				"phonetic": "/.../",
				"example": "She looks precise today.",
				"exampleZh": "她今天看起来很精确的。"
			},
			{
				"id": 3108,
				"en": "prejudice",
				"zh": "偏见",
				"phonetic": "/.../",
				"example": "The prejudice is very useful.",
				"exampleZh": "偏见非常有用。"
			},
			{
				"id": 3109,
				"en": "premier",
				"zh": "首相",
				"phonetic": "/ər/",
				"example": "Do you understand this premier?",
				"exampleZh": "你理解这个首相吗？"
			},
			{
				"id": 3110,
				"en": "premise",
				"zh": "前提",
				"phonetic": "/.../",
				"example": "premise plays a key role in our life.",
				"exampleZh": "前提在我们的生活中起着关键作用。"
			},
			{
				"id": 3111,
				"en": "premium",
				"zh": "保险费",
				"phonetic": "/.../",
				"example": "This is an important premium.",
				"exampleZh": "这是一个重要的保险费。"
			},
			{
				"id": 3112,
				"en": "preserve",
				"zh": "保存",
				"phonetic": "/.../",
				"example": "She wants to preserve this task.",
				"exampleZh": "她想保存这个任务。"
			},
			{
				"id": 3113,
				"en": "preside",
				"zh": "主持",
				"phonetic": "/.../",
				"example": "Let's preside together.",
				"exampleZh": "让我们一起主持吧。"
			},
			{
				"id": 3114,
				"en": "presume",
				"zh": "假定",
				"phonetic": "/.../",
				"example": "They decided to presume the plan.",
				"exampleZh": "他们决定假定这个计划。"
			},
			{
				"id": 3115,
				"en": "prevail",
				"zh": "盛行",
				"phonetic": "/eɪ/",
				"example": "I need to prevail before the deadline.",
				"exampleZh": "我需要在截止日期前盛行。"
			},
			{
				"id": 3116,
				"en": "primitive",
				"zh": "原始的",
				"phonetic": "/.../",
				"example": "This is very primitive.",
				"exampleZh": "这非常原始的。"
			},
			{
				"id": 3117,
				"en": "priority",
				"zh": "优先",
				"phonetic": "/.../",
				"example": "I really like the priority.",
				"exampleZh": "我真的很喜欢这个优先。"
			},
			{
				"id": 3118,
				"en": "procedure",
				"zh": "程序",
				"phonetic": "/dʒər/",
				"example": "The procedure is very useful.",
				"exampleZh": "程序非常有用。"
			},
			{
				"id": 3119,
				"en": "proceed",
				"zh": "继续",
				"phonetic": "/d/",
				"example": "They decided to proceed the plan.",
				"exampleZh": "他们决定继续这个计划。"
			},
			{
				"id": 3120,
				"en": "proclaim",
				"zh": "宣告",
				"phonetic": "/eɪ/",
				"example": "I need to proclaim before the deadline.",
				"exampleZh": "我需要在截止日期前宣告。"
			},
			{
				"id": 3121,
				"en": "profile",
				"zh": "侧面",
				"phonetic": "/.../",
				"example": "This is an important profile.",
				"exampleZh": "这是一个重要的侧面。"
			},
			{
				"id": 3122,
				"en": "profound",
				"zh": "深刻的",
				"phonetic": "/aʊ/",
				"example": "She looks profound today.",
				"exampleZh": "她今天看起来很深刻的。"
			},
			{
				"id": 3123,
				"en": "prohibit",
				"zh": "禁止",
				"phonetic": "/.../",
				"example": "Let's prohibit together.",
				"exampleZh": "让我们一起禁止吧。"
			},
			{
				"id": 3124,
				"en": "prominent",
				"zh": "突出的",
				"phonetic": "/.../",
				"example": "The result is quite prominent.",
				"exampleZh": "结果是相当突出的的。"
			},
			{
				"id": 3125,
				"en": "prompt",
				"zh": "提示",
				"phonetic": "/.../",
				"example": "I need to prompt before the deadline.",
				"exampleZh": "我需要在截止日期前提示。"
			},
			{
				"id": 3126,
				"en": "propaganda",
				"zh": "宣传",
				"phonetic": "/.../",
				"example": "This is an important propaganda.",
				"exampleZh": "这是一个重要的宣传。"
			},
			{
				"id": 3127,
				"en": "proportion",
				"zh": "比例",
				"phonetic": "/ʃən/",
				"example": "I really like the proportion.",
				"exampleZh": "我真的很喜欢这个比例。"
			},
			{
				"id": 3128,
				"en": "proposal",
				"zh": "建议",
				"phonetic": "/.../",
				"example": "The proposal is very useful.",
				"exampleZh": "建议非常有用。"
			},
			{
				"id": 3129,
				"en": "prospect",
				"zh": "前景",
				"phonetic": "/.../",
				"example": "Do you understand this prospect?",
				"exampleZh": "你理解这个前景吗？"
			},
			{
				"id": 3130,
				"en": "prosperity",
				"zh": "繁荣",
				"phonetic": "/.../",
				"example": "prosperity plays a key role in our life.",
				"exampleZh": "繁荣在我们的生活中起着关键作用。"
			},
			{
				"id": 3131,
				"en": "protein",
				"zh": "蛋白质",
				"phonetic": "/.../",
				"example": "This is an important protein.",
				"exampleZh": "这是一个重要的蛋白质。"
			},
			{
				"id": 3132,
				"en": "protest",
				"zh": "抗议",
				"phonetic": "/.../",
				"example": "She wants to protest this task.",
				"exampleZh": "她想抗议这个任务。"
			},
			{
				"id": 3133,
				"en": "provision",
				"zh": "规定",
				"phonetic": "/ʒən/",
				"example": "The provision is very useful.",
				"exampleZh": "规定非常有用。"
			},
			{
				"id": 3134,
				"en": "publication",
				"zh": "出版物",
				"phonetic": "/ʃən/",
				"example": "Do you understand this publication?",
				"exampleZh": "你理解这个出版物吗？"
			},
			{
				"id": 3135,
				"en": "publicity",
				"zh": "公众",
				"phonetic": "/.../",
				"example": "publicity plays a key role in our life.",
				"exampleZh": "公众在我们的生活中起着关键作用。"
			},
			{
				"id": 3136,
				"en": "pump",
				"zh": "泵",
				"phonetic": "/.../",
				"example": "This is an important pump.",
				"exampleZh": "这是一个重要的泵。"
			},
			{
				"id": 3137,
				"en": "punctual",
				"zh": "准时的",
				"phonetic": "/.../",
				"example": "She looks punctual today.",
				"exampleZh": "她今天看起来很准时的。"
			},
			{
				"id": 3138,
				"en": "purchase",
				"zh": "购买",
				"phonetic": "/.../",
				"example": "Let's purchase together.",
				"exampleZh": "让我们一起购买吧。"
			},
			{
				"id": 3139,
				"en": "pursue",
				"zh": "追求",
				"phonetic": "/.../",
				"example": "They decided to pursue the plan.",
				"exampleZh": "他们决定追求这个计划。"
			},
			{
				"id": 3140,
				"en": "qualify",
				"zh": "使合格",
				"phonetic": "/kw/",
				"example": "I need to qualify before the deadline.",
				"exampleZh": "我需要在截止日期前使合格。"
			},
			{
				"id": 3141,
				"en": "quote",
				"zh": "引用",
				"phonetic": "/kw/",
				"example": "We should quote more carefully.",
				"exampleZh": "我们应该更仔细地引用。"
			},
			{
				"id": 3142,
				"en": "racial",
				"zh": "种族的",
				"phonetic": "/ʃəl/",
				"example": "She looks racial today.",
				"exampleZh": "她今天看起来很种族的。"
			},
			{
				"id": 3143,
				"en": "radiation",
				"zh": "辐射",
				"phonetic": "/ʃən/",
				"example": "The radiation is very useful.",
				"exampleZh": "辐射非常有用。"
			},
			{
				"id": 3144,
				"en": "radical",
				"zh": "激进的",
				"phonetic": "/.../",
				"example": "The result is quite radical.",
				"exampleZh": "结果是相当激进的的。"
			},
			{
				"id": 3145,
				"en": "random",
				"zh": "随机的",
				"phonetic": "/.../",
				"example": "He found the task random.",
				"exampleZh": "他发现这个任务是随机的的。"
			},
			{
				"id": 3146,
				"en": "range",
				"zh": "范围",
				"phonetic": "/.../",
				"example": "This is an important range.",
				"exampleZh": "这是一个重要的范围。"
			},
			{
				"id": 3147,
				"en": "rank",
				"zh": "等级",
				"phonetic": "/.../",
				"example": "I really like the rank.",
				"exampleZh": "我真的很喜欢这个等级。"
			},
			{
				"id": 3148,
				"en": "ratio",
				"zh": "比率",
				"phonetic": "/.../",
				"example": "The ratio is very useful.",
				"exampleZh": "比率非常有用。"
			},
			{
				"id": 3149,
				"en": "rational",
				"zh": "理性的",
				"phonetic": "/ʃən/",
				"example": "The result is quite rational.",
				"exampleZh": "结果是相当理性的的。"
			},
			{
				"id": 3150,
				"en": "rebel",
				"zh": "反叛者",
				"phonetic": "/.../",
				"example": "rebel plays a key role in our life.",
				"exampleZh": "反叛者在我们的生活中起着关键作用。"
			},
			{
				"id": 3151,
				"en": "recipe",
				"zh": "食谱",
				"phonetic": "/.../",
				"example": "This is an important recipe.",
				"exampleZh": "这是一个重要的食谱。"
			},
			{
				"id": 3152,
				"en": "reckon",
				"zh": "认为",
				"phonetic": "/.../",
				"example": "She wants to reckon this task.",
				"exampleZh": "她想认为这个任务。"
			},
			{
				"id": 3153,
				"en": "recognition",
				"zh": "认可",
				"phonetic": "/ʃən/",
				"example": "The recognition is very useful.",
				"exampleZh": "认可非常有用。"
			},
			{
				"id": 3154,
				"en": "reconcile",
				"zh": "调和",
				"phonetic": "/.../",
				"example": "They decided to reconcile the plan.",
				"exampleZh": "他们决定调和这个计划。"
			},
			{
				"id": 3155,
				"en": "recruit",
				"zh": "招募",
				"phonetic": "/.../",
				"example": "I need to recruit before the deadline.",
				"exampleZh": "我需要在截止日期前招募。"
			},
			{
				"id": 3156,
				"en": "reduction",
				"zh": "减少",
				"phonetic": "/ʃən/",
				"example": "This is an important reduction.",
				"exampleZh": "这是一个重要的减少。"
			},
			{
				"id": 3157,
				"en": "reference",
				"zh": "参考",
				"phonetic": "/əns/",
				"example": "I really like the reference.",
				"exampleZh": "我真的很喜欢这个参考。"
			},
			{
				"id": 3158,
				"en": "refine",
				"zh": "精炼",
				"phonetic": "/.../",
				"example": "Let's refine together.",
				"exampleZh": "让我们一起精炼吧。"
			},
			{
				"id": 3159,
				"en": "reflection",
				"zh": "反映",
				"phonetic": "/ʃən/",
				"example": "Do you understand this reflection?",
				"exampleZh": "你理解这个反映吗？"
			},
			{
				"id": 3160,
				"en": "regime",
				"zh": "政权",
				"phonetic": "/.../",
				"example": "regime plays a key role in our life.",
				"exampleZh": "政权在我们的生活中起着关键作用。"
			},
			{
				"id": 3161,
				"en": "register",
				"zh": "登记",
				"phonetic": "/ər/",
				"example": "We should register more carefully.",
				"exampleZh": "我们应该更仔细地登记。"
			},
			{
				"id": 3162,
				"en": "regulate",
				"zh": "调节",
				"phonetic": "/.../",
				"example": "She wants to regulate this task.",
				"exampleZh": "她想调节这个任务。"
			},
			{
				"id": 3163,
				"en": "reinforce",
				"zh": "加强",
				"phonetic": "/.../",
				"example": "Let's reinforce together.",
				"exampleZh": "让我们一起加强吧。"
			},
			{
				"id": 3164,
				"en": "release",
				"zh": "释放",
				"phonetic": "/iː/",
				"example": "They decided to release the plan.",
				"exampleZh": "他们决定释放这个计划。"
			},
			{
				"id": 3165,
				"en": "relevant",
				"zh": "相关的",
				"phonetic": "/.../",
				"example": "He found the task relevant.",
				"exampleZh": "他发现这个任务是相关的的。"
			},
			{
				"id": 3166,
				"en": "relieve",
				"zh": "缓解",
				"phonetic": "/.../",
				"example": "We should relieve more carefully.",
				"exampleZh": "我们应该更仔细地缓解。"
			},
			{
				"id": 3167,
				"en": "reluctant",
				"zh": "不情愿的",
				"phonetic": "/.../",
				"example": "She looks reluctant today.",
				"exampleZh": "她今天看起来很不情愿的。"
			},
			{
				"id": 3168,
				"en": "remedy",
				"zh": "补救",
				"phonetic": "/.../",
				"example": "The remedy is very useful.",
				"exampleZh": "补救非常有用。"
			},
			{
				"id": 3169,
				"en": "render",
				"zh": "使成为",
				"phonetic": "/ər/",
				"example": "They decided to render the plan.",
				"exampleZh": "他们决定使成为这个计划。"
			},
			{
				"id": 3170,
				"en": "renew",
				"zh": "更新",
				"phonetic": "/.../",
				"example": "I need to renew before the deadline.",
				"exampleZh": "我需要在截止日期前更新。"
			},
			{
				"id": 3171,
				"en": "reproduce",
				"zh": "复制",
				"phonetic": "/.../",
				"example": "We should reproduce more carefully.",
				"exampleZh": "我们应该更仔细地复制。"
			},
			{
				"id": 3172,
				"en": "reputation",
				"zh": "名声",
				"phonetic": "/ʃən/",
				"example": "I really like the reputation.",
				"exampleZh": "我真的很喜欢这个名声。"
			},
			{
				"id": 3173,
				"en": "resemble",
				"zh": "相似",
				"phonetic": "/.../",
				"example": "Let's resemble together.",
				"exampleZh": "让我们一起相似吧。"
			},
			{
				"id": 3174,
				"en": "resent",
				"zh": "怨恨",
				"phonetic": "/.../",
				"example": "They decided to resent the plan.",
				"exampleZh": "他们决定怨恨这个计划。"
			},
			{
				"id": 3175,
				"en": "residence",
				"zh": "住所",
				"phonetic": "/əns/",
				"example": "residence plays a key role in our life.",
				"exampleZh": "住所在我们的生活中起着关键作用。"
			},
			{
				"id": 3176,
				"en": "resign",
				"zh": "辞职",
				"phonetic": "/.../",
				"example": "We should resign more carefully.",
				"exampleZh": "我们应该更仔细地辞职。"
			},
			{
				"id": 3177,
				"en": "resist",
				"zh": "抵抗",
				"phonetic": "/.../",
				"example": "She wants to resist this task.",
				"exampleZh": "她想抵抗这个任务。"
			},
			{
				"id": 3178,
				"en": "resolution",
				"zh": "决心",
				"phonetic": "/ʃən/",
				"example": "The resolution is very useful.",
				"exampleZh": "决心非常有用。"
			},
			{
				"id": 3179,
				"en": "resolve",
				"zh": "解决",
				"phonetic": "/.../",
				"example": "They decided to resolve the plan.",
				"exampleZh": "他们决定解决这个计划。"
			},
			{
				"id": 3180,
				"en": "resort",
				"zh": "度假地",
				"phonetic": "/.../",
				"example": "resort plays a key role in our life.",
				"exampleZh": "度假地在我们的生活中起着关键作用。"
			},
			{
				"id": 3181,
				"en": "resource",
				"zh": "资源",
				"phonetic": "/aʊ/",
				"example": "This is an important resource.",
				"exampleZh": "这是一个重要的资源。"
			},
			{
				"id": 3182,
				"en": "restore",
				"zh": "恢复",
				"phonetic": "/.../",
				"example": "She wants to restore this task.",
				"exampleZh": "她想恢复这个任务。"
			},
			{
				"id": 3183,
				"en": "restrain",
				"zh": "抑制",
				"phonetic": "/eɪ/",
				"example": "Let's restrain together.",
				"exampleZh": "让我们一起抑制吧。"
			},
			{
				"id": 3184,
				"en": "restrict",
				"zh": "限制",
				"phonetic": "/.../",
				"example": "They decided to restrict the plan.",
				"exampleZh": "他们决定限制这个计划。"
			},
			{
				"id": 3185,
				"en": "resume",
				"zh": "继续",
				"phonetic": "/.../",
				"example": "I need to resume before the deadline.",
				"exampleZh": "我需要在截止日期前继续。"
			},
			{
				"id": 3186,
				"en": "retail",
				"zh": "零售",
				"phonetic": "/eɪ/",
				"example": "This is an important retail.",
				"exampleZh": "这是一个重要的零售。"
			},
			{
				"id": 3187,
				"en": "retain",
				"zh": "保留",
				"phonetic": "/eɪ/",
				"example": "She wants to retain this task.",
				"exampleZh": "她想保留这个任务。"
			},
			{
				"id": 3188,
				"en": "retreat",
				"zh": "撤退",
				"phonetic": "/iː/",
				"example": "Let's retreat together.",
				"exampleZh": "让我们一起撤退吧。"
			},
			{
				"id": 3189,
				"en": "revenge",
				"zh": "报复",
				"phonetic": "/.../",
				"example": "Do you understand this revenge?",
				"exampleZh": "你理解这个报复吗？"
			},
			{
				"id": 3190,
				"en": "revenue",
				"zh": "收入",
				"phonetic": "/.../",
				"example": "revenue plays a key role in our life.",
				"exampleZh": "收入在我们的生活中起着关键作用。"
			},
			{
				"id": 3191,
				"en": "reverse",
				"zh": "相反的",
				"phonetic": "/.../",
				"example": "This is very reverse.",
				"exampleZh": "这非常相反的。"
			},
			{
				"id": 3192,
				"en": "revise",
				"zh": "修订",
				"phonetic": "/.../",
				"example": "She wants to revise this task.",
				"exampleZh": "她想修订这个任务。"
			},
			{
				"id": 3193,
				"en": "rhetoric",
				"zh": "修辞",
				"phonetic": "/.../",
				"example": "The rhetoric is very useful.",
				"exampleZh": "修辞非常有用。"
			},
			{
				"id": 3194,
				"en": "rigid",
				"zh": "刚硬的",
				"phonetic": "/.../",
				"example": "The result is quite rigid.",
				"exampleZh": "结果是相当刚硬的的。"
			},
			{
				"id": 3195,
				"en": "rival",
				"zh": "对手",
				"phonetic": "/.../",
				"example": "rival plays a key role in our life.",
				"exampleZh": "对手在我们的生活中起着关键作用。"
			},
			{
				"id": 3196,
				"en": "romantic",
				"zh": "浪漫的",
				"phonetic": "/.../",
				"example": "This is very romantic.",
				"exampleZh": "这非常浪漫的。"
			},
			{
				"id": 3197,
				"en": "rotate",
				"zh": "旋转",
				"phonetic": "/.../",
				"example": "She wants to rotate this task.",
				"exampleZh": "她想旋转这个任务。"
			},
			{
				"id": 3198,
				"en": "ruin",
				"zh": "毁灭",
				"phonetic": "/.../",
				"example": "Let's ruin together.",
				"exampleZh": "让我们一起毁灭吧。"
			},
			{
				"id": 3199,
				"en": "rumor",
				"zh": "谣言",
				"phonetic": "/ər/",
				"example": "Do you understand this rumor?",
				"exampleZh": "你理解这个谣言吗？"
			},
			{
				"id": 3200,
				"en": "rural",
				"zh": "农村的",
				"phonetic": "/.../",
				"example": "He found the task rural.",
				"exampleZh": "他发现这个任务是农村的的。"
			},
			{
				"id": 3201,
				"en": "sacred",
				"zh": "神圣的",
				"phonetic": "/d/",
				"example": "This is very sacred.",
				"exampleZh": "这非常神圣的。"
			},
			{
				"id": 3202,
				"en": "sanction",
				"zh": "制裁",
				"phonetic": "/ʃən/",
				"example": "I really like the sanction.",
				"exampleZh": "我真的很喜欢这个制裁。"
			},
			{
				"id": 3203,
				"en": "satisfactory",
				"zh": "满意的",
				"phonetic": "/.../",
				"example": "It's a satisfactory idea.",
				"exampleZh": "这是一个满意的的主意。"
			},
			{
				"id": 3204,
				"en": "scale",
				"zh": "规模",
				"phonetic": "/.../",
				"example": "Do you understand this scale?",
				"exampleZh": "你理解这个规模吗？"
			},
			{
				"id": 3205,
				"en": "scandal",
				"zh": "丑闻",
				"phonetic": "/.../",
				"example": "scandal plays a key role in our life.",
				"exampleZh": "丑闻在我们的生活中起着关键作用。"
			},
			{
				"id": 3206,
				"en": "scatter",
				"zh": "分散",
				"phonetic": "/ər/",
				"example": "We should scatter more carefully.",
				"exampleZh": "我们应该更仔细地分散。"
			},
			{
				"id": 3207,
				"en": "scheme",
				"zh": "计划",
				"phonetic": "/.../",
				"example": "I really like the scheme.",
				"exampleZh": "我真的很喜欢这个计划。"
			},
			{
				"id": 3208,
				"en": "scope",
				"zh": "范围",
				"phonetic": "/.../",
				"example": "The scope is very useful.",
				"exampleZh": "范围非常有用。"
			},
			{
				"id": 3209,
				"en": "scratch",
				"zh": "抓",
				"phonetic": "/tʃ/",
				"example": "They decided to scratch the plan.",
				"exampleZh": "他们决定抓这个计划。"
			},
			{
				"id": 3210,
				"en": "sculpture",
				"zh": "雕塑",
				"phonetic": "/tʃər/",
				"example": "sculpture plays a key role in our life.",
				"exampleZh": "雕塑在我们的生活中起着关键作用。"
			},
			{
				"id": 3211,
				"en": "seal",
				"zh": "封",
				"phonetic": "/iː/",
				"example": "We should seal more carefully.",
				"exampleZh": "我们应该更仔细地封。"
			},
			{
				"id": 3212,
				"en": "sector",
				"zh": "部门",
				"phonetic": "/ər/",
				"example": "I really like the sector.",
				"exampleZh": "我真的很喜欢这个部门。"
			},
			{
				"id": 3213,
				"en": "seminar",
				"zh": "研讨会",
				"phonetic": "/ɑːr/",
				"example": "The seminar is very useful.",
				"exampleZh": "研讨会非常有用。"
			},
			{
				"id": 3214,
				"en": "sensation",
				"zh": "感觉",
				"phonetic": "/ʃən/",
				"example": "Do you understand this sensation?",
				"exampleZh": "你理解这个感觉吗？"
			},
			{
				"id": 3215,
				"en": "sensible",
				"zh": "明智的",
				"phonetic": "/ɪbəl/",
				"example": "He found the task sensible.",
				"exampleZh": "他发现这个任务是明智的的。"
			},
			{
				"id": 3216,
				"en": "sensitive",
				"zh": "敏感的",
				"phonetic": "/.../",
				"example": "This is very sensitive.",
				"exampleZh": "这非常敏感的。"
			},
			{
				"id": 3217,
				"en": "sequence",
				"zh": "顺序",
				"phonetic": "/əns/",
				"example": "I really like the sequence.",
				"exampleZh": "我真的很喜欢这个顺序。"
			},
			{
				"id": 3218,
				"en": "session",
				"zh": "会议",
				"phonetic": "/ʃən/",
				"example": "The session is very useful.",
				"exampleZh": "会议非常有用。"
			},
			{
				"id": 3219,
				"en": "settlement",
				"zh": "解决",
				"phonetic": "/mənt/",
				"example": "Do you understand this settlement?",
				"exampleZh": "你理解这个解决吗？"
			},
			{
				"id": 3220,
				"en": "shield",
				"zh": "盾",
				"phonetic": "/.../",
				"example": "shield plays a key role in our life.",
				"exampleZh": "盾在我们的生活中起着关键作用。"
			},
			{
				"id": 3221,
				"en": "shift",
				"zh": "转变",
				"phonetic": "/.../",
				"example": "We should shift more carefully.",
				"exampleZh": "我们应该更仔细地转变。"
			},
			{
				"id": 3222,
				"en": "shortage",
				"zh": "短缺",
				"phonetic": "/.../",
				"example": "I really like the shortage.",
				"exampleZh": "我真的很喜欢这个短缺。"
			},
			{
				"id": 3223,
				"en": "shrink",
				"zh": "收缩",
				"phonetic": "/.../",
				"example": "Let's shrink together.",
				"exampleZh": "让我们一起收缩吧。"
			},
			{
				"id": 3224,
				"en": "simultaneous",
				"zh": "同时的",
				"phonetic": "/iəs/",
				"example": "The result is quite simultaneous.",
				"exampleZh": "结果是相当同时的的。"
			},
			{
				"id": 3225,
				"en": "skeleton",
				"zh": "骨架",
				"phonetic": "/.../",
				"example": "skeleton plays a key role in our life.",
				"exampleZh": "骨架在我们的生活中起着关键作用。"
			},
			{
				"id": 3226,
				"en": "sketch",
				"zh": "素描",
				"phonetic": "/tʃ/",
				"example": "This is an important sketch.",
				"exampleZh": "这是一个重要的素描。"
			},
			{
				"id": 3227,
				"en": "slice",
				"zh": "切片",
				"phonetic": "/.../",
				"example": "I really like the slice.",
				"exampleZh": "我真的很喜欢这个切片。"
			},
			{
				"id": 3228,
				"en": "slide",
				"zh": "滑动",
				"phonetic": "/.../",
				"example": "Let's slide together.",
				"exampleZh": "让我们一起滑动吧。"
			},
			{
				"id": 3229,
				"en": "slogan",
				"zh": "口号",
				"phonetic": "/.../",
				"example": "Do you understand this slogan?",
				"exampleZh": "你理解这个口号吗？"
			},
			{
				"id": 3230,
				"en": "smash",
				"zh": "粉碎",
				"phonetic": "/ʃ/",
				"example": "I need to smash before the deadline.",
				"exampleZh": "我需要在截止日期前粉碎。"
			},
			{
				"id": 3231,
				"en": "snap",
				"zh": "断裂",
				"phonetic": "/.../",
				"example": "We should snap more carefully.",
				"exampleZh": "我们应该更仔细地断裂。"
			},
			{
				"id": 3232,
				"en": "soar",
				"zh": "飙升",
				"phonetic": "/ɑːr/",
				"example": "She wants to soar this task.",
				"exampleZh": "她想飙升这个任务。"
			},
			{
				"id": 3233,
				"en": "sole",
				"zh": "唯一的",
				"phonetic": "/.../",
				"example": "It's a sole idea.",
				"exampleZh": "这是一个唯一的的主意。"
			},
			{
				"id": 3234,
				"en": "solemn",
				"zh": "庄严的",
				"phonetic": "/.../",
				"example": "The result is quite solemn.",
				"exampleZh": "结果是相当庄严的的。"
			},
			{
				"id": 3235,
				"en": "solicitor",
				"zh": "律师",
				"phonetic": "/ər/",
				"example": "solicitor plays a key role in our life.",
				"exampleZh": "律师在我们的生活中起着关键作用。"
			},
			{
				"id": 3236,
				"en": "solidarity",
				"zh": "团结",
				"phonetic": "/.../",
				"example": "This is an important solidarity.",
				"exampleZh": "这是一个重要的团结。"
			},
			{
				"id": 3237,
				"en": "sophisticated",
				"zh": "复杂的",
				"phonetic": "/d/",
				"example": "She looks sophisticated today.",
				"exampleZh": "她今天看起来很复杂的。"
			},
			{
				"id": 3238,
				"en": "spark",
				"zh": "火花",
				"phonetic": "/.../",
				"example": "The spark is very useful.",
				"exampleZh": "火花非常有用。"
			},
			{
				"id": 3239,
				"en": "specialist",
				"zh": "专家",
				"phonetic": "/.../",
				"example": "Do you understand this specialist?",
				"exampleZh": "你理解这个专家吗？"
			},
			{
				"id": 3240,
				"en": "specify",
				"zh": "指定",
				"phonetic": "/.../",
				"example": "I need to specify before the deadline.",
				"exampleZh": "我需要在截止日期前指定。"
			},
			{
				"id": 3241,
				"en": "specimen",
				"zh": "标本",
				"phonetic": "/.../",
				"example": "This is an important specimen.",
				"exampleZh": "这是一个重要的标本。"
			},
			{
				"id": 3242,
				"en": "spectacle",
				"zh": "景象",
				"phonetic": "/.../",
				"example": "I really like the spectacle.",
				"exampleZh": "我真的很喜欢这个景象。"
			},
			{
				"id": 3243,
				"en": "spectrum",
				"zh": "光谱",
				"phonetic": "/.../",
				"example": "The spectrum is very useful.",
				"exampleZh": "光谱非常有用。"
			},
			{
				"id": 3244,
				"en": "speculate",
				"zh": "推测",
				"phonetic": "/.../",
				"example": "They decided to speculate the plan.",
				"exampleZh": "他们决定推测这个计划。"
			},
			{
				"id": 3245,
				"en": "sphere",
				"zh": "球体",
				"phonetic": "/.../",
				"example": "sphere plays a key role in our life.",
				"exampleZh": "球体在我们的生活中起着关键作用。"
			},
			{
				"id": 3246,
				"en": "spill",
				"zh": "溢出",
				"phonetic": "/.../",
				"example": "We should spill more carefully.",
				"exampleZh": "我们应该更仔细地溢出。"
			},
			{
				"id": 3247,
				"en": "spin",
				"zh": "旋转",
				"phonetic": "/.../",
				"example": "She wants to spin this task.",
				"exampleZh": "她想旋转这个任务。"
			},
			{
				"id": 3248,
				"en": "spiritual",
				"zh": "精神的",
				"phonetic": "/.../",
				"example": "It's a spiritual idea.",
				"exampleZh": "这是一个精神的的主意。"
			},
			{
				"id": 3249,
				"en": "split",
				"zh": "分裂",
				"phonetic": "/.../",
				"example": "They decided to split the plan.",
				"exampleZh": "他们决定分裂这个计划。"
			},
			{
				"id": 3250,
				"en": "sponsor",
				"zh": "赞助商",
				"phonetic": "/ər/",
				"example": "sponsor plays a key role in our life.",
				"exampleZh": "赞助商在我们的生活中起着关键作用。"
			},
			{
				"id": 3251,
				"en": "spot",
				"zh": "点",
				"phonetic": "/.../",
				"example": "This is an important spot.",
				"exampleZh": "这是一个重要的点。"
			},
			{
				"id": 3252,
				"en": "spray",
				"zh": "喷雾",
				"phonetic": "/eɪ/",
				"example": "I really like the spray.",
				"exampleZh": "我真的很喜欢这个喷雾。"
			},
			{
				"id": 3253,
				"en": "squeeze",
				"zh": "挤压",
				"phonetic": "/kw/",
				"example": "Let's squeeze together.",
				"exampleZh": "让我们一起挤压吧。"
			},
			{
				"id": 3254,
				"en": "stack",
				"zh": "堆",
				"phonetic": "/k/",
				"example": "Do you understand this stack?",
				"exampleZh": "你理解这个堆吗？"
			},
			{
				"id": 3255,
				"en": "stadium",
				"zh": "体育场",
				"phonetic": "/.../",
				"example": "stadium plays a key role in our life.",
				"exampleZh": "体育场在我们的生活中起着关键作用。"
			},
			{
				"id": 3256,
				"en": "stake",
				"zh": "利害关系",
				"phonetic": "/.../",
				"example": "This is an important stake.",
				"exampleZh": "这是一个重要的利害关系。"
			},
			{
				"id": 3257,
				"en": "stale",
				"zh": "不新鲜的",
				"phonetic": "/.../",
				"example": "She looks stale today.",
				"exampleZh": "她今天看起来很不新鲜的。"
			},
			{
				"id": 3258,
				"en": "startle",
				"zh": "使吃惊",
				"phonetic": "/.../",
				"example": "Let's startle together.",
				"exampleZh": "让我们一起使吃惊吧。"
			},
			{
				"id": 3259,
				"en": "starve",
				"zh": "挨饿",
				"phonetic": "/.../",
				"example": "They decided to starve the plan.",
				"exampleZh": "他们决定挨饿这个计划。"
			},
			{
				"id": 3260,
				"en": "statistics",
				"zh": "统计",
				"phonetic": "/.../",
				"example": "statistics plays a key role in our life.",
				"exampleZh": "统计在我们的生活中起着关键作用。"
			},
			{
				"id": 3261,
				"en": "statue",
				"zh": "雕像",
				"phonetic": "/.../",
				"example": "This is an important statue.",
				"exampleZh": "这是一个重要的雕像。"
			},
			{
				"id": 3262,
				"en": "stem",
				"zh": "茎",
				"phonetic": "/.../",
				"example": "I really like the stem.",
				"exampleZh": "我真的很喜欢这个茎。"
			},
			{
				"id": 3263,
				"en": "stimulate",
				"zh": "刺激",
				"phonetic": "/.../",
				"example": "Let's stimulate together.",
				"exampleZh": "让我们一起刺激吧。"
			},
			{
				"id": 3264,
				"en": "sting",
				"zh": "刺",
				"phonetic": "/ɪŋ/",
				"example": "They decided to sting the plan.",
				"exampleZh": "他们决定刺这个计划。"
			},
			{
				"id": 3265,
				"en": "stir",
				"zh": "搅拌",
				"phonetic": "/.../",
				"example": "I need to stir before the deadline.",
				"exampleZh": "我需要在截止日期前搅拌。"
			},
			{
				"id": 3266,
				"en": "storage",
				"zh": "储存",
				"phonetic": "/.../",
				"example": "This is an important storage.",
				"exampleZh": "这是一个重要的储存。"
			},
			{
				"id": 3267,
				"en": "strain",
				"zh": "紧张",
				"phonetic": "/eɪ/",
				"example": "I really like the strain.",
				"exampleZh": "我真的很喜欢这个紧张。"
			},
			{
				"id": 3268,
				"en": "strategy",
				"zh": "策略",
				"phonetic": "/.../",
				"example": "The strategy is very useful.",
				"exampleZh": "策略非常有用。"
			},
			{
				"id": 3269,
				"en": "strengthen",
				"zh": "加强",
				"phonetic": "/.../",
				"example": "They decided to strengthen the plan.",
				"exampleZh": "他们决定加强这个计划。"
			},
			{
				"id": 3270,
				"en": "stress",
				"zh": "压力",
				"phonetic": "/.../",
				"example": "stress plays a key role in our life.",
				"exampleZh": "压力在我们的生活中起着关键作用。"
			},
			{
				"id": 3271,
				"en": "stretch",
				"zh": "伸展",
				"phonetic": "/tʃ/",
				"example": "We should stretch more carefully.",
				"exampleZh": "我们应该更仔细地伸展。"
			},
			{
				"id": 3272,
				"en": "stride",
				"zh": "大步",
				"phonetic": "/.../",
				"example": "I really like the stride.",
				"exampleZh": "我真的很喜欢这个大步。"
			},
			{
				"id": 3273,
				"en": "stroke",
				"zh": "中风",
				"phonetic": "/.../",
				"example": "The stroke is very useful.",
				"exampleZh": "中风非常有用。"
			},
			{
				"id": 3274,
				"en": "submit",
				"zh": "提交",
				"phonetic": "/.../",
				"example": "They decided to submit the plan.",
				"exampleZh": "他们决定提交这个计划。"
			},
			{
				"id": 3275,
				"en": "subsequent",
				"zh": "随后的",
				"phonetic": "/kw/",
				"example": "He found the task subsequent.",
				"exampleZh": "他发现这个任务是随后的的。"
			},
			{
				"id": 3276,
				"en": "substance",
				"zh": "物质",
				"phonetic": "/əns/",
				"example": "This is an important substance.",
				"exampleZh": "这是一个重要的物质。"
			},
			{
				"id": 3277,
				"en": "substitute",
				"zh": "替代",
				"phonetic": "/.../",
				"example": "She wants to substitute this task.",
				"exampleZh": "她想替代这个任务。"
			},
			{
				"id": 3278,
				"en": "subtle",
				"zh": "微妙的",
				"phonetic": "/.../",
				"example": "It's a subtle idea.",
				"exampleZh": "这是一个微妙的的主意。"
			},
			{
				"id": 3279,
				"en": "suburb",
				"zh": "郊区",
				"phonetic": "/.../",
				"example": "Do you understand this suburb?",
				"exampleZh": "你理解这个郊区吗？"
			},
			{
				"id": 3280,
				"en": "succession",
				"zh": "连续",
				"phonetic": "/ʃən/",
				"example": "succession plays a key role in our life.",
				"exampleZh": "连续在我们的生活中起着关键作用。"
			},
			{
				"id": 3281,
				"en": "sue",
				"zh": "起诉",
				"phonetic": "/.../",
				"example": "We should sue more carefully.",
				"exampleZh": "我们应该更仔细地起诉。"
			},
			{
				"id": 3282,
				"en": "suffering",
				"zh": "痛苦",
				"phonetic": "/ɪŋ/",
				"example": "I really like the suffering.",
				"exampleZh": "我真的很喜欢这个痛苦。"
			},
			{
				"id": 3283,
				"en": "suicide",
				"zh": "自杀",
				"phonetic": "/.../",
				"example": "The suicide is very useful.",
				"exampleZh": "自杀非常有用。"
			},
			{
				"id": 3284,
				"en": "summit",
				"zh": "峰会",
				"phonetic": "/.../",
				"example": "Do you understand this summit?",
				"exampleZh": "你理解这个峰会吗？"
			},
			{
				"id": 3285,
				"en": "superb",
				"zh": "极好的",
				"phonetic": "/.../",
				"example": "He found the task superb.",
				"exampleZh": "他发现这个任务是极好的的。"
			},
			{
				"id": 3286,
				"en": "superior",
				"zh": "优越的",
				"phonetic": "/ər/",
				"example": "This is very superior.",
				"exampleZh": "这非常优越的。"
			},
			{
				"id": 3287,
				"en": "supervise",
				"zh": "监督",
				"phonetic": "/.../",
				"example": "She wants to supervise this task.",
				"exampleZh": "她想监督这个任务。"
			},
			{
				"id": 3288,
				"en": "supplement",
				"zh": "补充",
				"phonetic": "/mənt/",
				"example": "The supplement is very useful.",
				"exampleZh": "补充非常有用。"
			},
			{
				"id": 3289,
				"en": "supreme",
				"zh": "最高的",
				"phonetic": "/.../",
				"example": "The result is quite supreme.",
				"exampleZh": "结果是相当最高的的。"
			},
			{
				"id": 3290,
				"en": "surge",
				"zh": "激增",
				"phonetic": "/.../",
				"example": "I need to surge before the deadline.",
				"exampleZh": "我需要在截止日期前激增。"
			},
			{
				"id": 3291,
				"en": "surgeon",
				"zh": "外科医生",
				"phonetic": "/.../",
				"example": "This is an important surgeon.",
				"exampleZh": "这是一个重要的外科医生。"
			},
			{
				"id": 3292,
				"en": "surgery",
				"zh": "外科手术",
				"phonetic": "/.../",
				"example": "I really like the surgery.",
				"exampleZh": "我真的很喜欢这个外科手术。"
			},
			{
				"id": 3293,
				"en": "surplus",
				"zh": "盈余",
				"phonetic": "/.../",
				"example": "The surplus is very useful.",
				"exampleZh": "盈余非常有用。"
			},
			{
				"id": 3294,
				"en": "surrender",
				"zh": "投降",
				"phonetic": "/ər/",
				"example": "They decided to surrender the plan.",
				"exampleZh": "他们决定投降这个计划。"
			},
			{
				"id": 3295,
				"en": "survey",
				"zh": "调查",
				"phonetic": "/.../",
				"example": "survey plays a key role in our life.",
				"exampleZh": "调查在我们的生活中起着关键作用。"
			},
			{
				"id": 3296,
				"en": "survival",
				"zh": "生存",
				"phonetic": "/.../",
				"example": "This is an important survival.",
				"exampleZh": "这是一个重要的生存。"
			},
			{
				"id": 3297,
				"en": "suspend",
				"zh": "暂停",
				"phonetic": "/.../",
				"example": "She wants to suspend this task.",
				"exampleZh": "她想暂停这个任务。"
			},
			{
				"id": 3298,
				"en": "suspicion",
				"zh": "怀疑",
				"phonetic": "/.../",
				"example": "The suspicion is very useful.",
				"exampleZh": "怀疑非常有用。"
			},
			{
				"id": 3299,
				"en": "sustain",
				"zh": "维持",
				"phonetic": "/eɪ/",
				"example": "They decided to sustain the plan.",
				"exampleZh": "他们决定维持这个计划。"
			},
			{
				"id": 3300,
				"en": "swear",
				"zh": "发誓",
				"phonetic": "/ɑːr/",
				"example": "I need to swear before the deadline.",
				"exampleZh": "我需要在截止日期前发誓。"
			},
			{
				"id": 3301,
				"en": "sweep",
				"zh": "扫",
				"phonetic": "/iː/",
				"example": "We should sweep more carefully.",
				"exampleZh": "我们应该更仔细地扫。"
			},
			{
				"id": 3302,
				"en": "swell",
				"zh": "膨胀",
				"phonetic": "/.../",
				"example": "She wants to swell this task.",
				"exampleZh": "她想膨胀这个任务。"
			},
			{
				"id": 3303,
				"en": "swift",
				"zh": "迅速的",
				"phonetic": "/.../",
				"example": "It's a swift idea.",
				"exampleZh": "这是一个迅速的的主意。"
			},
			{
				"id": 3304,
				"en": "swing",
				"zh": "摇摆",
				"phonetic": "/ɪŋ/",
				"example": "They decided to swing the plan.",
				"exampleZh": "他们决定摇摆这个计划。"
			},
			{
				"id": 3305,
				"en": "switch",
				"zh": "开关",
				"phonetic": "/tʃ/",
				"example": "switch plays a key role in our life.",
				"exampleZh": "开关在我们的生活中起着关键作用。"
			},
			{
				"id": 3306,
				"en": "sympathy",
				"zh": "同情",
				"phonetic": "/.../",
				"example": "This is an important sympathy.",
				"exampleZh": "这是一个重要的同情。"
			},
			{
				"id": 3307,
				"en": "symptom",
				"zh": "症状",
				"phonetic": "/.../",
				"example": "I really like the symptom.",
				"exampleZh": "我真的很喜欢这个症状。"
			},
			{
				"id": 3308,
				"en": "tackle",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "Let's tackle together.",
				"exampleZh": "让我们一起处理吧。"
			},
			{
				"id": 3309,
				"en": "tactics",
				"zh": "战术",
				"phonetic": "/.../",
				"example": "Do you understand this tactics?",
				"exampleZh": "你理解这个战术吗？"
			},
			{
				"id": 3310,
				"en": "talent",
				"zh": "天赋",
				"phonetic": "/.../",
				"example": "talent plays a key role in our life.",
				"exampleZh": "天赋在我们的生活中起着关键作用。"
			},
			{
				"id": 3311,
				"en": "tame",
				"zh": "驯服",
				"phonetic": "/.../",
				"example": "We should tame more carefully.",
				"exampleZh": "我们应该更仔细地驯服。"
			},
			{
				"id": 3312,
				"en": "temporary",
				"zh": "暂时的",
				"phonetic": "/.../",
				"example": "She looks temporary today.",
				"exampleZh": "她今天看起来很暂时的。"
			},
			{
				"id": 3313,
				"en": "tempt",
				"zh": "诱惑",
				"phonetic": "/.../",
				"example": "Let's tempt together.",
				"exampleZh": "让我们一起诱惑吧。"
			},
			{
				"id": 3314,
				"en": "tendency",
				"zh": "趋势",
				"phonetic": "/.../",
				"example": "Do you understand this tendency?",
				"exampleZh": "你理解这个趋势吗？"
			},
			{
				"id": 3315,
				"en": "terminal",
				"zh": "终端",
				"phonetic": "/.../",
				"example": "terminal plays a key role in our life.",
				"exampleZh": "终端在我们的生活中起着关键作用。"
			},
			{
				"id": 3316,
				"en": "territory",
				"zh": "领土",
				"phonetic": "/.../",
				"example": "This is an important territory.",
				"exampleZh": "这是一个重要的领土。"
			},
			{
				"id": 3317,
				"en": "terror",
				"zh": "恐怖",
				"phonetic": "/ər/",
				"example": "I really like the terror.",
				"exampleZh": "我真的很喜欢这个恐怖。"
			},
			{
				"id": 3318,
				"en": "testify",
				"zh": "作证",
				"phonetic": "/.../",
				"example": "Let's testify together.",
				"exampleZh": "让我们一起作证吧。"
			},
			{
				"id": 3319,
				"en": "textile",
				"zh": "纺织品",
				"phonetic": "/.../",
				"example": "Do you understand this textile?",
				"exampleZh": "你理解这个纺织品吗？"
			},
			{
				"id": 3320,
				"en": "theme",
				"zh": "主题",
				"phonetic": "/.../",
				"example": "theme plays a key role in our life.",
				"exampleZh": "主题在我们的生活中起着关键作用。"
			},
			{
				"id": 3321,
				"en": "therapy",
				"zh": "治疗",
				"phonetic": "/.../",
				"example": "This is an important therapy.",
				"exampleZh": "这是一个重要的治疗。"
			},
			{
				"id": 3322,
				"en": "thereby",
				"zh": "因此",
				"phonetic": "/.../",
				"example": "She thereby agreed with us.",
				"exampleZh": "她因此地同意了我们的意见。"
			},
			{
				"id": 3323,
				"en": "thesis",
				"zh": "论文",
				"phonetic": "/.../",
				"example": "The thesis is very useful.",
				"exampleZh": "论文非常有用。"
			},
			{
				"id": 3324,
				"en": "thoughtful",
				"zh": "深思的",
				"phonetic": "/fəl/",
				"example": "The result is quite thoughtful.",
				"exampleZh": "结果是相当深思的的。"
			},
			{
				"id": 3325,
				"en": "threaten",
				"zh": "威胁",
				"phonetic": "/iː/",
				"example": "I need to threaten before the deadline.",
				"exampleZh": "我需要在截止日期前威胁。"
			},
			{
				"id": 3326,
				"en": "thrill",
				"zh": "激动",
				"phonetic": "/.../",
				"example": "This is an important thrill.",
				"exampleZh": "这是一个重要的激动。"
			},
			{
				"id": 3327,
				"en": "thrive",
				"zh": "繁荣",
				"phonetic": "/.../",
				"example": "She wants to thrive this task.",
				"exampleZh": "她想繁荣这个任务。"
			},
			{
				"id": 3328,
				"en": "thrust",
				"zh": "推力",
				"phonetic": "/.../",
				"example": "The thrust is very useful.",
				"exampleZh": "推力非常有用。"
			},
			{
				"id": 3329,
				"en": "tissue",
				"zh": "组织",
				"phonetic": "/.../",
				"example": "Do you understand this tissue?",
				"exampleZh": "你理解这个组织吗？"
			},
			{
				"id": 3330,
				"en": "tolerate",
				"zh": "容忍",
				"phonetic": "/.../",
				"example": "I need to tolerate before the deadline.",
				"exampleZh": "我需要在截止日期前容忍。"
			},
			{
				"id": 3331,
				"en": "toll",
				"zh": "通行费",
				"phonetic": "/.../",
				"example": "This is an important toll.",
				"exampleZh": "这是一个重要的通行费。"
			},
			{
				"id": 3332,
				"en": "torture",
				"zh": "折磨",
				"phonetic": "/tʃər/",
				"example": "She wants to torture this task.",
				"exampleZh": "她想折磨这个任务。"
			},
			{
				"id": 3333,
				"en": "toss",
				"zh": "抛",
				"phonetic": "/.../",
				"example": "Let's toss together.",
				"exampleZh": "让我们一起抛吧。"
			},
			{
				"id": 3334,
				"en": "tournament",
				"zh": "锦标赛",
				"phonetic": "/mənt/",
				"example": "Do you understand this tournament?",
				"exampleZh": "你理解这个锦标赛吗？"
			},
			{
				"id": 3335,
				"en": "trace",
				"zh": "追踪",
				"phonetic": "/.../",
				"example": "I need to trace before the deadline.",
				"exampleZh": "我需要在截止日期前追踪。"
			},
			{
				"id": 3336,
				"en": "trail",
				"zh": "小径",
				"phonetic": "/eɪ/",
				"example": "This is an important trail.",
				"exampleZh": "这是一个重要的小径。"
			},
			{
				"id": 3337,
				"en": "trait",
				"zh": "特征",
				"phonetic": "/eɪ/",
				"example": "I really like the trait.",
				"exampleZh": "我真的很喜欢这个特征。"
			},
			{
				"id": 3338,
				"en": "transaction",
				"zh": "交易",
				"phonetic": "/ʃən/",
				"example": "The transaction is very useful.",
				"exampleZh": "交易非常有用。"
			},
			{
				"id": 3339,
				"en": "transform",
				"zh": "转变",
				"phonetic": "/.../",
				"example": "They decided to transform the plan.",
				"exampleZh": "他们决定转变这个计划。"
			},
			{
				"id": 3340,
				"en": "transmit",
				"zh": "传输",
				"phonetic": "/.../",
				"example": "I need to transmit before the deadline.",
				"exampleZh": "我需要在截止日期前传输。"
			},
			{
				"id": 3341,
				"en": "transparent",
				"zh": "透明的",
				"phonetic": "/.../",
				"example": "This is very transparent.",
				"exampleZh": "这非常透明的。"
			},
			{
				"id": 3342,
				"en": "treaty",
				"zh": "条约",
				"phonetic": "/iː/",
				"example": "I really like the treaty.",
				"exampleZh": "我真的很喜欢这个条约。"
			},
			{
				"id": 3343,
				"en": "trend",
				"zh": "趋势",
				"phonetic": "/.../",
				"example": "The trend is very useful.",
				"exampleZh": "趋势非常有用。"
			},
			{
				"id": 3344,
				"en": "tribal",
				"zh": "部落的",
				"phonetic": "/.../",
				"example": "The result is quite tribal.",
				"exampleZh": "结果是相当部落的的。"
			},
			{
				"id": 3345,
				"en": "tribute",
				"zh": "致敬",
				"phonetic": "/.../",
				"example": "tribute plays a key role in our life.",
				"exampleZh": "致敬在我们的生活中起着关键作用。"
			},
			{
				"id": 3346,
				"en": "trigger",
				"zh": "触发",
				"phonetic": "/ər/",
				"example": "We should trigger more carefully.",
				"exampleZh": "我们应该更仔细地触发。"
			},
			{
				"id": 3347,
				"en": "triumph",
				"zh": "胜利",
				"phonetic": "/f/",
				"example": "I really like the triumph.",
				"exampleZh": "我真的很喜欢这个胜利。"
			},
			{
				"id": 3348,
				"en": "troop",
				"zh": "部队",
				"phonetic": "/uː/",
				"example": "The troop is very useful.",
				"exampleZh": "部队非常有用。"
			},
			{
				"id": 3349,
				"en": "tropical",
				"zh": "热带的",
				"phonetic": "/.../",
				"example": "The result is quite tropical.",
				"exampleZh": "结果是相当热带的的。"
			},
			{
				"id": 3350,
				"en": "tuition",
				"zh": "学费",
				"phonetic": "/ʃən/",
				"example": "tuition plays a key role in our life.",
				"exampleZh": "学费在我们的生活中起着关键作用。"
			},
			{
				"id": 3351,
				"en": "tumor",
				"zh": "肿瘤",
				"phonetic": "/ər/",
				"example": "This is an important tumor.",
				"exampleZh": "这是一个重要的肿瘤。"
			},
			{
				"id": 3352,
				"en": "tunnel",
				"zh": "隧道",
				"phonetic": "/.../",
				"example": "I really like the tunnel.",
				"exampleZh": "我真的很喜欢这个隧道。"
			},
			{
				"id": 3353,
				"en": "twist",
				"zh": "扭曲",
				"phonetic": "/.../",
				"example": "Let's twist together.",
				"exampleZh": "让我们一起扭曲吧。"
			},
			{
				"id": 3354,
				"en": "undergo",
				"zh": "经历",
				"phonetic": "/.../",
				"example": "They decided to undergo the plan.",
				"exampleZh": "他们决定经历这个计划。"
			},
			{
				"id": 3355,
				"en": "undermine",
				"zh": "破坏",
				"phonetic": "/.../",
				"example": "I need to undermine before the deadline.",
				"exampleZh": "我需要在截止日期前破坏。"
			},
			{
				"id": 3356,
				"en": "undertake",
				"zh": "承担",
				"phonetic": "/.../",
				"example": "We should undertake more carefully.",
				"exampleZh": "我们应该更仔细地承担。"
			},
			{
				"id": 3357,
				"en": "unemployment",
				"zh": "失业",
				"phonetic": "/mənt/",
				"example": "I really like the unemployment.",
				"exampleZh": "我真的很喜欢这个失业。"
			},
			{
				"id": 3358,
				"en": "unfold",
				"zh": "展开",
				"phonetic": "/.../",
				"example": "Let's unfold together.",
				"exampleZh": "让我们一起展开吧。"
			},
			{
				"id": 3359,
				"en": "unify",
				"zh": "统一",
				"phonetic": "/.../",
				"example": "They decided to unify the plan.",
				"exampleZh": "他们决定统一这个计划。"
			},
			{
				"id": 3360,
				"en": "unique",
				"zh": "独特的",
				"phonetic": "/kw/",
				"example": "He found the task unique.",
				"exampleZh": "他发现这个任务是独特的的。"
			},
			{
				"id": 3361,
				"en": "universal",
				"zh": "普遍的",
				"phonetic": "/.../",
				"example": "This is very universal.",
				"exampleZh": "这非常普遍的。"
			},
			{
				"id": 3362,
				"en": "update",
				"zh": "更新",
				"phonetic": "/.../",
				"example": "She wants to update this task.",
				"exampleZh": "她想更新这个任务。"
			},
			{
				"id": 3363,
				"en": "upgrade",
				"zh": "升级",
				"phonetic": "/.../",
				"example": "Let's upgrade together.",
				"exampleZh": "让我们一起升级吧。"
			},
			{
				"id": 3364,
				"en": "urban",
				"zh": "城市的",
				"phonetic": "/.../",
				"example": "The result is quite urban.",
				"exampleZh": "结果是相当城市的的。"
			},
			{
				"id": 3365,
				"en": "utilize",
				"zh": "利用",
				"phonetic": "/.../",
				"example": "I need to utilize before the deadline.",
				"exampleZh": "我需要在截止日期前利用。"
			},
			{
				"id": 3366,
				"en": "utmost",
				"zh": "最大的",
				"phonetic": "/.../",
				"example": "This is very utmost.",
				"exampleZh": "这非常最大的。"
			},
			{
				"id": 3367,
				"en": "utter",
				"zh": "彻底的",
				"phonetic": "/ər/",
				"example": "She looks utter today.",
				"exampleZh": "她今天看起来很彻底的。"
			},
			{
				"id": 3368,
				"en": "vacant",
				"zh": "空的",
				"phonetic": "/.../",
				"example": "It's a vacant idea.",
				"exampleZh": "这是一个空的的主意。"
			},
			{
				"id": 3369,
				"en": "valid",
				"zh": "有效的",
				"phonetic": "/.../",
				"example": "The result is quite valid.",
				"exampleZh": "结果是相当有效的的。"
			},
			{
				"id": 3370,
				"en": "vanish",
				"zh": "消失",
				"phonetic": "/ʃ/",
				"example": "I need to vanish before the deadline.",
				"exampleZh": "我需要在截止日期前消失。"
			},
			{
				"id": 3371,
				"en": "variable",
				"zh": "变量",
				"phonetic": "/əbəl/",
				"example": "This is an important variable.",
				"exampleZh": "这是一个重要的变量。"
			},
			{
				"id": 3372,
				"en": "vast",
				"zh": "广阔的",
				"phonetic": "/.../",
				"example": "She looks vast today.",
				"exampleZh": "她今天看起来很广阔的。"
			},
			{
				"id": 3373,
				"en": "vehicle",
				"zh": "车辆",
				"phonetic": "/.../",
				"example": "The vehicle is very useful.",
				"exampleZh": "车辆非常有用。"
			},
			{
				"id": 3374,
				"en": "venture",
				"zh": "冒险",
				"phonetic": "/tʃər/",
				"example": "They decided to venture the plan.",
				"exampleZh": "他们决定冒险这个计划。"
			},
			{
				"id": 3375,
				"en": "verify",
				"zh": "验证",
				"phonetic": "/.../",
				"example": "I need to verify before the deadline.",
				"exampleZh": "我需要在截止日期前验证。"
			},
			{
				"id": 3376,
				"en": "version",
				"zh": "版本",
				"phonetic": "/ʒən/",
				"example": "This is an important version.",
				"exampleZh": "这是一个重要的版本。"
			},
			{
				"id": 3377,
				"en": "vessel",
				"zh": "船",
				"phonetic": "/.../",
				"example": "I really like the vessel.",
				"exampleZh": "我真的很喜欢这个船。"
			},
			{
				"id": 3378,
				"en": "veteran",
				"zh": "老兵",
				"phonetic": "/.../",
				"example": "The veteran is very useful.",
				"exampleZh": "老兵非常有用。"
			},
			{
				"id": 3379,
				"en": "vibrate",
				"zh": "振动",
				"phonetic": "/.../",
				"example": "They decided to vibrate the plan.",
				"exampleZh": "他们决定振动这个计划。"
			},
			{
				"id": 3380,
				"en": "vice",
				"zh": "恶习",
				"phonetic": "/.../",
				"example": "vice plays a key role in our life.",
				"exampleZh": "恶习在我们的生活中起着关键作用。"
			},
			{
				"id": 3381,
				"en": "victory",
				"zh": "胜利",
				"phonetic": "/.../",
				"example": "This is an important victory.",
				"exampleZh": "这是一个重要的胜利。"
			},
			{
				"id": 3382,
				"en": "vigor",
				"zh": "活力",
				"phonetic": "/ər/",
				"example": "I really like the vigor.",
				"exampleZh": "我真的很喜欢这个活力。"
			},
			{
				"id": 3383,
				"en": "violate",
				"zh": "违反",
				"phonetic": "/.../",
				"example": "Let's violate together.",
				"exampleZh": "让我们一起违反吧。"
			},
			{
				"id": 3384,
				"en": "violent",
				"zh": "暴力的",
				"phonetic": "/.../",
				"example": "The result is quite violent.",
				"exampleZh": "结果是相当暴力的的。"
			},
			{
				"id": 3385,
				"en": "virtual",
				"zh": "虚拟的",
				"phonetic": "/.../",
				"example": "He found the task virtual.",
				"exampleZh": "他发现这个任务是虚拟的的。"
			},
			{
				"id": 3386,
				"en": "visible",
				"zh": "可见的",
				"phonetic": "/ɪbəl/",
				"example": "This is very visible.",
				"exampleZh": "这非常可见的。"
			},
			{
				"id": 3387,
				"en": "vision",
				"zh": "视力",
				"phonetic": "/ʒən/",
				"example": "I really like the vision.",
				"exampleZh": "我真的很喜欢这个视力。"
			},
			{
				"id": 3388,
				"en": "visual",
				"zh": "视觉的",
				"phonetic": "/.../",
				"example": "It's a visual idea.",
				"exampleZh": "这是一个视觉的的主意。"
			},
			{
				"id": 3389,
				"en": "vital",
				"zh": "至关重要的",
				"phonetic": "/.../",
				"example": "The result is quite vital.",
				"exampleZh": "结果是相当至关重要的的。"
			},
			{
				"id": 3390,
				"en": "vivid",
				"zh": "生动的",
				"phonetic": "/.../",
				"example": "He found the task vivid.",
				"exampleZh": "他发现这个任务是生动的的。"
			},
			{
				"id": 3391,
				"en": "vocal",
				"zh": "声音的",
				"phonetic": "/.../",
				"example": "This is very vocal.",
				"exampleZh": "这非常声音的。"
			},
			{
				"id": 3392,
				"en": "volume",
				"zh": "卷；体积",
				"phonetic": "/.../",
				"example": "I really like the volume.",
				"exampleZh": "我真的很喜欢这个卷；体积。"
			},
			{
				"id": 3393,
				"en": "vulnerable",
				"zh": "脆弱的",
				"phonetic": "/əbəl/",
				"example": "It's a vulnerable idea.",
				"exampleZh": "这是一个脆弱的的主意。"
			},
			{
				"id": 3394,
				"en": "warehouse",
				"zh": "仓库",
				"phonetic": "/aʊ/",
				"example": "Do you understand this warehouse?",
				"exampleZh": "你理解这个仓库吗？"
			},
			{
				"id": 3395,
				"en": "warrant",
				"zh": "令状",
				"phonetic": "/.../",
				"example": "warrant plays a key role in our life.",
				"exampleZh": "令状在我们的生活中起着关键作用。"
			},
			{
				"id": 3396,
				"en": "weave",
				"zh": "编织",
				"phonetic": "/iː/",
				"example": "We should weave more carefully.",
				"exampleZh": "我们应该更仔细地编织。"
			},
			{
				"id": 3397,
				"en": "whereas",
				"zh": "然而",
				"phonetic": "/w/",
				"example": "Let's talk about whereas.",
				"exampleZh": "让我们来谈谈然而吧。"
			},
			{
				"id": 3398,
				"en": "wholesale",
				"zh": "批发",
				"phonetic": "/w/",
				"example": "The wholesale is very useful.",
				"exampleZh": "批发非常有用。"
			},
			{
				"id": 3399,
				"en": "wilderness",
				"zh": "荒野",
				"phonetic": "/nəs/",
				"example": "Do you understand this wilderness?",
				"exampleZh": "你理解这个荒野吗？"
			},
			{
				"id": 3400,
				"en": "wisdom",
				"zh": "智慧",
				"phonetic": "/.../",
				"example": "wisdom plays a key role in our life.",
				"exampleZh": "智慧在我们的生活中起着关键作用。"
			},
			{
				"id": 3401,
				"en": "withdraw",
				"zh": "撤回",
				"phonetic": "/ɔː/",
				"example": "We should withdraw more carefully.",
				"exampleZh": "我们应该更仔细地撤回。"
			},
			{
				"id": 3402,
				"en": "withstand",
				"zh": "承受",
				"phonetic": "/.../",
				"example": "She wants to withstand this task.",
				"exampleZh": "她想承受这个任务。"
			},
			{
				"id": 3403,
				"en": "workshop",
				"zh": "研讨会",
				"phonetic": "/.../",
				"example": "The workshop is very useful.",
				"exampleZh": "研讨会非常有用。"
			},
			{
				"id": 3404,
				"en": "worship",
				"zh": "崇拜",
				"phonetic": "/.../",
				"example": "They decided to worship the plan.",
				"exampleZh": "他们决定崇拜这个计划。"
			},
			{
				"id": 3405,
				"en": "worthwhile",
				"zh": "值得的",
				"phonetic": "/w/",
				"example": "He found the task worthwhile.",
				"exampleZh": "他发现这个任务是值得的的。"
			},
			{
				"id": 3406,
				"en": "wreck",
				"zh": "残骸",
				"phonetic": "/k/",
				"example": "This is an important wreck.",
				"exampleZh": "这是一个重要的残骸。"
			},
			{
				"id": 3407,
				"en": "yield",
				"zh": "产出",
				"phonetic": "/.../",
				"example": "She wants to yield this task.",
				"exampleZh": "她想产出这个任务。"
			},
			{
				"id": 3408,
				"en": "affection",
				"zh": "感情",
				"phonetic": "/ʃən/",
				"example": "The affection is very useful.",
				"exampleZh": "感情非常有用。"
			},
			{
				"id": 3409,
				"en": "afterward",
				"zh": "之后",
				"phonetic": "/.../",
				"example": "She afterward agreed with us.",
				"exampleZh": "她之后地同意了我们的意见。"
			},
			{
				"id": 3410,
				"en": "aircraft",
				"zh": "飞机",
				"phonetic": "/eɪ/",
				"example": "aircraft plays a key role in our life.",
				"exampleZh": "飞机在我们的生活中起着关键作用。"
			},
			{
				"id": 3411,
				"en": "album",
				"zh": "相册",
				"phonetic": "/.../",
				"example": "This is an important album.",
				"exampleZh": "这是一个重要的相册。"
			},
			{
				"id": 3412,
				"en": "alcohol",
				"zh": "酒精",
				"phonetic": "/.../",
				"example": "I really like the alcohol.",
				"exampleZh": "我真的很喜欢这个酒精。"
			},
			{
				"id": 3413,
				"en": "alongside",
				"zh": "在...旁",
				"phonetic": "/.../",
				"example": "Let's talk about alongside.",
				"exampleZh": "让我们来谈谈在...旁吧。"
			},
			{
				"id": 3414,
				"en": "ambition",
				"zh": "野心",
				"phonetic": "/ʃən/",
				"example": "Do you understand this ambition?",
				"exampleZh": "你理解这个野心吗？"
			},
			{
				"id": 3415,
				"en": "amuse",
				"zh": "娱乐",
				"phonetic": "/.../",
				"example": "I need to amuse before the deadline.",
				"exampleZh": "我需要在截止日期前娱乐。"
			},
			{
				"id": 3416,
				"en": "ancestor",
				"zh": "祖先",
				"phonetic": "/əns/",
				"example": "This is an important ancestor.",
				"exampleZh": "这是一个重要的祖先。"
			},
			{
				"id": 3417,
				"en": "appeal",
				"zh": "呼吁",
				"phonetic": "/iː/",
				"example": "She wants to appeal this task.",
				"exampleZh": "她想呼吁这个任务。"
			},
			{
				"id": 3418,
				"en": "approach",
				"zh": "方法",
				"phonetic": "/tʃ/",
				"example": "The approach is very useful.",
				"exampleZh": "方法非常有用。"
			},
			{
				"id": 3419,
				"en": "assemble",
				"zh": "组装",
				"phonetic": "/.../",
				"example": "They decided to assemble the plan.",
				"exampleZh": "他们决定组装这个计划。"
			},
			{
				"id": 3420,
				"en": "awful",
				"zh": "可怕的",
				"phonetic": "/fəl/",
				"example": "He found the task awful.",
				"exampleZh": "他发现这个任务是可怕的的。"
			},
			{
				"id": 3421,
				"en": "bacteria",
				"zh": "细菌",
				"phonetic": "/.../",
				"example": "This is an important bacteria.",
				"exampleZh": "这是一个重要的细菌。"
			},
			{
				"id": 3422,
				"en": "beast",
				"zh": "野兽",
				"phonetic": "/iː/",
				"example": "I really like the beast.",
				"exampleZh": "我真的很喜欢这个野兽。"
			},
			{
				"id": 3423,
				"en": "behave",
				"zh": "行为",
				"phonetic": "/.../",
				"example": "Let's behave together.",
				"exampleZh": "让我们一起行为吧。"
			},
			{
				"id": 3424,
				"en": "beneath",
				"zh": "在...之下",
				"phonetic": "/θ/",
				"example": "I think beneath is important.",
				"exampleZh": "我认为在...之下很重要。"
			},
			{
				"id": 3425,
				"en": "breadth",
				"zh": "宽度",
				"phonetic": "/θ/",
				"example": "breadth plays a key role in our life.",
				"exampleZh": "宽度在我们的生活中起着关键作用。"
			},
			{
				"id": 3426,
				"en": "bureau",
				"zh": "局",
				"phonetic": "/iː/",
				"example": "This is an important bureau.",
				"exampleZh": "这是一个重要的局。"
			},
			{
				"id": 3427,
				"en": "candidate",
				"zh": "候选人",
				"phonetic": "/.../",
				"example": "I really like the candidate.",
				"exampleZh": "我真的很喜欢这个候选人。"
			},
			{
				"id": 3428,
				"en": "cargo",
				"zh": "货物",
				"phonetic": "/.../",
				"example": "The cargo is very useful.",
				"exampleZh": "货物非常有用。"
			},
			{
				"id": 3429,
				"en": "cemetery",
				"zh": "墓地",
				"phonetic": "/.../",
				"example": "Do you understand this cemetery?",
				"exampleZh": "你理解这个墓地吗？"
			},
			{
				"id": 3430,
				"en": "circumstance",
				"zh": "情况",
				"phonetic": "/əns/",
				"example": "circumstance plays a key role in our life.",
				"exampleZh": "情况在我们的生活中起着关键作用。"
			},
			{
				"id": 3431,
				"en": "courtesy",
				"zh": "礼貌",
				"phonetic": "/aʊ/",
				"example": "This is an important courtesy.",
				"exampleZh": "这是一个重要的礼貌。"
			},
			{
				"id": 3432,
				"en": "criterion",
				"zh": "标准",
				"phonetic": "/.../",
				"example": "I really like the criterion.",
				"exampleZh": "我真的很喜欢这个标准。"
			},
			{
				"id": 3433,
				"en": "delight",
				"zh": "高兴",
				"phonetic": "/aɪt/",
				"example": "The delight is very useful.",
				"exampleZh": "高兴非常有用。"
			},
			{
				"id": 3434,
				"en": "descend",
				"zh": "下降",
				"phonetic": "/.../",
				"example": "They decided to descend the plan.",
				"exampleZh": "他们决定下降这个计划。"
			},
			{
				"id": 3435,
				"en": "donation",
				"zh": "捐赠",
				"phonetic": "/ʃən/",
				"example": "donation plays a key role in our life.",
				"exampleZh": "捐赠在我们的生活中起着关键作用。"
			},
			{
				"id": 3436,
				"en": "fare",
				"zh": "费用",
				"phonetic": "/.../",
				"example": "This is an important fare.",
				"exampleZh": "这是一个重要的费用。"
			},
			{
				"id": 3437,
				"en": "feasible",
				"zh": "可行的",
				"phonetic": "/ɪbəl/",
				"example": "She looks feasible today.",
				"exampleZh": "她今天看起来很可行的。"
			},
			{
				"id": 3438,
				"en": "flock",
				"zh": "群",
				"phonetic": "/k/",
				"example": "The flock is very useful.",
				"exampleZh": "群非常有用。"
			},
			{
				"id": 3439,
				"en": "forum",
				"zh": "论坛",
				"phonetic": "/.../",
				"example": "Do you understand this forum?",
				"exampleZh": "你理解这个论坛吗？"
			},
			{
				"id": 3440,
				"en": "framework",
				"zh": "框架",
				"phonetic": "/.../",
				"example": "framework plays a key role in our life.",
				"exampleZh": "框架在我们的生活中起着关键作用。"
			},
			{
				"id": 3441,
				"en": "fulfill",
				"zh": "履行",
				"phonetic": "/.../",
				"example": "We should fulfill more carefully.",
				"exampleZh": "我们应该更仔细地履行。"
			},
			{
				"id": 3442,
				"en": "furious",
				"zh": "狂怒的",
				"phonetic": "/iəs/",
				"example": "She looks furious today.",
				"exampleZh": "她今天看起来很狂怒的。"
			},
			{
				"id": 3443,
				"en": "gaze",
				"zh": "凝视",
				"phonetic": "/.../",
				"example": "Let's gaze together.",
				"exampleZh": "让我们一起凝视吧。"
			},
			{
				"id": 3444,
				"en": "grave",
				"zh": "坟墓",
				"phonetic": "/.../",
				"example": "Do you understand this grave?",
				"exampleZh": "你理解这个坟墓吗？"
			},
			{
				"id": 3445,
				"en": "harmony",
				"zh": "和谐",
				"phonetic": "/.../",
				"example": "harmony plays a key role in our life.",
				"exampleZh": "和谐在我们的生活中起着关键作用。"
			},
			{
				"id": 3446,
				"en": "humanity",
				"zh": "人类",
				"phonetic": "/.../",
				"example": "This is an important humanity.",
				"exampleZh": "这是一个重要的人类。"
			},
			{
				"id": 3447,
				"en": "humble",
				"zh": "谦逊的",
				"phonetic": "/.../",
				"example": "She looks humble today.",
				"exampleZh": "她今天看起来很谦逊的。"
			},
			{
				"id": 3448,
				"en": "migration",
				"zh": "迁移",
				"phonetic": "/ʃən/",
				"example": "The migration is very useful.",
				"exampleZh": "迁移非常有用。"
			},
			{
				"id": 3449,
				"en": "nonsense",
				"zh": "胡说",
				"phonetic": "/.../",
				"example": "Do you understand this nonsense?",
				"exampleZh": "你理解这个胡说吗？"
			},
			{
				"id": 3450,
				"en": "norm",
				"zh": "规范",
				"phonetic": "/.../",
				"example": "norm plays a key role in our life.",
				"exampleZh": "规范在我们的生活中起着关键作用。"
			},
			{
				"id": 3451,
				"en": "oath",
				"zh": "誓言",
				"phonetic": "/θ/",
				"example": "This is an important oath.",
				"exampleZh": "这是一个重要的誓言。"
			},
			{
				"id": 3452,
				"en": "observation",
				"zh": "观察",
				"phonetic": "/ʃən/",
				"example": "I really like the observation.",
				"exampleZh": "我真的很喜欢这个观察。"
			},
			{
				"id": 3453,
				"en": "partial",
				"zh": "部分的",
				"phonetic": "/ʃəl/",
				"example": "It's a partial idea.",
				"exampleZh": "这是一个部分的的主意。"
			},
			{
				"id": 3454,
				"en": "penetrate",
				"zh": "穿透",
				"phonetic": "/.../",
				"example": "They decided to penetrate the plan.",
				"exampleZh": "他们决定穿透这个计划。"
			},
			{
				"id": 3455,
				"en": "posture",
				"zh": "姿势",
				"phonetic": "/tʃər/",
				"example": "posture plays a key role in our life.",
				"exampleZh": "姿势在我们的生活中起着关键作用。"
			},
			{
				"id": 3456,
				"en": "privilege",
				"zh": "特权",
				"phonetic": "/.../",
				"example": "This is an important privilege.",
				"exampleZh": "这是一个重要的特权。"
			},
			{
				"id": 3457,
				"en": "pulse",
				"zh": "脉搏",
				"phonetic": "/.../",
				"example": "I really like the pulse.",
				"exampleZh": "我真的很喜欢这个脉搏。"
			},
			{
				"id": 3458,
				"en": "span",
				"zh": "跨度",
				"phonetic": "/.../",
				"example": "The span is very useful.",
				"exampleZh": "跨度非常有用。"
			},
			{
				"id": 3459,
				"en": "suppress",
				"zh": "压制",
				"phonetic": "/.../",
				"example": "They decided to suppress the plan.",
				"exampleZh": "他们决定压制这个计划。"
			},
			{
				"id": 3460,
				"en": "undergraduate",
				"zh": "本科生",
				"phonetic": "/.../",
				"example": "undergraduate plays a key role in our life.",
				"exampleZh": "本科生在我们的生活中起着关键作用。"
			},
			{
				"id": 3461,
				"en": "vanity",
				"zh": "虚荣",
				"phonetic": "/.../",
				"example": "This is an important vanity.",
				"exampleZh": "这是一个重要的虚荣。"
			},
			{
				"id": 3462,
				"en": "voluntary",
				"zh": "自愿的",
				"phonetic": "/.../",
				"example": "She looks voluntary today.",
				"exampleZh": "她今天看起来很自愿的。"
			},
			{
				"id": 3463,
				"en": "abbreviate",
				"zh": "缩写",
				"phonetic": "/.../",
				"example": "Let's abbreviate together.",
				"exampleZh": "让我们一起缩写吧。"
			},
			{
				"id": 3464,
				"en": "abdomen",
				"zh": "腹部",
				"phonetic": "/.../",
				"example": "Do you understand this abdomen?",
				"exampleZh": "你理解这个腹部吗？"
			},
			{
				"id": 3465,
				"en": "abnormal",
				"zh": "不正常的",
				"phonetic": "/.../",
				"example": "He found the task abnormal.",
				"exampleZh": "他发现这个任务是不正常的的。"
			},
			{
				"id": 3466,
				"en": "abolish",
				"zh": "废除",
				"phonetic": "/ʃ/",
				"example": "We should abolish more carefully.",
				"exampleZh": "我们应该更仔细地废除。"
			},
			{
				"id": 3467,
				"en": "abortion",
				"zh": "堕胎",
				"phonetic": "/ʃən/",
				"example": "I really like the abortion.",
				"exampleZh": "我真的很喜欢这个堕胎。"
			},
			{
				"id": 3468,
				"en": "abrupt",
				"zh": "突然的",
				"phonetic": "/.../",
				"example": "It's a abrupt idea.",
				"exampleZh": "这是一个突然的的主意。"
			},
			{
				"id": 3469,
				"en": "abundant",
				"zh": "丰富的",
				"phonetic": "/.../",
				"example": "The result is quite abundant.",
				"exampleZh": "结果是相当丰富的的。"
			},
			{
				"id": 3470,
				"en": "abuse",
				"zh": "滥用",
				"phonetic": "/.../",
				"example": "I need to abuse before the deadline.",
				"exampleZh": "我需要在截止日期前滥用。"
			},
			{
				"id": 3471,
				"en": "academy",
				"zh": "学院",
				"phonetic": "/.../",
				"example": "This is an important academy.",
				"exampleZh": "这是一个重要的学院。"
			},
			{
				"id": 3472,
				"en": "acceptance",
				"zh": "接受",
				"phonetic": "/əns/",
				"example": "I really like the acceptance.",
				"exampleZh": "我真的很喜欢这个接受。"
			},
			{
				"id": 3473,
				"en": "accessible",
				"zh": "可接近的",
				"phonetic": "/ɪbəl/",
				"example": "It's a accessible idea.",
				"exampleZh": "这是一个可接近的的主意。"
			},
			{
				"id": 3474,
				"en": "accommodate",
				"zh": "容纳",
				"phonetic": "/.../",
				"example": "They decided to accommodate the plan.",
				"exampleZh": "他们决定容纳这个计划。"
			},
			{
				"id": 3475,
				"en": "accommodation",
				"zh": "住宿",
				"phonetic": "/ʃən/",
				"example": "accommodation plays a key role in our life.",
				"exampleZh": "住宿在我们的生活中起着关键作用。"
			},
			{
				"id": 3476,
				"en": "accomplish",
				"zh": "完成",
				"phonetic": "/ʃ/",
				"example": "We should accomplish more carefully.",
				"exampleZh": "我们应该更仔细地完成。"
			},
			{
				"id": 3477,
				"en": "accountant",
				"zh": "会计",
				"phonetic": "/aʊ/",
				"example": "I really like the accountant.",
				"exampleZh": "我真的很喜欢这个会计。"
			},
			{
				"id": 3478,
				"en": "accuracy",
				"zh": "准确性",
				"phonetic": "/.../",
				"example": "The accuracy is very useful.",
				"exampleZh": "准确性非常有用。"
			},
			{
				"id": 3479,
				"en": "acquaintance",
				"zh": "熟人",
				"phonetic": "/əns/",
				"example": "Do you understand this acquaintance?",
				"exampleZh": "你理解这个熟人吗？"
			},
			{
				"id": 3480,
				"en": "acquisition",
				"zh": "获得",
				"phonetic": "/ʃən/",
				"example": "acquisition plays a key role in our life.",
				"exampleZh": "获得在我们的生活中起着关键作用。"
			},
			{
				"id": 3481,
				"en": "activate",
				"zh": "激活",
				"phonetic": "/.../",
				"example": "We should activate more carefully.",
				"exampleZh": "我们应该更仔细地激活。"
			},
			{
				"id": 3482,
				"en": "acute",
				"zh": "急性的",
				"phonetic": "/.../",
				"example": "She looks acute today.",
				"exampleZh": "她今天看起来很急性的。"
			},
			{
				"id": 3483,
				"en": "addiction",
				"zh": "瘾",
				"phonetic": "/ʃən/",
				"example": "The addiction is very useful.",
				"exampleZh": "瘾非常有用。"
			},
			{
				"id": 3484,
				"en": "adhere",
				"zh": "坚持",
				"phonetic": "/.../",
				"example": "They decided to adhere the plan.",
				"exampleZh": "他们决定坚持这个计划。"
			},
			{
				"id": 3485,
				"en": "adjacent",
				"zh": "邻近的",
				"phonetic": "/.../",
				"example": "He found the task adjacent.",
				"exampleZh": "他发现这个任务是邻近的的。"
			},
			{
				"id": 3486,
				"en": "administer",
				"zh": "管理",
				"phonetic": "/ər/",
				"example": "We should administer more carefully.",
				"exampleZh": "我们应该更仔细地管理。"
			},
			{
				"id": 3487,
				"en": "admission",
				"zh": "准许",
				"phonetic": "/ʃən/",
				"example": "I really like the admission.",
				"exampleZh": "我真的很喜欢这个准许。"
			},
			{
				"id": 3488,
				"en": "adverse",
				"zh": "不利的",
				"phonetic": "/.../",
				"example": "It's a adverse idea.",
				"exampleZh": "这是一个不利的的主意。"
			},
			{
				"id": 3489,
				"en": "aesthetic",
				"zh": "美学的",
				"phonetic": "/.../",
				"example": "The result is quite aesthetic.",
				"exampleZh": "结果是相当美学的的。"
			},
			{
				"id": 3490,
				"en": "affiliate",
				"zh": "附属",
				"phonetic": "/.../",
				"example": "I need to affiliate before the deadline.",
				"exampleZh": "我需要在截止日期前附属。"
			},
			{
				"id": 3491,
				"en": "affirm",
				"zh": "肯定",
				"phonetic": "/.../",
				"example": "We should affirm more carefully.",
				"exampleZh": "我们应该更仔细地肯定。"
			},
			{
				"id": 3492,
				"en": "agenda",
				"zh": "议程",
				"phonetic": "/.../",
				"example": "I really like the agenda.",
				"exampleZh": "我真的很喜欢这个议程。"
			},
			{
				"id": 3493,
				"en": "agent",
				"zh": "代理人",
				"phonetic": "/.../",
				"example": "The agent is very useful.",
				"exampleZh": "代理人非常有用。"
			},
			{
				"id": 3494,
				"en": "aggravate",
				"zh": "加重",
				"phonetic": "/.../",
				"example": "They decided to aggravate the plan.",
				"exampleZh": "他们决定加重这个计划。"
			},
			{
				"id": 3495,
				"en": "aggregate",
				"zh": "总计",
				"phonetic": "/.../",
				"example": "aggregate plays a key role in our life.",
				"exampleZh": "总计在我们的生活中起着关键作用。"
			},
			{
				"id": 3496,
				"en": "agonize",
				"zh": "痛苦",
				"phonetic": "/.../",
				"example": "We should agonize more carefully.",
				"exampleZh": "我们应该更仔细地痛苦。"
			},
			{
				"id": 3497,
				"en": "alert",
				"zh": "警惕的",
				"phonetic": "/.../",
				"example": "She looks alert today.",
				"exampleZh": "她今天看起来很警惕的。"
			},
			{
				"id": 3498,
				"en": "alien",
				"zh": "外星人",
				"phonetic": "/.../",
				"example": "The alien is very useful.",
				"exampleZh": "外星人非常有用。"
			},
			{
				"id": 3499,
				"en": "alienate",
				"zh": "疏远",
				"phonetic": "/.../",
				"example": "They decided to alienate the plan.",
				"exampleZh": "他们决定疏远这个计划。"
			},
			{
				"id": 3500,
				"en": "align",
				"zh": "对齐",
				"phonetic": "/.../",
				"example": "I need to align before the deadline.",
				"exampleZh": "我需要在截止日期前对齐。"
			},
			{
				"id": 3501,
				"en": "allegation",
				"zh": "指控",
				"phonetic": "/ʃən/",
				"example": "This is an important allegation.",
				"exampleZh": "这是一个重要的指控。"
			},
			{
				"id": 3502,
				"en": "allege",
				"zh": "声称",
				"phonetic": "/.../",
				"example": "She wants to allege this task.",
				"exampleZh": "她想声称这个任务。"
			},
			{
				"id": 3503,
				"en": "allowance",
				"zh": "津贴",
				"phonetic": "/əns/",
				"example": "The allowance is very useful.",
				"exampleZh": "津贴非常有用。"
			},
			{
				"id": 3504,
				"en": "ally",
				"zh": "盟友",
				"phonetic": "/li/",
				"example": "Do you understand this ally?",
				"exampleZh": "你理解这个盟友吗？"
			},
			{
				"id": 3505,
				"en": "alter",
				"zh": "改变",
				"phonetic": "/ər/",
				"example": "I need to alter before the deadline.",
				"exampleZh": "我需要在截止日期前改变。"
			},
			{
				"id": 3506,
				"en": "altitude",
				"zh": "海拔",
				"phonetic": "/.../",
				"example": "This is an important altitude.",
				"exampleZh": "这是一个重要的海拔。"
			},
			{
				"id": 3507,
				"en": "amateur",
				"zh": "业余的",
				"phonetic": "/.../",
				"example": "She looks amateur today.",
				"exampleZh": "她今天看起来很业余的。"
			},
			{
				"id": 3508,
				"en": "ambassador",
				"zh": "大使",
				"phonetic": "/ər/",
				"example": "The ambassador is very useful.",
				"exampleZh": "大使非常有用。"
			},
			{
				"id": 3509,
				"en": "ambitious",
				"zh": "有雄心的",
				"phonetic": "/ʃəs/",
				"example": "The result is quite ambitious.",
				"exampleZh": "结果是相当有雄心的的。"
			},
			{
				"id": 3510,
				"en": "amend",
				"zh": "修改",
				"phonetic": "/.../",
				"example": "I need to amend before the deadline.",
				"exampleZh": "我需要在截止日期前修改。"
			},
			{
				"id": 3511,
				"en": "amid",
				"zh": "在...中",
				"phonetic": "/.../",
				"example": "Let's talk about amid.",
				"exampleZh": "让我们来谈谈在...中吧。"
			},
			{
				"id": 3512,
				"en": "ample",
				"zh": "充足的",
				"phonetic": "/.../",
				"example": "She looks ample today.",
				"exampleZh": "她今天看起来很充足的。"
			},
			{
				"id": 3513,
				"en": "analogy",
				"zh": "类比",
				"phonetic": "/.../",
				"example": "The analogy is very useful.",
				"exampleZh": "类比非常有用。"
			},
			{
				"id": 3514,
				"en": "analysis",
				"zh": "分析",
				"phonetic": "/.../",
				"example": "Do you understand this analysis?",
				"exampleZh": "你理解这个分析吗？"
			},
			{
				"id": 3515,
				"en": "anchor",
				"zh": "锚",
				"phonetic": "/ər/",
				"example": "anchor plays a key role in our life.",
				"exampleZh": "锚在我们的生活中起着关键作用。"
			},
			{
				"id": 3516,
				"en": "angel",
				"zh": "天使",
				"phonetic": "/.../",
				"example": "This is an important angel.",
				"exampleZh": "这是一个重要的天使。"
			},
			{
				"id": 3517,
				"en": "anonymous",
				"zh": "匿名的",
				"phonetic": "/əs/",
				"example": "She looks anonymous today.",
				"exampleZh": "她今天看起来很匿名的。"
			},
			{
				"id": 3518,
				"en": "anticipate",
				"zh": "预期",
				"phonetic": "/.../",
				"example": "Let's anticipate together.",
				"exampleZh": "让我们一起预期吧。"
			},
			{
				"id": 3519,
				"en": "antique",
				"zh": "古董",
				"phonetic": "/kw/",
				"example": "Do you understand this antique?",
				"exampleZh": "你理解这个古董吗？"
			},
			{
				"id": 3520,
				"en": "anxiety",
				"zh": "焦虑",
				"phonetic": "/.../",
				"example": "anxiety plays a key role in our life.",
				"exampleZh": "焦虑在我们的生活中起着关键作用。"
			},
			{
				"id": 3521,
				"en": "apparatus",
				"zh": "仪器",
				"phonetic": "/.../",
				"example": "This is an important apparatus.",
				"exampleZh": "这是一个重要的仪器。"
			},
			{
				"id": 3522,
				"en": "applicant",
				"zh": "申请人",
				"phonetic": "/.../",
				"example": "I really like the applicant.",
				"exampleZh": "我真的很喜欢这个申请人。"
			},
			{
				"id": 3523,
				"en": "appraisal",
				"zh": "评估",
				"phonetic": "/eɪ/",
				"example": "The appraisal is very useful.",
				"exampleZh": "评估非常有用。"
			},
			{
				"id": 3524,
				"en": "approximate",
				"zh": "大约的",
				"phonetic": "/.../",
				"example": "The result is quite approximate.",
				"exampleZh": "结果是相当大约的的。"
			},
			{
				"id": 3525,
				"en": "arbitrary",
				"zh": "任意的",
				"phonetic": "/.../",
				"example": "He found the task arbitrary.",
				"exampleZh": "他发现这个任务是任意的的。"
			},
			{
				"id": 3526,
				"en": "archive",
				"zh": "档案",
				"phonetic": "/.../",
				"example": "This is an important archive.",
				"exampleZh": "这是一个重要的档案。"
			},
			{
				"id": 3527,
				"en": "arithmetic",
				"zh": "算术",
				"phonetic": "/.../",
				"example": "I really like the arithmetic.",
				"exampleZh": "我真的很喜欢这个算术。"
			},
			{
				"id": 3528,
				"en": "arouse",
				"zh": "唤起",
				"phonetic": "/aʊ/",
				"example": "Let's arouse together.",
				"exampleZh": "让我们一起唤起吧。"
			},
			{
				"id": 3529,
				"en": "array",
				"zh": "数组",
				"phonetic": "/eɪ/",
				"example": "Do you understand this array?",
				"exampleZh": "你理解这个数组吗？"
			},
			{
				"id": 3530,
				"en": "arrogant",
				"zh": "傲慢的",
				"phonetic": "/.../",
				"example": "He found the task arrogant.",
				"exampleZh": "他发现这个任务是傲慢的的。"
			},
			{
				"id": 3531,
				"en": "articulate",
				"zh": "清晰表达",
				"phonetic": "/.../",
				"example": "We should articulate more carefully.",
				"exampleZh": "我们应该更仔细地清晰表达。"
			},
			{
				"id": 3532,
				"en": "ascend",
				"zh": "上升",
				"phonetic": "/.../",
				"example": "She wants to ascend this task.",
				"exampleZh": "她想上升这个任务。"
			},
			{
				"id": 3533,
				"en": "aspire",
				"zh": "渴望",
				"phonetic": "/.../",
				"example": "Let's aspire together.",
				"exampleZh": "让我们一起渴望吧。"
			},
			{
				"id": 3534,
				"en": "assassinate",
				"zh": "暗杀",
				"phonetic": "/.../",
				"example": "They decided to assassinate the plan.",
				"exampleZh": "他们决定暗杀这个计划。"
			},
			{
				"id": 3535,
				"en": "assault",
				"zh": "攻击",
				"phonetic": "/ɔː/",
				"example": "assault plays a key role in our life.",
				"exampleZh": "攻击在我们的生活中起着关键作用。"
			},
			{
				"id": 3536,
				"en": "assert",
				"zh": "断言",
				"phonetic": "/.../",
				"example": "We should assert more carefully.",
				"exampleZh": "我们应该更仔细地断言。"
			},
			{
				"id": 3537,
				"en": "asset",
				"zh": "资产",
				"phonetic": "/.../",
				"example": "I really like the asset.",
				"exampleZh": "我真的很喜欢这个资产。"
			},
			{
				"id": 3538,
				"en": "assimilate",
				"zh": "同化",
				"phonetic": "/.../",
				"example": "Let's assimilate together.",
				"exampleZh": "让我们一起同化吧。"
			},
			{
				"id": 3539,
				"en": "assumption",
				"zh": "假设",
				"phonetic": "/ʃən/",
				"example": "Do you understand this assumption?",
				"exampleZh": "你理解这个假设吗？"
			},
			{
				"id": 3540,
				"en": "assure",
				"zh": "保证",
				"phonetic": "/ʒər/",
				"example": "I need to assure before the deadline.",
				"exampleZh": "我需要在截止日期前保证。"
			},
			{
				"id": 3541,
				"en": "astonish",
				"zh": "使惊讶",
				"phonetic": "/ʃ/",
				"example": "We should astonish more carefully.",
				"exampleZh": "我们应该更仔细地使惊讶。"
			},
			{
				"id": 3542,
				"en": "astronomy",
				"zh": "天文学",
				"phonetic": "/.../",
				"example": "I really like the astronomy.",
				"exampleZh": "我真的很喜欢这个天文学。"
			},
			{
				"id": 3543,
				"en": "athlete",
				"zh": "运动员",
				"phonetic": "/.../",
				"example": "The athlete is very useful.",
				"exampleZh": "运动员非常有用。"
			},
			{
				"id": 3544,
				"en": "attain",
				"zh": "达到",
				"phonetic": "/eɪ/",
				"example": "They decided to attain the plan.",
				"exampleZh": "他们决定达到这个计划。"
			},
			{
				"id": 3545,
				"en": "attendance",
				"zh": "出席",
				"phonetic": "/əns/",
				"example": "attendance plays a key role in our life.",
				"exampleZh": "出席在我们的生活中起着关键作用。"
			},
			{
				"id": 3546,
				"en": "attorney",
				"zh": "律师",
				"phonetic": "/.../",
				"example": "This is an important attorney.",
				"exampleZh": "这是一个重要的律师。"
			},
			{
				"id": 3547,
				"en": "attribute",
				"zh": "属性",
				"phonetic": "/.../",
				"example": "I really like the attribute.",
				"exampleZh": "我真的很喜欢这个属性。"
			},
			{
				"id": 3548,
				"en": "auction",
				"zh": "拍卖",
				"phonetic": "/ʃən/",
				"example": "The auction is very useful.",
				"exampleZh": "拍卖非常有用。"
			},
			{
				"id": 3549,
				"en": "audit",
				"zh": "审计",
				"phonetic": "/ɔː/",
				"example": "They decided to audit the plan.",
				"exampleZh": "他们决定审计这个计划。"
			},
			{
				"id": 3550,
				"en": "authentic",
				"zh": "真正的",
				"phonetic": "/ɔː/",
				"example": "He found the task authentic.",
				"exampleZh": "他发现这个任务是真正的的。"
			},
			{
				"id": 3551,
				"en": "authorize",
				"zh": "授权",
				"phonetic": "/ɔː/",
				"example": "We should authorize more carefully.",
				"exampleZh": "我们应该更仔细地授权。"
			},
			{
				"id": 3552,
				"en": "autonomous",
				"zh": "自治的",
				"phonetic": "/əs/",
				"example": "She looks autonomous today.",
				"exampleZh": "她今天看起来很自治的。"
			},
			{
				"id": 3553,
				"en": "avail",
				"zh": "利用",
				"phonetic": "/eɪ/",
				"example": "Let's avail together.",
				"exampleZh": "让我们一起利用吧。"
			},
			{
				"id": 3554,
				"en": "await",
				"zh": "等待",
				"phonetic": "/eɪ/",
				"example": "They decided to await the plan.",
				"exampleZh": "他们决定等待这个计划。"
			},
			{
				"id": 3555,
				"en": "awkward",
				"zh": "尴尬的",
				"phonetic": "/ɔː/",
				"example": "He found the task awkward.",
				"exampleZh": "他发现这个任务是尴尬的的。"
			},
			{
				"id": 3556,
				"en": "axis",
				"zh": "轴线",
				"phonetic": "/.../",
				"example": "This is an important axis.",
				"exampleZh": "这是一个重要的轴线。"
			},
			{
				"id": 3557,
				"en": "bachelor",
				"zh": "学士",
				"phonetic": "/ər/",
				"example": "I really like the bachelor.",
				"exampleZh": "我真的很喜欢这个学士。"
			},
			{
				"id": 3558,
				"en": "backup",
				"zh": "备份",
				"phonetic": "/.../",
				"example": "The backup is very useful.",
				"exampleZh": "备份非常有用。"
			},
			{
				"id": 3559,
				"en": "bail",
				"zh": "保释",
				"phonetic": "/eɪ/",
				"example": "Do you understand this bail?",
				"exampleZh": "你理解这个保释吗？"
			},
			{
				"id": 3560,
				"en": "bald",
				"zh": "秃的",
				"phonetic": "/.../",
				"example": "He found the task bald.",
				"exampleZh": "他发现这个任务是秃的的。"
			},
			{
				"id": 3561,
				"en": "ballot",
				"zh": "投票",
				"phonetic": "/.../",
				"example": "This is an important ballot.",
				"exampleZh": "这是一个重要的投票。"
			},
			{
				"id": 3562,
				"en": "banner",
				"zh": "横幅",
				"phonetic": "/ər/",
				"example": "I really like the banner.",
				"exampleZh": "我真的很喜欢这个横幅。"
			},
			{
				"id": 3563,
				"en": "barely",
				"zh": "几乎不",
				"phonetic": "/li/",
				"example": "They worked barely on the project.",
				"exampleZh": "他们几乎不地在这个项目上工作。"
			},
			{
				"id": 3564,
				"en": "barrel",
				"zh": "桶",
				"phonetic": "/.../",
				"example": "Do you understand this barrel?",
				"exampleZh": "你理解这个桶吗？"
			},
			{
				"id": 3565,
				"en": "basically",
				"zh": "基本上",
				"phonetic": "/li/",
				"example": "She basically agreed with us.",
				"exampleZh": "她基本上地同意了我们的意见。"
			},
			{
				"id": 3566,
				"en": "batch",
				"zh": "一批",
				"phonetic": "/tʃ/",
				"example": "This is an important batch.",
				"exampleZh": "这是一个重要的一批。"
			},
			{
				"id": 3567,
				"en": "battery",
				"zh": "电池",
				"phonetic": "/.../",
				"example": "I really like the battery.",
				"exampleZh": "我真的很喜欢这个电池。"
			},
			{
				"id": 3568,
				"en": "beam",
				"zh": "光束",
				"phonetic": "/iː/",
				"example": "The beam is very useful.",
				"exampleZh": "光束非常有用。"
			},
			{
				"id": 3569,
				"en": "belly",
				"zh": "肚子",
				"phonetic": "/li/",
				"example": "Do you understand this belly?",
				"exampleZh": "你理解这个肚子吗？"
			},
			{
				"id": 3570,
				"en": "benchmark",
				"zh": "基准",
				"phonetic": "/.../",
				"example": "benchmark plays a key role in our life.",
				"exampleZh": "基准在我们的生活中起着关键作用。"
			},
			{
				"id": 3571,
				"en": "beneficial",
				"zh": "有益的",
				"phonetic": "/ʃəl/",
				"example": "This is very beneficial.",
				"exampleZh": "这非常有益的。"
			},
			{
				"id": 3572,
				"en": "bias",
				"zh": "偏见",
				"phonetic": "/.../",
				"example": "I really like the bias.",
				"exampleZh": "我真的很喜欢这个偏见。"
			},
			{
				"id": 3573,
				"en": "bid",
				"zh": "出价",
				"phonetic": "/.../",
				"example": "Let's bid together.",
				"exampleZh": "让我们一起出价吧。"
			},
			{
				"id": 3574,
				"en": "bind",
				"zh": "绑定",
				"phonetic": "/.../",
				"example": "They decided to bind the plan.",
				"exampleZh": "他们决定绑定这个计划。"
			},
			{
				"id": 3575,
				"en": "bishop",
				"zh": "主教",
				"phonetic": "/.../",
				"example": "bishop plays a key role in our life.",
				"exampleZh": "主教在我们的生活中起着关键作用。"
			},
			{
				"id": 3576,
				"en": "bizarre",
				"zh": "奇异的",
				"phonetic": "/.../",
				"example": "This is very bizarre.",
				"exampleZh": "这非常奇异的。"
			},
			{
				"id": 3577,
				"en": "blast",
				"zh": "爆炸",
				"phonetic": "/.../",
				"example": "I really like the blast.",
				"exampleZh": "我真的很喜欢这个爆炸。"
			},
			{
				"id": 3578,
				"en": "blaze",
				"zh": "火焰",
				"phonetic": "/.../",
				"example": "The blaze is very useful.",
				"exampleZh": "火焰非常有用。"
			},
			{
				"id": 3579,
				"en": "bleak",
				"zh": "荒凉的",
				"phonetic": "/iː/",
				"example": "The result is quite bleak.",
				"exampleZh": "结果是相当荒凉的的。"
			},
			{
				"id": 3580,
				"en": "blend",
				"zh": "混合",
				"phonetic": "/.../",
				"example": "I need to blend before the deadline.",
				"exampleZh": "我需要在截止日期前混合。"
			},
			{
				"id": 3581,
				"en": "bloom",
				"zh": "开花",
				"phonetic": "/uː/",
				"example": "We should bloom more carefully.",
				"exampleZh": "我们应该更仔细地开花。"
			},
			{
				"id": 3582,
				"en": "blossom",
				"zh": "花",
				"phonetic": "/.../",
				"example": "I really like the blossom.",
				"exampleZh": "我真的很喜欢这个花。"
			},
			{
				"id": 3583,
				"en": "blueprint",
				"zh": "蓝图",
				"phonetic": "/.../",
				"example": "The blueprint is very useful.",
				"exampleZh": "蓝图非常有用。"
			},
			{
				"id": 3584,
				"en": "blunt",
				"zh": "直言不讳的",
				"phonetic": "/.../",
				"example": "The result is quite blunt.",
				"exampleZh": "结果是相当直言不讳的的。"
			},
			{
				"id": 3585,
				"en": "boast",
				"zh": "吹嘘",
				"phonetic": "/oʊ/",
				"example": "I need to boast before the deadline.",
				"exampleZh": "我需要在截止日期前吹嘘。"
			},
			{
				"id": 3586,
				"en": "bolt",
				"zh": "螺栓",
				"phonetic": "/.../",
				"example": "This is an important bolt.",
				"exampleZh": "这是一个重要的螺栓。"
			},
			{
				"id": 3587,
				"en": "bonus",
				"zh": "奖金",
				"phonetic": "/.../",
				"example": "I really like the bonus.",
				"exampleZh": "我真的很喜欢这个奖金。"
			},
			{
				"id": 3588,
				"en": "boost",
				"zh": "提高",
				"phonetic": "/uː/",
				"example": "Let's boost together.",
				"exampleZh": "让我们一起提高吧。"
			},
			{
				"id": 3589,
				"en": "borough",
				"zh": "行政区",
				"phonetic": "/ʌf/",
				"example": "Do you understand this borough?",
				"exampleZh": "你理解这个行政区吗？"
			},
			{
				"id": 3590,
				"en": "bounce",
				"zh": "弹跳",
				"phonetic": "/aʊ/",
				"example": "I need to bounce before the deadline.",
				"exampleZh": "我需要在截止日期前弹跳。"
			},
			{
				"id": 3591,
				"en": "boundary",
				"zh": "边界",
				"phonetic": "/aʊ/",
				"example": "This is an important boundary.",
				"exampleZh": "这是一个重要的边界。"
			},
			{
				"id": 3592,
				"en": "boycott",
				"zh": "抵制",
				"phonetic": "/ɔɪ/",
				"example": "She wants to boycott this task.",
				"exampleZh": "她想抵制这个任务。"
			},
			{
				"id": 3593,
				"en": "brace",
				"zh": "支架",
				"phonetic": "/.../",
				"example": "The brace is very useful.",
				"exampleZh": "支架非常有用。"
			},
			{
				"id": 3594,
				"en": "bracket",
				"zh": "括号",
				"phonetic": "/.../",
				"example": "Do you understand this bracket?",
				"exampleZh": "你理解这个括号吗？"
			},
			{
				"id": 3595,
				"en": "breach",
				"zh": "违反",
				"phonetic": "/tʃ/",
				"example": "I need to breach before the deadline.",
				"exampleZh": "我需要在截止日期前违反。"
			},
			{
				"id": 3596,
				"en": "breakdown",
				"zh": "故障",
				"phonetic": "/iː/",
				"example": "This is an important breakdown.",
				"exampleZh": "这是一个重要的故障。"
			},
			{
				"id": 3597,
				"en": "brew",
				"zh": "酿造",
				"phonetic": "/.../",
				"example": "She wants to brew this task.",
				"exampleZh": "她想酿造这个任务。"
			},
			{
				"id": 3598,
				"en": "brochure",
				"zh": "小册子",
				"phonetic": "/.../",
				"example": "The brochure is very useful.",
				"exampleZh": "小册子非常有用。"
			},
			{
				"id": 3599,
				"en": "broker",
				"zh": "经纪人",
				"phonetic": "/ər/",
				"example": "Do you understand this broker?",
				"exampleZh": "你理解这个经纪人吗？"
			},
			{
				"id": 3600,
				"en": "bronze",
				"zh": "青铜",
				"phonetic": "/.../",
				"example": "bronze plays a key role in our life.",
				"exampleZh": "青铜在我们的生活中起着关键作用。"
			},
			{
				"id": 3601,
				"en": "browse",
				"zh": "浏览",
				"phonetic": "/aʊ/",
				"example": "We should browse more carefully.",
				"exampleZh": "我们应该更仔细地浏览。"
			},
			{
				"id": 3602,
				"en": "bruise",
				"zh": "瘀伤",
				"phonetic": "/.../",
				"example": "I really like the bruise.",
				"exampleZh": "我真的很喜欢这个瘀伤。"
			},
			{
				"id": 3603,
				"en": "brutal",
				"zh": "残忍的",
				"phonetic": "/.../",
				"example": "It's a brutal idea.",
				"exampleZh": "这是一个残忍的的主意。"
			},
			{
				"id": 3604,
				"en": "bulb",
				"zh": "灯泡",
				"phonetic": "/.../",
				"example": "Do you understand this bulb?",
				"exampleZh": "你理解这个灯泡吗？"
			},
			{
				"id": 3605,
				"en": "bulk",
				"zh": "大量",
				"phonetic": "/.../",
				"example": "bulk plays a key role in our life.",
				"exampleZh": "大量在我们的生活中起着关键作用。"
			},
			{
				"id": 3606,
				"en": "bump",
				"zh": "碰撞",
				"phonetic": "/.../",
				"example": "We should bump more carefully.",
				"exampleZh": "我们应该更仔细地碰撞。"
			},
			{
				"id": 3607,
				"en": "bundle",
				"zh": "捆",
				"phonetic": "/.../",
				"example": "I really like the bundle.",
				"exampleZh": "我真的很喜欢这个捆。"
			},
			{
				"id": 3608,
				"en": "bureaucracy",
				"zh": "官僚机构",
				"phonetic": "/iː/",
				"example": "The bureaucracy is very useful.",
				"exampleZh": "官僚机构非常有用。"
			},
			{
				"id": 3609,
				"en": "cable",
				"zh": "电缆",
				"phonetic": "/əbəl/",
				"example": "Do you understand this cable?",
				"exampleZh": "你理解这个电缆吗？"
			},
			{
				"id": 3610,
				"en": "calorie",
				"zh": "卡路里",
				"phonetic": "/.../",
				"example": "calorie plays a key role in our life.",
				"exampleZh": "卡路里在我们的生活中起着关键作用。"
			},
			{
				"id": 3611,
				"en": "capsule",
				"zh": "胶囊",
				"phonetic": "/.../",
				"example": "This is an important capsule.",
				"exampleZh": "这是一个重要的胶囊。"
			},
			{
				"id": 3612,
				"en": "cardinal",
				"zh": "主要的",
				"phonetic": "/.../",
				"example": "She looks cardinal today.",
				"exampleZh": "她今天看起来很主要的。"
			},
			{
				"id": 3613,
				"en": "carriage",
				"zh": "马车",
				"phonetic": "/.../",
				"example": "The carriage is very useful.",
				"exampleZh": "马车非常有用。"
			},
			{
				"id": 3614,
				"en": "casual",
				"zh": "随意的",
				"phonetic": "/.../",
				"example": "The result is quite casual.",
				"exampleZh": "结果是相当随意的的。"
			},
			{
				"id": 3615,
				"en": "casualty",
				"zh": "伤亡",
				"phonetic": "/.../",
				"example": "casualty plays a key role in our life.",
				"exampleZh": "伤亡在我们的生活中起着关键作用。"
			},
			{
				"id": 3616,
				"en": "cater",
				"zh": "提供餐饮",
				"phonetic": "/ər/",
				"example": "We should cater more carefully.",
				"exampleZh": "我们应该更仔细地提供餐饮。"
			},
			{
				"id": 3617,
				"en": "caution",
				"zh": "谨慎",
				"phonetic": "/ʃən/",
				"example": "I really like the caution.",
				"exampleZh": "我真的很喜欢这个谨慎。"
			},
			{
				"id": 3618,
				"en": "cautious",
				"zh": "谨慎的",
				"phonetic": "/ʃəs/",
				"example": "It's a cautious idea.",
				"exampleZh": "这是一个谨慎的的主意。"
			},
			{
				"id": 3619,
				"en": "cellular",
				"zh": "细胞的",
				"phonetic": "/ɑːr/",
				"example": "The result is quite cellular.",
				"exampleZh": "结果是相当细胞的的。"
			},
			{
				"id": 3620,
				"en": "censor",
				"zh": "审查",
				"phonetic": "/ər/",
				"example": "I need to censor before the deadline.",
				"exampleZh": "我需要在截止日期前审查。"
			},
			{
				"id": 3621,
				"en": "chancellor",
				"zh": "总理",
				"phonetic": "/əns/",
				"example": "This is an important chancellor.",
				"exampleZh": "这是一个重要的总理。"
			},
			{
				"id": 3622,
				"en": "charm",
				"zh": "魅力",
				"phonetic": "/.../",
				"example": "I really like the charm.",
				"exampleZh": "我真的很喜欢这个魅力。"
			},
			{
				"id": 3623,
				"en": "charter",
				"zh": "宪章",
				"phonetic": "/ər/",
				"example": "The charter is very useful.",
				"exampleZh": "宪章非常有用。"
			},
			{
				"id": 3624,
				"en": "chase",
				"zh": "追逐",
				"phonetic": "/.../",
				"example": "They decided to chase the plan.",
				"exampleZh": "他们决定追逐这个计划。"
			},
			{
				"id": 3625,
				"en": "cherish",
				"zh": "珍惜",
				"phonetic": "/ʃ/",
				"example": "I need to cherish before the deadline.",
				"exampleZh": "我需要在截止日期前珍惜。"
			},
			{
				"id": 3626,
				"en": "chorus",
				"zh": "合唱",
				"phonetic": "/.../",
				"example": "This is an important chorus.",
				"exampleZh": "这是一个重要的合唱。"
			},
			{
				"id": 3627,
				"en": "chronic",
				"zh": "慢性的",
				"phonetic": "/.../",
				"example": "She looks chronic today.",
				"exampleZh": "她今天看起来很慢性的。"
			},
			{
				"id": 3628,
				"en": "circuit",
				"zh": "电路",
				"phonetic": "/.../",
				"example": "The circuit is very useful.",
				"exampleZh": "电路非常有用。"
			},
			{
				"id": 3629,
				"en": "circulate",
				"zh": "流通",
				"phonetic": "/.../",
				"example": "They decided to circulate the plan.",
				"exampleZh": "他们决定流通这个计划。"
			},
			{
				"id": 3630,
				"en": "cite",
				"zh": "引用",
				"phonetic": "/.../",
				"example": "I need to cite before the deadline.",
				"exampleZh": "我需要在截止日期前引用。"
			},
			{
				"id": 3631,
				"en": "civilian",
				"zh": "平民",
				"phonetic": "/.../",
				"example": "This is an important civilian.",
				"exampleZh": "这是一个重要的平民。"
			},
			{
				"id": 3632,
				"en": "civilization",
				"zh": "文明",
				"phonetic": "/ʃən/",
				"example": "I really like the civilization.",
				"exampleZh": "我真的很喜欢这个文明。"
			},
			{
				"id": 3633,
				"en": "clarify",
				"zh": "澄清",
				"phonetic": "/.../",
				"example": "Let's clarify together.",
				"exampleZh": "让我们一起澄清吧。"
			},
			{
				"id": 3634,
				"en": "clash",
				"zh": "冲突",
				"phonetic": "/ʃ/",
				"example": "Do you understand this clash?",
				"exampleZh": "你理解这个冲突吗？"
			},
			{
				"id": 3635,
				"en": "clause",
				"zh": "从句",
				"phonetic": "/ɔː/",
				"example": "clause plays a key role in our life.",
				"exampleZh": "从句在我们的生活中起着关键作用。"
			},
			{
				"id": 3636,
				"en": "clergy",
				"zh": "神职人员",
				"phonetic": "/.../",
				"example": "This is an important clergy.",
				"exampleZh": "这是一个重要的神职人员。"
			},
			{
				"id": 3637,
				"en": "cling",
				"zh": "紧抓",
				"phonetic": "/ɪŋ/",
				"example": "She wants to cling this task.",
				"exampleZh": "她想紧抓这个任务。"
			},
			{
				"id": 3638,
				"en": "clip",
				"zh": "夹子",
				"phonetic": "/.../",
				"example": "The clip is very useful.",
				"exampleZh": "夹子非常有用。"
			},
			{
				"id": 3639,
				"en": "clone",
				"zh": "克隆",
				"phonetic": "/.../",
				"example": "They decided to clone the plan.",
				"exampleZh": "他们决定克隆这个计划。"
			},
			{
				"id": 3640,
				"en": "cluster",
				"zh": "集群",
				"phonetic": "/ər/",
				"example": "cluster plays a key role in our life.",
				"exampleZh": "集群在我们的生活中起着关键作用。"
			},
			{
				"id": 3641,
				"en": "coalition",
				"zh": "联盟",
				"phonetic": "/ʃən/",
				"example": "This is an important coalition.",
				"exampleZh": "这是一个重要的联盟。"
			},
			{
				"id": 3642,
				"en": "cognitive",
				"zh": "认知的",
				"phonetic": "/.../",
				"example": "She looks cognitive today.",
				"exampleZh": "她今天看起来很认知的。"
			},
			{
				"id": 3643,
				"en": "coincidence",
				"zh": "巧合",
				"phonetic": "/əns/",
				"example": "The coincidence is very useful.",
				"exampleZh": "巧合非常有用。"
			},
			{
				"id": 3644,
				"en": "collective",
				"zh": "集体的",
				"phonetic": "/.../",
				"example": "The result is quite collective.",
				"exampleZh": "结果是相当集体的的。"
			},
			{
				"id": 3645,
				"en": "collision",
				"zh": "碰撞",
				"phonetic": "/ʒən/",
				"example": "collision plays a key role in our life.",
				"exampleZh": "碰撞在我们的生活中起着关键作用。"
			},
			{
				"id": 3646,
				"en": "colonial",
				"zh": "殖民的",
				"phonetic": "/.../",
				"example": "This is very colonial.",
				"exampleZh": "这非常殖民的。"
			},
			{
				"id": 3647,
				"en": "commander",
				"zh": "指挥官",
				"phonetic": "/ər/",
				"example": "I really like the commander.",
				"exampleZh": "我真的很喜欢这个指挥官。"
			},
			{
				"id": 3648,
				"en": "commence",
				"zh": "开始",
				"phonetic": "/əns/",
				"example": "Let's commence together.",
				"exampleZh": "让我们一起开始吧。"
			},
			{
				"id": 3649,
				"en": "commonplace",
				"zh": "平凡的",
				"phonetic": "/.../",
				"example": "The result is quite commonplace.",
				"exampleZh": "结果是相当平凡的的。"
			},
			{
				"id": 3650,
				"en": "communist",
				"zh": "共产党员",
				"phonetic": "/.../",
				"example": "communist plays a key role in our life.",
				"exampleZh": "共产党员在我们的生活中起着关键作用。"
			},
			{
				"id": 3651,
				"en": "comparable",
				"zh": "可比的",
				"phonetic": "/əbəl/",
				"example": "This is very comparable.",
				"exampleZh": "这非常可比的。"
			},
			{
				"id": 3652,
				"en": "compatible",
				"zh": "兼容的",
				"phonetic": "/ɪbəl/",
				"example": "She looks compatible today.",
				"exampleZh": "她今天看起来很兼容的。"
			},
			{
				"id": 3653,
				"en": "compel",
				"zh": "强迫",
				"phonetic": "/.../",
				"example": "Let's compel together.",
				"exampleZh": "让我们一起强迫吧。"
			},
			{
				"id": 3654,
				"en": "competence",
				"zh": "能力",
				"phonetic": "/əns/",
				"example": "Do you understand this competence?",
				"exampleZh": "你理解这个能力吗？"
			},
			{
				"id": 3655,
				"en": "compile",
				"zh": "编译",
				"phonetic": "/.../",
				"example": "I need to compile before the deadline.",
				"exampleZh": "我需要在截止日期前编译。"
			},
			{
				"id": 3656,
				"en": "complement",
				"zh": "补充",
				"phonetic": "/mənt/",
				"example": "This is an important complement.",
				"exampleZh": "这是一个重要的补充。"
			},
			{
				"id": 3657,
				"en": "compliance",
				"zh": "遵守",
				"phonetic": "/əns/",
				"example": "I really like the compliance.",
				"exampleZh": "我真的很喜欢这个遵守。"
			},
			{
				"id": 3658,
				"en": "compliment",
				"zh": "赞美",
				"phonetic": "/mənt/",
				"example": "The compliment is very useful.",
				"exampleZh": "赞美非常有用。"
			},
			{
				"id": 3659,
				"en": "comply",
				"zh": "遵守",
				"phonetic": "/li/",
				"example": "They decided to comply the plan.",
				"exampleZh": "他们决定遵守这个计划。"
			},
			{
				"id": 3660,
				"en": "compound",
				"zh": "复合的",
				"phonetic": "/aʊ/",
				"example": "He found the task compound.",
				"exampleZh": "他发现这个任务是复合的的。"
			},
			{
				"id": 3661,
				"en": "comprehensive",
				"zh": "全面的",
				"phonetic": "/.../",
				"example": "This is very comprehensive.",
				"exampleZh": "这非常全面的。"
			},
			{
				"id": 3662,
				"en": "comprise",
				"zh": "包含",
				"phonetic": "/.../",
				"example": "She wants to comprise this task.",
				"exampleZh": "她想包含这个任务。"
			},
			{
				"id": 3663,
				"en": "compromise",
				"zh": "妥协",
				"phonetic": "/.../",
				"example": "Let's compromise together.",
				"exampleZh": "让我们一起妥协吧。"
			},
			{
				"id": 3664,
				"en": "conceal",
				"zh": "隐藏",
				"phonetic": "/iː/",
				"example": "They decided to conceal the plan.",
				"exampleZh": "他们决定隐藏这个计划。"
			},
			{
				"id": 3665,
				"en": "conceive",
				"zh": "构想",
				"phonetic": "/.../",
				"example": "I need to conceive before the deadline.",
				"exampleZh": "我需要在截止日期前构想。"
			},
			{
				"id": 3666,
				"en": "conception",
				"zh": "概念",
				"phonetic": "/ʃən/",
				"example": "This is an important conception.",
				"exampleZh": "这是一个重要的概念。"
			},
			{
				"id": 3667,
				"en": "concession",
				"zh": "让步",
				"phonetic": "/ʃən/",
				"example": "I really like the concession.",
				"exampleZh": "我真的很喜欢这个让步。"
			},
			{
				"id": 3668,
				"en": "condemn",
				"zh": "谴责",
				"phonetic": "/.../",
				"example": "Let's condemn together.",
				"exampleZh": "让我们一起谴责吧。"
			},
			{
				"id": 3669,
				"en": "condense",
				"zh": "浓缩",
				"phonetic": "/.../",
				"example": "They decided to condense the plan.",
				"exampleZh": "他们决定浓缩这个计划。"
			},
			{
				"id": 3670,
				"en": "confer",
				"zh": "授予",
				"phonetic": "/ər/",
				"example": "I need to confer before the deadline.",
				"exampleZh": "我需要在截止日期前授予。"
			},
			{
				"id": 3671,
				"en": "confess",
				"zh": "坦白",
				"phonetic": "/.../",
				"example": "We should confess more carefully.",
				"exampleZh": "我们应该更仔细地坦白。"
			},
			{
				"id": 3672,
				"en": "confine",
				"zh": "限制",
				"phonetic": "/.../",
				"example": "She wants to confine this task.",
				"exampleZh": "她想限制这个任务。"
			},
			{
				"id": 3673,
				"en": "conform",
				"zh": "符合",
				"phonetic": "/.../",
				"example": "Let's conform together.",
				"exampleZh": "让我们一起符合吧。"
			},
			{
				"id": 3674,
				"en": "congregation",
				"zh": "集会",
				"phonetic": "/ʃən/",
				"example": "Do you understand this congregation?",
				"exampleZh": "你理解这个集会吗？"
			},
			{
				"id": 3675,
				"en": "conjunction",
				"zh": "连接",
				"phonetic": "/ʃən/",
				"example": "conjunction plays a key role in our life.",
				"exampleZh": "连接在我们的生活中起着关键作用。"
			},
			{
				"id": 3676,
				"en": "consecutive",
				"zh": "连续的",
				"phonetic": "/.../",
				"example": "This is very consecutive.",
				"exampleZh": "这非常连续的。"
			},
			{
				"id": 3677,
				"en": "consensus",
				"zh": "共识",
				"phonetic": "/.../",
				"example": "I really like the consensus.",
				"exampleZh": "我真的很喜欢这个共识。"
			},
			{
				"id": 3678,
				"en": "consent",
				"zh": "同意",
				"phonetic": "/.../",
				"example": "Let's consent together.",
				"exampleZh": "让我们一起同意吧。"
			},
			{
				"id": 3679,
				"en": "conservation",
				"zh": "保护",
				"phonetic": "/ʃən/",
				"example": "Do you understand this conservation?",
				"exampleZh": "你理解这个保护吗？"
			},
			{
				"id": 3680,
				"en": "considerable",
				"zh": "相当大的",
				"phonetic": "/əbəl/",
				"example": "He found the task considerable.",
				"exampleZh": "他发现这个任务是相当大的的。"
			},
			{
				"id": 3681,
				"en": "console",
				"zh": "安慰",
				"phonetic": "/.../",
				"example": "We should console more carefully.",
				"exampleZh": "我们应该更仔细地安慰。"
			},
			{
				"id": 3682,
				"en": "consolidate",
				"zh": "巩固",
				"phonetic": "/.../",
				"example": "She wants to consolidate this task.",
				"exampleZh": "她想巩固这个任务。"
			},
			{
				"id": 3683,
				"en": "conspiracy",
				"zh": "阴谋",
				"phonetic": "/.../",
				"example": "The conspiracy is very useful.",
				"exampleZh": "阴谋非常有用。"
			},
			{
				"id": 3684,
				"en": "constituent",
				"zh": "成分",
				"phonetic": "/.../",
				"example": "Do you understand this constituent?",
				"exampleZh": "你理解这个成分吗？"
			},
			{
				"id": 3685,
				"en": "constitute",
				"zh": "构成",
				"phonetic": "/.../",
				"example": "I need to constitute before the deadline.",
				"exampleZh": "我需要在截止日期前构成。"
			},
			{
				"id": 3686,
				"en": "constrain",
				"zh": "约束",
				"phonetic": "/eɪ/",
				"example": "We should constrain more carefully.",
				"exampleZh": "我们应该更仔细地约束。"
			},
			{
				"id": 3687,
				"en": "contemplate",
				"zh": "沉思",
				"phonetic": "/.../",
				"example": "She wants to contemplate this task.",
				"exampleZh": "她想沉思这个任务。"
			},
			{
				"id": 3688,
				"en": "contempt",
				"zh": "蔑视",
				"phonetic": "/.../",
				"example": "The contempt is very useful.",
				"exampleZh": "蔑视非常有用。"
			},
			{
				"id": 3689,
				"en": "contend",
				"zh": "争夺",
				"phonetic": "/.../",
				"example": "They decided to contend the plan.",
				"exampleZh": "他们决定争夺这个计划。"
			},
			{
				"id": 3690,
				"en": "contingent",
				"zh": "偶然的",
				"phonetic": "/.../",
				"example": "He found the task contingent.",
				"exampleZh": "他发现这个任务是偶然的的。"
			},
			{
				"id": 3691,
				"en": "contrast",
				"zh": "对比",
				"phonetic": "/.../",
				"example": "This is an important contrast.",
				"exampleZh": "这是一个重要的对比。"
			},
			{
				"id": 3692,
				"en": "converge",
				"zh": "汇聚",
				"phonetic": "/.../",
				"example": "She wants to converge this task.",
				"exampleZh": "她想汇聚这个任务。"
			},
			{
				"id": 3693,
				"en": "converse",
				"zh": "交谈",
				"phonetic": "/.../",
				"example": "Let's converse together.",
				"exampleZh": "让我们一起交谈吧。"
			},
			{
				"id": 3694,
				"en": "convert",
				"zh": "转换",
				"phonetic": "/.../",
				"example": "They decided to convert the plan.",
				"exampleZh": "他们决定转换这个计划。"
			},
			{
				"id": 3695,
				"en": "convict",
				"zh": "定罪",
				"phonetic": "/.../",
				"example": "I need to convict before the deadline.",
				"exampleZh": "我需要在截止日期前定罪。"
			},
			{
				"id": 3696,
				"en": "conviction",
				"zh": "信念",
				"phonetic": "/ʃən/",
				"example": "This is an important conviction.",
				"exampleZh": "这是一个重要的信念。"
			},
			{
				"id": 3697,
				"en": "cope",
				"zh": "应对",
				"phonetic": "/.../",
				"example": "She wants to cope this task.",
				"exampleZh": "她想应对这个任务。"
			},
			{
				"id": 3698,
				"en": "cord",
				"zh": "绳子",
				"phonetic": "/.../",
				"example": "The cord is very useful.",
				"exampleZh": "绳子非常有用。"
			},
			{
				"id": 3699,
				"en": "corporate",
				"zh": "公司的",
				"phonetic": "/.../",
				"example": "The result is quite corporate.",
				"exampleZh": "结果是相当公司的的。"
			},
			{
				"id": 3700,
				"en": "correlate",
				"zh": "关联",
				"phonetic": "/.../",
				"example": "I need to correlate before the deadline.",
				"exampleZh": "我需要在截止日期前关联。"
			},
			{
				"id": 3701,
				"en": "corridor",
				"zh": "走廊",
				"phonetic": "/ər/",
				"example": "This is an important corridor.",
				"exampleZh": "这是一个重要的走廊。"
			},
			{
				"id": 3702,
				"en": "counsel",
				"zh": "劝告",
				"phonetic": "/aʊ/",
				"example": "I really like the counsel.",
				"exampleZh": "我真的很喜欢这个劝告。"
			},
			{
				"id": 3703,
				"en": "counterpart",
				"zh": "对应的人",
				"phonetic": "/aʊ/",
				"example": "The counterpart is very useful.",
				"exampleZh": "对应的人非常有用。"
			},
			{
				"id": 3704,
				"en": "coupon",
				"zh": "优惠券",
				"phonetic": "/aʊ/",
				"example": "Do you understand this coupon?",
				"exampleZh": "你理解这个优惠券吗？"
			},
			{
				"id": 3705,
				"en": "credential",
				"zh": "凭证",
				"phonetic": "/ʃəl/",
				"example": "credential plays a key role in our life.",
				"exampleZh": "凭证在我们的生活中起着关键作用。"
			},
			{
				"id": 3706,
				"en": "crew",
				"zh": "船员",
				"phonetic": "/.../",
				"example": "This is an important crew.",
				"exampleZh": "这是一个重要的船员。"
			},
			{
				"id": 3707,
				"en": "crude",
				"zh": "粗糙的",
				"phonetic": "/.../",
				"example": "She looks crude today.",
				"exampleZh": "她今天看起来很粗糙的。"
			},
			{
				"id": 3708,
				"en": "curb",
				"zh": "抑制",
				"phonetic": "/.../",
				"example": "Let's curb together.",
				"exampleZh": "让我们一起抑制吧。"
			},
			{
				"id": 3709,
				"en": "curiosity",
				"zh": "好奇心",
				"phonetic": "/.../",
				"example": "Do you understand this curiosity?",
				"exampleZh": "你理解这个好奇心吗？"
			},
			{
				"id": 3710,
				"en": "custody",
				"zh": "监护",
				"phonetic": "/.../",
				"example": "custody plays a key role in our life.",
				"exampleZh": "监护在我们的生活中起着关键作用。"
			},
			{
				"id": 3711,
				"en": "cynical",
				"zh": "愤世嫉俗的",
				"phonetic": "/.../",
				"example": "This is very cynical.",
				"exampleZh": "这非常愤世嫉俗的。"
			},
			{
				"id": 3712,
				"en": "damp",
				"zh": "潮湿的",
				"phonetic": "/.../",
				"example": "She looks damp today.",
				"exampleZh": "她今天看起来很潮湿的。"
			},
			{
				"id": 3713,
				"en": "dawn",
				"zh": "黎明",
				"phonetic": "/ɔː/",
				"example": "The dawn is very useful.",
				"exampleZh": "黎明非常有用。"
			},
			{
				"id": 3714,
				"en": "deadly",
				"zh": "致命的",
				"phonetic": "/li/",
				"example": "The result is quite deadly.",
				"exampleZh": "结果是相当致命的的。"
			},
			{
				"id": 3715,
				"en": "decipher",
				"zh": "破译",
				"phonetic": "/ər/",
				"example": "I need to decipher before the deadline.",
				"exampleZh": "我需要在截止日期前破译。"
			},
			{
				"id": 3716,
				"en": "decree",
				"zh": "法令",
				"phonetic": "/iː/",
				"example": "This is an important decree.",
				"exampleZh": "这是一个重要的法令。"
			},
			{
				"id": 3717,
				"en": "dedicate",
				"zh": "奉献",
				"phonetic": "/.../",
				"example": "She wants to dedicate this task.",
				"exampleZh": "她想奉献这个任务。"
			},
			{
				"id": 3718,
				"en": "deem",
				"zh": "认为",
				"phonetic": "/iː/",
				"example": "Let's deem together.",
				"exampleZh": "让我们一起认为吧。"
			},
			{
				"id": 3719,
				"en": "default",
				"zh": "默认",
				"phonetic": "/ɔː/",
				"example": "Do you understand this default?",
				"exampleZh": "你理解这个默认吗？"
			},
			{
				"id": 3720,
				"en": "defect",
				"zh": "缺陷",
				"phonetic": "/.../",
				"example": "defect plays a key role in our life.",
				"exampleZh": "缺陷在我们的生活中起着关键作用。"
			},
			{
				"id": 3721,
				"en": "defendant",
				"zh": "被告",
				"phonetic": "/.../",
				"example": "This is an important defendant.",
				"exampleZh": "这是一个重要的被告。"
			},
			{
				"id": 3722,
				"en": "defer",
				"zh": "推迟",
				"phonetic": "/ər/",
				"example": "She wants to defer this task.",
				"exampleZh": "她想推迟这个任务。"
			},
			{
				"id": 3723,
				"en": "deficiency",
				"zh": "不足",
				"phonetic": "/.../",
				"example": "The deficiency is very useful.",
				"exampleZh": "不足非常有用。"
			},
			{
				"id": 3724,
				"en": "deficit",
				"zh": "赤字",
				"phonetic": "/.../",
				"example": "Do you understand this deficit?",
				"exampleZh": "你理解这个赤字吗？"
			},
			{
				"id": 3725,
				"en": "delete",
				"zh": "删除",
				"phonetic": "/.../",
				"example": "I need to delete before the deadline.",
				"exampleZh": "我需要在截止日期前删除。"
			},
			{
				"id": 3726,
				"en": "delivery",
				"zh": "递送",
				"phonetic": "/.../",
				"example": "This is an important delivery.",
				"exampleZh": "这是一个重要的递送。"
			},
			{
				"id": 3727,
				"en": "demographic",
				"zh": "人口的",
				"phonetic": "/.../",
				"example": "She looks demographic today.",
				"exampleZh": "她今天看起来很人口的。"
			},
			{
				"id": 3728,
				"en": "demonstrate",
				"zh": "展示",
				"phonetic": "/.../",
				"example": "Let's demonstrate together.",
				"exampleZh": "让我们一起展示吧。"
			},
			{
				"id": 3729,
				"en": "denial",
				"zh": "否认",
				"phonetic": "/.../",
				"example": "Do you understand this denial?",
				"exampleZh": "你理解这个否认吗？"
			},
			{
				"id": 3730,
				"en": "denounce",
				"zh": "谴责",
				"phonetic": "/aʊ/",
				"example": "I need to denounce before the deadline.",
				"exampleZh": "我需要在截止日期前谴责。"
			},
			{
				"id": 3731,
				"en": "depict",
				"zh": "描绘",
				"phonetic": "/.../",
				"example": "We should depict more carefully.",
				"exampleZh": "我们应该更仔细地描绘。"
			},
			{
				"id": 3732,
				"en": "deploy",
				"zh": "部署",
				"phonetic": "/ɔɪ/",
				"example": "She wants to deploy this task.",
				"exampleZh": "她想部署这个任务。"
			},
			{
				"id": 3733,
				"en": "deprive",
				"zh": "剥夺",
				"phonetic": "/.../",
				"example": "Let's deprive together.",
				"exampleZh": "让我们一起剥夺吧。"
			},
			{
				"id": 3734,
				"en": "deputy",
				"zh": "副手",
				"phonetic": "/.../",
				"example": "Do you understand this deputy?",
				"exampleZh": "你理解这个副手吗？"
			},
			{
				"id": 3735,
				"en": "designate",
				"zh": "指定",
				"phonetic": "/.../",
				"example": "I need to designate before the deadline.",
				"exampleZh": "我需要在截止日期前指定。"
			},
			{
				"id": 3736,
				"en": "desirable",
				"zh": "理想的",
				"phonetic": "/əbəl/",
				"example": "This is very desirable.",
				"exampleZh": "这非常理想的。"
			},
			{
				"id": 3737,
				"en": "destiny",
				"zh": "命运",
				"phonetic": "/.../",
				"example": "I really like the destiny.",
				"exampleZh": "我真的很喜欢这个命运。"
			},
			{
				"id": 3738,
				"en": "detach",
				"zh": "分离",
				"phonetic": "/tʃ/",
				"example": "Let's detach together.",
				"exampleZh": "让我们一起分离吧。"
			},
			{
				"id": 3739,
				"en": "detain",
				"zh": "拘留",
				"phonetic": "/eɪ/",
				"example": "They decided to detain the plan.",
				"exampleZh": "他们决定拘留这个计划。"
			},
			{
				"id": 3740,
				"en": "deteriorate",
				"zh": "恶化",
				"phonetic": "/.../",
				"example": "I need to deteriorate before the deadline.",
				"exampleZh": "我需要在截止日期前恶化。"
			},
			{
				"id": 3741,
				"en": "devastate",
				"zh": "毁灭",
				"phonetic": "/.../",
				"example": "We should devastate more carefully.",
				"exampleZh": "我们应该更仔细地毁灭。"
			},
			{
				"id": 3742,
				"en": "devise",
				"zh": "设计",
				"phonetic": "/.../",
				"example": "She wants to devise this task.",
				"exampleZh": "她想设计这个任务。"
			},
			{
				"id": 3743,
				"en": "diabetes",
				"zh": "糖尿病",
				"phonetic": "/.../",
				"example": "The diabetes is very useful.",
				"exampleZh": "糖尿病非常有用。"
			},
			{
				"id": 3744,
				"en": "diagnose",
				"zh": "诊断",
				"phonetic": "/.../",
				"example": "They decided to diagnose the plan.",
				"exampleZh": "他们决定诊断这个计划。"
			},
			{
				"id": 3745,
				"en": "diagram",
				"zh": "图表",
				"phonetic": "/.../",
				"example": "diagram plays a key role in our life.",
				"exampleZh": "图表在我们的生活中起着关键作用。"
			},
			{
				"id": 3746,
				"en": "dictate",
				"zh": "口述",
				"phonetic": "/.../",
				"example": "We should dictate more carefully.",
				"exampleZh": "我们应该更仔细地口述。"
			},
			{
				"id": 3747,
				"en": "differentiate",
				"zh": "区分",
				"phonetic": "/.../",
				"example": "She wants to differentiate this task.",
				"exampleZh": "她想区分这个任务。"
			},
			{
				"id": 3748,
				"en": "diffuse",
				"zh": "扩散",
				"phonetic": "/.../",
				"example": "Let's diffuse together.",
				"exampleZh": "让我们一起扩散吧。"
			},
			{
				"id": 3749,
				"en": "diminish",
				"zh": "减少",
				"phonetic": "/ʃ/",
				"example": "They decided to diminish the plan.",
				"exampleZh": "他们决定减少这个计划。"
			},
			{
				"id": 3750,
				"en": "diplomat",
				"zh": "外交官",
				"phonetic": "/.../",
				"example": "diplomat plays a key role in our life.",
				"exampleZh": "外交官在我们的生活中起着关键作用。"
			},
			{
				"id": 3751,
				"en": "directory",
				"zh": "目录",
				"phonetic": "/.../",
				"example": "This is an important directory.",
				"exampleZh": "这是一个重要的目录。"
			},
			{
				"id": 3752,
				"en": "disability",
				"zh": "残疾",
				"phonetic": "/.../",
				"example": "I really like the disability.",
				"exampleZh": "我真的很喜欢这个残疾。"
			},
			{
				"id": 3753,
				"en": "discharge",
				"zh": "排放",
				"phonetic": "/.../",
				"example": "The discharge is very useful.",
				"exampleZh": "排放非常有用。"
			},
			{
				"id": 3754,
				"en": "discourse",
				"zh": "话语",
				"phonetic": "/aʊ/",
				"example": "Do you understand this discourse?",
				"exampleZh": "你理解这个话语吗？"
			},
			{
				"id": 3755,
				"en": "discretion",
				"zh": "自由裁量",
				"phonetic": "/ʃən/",
				"example": "discretion plays a key role in our life.",
				"exampleZh": "自由裁量在我们的生活中起着关键作用。"
			},
			{
				"id": 3756,
				"en": "dispatch",
				"zh": "派遣",
				"phonetic": "/tʃ/",
				"example": "We should dispatch more carefully.",
				"exampleZh": "我们应该更仔细地派遣。"
			},
			{
				"id": 3757,
				"en": "disperse",
				"zh": "分散",
				"phonetic": "/.../",
				"example": "She wants to disperse this task.",
				"exampleZh": "她想分散这个任务。"
			},
			{
				"id": 3758,
				"en": "disrupt",
				"zh": "扰乱",
				"phonetic": "/.../",
				"example": "Let's disrupt together.",
				"exampleZh": "让我们一起扰乱吧。"
			},
			{
				"id": 3759,
				"en": "distort",
				"zh": "扭曲",
				"phonetic": "/.../",
				"example": "They decided to distort the plan.",
				"exampleZh": "他们决定扭曲这个计划。"
			},
			{
				"id": 3760,
				"en": "distract",
				"zh": "分心",
				"phonetic": "/.../",
				"example": "I need to distract before the deadline.",
				"exampleZh": "我需要在截止日期前分心。"
			},
			{
				"id": 3761,
				"en": "dividend",
				"zh": "股息",
				"phonetic": "/.../",
				"example": "This is an important dividend.",
				"exampleZh": "这是一个重要的股息。"
			},
			{
				"id": 3762,
				"en": "divine",
				"zh": "神圣的",
				"phonetic": "/.../",
				"example": "She looks divine today.",
				"exampleZh": "她今天看起来很神圣的。"
			},
			{
				"id": 3763,
				"en": "divorce",
				"zh": "离婚",
				"phonetic": "/.../",
				"example": "The divorce is very useful.",
				"exampleZh": "离婚非常有用。"
			},
			{
				"id": 3764,
				"en": "doctrine",
				"zh": "学说",
				"phonetic": "/.../",
				"example": "Do you understand this doctrine?",
				"exampleZh": "你理解这个学说吗？"
			},
			{
				"id": 3765,
				"en": "domain",
				"zh": "领域",
				"phonetic": "/eɪ/",
				"example": "domain plays a key role in our life.",
				"exampleZh": "领域在我们的生活中起着关键作用。"
			},
			{
				"id": 3766,
				"en": "dominant",
				"zh": "主导的",
				"phonetic": "/.../",
				"example": "This is very dominant.",
				"exampleZh": "这非常主导的。"
			},
			{
				"id": 3767,
				"en": "dual",
				"zh": "双重的",
				"phonetic": "/.../",
				"example": "She looks dual today.",
				"exampleZh": "她今天看起来很双重的。"
			},
			{
				"id": 3768,
				"en": "dub",
				"zh": "配音",
				"phonetic": "/.../",
				"example": "Let's dub together.",
				"exampleZh": "让我们一起配音吧。"
			},
			{
				"id": 3769,
				"en": "dubious",
				"zh": "可疑的",
				"phonetic": "/iəs/",
				"example": "The result is quite dubious.",
				"exampleZh": "结果是相当可疑的的。"
			},
			{
				"id": 3770,
				"en": "dumb",
				"zh": "哑的",
				"phonetic": "/.../",
				"example": "He found the task dumb.",
				"exampleZh": "他发现这个任务是哑的的。"
			},
			{
				"id": 3771,
				"en": "duplicate",
				"zh": "复制",
				"phonetic": "/.../",
				"example": "We should duplicate more carefully.",
				"exampleZh": "我们应该更仔细地复制。"
			},
			{
				"id": 3772,
				"en": "duration",
				"zh": "持续时间",
				"phonetic": "/ʃən/",
				"example": "I really like the duration.",
				"exampleZh": "我真的很喜欢这个持续时间。"
			},
			{
				"id": 3773,
				"en": "dwell",
				"zh": "居住",
				"phonetic": "/.../",
				"example": "Let's dwell together.",
				"exampleZh": "让我们一起居住吧。"
			},
			{
				"id": 3774,
				"en": "editorial",
				"zh": "社论",
				"phonetic": "/.../",
				"example": "Do you understand this editorial?",
				"exampleZh": "你理解这个社论吗？"
			},
			{
				"id": 3775,
				"en": "efficiency",
				"zh": "效率",
				"phonetic": "/.../",
				"example": "efficiency plays a key role in our life.",
				"exampleZh": "效率在我们的生活中起着关键作用。"
			},
			{
				"id": 3776,
				"en": "elapse",
				"zh": "流逝",
				"phonetic": "/.../",
				"example": "We should elapse more carefully.",
				"exampleZh": "我们应该更仔细地流逝。"
			},
			{
				"id": 3777,
				"en": "electron",
				"zh": "电子",
				"phonetic": "/.../",
				"example": "I really like the electron.",
				"exampleZh": "我真的很喜欢这个电子。"
			},
			{
				"id": 3778,
				"en": "elevate",
				"zh": "提升",
				"phonetic": "/.../",
				"example": "Let's elevate together.",
				"exampleZh": "让我们一起提升吧。"
			},
			{
				"id": 3779,
				"en": "elicit",
				"zh": "引出",
				"phonetic": "/.../",
				"example": "They decided to elicit the plan.",
				"exampleZh": "他们决定引出这个计划。"
			},
			{
				"id": 3780,
				"en": "eligible",
				"zh": "合格的",
				"phonetic": "/ɪbəl/",
				"example": "He found the task eligible.",
				"exampleZh": "他发现这个任务是合格的的。"
			},
			{
				"id": 3781,
				"en": "elite",
				"zh": "精英",
				"phonetic": "/.../",
				"example": "This is an important elite.",
				"exampleZh": "这是一个重要的精英。"
			},
			{
				"id": 3782,
				"en": "eloquent",
				"zh": "雄辩的",
				"phonetic": "/kw/",
				"example": "She looks eloquent today.",
				"exampleZh": "她今天看起来很雄辩的。"
			},
			{
				"id": 3783,
				"en": "embark",
				"zh": "着手",
				"phonetic": "/.../",
				"example": "Let's embark together.",
				"exampleZh": "让我们一起着手吧。"
			},
			{
				"id": 3784,
				"en": "embed",
				"zh": "嵌入",
				"phonetic": "/d/",
				"example": "They decided to embed the plan.",
				"exampleZh": "他们决定嵌入这个计划。"
			},
			{
				"id": 3785,
				"en": "embody",
				"zh": "体现",
				"phonetic": "/.../",
				"example": "I need to embody before the deadline.",
				"exampleZh": "我需要在截止日期前体现。"
			},
			{
				"id": 3786,
				"en": "emit",
				"zh": "发出",
				"phonetic": "/.../",
				"example": "We should emit more carefully.",
				"exampleZh": "我们应该更仔细地发出。"
			},
			{
				"id": 3787,
				"en": "empirical",
				"zh": "经验主义的",
				"phonetic": "/.../",
				"example": "She looks empirical today.",
				"exampleZh": "她今天看起来很经验主义的。"
			},
			{
				"id": 3788,
				"en": "empower",
				"zh": "授权",
				"phonetic": "/ər/",
				"example": "Let's empower together.",
				"exampleZh": "让我们一起授权吧。"
			},
			{
				"id": 3789,
				"en": "enact",
				"zh": "颁布",
				"phonetic": "/.../",
				"example": "They decided to enact the plan.",
				"exampleZh": "他们决定颁布这个计划。"
			},
			{
				"id": 3790,
				"en": "enclose",
				"zh": "包围",
				"phonetic": "/.../",
				"example": "I need to enclose before the deadline.",
				"exampleZh": "我需要在截止日期前包围。"
			},
			{
				"id": 3791,
				"en": "endeavor",
				"zh": "努力",
				"phonetic": "/ər/",
				"example": "This is an important endeavor.",
				"exampleZh": "这是一个重要的努力。"
			},
			{
				"id": 3792,
				"en": "endorse",
				"zh": "支持",
				"phonetic": "/.../",
				"example": "She wants to endorse this task.",
				"exampleZh": "她想支持这个任务。"
			},
			{
				"id": 3793,
				"en": "enforce",
				"zh": "执行",
				"phonetic": "/.../",
				"example": "Let's enforce together.",
				"exampleZh": "让我们一起执行吧。"
			},
			{
				"id": 3794,
				"en": "enrich",
				"zh": "丰富",
				"phonetic": "/tʃ/",
				"example": "They decided to enrich the plan.",
				"exampleZh": "他们决定丰富这个计划。"
			},
			{
				"id": 3795,
				"en": "enroll",
				"zh": "注册",
				"phonetic": "/.../",
				"example": "I need to enroll before the deadline.",
				"exampleZh": "我需要在截止日期前注册。"
			},
			{
				"id": 3796,
				"en": "ensure",
				"zh": "确保",
				"phonetic": "/ʒər/",
				"example": "We should ensure more carefully.",
				"exampleZh": "我们应该更仔细地确保。"
			},
			{
				"id": 3797,
				"en": "entail",
				"zh": "需要",
				"phonetic": "/eɪ/",
				"example": "She wants to entail this task.",
				"exampleZh": "她想需要这个任务。"
			},
			{
				"id": 3798,
				"en": "entity",
				"zh": "实体",
				"phonetic": "/.../",
				"example": "The entity is very useful.",
				"exampleZh": "实体非常有用。"
			},
			{
				"id": 3799,
				"en": "entrepreneur",
				"zh": "企业家",
				"phonetic": "/.../",
				"example": "Do you understand this entrepreneur?",
				"exampleZh": "你理解这个企业家吗？"
			},
			{
				"id": 3800,
				"en": "envision",
				"zh": "设想",
				"phonetic": "/ʒən/",
				"example": "I need to envision before the deadline.",
				"exampleZh": "我需要在截止日期前设想。"
			},
			{
				"id": 3801,
				"en": "epidemic",
				"zh": "流行病",
				"phonetic": "/.../",
				"example": "This is an important epidemic.",
				"exampleZh": "这是一个重要的流行病。"
			},
			{
				"id": 3802,
				"en": "equip",
				"zh": "装备",
				"phonetic": "/kw/",
				"example": "She wants to equip this task.",
				"exampleZh": "她想装备这个任务。"
			},
			{
				"id": 3803,
				"en": "erect",
				"zh": "竖立的",
				"phonetic": "/.../",
				"example": "It's a erect idea.",
				"exampleZh": "这是一个竖立的的主意。"
			},
			{
				"id": 3804,
				"en": "erode",
				"zh": "侵蚀",
				"phonetic": "/.../",
				"example": "They decided to erode the plan.",
				"exampleZh": "他们决定侵蚀这个计划。"
			},
			{
				"id": 3805,
				"en": "essence",
				"zh": "本质",
				"phonetic": "/əns/",
				"example": "essence plays a key role in our life.",
				"exampleZh": "本质在我们的生活中起着关键作用。"
			},
			{
				"id": 3806,
				"en": "esteem",
				"zh": "尊敬",
				"phonetic": "/iː/",
				"example": "We should esteem more carefully.",
				"exampleZh": "我们应该更仔细地尊敬。"
			},
			{
				"id": 3807,
				"en": "eternal",
				"zh": "永恒的",
				"phonetic": "/.../",
				"example": "She looks eternal today.",
				"exampleZh": "她今天看起来很永恒的。"
			},
			{
				"id": 3808,
				"en": "ethical",
				"zh": "道德的",
				"phonetic": "/.../",
				"example": "It's a ethical idea.",
				"exampleZh": "这是一个道德的的主意。"
			},
			{
				"id": 3809,
				"en": "ethnic",
				"zh": "民族的",
				"phonetic": "/.../",
				"example": "The result is quite ethnic.",
				"exampleZh": "结果是相当民族的的。"
			},
			{
				"id": 3810,
				"en": "evacuate",
				"zh": "疏散",
				"phonetic": "/.../",
				"example": "I need to evacuate before the deadline.",
				"exampleZh": "我需要在截止日期前疏散。"
			},
			{
				"id": 3811,
				"en": "evaporate",
				"zh": "蒸发",
				"phonetic": "/.../",
				"example": "We should evaporate more carefully.",
				"exampleZh": "我们应该更仔细地蒸发。"
			},
			{
				"id": 3812,
				"en": "evident",
				"zh": "明显的",
				"phonetic": "/.../",
				"example": "She looks evident today.",
				"exampleZh": "她今天看起来很明显的。"
			},
			{
				"id": 3813,
				"en": "evil",
				"zh": "邪恶的",
				"phonetic": "/.../",
				"example": "It's a evil idea.",
				"exampleZh": "这是一个邪恶的的主意。"
			},
			{
				"id": 3814,
				"en": "evoke",
				"zh": "唤起",
				"phonetic": "/.../",
				"example": "They decided to evoke the plan.",
				"exampleZh": "他们决定唤起这个计划。"
			},
			{
				"id": 3815,
				"en": "excerpt",
				"zh": "摘录",
				"phonetic": "/.../",
				"example": "excerpt plays a key role in our life.",
				"exampleZh": "摘录在我们的生活中起着关键作用。"
			},
			{
				"id": 3816,
				"en": "executive",
				"zh": "行政的",
				"phonetic": "/.../",
				"example": "This is very executive.",
				"exampleZh": "这非常行政的。"
			},
			{
				"id": 3817,
				"en": "exempt",
				"zh": "豁免",
				"phonetic": "/.../",
				"example": "She wants to exempt this task.",
				"exampleZh": "她想豁免这个任务。"
			},
			{
				"id": 3818,
				"en": "exert",
				"zh": "施加",
				"phonetic": "/.../",
				"example": "Let's exert together.",
				"exampleZh": "让我们一起施加吧。"
			},
			{
				"id": 3819,
				"en": "exhaust",
				"zh": "耗尽",
				"phonetic": "/ɔː/",
				"example": "They decided to exhaust the plan.",
				"exampleZh": "他们决定耗尽这个计划。"
			},
			{
				"id": 3820,
				"en": "exile",
				"zh": "流放",
				"phonetic": "/.../",
				"example": "exile plays a key role in our life.",
				"exampleZh": "流放在我们的生活中起着关键作用。"
			},
			{
				"id": 3821,
				"en": "exotic",
				"zh": "异国的",
				"phonetic": "/.../",
				"example": "This is very exotic.",
				"exampleZh": "这非常异国的。"
			},
			{
				"id": 3822,
				"en": "expenditure",
				"zh": "支出",
				"phonetic": "/tʃər/",
				"example": "I really like the expenditure.",
				"exampleZh": "我真的很喜欢这个支出。"
			},
			{
				"id": 3823,
				"en": "expertise",
				"zh": "专长",
				"phonetic": "/.../",
				"example": "The expertise is very useful.",
				"exampleZh": "专长非常有用。"
			},
			{
				"id": 3824,
				"en": "expire",
				"zh": "到期",
				"phonetic": "/.../",
				"example": "They decided to expire the plan.",
				"exampleZh": "他们决定到期这个计划。"
			},
			{
				"id": 3825,
				"en": "explicit",
				"zh": "明确的",
				"phonetic": "/.../",
				"example": "He found the task explicit.",
				"exampleZh": "他发现这个任务是明确的的。"
			},
			{
				"id": 3826,
				"en": "extinct",
				"zh": "灭绝的",
				"phonetic": "/.../",
				"example": "This is very extinct.",
				"exampleZh": "这非常灭绝的。"
			},
			{
				"id": 3827,
				"en": "extract",
				"zh": "提取",
				"phonetic": "/.../",
				"example": "She wants to extract this task.",
				"exampleZh": "她想提取这个任务。"
			},
			{
				"id": 3828,
				"en": "facilitate",
				"zh": "促进",
				"phonetic": "/.../",
				"example": "Let's facilitate together.",
				"exampleZh": "让我们一起促进吧。"
			},
			{
				"id": 3829,
				"en": "faculty",
				"zh": "才能",
				"phonetic": "/.../",
				"example": "Do you understand this faculty?",
				"exampleZh": "你理解这个才能吗？"
			},
			{
				"id": 3830,
				"en": "fascinate",
				"zh": "使着迷",
				"phonetic": "/.../",
				"example": "I need to fascinate before the deadline.",
				"exampleZh": "我需要在截止日期前使着迷。"
			},
			{
				"id": 3831,
				"en": "fatigue",
				"zh": "疲劳",
				"phonetic": "/.../",
				"example": "This is an important fatigue.",
				"exampleZh": "这是一个重要的疲劳。"
			},
			{
				"id": 3832,
				"en": "feat",
				"zh": "功绩",
				"phonetic": "/iː/",
				"example": "I really like the feat.",
				"exampleZh": "我真的很喜欢这个功绩。"
			},
			{
				"id": 3833,
				"en": "feminine",
				"zh": "女性的",
				"phonetic": "/.../",
				"example": "It's a feminine idea.",
				"exampleZh": "这是一个女性的的主意。"
			},
			{
				"id": 3834,
				"en": "fertile",
				"zh": "肥沃的",
				"phonetic": "/.../",
				"example": "The result is quite fertile.",
				"exampleZh": "结果是相当肥沃的的。"
			},
			{
				"id": 3835,
				"en": "filter",
				"zh": "过滤",
				"phonetic": "/ər/",
				"example": "I need to filter before the deadline.",
				"exampleZh": "我需要在截止日期前过滤。"
			},
			{
				"id": 3836,
				"en": "finite",
				"zh": "有限的",
				"phonetic": "/.../",
				"example": "This is very finite.",
				"exampleZh": "这非常有限的。"
			},
			{
				"id": 3837,
				"en": "fiscal",
				"zh": "财政的",
				"phonetic": "/.../",
				"example": "She looks fiscal today.",
				"exampleZh": "她今天看起来很财政的。"
			},
			{
				"id": 3838,
				"en": "flaw",
				"zh": "缺陷",
				"phonetic": "/ɔː/",
				"example": "The flaw is very useful.",
				"exampleZh": "缺陷非常有用。"
			},
			{
				"id": 3839,
				"en": "fluctuate",
				"zh": "波动",
				"phonetic": "/.../",
				"example": "They decided to fluctuate the plan.",
				"exampleZh": "他们决定波动这个计划。"
			},
			{
				"id": 3840,
				"en": "fluid",
				"zh": "流体",
				"phonetic": "/.../",
				"example": "fluid plays a key role in our life.",
				"exampleZh": "流体在我们的生活中起着关键作用。"
			},
			{
				"id": 3841,
				"en": "forge",
				"zh": "锻造",
				"phonetic": "/.../",
				"example": "We should forge more carefully.",
				"exampleZh": "我们应该更仔细地锻造。"
			},
			{
				"id": 3842,
				"en": "format",
				"zh": "格式",
				"phonetic": "/.../",
				"example": "I really like the format.",
				"exampleZh": "我真的很喜欢这个格式。"
			},
			{
				"id": 3843,
				"en": "forthcoming",
				"zh": "即将来临的",
				"phonetic": "/ɪŋ/",
				"example": "It's a forthcoming idea.",
				"exampleZh": "这是一个即将来临的的主意。"
			},
			{
				"id": 3844,
				"en": "fossil",
				"zh": "化石",
				"phonetic": "/.../",
				"example": "Do you understand this fossil?",
				"exampleZh": "你理解这个化石吗？"
			},
			{
				"id": 3845,
				"en": "foster",
				"zh": "培养",
				"phonetic": "/ər/",
				"example": "I need to foster before the deadline.",
				"exampleZh": "我需要在截止日期前培养。"
			},
			{
				"id": 3846,
				"en": "fragment",
				"zh": "碎片",
				"phonetic": "/mənt/",
				"example": "This is an important fragment.",
				"exampleZh": "这是一个重要的碎片。"
			},
			{
				"id": 3847,
				"en": "franchise",
				"zh": "特许经营",
				"phonetic": "/.../",
				"example": "I really like the franchise.",
				"exampleZh": "我真的很喜欢这个特许经营。"
			},
			{
				"id": 3848,
				"en": "fraud",
				"zh": "欺诈",
				"phonetic": "/ɔː/",
				"example": "The fraud is very useful.",
				"exampleZh": "欺诈非常有用。"
			},
			{
				"id": 3849,
				"en": "frown",
				"zh": "皱眉",
				"phonetic": "/aʊ/",
				"example": "They decided to frown the plan.",
				"exampleZh": "他们决定皱眉这个计划。"
			},
			{
				"id": 3850,
				"en": "fruitful",
				"zh": "富有成效的",
				"phonetic": "/fəl/",
				"example": "He found the task fruitful.",
				"exampleZh": "他发现这个任务是富有成效的的。"
			},
			{
				"id": 3851,
				"en": "frustrate",
				"zh": "挫败",
				"phonetic": "/.../",
				"example": "We should frustrate more carefully.",
				"exampleZh": "我们应该更仔细地挫败。"
			},
			{
				"id": 3852,
				"en": "fusion",
				"zh": "融合",
				"phonetic": "/ʒən/",
				"example": "I really like the fusion.",
				"exampleZh": "我真的很喜欢这个融合。"
			},
			{
				"id": 3853,
				"en": "galaxy",
				"zh": "星系",
				"phonetic": "/.../",
				"example": "The galaxy is very useful.",
				"exampleZh": "星系非常有用。"
			},
			{
				"id": 3854,
				"en": "gamble",
				"zh": "赌博",
				"phonetic": "/.../",
				"example": "They decided to gamble the plan.",
				"exampleZh": "他们决定赌博这个计划。"
			},
			{
				"id": 3855,
				"en": "gender",
				"zh": "性别",
				"phonetic": "/ər/",
				"example": "gender plays a key role in our life.",
				"exampleZh": "性别在我们的生活中起着关键作用。"
			},
			{
				"id": 3856,
				"en": "generic",
				"zh": "一般的",
				"phonetic": "/.../",
				"example": "This is very generic.",
				"exampleZh": "这非常一般的。"
			},
			{
				"id": 3857,
				"en": "genetic",
				"zh": "基因的",
				"phonetic": "/.../",
				"example": "She looks genetic today.",
				"exampleZh": "她今天看起来很基因的。"
			},
			{
				"id": 3858,
				"en": "gigantic",
				"zh": "巨大的",
				"phonetic": "/.../",
				"example": "It's a gigantic idea.",
				"exampleZh": "这是一个巨大的的主意。"
			},
			{
				"id": 3859,
				"en": "glance",
				"zh": "一瞥",
				"phonetic": "/əns/",
				"example": "Do you understand this glance?",
				"exampleZh": "你理解这个一瞥吗？"
			},
			{
				"id": 3860,
				"en": "glimpse",
				"zh": "瞥见",
				"phonetic": "/.../",
				"example": "glimpse plays a key role in our life.",
				"exampleZh": "瞥见在我们的生活中起着关键作用。"
			},
			{
				"id": 3861,
				"en": "glorious",
				"zh": "光荣的",
				"phonetic": "/iəs/",
				"example": "This is very glorious.",
				"exampleZh": "这非常光荣的。"
			},
			{
				"id": 3862,
				"en": "glow",
				"zh": "发光",
				"phonetic": "/aʊ/",
				"example": "She wants to glow this task.",
				"exampleZh": "她想发光这个任务。"
			},
			{
				"id": 3863,
				"en": "governance",
				"zh": "治理",
				"phonetic": "/əns/",
				"example": "The governance is very useful.",
				"exampleZh": "治理非常有用。"
			},
			{
				"id": 3864,
				"en": "graph",
				"zh": "图表",
				"phonetic": "/f/",
				"example": "Do you understand this graph?",
				"exampleZh": "你理解这个图表吗？"
			},
			{
				"id": 3865,
				"en": "grief",
				"zh": "悲伤",
				"phonetic": "/.../",
				"example": "grief plays a key role in our life.",
				"exampleZh": "悲伤在我们的生活中起着关键作用。"
			},
			{
				"id": 3866,
				"en": "grim",
				"zh": "严峻的",
				"phonetic": "/.../",
				"example": "This is very grim.",
				"exampleZh": "这非常严峻的。"
			},
			{
				"id": 3867,
				"en": "grind",
				"zh": "研磨",
				"phonetic": "/.../",
				"example": "She wants to grind this task.",
				"exampleZh": "她想研磨这个任务。"
			},
			{
				"id": 3868,
				"en": "gross",
				"zh": "总的",
				"phonetic": "/.../",
				"example": "It's a gross idea.",
				"exampleZh": "这是一个总的的主意。"
			},
			{
				"id": 3869,
				"en": "guardian",
				"zh": "监护人",
				"phonetic": "/.../",
				"example": "Do you understand this guardian?",
				"exampleZh": "你理解这个监护人吗？"
			},
			{
				"id": 3870,
				"en": "guideline",
				"zh": "指导方针",
				"phonetic": "/.../",
				"example": "guideline plays a key role in our life.",
				"exampleZh": "指导方针在我们的生活中起着关键作用。"
			},
			{
				"id": 3871,
				"en": "hail",
				"zh": "冰雹",
				"phonetic": "/eɪ/",
				"example": "This is an important hail.",
				"exampleZh": "这是一个重要的冰雹。"
			},
			{
				"id": 3872,
				"en": "handicap",
				"zh": "障碍",
				"phonetic": "/.../",
				"example": "I really like the handicap.",
				"exampleZh": "我真的很喜欢这个障碍。"
			},
			{
				"id": 3873,
				"en": "harass",
				"zh": "骚扰",
				"phonetic": "/.../",
				"example": "Let's harass together.",
				"exampleZh": "让我们一起骚扰吧。"
			},
			{
				"id": 3874,
				"en": "haul",
				"zh": "拖",
				"phonetic": "/ɔː/",
				"example": "They decided to haul the plan.",
				"exampleZh": "他们决定拖这个计划。"
			},
			{
				"id": 3875,
				"en": "haunt",
				"zh": "萦绕",
				"phonetic": "/ɔː/",
				"example": "I need to haunt before the deadline.",
				"exampleZh": "我需要在截止日期前萦绕。"
			},
			{
				"id": 3876,
				"en": "headquarters",
				"zh": "总部",
				"phonetic": "/kw/",
				"example": "This is an important headquarters.",
				"exampleZh": "这是一个重要的总部。"
			},
			{
				"id": 3877,
				"en": "hedge",
				"zh": "树篱",
				"phonetic": "/.../",
				"example": "I really like the hedge.",
				"exampleZh": "我真的很喜欢这个树篱。"
			},
			{
				"id": 3878,
				"en": "heir",
				"zh": "继承人",
				"phonetic": "/.../",
				"example": "The heir is very useful.",
				"exampleZh": "继承人非常有用。"
			},
			{
				"id": 3879,
				"en": "heroic",
				"zh": "英勇的",
				"phonetic": "/ɔɪ/",
				"example": "The result is quite heroic.",
				"exampleZh": "结果是相当英勇的的。"
			},
			{
				"id": 3880,
				"en": "hierarchy",
				"zh": "层级",
				"phonetic": "/.../",
				"example": "hierarchy plays a key role in our life.",
				"exampleZh": "层级在我们的生活中起着关键作用。"
			},
			{
				"id": 3881,
				"en": "hinder",
				"zh": "阻碍",
				"phonetic": "/ər/",
				"example": "We should hinder more carefully.",
				"exampleZh": "我们应该更仔细地阻碍。"
			},
			{
				"id": 3882,
				"en": "hint",
				"zh": "暗示",
				"phonetic": "/.../",
				"example": "I really like the hint.",
				"exampleZh": "我真的很喜欢这个暗示。"
			},
			{
				"id": 3883,
				"en": "humiliate",
				"zh": "羞辱",
				"phonetic": "/.../",
				"example": "Let's humiliate together.",
				"exampleZh": "让我们一起羞辱吧。"
			},
			{
				"id": 3884,
				"en": "hypothesis",
				"zh": "假设",
				"phonetic": "/.../",
				"example": "Do you understand this hypothesis?",
				"exampleZh": "你理解这个假设吗？"
			},
			{
				"id": 3885,
				"en": "identical",
				"zh": "相同的",
				"phonetic": "/.../",
				"example": "He found the task identical.",
				"exampleZh": "他发现这个任务是相同的的。"
			},
			{
				"id": 3886,
				"en": "illuminate",
				"zh": "照亮",
				"phonetic": "/.../",
				"example": "We should illuminate more carefully.",
				"exampleZh": "我们应该更仔细地照亮。"
			},
			{
				"id": 3887,
				"en": "illusion",
				"zh": "幻觉",
				"phonetic": "/ʒən/",
				"example": "I really like the illusion.",
				"exampleZh": "我真的很喜欢这个幻觉。"
			},
			{
				"id": 3888,
				"en": "immerse",
				"zh": "沉浸",
				"phonetic": "/.../",
				"example": "Let's immerse together.",
				"exampleZh": "让我们一起沉浸吧。"
			},
			{
				"id": 3889,
				"en": "impair",
				"zh": "损害",
				"phonetic": "/eɪ/",
				"example": "They decided to impair the plan.",
				"exampleZh": "他们决定损害这个计划。"
			},
			{
				"id": 3890,
				"en": "impartial",
				"zh": "公正的",
				"phonetic": "/ʃəl/",
				"example": "He found the task impartial.",
				"exampleZh": "他发现这个任务是公正的的。"
			},
			{
				"id": 3891,
				"en": "implicate",
				"zh": "牵连",
				"phonetic": "/.../",
				"example": "We should implicate more carefully.",
				"exampleZh": "我们应该更仔细地牵连。"
			},
			{
				"id": 3892,
				"en": "implicit",
				"zh": "含蓄的",
				"phonetic": "/.../",
				"example": "She looks implicit today.",
				"exampleZh": "她今天看起来很含蓄的。"
			},
			{
				"id": 3893,
				"en": "imply",
				"zh": "暗示",
				"phonetic": "/li/",
				"example": "Let's imply together.",
				"exampleZh": "让我们一起暗示吧。"
			},
			{
				"id": 3894,
				"en": "impoverish",
				"zh": "使贫穷",
				"phonetic": "/ʃ/",
				"example": "They decided to impoverish the plan.",
				"exampleZh": "他们决定使贫穷这个计划。"
			},
			{
				"id": 3895,
				"en": "impressive",
				"zh": "令人印象深刻的",
				"phonetic": "/.../",
				"example": "He found the task impressive.",
				"exampleZh": "他发现这个任务是令人印象深刻的的。"
			},
			{
				"id": 3896,
				"en": "incentive",
				"zh": "激励",
				"phonetic": "/.../",
				"example": "This is an important incentive.",
				"exampleZh": "这是一个重要的激励。"
			},
			{
				"id": 3897,
				"en": "inclination",
				"zh": "倾向",
				"phonetic": "/ʃən/",
				"example": "I really like the inclination.",
				"exampleZh": "我真的很喜欢这个倾向。"
			},
			{
				"id": 3898,
				"en": "incline",
				"zh": "倾向",
				"phonetic": "/.../",
				"example": "Let's incline together.",
				"exampleZh": "让我们一起倾向吧。"
			},
			{
				"id": 3899,
				"en": "incorporate",
				"zh": "合并",
				"phonetic": "/.../",
				"example": "They decided to incorporate the plan.",
				"exampleZh": "他们决定合并这个计划。"
			},
			{
				"id": 3900,
				"en": "incredible",
				"zh": "难以置信的",
				"phonetic": "/ɪbəl/",
				"example": "He found the task incredible.",
				"exampleZh": "他发现这个任务是难以置信的的。"
			},
			{
				"id": 3901,
				"en": "incur",
				"zh": "招致",
				"phonetic": "/.../",
				"example": "We should incur more carefully.",
				"exampleZh": "我们应该更仔细地招致。"
			},
			{
				"id": 3902,
				"en": "indifferent",
				"zh": "漠不关心的",
				"phonetic": "/.../",
				"example": "She looks indifferent today.",
				"exampleZh": "她今天看起来很漠不关心的。"
			},
			{
				"id": 3903,
				"en": "indignant",
				"zh": "愤慨的",
				"phonetic": "/.../",
				"example": "It's a indignant idea.",
				"exampleZh": "这是一个愤慨的的主意。"
			},
			{
				"id": 3904,
				"en": "indispensable",
				"zh": "不可或缺的",
				"phonetic": "/əbəl/",
				"example": "The result is quite indispensable.",
				"exampleZh": "结果是相当不可或缺的的。"
			},
			{
				"id": 3905,
				"en": "induce",
				"zh": "引起",
				"phonetic": "/.../",
				"example": "I need to induce before the deadline.",
				"exampleZh": "我需要在截止日期前引起。"
			},
			{
				"id": 3906,
				"en": "indulge",
				"zh": "放纵",
				"phonetic": "/.../",
				"example": "We should indulge more carefully.",
				"exampleZh": "我们应该更仔细地放纵。"
			},
			{
				"id": 3907,
				"en": "infect",
				"zh": "感染",
				"phonetic": "/.../",
				"example": "She wants to infect this task.",
				"exampleZh": "她想感染这个任务。"
			},
			{
				"id": 3908,
				"en": "inflict",
				"zh": "施加",
				"phonetic": "/.../",
				"example": "Let's inflict together.",
				"exampleZh": "让我们一起施加吧。"
			},
			{
				"id": 3909,
				"en": "infrastructure",
				"zh": "基础设施",
				"phonetic": "/tʃər/",
				"example": "Do you understand this infrastructure?",
				"exampleZh": "你理解这个基础设施吗？"
			},
			{
				"id": 3910,
				"en": "ingredient",
				"zh": "成分",
				"phonetic": "/.../",
				"example": "ingredient plays a key role in our life.",
				"exampleZh": "成分在我们的生活中起着关键作用。"
			},
			{
				"id": 3911,
				"en": "inhabit",
				"zh": "居住",
				"phonetic": "/.../",
				"example": "We should inhabit more carefully.",
				"exampleZh": "我们应该更仔细地居住。"
			},
			{
				"id": 3912,
				"en": "inherent",
				"zh": "固有的",
				"phonetic": "/.../",
				"example": "She looks inherent today.",
				"exampleZh": "她今天看起来很固有的。"
			},
			{
				"id": 3913,
				"en": "inherit",
				"zh": "继承",
				"phonetic": "/.../",
				"example": "Let's inherit together.",
				"exampleZh": "让我们一起继承吧。"
			},
			{
				"id": 3914,
				"en": "inhibit",
				"zh": "抑制",
				"phonetic": "/.../",
				"example": "They decided to inhibit the plan.",
				"exampleZh": "他们决定抑制这个计划。"
			},
			{
				"id": 3915,
				"en": "initiate",
				"zh": "启动",
				"phonetic": "/.../",
				"example": "I need to initiate before the deadline.",
				"exampleZh": "我需要在截止日期前启动。"
			},
			{
				"id": 3916,
				"en": "inject",
				"zh": "注射",
				"phonetic": "/.../",
				"example": "We should inject more carefully.",
				"exampleZh": "我们应该更仔细地注射。"
			},
			{
				"id": 3917,
				"en": "inquiry",
				"zh": "调查",
				"phonetic": "/kw/",
				"example": "I really like the inquiry.",
				"exampleZh": "我真的很喜欢这个调查。"
			},
			{
				"id": 3918,
				"en": "insufficient",
				"zh": "不足的",
				"phonetic": "/.../",
				"example": "It's a insufficient idea.",
				"exampleZh": "这是一个不足的的主意。"
			},
			{
				"id": 3919,
				"en": "insult",
				"zh": "侮辱",
				"phonetic": "/.../",
				"example": "They decided to insult the plan.",
				"exampleZh": "他们决定侮辱这个计划。"
			},
			{
				"id": 3920,
				"en": "intact",
				"zh": "完整的",
				"phonetic": "/.../",
				"example": "He found the task intact.",
				"exampleZh": "他发现这个任务是完整的的。"
			},
			{
				"id": 3921,
				"en": "integrity",
				"zh": "诚信",
				"phonetic": "/.../",
				"example": "This is an important integrity.",
				"exampleZh": "这是一个重要的诚信。"
			},
			{
				"id": 3922,
				"en": "intercept",
				"zh": "拦截",
				"phonetic": "/.../",
				"example": "She wants to intercept this task.",
				"exampleZh": "她想拦截这个任务。"
			},
			{
				"id": 3923,
				"en": "interim",
				"zh": "临时的",
				"phonetic": "/.../",
				"example": "It's a interim idea.",
				"exampleZh": "这是一个临时的的主意。"
			},
			{
				"id": 3924,
				"en": "interior",
				"zh": "内部的",
				"phonetic": "/ər/",
				"example": "The result is quite interior.",
				"exampleZh": "结果是相当内部的的。"
			},
			{
				"id": 3925,
				"en": "intermediate",
				"zh": "中间的",
				"phonetic": "/.../",
				"example": "He found the task intermediate.",
				"exampleZh": "他发现这个任务是中间的的。"
			},
			{
				"id": 3926,
				"en": "interrupt",
				"zh": "打断",
				"phonetic": "/.../",
				"example": "We should interrupt more carefully.",
				"exampleZh": "我们应该更仔细地打断。"
			},
			{
				"id": 3927,
				"en": "intervene",
				"zh": "干预",
				"phonetic": "/.../",
				"example": "She wants to intervene this task.",
				"exampleZh": "她想干预这个任务。"
			},
			{
				"id": 3928,
				"en": "intricate",
				"zh": "复杂的",
				"phonetic": "/.../",
				"example": "It's a intricate idea.",
				"exampleZh": "这是一个复杂的的主意。"
			},
			{
				"id": 3929,
				"en": "intrinsic",
				"zh": "本质的",
				"phonetic": "/.../",
				"example": "The result is quite intrinsic.",
				"exampleZh": "结果是相当本质的的。"
			},
			{
				"id": 3930,
				"en": "invalid",
				"zh": "无效的",
				"phonetic": "/.../",
				"example": "He found the task invalid.",
				"exampleZh": "他发现这个任务是无效的的。"
			},
			{
				"id": 3931,
				"en": "invariably",
				"zh": "总是",
				"phonetic": "/li/",
				"example": "She invariably agreed with us.",
				"exampleZh": "她总是地同意了我们的意见。"
			},
			{
				"id": 3932,
				"en": "invasion",
				"zh": "入侵",
				"phonetic": "/ʒən/",
				"example": "I really like the invasion.",
				"exampleZh": "我真的很喜欢这个入侵。"
			},
			{
				"id": 3933,
				"en": "inventory",
				"zh": "库存",
				"phonetic": "/.../",
				"example": "The inventory is very useful.",
				"exampleZh": "库存非常有用。"
			},
			{
				"id": 3934,
				"en": "invert",
				"zh": "倒置",
				"phonetic": "/.../",
				"example": "They decided to invert the plan.",
				"exampleZh": "他们决定倒置这个计划。"
			},
			{
				"id": 3935,
				"en": "invoke",
				"zh": "调用",
				"phonetic": "/.../",
				"example": "I need to invoke before the deadline.",
				"exampleZh": "我需要在截止日期前调用。"
			},
			{
				"id": 3936,
				"en": "ironic",
				"zh": "讽刺的",
				"phonetic": "/.../",
				"example": "This is very ironic.",
				"exampleZh": "这非常讽刺的。"
			},
			{
				"id": 3937,
				"en": "irrespective",
				"zh": "无论",
				"phonetic": "/.../",
				"example": "She looks irrespective today.",
				"exampleZh": "她今天看起来很无论。"
			},
			{
				"id": 3938,
				"en": "irrigate",
				"zh": "灌溉",
				"phonetic": "/.../",
				"example": "Let's irrigate together.",
				"exampleZh": "让我们一起灌溉吧。"
			},
			{
				"id": 3939,
				"en": "irritate",
				"zh": "激怒",
				"phonetic": "/.../",
				"example": "They decided to irritate the plan.",
				"exampleZh": "他们决定激怒这个计划。"
			},
			{
				"id": 3940,
				"en": "item",
				"zh": "物品",
				"phonetic": "/.../",
				"example": "item plays a key role in our life.",
				"exampleZh": "物品在我们的生活中起着关键作用。"
			},
			{
				"id": 3941,
				"en": "ivory",
				"zh": "象牙",
				"phonetic": "/.../",
				"example": "This is an important ivory.",
				"exampleZh": "这是一个重要的象牙。"
			},
			{
				"id": 3942,
				"en": "jeopardize",
				"zh": "危及",
				"phonetic": "/.../",
				"example": "She wants to jeopardize this task.",
				"exampleZh": "她想危及这个任务。"
			},
			{
				"id": 3943,
				"en": "judicial",
				"zh": "司法的",
				"phonetic": "/ʃəl/",
				"example": "It's a judicial idea.",
				"exampleZh": "这是一个司法的的主意。"
			},
			{
				"id": 3944,
				"en": "junction",
				"zh": "交叉口",
				"phonetic": "/ʃən/",
				"example": "Do you understand this junction?",
				"exampleZh": "你理解这个交叉口吗？"
			},
			{
				"id": 3945,
				"en": "jurisdiction",
				"zh": "管辖权",
				"phonetic": "/ʃən/",
				"example": "jurisdiction plays a key role in our life.",
				"exampleZh": "管辖权在我们的生活中起着关键作用。"
			},
			{
				"id": 3946,
				"en": "jury",
				"zh": "陪审团",
				"phonetic": "/.../",
				"example": "This is an important jury.",
				"exampleZh": "这是一个重要的陪审团。"
			},
			{
				"id": 3947,
				"en": "juvenile",
				"zh": "青少年的",
				"phonetic": "/.../",
				"example": "She looks juvenile today.",
				"exampleZh": "她今天看起来很青少年的。"
			},
			{
				"id": 3948,
				"en": "kidnap",
				"zh": "绑架",
				"phonetic": "/.../",
				"example": "Let's kidnap together.",
				"exampleZh": "让我们一起绑架吧。"
			},
			{
				"id": 3949,
				"en": "kin",
				"zh": "亲属",
				"phonetic": "/.../",
				"example": "Do you understand this kin?",
				"exampleZh": "你理解这个亲属吗？"
			},
			{
				"id": 3950,
				"en": "knight",
				"zh": "骑士",
				"phonetic": "/aɪt/",
				"example": "knight plays a key role in our life.",
				"exampleZh": "骑士在我们的生活中起着关键作用。"
			},
			{
				"id": 3951,
				"en": "knit",
				"zh": "编织",
				"phonetic": "/.../",
				"example": "We should knit more carefully.",
				"exampleZh": "我们应该更仔细地编织。"
			},
			{
				"id": 3952,
				"en": "knot",
				"zh": "结",
				"phonetic": "/.../",
				"example": "I really like the knot.",
				"exampleZh": "我真的很喜欢这个结。"
			},
			{
				"id": 3953,
				"en": "lag",
				"zh": "落后",
				"phonetic": "/.../",
				"example": "Let's lag together.",
				"exampleZh": "让我们一起落后吧。"
			},
			{
				"id": 3954,
				"en": "landmark",
				"zh": "地标",
				"phonetic": "/.../",
				"example": "Do you understand this landmark?",
				"exampleZh": "你理解这个地标吗？"
			},
			{
				"id": 3955,
				"en": "layout",
				"zh": "布局",
				"phonetic": "/eɪ/",
				"example": "layout plays a key role in our life.",
				"exampleZh": "布局在我们的生活中起着关键作用。"
			},
			{
				"id": 3956,
				"en": "leaflet",
				"zh": "传单",
				"phonetic": "/iː/",
				"example": "This is an important leaflet.",
				"exampleZh": "这是一个重要的传单。"
			},
			{
				"id": 3957,
				"en": "leak",
				"zh": "泄漏",
				"phonetic": "/iː/",
				"example": "She wants to leak this task.",
				"exampleZh": "她想泄漏这个任务。"
			},
			{
				"id": 3958,
				"en": "leap",
				"zh": "跳跃",
				"phonetic": "/iː/",
				"example": "Let's leap together.",
				"exampleZh": "让我们一起跳跃吧。"
			},
			{
				"id": 3959,
				"en": "legitimate",
				"zh": "合法的",
				"phonetic": "/.../",
				"example": "The result is quite legitimate.",
				"exampleZh": "结果是相当合法的的。"
			},
			{
				"id": 3960,
				"en": "leisure",
				"zh": "休闲",
				"phonetic": "/ʒər/",
				"example": "leisure plays a key role in our life.",
				"exampleZh": "休闲在我们的生活中起着关键作用。"
			},
			{
				"id": 3961,
				"en": "lens",
				"zh": "镜头",
				"phonetic": "/.../",
				"example": "This is an important lens.",
				"exampleZh": "这是一个重要的镜头。"
			},
			{
				"id": 3962,
				"en": "lever",
				"zh": "杠杆",
				"phonetic": "/ər/",
				"example": "I really like the lever.",
				"exampleZh": "我真的很喜欢这个杠杆。"
			},
			{
				"id": 3963,
				"en": "levy",
				"zh": "征税",
				"phonetic": "/.../",
				"example": "Let's levy together.",
				"exampleZh": "让我们一起征税吧。"
			},
			{
				"id": 3964,
				"en": "liability",
				"zh": "责任",
				"phonetic": "/.../",
				"example": "Do you understand this liability?",
				"exampleZh": "你理解这个责任吗？"
			},
			{
				"id": 3965,
				"en": "liable",
				"zh": "有责任的",
				"phonetic": "/əbəl/",
				"example": "He found the task liable.",
				"exampleZh": "他发现这个任务是有责任的的。"
			},
			{
				"id": 3966,
				"en": "limb",
				"zh": "肢体",
				"phonetic": "/.../",
				"example": "This is an important limb.",
				"exampleZh": "这是一个重要的肢体。"
			},
			{
				"id": 3967,
				"en": "linger",
				"zh": "逗留",
				"phonetic": "/ər/",
				"example": "She wants to linger this task.",
				"exampleZh": "她想逗留这个任务。"
			},
			{
				"id": 3968,
				"en": "literacy",
				"zh": "读写能力",
				"phonetic": "/.../",
				"example": "The literacy is very useful.",
				"exampleZh": "读写能力非常有用。"
			},
			{
				"id": 3969,
				"en": "literal",
				"zh": "字面的",
				"phonetic": "/.../",
				"example": "The result is quite literal.",
				"exampleZh": "结果是相当字面的的。"
			},
			{
				"id": 3970,
				"en": "lobby",
				"zh": "游说",
				"phonetic": "/.../",
				"example": "I need to lobby before the deadline.",
				"exampleZh": "我需要在截止日期前游说。"
			},
			{
				"id": 3971,
				"en": "lofty",
				"zh": "崇高的",
				"phonetic": "/.../",
				"example": "This is very lofty.",
				"exampleZh": "这非常崇高的。"
			},
			{
				"id": 3972,
				"en": "logistics",
				"zh": "物流",
				"phonetic": "/.../",
				"example": "I really like the logistics.",
				"exampleZh": "我真的很喜欢这个物流。"
			},
			{
				"id": 3973,
				"en": "longitude",
				"zh": "经度",
				"phonetic": "/.../",
				"example": "The longitude is very useful.",
				"exampleZh": "经度非常有用。"
			},
			{
				"id": 3974,
				"en": "loom",
				"zh": "隐约出现",
				"phonetic": "/uː/",
				"example": "They decided to loom the plan.",
				"exampleZh": "他们决定隐约出现这个计划。"
			},
			{
				"id": 3975,
				"en": "loophole",
				"zh": "漏洞",
				"phonetic": "/uː/",
				"example": "loophole plays a key role in our life.",
				"exampleZh": "漏洞在我们的生活中起着关键作用。"
			},
			{
				"id": 3976,
				"en": "lounge",
				"zh": "休息室",
				"phonetic": "/aʊ/",
				"example": "This is an important lounge.",
				"exampleZh": "这是一个重要的休息室。"
			},
			{
				"id": 3977,
				"en": "machinery",
				"zh": "机械",
				"phonetic": "/.../",
				"example": "I really like the machinery.",
				"exampleZh": "我真的很喜欢这个机械。"
			},
			{
				"id": 3978,
				"en": "magistrate",
				"zh": "地方法官",
				"phonetic": "/.../",
				"example": "The magistrate is very useful.",
				"exampleZh": "地方法官非常有用。"
			},
			{
				"id": 3979,
				"en": "magnitude",
				"zh": "大小",
				"phonetic": "/.../",
				"example": "Do you understand this magnitude?",
				"exampleZh": "你理解这个大小吗？"
			},
			{
				"id": 3980,
				"en": "mainstream",
				"zh": "主流",
				"phonetic": "/iː/",
				"example": "mainstream plays a key role in our life.",
				"exampleZh": "主流在我们的生活中起着关键作用。"
			},
			{
				"id": 3981,
				"en": "majesty",
				"zh": "威严",
				"phonetic": "/.../",
				"example": "This is an important majesty.",
				"exampleZh": "这是一个重要的威严。"
			},
			{
				"id": 3982,
				"en": "manuscript",
				"zh": "手稿",
				"phonetic": "/.../",
				"example": "I really like the manuscript.",
				"exampleZh": "我真的很喜欢这个手稿。"
			},
			{
				"id": 3983,
				"en": "marvelous",
				"zh": "了不起的",
				"phonetic": "/əs/",
				"example": "It's a marvelous idea.",
				"exampleZh": "这是一个了不起的的主意。"
			},
			{
				"id": 3984,
				"en": "maternal",
				"zh": "母亲的",
				"phonetic": "/.../",
				"example": "The result is quite maternal.",
				"exampleZh": "结果是相当母亲的的。"
			},
			{
				"id": 3985,
				"en": "maximize",
				"zh": "最大化",
				"phonetic": "/.../",
				"example": "I need to maximize before the deadline.",
				"exampleZh": "我需要在截止日期前最大化。"
			},
			{
				"id": 3986,
				"en": "mediate",
				"zh": "调解",
				"phonetic": "/.../",
				"example": "We should mediate more carefully.",
				"exampleZh": "我们应该更仔细地调解。"
			},
			{
				"id": 3987,
				"en": "melody",
				"zh": "旋律",
				"phonetic": "/.../",
				"example": "I really like the melody.",
				"exampleZh": "我真的很喜欢这个旋律。"
			},
			{
				"id": 3988,
				"en": "melt",
				"zh": "融化",
				"phonetic": "/.../",
				"example": "Let's melt together.",
				"exampleZh": "让我们一起融化吧。"
			},
			{
				"id": 3989,
				"en": "memoir",
				"zh": "回忆录",
				"phonetic": "/ɔɪ/",
				"example": "Do you understand this memoir?",
				"exampleZh": "你理解这个回忆录吗？"
			},
			{
				"id": 3990,
				"en": "menace",
				"zh": "威胁",
				"phonetic": "/.../",
				"example": "menace plays a key role in our life.",
				"exampleZh": "威胁在我们的生活中起着关键作用。"
			},
			{
				"id": 3991,
				"en": "merchandise",
				"zh": "商品",
				"phonetic": "/.../",
				"example": "This is an important merchandise.",
				"exampleZh": "这是一个重要的商品。"
			},
			{
				"id": 3992,
				"en": "mere",
				"zh": "仅仅",
				"phonetic": "/.../",
				"example": "She looks mere today.",
				"exampleZh": "她今天看起来很仅仅。"
			},
			{
				"id": 3993,
				"en": "merge",
				"zh": "合并",
				"phonetic": "/.../",
				"example": "Let's merge together.",
				"exampleZh": "让我们一起合并吧。"
			},
			{
				"id": 3994,
				"en": "merit",
				"zh": "优点",
				"phonetic": "/.../",
				"example": "Do you understand this merit?",
				"exampleZh": "你理解这个优点吗？"
			},
			{
				"id": 3995,
				"en": "metaphor",
				"zh": "隐喻",
				"phonetic": "/ər/",
				"example": "metaphor plays a key role in our life.",
				"exampleZh": "隐喻在我们的生活中起着关键作用。"
			},
			{
				"id": 3996,
				"en": "metropolitan",
				"zh": "大都市的",
				"phonetic": "/.../",
				"example": "This is very metropolitan.",
				"exampleZh": "这非常大都市的。"
			},
			{
				"id": 3997,
				"en": "midst",
				"zh": "中间",
				"phonetic": "/.../",
				"example": "I really like the midst.",
				"exampleZh": "我真的很喜欢这个中间。"
			},
			{
				"id": 3998,
				"en": "migrate",
				"zh": "迁移",
				"phonetic": "/.../",
				"example": "Let's migrate together.",
				"exampleZh": "让我们一起迁移吧。"
			},
			{
				"id": 3999,
				"en": "militant",
				"zh": "好战的",
				"phonetic": "/.../",
				"example": "The result is quite militant.",
				"exampleZh": "结果是相当好战的的。"
			},
			{
				"id": 4000,
				"en": "millennium",
				"zh": "千年",
				"phonetic": "/.../",
				"example": "millennium plays a key role in our life.",
				"exampleZh": "千年在我们的生活中起着关键作用。"
			},
			{
				"id": 4001,
				"en": "mingle",
				"zh": "混合",
				"phonetic": "/.../",
				"example": "We should mingle more carefully.",
				"exampleZh": "我们应该更仔细地混合。"
			},
			{
				"id": 4002,
				"en": "miniature",
				"zh": "微型的",
				"phonetic": "/tʃər/",
				"example": "She looks miniature today.",
				"exampleZh": "她今天看起来很微型的。"
			},
			{
				"id": 4003,
				"en": "minimize",
				"zh": "最小化",
				"phonetic": "/.../",
				"example": "Let's minimize together.",
				"exampleZh": "让我们一起最小化吧。"
			},
			{
				"id": 4004,
				"en": "mischief",
				"zh": "恶作剧",
				"phonetic": "/.../",
				"example": "Do you understand this mischief?",
				"exampleZh": "你理解这个恶作剧吗？"
			},
			{
				"id": 4005,
				"en": "mislead",
				"zh": "误导",
				"phonetic": "/iː/",
				"example": "I need to mislead before the deadline.",
				"exampleZh": "我需要在截止日期前误导。"
			},
			{
				"id": 4006,
				"en": "mobilize",
				"zh": "动员",
				"phonetic": "/.../",
				"example": "We should mobilize more carefully.",
				"exampleZh": "我们应该更仔细地动员。"
			},
			{
				"id": 4007,
				"en": "mock",
				"zh": "嘲笑",
				"phonetic": "/k/",
				"example": "She wants to mock this task.",
				"exampleZh": "她想嘲笑这个任务。"
			},
			{
				"id": 4008,
				"en": "modify",
				"zh": "修改",
				"phonetic": "/.../",
				"example": "Let's modify together.",
				"exampleZh": "让我们一起修改吧。"
			},
			{
				"id": 4009,
				"en": "molecule",
				"zh": "分子",
				"phonetic": "/.../",
				"example": "Do you understand this molecule?",
				"exampleZh": "你理解这个分子吗？"
			},
			{
				"id": 4010,
				"en": "momentum",
				"zh": "势头",
				"phonetic": "/mənt/",
				"example": "momentum plays a key role in our life.",
				"exampleZh": "势头在我们的生活中起着关键作用。"
			},
			{
				"id": 4011,
				"en": "monarch",
				"zh": "君主",
				"phonetic": "/tʃ/",
				"example": "This is an important monarch.",
				"exampleZh": "这是一个重要的君主。"
			},
			{
				"id": 4012,
				"en": "monetary",
				"zh": "货币的",
				"phonetic": "/.../",
				"example": "She looks monetary today.",
				"exampleZh": "她今天看起来很货币的。"
			},
			{
				"id": 4013,
				"en": "monopoly",
				"zh": "垄断",
				"phonetic": "/li/",
				"example": "The monopoly is very useful.",
				"exampleZh": "垄断非常有用。"
			},
			{
				"id": 4014,
				"en": "monster",
				"zh": "怪物",
				"phonetic": "/ər/",
				"example": "Do you understand this monster?",
				"exampleZh": "你理解这个怪物吗？"
			},
			{
				"id": 4015,
				"en": "morality",
				"zh": "道德",
				"phonetic": "/.../",
				"example": "morality plays a key role in our life.",
				"exampleZh": "道德在我们的生活中起着关键作用。"
			},
			{
				"id": 4016,
				"en": "mortgage",
				"zh": "抵押",
				"phonetic": "/.../",
				"example": "This is an important mortgage.",
				"exampleZh": "这是一个重要的抵押。"
			},
			{
				"id": 4017,
				"en": "mount",
				"zh": "增加",
				"phonetic": "/aʊ/",
				"example": "She wants to mount this task.",
				"exampleZh": "她想增加这个任务。"
			},
			{
				"id": 4018,
				"en": "mysterious",
				"zh": "神秘的",
				"phonetic": "/iəs/",
				"example": "It's a mysterious idea.",
				"exampleZh": "这是一个神秘的的主意。"
			},
			{
				"id": 4019,
				"en": "naked",
				"zh": "裸的",
				"phonetic": "/d/",
				"example": "The result is quite naked.",
				"exampleZh": "结果是相当裸的的。"
			},
			{
				"id": 4020,
				"en": "namely",
				"zh": "即",
				"phonetic": "/li/",
				"example": "He spoke namely to the audience.",
				"exampleZh": "他即地对观众说话。"
			},
			{
				"id": 4021,
				"en": "navigate",
				"zh": "导航",
				"phonetic": "/.../",
				"example": "We should navigate more carefully.",
				"exampleZh": "我们应该更仔细地导航。"
			},
			{
				"id": 4022,
				"en": "necessity",
				"zh": "必要性",
				"phonetic": "/.../",
				"example": "I really like the necessity.",
				"exampleZh": "我真的很喜欢这个必要性。"
			},
			{
				"id": 4023,
				"en": "nightmare",
				"zh": "噩梦",
				"phonetic": "/.../",
				"example": "The nightmare is very useful.",
				"exampleZh": "噩梦非常有用。"
			},
			{
				"id": 4024,
				"en": "nominal",
				"zh": "名义上的",
				"phonetic": "/.../",
				"example": "The result is quite nominal.",
				"exampleZh": "结果是相当名义上的的。"
			},
			{
				"id": 4025,
				"en": "nonetheless",
				"zh": "尽管如此",
				"phonetic": "/ləs/",
				"example": "They worked nonetheless on the project.",
				"exampleZh": "他们尽管如此地在这个项目上工作。"
			},
			{
				"id": 4026,
				"en": "notable",
				"zh": "显著的",
				"phonetic": "/əbəl/",
				"example": "This is very notable.",
				"exampleZh": "这非常显著的。"
			},
			{
				"id": 4027,
				"en": "notify",
				"zh": "通知",
				"phonetic": "/.../",
				"example": "She wants to notify this task.",
				"exampleZh": "她想通知这个任务。"
			},
			{
				"id": 4028,
				"en": "notorious",
				"zh": "臭名昭著的",
				"phonetic": "/iəs/",
				"example": "It's a notorious idea.",
				"exampleZh": "这是一个臭名昭著的的主意。"
			},
			{
				"id": 4029,
				"en": "nourish",
				"zh": "滋养",
				"phonetic": "/ʃ/",
				"example": "They decided to nourish the plan.",
				"exampleZh": "他们决定滋养这个计划。"
			},
			{
				"id": 4030,
				"en": "novice",
				"zh": "新手",
				"phonetic": "/.../",
				"example": "novice plays a key role in our life.",
				"exampleZh": "新手在我们的生活中起着关键作用。"
			},
			{
				"id": 4031,
				"en": "nursery",
				"zh": "托儿所",
				"phonetic": "/.../",
				"example": "This is an important nursery.",
				"exampleZh": "这是一个重要的托儿所。"
			},
			{
				"id": 4032,
				"en": "nurture",
				"zh": "培养",
				"phonetic": "/tʃər/",
				"example": "She wants to nurture this task.",
				"exampleZh": "她想培养这个任务。"
			},
			{
				"id": 4033,
				"en": "obedient",
				"zh": "服从的",
				"phonetic": "/.../",
				"example": "It's a obedient idea.",
				"exampleZh": "这是一个服从的的主意。"
			},
			{
				"id": 4034,
				"en": "objection",
				"zh": "反对",
				"phonetic": "/ʃən/",
				"example": "Do you understand this objection?",
				"exampleZh": "你理解这个反对吗？"
			},
			{
				"id": 4035,
				"en": "obscene",
				"zh": "淫秽的",
				"phonetic": "/.../",
				"example": "He found the task obscene.",
				"exampleZh": "他发现这个任务是淫秽的的。"
			},
			{
				"id": 4036,
				"en": "obscure",
				"zh": "模糊的",
				"phonetic": "/.../",
				"example": "This is very obscure.",
				"exampleZh": "这非常模糊的。"
			},
			{
				"id": 4037,
				"en": "obsess",
				"zh": "着迷",
				"phonetic": "/.../",
				"example": "She wants to obsess this task.",
				"exampleZh": "她想着迷这个任务。"
			},
			{
				"id": 4038,
				"en": "obsolete",
				"zh": "过时的",
				"phonetic": "/.../",
				"example": "It's a obsolete idea.",
				"exampleZh": "这是一个过时的的主意。"
			},
			{
				"id": 4039,
				"en": "obstruct",
				"zh": "阻碍",
				"phonetic": "/.../",
				"example": "They decided to obstruct the plan.",
				"exampleZh": "他们决定阻碍这个计划。"
			},
			{
				"id": 4040,
				"en": "odds",
				"zh": "可能性",
				"phonetic": "/.../",
				"example": "odds plays a key role in our life.",
				"exampleZh": "可能性在我们的生活中起着关键作用。"
			},
			{
				"id": 4041,
				"en": "offspring",
				"zh": "后代",
				"phonetic": "/ɪŋ/",
				"example": "This is an important offspring.",
				"exampleZh": "这是一个重要的后代。"
			},
			{
				"id": 4042,
				"en": "ongoing",
				"zh": "进行中的",
				"phonetic": "/ɪŋ/",
				"example": "She looks ongoing today.",
				"exampleZh": "她今天看起来很进行中的。"
			},
			{
				"id": 4043,
				"en": "oppress",
				"zh": "压迫",
				"phonetic": "/.../",
				"example": "Let's oppress together.",
				"exampleZh": "让我们一起压迫吧。"
			},
			{
				"id": 4044,
				"en": "opt",
				"zh": "选择",
				"phonetic": "/.../",
				"example": "They decided to opt the plan.",
				"exampleZh": "他们决定选择这个计划。"
			},
			{
				"id": 4045,
				"en": "orchestra",
				"zh": "管弦乐队",
				"phonetic": "/.../",
				"example": "orchestra plays a key role in our life.",
				"exampleZh": "管弦乐队在我们的生活中起着关键作用。"
			},
			{
				"id": 4046,
				"en": "ordeal",
				"zh": "磨难",
				"phonetic": "/iː/",
				"example": "This is an important ordeal.",
				"exampleZh": "这是一个重要的磨难。"
			},
			{
				"id": 4047,
				"en": "orient",
				"zh": "东方",
				"phonetic": "/.../",
				"example": "I really like the orient.",
				"exampleZh": "我真的很喜欢这个东方。"
			},
			{
				"id": 4048,
				"en": "original",
				"zh": "原始的",
				"phonetic": "/.../",
				"example": "It's a original idea.",
				"exampleZh": "这是一个原始的的主意。"
			},
			{
				"id": 4049,
				"en": "originate",
				"zh": "起源于",
				"phonetic": "/.../",
				"example": "They decided to originate the plan.",
				"exampleZh": "他们决定起源于这个计划。"
			},
			{
				"id": 4050,
				"en": "ornament",
				"zh": "装饰品",
				"phonetic": "/mənt/",
				"example": "ornament plays a key role in our life.",
				"exampleZh": "装饰品在我们的生活中起着关键作用。"
			},
			{
				"id": 4051,
				"en": "outbreak",
				"zh": "爆发",
				"phonetic": "/iː/",
				"example": "This is an important outbreak.",
				"exampleZh": "这是一个重要的爆发。"
			},
			{
				"id": 4052,
				"en": "outfit",
				"zh": "服装",
				"phonetic": "/aʊ/",
				"example": "I really like the outfit.",
				"exampleZh": "我真的很喜欢这个服装。"
			},
			{
				"id": 4053,
				"en": "outlet",
				"zh": "出口",
				"phonetic": "/aʊ/",
				"example": "The outlet is very useful.",
				"exampleZh": "出口非常有用。"
			},
			{
				"id": 4054,
				"en": "outlook",
				"zh": "前景",
				"phonetic": "/uː/",
				"example": "Do you understand this outlook?",
				"exampleZh": "你理解这个前景吗？"
			},
			{
				"id": 4055,
				"en": "outrage",
				"zh": "愤怒",
				"phonetic": "/aʊ/",
				"example": "outrage plays a key role in our life.",
				"exampleZh": "愤怒在我们的生活中起着关键作用。"
			},
			{
				"id": 4056,
				"en": "overflow",
				"zh": "溢出",
				"phonetic": "/aʊ/",
				"example": "We should overflow more carefully.",
				"exampleZh": "我们应该更仔细地溢出。"
			},
			{
				"id": 4057,
				"en": "overhead",
				"zh": "头顶上的",
				"phonetic": "/iː/",
				"example": "She looks overhead today.",
				"exampleZh": "她今天看起来很头顶上的。"
			},
			{
				"id": 4058,
				"en": "overhear",
				"zh": "无意听到",
				"phonetic": "/ɑːr/",
				"example": "Let's overhear together.",
				"exampleZh": "让我们一起无意听到吧。"
			},
			{
				"id": 4059,
				"en": "overlap",
				"zh": "重叠",
				"phonetic": "/.../",
				"example": "They decided to overlap the plan.",
				"exampleZh": "他们决定重叠这个计划。"
			},
			{
				"id": 4060,
				"en": "overnight",
				"zh": "一夜之间",
				"phonetic": "/aɪt/",
				"example": "She overnight agreed with us.",
				"exampleZh": "她一夜之间地同意了我们的意见。"
			},
			{
				"id": 4061,
				"en": "override",
				"zh": "推翻",
				"phonetic": "/.../",
				"example": "We should override more carefully.",
				"exampleZh": "我们应该更仔细地推翻。"
			},
			{
				"id": 4062,
				"en": "oversee",
				"zh": "监督",
				"phonetic": "/iː/",
				"example": "She wants to oversee this task.",
				"exampleZh": "她想监督这个任务。"
			},
			{
				"id": 4063,
				"en": "overt",
				"zh": "公开的",
				"phonetic": "/.../",
				"example": "It's a overt idea.",
				"exampleZh": "这是一个公开的的主意。"
			},
			{
				"id": 4064,
				"en": "overthrow",
				"zh": "推翻",
				"phonetic": "/aʊ/",
				"example": "They decided to overthrow the plan.",
				"exampleZh": "他们决定推翻这个计划。"
			},
			{
				"id": 4065,
				"en": "overturn",
				"zh": "推翻",
				"phonetic": "/.../",
				"example": "I need to overturn before the deadline.",
				"exampleZh": "我需要在截止日期前推翻。"
			},
			{
				"id": 4066,
				"en": "ozone",
				"zh": "臭氧",
				"phonetic": "/.../",
				"example": "This is an important ozone.",
				"exampleZh": "这是一个重要的臭氧。"
			},
			{
				"id": 4067,
				"en": "pact",
				"zh": "协定",
				"phonetic": "/.../",
				"example": "I really like the pact.",
				"exampleZh": "我真的很喜欢这个协定。"
			},
			{
				"id": 4068,
				"en": "paradgm",
				"zh": "范式",
				"phonetic": "/.../",
				"example": "The paradgm is very useful.",
				"exampleZh": "范式非常有用。"
			},
			{
				"id": 4069,
				"en": "parameter",
				"zh": "参数",
				"phonetic": "/ər/",
				"example": "Do you understand this parameter?",
				"exampleZh": "你理解这个参数吗？"
			},
			{
				"id": 4070,
				"en": "parish",
				"zh": "教区",
				"phonetic": "/ʃ/",
				"example": "parish plays a key role in our life.",
				"exampleZh": "教区在我们的生活中起着关键作用。"
			},
			{
				"id": 4071,
				"en": "particle",
				"zh": "粒子",
				"phonetic": "/.../",
				"example": "This is an important particle.",
				"exampleZh": "这是一个重要的粒子。"
			},
			{
				"id": 4072,
				"en": "pasture",
				"zh": "牧场",
				"phonetic": "/tʃər/",
				"example": "I really like the pasture.",
				"exampleZh": "我真的很喜欢这个牧场。"
			},
			{
				"id": 4073,
				"en": "patrol",
				"zh": "巡逻",
				"phonetic": "/.../",
				"example": "Let's patrol together.",
				"exampleZh": "让我们一起巡逻吧。"
			},
			{
				"id": 4074,
				"en": "patron",
				"zh": "赞助人",
				"phonetic": "/.../",
				"example": "Do you understand this patron?",
				"exampleZh": "你理解这个赞助人吗？"
			},
			{
				"id": 4075,
				"en": "peculiar",
				"zh": "奇特的",
				"phonetic": "/ɑːr/",
				"example": "He found the task peculiar.",
				"exampleZh": "他发现这个任务是奇特的的。"
			},
			{
				"id": 4076,
				"en": "pedestrian",
				"zh": "行人",
				"phonetic": "/.../",
				"example": "This is an important pedestrian.",
				"exampleZh": "这是一个重要的行人。"
			},
			{
				"id": 4077,
				"en": "peel",
				"zh": "剥皮",
				"phonetic": "/iː/",
				"example": "She wants to peel this task.",
				"exampleZh": "她想剥皮这个任务。"
			},
			{
				"id": 4078,
				"en": "peer",
				"zh": "同龄人",
				"phonetic": "/ər/",
				"example": "The peer is very useful.",
				"exampleZh": "同龄人非常有用。"
			},
			{
				"id": 4079,
				"en": "pending",
				"zh": "待定的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite pending.",
				"exampleZh": "结果是相当待定的的。"
			},
			{
				"id": 4080,
				"en": "perception",
				"zh": "感知",
				"phonetic": "/ʃən/",
				"example": "perception plays a key role in our life.",
				"exampleZh": "感知在我们的生活中起着关键作用。"
			},
			{
				"id": 4081,
				"en": "peril",
				"zh": "危险",
				"phonetic": "/.../",
				"example": "This is an important peril.",
				"exampleZh": "这是一个重要的危险。"
			},
			{
				"id": 4082,
				"en": "perpetual",
				"zh": "永久的",
				"phonetic": "/.../",
				"example": "She looks perpetual today.",
				"exampleZh": "她今天看起来很永久的。"
			},
			{
				"id": 4083,
				"en": "perplex",
				"zh": "困惑",
				"phonetic": "/.../",
				"example": "Let's perplex together.",
				"exampleZh": "让我们一起困惑吧。"
			},
			{
				"id": 4084,
				"en": "persecute",
				"zh": "迫害",
				"phonetic": "/.../",
				"example": "They decided to persecute the plan.",
				"exampleZh": "他们决定迫害这个计划。"
			},
			{
				"id": 4085,
				"en": "personnel",
				"zh": "人员",
				"phonetic": "/.../",
				"example": "personnel plays a key role in our life.",
				"exampleZh": "人员在我们的生活中起着关键作用。"
			},
			{
				"id": 4086,
				"en": "petition",
				"zh": "请愿",
				"phonetic": "/ʃən/",
				"example": "This is an important petition.",
				"exampleZh": "这是一个重要的请愿。"
			},
			{
				"id": 4087,
				"en": "pinpoint",
				"zh": "精确定位",
				"phonetic": "/ɔɪ/",
				"example": "She wants to pinpoint this task.",
				"exampleZh": "她想精确定位这个任务。"
			},
			{
				"id": 4088,
				"en": "pipeline",
				"zh": "管道",
				"phonetic": "/.../",
				"example": "The pipeline is very useful.",
				"exampleZh": "管道非常有用。"
			},
			{
				"id": 4089,
				"en": "pitfall",
				"zh": "陷阱",
				"phonetic": "/.../",
				"example": "Do you understand this pitfall?",
				"exampleZh": "你理解这个陷阱吗？"
			},
			{
				"id": 4090,
				"en": "plague",
				"zh": "瘟疫",
				"phonetic": "/.../",
				"example": "plague plays a key role in our life.",
				"exampleZh": "瘟疫在我们的生活中起着关键作用。"
			},
			{
				"id": 4091,
				"en": "plausible",
				"zh": "看似合理的",
				"phonetic": "/ɪbəl/",
				"example": "This is very plausible.",
				"exampleZh": "这非常看似合理的。"
			},
			{
				"id": 4092,
				"en": "plea",
				"zh": "请求",
				"phonetic": "/iː/",
				"example": "I really like the plea.",
				"exampleZh": "我真的很喜欢这个请求。"
			},
			{
				"id": 4093,
				"en": "plead",
				"zh": "恳求",
				"phonetic": "/iː/",
				"example": "Let's plead together.",
				"exampleZh": "让我们一起恳求吧。"
			},
			{
				"id": 4094,
				"en": "plentiful",
				"zh": "丰富的",
				"phonetic": "/fəl/",
				"example": "The result is quite plentiful.",
				"exampleZh": "结果是相当丰富的的。"
			},
			{
				"id": 4095,
				"en": "plight",
				"zh": "困境",
				"phonetic": "/aɪt/",
				"example": "plight plays a key role in our life.",
				"exampleZh": "困境在我们的生活中起着关键作用。"
			},
			{
				"id": 4096,
				"en": "ponder",
				"zh": "思考",
				"phonetic": "/ər/",
				"example": "We should ponder more carefully.",
				"exampleZh": "我们应该更仔细地思考。"
			},
			{
				"id": 4097,
				"en": "portfolio",
				"zh": "投资组合",
				"phonetic": "/.../",
				"example": "I really like the portfolio.",
				"exampleZh": "我真的很喜欢这个投资组合。"
			},
			{
				"id": 4098,
				"en": "posterity",
				"zh": "后代",
				"phonetic": "/.../",
				"example": "The posterity is very useful.",
				"exampleZh": "后代非常有用。"
			},
			{
				"id": 4099,
				"en": "postpone",
				"zh": "推迟",
				"phonetic": "/.../",
				"example": "They decided to postpone the plan.",
				"exampleZh": "他们决定推迟这个计划。"
			},
			{
				"id": 4100,
				"en": "precedent",
				"zh": "先例",
				"phonetic": "/.../",
				"example": "precedent plays a key role in our life.",
				"exampleZh": "先例在我们的生活中起着关键作用。"
			},
			{
				"id": 4101,
				"en": "predator",
				"zh": "捕食者",
				"phonetic": "/ər/",
				"example": "This is an important predator.",
				"exampleZh": "这是一个重要的捕食者。"
			},
			{
				"id": 4102,
				"en": "predecessor",
				"zh": "前任",
				"phonetic": "/ər/",
				"example": "I really like the predecessor.",
				"exampleZh": "我真的很喜欢这个前任。"
			},
			{
				"id": 4103,
				"en": "predominant",
				"zh": "主要的",
				"phonetic": "/.../",
				"example": "It's a predominant idea.",
				"exampleZh": "这是一个主要的的主意。"
			},
			{
				"id": 4104,
				"en": "preference",
				"zh": "偏好",
				"phonetic": "/əns/",
				"example": "Do you understand this preference?",
				"exampleZh": "你理解这个偏好吗？"
			},
			{
				"id": 4105,
				"en": "pregnancy",
				"zh": "怀孕",
				"phonetic": "/.../",
				"example": "pregnancy plays a key role in our life.",
				"exampleZh": "怀孕在我们的生活中起着关键作用。"
			},
			{
				"id": 4106,
				"en": "preliminary",
				"zh": "初步的",
				"phonetic": "/.../",
				"example": "This is very preliminary.",
				"exampleZh": "这非常初步的。"
			},
			{
				"id": 4107,
				"en": "prescribe",
				"zh": "开处方",
				"phonetic": "/.../",
				"example": "She wants to prescribe this task.",
				"exampleZh": "她想开处方这个任务。"
			},
			{
				"id": 4108,
				"en": "prestige",
				"zh": "声望",
				"phonetic": "/.../",
				"example": "The prestige is very useful.",
				"exampleZh": "声望非常有用。"
			},
			{
				"id": 4109,
				"en": "presumably",
				"zh": "大概",
				"phonetic": "/li/",
				"example": "They worked presumably on the project.",
				"exampleZh": "他们大概地在这个项目上工作。"
			},
			{
				"id": 4110,
				"en": "prevalent",
				"zh": "流行的",
				"phonetic": "/.../",
				"example": "He found the task prevalent.",
				"exampleZh": "他发现这个任务是流行的的。"
			},
			{
				"id": 4111,
				"en": "prey",
				"zh": "猎物",
				"phonetic": "/.../",
				"example": "This is an important prey.",
				"exampleZh": "这是一个重要的猎物。"
			},
			{
				"id": 4112,
				"en": "principal",
				"zh": "校长",
				"phonetic": "/.../",
				"example": "I really like the principal.",
				"exampleZh": "我真的很喜欢这个校长。"
			},
			{
				"id": 4113,
				"en": "prior",
				"zh": "先前的",
				"phonetic": "/ər/",
				"example": "It's a prior idea.",
				"exampleZh": "这是一个先前的的主意。"
			},
			{
				"id": 4114,
				"en": "privacy",
				"zh": "隐私",
				"phonetic": "/.../",
				"example": "Do you understand this privacy?",
				"exampleZh": "你理解这个隐私吗？"
			},
			{
				"id": 4115,
				"en": "probe",
				"zh": "探测",
				"phonetic": "/.../",
				"example": "I need to probe before the deadline.",
				"exampleZh": "我需要在截止日期前探测。"
			},
			{
				"id": 4116,
				"en": "proceedings",
				"zh": "诉讼",
				"phonetic": "/iː/",
				"example": "This is an important proceedings.",
				"exampleZh": "这是一个重要的诉讼。"
			},
			{
				"id": 4117,
				"en": "procure",
				"zh": "获得",
				"phonetic": "/.../",
				"example": "She wants to procure this task.",
				"exampleZh": "她想获得这个任务。"
			},
			{
				"id": 4118,
				"en": "productive",
				"zh": "多产的",
				"phonetic": "/.../",
				"example": "It's a productive idea.",
				"exampleZh": "这是一个多产的的主意。"
			},
			{
				"id": 4119,
				"en": "proficiency",
				"zh": "熟练",
				"phonetic": "/.../",
				"example": "Do you understand this proficiency?",
				"exampleZh": "你理解这个熟练吗？"
			},
			{
				"id": 4120,
				"en": "prolong",
				"zh": "延长",
				"phonetic": "/.../",
				"example": "I need to prolong before the deadline.",
				"exampleZh": "我需要在截止日期前延长。"
			},
			{
				"id": 4121,
				"en": "prone",
				"zh": "有倾向的",
				"phonetic": "/.../",
				"example": "This is very prone.",
				"exampleZh": "这非常有倾向的。"
			},
			{
				"id": 4122,
				"en": "propel",
				"zh": "推进",
				"phonetic": "/.../",
				"example": "She wants to propel this task.",
				"exampleZh": "她想推进这个任务。"
			},
			{
				"id": 4123,
				"en": "prophet",
				"zh": "先知",
				"phonetic": "/.../",
				"example": "The prophet is very useful.",
				"exampleZh": "先知非常有用。"
			},
			{
				"id": 4124,
				"en": "proposition",
				"zh": "命题",
				"phonetic": "/ʃən/",
				"example": "Do you understand this proposition?",
				"exampleZh": "你理解这个命题吗？"
			},
			{
				"id": 4125,
				"en": "prosecute",
				"zh": "起诉",
				"phonetic": "/.../",
				"example": "I need to prosecute before the deadline.",
				"exampleZh": "我需要在截止日期前起诉。"
			},
			{
				"id": 4126,
				"en": "protocol",
				"zh": "协议",
				"phonetic": "/.../",
				"example": "This is an important protocol.",
				"exampleZh": "这是一个重要的协议。"
			},
			{
				"id": 4127,
				"en": "prototype",
				"zh": "原型",
				"phonetic": "/.../",
				"example": "I really like the prototype.",
				"exampleZh": "我真的很喜欢这个原型。"
			},
			{
				"id": 4128,
				"en": "provoke",
				"zh": "激怒",
				"phonetic": "/.../",
				"example": "Let's provoke together.",
				"exampleZh": "让我们一起激怒吧。"
			},
			{
				"id": 4129,
				"en": "prudent",
				"zh": "谨慎的",
				"phonetic": "/.../",
				"example": "The result is quite prudent.",
				"exampleZh": "结果是相当谨慎的的。"
			},
			{
				"id": 4130,
				"en": "psychiatry",
				"zh": "精神病学",
				"phonetic": "/.../",
				"example": "psychiatry plays a key role in our life.",
				"exampleZh": "精神病学在我们的生活中起着关键作用。"
			},
			{
				"id": 4131,
				"en": "purify",
				"zh": "净化",
				"phonetic": "/.../",
				"example": "We should purify more carefully.",
				"exampleZh": "我们应该更仔细地净化。"
			},
			{
				"id": 4132,
				"en": "pursuit",
				"zh": "追求",
				"phonetic": "/.../",
				"example": "I really like the pursuit.",
				"exampleZh": "我真的很喜欢这个追求。"
			},
			{
				"id": 4133,
				"en": "quantitative",
				"zh": "定量的",
				"phonetic": "/kw/",
				"example": "It's a quantitative idea.",
				"exampleZh": "这是一个定量的的主意。"
			},
			{
				"id": 4134,
				"en": "quest",
				"zh": "探索",
				"phonetic": "/kw/",
				"example": "Do you understand this quest?",
				"exampleZh": "你理解这个探索吗？"
			},
			{
				"id": 4135,
				"en": "questionnaire",
				"zh": "问卷",
				"phonetic": "/ʃən/",
				"example": "questionnaire plays a key role in our life.",
				"exampleZh": "问卷在我们的生活中起着关键作用。"
			},
			{
				"id": 4136,
				"en": "quota",
				"zh": "配额",
				"phonetic": "/kw/",
				"example": "This is an important quota.",
				"exampleZh": "这是一个重要的配额。"
			},
			{
				"id": 4137,
				"en": "rage",
				"zh": "愤怒",
				"phonetic": "/.../",
				"example": "I really like the rage.",
				"exampleZh": "我真的很喜欢这个愤怒。"
			},
			{
				"id": 4138,
				"en": "raid",
				"zh": "突袭",
				"phonetic": "/eɪ/",
				"example": "The raid is very useful.",
				"exampleZh": "突袭非常有用。"
			},
			{
				"id": 4139,
				"en": "rally",
				"zh": "集会",
				"phonetic": "/li/",
				"example": "Do you understand this rally?",
				"exampleZh": "你理解这个集会吗？"
			},
			{
				"id": 4140,
				"en": "ransom",
				"zh": "赎金",
				"phonetic": "/.../",
				"example": "ransom plays a key role in our life.",
				"exampleZh": "赎金在我们的生活中起着关键作用。"
			},
			{
				"id": 4141,
				"en": "realm",
				"zh": "领域",
				"phonetic": "/iː/",
				"example": "This is an important realm.",
				"exampleZh": "这是一个重要的领域。"
			},
			{
				"id": 4142,
				"en": "rear",
				"zh": "后方",
				"phonetic": "/ɑːr/",
				"example": "I really like the rear.",
				"exampleZh": "我真的很喜欢这个后方。"
			},
			{
				"id": 4143,
				"en": "rebound",
				"zh": "反弹",
				"phonetic": "/aʊ/",
				"example": "Let's rebound together.",
				"exampleZh": "让我们一起反弹吧。"
			},
			{
				"id": 4144,
				"en": "recall",
				"zh": "召回",
				"phonetic": "/.../",
				"example": "They decided to recall the plan.",
				"exampleZh": "他们决定召回这个计划。"
			},
			{
				"id": 4145,
				"en": "recession",
				"zh": "衰退",
				"phonetic": "/ʃən/",
				"example": "recession plays a key role in our life.",
				"exampleZh": "衰退在我们的生活中起着关键作用。"
			},
			{
				"id": 4146,
				"en": "recipient",
				"zh": "接受者",
				"phonetic": "/.../",
				"example": "This is an important recipient.",
				"exampleZh": "这是一个重要的接受者。"
			},
			{
				"id": 4147,
				"en": "reckless",
				"zh": "鲁莽的",
				"phonetic": "/ləs/",
				"example": "She looks reckless today.",
				"exampleZh": "她今天看起来很鲁莽的。"
			},
			{
				"id": 4148,
				"en": "recur",
				"zh": "再次发生",
				"phonetic": "/.../",
				"example": "Let's recur together.",
				"exampleZh": "让我们一起再次发生吧。"
			},
			{
				"id": 4149,
				"en": "recycle",
				"zh": "回收",
				"phonetic": "/.../",
				"example": "They decided to recycle the plan.",
				"exampleZh": "他们决定回收这个计划。"
			},
			{
				"id": 4150,
				"en": "redeem",
				"zh": "赎回",
				"phonetic": "/iː/",
				"example": "I need to redeem before the deadline.",
				"exampleZh": "我需要在截止日期前赎回。"
			},
			{
				"id": 4151,
				"en": "redundant",
				"zh": "多余的",
				"phonetic": "/.../",
				"example": "This is very redundant.",
				"exampleZh": "这非常多余的。"
			},
			{
				"id": 4152,
				"en": "referee",
				"zh": "裁判",
				"phonetic": "/iː/",
				"example": "I really like the referee.",
				"exampleZh": "我真的很喜欢这个裁判。"
			},
			{
				"id": 4153,
				"en": "refuge",
				"zh": "避难",
				"phonetic": "/.../",
				"example": "The refuge is very useful.",
				"exampleZh": "避难非常有用。"
			},
			{
				"id": 4154,
				"en": "refugee",
				"zh": "难民",
				"phonetic": "/iː/",
				"example": "Do you understand this refugee?",
				"exampleZh": "你理解这个难民吗？"
			},
			{
				"id": 4155,
				"en": "refund",
				"zh": "退款",
				"phonetic": "/.../",
				"example": "refund plays a key role in our life.",
				"exampleZh": "退款在我们的生活中起着关键作用。"
			},
			{
				"id": 4156,
				"en": "refute",
				"zh": "反驳",
				"phonetic": "/.../",
				"example": "We should refute more carefully.",
				"exampleZh": "我们应该更仔细地反驳。"
			},
			{
				"id": 4157,
				"en": "rehabilitation",
				"zh": "康复",
				"phonetic": "/ʃən/",
				"example": "I really like the rehabilitation.",
				"exampleZh": "我真的很喜欢这个康复。"
			},
			{
				"id": 4158,
				"en": "reign",
				"zh": "统治",
				"phonetic": "/.../",
				"example": "Let's reign together.",
				"exampleZh": "让我们一起统治吧。"
			},
			{
				"id": 4159,
				"en": "rejoice",
				"zh": "欢欣",
				"phonetic": "/ɔɪ/",
				"example": "They decided to rejoice the plan.",
				"exampleZh": "他们决定欢欣这个计划。"
			},
			{
				"id": 4160,
				"en": "relay",
				"zh": "接力",
				"phonetic": "/eɪ/",
				"example": "I need to relay before the deadline.",
				"exampleZh": "我需要在截止日期前接力。"
			},
			{
				"id": 4161,
				"en": "relentless",
				"zh": "无情的",
				"phonetic": "/ləs/",
				"example": "This is very relentless.",
				"exampleZh": "这非常无情的。"
			},
			{
				"id": 4162,
				"en": "remainder",
				"zh": "剩余",
				"phonetic": "/ər/",
				"example": "I really like the remainder.",
				"exampleZh": "我真的很喜欢这个剩余。"
			},
			{
				"id": 4163,
				"en": "remnant",
				"zh": "残余",
				"phonetic": "/.../",
				"example": "The remnant is very useful.",
				"exampleZh": "残余非常有用。"
			},
			{
				"id": 4164,
				"en": "renowned",
				"zh": "著名的",
				"phonetic": "/d/",
				"example": "The result is quite renowned.",
				"exampleZh": "结果是相当著名的的。"
			},
			{
				"id": 4165,
				"en": "repeal",
				"zh": "废除",
				"phonetic": "/iː/",
				"example": "I need to repeal before the deadline.",
				"exampleZh": "我需要在截止日期前废除。"
			},
			{
				"id": 4166,
				"en": "repent",
				"zh": "后悔",
				"phonetic": "/.../",
				"example": "We should repent more carefully.",
				"exampleZh": "我们应该更仔细地后悔。"
			},
			{
				"id": 4167,
				"en": "replacement",
				"zh": "替换",
				"phonetic": "/mənt/",
				"example": "I really like the replacement.",
				"exampleZh": "我真的很喜欢这个替换。"
			},
			{
				"id": 4168,
				"en": "reproach",
				"zh": "责备",
				"phonetic": "/tʃ/",
				"example": "Let's reproach together.",
				"exampleZh": "让我们一起责备吧。"
			},
			{
				"id": 4169,
				"en": "reservation",
				"zh": "预订",
				"phonetic": "/ʃən/",
				"example": "Do you understand this reservation?",
				"exampleZh": "你理解这个预订吗？"
			},
			{
				"id": 4170,
				"en": "reside",
				"zh": "居住",
				"phonetic": "/.../",
				"example": "I need to reside before the deadline.",
				"exampleZh": "我需要在截止日期前居住。"
			},
			{
				"id": 4171,
				"en": "resilient",
				"zh": "有弹性的",
				"phonetic": "/.../",
				"example": "This is very resilient.",
				"exampleZh": "这非常有弹性的。"
			},
			{
				"id": 4172,
				"en": "respective",
				"zh": "各自的",
				"phonetic": "/.../",
				"example": "She looks respective today.",
				"exampleZh": "她今天看起来很各自的。"
			},
			{
				"id": 4173,
				"en": "respiration",
				"zh": "呼吸",
				"phonetic": "/ʃən/",
				"example": "The respiration is very useful.",
				"exampleZh": "呼吸非常有用。"
			},
			{
				"id": 4174,
				"en": "retaliate",
				"zh": "报复",
				"phonetic": "/.../",
				"example": "They decided to retaliate the plan.",
				"exampleZh": "他们决定报复这个计划。"
			},
			{
				"id": 4175,
				"en": "retort",
				"zh": "反驳",
				"phonetic": "/.../",
				"example": "I need to retort before the deadline.",
				"exampleZh": "我需要在截止日期前反驳。"
			},
			{
				"id": 4176,
				"en": "retrieve",
				"zh": "检索",
				"phonetic": "/.../",
				"example": "We should retrieve more carefully.",
				"exampleZh": "我们应该更仔细地检索。"
			},
			{
				"id": 4177,
				"en": "revive",
				"zh": "复兴",
				"phonetic": "/.../",
				"example": "She wants to revive this task.",
				"exampleZh": "她想复兴这个任务。"
			},
			{
				"id": 4178,
				"en": "revolve",
				"zh": "旋转",
				"phonetic": "/.../",
				"example": "Let's revolve together.",
				"exampleZh": "让我们一起旋转吧。"
			},
			{
				"id": 4179,
				"en": "riddle",
				"zh": "谜语",
				"phonetic": "/.../",
				"example": "Do you understand this riddle?",
				"exampleZh": "你理解这个谜语吗？"
			},
			{
				"id": 4180,
				"en": "ridge",
				"zh": "山脊",
				"phonetic": "/.../",
				"example": "ridge plays a key role in our life.",
				"exampleZh": "山脊在我们的生活中起着关键作用。"
			},
			{
				"id": 4181,
				"en": "ridiculous",
				"zh": "荒谬的",
				"phonetic": "/əs/",
				"example": "This is very ridiculous.",
				"exampleZh": "这非常荒谬的。"
			},
			{
				"id": 4182,
				"en": "rigor",
				"zh": "严格",
				"phonetic": "/ər/",
				"example": "I really like the rigor.",
				"exampleZh": "我真的很喜欢这个严格。"
			},
			{
				"id": 4183,
				"en": "riot",
				"zh": "暴乱",
				"phonetic": "/.../",
				"example": "The riot is very useful.",
				"exampleZh": "暴乱非常有用。"
			},
			{
				"id": 4184,
				"en": "rip",
				"zh": "撕裂",
				"phonetic": "/.../",
				"example": "They decided to rip the plan.",
				"exampleZh": "他们决定撕裂这个计划。"
			},
			{
				"id": 4185,
				"en": "ripe",
				"zh": "成熟的",
				"phonetic": "/.../",
				"example": "He found the task ripe.",
				"exampleZh": "他发现这个任务是成熟的的。"
			},
			{
				"id": 4186,
				"en": "roar",
				"zh": "吼叫",
				"phonetic": "/ɑːr/",
				"example": "We should roar more carefully.",
				"exampleZh": "我们应该更仔细地吼叫。"
			},
			{
				"id": 4187,
				"en": "robust",
				"zh": "强健的",
				"phonetic": "/.../",
				"example": "She looks robust today.",
				"exampleZh": "她今天看起来很强健的。"
			},
			{
				"id": 4188,
				"en": "roughly",
				"zh": "大致",
				"phonetic": "/li/",
				"example": "He spoke roughly to the audience.",
				"exampleZh": "他大致地对观众说话。"
			},
			{
				"id": 4189,
				"en": "routine",
				"zh": "常规",
				"phonetic": "/aʊ/",
				"example": "Do you understand this routine?",
				"exampleZh": "你理解这个常规吗？"
			},
			{
				"id": 4190,
				"en": "royalty",
				"zh": "王族",
				"phonetic": "/ɔɪ/",
				"example": "royalty plays a key role in our life.",
				"exampleZh": "王族在我们的生活中起着关键作用。"
			},
			{
				"id": 4191,
				"en": "ruthless",
				"zh": "无情的",
				"phonetic": "/ləs/",
				"example": "This is very ruthless.",
				"exampleZh": "这非常无情的。"
			},
			{
				"id": 4192,
				"en": "sack",
				"zh": "麻袋",
				"phonetic": "/k/",
				"example": "I really like the sack.",
				"exampleZh": "我真的很喜欢这个麻袋。"
			},
			{
				"id": 4193,
				"en": "safeguard",
				"zh": "保护",
				"phonetic": "/.../",
				"example": "Let's safeguard together.",
				"exampleZh": "让我们一起保护吧。"
			},
			{
				"id": 4194,
				"en": "sake",
				"zh": "缘故",
				"phonetic": "/.../",
				"example": "Do you understand this sake?",
				"exampleZh": "你理解这个缘故吗？"
			},
			{
				"id": 4195,
				"en": "saturate",
				"zh": "饱和",
				"phonetic": "/.../",
				"example": "I need to saturate before the deadline.",
				"exampleZh": "我需要在截止日期前饱和。"
			},
			{
				"id": 4196,
				"en": "savage",
				"zh": "野性的",
				"phonetic": "/.../",
				"example": "This is very savage.",
				"exampleZh": "这非常野性的。"
			},
			{
				"id": 4197,
				"en": "scenario",
				"zh": "情景",
				"phonetic": "/.../",
				"example": "I really like the scenario.",
				"exampleZh": "我真的很喜欢这个情景。"
			},
			{
				"id": 4198,
				"en": "scent",
				"zh": "气味",
				"phonetic": "/.../",
				"example": "The scent is very useful.",
				"exampleZh": "气味非常有用。"
			},
			{
				"id": 4199,
				"en": "sceptical",
				"zh": "怀疑的",
				"phonetic": "/.../",
				"example": "The result is quite sceptical.",
				"exampleZh": "结果是相当怀疑的的。"
			},
			{
				"id": 4200,
				"en": "scorn",
				"zh": "轻蔑",
				"phonetic": "/.../",
				"example": "scorn plays a key role in our life.",
				"exampleZh": "轻蔑在我们的生活中起着关键作用。"
			},
			{
				"id": 4201,
				"en": "scout",
				"zh": "侦察",
				"phonetic": "/aʊ/",
				"example": "We should scout more carefully.",
				"exampleZh": "我们应该更仔细地侦察。"
			},
			{
				"id": 4202,
				"en": "scramble",
				"zh": "争夺",
				"phonetic": "/.../",
				"example": "She wants to scramble this task.",
				"exampleZh": "她想争夺这个任务。"
			},
			{
				"id": 4203,
				"en": "scrap",
				"zh": "废料",
				"phonetic": "/.../",
				"example": "The scrap is very useful.",
				"exampleZh": "废料非常有用。"
			},
			{
				"id": 4204,
				"en": "screw",
				"zh": "螺丝",
				"phonetic": "/.../",
				"example": "Do you understand this screw?",
				"exampleZh": "你理解这个螺丝吗？"
			},
			{
				"id": 4205,
				"en": "scrutiny",
				"zh": "审查",
				"phonetic": "/.../",
				"example": "scrutiny plays a key role in our life.",
				"exampleZh": "审查在我们的生活中起着关键作用。"
			},
			{
				"id": 4206,
				"en": "secular",
				"zh": "世俗的",
				"phonetic": "/ɑːr/",
				"example": "This is very secular.",
				"exampleZh": "这非常世俗的。"
			},
			{
				"id": 4207,
				"en": "segregate",
				"zh": "隔离",
				"phonetic": "/.../",
				"example": "She wants to segregate this task.",
				"exampleZh": "她想隔离这个任务。"
			},
			{
				"id": 4208,
				"en": "semester",
				"zh": "学期",
				"phonetic": "/ər/",
				"example": "The semester is very useful.",
				"exampleZh": "学期非常有用。"
			},
			{
				"id": 4209,
				"en": "senate",
				"zh": "参议院",
				"phonetic": "/.../",
				"example": "Do you understand this senate?",
				"exampleZh": "你理解这个参议院吗？"
			},
			{
				"id": 4210,
				"en": "sentiment",
				"zh": "情绪",
				"phonetic": "/mənt/",
				"example": "sentiment plays a key role in our life.",
				"exampleZh": "情绪在我们的生活中起着关键作用。"
			},
			{
				"id": 4211,
				"en": "sergeant",
				"zh": "中士",
				"phonetic": "/iː/",
				"example": "This is an important sergeant.",
				"exampleZh": "这是一个重要的中士。"
			},
			{
				"id": 4212,
				"en": "serial",
				"zh": "连续的",
				"phonetic": "/.../",
				"example": "She looks serial today.",
				"exampleZh": "她今天看起来很连续的。"
			},
			{
				"id": 4213,
				"en": "setback",
				"zh": "挫折",
				"phonetic": "/k/",
				"example": "The setback is very useful.",
				"exampleZh": "挫折非常有用。"
			},
			{
				"id": 4214,
				"en": "shatter",
				"zh": "粉碎",
				"phonetic": "/ər/",
				"example": "They decided to shatter the plan.",
				"exampleZh": "他们决定粉碎这个计划。"
			},
			{
				"id": 4215,
				"en": "shed",
				"zh": "脱落",
				"phonetic": "/d/",
				"example": "I need to shed before the deadline.",
				"exampleZh": "我需要在截止日期前脱落。"
			},
			{
				"id": 4216,
				"en": "sheer",
				"zh": "纯粹的",
				"phonetic": "/ər/",
				"example": "This is very sheer.",
				"exampleZh": "这非常纯粹的。"
			},
			{
				"id": 4217,
				"en": "shipment",
				"zh": "装运",
				"phonetic": "/mənt/",
				"example": "I really like the shipment.",
				"exampleZh": "我真的很喜欢这个装运。"
			},
			{
				"id": 4218,
				"en": "showcase",
				"zh": "展示",
				"phonetic": "/aʊ/",
				"example": "Let's showcase together.",
				"exampleZh": "让我们一起展示吧。"
			},
			{
				"id": 4219,
				"en": "shrewd",
				"zh": "精明的",
				"phonetic": "/.../",
				"example": "The result is quite shrewd.",
				"exampleZh": "结果是相当精明的的。"
			},
			{
				"id": 4220,
				"en": "shrug",
				"zh": "耸肩",
				"phonetic": "/.../",
				"example": "I need to shrug before the deadline.",
				"exampleZh": "我需要在截止日期前耸肩。"
			},
			{
				"id": 4221,
				"en": "shuttle",
				"zh": "穿梭",
				"phonetic": "/.../",
				"example": "This is an important shuttle.",
				"exampleZh": "这是一个重要的穿梭。"
			},
			{
				"id": 4222,
				"en": "siege",
				"zh": "围攻",
				"phonetic": "/.../",
				"example": "I really like the siege.",
				"exampleZh": "我真的很喜欢这个围攻。"
			},
			{
				"id": 4223,
				"en": "significant",
				"zh": "重要的",
				"phonetic": "/.../",
				"example": "It's a significant idea.",
				"exampleZh": "这是一个重要的的主意。"
			},
			{
				"id": 4224,
				"en": "simulate",
				"zh": "模拟",
				"phonetic": "/.../",
				"example": "They decided to simulate the plan.",
				"exampleZh": "他们决定模拟这个计划。"
			},
			{
				"id": 4225,
				"en": "sin",
				"zh": "罪",
				"phonetic": "/.../",
				"example": "sin plays a key role in our life.",
				"exampleZh": "罪在我们的生活中起着关键作用。"
			},
			{
				"id": 4226,
				"en": "skeptical",
				"zh": "怀疑的",
				"phonetic": "/.../",
				"example": "This is very skeptical.",
				"exampleZh": "这非常怀疑的。"
			},
			{
				"id": 4227,
				"en": "slack",
				"zh": "松弛的",
				"phonetic": "/k/",
				"example": "She looks slack today.",
				"exampleZh": "她今天看起来很松弛的。"
			},
			{
				"id": 4228,
				"en": "slam",
				"zh": "猛关",
				"phonetic": "/.../",
				"example": "Let's slam together.",
				"exampleZh": "让我们一起猛关吧。"
			},
			{
				"id": 4229,
				"en": "slaughter",
				"zh": "屠杀",
				"phonetic": "/ər/",
				"example": "Do you understand this slaughter?",
				"exampleZh": "你理解这个屠杀吗？"
			},
			{
				"id": 4230,
				"en": "slim",
				"zh": "苗条的",
				"phonetic": "/.../",
				"example": "He found the task slim.",
				"exampleZh": "他发现这个任务是苗条的的。"
			},
			{
				"id": 4231,
				"en": "slope",
				"zh": "斜坡",
				"phonetic": "/.../",
				"example": "This is an important slope.",
				"exampleZh": "这是一个重要的斜坡。"
			},
			{
				"id": 4232,
				"en": "slot",
				"zh": "缝隙",
				"phonetic": "/.../",
				"example": "I really like the slot.",
				"exampleZh": "我真的很喜欢这个缝隙。"
			},
			{
				"id": 4233,
				"en": "soak",
				"zh": "浸泡",
				"phonetic": "/oʊ/",
				"example": "Let's soak together.",
				"exampleZh": "让我们一起浸泡吧。"
			},
			{
				"id": 4234,
				"en": "solitary",
				"zh": "孤独的",
				"phonetic": "/.../",
				"example": "The result is quite solitary.",
				"exampleZh": "结果是相当孤独的的。"
			},
			{
				"id": 4235,
				"en": "sore",
				"zh": "疼痛的",
				"phonetic": "/.../",
				"example": "He found the task sore.",
				"exampleZh": "他发现这个任务是疼痛的的。"
			},
			{
				"id": 4236,
				"en": "sour",
				"zh": "酸的",
				"phonetic": "/aʊ/",
				"example": "This is very sour.",
				"exampleZh": "这非常酸的。"
			},
			{
				"id": 4237,
				"en": "sovereign",
				"zh": "主权",
				"phonetic": "/.../",
				"example": "I really like the sovereign.",
				"exampleZh": "我真的很喜欢这个主权。"
			},
			{
				"id": 4238,
				"en": "spine",
				"zh": "脊柱",
				"phonetic": "/.../",
				"example": "The spine is very useful.",
				"exampleZh": "脊柱非常有用。"
			},
			{
				"id": 4239,
				"en": "spite",
				"zh": "恶意",
				"phonetic": "/.../",
				"example": "Do you understand this spite?",
				"exampleZh": "你理解这个恶意吗？"
			},
			{
				"id": 4240,
				"en": "splash",
				"zh": "溅",
				"phonetic": "/ʃ/",
				"example": "I need to splash before the deadline.",
				"exampleZh": "我需要在截止日期前溅。"
			},
			{
				"id": 4241,
				"en": "splendid",
				"zh": "辉煌的",
				"phonetic": "/.../",
				"example": "This is very splendid.",
				"exampleZh": "这非常辉煌的。"
			},
			{
				"id": 4242,
				"en": "spontaneous",
				"zh": "自发的",
				"phonetic": "/iəs/",
				"example": "She looks spontaneous today.",
				"exampleZh": "她今天看起来很自发的。"
			},
			{
				"id": 4243,
				"en": "sprinkle",
				"zh": "洒",
				"phonetic": "/.../",
				"example": "Let's sprinkle together.",
				"exampleZh": "让我们一起洒吧。"
			},
			{
				"id": 4244,
				"en": "stagger",
				"zh": "蹒跚",
				"phonetic": "/ər/",
				"example": "They decided to stagger the plan.",
				"exampleZh": "他们决定蹒跚这个计划。"
			},
			{
				"id": 4245,
				"en": "stain",
				"zh": "污渍",
				"phonetic": "/eɪ/",
				"example": "stain plays a key role in our life.",
				"exampleZh": "污渍在我们的生活中起着关键作用。"
			},
			{
				"id": 4246,
				"en": "stall",
				"zh": "摊位",
				"phonetic": "/.../",
				"example": "This is an important stall.",
				"exampleZh": "这是一个重要的摊位。"
			},
			{
				"id": 4247,
				"en": "stance",
				"zh": "立场",
				"phonetic": "/əns/",
				"example": "I really like the stance.",
				"exampleZh": "我真的很喜欢这个立场。"
			},
			{
				"id": 4248,
				"en": "standpoint",
				"zh": "立场",
				"phonetic": "/ɔɪ/",
				"example": "The standpoint is very useful.",
				"exampleZh": "立场非常有用。"
			},
			{
				"id": 4249,
				"en": "staple",
				"zh": "主要产品",
				"phonetic": "/.../",
				"example": "Do you understand this staple?",
				"exampleZh": "你理解这个主要产品吗？"
			},
			{
				"id": 4250,
				"en": "static",
				"zh": "静态的",
				"phonetic": "/.../",
				"example": "He found the task static.",
				"exampleZh": "他发现这个任务是静态的的。"
			},
			{
				"id": 4251,
				"en": "statute",
				"zh": "法规",
				"phonetic": "/.../",
				"example": "This is an important statute.",
				"exampleZh": "这是一个重要的法规。"
			},
			{
				"id": 4252,
				"en": "steer",
				"zh": "驾驶",
				"phonetic": "/ər/",
				"example": "She wants to steer this task.",
				"exampleZh": "她想驾驶这个任务。"
			},
			{
				"id": 4253,
				"en": "stereotype",
				"zh": "刻板印象",
				"phonetic": "/.../",
				"example": "The stereotype is very useful.",
				"exampleZh": "刻板印象非常有用。"
			},
			{
				"id": 4254,
				"en": "stern",
				"zh": "严厉的",
				"phonetic": "/.../",
				"example": "The result is quite stern.",
				"exampleZh": "结果是相当严厉的的。"
			},
			{
				"id": 4255,
				"en": "stipulate",
				"zh": "规定",
				"phonetic": "/.../",
				"example": "I need to stipulate before the deadline.",
				"exampleZh": "我需要在截止日期前规定。"
			},
			{
				"id": 4256,
				"en": "strap",
				"zh": "皮带",
				"phonetic": "/.../",
				"example": "This is an important strap.",
				"exampleZh": "这是一个重要的皮带。"
			},
			{
				"id": 4257,
				"en": "straw",
				"zh": "稻草",
				"phonetic": "/ɔː/",
				"example": "I really like the straw.",
				"exampleZh": "我真的很喜欢这个稻草。"
			},
			{
				"id": 4258,
				"en": "striking",
				"zh": "显著的",
				"phonetic": "/ɪŋ/",
				"example": "It's a striking idea.",
				"exampleZh": "这是一个显著的的主意。"
			},
			{
				"id": 4259,
				"en": "string",
				"zh": "线",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this string?",
				"exampleZh": "你理解这个线吗？"
			},
			{
				"id": 4260,
				"en": "strip",
				"zh": "条",
				"phonetic": "/.../",
				"example": "strip plays a key role in our life.",
				"exampleZh": "条在我们的生活中起着关键作用。"
			},
			{
				"id": 4261,
				"en": "strive",
				"zh": "努力",
				"phonetic": "/.../",
				"example": "We should strive more carefully.",
				"exampleZh": "我们应该更仔细地努力。"
			},
			{
				"id": 4262,
				"en": "stroll",
				"zh": "散步",
				"phonetic": "/.../",
				"example": "She wants to stroll this task.",
				"exampleZh": "她想散步这个任务。"
			},
			{
				"id": 4263,
				"en": "structural",
				"zh": "结构的",
				"phonetic": "/.../",
				"example": "It's a structural idea.",
				"exampleZh": "这是一个结构的的主意。"
			},
			{
				"id": 4264,
				"en": "stubborn",
				"zh": "固执的",
				"phonetic": "/.../",
				"example": "The result is quite stubborn.",
				"exampleZh": "结果是相当固执的的。"
			},
			{
				"id": 4265,
				"en": "studio",
				"zh": "工作室",
				"phonetic": "/.../",
				"example": "studio plays a key role in our life.",
				"exampleZh": "工作室在我们的生活中起着关键作用。"
			},
			{
				"id": 4266,
				"en": "stuff",
				"zh": "东西",
				"phonetic": "/.../",
				"example": "This is an important stuff.",
				"exampleZh": "这是一个重要的东西。"
			},
			{
				"id": 4267,
				"en": "stumble",
				"zh": "绊倒",
				"phonetic": "/.../",
				"example": "She wants to stumble this task.",
				"exampleZh": "她想绊倒这个任务。"
			},
			{
				"id": 4268,
				"en": "stun",
				"zh": "使震惊",
				"phonetic": "/.../",
				"example": "Let's stun together.",
				"exampleZh": "让我们一起使震惊吧。"
			},
			{
				"id": 4269,
				"en": "subdue",
				"zh": "制服",
				"phonetic": "/.../",
				"example": "They decided to subdue the plan.",
				"exampleZh": "他们决定制服这个计划。"
			},
			{
				"id": 4270,
				"en": "subordinate",
				"zh": "下级的",
				"phonetic": "/.../",
				"example": "He found the task subordinate.",
				"exampleZh": "他发现这个任务是下级的的。"
			},
			{
				"id": 4271,
				"en": "subscribe",
				"zh": "订阅",
				"phonetic": "/.../",
				"example": "We should subscribe more carefully.",
				"exampleZh": "我们应该更仔细地订阅。"
			},
			{
				"id": 4272,
				"en": "subsidy",
				"zh": "补贴",
				"phonetic": "/.../",
				"example": "I really like the subsidy.",
				"exampleZh": "我真的很喜欢这个补贴。"
			},
			{
				"id": 4273,
				"en": "subsistence",
				"zh": "生存",
				"phonetic": "/əns/",
				"example": "The subsistence is very useful.",
				"exampleZh": "生存非常有用。"
			},
			{
				"id": 4274,
				"en": "substantial",
				"zh": "大量的",
				"phonetic": "/ʃəl/",
				"example": "The result is quite substantial.",
				"exampleZh": "结果是相当大量的的。"
			},
			{
				"id": 4275,
				"en": "sufficient",
				"zh": "足够的",
				"phonetic": "/.../",
				"example": "He found the task sufficient.",
				"exampleZh": "他发现这个任务是足够的的。"
			},
			{
				"id": 4276,
				"en": "suffocate",
				"zh": "窒息",
				"phonetic": "/.../",
				"example": "We should suffocate more carefully.",
				"exampleZh": "我们应该更仔细地窒息。"
			},
			{
				"id": 4277,
				"en": "summon",
				"zh": "召唤",
				"phonetic": "/.../",
				"example": "She wants to summon this task.",
				"exampleZh": "她想召唤这个任务。"
			},
			{
				"id": 4278,
				"en": "superficial",
				"zh": "肤浅的",
				"phonetic": "/ʃəl/",
				"example": "It's a superficial idea.",
				"exampleZh": "这是一个肤浅的的主意。"
			},
			{
				"id": 4279,
				"en": "superintendent",
				"zh": "主管",
				"phonetic": "/.../",
				"example": "Do you understand this superintendent?",
				"exampleZh": "你理解这个主管吗？"
			},
			{
				"id": 4280,
				"en": "supersonic",
				"zh": "超音速的",
				"phonetic": "/.../",
				"example": "He found the task supersonic.",
				"exampleZh": "他发现这个任务是超音速的的。"
			},
			{
				"id": 4281,
				"en": "swallow",
				"zh": "吞咽",
				"phonetic": "/aʊ/",
				"example": "We should swallow more carefully.",
				"exampleZh": "我们应该更仔细地吞咽。"
			},
			{
				"id": 4282,
				"en": "symmetry",
				"zh": "对称",
				"phonetic": "/.../",
				"example": "I really like the symmetry.",
				"exampleZh": "我真的很喜欢这个对称。"
			},
			{
				"id": 4283,
				"en": "symphony",
				"zh": "交响乐",
				"phonetic": "/.../",
				"example": "The symphony is very useful.",
				"exampleZh": "交响乐非常有用。"
			},
			{
				"id": 4284,
				"en": "syndrome",
				"zh": "综合征",
				"phonetic": "/.../",
				"example": "Do you understand this syndrome?",
				"exampleZh": "你理解这个综合征吗？"
			},
			{
				"id": 4285,
				"en": "synthesis",
				"zh": "合成",
				"phonetic": "/.../",
				"example": "synthesis plays a key role in our life.",
				"exampleZh": "合成在我们的生活中起着关键作用。"
			},
			{
				"id": 4286,
				"en": "synthetic",
				"zh": "合成的",
				"phonetic": "/.../",
				"example": "This is very synthetic.",
				"exampleZh": "这非常合成的。"
			},
			{
				"id": 4287,
				"en": "tactic",
				"zh": "策略",
				"phonetic": "/.../",
				"example": "I really like the tactic.",
				"exampleZh": "我真的很喜欢这个策略。"
			},
			{
				"id": 4288,
				"en": "tag",
				"zh": "标签",
				"phonetic": "/.../",
				"example": "The tag is very useful.",
				"exampleZh": "标签非常有用。"
			},
			{
				"id": 4289,
				"en": "tangible",
				"zh": "有形的",
				"phonetic": "/ɪbəl/",
				"example": "The result is quite tangible.",
				"exampleZh": "结果是相当有形的的。"
			},
			{
				"id": 4290,
				"en": "tariff",
				"zh": "关税",
				"phonetic": "/.../",
				"example": "tariff plays a key role in our life.",
				"exampleZh": "关税在我们的生活中起着关键作用。"
			},
			{
				"id": 4291,
				"en": "tenant",
				"zh": "租户",
				"phonetic": "/.../",
				"example": "This is an important tenant.",
				"exampleZh": "这是一个重要的租户。"
			},
			{
				"id": 4292,
				"en": "tender",
				"zh": "温柔的",
				"phonetic": "/ər/",
				"example": "She looks tender today.",
				"exampleZh": "她今天看起来很温柔的。"
			},
			{
				"id": 4293,
				"en": "terminate",
				"zh": "终止",
				"phonetic": "/.../",
				"example": "Let's terminate together.",
				"exampleZh": "让我们一起终止吧。"
			},
			{
				"id": 4294,
				"en": "terrain",
				"zh": "地形",
				"phonetic": "/eɪ/",
				"example": "Do you understand this terrain?",
				"exampleZh": "你理解这个地形吗？"
			},
			{
				"id": 4295,
				"en": "testimony",
				"zh": "证词",
				"phonetic": "/.../",
				"example": "testimony plays a key role in our life.",
				"exampleZh": "证词在我们的生活中起着关键作用。"
			},
			{
				"id": 4296,
				"en": "theoretical",
				"zh": "理论的",
				"phonetic": "/.../",
				"example": "This is very theoretical.",
				"exampleZh": "这非常理论的。"
			},
			{
				"id": 4297,
				"en": "threshold",
				"zh": "门槛",
				"phonetic": "/.../",
				"example": "I really like the threshold.",
				"exampleZh": "我真的很喜欢这个门槛。"
			},
			{
				"id": 4298,
				"en": "throne",
				"zh": "王位",
				"phonetic": "/.../",
				"example": "The throne is very useful.",
				"exampleZh": "王位非常有用。"
			},
			{
				"id": 4299,
				"en": "timber",
				"zh": "木材",
				"phonetic": "/ər/",
				"example": "Do you understand this timber?",
				"exampleZh": "你理解这个木材吗？"
			},
			{
				"id": 4300,
				"en": "toil",
				"zh": "辛苦劳动",
				"phonetic": "/ɔɪ/",
				"example": "I need to toil before the deadline.",
				"exampleZh": "我需要在截止日期前辛苦劳动。"
			},
			{
				"id": 4301,
				"en": "torment",
				"zh": "折磨",
				"phonetic": "/mənt/",
				"example": "We should torment more carefully.",
				"exampleZh": "我们应该更仔细地折磨。"
			},
			{
				"id": 4302,
				"en": "tow",
				"zh": "拖",
				"phonetic": "/aʊ/",
				"example": "She wants to tow this task.",
				"exampleZh": "她想拖这个任务。"
			},
			{
				"id": 4303,
				"en": "tram",
				"zh": "电车",
				"phonetic": "/.../",
				"example": "The tram is very useful.",
				"exampleZh": "电车非常有用。"
			},
			{
				"id": 4304,
				"en": "tranquil",
				"zh": "宁静的",
				"phonetic": "/kw/",
				"example": "The result is quite tranquil.",
				"exampleZh": "结果是相当宁静的的。"
			},
			{
				"id": 4305,
				"en": "transcend",
				"zh": "超越",
				"phonetic": "/.../",
				"example": "I need to transcend before the deadline.",
				"exampleZh": "我需要在截止日期前超越。"
			},
			{
				"id": 4306,
				"en": "transcript",
				"zh": "抄本",
				"phonetic": "/.../",
				"example": "This is an important transcript.",
				"exampleZh": "这是一个重要的抄本。"
			},
			{
				"id": 4307,
				"en": "transient",
				"zh": "短暂的",
				"phonetic": "/.../",
				"example": "She looks transient today.",
				"exampleZh": "她今天看起来很短暂的。"
			},
			{
				"id": 4308,
				"en": "transit",
				"zh": "运输",
				"phonetic": "/.../",
				"example": "The transit is very useful.",
				"exampleZh": "运输非常有用。"
			},
			{
				"id": 4309,
				"en": "transition",
				"zh": "过渡",
				"phonetic": "/ʃən/",
				"example": "Do you understand this transition?",
				"exampleZh": "你理解这个过渡吗？"
			},
			{
				"id": 4310,
				"en": "transplant",
				"zh": "移植",
				"phonetic": "/.../",
				"example": "I need to transplant before the deadline.",
				"exampleZh": "我需要在截止日期前移植。"
			},
			{
				"id": 4311,
				"en": "trauma",
				"zh": "创伤",
				"phonetic": "/ɔː/",
				"example": "This is an important trauma.",
				"exampleZh": "这是一个重要的创伤。"
			},
			{
				"id": 4312,
				"en": "tremendous",
				"zh": "巨大的",
				"phonetic": "/əs/",
				"example": "She looks tremendous today.",
				"exampleZh": "她今天看起来很巨大的。"
			},
			{
				"id": 4313,
				"en": "trifle",
				"zh": "琐事",
				"phonetic": "/.../",
				"example": "The trifle is very useful.",
				"exampleZh": "琐事非常有用。"
			},
			{
				"id": 4314,
				"en": "trillion",
				"zh": "万亿",
				"phonetic": "/.../",
				"example": "I think trillion is important.",
				"exampleZh": "我认为万亿很重要。"
			},
			{
				"id": 4315,
				"en": "trim",
				"zh": "修剪",
				"phonetic": "/.../",
				"example": "I need to trim before the deadline.",
				"exampleZh": "我需要在截止日期前修剪。"
			},
			{
				"id": 4316,
				"en": "triple",
				"zh": "三倍的",
				"phonetic": "/.../",
				"example": "This is very triple.",
				"exampleZh": "这非常三倍的。"
			},
			{
				"id": 4317,
				"en": "trivial",
				"zh": "琐碎的",
				"phonetic": "/.../",
				"example": "She looks trivial today.",
				"exampleZh": "她今天看起来很琐碎的。"
			},
			{
				"id": 4318,
				"en": "troublesome",
				"zh": "麻烦的",
				"phonetic": "/aʊ/",
				"example": "It's a troublesome idea.",
				"exampleZh": "这是一个麻烦的的主意。"
			},
			{
				"id": 4319,
				"en": "trumpet",
				"zh": "喇叭",
				"phonetic": "/.../",
				"example": "Do you understand this trumpet?",
				"exampleZh": "你理解这个喇叭吗？"
			},
			{
				"id": 4320,
				"en": "trunk",
				"zh": "树干",
				"phonetic": "/.../",
				"example": "trunk plays a key role in our life.",
				"exampleZh": "树干在我们的生活中起着关键作用。"
			},
			{
				"id": 4321,
				"en": "tumble",
				"zh": "跌倒",
				"phonetic": "/.../",
				"example": "We should tumble more carefully.",
				"exampleZh": "我们应该更仔细地跌倒。"
			},
			{
				"id": 4322,
				"en": "turbulent",
				"zh": "动荡的",
				"phonetic": "/.../",
				"example": "She looks turbulent today.",
				"exampleZh": "她今天看起来很动荡的。"
			},
			{
				"id": 4323,
				"en": "turnover",
				"zh": "营业额",
				"phonetic": "/ər/",
				"example": "The turnover is very useful.",
				"exampleZh": "营业额非常有用。"
			},
			{
				"id": 4324,
				"en": "tutor",
				"zh": "导师",
				"phonetic": "/ər/",
				"example": "Do you understand this tutor?",
				"exampleZh": "你理解这个导师吗？"
			},
			{
				"id": 4325,
				"en": "tyranny",
				"zh": "暴政",
				"phonetic": "/.../",
				"example": "tyranny plays a key role in our life.",
				"exampleZh": "暴政在我们的生活中起着关键作用。"
			},
			{
				"id": 4326,
				"en": "ultimate",
				"zh": "最终的",
				"phonetic": "/.../",
				"example": "This is very ultimate.",
				"exampleZh": "这非常最终的。"
			},
			{
				"id": 4327,
				"en": "unanimous",
				"zh": "一致的",
				"phonetic": "/əs/",
				"example": "She looks unanimous today.",
				"exampleZh": "她今天看起来很一致的。"
			},
			{
				"id": 4328,
				"en": "underline",
				"zh": "强调",
				"phonetic": "/.../",
				"example": "Let's underline together.",
				"exampleZh": "让我们一起强调吧。"
			},
			{
				"id": 4329,
				"en": "underlying",
				"zh": "潜在的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite underlying.",
				"exampleZh": "结果是相当潜在的的。"
			},
			{
				"id": 4330,
				"en": "uphold",
				"zh": "支持",
				"phonetic": "/.../",
				"example": "I need to uphold before the deadline.",
				"exampleZh": "我需要在截止日期前支持。"
			},
			{
				"id": 4331,
				"en": "uproar",
				"zh": "骚动",
				"phonetic": "/ɑːr/",
				"example": "This is an important uproar.",
				"exampleZh": "这是一个重要的骚动。"
			},
			{
				"id": 4332,
				"en": "vain",
				"zh": "徒劳的",
				"phonetic": "/eɪ/",
				"example": "She looks vain today.",
				"exampleZh": "她今天看起来很徒劳的。"
			},
			{
				"id": 4333,
				"en": "variation",
				"zh": "变化",
				"phonetic": "/ʃən/",
				"example": "The variation is very useful.",
				"exampleZh": "变化非常有用。"
			},
			{
				"id": 4334,
				"en": "veil",
				"zh": "面纱",
				"phonetic": "/.../",
				"example": "Do you understand this veil?",
				"exampleZh": "你理解这个面纱吗？"
			},
			{
				"id": 4335,
				"en": "vendor",
				"zh": "供应商",
				"phonetic": "/ər/",
				"example": "vendor plays a key role in our life.",
				"exampleZh": "供应商在我们的生活中起着关键作用。"
			},
			{
				"id": 4336,
				"en": "venue",
				"zh": "场地",
				"phonetic": "/.../",
				"example": "This is an important venue.",
				"exampleZh": "这是一个重要的场地。"
			},
			{
				"id": 4337,
				"en": "verdict",
				"zh": "裁决",
				"phonetic": "/.../",
				"example": "I really like the verdict.",
				"exampleZh": "我真的很喜欢这个裁决。"
			},
			{
				"id": 4338,
				"en": "versatile",
				"zh": "多才多艺的",
				"phonetic": "/.../",
				"example": "It's a versatile idea.",
				"exampleZh": "这是一个多才多艺的的主意。"
			},
			{
				"id": 4339,
				"en": "verse",
				"zh": "诗节",
				"phonetic": "/.../",
				"example": "Do you understand this verse?",
				"exampleZh": "你理解这个诗节吗？"
			},
			{
				"id": 4340,
				"en": "veto",
				"zh": "否决",
				"phonetic": "/.../",
				"example": "I need to veto before the deadline.",
				"exampleZh": "我需要在截止日期前否决。"
			},
			{
				"id": 4341,
				"en": "vicious",
				"zh": "恶毒的",
				"phonetic": "/ʃəs/",
				"example": "This is very vicious.",
				"exampleZh": "这非常恶毒的。"
			},
			{
				"id": 4342,
				"en": "vocation",
				"zh": "职业",
				"phonetic": "/ʃən/",
				"example": "I really like the vocation.",
				"exampleZh": "我真的很喜欢这个职业。"
			},
			{
				"id": 4343,
				"en": "void",
				"zh": "空的",
				"phonetic": "/ɔɪ/",
				"example": "It's a void idea.",
				"exampleZh": "这是一个空的的主意。"
			},
			{
				"id": 4344,
				"en": "vomit",
				"zh": "呕吐",
				"phonetic": "/.../",
				"example": "They decided to vomit the plan.",
				"exampleZh": "他们决定呕吐这个计划。"
			},
			{
				"id": 4345,
				"en": "voucher",
				"zh": "凭证",
				"phonetic": "/ər/",
				"example": "voucher plays a key role in our life.",
				"exampleZh": "凭证在我们的生活中起着关键作用。"
			},
			{
				"id": 4346,
				"en": "vow",
				"zh": "誓言",
				"phonetic": "/aʊ/",
				"example": "This is an important vow.",
				"exampleZh": "这是一个重要的誓言。"
			},
			{
				"id": 4347,
				"en": "ward",
				"zh": "病房",
				"phonetic": "/.../",
				"example": "I really like the ward.",
				"exampleZh": "我真的很喜欢这个病房。"
			},
			{
				"id": 4348,
				"en": "warfare",
				"zh": "战争",
				"phonetic": "/.../",
				"example": "The warfare is very useful.",
				"exampleZh": "战争非常有用。"
			},
			{
				"id": 4349,
				"en": "warrior",
				"zh": "战士",
				"phonetic": "/ər/",
				"example": "Do you understand this warrior?",
				"exampleZh": "你理解这个战士吗？"
			},
			{
				"id": 4350,
				"en": "weary",
				"zh": "疲倦的",
				"phonetic": "/iː/",
				"example": "He found the task weary.",
				"exampleZh": "他发现这个任务是疲倦的的。"
			},
			{
				"id": 4351,
				"en": "wedge",
				"zh": "楔子",
				"phonetic": "/.../",
				"example": "This is an important wedge.",
				"exampleZh": "这是一个重要的楔子。"
			},
			{
				"id": 4352,
				"en": "whereby",
				"zh": "凭借",
				"phonetic": "/w/",
				"example": "They worked whereby on the project.",
				"exampleZh": "他们凭借地在这个项目上工作。"
			},
			{
				"id": 4353,
				"en": "wither",
				"zh": "枯萎",
				"phonetic": "/ər/",
				"example": "Let's wither together.",
				"exampleZh": "让我们一起枯萎吧。"
			},
			{
				"id": 4354,
				"en": "withhold",
				"zh": "扣留",
				"phonetic": "/.../",
				"example": "They decided to withhold the plan.",
				"exampleZh": "他们决定扣留这个计划。"
			},
			{
				"id": 4355,
				"en": "wrench",
				"zh": "扳手",
				"phonetic": "/tʃ/",
				"example": "wrench plays a key role in our life.",
				"exampleZh": "扳手在我们的生活中起着关键作用。"
			},
			{
				"id": 4356,
				"en": "wretched",
				"zh": "可怜的",
				"phonetic": "/d/",
				"example": "This is very wretched.",
				"exampleZh": "这非常可怜的。"
			},
			{
				"id": 4357,
				"en": "youngster",
				"zh": "年轻人",
				"phonetic": "/ər/",
				"example": "I really like the youngster.",
				"exampleZh": "我真的很喜欢这个年轻人。"
			},
			{
				"id": 4358,
				"en": "zeal",
				"zh": "热情",
				"phonetic": "/iː/",
				"example": "The zeal is very useful.",
				"exampleZh": "热情非常有用。"
			},
			{
				"id": 4359,
				"en": "aboriginal",
				"zh": "原住民的",
				"phonetic": "/.../",
				"example": "The result is quite aboriginal.",
				"exampleZh": "结果是相当原住民的的。"
			},
			{
				"id": 4360,
				"en": "abstain",
				"zh": "戒除",
				"phonetic": "/eɪ/",
				"example": "I need to abstain before the deadline.",
				"exampleZh": "我需要在截止日期前戒除。"
			},
			{
				"id": 4361,
				"en": "abundance",
				"zh": "丰富",
				"phonetic": "/əns/",
				"example": "This is an important abundance.",
				"exampleZh": "这是一个重要的丰富。"
			},
			{
				"id": 4362,
				"en": "accessibility",
				"zh": "可访问性",
				"phonetic": "/.../",
				"example": "I really like the accessibility.",
				"exampleZh": "我真的很喜欢这个可访问性。"
			},
			{
				"id": 4363,
				"en": "accountability",
				"zh": "问责",
				"phonetic": "/aʊ/",
				"example": "The accountability is very useful.",
				"exampleZh": "问责非常有用。"
			},
			{
				"id": 4364,
				"en": "accusation",
				"zh": "指控",
				"phonetic": "/ʃən/",
				"example": "Do you understand this accusation?",
				"exampleZh": "你理解这个指控吗？"
			},
			{
				"id": 4365,
				"en": "accustom",
				"zh": "使习惯",
				"phonetic": "/.../",
				"example": "I need to accustom before the deadline.",
				"exampleZh": "我需要在截止日期前使习惯。"
			},
			{
				"id": 4366,
				"en": "acupuncture",
				"zh": "针灸",
				"phonetic": "/tʃər/",
				"example": "This is an important acupuncture.",
				"exampleZh": "这是一个重要的针灸。"
			},
			{
				"id": 4367,
				"en": "additionally",
				"zh": "此外",
				"phonetic": "/ʃən/",
				"example": "They worked additionally on the project.",
				"exampleZh": "他们此外地在这个项目上工作。"
			},
			{
				"id": 4368,
				"en": "adequately",
				"zh": "充分地",
				"phonetic": "/li/",
				"example": "He spoke adequately to the audience.",
				"exampleZh": "他充分地地对观众说话。"
			},
			{
				"id": 4369,
				"en": "admirable",
				"zh": "令人钦佩的",
				"phonetic": "/əbəl/",
				"example": "The result is quite admirable.",
				"exampleZh": "结果是相当令人钦佩的的。"
			},
			{
				"id": 4370,
				"en": "adoption",
				"zh": "采用",
				"phonetic": "/ʃən/",
				"example": "adoption plays a key role in our life.",
				"exampleZh": "采用在我们的生活中起着关键作用。"
			},
			{
				"id": 4371,
				"en": "advertisement",
				"zh": "广告",
				"phonetic": "/mənt/",
				"example": "This is an important advertisement.",
				"exampleZh": "这是一个重要的广告。"
			},
			{
				"id": 4372,
				"en": "aerial",
				"zh": "航空的",
				"phonetic": "/.../",
				"example": "She looks aerial today.",
				"exampleZh": "她今天看起来很航空的。"
			},
			{
				"id": 4373,
				"en": "aerospace",
				"zh": "航空航天",
				"phonetic": "/.../",
				"example": "The aerospace is very useful.",
				"exampleZh": "航空航天非常有用。"
			},
			{
				"id": 4374,
				"en": "affluent",
				"zh": "富裕的",
				"phonetic": "/.../",
				"example": "The result is quite affluent.",
				"exampleZh": "结果是相当富裕的的。"
			},
			{
				"id": 4375,
				"en": "aftermath",
				"zh": "后果",
				"phonetic": "/θ/",
				"example": "aftermath plays a key role in our life.",
				"exampleZh": "后果在我们的生活中起着关键作用。"
			},
			{
				"id": 4376,
				"en": "agony",
				"zh": "痛苦",
				"phonetic": "/.../",
				"example": "This is an important agony.",
				"exampleZh": "这是一个重要的痛苦。"
			},
			{
				"id": 4377,
				"en": "agreeable",
				"zh": "愉快的",
				"phonetic": "/əbəl/",
				"example": "She looks agreeable today.",
				"exampleZh": "她今天看起来很愉快的。"
			},
			{
				"id": 4378,
				"en": "alleviate",
				"zh": "缓解",
				"phonetic": "/.../",
				"example": "Let's alleviate together.",
				"exampleZh": "让我们一起缓解吧。"
			},
			{
				"id": 4379,
				"en": "alliance",
				"zh": "联盟",
				"phonetic": "/əns/",
				"example": "Do you understand this alliance?",
				"exampleZh": "你理解这个联盟吗？"
			},
			{
				"id": 4380,
				"en": "alloy",
				"zh": "合金",
				"phonetic": "/ɔɪ/",
				"example": "alloy plays a key role in our life.",
				"exampleZh": "合金在我们的生活中起着关键作用。"
			},
			{
				"id": 4381,
				"en": "aloof",
				"zh": "冷漠的",
				"phonetic": "/uː/",
				"example": "This is very aloof.",
				"exampleZh": "这非常冷漠的。"
			},
			{
				"id": 4382,
				"en": "altar",
				"zh": "祭坛",
				"phonetic": "/ɑːr/",
				"example": "I really like the altar.",
				"exampleZh": "我真的很喜欢这个祭坛。"
			},
			{
				"id": 4383,
				"en": "aluminum",
				"zh": "铝",
				"phonetic": "/.../",
				"example": "The aluminum is very useful.",
				"exampleZh": "铝非常有用。"
			},
			{
				"id": 4384,
				"en": "ambiguity",
				"zh": "模糊",
				"phonetic": "/.../",
				"example": "Do you understand this ambiguity?",
				"exampleZh": "你理解这个模糊吗？"
			},
			{
				"id": 4385,
				"en": "amendment",
				"zh": "修正案",
				"phonetic": "/mənt/",
				"example": "amendment plays a key role in our life.",
				"exampleZh": "修正案在我们的生活中起着关键作用。"
			},
			{
				"id": 4386,
				"en": "ammunition",
				"zh": "弹药",
				"phonetic": "/ʃən/",
				"example": "This is an important ammunition.",
				"exampleZh": "这是一个重要的弹药。"
			},
			{
				"id": 4387,
				"en": "amplify",
				"zh": "放大",
				"phonetic": "/.../",
				"example": "She wants to amplify this task.",
				"exampleZh": "她想放大这个任务。"
			},
			{
				"id": 4388,
				"en": "ancestry",
				"zh": "祖先",
				"phonetic": "/əns/",
				"example": "The ancestry is very useful.",
				"exampleZh": "祖先非常有用。"
			},
			{
				"id": 4389,
				"en": "animate",
				"zh": "有生命的",
				"phonetic": "/.../",
				"example": "The result is quite animate.",
				"exampleZh": "结果是相当有生命的的。"
			},
			{
				"id": 4390,
				"en": "annex",
				"zh": "吞并",
				"phonetic": "/.../",
				"example": "I need to annex before the deadline.",
				"exampleZh": "我需要在截止日期前吞并。"
			},
			{
				"id": 4391,
				"en": "Antarctic",
				"zh": "南极的",
				"phonetic": "/.../",
				"example": "This is very Antarctic.",
				"exampleZh": "这非常南极的。"
			},
			{
				"id": 4392,
				"en": "antecedent",
				"zh": "先行的",
				"phonetic": "/.../",
				"example": "She looks antecedent today.",
				"exampleZh": "她今天看起来很先行的。"
			},
			{
				"id": 4393,
				"en": "anthropology",
				"zh": "人类学",
				"phonetic": "/.../",
				"example": "The anthropology is very useful.",
				"exampleZh": "人类学非常有用。"
			},
			{
				"id": 4394,
				"en": "antibiotic",
				"zh": "抗生素",
				"phonetic": "/.../",
				"example": "Do you understand this antibiotic?",
				"exampleZh": "你理解这个抗生素吗？"
			},
			{
				"id": 4395,
				"en": "apology",
				"zh": "道歉",
				"phonetic": "/.../",
				"example": "apology plays a key role in our life.",
				"exampleZh": "道歉在我们的生活中起着关键作用。"
			},
			{
				"id": 4396,
				"en": "appealing",
				"zh": "吸引人的",
				"phonetic": "/ɪŋ/",
				"example": "This is very appealing.",
				"exampleZh": "这非常吸引人的。"
			},
			{
				"id": 4397,
				"en": "applaud",
				"zh": "鼓掌",
				"phonetic": "/ɔː/",
				"example": "She wants to applaud this task.",
				"exampleZh": "她想鼓掌这个任务。"
			},
			{
				"id": 4398,
				"en": "appreciation",
				"zh": "感激",
				"phonetic": "/ʃən/",
				"example": "The appreciation is very useful.",
				"exampleZh": "感激非常有用。"
			},
			{
				"id": 4399,
				"en": "apprentice",
				"zh": "学徒",
				"phonetic": "/.../",
				"example": "Do you understand this apprentice?",
				"exampleZh": "你理解这个学徒吗？"
			},
			{
				"id": 4400,
				"en": "apt",
				"zh": "恰当的",
				"phonetic": "/.../",
				"example": "He found the task apt.",
				"exampleZh": "他发现这个任务是恰当的的。"
			},
			{
				"id": 4401,
				"en": "aquatic",
				"zh": "水生的",
				"phonetic": "/kw/",
				"example": "This is very aquatic.",
				"exampleZh": "这非常水生的。"
			},
			{
				"id": 4402,
				"en": "arc",
				"zh": "弧形",
				"phonetic": "/.../",
				"example": "I really like the arc.",
				"exampleZh": "我真的很喜欢这个弧形。"
			},
			{
				"id": 4403,
				"en": "archaeology",
				"zh": "考古学",
				"phonetic": "/.../",
				"example": "The archaeology is very useful.",
				"exampleZh": "考古学非常有用。"
			},
			{
				"id": 4404,
				"en": "arctic",
				"zh": "北极的",
				"phonetic": "/.../",
				"example": "The result is quite arctic.",
				"exampleZh": "结果是相当北极的的。"
			},
			{
				"id": 4405,
				"en": "ardent",
				"zh": "热情的",
				"phonetic": "/.../",
				"example": "He found the task ardent.",
				"exampleZh": "他发现这个任务是热情的的。"
			},
			{
				"id": 4406,
				"en": "arena",
				"zh": "竞技场",
				"phonetic": "/.../",
				"example": "This is an important arena.",
				"exampleZh": "这是一个重要的竞技场。"
			},
			{
				"id": 4407,
				"en": "armor",
				"zh": "盔甲",
				"phonetic": "/ər/",
				"example": "I really like the armor.",
				"exampleZh": "我真的很喜欢这个盔甲。"
			},
			{
				"id": 4408,
				"en": "arrogance",
				"zh": "傲慢",
				"phonetic": "/əns/",
				"example": "The arrogance is very useful.",
				"exampleZh": "傲慢非常有用。"
			},
			{
				"id": 4409,
				"en": "artery",
				"zh": "动脉",
				"phonetic": "/.../",
				"example": "Do you understand this artery?",
				"exampleZh": "你理解这个动脉吗？"
			},
			{
				"id": 4410,
				"en": "artifact",
				"zh": "手工艺品",
				"phonetic": "/.../",
				"example": "artifact plays a key role in our life.",
				"exampleZh": "手工艺品在我们的生活中起着关键作用。"
			},
			{
				"id": 4411,
				"en": "ashore",
				"zh": "在岸上",
				"phonetic": "/.../",
				"example": "She ashore agreed with us.",
				"exampleZh": "她在岸上地同意了我们的意见。"
			},
			{
				"id": 4412,
				"en": "aspiration",
				"zh": "渴望",
				"phonetic": "/ʃən/",
				"example": "I really like the aspiration.",
				"exampleZh": "我真的很喜欢这个渴望。"
			},
			{
				"id": 4413,
				"en": "assembly",
				"zh": "装配",
				"phonetic": "/li/",
				"example": "The assembly is very useful.",
				"exampleZh": "装配非常有用。"
			},
			{
				"id": 4414,
				"en": "assurance",
				"zh": "保证",
				"phonetic": "/əns/",
				"example": "Do you understand this assurance?",
				"exampleZh": "你理解这个保证吗？"
			},
			{
				"id": 4415,
				"en": "asthma",
				"zh": "哮喘",
				"phonetic": "/.../",
				"example": "asthma plays a key role in our life.",
				"exampleZh": "哮喘在我们的生活中起着关键作用。"
			},
			{
				"id": 4416,
				"en": "asylum",
				"zh": "庇护",
				"phonetic": "/.../",
				"example": "This is an important asylum.",
				"exampleZh": "这是一个重要的庇护。"
			},
			{
				"id": 4417,
				"en": "atlas",
				"zh": "地图集",
				"phonetic": "/.../",
				"example": "I really like the atlas.",
				"exampleZh": "我真的很喜欢这个地图集。"
			},
			{
				"id": 4418,
				"en": "atmospheric",
				"zh": "大气的",
				"phonetic": "/.../",
				"example": "It's a atmospheric idea.",
				"exampleZh": "这是一个大气的的主意。"
			},
			{
				"id": 4419,
				"en": "atomic",
				"zh": "原子的",
				"phonetic": "/.../",
				"example": "The result is quite atomic.",
				"exampleZh": "结果是相当原子的的。"
			},
			{
				"id": 4420,
				"en": "atrocity",
				"zh": "暴行",
				"phonetic": "/.../",
				"example": "atrocity plays a key role in our life.",
				"exampleZh": "暴行在我们的生活中起着关键作用。"
			},
			{
				"id": 4421,
				"en": "attainment",
				"zh": "成就",
				"phonetic": "/mənt/",
				"example": "This is an important attainment.",
				"exampleZh": "这是一个重要的成就。"
			},
			{
				"id": 4422,
				"en": "attraction",
				"zh": "吸引力",
				"phonetic": "/ʃən/",
				"example": "I really like the attraction.",
				"exampleZh": "我真的很喜欢这个吸引力。"
			},
			{
				"id": 4423,
				"en": "audio",
				"zh": "音频",
				"phonetic": "/ɔː/",
				"example": "The audio is very useful.",
				"exampleZh": "音频非常有用。"
			},
			{
				"id": 4424,
				"en": "augment",
				"zh": "增加",
				"phonetic": "/mənt/",
				"example": "They decided to augment the plan.",
				"exampleZh": "他们决定增加这个计划。"
			},
			{
				"id": 4425,
				"en": "autobiography",
				"zh": "自传",
				"phonetic": "/ɔː/",
				"example": "autobiography plays a key role in our life.",
				"exampleZh": "自传在我们的生活中起着关键作用。"
			},
			{
				"id": 4426,
				"en": "automate",
				"zh": "自动化",
				"phonetic": "/ɔː/",
				"example": "We should automate more carefully.",
				"exampleZh": "我们应该更仔细地自动化。"
			},
			{
				"id": 4427,
				"en": "avalanche",
				"zh": "雪崩",
				"phonetic": "/.../",
				"example": "I really like the avalanche.",
				"exampleZh": "我真的很喜欢这个雪崩。"
			},
			{
				"id": 4428,
				"en": "avenge",
				"zh": "报仇",
				"phonetic": "/.../",
				"example": "Let's avenge together.",
				"exampleZh": "让我们一起报仇吧。"
			},
			{
				"id": 4429,
				"en": "aviation",
				"zh": "航空",
				"phonetic": "/ʃən/",
				"example": "Do you understand this aviation?",
				"exampleZh": "你理解这个航空吗？"
			},
			{
				"id": 4430,
				"en": "avoidance",
				"zh": "回避",
				"phonetic": "/əns/",
				"example": "avoidance plays a key role in our life.",
				"exampleZh": "回避在我们的生活中起着关键作用。"
			},
			{
				"id": 4431,
				"en": "awareness",
				"zh": "意识",
				"phonetic": "/nəs/",
				"example": "This is an important awareness.",
				"exampleZh": "这是一个重要的意识。"
			},
			{
				"id": 4432,
				"en": "awesome",
				"zh": "令人敬畏的",
				"phonetic": "/ɔː/",
				"example": "She looks awesome today.",
				"exampleZh": "她今天看起来很令人敬畏的。"
			},
			{
				"id": 4433,
				"en": "backbone",
				"zh": "骨干",
				"phonetic": "/.../",
				"example": "The backbone is very useful.",
				"exampleZh": "骨干非常有用。"
			},
			{
				"id": 4434,
				"en": "badge",
				"zh": "徽章",
				"phonetic": "/.../",
				"example": "Do you understand this badge?",
				"exampleZh": "你理解这个徽章吗？"
			},
			{
				"id": 4435,
				"en": "bake",
				"zh": "烘焙",
				"phonetic": "/.../",
				"example": "I need to bake before the deadline.",
				"exampleZh": "我需要在截止日期前烘焙。"
			},
			{
				"id": 4436,
				"en": "balcony",
				"zh": "阳台",
				"phonetic": "/.../",
				"example": "This is an important balcony.",
				"exampleZh": "这是一个重要的阳台。"
			},
			{
				"id": 4437,
				"en": "bandage",
				"zh": "绷带",
				"phonetic": "/.../",
				"example": "I really like the bandage.",
				"exampleZh": "我真的很喜欢这个绷带。"
			},
			{
				"id": 4438,
				"en": "bankruptcy",
				"zh": "破产",
				"phonetic": "/.../",
				"example": "The bankruptcy is very useful.",
				"exampleZh": "破产非常有用。"
			},
			{
				"id": 4439,
				"en": "banquet",
				"zh": "宴会",
				"phonetic": "/kw/",
				"example": "Do you understand this banquet?",
				"exampleZh": "你理解这个宴会吗？"
			},
			{
				"id": 4440,
				"en": "baptize",
				"zh": "洗礼",
				"phonetic": "/.../",
				"example": "I need to baptize before the deadline.",
				"exampleZh": "我需要在截止日期前洗礼。"
			},
			{
				"id": 4441,
				"en": "barbecue",
				"zh": "烧烤",
				"phonetic": "/.../",
				"example": "This is an important barbecue.",
				"exampleZh": "这是一个重要的烧烤。"
			},
			{
				"id": 4442,
				"en": "bark",
				"zh": "树皮",
				"phonetic": "/.../",
				"example": "I really like the bark.",
				"exampleZh": "我真的很喜欢这个树皮。"
			},
			{
				"id": 4443,
				"en": "barley",
				"zh": "大麦",
				"phonetic": "/.../",
				"example": "The barley is very useful.",
				"exampleZh": "大麦非常有用。"
			},
			{
				"id": 4444,
				"en": "barometer",
				"zh": "气压计",
				"phonetic": "/ər/",
				"example": "Do you understand this barometer?",
				"exampleZh": "你理解这个气压计吗？"
			},
			{
				"id": 4445,
				"en": "barracks",
				"zh": "兵营",
				"phonetic": "/.../",
				"example": "barracks plays a key role in our life.",
				"exampleZh": "兵营在我们的生活中起着关键作用。"
			},
			{
				"id": 4446,
				"en": "barren",
				"zh": "贫瘠的",
				"phonetic": "/.../",
				"example": "This is very barren.",
				"exampleZh": "这非常贫瘠的。"
			},
			{
				"id": 4447,
				"en": "basement",
				"zh": "地下室",
				"phonetic": "/mənt/",
				"example": "I really like the basement.",
				"exampleZh": "我真的很喜欢这个地下室。"
			},
			{
				"id": 4448,
				"en": "batter",
				"zh": "击球手",
				"phonetic": "/ər/",
				"example": "The batter is very useful.",
				"exampleZh": "击球手非常有用。"
			},
			{
				"id": 4449,
				"en": "bead",
				"zh": "珠子",
				"phonetic": "/iː/",
				"example": "Do you understand this bead?",
				"exampleZh": "你理解这个珠子吗？"
			},
			{
				"id": 4450,
				"en": "bearing",
				"zh": "轴承",
				"phonetic": "/ɪŋ/",
				"example": "bearing plays a key role in our life.",
				"exampleZh": "轴承在我们的生活中起着关键作用。"
			},
			{
				"id": 4451,
				"en": "beetle",
				"zh": "甲虫",
				"phonetic": "/iː/",
				"example": "This is an important beetle.",
				"exampleZh": "这是一个重要的甲虫。"
			},
			{
				"id": 4452,
				"en": "beforehand",
				"zh": "事先",
				"phonetic": "/.../",
				"example": "He spoke beforehand to the audience.",
				"exampleZh": "他事先地对观众说话。"
			},
			{
				"id": 4453,
				"en": "behavioral",
				"zh": "行为的",
				"phonetic": "/.../",
				"example": "It's a behavioral idea.",
				"exampleZh": "这是一个行为的的主意。"
			},
			{
				"id": 4454,
				"en": "beloved",
				"zh": "心爱的",
				"phonetic": "/d/",
				"example": "The result is quite beloved.",
				"exampleZh": "结果是相当心爱的的。"
			},
			{
				"id": 4455,
				"en": "beneficiary",
				"zh": "受益人",
				"phonetic": "/.../",
				"example": "beneficiary plays a key role in our life.",
				"exampleZh": "受益人在我们的生活中起着关键作用。"
			},
			{
				"id": 4456,
				"en": "bent",
				"zh": "弯曲的",
				"phonetic": "/.../",
				"example": "This is very bent.",
				"exampleZh": "这非常弯曲的。"
			},
			{
				"id": 4457,
				"en": "besiege",
				"zh": "围攻",
				"phonetic": "/.../",
				"example": "She wants to besiege this task.",
				"exampleZh": "她想围攻这个任务。"
			},
			{
				"id": 4458,
				"en": "betrayal",
				"zh": "背叛",
				"phonetic": "/eɪ/",
				"example": "The betrayal is very useful.",
				"exampleZh": "背叛非常有用。"
			},
			{
				"id": 4459,
				"en": "beverage",
				"zh": "饮料",
				"phonetic": "/.../",
				"example": "Do you understand this beverage?",
				"exampleZh": "你理解这个饮料吗？"
			},
			{
				"id": 4460,
				"en": "bewilder",
				"zh": "使困惑",
				"phonetic": "/ər/",
				"example": "I need to bewilder before the deadline.",
				"exampleZh": "我需要在截止日期前使困惑。"
			},
			{
				"id": 4461,
				"en": "bibliography",
				"zh": "参考书目",
				"phonetic": "/.../",
				"example": "This is an important bibliography.",
				"exampleZh": "这是一个重要的参考书目。"
			},
			{
				"id": 4462,
				"en": "bilateral",
				"zh": "双边的",
				"phonetic": "/.../",
				"example": "She looks bilateral today.",
				"exampleZh": "她今天看起来很双边的。"
			},
			{
				"id": 4463,
				"en": "billionaire",
				"zh": "亿万富翁",
				"phonetic": "/eɪ/",
				"example": "The billionaire is very useful.",
				"exampleZh": "亿万富翁非常有用。"
			},
			{
				"id": 4464,
				"en": "biochemistry",
				"zh": "生物化学",
				"phonetic": "/.../",
				"example": "Do you understand this biochemistry?",
				"exampleZh": "你理解这个生物化学吗？"
			},
			{
				"id": 4465,
				"en": "blackmail",
				"zh": "勒索",
				"phonetic": "/eɪ/",
				"example": "I need to blackmail before the deadline.",
				"exampleZh": "我需要在截止日期前勒索。"
			},
			{
				"id": 4466,
				"en": "bleach",
				"zh": "漂白",
				"phonetic": "/tʃ/",
				"example": "We should bleach more carefully.",
				"exampleZh": "我们应该更仔细地漂白。"
			},
			{
				"id": 4467,
				"en": "blessing",
				"zh": "祝福",
				"phonetic": "/ɪŋ/",
				"example": "I really like the blessing.",
				"exampleZh": "我真的很喜欢这个祝福。"
			},
			{
				"id": 4468,
				"en": "blink",
				"zh": "眨眼",
				"phonetic": "/.../",
				"example": "Let's blink together.",
				"exampleZh": "让我们一起眨眼吧。"
			},
			{
				"id": 4469,
				"en": "blockade",
				"zh": "封锁",
				"phonetic": "/.../",
				"example": "Do you understand this blockade?",
				"exampleZh": "你理解这个封锁吗？"
			},
			{
				"id": 4470,
				"en": "blonde",
				"zh": "金发的",
				"phonetic": "/.../",
				"example": "He found the task blonde.",
				"exampleZh": "他发现这个任务是金发的的。"
			},
			{
				"id": 4471,
				"en": "blush",
				"zh": "脸红",
				"phonetic": "/ʃ/",
				"example": "We should blush more carefully.",
				"exampleZh": "我们应该更仔细地脸红。"
			},
			{
				"id": 4472,
				"en": "bold",
				"zh": "大胆的",
				"phonetic": "/.../",
				"example": "She looks bold today.",
				"exampleZh": "她今天看起来很大胆的。"
			},
			{
				"id": 4473,
				"en": "bomber",
				"zh": "轰炸机",
				"phonetic": "/ər/",
				"example": "The bomber is very useful.",
				"exampleZh": "轰炸机非常有用。"
			},
			{
				"id": 4474,
				"en": "booklet",
				"zh": "小册子",
				"phonetic": "/uː/",
				"example": "Do you understand this booklet?",
				"exampleZh": "你理解这个小册子吗？"
			},
			{
				"id": 4475,
				"en": "booth",
				"zh": "摊位",
				"phonetic": "/θ/",
				"example": "booth plays a key role in our life.",
				"exampleZh": "摊位在我们的生活中起着关键作用。"
			},
			{
				"id": 4476,
				"en": "bouquet",
				"zh": "花束",
				"phonetic": "/kw/",
				"example": "This is an important bouquet.",
				"exampleZh": "这是一个重要的花束。"
			},
			{
				"id": 4477,
				"en": "boutique",
				"zh": "精品店",
				"phonetic": "/kw/",
				"example": "I really like the boutique.",
				"exampleZh": "我真的很喜欢这个精品店。"
			},
			{
				"id": 4478,
				"en": "bowel",
				"zh": "肠",
				"phonetic": "/aʊ/",
				"example": "The bowel is very useful.",
				"exampleZh": "肠非常有用。"
			},
			{
				"id": 4479,
				"en": "brainstorm",
				"zh": "头脑风暴",
				"phonetic": "/eɪ/",
				"example": "Do you understand this brainstorm?",
				"exampleZh": "你理解这个头脑风暴吗？"
			},
			{
				"id": 4480,
				"en": "briefing",
				"zh": "简报",
				"phonetic": "/ɪŋ/",
				"example": "briefing plays a key role in our life.",
				"exampleZh": "简报在我们的生活中起着关键作用。"
			},
			{
				"id": 4481,
				"en": "brink",
				"zh": "边缘",
				"phonetic": "/.../",
				"example": "This is an important brink.",
				"exampleZh": "这是一个重要的边缘。"
			},
			{
				"id": 4482,
				"en": "brisk",
				"zh": "轻快的",
				"phonetic": "/.../",
				"example": "She looks brisk today.",
				"exampleZh": "她今天看起来很轻快的。"
			},
			{
				"id": 4483,
				"en": "broadband",
				"zh": "宽带",
				"phonetic": "/oʊ/",
				"example": "The broadband is very useful.",
				"exampleZh": "宽带非常有用。"
			},
			{
				"id": 4484,
				"en": "brotherhood",
				"zh": "兄弟情谊",
				"phonetic": "/uː/",
				"example": "Do you understand this brotherhood?",
				"exampleZh": "你理解这个兄弟情谊吗？"
			},
			{
				"id": 4485,
				"en": "buckle",
				"zh": "扣环",
				"phonetic": "/.../",
				"example": "buckle plays a key role in our life.",
				"exampleZh": "扣环在我们的生活中起着关键作用。"
			},
			{
				"id": 4486,
				"en": "Buddhism",
				"zh": "佛教",
				"phonetic": "/.../",
				"example": "This is an important Buddhism.",
				"exampleZh": "这是一个重要的佛教。"
			},
			{
				"id": 4487,
				"en": "budgetary",
				"zh": "预算的",
				"phonetic": "/.../",
				"example": "She looks budgetary today.",
				"exampleZh": "她今天看起来很预算的。"
			},
			{
				"id": 4488,
				"en": "buffalo",
				"zh": "水牛",
				"phonetic": "/.../",
				"example": "The buffalo is very useful.",
				"exampleZh": "水牛非常有用。"
			},
			{
				"id": 4489,
				"en": "buffer",
				"zh": "缓冲区",
				"phonetic": "/ər/",
				"example": "Do you understand this buffer?",
				"exampleZh": "你理解这个缓冲区吗？"
			},
			{
				"id": 4490,
				"en": "bug",
				"zh": "虫子",
				"phonetic": "/.../",
				"example": "bug plays a key role in our life.",
				"exampleZh": "虫子在我们的生活中起着关键作用。"
			},
			{
				"id": 4491,
				"en": "bulldozer",
				"zh": "推土机",
				"phonetic": "/ər/",
				"example": "This is an important bulldozer.",
				"exampleZh": "这是一个重要的推土机。"
			},
			{
				"id": 4492,
				"en": "bully",
				"zh": "欺凌",
				"phonetic": "/li/",
				"example": "She wants to bully this task.",
				"exampleZh": "她想欺凌这个任务。"
			},
			{
				"id": 4493,
				"en": "buoy",
				"zh": "浮标",
				"phonetic": "/ɔɪ/",
				"example": "The buoy is very useful.",
				"exampleZh": "浮标非常有用。"
			},
			{
				"id": 4494,
				"en": "bureaucratic",
				"zh": "官僚的",
				"phonetic": "/iː/",
				"example": "The result is quite bureaucratic.",
				"exampleZh": "结果是相当官僚的的。"
			},
			{
				"id": 4495,
				"en": "burglar",
				"zh": "窃贼",
				"phonetic": "/ɑːr/",
				"example": "burglar plays a key role in our life.",
				"exampleZh": "窃贼在我们的生活中起着关键作用。"
			},
			{
				"id": 4496,
				"en": "bust",
				"zh": "半身像",
				"phonetic": "/.../",
				"example": "This is an important bust.",
				"exampleZh": "这是一个重要的半身像。"
			},
			{
				"id": 4497,
				"en": "butler",
				"zh": "管家",
				"phonetic": "/ər/",
				"example": "I really like the butler.",
				"exampleZh": "我真的很喜欢这个管家。"
			},
			{
				"id": 4498,
				"en": "bypass",
				"zh": "绕过",
				"phonetic": "/.../",
				"example": "Let's bypass together.",
				"exampleZh": "让我们一起绕过吧。"
			},
			{
				"id": 4499,
				"en": "cab",
				"zh": "出租车",
				"phonetic": "/.../",
				"example": "Do you understand this cab?",
				"exampleZh": "你理解这个出租车吗？"
			},
			{
				"id": 4500,
				"en": "cabin",
				"zh": "小屋",
				"phonetic": "/.../",
				"example": "cabin plays a key role in our life.",
				"exampleZh": "小屋在我们的生活中起着关键作用。"
			},
			{
				"id": 4501,
				"en": "cafeteria",
				"zh": "自助餐厅",
				"phonetic": "/.../",
				"example": "This is an important cafeteria.",
				"exampleZh": "这是一个重要的自助餐厅。"
			},
			{
				"id": 4502,
				"en": "calcium",
				"zh": "钙",
				"phonetic": "/.../",
				"example": "I really like the calcium.",
				"exampleZh": "我真的很喜欢这个钙。"
			},
			{
				"id": 4503,
				"en": "calculated",
				"zh": "计算的",
				"phonetic": "/d/",
				"example": "It's a calculated idea.",
				"exampleZh": "这是一个计算的的主意。"
			},
			{
				"id": 4504,
				"en": "caliber",
				"zh": "口径",
				"phonetic": "/ər/",
				"example": "Do you understand this caliber?",
				"exampleZh": "你理解这个口径吗？"
			},
			{
				"id": 4505,
				"en": "camouflage",
				"zh": "伪装",
				"phonetic": "/aʊ/",
				"example": "camouflage plays a key role in our life.",
				"exampleZh": "伪装在我们的生活中起着关键作用。"
			},
			{
				"id": 4506,
				"en": "canal",
				"zh": "运河",
				"phonetic": "/.../",
				"example": "This is an important canal.",
				"exampleZh": "这是一个重要的运河。"
			},
			{
				"id": 4507,
				"en": "cane",
				"zh": "手杖",
				"phonetic": "/.../",
				"example": "I really like the cane.",
				"exampleZh": "我真的很喜欢这个手杖。"
			},
			{
				"id": 4508,
				"en": "cannon",
				"zh": "大炮",
				"phonetic": "/.../",
				"example": "The cannon is very useful.",
				"exampleZh": "大炮非常有用。"
			},
			{
				"id": 4509,
				"en": "canvas",
				"zh": "画布",
				"phonetic": "/.../",
				"example": "Do you understand this canvas?",
				"exampleZh": "你理解这个画布吗？"
			},
			{
				"id": 4510,
				"en": "canyon",
				"zh": "峡谷",
				"phonetic": "/.../",
				"example": "canyon plays a key role in our life.",
				"exampleZh": "峡谷在我们的生活中起着关键作用。"
			},
			{
				"id": 4511,
				"en": "cape",
				"zh": "披肩",
				"phonetic": "/.../",
				"example": "This is an important cape.",
				"exampleZh": "这是一个重要的披肩。"
			},
			{
				"id": 4512,
				"en": "capitalism",
				"zh": "资本主义",
				"phonetic": "/.../",
				"example": "I really like the capitalism.",
				"exampleZh": "我真的很喜欢这个资本主义。"
			},
			{
				"id": 4513,
				"en": "caption",
				"zh": "标题",
				"phonetic": "/ʃən/",
				"example": "The caption is very useful.",
				"exampleZh": "标题非常有用。"
			},
			{
				"id": 4514,
				"en": "captive",
				"zh": "俘虏",
				"phonetic": "/.../",
				"example": "Do you understand this captive?",
				"exampleZh": "你理解这个俘虏吗？"
			},
			{
				"id": 4515,
				"en": "caravan",
				"zh": "大篷车",
				"phonetic": "/.../",
				"example": "caravan plays a key role in our life.",
				"exampleZh": "大篷车在我们的生活中起着关键作用。"
			},
			{
				"id": 4516,
				"en": "carbohydrate",
				"zh": "碳水化合物",
				"phonetic": "/.../",
				"example": "This is an important carbohydrate.",
				"exampleZh": "这是一个重要的碳水化合物。"
			},
			{
				"id": 4517,
				"en": "caress",
				"zh": "爱抚",
				"phonetic": "/.../",
				"example": "She wants to caress this task.",
				"exampleZh": "她想爱抚这个任务。"
			},
			{
				"id": 4518,
				"en": "carnival",
				"zh": "狂欢节",
				"phonetic": "/.../",
				"example": "The carnival is very useful.",
				"exampleZh": "狂欢节非常有用。"
			},
			{
				"id": 4519,
				"en": "carpenter",
				"zh": "木匠",
				"phonetic": "/ər/",
				"example": "Do you understand this carpenter?",
				"exampleZh": "你理解这个木匠吗？"
			},
			{
				"id": 4520,
				"en": "carton",
				"zh": "纸箱",
				"phonetic": "/.../",
				"example": "carton plays a key role in our life.",
				"exampleZh": "纸箱在我们的生活中起着关键作用。"
			},
			{
				"id": 4521,
				"en": "carve",
				"zh": "雕刻",
				"phonetic": "/.../",
				"example": "We should carve more carefully.",
				"exampleZh": "我们应该更仔细地雕刻。"
			},
			{
				"id": 4522,
				"en": "casino",
				"zh": "赌场",
				"phonetic": "/.../",
				"example": "I really like the casino.",
				"exampleZh": "我真的很喜欢这个赌场。"
			},
			{
				"id": 4523,
				"en": "cassette",
				"zh": "盒式磁带",
				"phonetic": "/.../",
				"example": "The cassette is very useful.",
				"exampleZh": "盒式磁带非常有用。"
			},
			{
				"id": 4524,
				"en": "catastrophe",
				"zh": "灾难",
				"phonetic": "/.../",
				"example": "Do you understand this catastrophe?",
				"exampleZh": "你理解这个灾难吗？"
			},
			{
				"id": 4525,
				"en": "catchment",
				"zh": "集水区",
				"phonetic": "/mənt/",
				"example": "catchment plays a key role in our life.",
				"exampleZh": "集水区在我们的生活中起着关键作用。"
			},
			{
				"id": 4526,
				"en": "categorize",
				"zh": "分类",
				"phonetic": "/.../",
				"example": "We should categorize more carefully.",
				"exampleZh": "我们应该更仔细地分类。"
			},
			{
				"id": 4527,
				"en": "cathedral",
				"zh": "大教堂",
				"phonetic": "/.../",
				"example": "I really like the cathedral.",
				"exampleZh": "我真的很喜欢这个大教堂。"
			},
			{
				"id": 4528,
				"en": "catholic",
				"zh": "天主教的",
				"phonetic": "/.../",
				"example": "It's a catholic idea.",
				"exampleZh": "这是一个天主教的的主意。"
			},
			{
				"id": 4529,
				"en": "cavalry",
				"zh": "骑兵",
				"phonetic": "/.../",
				"example": "Do you understand this cavalry?",
				"exampleZh": "你理解这个骑兵吗？"
			},
			{
				"id": 4530,
				"en": "cave",
				"zh": "洞穴",
				"phonetic": "/.../",
				"example": "cave plays a key role in our life.",
				"exampleZh": "洞穴在我们的生活中起着关键作用。"
			},
			{
				"id": 4531,
				"en": "cavity",
				"zh": "腔",
				"phonetic": "/.../",
				"example": "This is an important cavity.",
				"exampleZh": "这是一个重要的腔。"
			},
			{
				"id": 4532,
				"en": "ceasefire",
				"zh": "停火",
				"phonetic": "/iː/",
				"example": "I really like the ceasefire.",
				"exampleZh": "我真的很喜欢这个停火。"
			},
			{
				"id": 4533,
				"en": "cement",
				"zh": "水泥",
				"phonetic": "/mənt/",
				"example": "The cement is very useful.",
				"exampleZh": "水泥非常有用。"
			},
			{
				"id": 4534,
				"en": "census",
				"zh": "人口普查",
				"phonetic": "/.../",
				"example": "Do you understand this census?",
				"exampleZh": "你理解这个人口普查吗？"
			},
			{
				"id": 4535,
				"en": "centennial",
				"zh": "百年纪念",
				"phonetic": "/.../",
				"example": "centennial plays a key role in our life.",
				"exampleZh": "百年纪念在我们的生活中起着关键作用。"
			},
			{
				"id": 4536,
				"en": "cereal",
				"zh": "麦片",
				"phonetic": "/iː/",
				"example": "This is an important cereal.",
				"exampleZh": "这是一个重要的麦片。"
			},
			{
				"id": 4537,
				"en": "certify",
				"zh": "认证",
				"phonetic": "/.../",
				"example": "She wants to certify this task.",
				"exampleZh": "她想认证这个任务。"
			},
			{
				"id": 4538,
				"en": "champagne",
				"zh": "香槟",
				"phonetic": "/.../",
				"example": "The champagne is very useful.",
				"exampleZh": "香槟非常有用。"
			},
			{
				"id": 4539,
				"en": "chant",
				"zh": "唱",
				"phonetic": "/.../",
				"example": "They decided to chant the plan.",
				"exampleZh": "他们决定唱这个计划。"
			},
			{
				"id": 4540,
				"en": "chapel",
				"zh": "小教堂",
				"phonetic": "/.../",
				"example": "chapel plays a key role in our life.",
				"exampleZh": "小教堂在我们的生活中起着关键作用。"
			},
			{
				"id": 4541,
				"en": "charcoal",
				"zh": "木炭",
				"phonetic": "/oʊ/",
				"example": "This is an important charcoal.",
				"exampleZh": "这是一个重要的木炭。"
			},
			{
				"id": 4542,
				"en": "chasm",
				"zh": "鸿沟",
				"phonetic": "/.../",
				"example": "I really like the chasm.",
				"exampleZh": "我真的很喜欢这个鸿沟。"
			},
			{
				"id": 4543,
				"en": "chatter",
				"zh": "喋喋不休",
				"phonetic": "/ər/",
				"example": "Let's chatter together.",
				"exampleZh": "让我们一起喋喋不休吧。"
			},
			{
				"id": 4544,
				"en": "chauffeur",
				"zh": "司机",
				"phonetic": "/ɔː/",
				"example": "Do you understand this chauffeur?",
				"exampleZh": "你理解这个司机吗？"
			},
			{
				"id": 4545,
				"en": "checkpoint",
				"zh": "检查站",
				"phonetic": "/ɔɪ/",
				"example": "checkpoint plays a key role in our life.",
				"exampleZh": "检查站在我们的生活中起着关键作用。"
			},
			{
				"id": 4546,
				"en": "chef",
				"zh": "厨师",
				"phonetic": "/.../",
				"example": "This is an important chef.",
				"exampleZh": "这是一个重要的厨师。"
			},
			{
				"id": 4547,
				"en": "cherry",
				"zh": "樱桃",
				"phonetic": "/.../",
				"example": "I really like the cherry.",
				"exampleZh": "我真的很喜欢这个樱桃。"
			},
			{
				"id": 4548,
				"en": "chestnut",
				"zh": "栗子",
				"phonetic": "/.../",
				"example": "The chestnut is very useful.",
				"exampleZh": "栗子非常有用。"
			},
			{
				"id": 4549,
				"en": "chill",
				"zh": "寒意",
				"phonetic": "/.../",
				"example": "Do you understand this chill?",
				"exampleZh": "你理解这个寒意吗？"
			},
			{
				"id": 4550,
				"en": "chin",
				"zh": "下巴",
				"phonetic": "/.../",
				"example": "chin plays a key role in our life.",
				"exampleZh": "下巴在我们的生活中起着关键作用。"
			},
			{
				"id": 4551,
				"en": "chlorine",
				"zh": "氯",
				"phonetic": "/.../",
				"example": "This is an important chlorine.",
				"exampleZh": "这是一个重要的氯。"
			},
			{
				"id": 4552,
				"en": "choir",
				"zh": "唱诗班",
				"phonetic": "/ɔɪ/",
				"example": "I really like the choir.",
				"exampleZh": "我真的很喜欢这个唱诗班。"
			},
			{
				"id": 4553,
				"en": "choke",
				"zh": "窒息",
				"phonetic": "/.../",
				"example": "Let's choke together.",
				"exampleZh": "让我们一起窒息吧。"
			},
			{
				"id": 4554,
				"en": "cholesterol",
				"zh": "胆固醇",
				"phonetic": "/.../",
				"example": "Do you understand this cholesterol?",
				"exampleZh": "你理解这个胆固醇吗？"
			},
			{
				"id": 4555,
				"en": "chop",
				"zh": "砍",
				"phonetic": "/.../",
				"example": "I need to chop before the deadline.",
				"exampleZh": "我需要在截止日期前砍。"
			},
			{
				"id": 4556,
				"en": "chord",
				"zh": "和弦",
				"phonetic": "/.../",
				"example": "This is an important chord.",
				"exampleZh": "这是一个重要的和弦。"
			},
			{
				"id": 4557,
				"en": "chore",
				"zh": "家务",
				"phonetic": "/.../",
				"example": "I really like the chore.",
				"exampleZh": "我真的很喜欢这个家务。"
			},
			{
				"id": 4558,
				"en": "Christ",
				"zh": "基督",
				"phonetic": "/.../",
				"example": "The Christ is very useful.",
				"exampleZh": "基督非常有用。"
			},
			{
				"id": 4559,
				"en": "chronicle",
				"zh": "编年史",
				"phonetic": "/.../",
				"example": "Do you understand this chronicle?",
				"exampleZh": "你理解这个编年史吗？"
			},
			{
				"id": 4560,
				"en": "chunk",
				"zh": "大块",
				"phonetic": "/.../",
				"example": "chunk plays a key role in our life.",
				"exampleZh": "大块在我们的生活中起着关键作用。"
			},
			{
				"id": 4561,
				"en": "circumference",
				"zh": "周长",
				"phonetic": "/əns/",
				"example": "This is an important circumference.",
				"exampleZh": "这是一个重要的周长。"
			},
			{
				"id": 4562,
				"en": "civility",
				"zh": "礼貌",
				"phonetic": "/.../",
				"example": "I really like the civility.",
				"exampleZh": "我真的很喜欢这个礼貌。"
			},
			{
				"id": 4563,
				"en": "clamp",
				"zh": "夹钳",
				"phonetic": "/.../",
				"example": "The clamp is very useful.",
				"exampleZh": "夹钳非常有用。"
			},
			{
				"id": 4564,
				"en": "clan",
				"zh": "氏族",
				"phonetic": "/.../",
				"example": "Do you understand this clan?",
				"exampleZh": "你理解这个氏族吗？"
			},
			{
				"id": 4565,
				"en": "clarification",
				"zh": "澄清",
				"phonetic": "/ʃən/",
				"example": "clarification plays a key role in our life.",
				"exampleZh": "澄清在我们的生活中起着关键作用。"
			},
			{
				"id": 4566,
				"en": "clarity",
				"zh": "清晰",
				"phonetic": "/.../",
				"example": "This is an important clarity.",
				"exampleZh": "这是一个重要的清晰。"
			},
			{
				"id": 4567,
				"en": "clasp",
				"zh": "扣子",
				"phonetic": "/.../",
				"example": "I really like the clasp.",
				"exampleZh": "我真的很喜欢这个扣子。"
			},
			{
				"id": 4568,
				"en": "classification",
				"zh": "分类",
				"phonetic": "/ʃən/",
				"example": "The classification is very useful.",
				"exampleZh": "分类非常有用。"
			},
			{
				"id": 4569,
				"en": "claw",
				"zh": "爪子",
				"phonetic": "/ɔː/",
				"example": "Do you understand this claw?",
				"exampleZh": "你理解这个爪子吗？"
			},
			{
				"id": 4570,
				"en": "clay",
				"zh": "黏土",
				"phonetic": "/eɪ/",
				"example": "clay plays a key role in our life.",
				"exampleZh": "黏土在我们的生活中起着关键作用。"
			},
			{
				"id": 4571,
				"en": "cleanse",
				"zh": "清洁",
				"phonetic": "/iː/",
				"example": "We should cleanse more carefully.",
				"exampleZh": "我们应该更仔细地清洁。"
			},
			{
				"id": 4572,
				"en": "clearance",
				"zh": "清除",
				"phonetic": "/əns/",
				"example": "I really like the clearance.",
				"exampleZh": "我真的很喜欢这个清除。"
			},
			{
				"id": 4573,
				"en": "clench",
				"zh": "紧握",
				"phonetic": "/tʃ/",
				"example": "Let's clench together.",
				"exampleZh": "让我们一起紧握吧。"
			},
			{
				"id": 4574,
				"en": "click",
				"zh": "点击",
				"phonetic": "/k/",
				"example": "They decided to click the plan.",
				"exampleZh": "他们决定点击这个计划。"
			},
			{
				"id": 4575,
				"en": "cliff",
				"zh": "悬崖",
				"phonetic": "/.../",
				"example": "cliff plays a key role in our life.",
				"exampleZh": "悬崖在我们的生活中起着关键作用。"
			},
			{
				"id": 4576,
				"en": "cloak",
				"zh": "斗篷",
				"phonetic": "/oʊ/",
				"example": "This is an important cloak.",
				"exampleZh": "这是一个重要的斗篷。"
			},
			{
				"id": 4577,
				"en": "clockwise",
				"zh": "顺时针的",
				"phonetic": "/.../",
				"example": "She looks clockwise today.",
				"exampleZh": "她今天看起来很顺时针的。"
			},
			{
				"id": 4578,
				"en": "closet",
				"zh": "壁橱",
				"phonetic": "/.../",
				"example": "The closet is very useful.",
				"exampleZh": "壁橱非常有用。"
			},
			{
				"id": 4579,
				"en": "closure",
				"zh": "关闭",
				"phonetic": "/ʒər/",
				"example": "Do you understand this closure?",
				"exampleZh": "你理解这个关闭吗？"
			},
			{
				"id": 4580,
				"en": "clown",
				"zh": "小丑",
				"phonetic": "/aʊ/",
				"example": "clown plays a key role in our life.",
				"exampleZh": "小丑在我们的生活中起着关键作用。"
			},
			{
				"id": 4581,
				"en": "clutch",
				"zh": "离合器",
				"phonetic": "/tʃ/",
				"example": "This is an important clutch.",
				"exampleZh": "这是一个重要的离合器。"
			},
			{
				"id": 4582,
				"en": "coarse",
				"zh": "粗糙的",
				"phonetic": "/oʊ/",
				"example": "She looks coarse today.",
				"exampleZh": "她今天看起来很粗糙的。"
			},
			{
				"id": 4583,
				"en": "coastal",
				"zh": "沿海的",
				"phonetic": "/oʊ/",
				"example": "It's a coastal idea.",
				"exampleZh": "这是一个沿海的的主意。"
			},
			{
				"id": 4584,
				"en": "coax",
				"zh": "哄",
				"phonetic": "/oʊ/",
				"example": "They decided to coax the plan.",
				"exampleZh": "他们决定哄这个计划。"
			},
			{
				"id": 4585,
				"en": "cocaine",
				"zh": "可卡因",
				"phonetic": "/eɪ/",
				"example": "cocaine plays a key role in our life.",
				"exampleZh": "可卡因在我们的生活中起着关键作用。"
			},
			{
				"id": 4586,
				"en": "cocktail",
				"zh": "鸡尾酒",
				"phonetic": "/eɪ/",
				"example": "This is an important cocktail.",
				"exampleZh": "这是一个重要的鸡尾酒。"
			},
			{
				"id": 4587,
				"en": "coconut",
				"zh": "椰子",
				"phonetic": "/.../",
				"example": "I really like the coconut.",
				"exampleZh": "我真的很喜欢这个椰子。"
			},
			{
				"id": 4588,
				"en": "coffin",
				"zh": "棺材",
				"phonetic": "/.../",
				"example": "The coffin is very useful.",
				"exampleZh": "棺材非常有用。"
			},
			{
				"id": 4589,
				"en": "coherent",
				"zh": "连贯的",
				"phonetic": "/.../",
				"example": "The result is quite coherent.",
				"exampleZh": "结果是相当连贯的的。"
			},
			{
				"id": 4590,
				"en": "cohesion",
				"zh": "凝聚力",
				"phonetic": "/ʒən/",
				"example": "cohesion plays a key role in our life.",
				"exampleZh": "凝聚力在我们的生活中起着关键作用。"
			},
			{
				"id": 4591,
				"en": "coke",
				"zh": "可乐",
				"phonetic": "/.../",
				"example": "This is an important coke.",
				"exampleZh": "这是一个重要的可乐。"
			},
			{
				"id": 4592,
				"en": "collaboration",
				"zh": "合作",
				"phonetic": "/ʃən/",
				"example": "I really like the collaboration.",
				"exampleZh": "我真的很喜欢这个合作。"
			},
			{
				"id": 4593,
				"en": "collateral",
				"zh": "抵押品",
				"phonetic": "/.../",
				"example": "The collateral is very useful.",
				"exampleZh": "抵押品非常有用。"
			},
			{
				"id": 4594,
				"en": "collide",
				"zh": "碰撞",
				"phonetic": "/.../",
				"example": "They decided to collide the plan.",
				"exampleZh": "他们决定碰撞这个计划。"
			},
			{
				"id": 4595,
				"en": "coma",
				"zh": "昏迷",
				"phonetic": "/.../",
				"example": "coma plays a key role in our life.",
				"exampleZh": "昏迷在我们的生活中起着关键作用。"
			},
			{
				"id": 4596,
				"en": "comet",
				"zh": "彗星",
				"phonetic": "/.../",
				"example": "This is an important comet.",
				"exampleZh": "这是一个重要的彗星。"
			},
			{
				"id": 4597,
				"en": "commemorate",
				"zh": "纪念",
				"phonetic": "/.../",
				"example": "She wants to commemorate this task.",
				"exampleZh": "她想纪念这个任务。"
			},
			{
				"id": 4598,
				"en": "commend",
				"zh": "称赞",
				"phonetic": "/.../",
				"example": "Let's commend together.",
				"exampleZh": "让我们一起称赞吧。"
			},
			{
				"id": 4599,
				"en": "commentary",
				"zh": "评论",
				"phonetic": "/mənt/",
				"example": "Do you understand this commentary?",
				"exampleZh": "你理解这个评论吗？"
			},
			{
				"id": 4600,
				"en": "commonwealth",
				"zh": "联邦",
				"phonetic": "/θ/",
				"example": "commonwealth plays a key role in our life.",
				"exampleZh": "联邦在我们的生活中起着关键作用。"
			},
			{
				"id": 4601,
				"en": "communal",
				"zh": "公共的",
				"phonetic": "/.../",
				"example": "This is very communal.",
				"exampleZh": "这非常公共的。"
			},
			{
				"id": 4602,
				"en": "commute",
				"zh": "通勤",
				"phonetic": "/.../",
				"example": "She wants to commute this task.",
				"exampleZh": "她想通勤这个任务。"
			},
			{
				"id": 4603,
				"en": "compact",
				"zh": "紧凑的",
				"phonetic": "/.../",
				"example": "It's a compact idea.",
				"exampleZh": "这是一个紧凑的的主意。"
			},
			{
				"id": 4604,
				"en": "complication",
				"zh": "复杂",
				"phonetic": "/ʃən/",
				"example": "Do you understand this complication?",
				"exampleZh": "你理解这个复杂吗？"
			},
			{
				"id": 4605,
				"en": "composer",
				"zh": "作曲家",
				"phonetic": "/ər/",
				"example": "composer plays a key role in our life.",
				"exampleZh": "作曲家在我们的生活中起着关键作用。"
			},
			{
				"id": 4606,
				"en": "composite",
				"zh": "复合的",
				"phonetic": "/.../",
				"example": "This is very composite.",
				"exampleZh": "这非常复合的。"
			},
			{
				"id": 4607,
				"en": "compress",
				"zh": "压缩",
				"phonetic": "/.../",
				"example": "She wants to compress this task.",
				"exampleZh": "她想压缩这个任务。"
			},
			{
				"id": 4608,
				"en": "concede",
				"zh": "承认",
				"phonetic": "/.../",
				"example": "Let's concede together.",
				"exampleZh": "让我们一起承认吧。"
			},
			{
				"id": 4609,
				"en": "conditional",
				"zh": "有条件的",
				"phonetic": "/ʃən/",
				"example": "The result is quite conditional.",
				"exampleZh": "结果是相当有条件的的。"
			},
			{
				"id": 4610,
				"en": "condolence",
				"zh": "哀悼",
				"phonetic": "/əns/",
				"example": "condolence plays a key role in our life.",
				"exampleZh": "哀悼在我们的生活中起着关键作用。"
			},
			{
				"id": 4611,
				"en": "condominium",
				"zh": "公寓",
				"phonetic": "/.../",
				"example": "This is an important condominium.",
				"exampleZh": "这是一个重要的公寓。"
			},
			{
				"id": 4612,
				"en": "cone",
				"zh": "圆锥",
				"phonetic": "/.../",
				"example": "I really like the cone.",
				"exampleZh": "我真的很喜欢这个圆锥。"
			},
			{
				"id": 4613,
				"en": "confederate",
				"zh": "同盟的",
				"phonetic": "/.../",
				"example": "It's a confederate idea.",
				"exampleZh": "这是一个同盟的的主意。"
			},
			{
				"id": 4614,
				"en": "confidential",
				"zh": "机密的",
				"phonetic": "/ʃəl/",
				"example": "The result is quite confidential.",
				"exampleZh": "结果是相当机密的的。"
			},
			{
				"id": 4615,
				"en": "configuration",
				"zh": "配置",
				"phonetic": "/ʃən/",
				"example": "configuration plays a key role in our life.",
				"exampleZh": "配置在我们的生活中起着关键作用。"
			},
			{
				"id": 4616,
				"en": "confiscate",
				"zh": "没收",
				"phonetic": "/.../",
				"example": "We should confiscate more carefully.",
				"exampleZh": "我们应该更仔细地没收。"
			},
			{
				"id": 4617,
				"en": "confrontation",
				"zh": "对抗",
				"phonetic": "/ʃən/",
				"example": "I really like the confrontation.",
				"exampleZh": "我真的很喜欢这个对抗。"
			},
			{
				"id": 4618,
				"en": "congestion",
				"zh": "拥堵",
				"phonetic": "/ʃən/",
				"example": "The congestion is very useful.",
				"exampleZh": "拥堵非常有用。"
			},
			{
				"id": 4619,
				"en": "congratulation",
				"zh": "祝贺",
				"phonetic": "/ʃən/",
				"example": "Do you understand this congratulation?",
				"exampleZh": "你理解这个祝贺吗？"
			},
			{
				"id": 4620,
				"en": "congregate",
				"zh": "聚集",
				"phonetic": "/.../",
				"example": "I need to congregate before the deadline.",
				"exampleZh": "我需要在截止日期前聚集。"
			},
			{
				"id": 4621,
				"en": "conquer",
				"zh": "征服",
				"phonetic": "/ər/",
				"example": "We should conquer more carefully.",
				"exampleZh": "我们应该更仔细地征服。"
			},
			{
				"id": 4622,
				"en": "constellation",
				"zh": "星座",
				"phonetic": "/ʃən/",
				"example": "I really like the constellation.",
				"exampleZh": "我真的很喜欢这个星座。"
			},
			{
				"id": 4623,
				"en": "consultation",
				"zh": "咨询",
				"phonetic": "/ʃən/",
				"example": "The consultation is very useful.",
				"exampleZh": "咨询非常有用。"
			},
			{
				"id": 4624,
				"en": "consumer",
				"zh": "消费者",
				"phonetic": "/ər/",
				"example": "Do you understand this consumer?",
				"exampleZh": "你理解这个消费者吗？"
			},
			{
				"id": 4625,
				"en": "contention",
				"zh": "争论",
				"phonetic": "/ʃən/",
				"example": "contention plays a key role in our life.",
				"exampleZh": "争论在我们的生活中起着关键作用。"
			},
			{
				"id": 4626,
				"en": "continuity",
				"zh": "连续性",
				"phonetic": "/.../",
				"example": "This is an important continuity.",
				"exampleZh": "这是一个重要的连续性。"
			},
			{
				"id": 4627,
				"en": "contractor",
				"zh": "承包商",
				"phonetic": "/ər/",
				"example": "I really like the contractor.",
				"exampleZh": "我真的很喜欢这个承包商。"
			},
			{
				"id": 4628,
				"en": "convene",
				"zh": "召集",
				"phonetic": "/.../",
				"example": "Let's convene together.",
				"exampleZh": "让我们一起召集吧。"
			},
			{
				"id": 4629,
				"en": "convoy",
				"zh": "护送",
				"phonetic": "/ɔɪ/",
				"example": "Do you understand this convoy?",
				"exampleZh": "你理解这个护送吗？"
			},
			{
				"id": 4630,
				"en": "cooker",
				"zh": "炊具",
				"phonetic": "/ər/",
				"example": "cooker plays a key role in our life.",
				"exampleZh": "炊具在我们的生活中起着关键作用。"
			},
			{
				"id": 4631,
				"en": "cookie",
				"zh": "曲奇",
				"phonetic": "/uː/",
				"example": "This is an important cookie.",
				"exampleZh": "这是一个重要的曲奇。"
			},
			{
				"id": 4632,
				"en": "copper",
				"zh": "铜",
				"phonetic": "/ər/",
				"example": "I really like the copper.",
				"exampleZh": "我真的很喜欢这个铜。"
			},
			{
				"id": 4633,
				"en": "cordial",
				"zh": "热诚的",
				"phonetic": "/.../",
				"example": "It's a cordial idea.",
				"exampleZh": "这是一个热诚的的主意。"
			},
			{
				"id": 4634,
				"en": "corona",
				"zh": "日冕",
				"phonetic": "/.../",
				"example": "Do you understand this corona?",
				"exampleZh": "你理解这个日冕吗？"
			},
			{
				"id": 4635,
				"en": "corporal",
				"zh": "身体的",
				"phonetic": "/.../",
				"example": "He found the task corporal.",
				"exampleZh": "他发现这个任务是身体的的。"
			},
			{
				"id": 4636,
				"en": "corps",
				"zh": "兵团",
				"phonetic": "/.../",
				"example": "This is an important corps.",
				"exampleZh": "这是一个重要的兵团。"
			},
			{
				"id": 4637,
				"en": "corpse",
				"zh": "尸体",
				"phonetic": "/.../",
				"example": "I really like the corpse.",
				"exampleZh": "我真的很喜欢这个尸体。"
			},
			{
				"id": 4638,
				"en": "correspondent",
				"zh": "记者",
				"phonetic": "/.../",
				"example": "The correspondent is very useful.",
				"exampleZh": "记者非常有用。"
			},
			{
				"id": 4639,
				"en": "corrosion",
				"zh": "腐蚀",
				"phonetic": "/ʒən/",
				"example": "Do you understand this corrosion?",
				"exampleZh": "你理解这个腐蚀吗？"
			},
			{
				"id": 4640,
				"en": "corruption",
				"zh": "腐败",
				"phonetic": "/ʃən/",
				"example": "corruption plays a key role in our life.",
				"exampleZh": "腐败在我们的生活中起着关键作用。"
			},
			{
				"id": 4641,
				"en": "cosmetic",
				"zh": "化妆品的",
				"phonetic": "/.../",
				"example": "This is very cosmetic.",
				"exampleZh": "这非常化妆品的。"
			},
			{
				"id": 4642,
				"en": "cosmic",
				"zh": "宇宙的",
				"phonetic": "/.../",
				"example": "She looks cosmic today.",
				"exampleZh": "她今天看起来很宇宙的。"
			},
			{
				"id": 4643,
				"en": "cosmopolitan",
				"zh": "世界性的",
				"phonetic": "/.../",
				"example": "It's a cosmopolitan idea.",
				"exampleZh": "这是一个世界性的的主意。"
			},
			{
				"id": 4644,
				"en": "costume",
				"zh": "服装",
				"phonetic": "/.../",
				"example": "Do you understand this costume?",
				"exampleZh": "你理解这个服装吗？"
			},
			{
				"id": 4645,
				"en": "cosy",
				"zh": "舒适的",
				"phonetic": "/.../",
				"example": "He found the task cosy.",
				"exampleZh": "他发现这个任务是舒适的的。"
			},
			{
				"id": 4646,
				"en": "cottage",
				"zh": "村舍",
				"phonetic": "/.../",
				"example": "This is an important cottage.",
				"exampleZh": "这是一个重要的村舍。"
			},
			{
				"id": 4647,
				"en": "couch",
				"zh": "沙发",
				"phonetic": "/tʃ/",
				"example": "I really like the couch.",
				"exampleZh": "我真的很喜欢这个沙发。"
			},
			{
				"id": 4648,
				"en": "counterfeit",
				"zh": "伪造的",
				"phonetic": "/aʊ/",
				"example": "It's a counterfeit idea.",
				"exampleZh": "这是一个伪造的的主意。"
			},
			{
				"id": 4649,
				"en": "courier",
				"zh": "快递员",
				"phonetic": "/ər/",
				"example": "Do you understand this courier?",
				"exampleZh": "你理解这个快递员吗？"
			},
			{
				"id": 4650,
				"en": "covenant",
				"zh": "契约",
				"phonetic": "/.../",
				"example": "covenant plays a key role in our life.",
				"exampleZh": "契约在我们的生活中起着关键作用。"
			},
			{
				"id": 4651,
				"en": "coverage",
				"zh": "覆盖",
				"phonetic": "/.../",
				"example": "This is an important coverage.",
				"exampleZh": "这是一个重要的覆盖。"
			},
			{
				"id": 4652,
				"en": "crack",
				"zh": "裂缝",
				"phonetic": "/k/",
				"example": "I really like the crack.",
				"exampleZh": "我真的很喜欢这个裂缝。"
			},
			{
				"id": 4653,
				"en": "cradle",
				"zh": "摇篮",
				"phonetic": "/.../",
				"example": "The cradle is very useful.",
				"exampleZh": "摇篮非常有用。"
			},
			{
				"id": 4654,
				"en": "crane",
				"zh": "起重机",
				"phonetic": "/.../",
				"example": "Do you understand this crane?",
				"exampleZh": "你理解这个起重机吗？"
			},
			{
				"id": 4655,
				"en": "crate",
				"zh": "板条箱",
				"phonetic": "/.../",
				"example": "crate plays a key role in our life.",
				"exampleZh": "板条箱在我们的生活中起着关键作用。"
			},
			{
				"id": 4656,
				"en": "crater",
				"zh": "火山口",
				"phonetic": "/ər/",
				"example": "This is an important crater.",
				"exampleZh": "这是一个重要的火山口。"
			},
			{
				"id": 4657,
				"en": "crawl",
				"zh": "爬行",
				"phonetic": "/ɔː/",
				"example": "She wants to crawl this task.",
				"exampleZh": "她想爬行这个任务。"
			},
			{
				"id": 4658,
				"en": "creativity",
				"zh": "创造力",
				"phonetic": "/iː/",
				"example": "The creativity is very useful.",
				"exampleZh": "创造力非常有用。"
			},
			{
				"id": 4659,
				"en": "credibility",
				"zh": "可信度",
				"phonetic": "/.../",
				"example": "Do you understand this credibility?",
				"exampleZh": "你理解这个可信度吗？"
			},
			{
				"id": 4660,
				"en": "creed",
				"zh": "信条",
				"phonetic": "/d/",
				"example": "creed plays a key role in our life.",
				"exampleZh": "信条在我们的生活中起着关键作用。"
			},
			{
				"id": 4661,
				"en": "creek",
				"zh": "小溪",
				"phonetic": "/iː/",
				"example": "This is an important creek.",
				"exampleZh": "这是一个重要的小溪。"
			},
			{
				"id": 4662,
				"en": "creep",
				"zh": "爬行",
				"phonetic": "/iː/",
				"example": "She wants to creep this task.",
				"exampleZh": "她想爬行这个任务。"
			},
			{
				"id": 4663,
				"en": "crest",
				"zh": "顶峰",
				"phonetic": "/.../",
				"example": "The crest is very useful.",
				"exampleZh": "顶峰非常有用。"
			},
			{
				"id": 4664,
				"en": "cricket",
				"zh": "板球",
				"phonetic": "/.../",
				"example": "Do you understand this cricket?",
				"exampleZh": "你理解这个板球吗？"
			},
			{
				"id": 4665,
				"en": "cripple",
				"zh": "使残废",
				"phonetic": "/.../",
				"example": "I need to cripple before the deadline.",
				"exampleZh": "我需要在截止日期前使残废。"
			},
			{
				"id": 4666,
				"en": "criticism",
				"zh": "批评",
				"phonetic": "/.../",
				"example": "This is an important criticism.",
				"exampleZh": "这是一个重要的批评。"
			},
			{
				"id": 4667,
				"en": "crook",
				"zh": "骗子",
				"phonetic": "/uː/",
				"example": "I really like the crook.",
				"exampleZh": "我真的很喜欢这个骗子。"
			},
			{
				"id": 4668,
				"en": "crouch",
				"zh": "蹲下",
				"phonetic": "/tʃ/",
				"example": "Let's crouch together.",
				"exampleZh": "让我们一起蹲下吧。"
			},
			{
				"id": 4669,
				"en": "crow",
				"zh": "乌鸦",
				"phonetic": "/aʊ/",
				"example": "Do you understand this crow?",
				"exampleZh": "你理解这个乌鸦吗？"
			},
			{
				"id": 4670,
				"en": "crucify",
				"zh": "钉十字架",
				"phonetic": "/.../",
				"example": "I need to crucify before the deadline.",
				"exampleZh": "我需要在截止日期前钉十字架。"
			},
			{
				"id": 4671,
				"en": "cruise",
				"zh": "巡航",
				"phonetic": "/.../",
				"example": "We should cruise more carefully.",
				"exampleZh": "我们应该更仔细地巡航。"
			},
			{
				"id": 4672,
				"en": "crumb",
				"zh": "碎屑",
				"phonetic": "/.../",
				"example": "I really like the crumb.",
				"exampleZh": "我真的很喜欢这个碎屑。"
			},
			{
				"id": 4673,
				"en": "crumble",
				"zh": "粉碎",
				"phonetic": "/.../",
				"example": "Let's crumble together.",
				"exampleZh": "让我们一起粉碎吧。"
			},
			{
				"id": 4674,
				"en": "crusade",
				"zh": "十字军东征",
				"phonetic": "/.../",
				"example": "Do you understand this crusade?",
				"exampleZh": "你理解这个十字军东征吗？"
			},
			{
				"id": 4675,
				"en": "crush",
				"zh": "压碎",
				"phonetic": "/ʃ/",
				"example": "I need to crush before the deadline.",
				"exampleZh": "我需要在截止日期前压碎。"
			},
			{
				"id": 4676,
				"en": "crust",
				"zh": "地壳",
				"phonetic": "/.../",
				"example": "This is an important crust.",
				"exampleZh": "这是一个重要的地壳。"
			},
			{
				"id": 4677,
				"en": "crystal",
				"zh": "水晶",
				"phonetic": "/.../",
				"example": "I really like the crystal.",
				"exampleZh": "我真的很喜欢这个水晶。"
			},
			{
				"id": 4678,
				"en": "cube",
				"zh": "立方体",
				"phonetic": "/.../",
				"example": "The cube is very useful.",
				"exampleZh": "立方体非常有用。"
			},
			{
				"id": 4679,
				"en": "cucumber",
				"zh": "黄瓜",
				"phonetic": "/ər/",
				"example": "Do you understand this cucumber?",
				"exampleZh": "你理解这个黄瓜吗？"
			},
			{
				"id": 4680,
				"en": "cue",
				"zh": "提示",
				"phonetic": "/.../",
				"example": "cue plays a key role in our life.",
				"exampleZh": "提示在我们的生活中起着关键作用。"
			},
			{
				"id": 4681,
				"en": "cuisine",
				"zh": "烹饪",
				"phonetic": "/.../",
				"example": "This is an important cuisine.",
				"exampleZh": "这是一个重要的烹饪。"
			},
			{
				"id": 4682,
				"en": "culminate",
				"zh": "达到高潮",
				"phonetic": "/.../",
				"example": "She wants to culminate this task.",
				"exampleZh": "她想达到高潮这个任务。"
			},
			{
				"id": 4683,
				"en": "curator",
				"zh": "馆长",
				"phonetic": "/ər/",
				"example": "The curator is very useful.",
				"exampleZh": "馆长非常有用。"
			},
			{
				"id": 4684,
				"en": "curfew",
				"zh": "宵禁",
				"phonetic": "/.../",
				"example": "Do you understand this curfew?",
				"exampleZh": "你理解这个宵禁吗？"
			},
			{
				"id": 4685,
				"en": "curl",
				"zh": "卷曲",
				"phonetic": "/.../",
				"example": "I need to curl before the deadline.",
				"exampleZh": "我需要在截止日期前卷曲。"
			},
			{
				"id": 4686,
				"en": "curse",
				"zh": "诅咒",
				"phonetic": "/.../",
				"example": "We should curse more carefully.",
				"exampleZh": "我们应该更仔细地诅咒。"
			},
			{
				"id": 4687,
				"en": "cushion",
				"zh": "垫子",
				"phonetic": "/.../",
				"example": "I really like the cushion.",
				"exampleZh": "我真的很喜欢这个垫子。"
			},
			{
				"id": 4688,
				"en": "customize",
				"zh": "定制",
				"phonetic": "/.../",
				"example": "Let's customize together.",
				"exampleZh": "让我们一起定制吧。"
			},
			{
				"id": 4689,
				"en": "cutlery",
				"zh": "餐具",
				"phonetic": "/.../",
				"example": "Do you understand this cutlery?",
				"exampleZh": "你理解这个餐具吗？"
			},
			{
				"id": 4690,
				"en": "cyber",
				"zh": "网络的",
				"phonetic": "/ər/",
				"example": "He found the task cyber.",
				"exampleZh": "他发现这个任务是网络的的。"
			},
			{
				"id": 4691,
				"en": "cylinder",
				"zh": "圆柱",
				"phonetic": "/ər/",
				"example": "This is an important cylinder.",
				"exampleZh": "这是一个重要的圆柱。"
			},
			{
				"id": 4692,
				"en": "dagger",
				"zh": "匕首",
				"phonetic": "/ər/",
				"example": "I really like the dagger.",
				"exampleZh": "我真的很喜欢这个匕首。"
			},
			{
				"id": 4693,
				"en": "dart",
				"zh": "飞镖",
				"phonetic": "/.../",
				"example": "The dart is very useful.",
				"exampleZh": "飞镖非常有用。"
			},
			{
				"id": 4694,
				"en": "dash",
				"zh": "冲刺",
				"phonetic": "/ʃ/",
				"example": "They decided to dash the plan.",
				"exampleZh": "他们决定冲刺这个计划。"
			},
			{
				"id": 4695,
				"en": "datum",
				"zh": "数据",
				"phonetic": "/.../",
				"example": "datum plays a key role in our life.",
				"exampleZh": "数据在我们的生活中起着关键作用。"
			},
			{
				"id": 4696,
				"en": "dazzle",
				"zh": "使目眩",
				"phonetic": "/.../",
				"example": "We should dazzle more carefully.",
				"exampleZh": "我们应该更仔细地使目眩。"
			},
			{
				"id": 4697,
				"en": "deadlock",
				"zh": "僵局",
				"phonetic": "/k/",
				"example": "I really like the deadlock.",
				"exampleZh": "我真的很喜欢这个僵局。"
			},
			{
				"id": 4698,
				"en": "dean",
				"zh": "院长",
				"phonetic": "/iː/",
				"example": "The dean is very useful.",
				"exampleZh": "院长非常有用。"
			},
			{
				"id": 4699,
				"en": "debut",
				"zh": "首次亮相",
				"phonetic": "/.../",
				"example": "Do you understand this debut?",
				"exampleZh": "你理解这个首次亮相吗？"
			},
			{
				"id": 4700,
				"en": "deceit",
				"zh": "欺骗",
				"phonetic": "/.../",
				"example": "deceit plays a key role in our life.",
				"exampleZh": "欺骗在我们的生活中起着关键作用。"
			},
			{
				"id": 4701,
				"en": "decompose",
				"zh": "分解",
				"phonetic": "/.../",
				"example": "We should decompose more carefully.",
				"exampleZh": "我们应该更仔细地分解。"
			},
			{
				"id": 4702,
				"en": "decoration",
				"zh": "装饰",
				"phonetic": "/ʃən/",
				"example": "I really like the decoration.",
				"exampleZh": "我真的很喜欢这个装饰。"
			},
			{
				"id": 4703,
				"en": "deduct",
				"zh": "扣除",
				"phonetic": "/.../",
				"example": "Let's deduct together.",
				"exampleZh": "让我们一起扣除吧。"
			},
			{
				"id": 4704,
				"en": "defy",
				"zh": "违抗",
				"phonetic": "/.../",
				"example": "They decided to defy the plan.",
				"exampleZh": "他们决定违抗这个计划。"
			},
			{
				"id": 4705,
				"en": "delicacy",
				"zh": "美味",
				"phonetic": "/.../",
				"example": "delicacy plays a key role in our life.",
				"exampleZh": "美味在我们的生活中起着关键作用。"
			},
			{
				"id": 4706,
				"en": "delta",
				"zh": "三角洲",
				"phonetic": "/.../",
				"example": "This is an important delta.",
				"exampleZh": "这是一个重要的三角洲。"
			},
			{
				"id": 4707,
				"en": "demerit",
				"zh": "缺点",
				"phonetic": "/.../",
				"example": "I really like the demerit.",
				"exampleZh": "我真的很喜欢这个缺点。"
			},
			{
				"id": 4708,
				"en": "demolish",
				"zh": "拆除",
				"phonetic": "/ʃ/",
				"example": "Let's demolish together.",
				"exampleZh": "让我们一起拆除吧。"
			},
			{
				"id": 4709,
				"en": "denomination",
				"zh": "面额",
				"phonetic": "/ʃən/",
				"example": "Do you understand this denomination?",
				"exampleZh": "你理解这个面额吗？"
			},
			{
				"id": 4710,
				"en": "dent",
				"zh": "凹痕",
				"phonetic": "/.../",
				"example": "dent plays a key role in our life.",
				"exampleZh": "凹痕在我们的生活中起着关键作用。"
			},
			{
				"id": 4711,
				"en": "dental",
				"zh": "牙齿的",
				"phonetic": "/.../",
				"example": "This is very dental.",
				"exampleZh": "这非常牙齿的。"
			},
			{
				"id": 4712,
				"en": "deplete",
				"zh": "耗尽",
				"phonetic": "/.../",
				"example": "She wants to deplete this task.",
				"exampleZh": "她想耗尽这个任务。"
			},
			{
				"id": 4713,
				"en": "deport",
				"zh": "驱逐出境",
				"phonetic": "/.../",
				"example": "Let's deport together.",
				"exampleZh": "让我们一起驱逐出境吧。"
			},
			{
				"id": 4714,
				"en": "depot",
				"zh": "仓库",
				"phonetic": "/.../",
				"example": "Do you understand this depot?",
				"exampleZh": "你理解这个仓库吗？"
			},
			{
				"id": 4715,
				"en": "depreciation",
				"zh": "贬值",
				"phonetic": "/ʃən/",
				"example": "depreciation plays a key role in our life.",
				"exampleZh": "贬值在我们的生活中起着关键作用。"
			},
			{
				"id": 4716,
				"en": "depression",
				"zh": "抑郁",
				"phonetic": "/ʃən/",
				"example": "This is an important depression.",
				"exampleZh": "这是一个重要的抑郁。"
			},
			{
				"id": 4717,
				"en": "derail",
				"zh": "脱轨",
				"phonetic": "/eɪ/",
				"example": "She wants to derail this task.",
				"exampleZh": "她想脱轨这个任务。"
			},
			{
				"id": 4718,
				"en": "deregulation",
				"zh": "放松管制",
				"phonetic": "/ʃən/",
				"example": "The deregulation is very useful.",
				"exampleZh": "放松管制非常有用。"
			},
			{
				"id": 4719,
				"en": "derivative",
				"zh": "衍生的",
				"phonetic": "/.../",
				"example": "The result is quite derivative.",
				"exampleZh": "结果是相当衍生的的。"
			},
			{
				"id": 4720,
				"en": "descendant",
				"zh": "后代",
				"phonetic": "/.../",
				"example": "descendant plays a key role in our life.",
				"exampleZh": "后代在我们的生活中起着关键作用。"
			},
			{
				"id": 4721,
				"en": "descent",
				"zh": "下降",
				"phonetic": "/.../",
				"example": "This is an important descent.",
				"exampleZh": "这是一个重要的下降。"
			},
			{
				"id": 4722,
				"en": "desktop",
				"zh": "桌面",
				"phonetic": "/.../",
				"example": "I really like the desktop.",
				"exampleZh": "我真的很喜欢这个桌面。"
			},
			{
				"id": 4723,
				"en": "despair",
				"zh": "绝望",
				"phonetic": "/eɪ/",
				"example": "The despair is very useful.",
				"exampleZh": "绝望非常有用。"
			},
			{
				"id": 4724,
				"en": "destine",
				"zh": "注定",
				"phonetic": "/.../",
				"example": "They decided to destine the plan.",
				"exampleZh": "他们决定注定这个计划。"
			},
			{
				"id": 4725,
				"en": "deter",
				"zh": "阻止",
				"phonetic": "/ər/",
				"example": "I need to deter before the deadline.",
				"exampleZh": "我需要在截止日期前阻止。"
			},
			{
				"id": 4726,
				"en": "detergent",
				"zh": "洗涤剂",
				"phonetic": "/.../",
				"example": "This is an important detergent.",
				"exampleZh": "这是一个重要的洗涤剂。"
			},
			{
				"id": 4727,
				"en": "detonate",
				"zh": "引爆",
				"phonetic": "/.../",
				"example": "She wants to detonate this task.",
				"exampleZh": "她想引爆这个任务。"
			},
			{
				"id": 4728,
				"en": "detour",
				"zh": "绕道",
				"phonetic": "/aʊ/",
				"example": "The detour is very useful.",
				"exampleZh": "绕道非常有用。"
			},
			{
				"id": 4729,
				"en": "detract",
				"zh": "减损",
				"phonetic": "/.../",
				"example": "They decided to detract the plan.",
				"exampleZh": "他们决定减损这个计划。"
			},
			{
				"id": 4730,
				"en": "developer",
				"zh": "开发者",
				"phonetic": "/ər/",
				"example": "developer plays a key role in our life.",
				"exampleZh": "开发者在我们的生活中起着关键作用。"
			},
			{
				"id": 4731,
				"en": "deviate",
				"zh": "偏离",
				"phonetic": "/.../",
				"example": "We should deviate more carefully.",
				"exampleZh": "我们应该更仔细地偏离。"
			},
			{
				"id": 4732,
				"en": "dial",
				"zh": "拨号",
				"phonetic": "/.../",
				"example": "She wants to dial this task.",
				"exampleZh": "她想拨号这个任务。"
			},
			{
				"id": 4733,
				"en": "diesel",
				"zh": "柴油",
				"phonetic": "/.../",
				"example": "The diesel is very useful.",
				"exampleZh": "柴油非常有用。"
			},
			{
				"id": 4734,
				"en": "dietary",
				"zh": "饮食的",
				"phonetic": "/.../",
				"example": "The result is quite dietary.",
				"exampleZh": "结果是相当饮食的的。"
			},
			{
				"id": 4735,
				"en": "dignitary",
				"zh": "高官",
				"phonetic": "/.../",
				"example": "dignitary plays a key role in our life.",
				"exampleZh": "高官在我们的生活中起着关键作用。"
			},
			{
				"id": 4736,
				"en": "diligent",
				"zh": "勤奋的",
				"phonetic": "/.../",
				"example": "This is very diligent.",
				"exampleZh": "这非常勤奋的。"
			},
			{
				"id": 4737,
				"en": "dilute",
				"zh": "稀释",
				"phonetic": "/.../",
				"example": "She wants to dilute this task.",
				"exampleZh": "她想稀释这个任务。"
			},
			{
				"id": 4738,
				"en": "diplomacy",
				"zh": "外交",
				"phonetic": "/.../",
				"example": "The diplomacy is very useful.",
				"exampleZh": "外交非常有用。"
			},
			{
				"id": 4739,
				"en": "disable",
				"zh": "使残废",
				"phonetic": "/əbəl/",
				"example": "They decided to disable the plan.",
				"exampleZh": "他们决定使残废这个计划。"
			},
			{
				"id": 4740,
				"en": "disarm",
				"zh": "解除武装",
				"phonetic": "/.../",
				"example": "I need to disarm before the deadline.",
				"exampleZh": "我需要在截止日期前解除武装。"
			},
			{
				"id": 4741,
				"en": "discard",
				"zh": "丢弃",
				"phonetic": "/.../",
				"example": "We should discard more carefully.",
				"exampleZh": "我们应该更仔细地丢弃。"
			},
			{
				"id": 4742,
				"en": "discern",
				"zh": "辨别",
				"phonetic": "/.../",
				"example": "She wants to discern this task.",
				"exampleZh": "她想辨别这个任务。"
			},
			{
				"id": 4743,
				"en": "discriminate",
				"zh": "歧视",
				"phonetic": "/.../",
				"example": "Let's discriminate together.",
				"exampleZh": "让我们一起歧视吧。"
			},
			{
				"id": 4744,
				"en": "disdain",
				"zh": "蔑视",
				"phonetic": "/eɪ/",
				"example": "Do you understand this disdain?",
				"exampleZh": "你理解这个蔑视吗？"
			},
			{
				"id": 4745,
				"en": "disfigure",
				"zh": "毁容",
				"phonetic": "/.../",
				"example": "I need to disfigure before the deadline.",
				"exampleZh": "我需要在截止日期前毁容。"
			},
			{
				"id": 4746,
				"en": "disgrace",
				"zh": "耻辱",
				"phonetic": "/.../",
				"example": "This is an important disgrace.",
				"exampleZh": "这是一个重要的耻辱。"
			},
			{
				"id": 4747,
				"en": "disguise",
				"zh": "伪装",
				"phonetic": "/.../",
				"example": "She wants to disguise this task.",
				"exampleZh": "她想伪装这个任务。"
			},
			{
				"id": 4748,
				"en": "dishonor",
				"zh": "耻辱",
				"phonetic": "/ər/",
				"example": "The dishonor is very useful.",
				"exampleZh": "耻辱非常有用。"
			},
			{
				"id": 4749,
				"en": "disillusion",
				"zh": "使幻想破灭",
				"phonetic": "/ʒən/",
				"example": "They decided to disillusion the plan.",
				"exampleZh": "他们决定使幻想破灭这个计划。"
			},
			{
				"id": 4750,
				"en": "disintegrate",
				"zh": "瓦解",
				"phonetic": "/.../",
				"example": "I need to disintegrate before the deadline.",
				"exampleZh": "我需要在截止日期前瓦解。"
			},
			{
				"id": 4751,
				"en": "dismantle",
				"zh": "拆除",
				"phonetic": "/.../",
				"example": "We should dismantle more carefully.",
				"exampleZh": "我们应该更仔细地拆除。"
			},
			{
				"id": 4752,
				"en": "dismay",
				"zh": "沮丧",
				"phonetic": "/eɪ/",
				"example": "I really like the dismay.",
				"exampleZh": "我真的很喜欢这个沮丧。"
			},
			{
				"id": 4753,
				"en": "dispel",
				"zh": "驱散",
				"phonetic": "/.../",
				"example": "Let's dispel together.",
				"exampleZh": "让我们一起驱散吧。"
			},
			{
				"id": 4754,
				"en": "dispense",
				"zh": "分配",
				"phonetic": "/.../",
				"example": "They decided to dispense the plan.",
				"exampleZh": "他们决定分配这个计划。"
			},
			{
				"id": 4755,
				"en": "displace",
				"zh": "取代",
				"phonetic": "/.../",
				"example": "I need to displace before the deadline.",
				"exampleZh": "我需要在截止日期前取代。"
			},
			{
				"id": 4756,
				"en": "disposal",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "This is an important disposal.",
				"exampleZh": "这是一个重要的处理。"
			},
			{
				"id": 4757,
				"en": "disposition",
				"zh": "性情",
				"phonetic": "/ʃən/",
				"example": "I really like the disposition.",
				"exampleZh": "我真的很喜欢这个性情。"
			},
			{
				"id": 4758,
				"en": "disseminate",
				"zh": "传播",
				"phonetic": "/.../",
				"example": "Let's disseminate together.",
				"exampleZh": "让我们一起传播吧。"
			},
			{
				"id": 4759,
				"en": "dissent",
				"zh": "异议",
				"phonetic": "/.../",
				"example": "Do you understand this dissent?",
				"exampleZh": "你理解这个异议吗？"
			},
			{
				"id": 4760,
				"en": "dissertation",
				"zh": "论文",
				"phonetic": "/ʃən/",
				"example": "dissertation plays a key role in our life.",
				"exampleZh": "论文在我们的生活中起着关键作用。"
			},
			{
				"id": 4761,
				"en": "dissident",
				"zh": "持不同政见者",
				"phonetic": "/.../",
				"example": "This is an important dissident.",
				"exampleZh": "这是一个重要的持不同政见者。"
			},
			{
				"id": 4762,
				"en": "distill",
				"zh": "蒸馏",
				"phonetic": "/.../",
				"example": "She wants to distill this task.",
				"exampleZh": "她想蒸馏这个任务。"
			},
			{
				"id": 4763,
				"en": "distress",
				"zh": "痛苦",
				"phonetic": "/.../",
				"example": "The distress is very useful.",
				"exampleZh": "痛苦非常有用。"
			},
			{
				"id": 4764,
				"en": "distribution",
				"zh": "分配",
				"phonetic": "/ʃən/",
				"example": "Do you understand this distribution?",
				"exampleZh": "你理解这个分配吗？"
			},
			{
				"id": 4765,
				"en": "disturbance",
				"zh": "骚乱",
				"phonetic": "/əns/",
				"example": "disturbance plays a key role in our life.",
				"exampleZh": "骚乱在我们的生活中起着关键作用。"
			},
			{
				"id": 4766,
				"en": "ditch",
				"zh": "沟渠",
				"phonetic": "/tʃ/",
				"example": "This is an important ditch.",
				"exampleZh": "这是一个重要的沟渠。"
			},
			{
				"id": 4767,
				"en": "dive",
				"zh": "潜水",
				"phonetic": "/.../",
				"example": "She wants to dive this task.",
				"exampleZh": "她想潜水这个任务。"
			},
			{
				"id": 4768,
				"en": "diverge",
				"zh": "分歧",
				"phonetic": "/.../",
				"example": "Let's diverge together.",
				"exampleZh": "让我们一起分歧吧。"
			},
			{
				"id": 4769,
				"en": "diversify",
				"zh": "多元化",
				"phonetic": "/.../",
				"example": "They decided to diversify the plan.",
				"exampleZh": "他们决定多元化这个计划。"
			},
			{
				"id": 4770,
				"en": "divert",
				"zh": "转移",
				"phonetic": "/.../",
				"example": "I need to divert before the deadline.",
				"exampleZh": "我需要在截止日期前转移。"
			},
			{
				"id": 4771,
				"en": "dizzy",
				"zh": "晕眩的",
				"phonetic": "/.../",
				"example": "This is very dizzy.",
				"exampleZh": "这非常晕眩的。"
			},
			{
				"id": 4772,
				"en": "dock",
				"zh": "码头",
				"phonetic": "/k/",
				"example": "I really like the dock.",
				"exampleZh": "我真的很喜欢这个码头。"
			},
			{
				"id": 4773,
				"en": "dodge",
				"zh": "躲避",
				"phonetic": "/.../",
				"example": "Let's dodge together.",
				"exampleZh": "让我们一起躲避吧。"
			},
			{
				"id": 4774,
				"en": "dole",
				"zh": "救济金",
				"phonetic": "/.../",
				"example": "Do you understand this dole?",
				"exampleZh": "你理解这个救济金吗？"
			},
			{
				"id": 4775,
				"en": "dolphin",
				"zh": "海豚",
				"phonetic": "/.../",
				"example": "dolphin plays a key role in our life.",
				"exampleZh": "海豚在我们的生活中起着关键作用。"
			},
			{
				"id": 4776,
				"en": "dome",
				"zh": "圆顶",
				"phonetic": "/.../",
				"example": "This is an important dome.",
				"exampleZh": "这是一个重要的圆顶。"
			},
			{
				"id": 4777,
				"en": "doom",
				"zh": "厄运",
				"phonetic": "/uː/",
				"example": "I really like the doom.",
				"exampleZh": "我真的很喜欢这个厄运。"
			},
			{
				"id": 4778,
				"en": "dormitory",
				"zh": "宿舍",
				"phonetic": "/.../",
				"example": "The dormitory is very useful.",
				"exampleZh": "宿舍非常有用。"
			},
			{
				"id": 4779,
				"en": "dosage",
				"zh": "剂量",
				"phonetic": "/.../",
				"example": "Do you understand this dosage?",
				"exampleZh": "你理解这个剂量吗？"
			},
			{
				"id": 4780,
				"en": "dot",
				"zh": "点",
				"phonetic": "/.../",
				"example": "dot plays a key role in our life.",
				"exampleZh": "点在我们的生活中起着关键作用。"
			},
			{
				"id": 4781,
				"en": "downfall",
				"zh": "垮台",
				"phonetic": "/aʊ/",
				"example": "This is an important downfall.",
				"exampleZh": "这是一个重要的垮台。"
			},
			{
				"id": 4782,
				"en": "downgrade",
				"zh": "降级",
				"phonetic": "/aʊ/",
				"example": "She wants to downgrade this task.",
				"exampleZh": "她想降级这个任务。"
			},
			{
				"id": 4783,
				"en": "drainage",
				"zh": "排水",
				"phonetic": "/eɪ/",
				"example": "The drainage is very useful.",
				"exampleZh": "排水非常有用。"
			},
			{
				"id": 4784,
				"en": "drape",
				"zh": "帘子",
				"phonetic": "/.../",
				"example": "Do you understand this drape?",
				"exampleZh": "你理解这个帘子吗？"
			},
			{
				"id": 4785,
				"en": "drastic",
				"zh": "激烈的",
				"phonetic": "/.../",
				"example": "He found the task drastic.",
				"exampleZh": "他发现这个任务是激烈的的。"
			},
			{
				"id": 4786,
				"en": "drawback",
				"zh": "缺点",
				"phonetic": "/k/",
				"example": "This is an important drawback.",
				"exampleZh": "这是一个重要的缺点。"
			},
			{
				"id": 4787,
				"en": "dread",
				"zh": "恐惧",
				"phonetic": "/iː/",
				"example": "I really like the dread.",
				"exampleZh": "我真的很喜欢这个恐惧。"
			},
			{
				"id": 4788,
				"en": "drench",
				"zh": "使湿透",
				"phonetic": "/tʃ/",
				"example": "Let's drench together.",
				"exampleZh": "让我们一起使湿透吧。"
			},
			{
				"id": 4789,
				"en": "drip",
				"zh": "滴下",
				"phonetic": "/.../",
				"example": "They decided to drip the plan.",
				"exampleZh": "他们决定滴下这个计划。"
			},
			{
				"id": 4790,
				"en": "droplet",
				"zh": "小滴",
				"phonetic": "/.../",
				"example": "droplet plays a key role in our life.",
				"exampleZh": "小滴在我们的生活中起着关键作用。"
			},
			{
				"id": 4791,
				"en": "duke",
				"zh": "公爵",
				"phonetic": "/.../",
				"example": "This is an important duke.",
				"exampleZh": "这是一个重要的公爵。"
			},
			{
				"id": 4792,
				"en": "dusk",
				"zh": "黄昏",
				"phonetic": "/.../",
				"example": "I really like the dusk.",
				"exampleZh": "我真的很喜欢这个黄昏。"
			},
			{
				"id": 4793,
				"en": "dwarf",
				"zh": "矮人",
				"phonetic": "/.../",
				"example": "The dwarf is very useful.",
				"exampleZh": "矮人非常有用。"
			},
			{
				"id": 4794,
				"en": "dwelling",
				"zh": "住所",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this dwelling?",
				"exampleZh": "你理解这个住所吗？"
			},
			{
				"id": 4795,
				"en": "dye",
				"zh": "染料",
				"phonetic": "/.../",
				"example": "dye plays a key role in our life.",
				"exampleZh": "染料在我们的生活中起着关键作用。"
			},
			{
				"id": 4796,
				"en": "dynasty",
				"zh": "朝代",
				"phonetic": "/.../",
				"example": "This is an important dynasty.",
				"exampleZh": "这是一个重要的朝代。"
			},
			{
				"id": 4797,
				"en": "eagle",
				"zh": "鹰",
				"phonetic": "/iː/",
				"example": "I really like the eagle.",
				"exampleZh": "我真的很喜欢这个鹰。"
			},
			{
				"id": 4798,
				"en": "earring",
				"zh": "耳环",
				"phonetic": "/ɪŋ/",
				"example": "The earring is very useful.",
				"exampleZh": "耳环非常有用。"
			},
			{
				"id": 4799,
				"en": "Easter",
				"zh": "复活节",
				"phonetic": "/ər/",
				"example": "Do you understand this Easter?",
				"exampleZh": "你理解这个复活节吗？"
			},
			{
				"id": 4800,
				"en": "eclipse",
				"zh": "日食",
				"phonetic": "/.../",
				"example": "eclipse plays a key role in our life.",
				"exampleZh": "日食在我们的生活中起着关键作用。"
			},
			{
				"id": 4801,
				"en": "ecosystem",
				"zh": "生态系统",
				"phonetic": "/.../",
				"example": "This is an important ecosystem.",
				"exampleZh": "这是一个重要的生态系统。"
			},
			{
				"id": 4802,
				"en": "ecstasy",
				"zh": "狂喜",
				"phonetic": "/.../",
				"example": "I really like the ecstasy.",
				"exampleZh": "我真的很喜欢这个狂喜。"
			},
			{
				"id": 4803,
				"en": "edible",
				"zh": "可食用的",
				"phonetic": "/ɪbəl/",
				"example": "It's a edible idea.",
				"exampleZh": "这是一个可食用的的主意。"
			},
			{
				"id": 4804,
				"en": "educator",
				"zh": "教育者",
				"phonetic": "/ər/",
				"example": "Do you understand this educator?",
				"exampleZh": "你理解这个教育者吗？"
			},
			{
				"id": 4805,
				"en": "ego",
				"zh": "自我",
				"phonetic": "/.../",
				"example": "ego plays a key role in our life.",
				"exampleZh": "自我在我们的生活中起着关键作用。"
			},
			{
				"id": 4806,
				"en": "eject",
				"zh": "弹出",
				"phonetic": "/.../",
				"example": "We should eject more carefully.",
				"exampleZh": "我们应该更仔细地弹出。"
			},
			{
				"id": 4807,
				"en": "elastic",
				"zh": "弹性的",
				"phonetic": "/.../",
				"example": "She looks elastic today.",
				"exampleZh": "她今天看起来很弹性的。"
			},
			{
				"id": 4808,
				"en": "elbow",
				"zh": "肘",
				"phonetic": "/aʊ/",
				"example": "The elbow is very useful.",
				"exampleZh": "肘非常有用。"
			},
			{
				"id": 4809,
				"en": "elderly",
				"zh": "年长的",
				"phonetic": "/li/",
				"example": "The result is quite elderly.",
				"exampleZh": "结果是相当年长的的。"
			},
			{
				"id": 4810,
				"en": "electoral",
				"zh": "选举的",
				"phonetic": "/.../",
				"example": "He found the task electoral.",
				"exampleZh": "他发现这个任务是选举的的。"
			},
			{
				"id": 4811,
				"en": "electronics",
				"zh": "电子学",
				"phonetic": "/.../",
				"example": "This is an important electronics.",
				"exampleZh": "这是一个重要的电子学。"
			},
			{
				"id": 4812,
				"en": "elude",
				"zh": "逃避",
				"phonetic": "/.../",
				"example": "She wants to elude this task.",
				"exampleZh": "她想逃避这个任务。"
			},
			{
				"id": 4813,
				"en": "embargo",
				"zh": "禁运",
				"phonetic": "/.../",
				"example": "The embargo is very useful.",
				"exampleZh": "禁运非常有用。"
			},
			{
				"id": 4814,
				"en": "embryo",
				"zh": "胚胎",
				"phonetic": "/.../",
				"example": "Do you understand this embryo?",
				"exampleZh": "你理解这个胚胎吗？"
			},
			{
				"id": 4815,
				"en": "emerald",
				"zh": "翡翠",
				"phonetic": "/.../",
				"example": "emerald plays a key role in our life.",
				"exampleZh": "翡翠在我们的生活中起着关键作用。"
			},
			{
				"id": 4816,
				"en": "emigrant",
				"zh": "移民",
				"phonetic": "/.../",
				"example": "This is an important emigrant.",
				"exampleZh": "这是一个重要的移民。"
			},
			{
				"id": 4817,
				"en": "eminent",
				"zh": "杰出的",
				"phonetic": "/.../",
				"example": "She looks eminent today.",
				"exampleZh": "她今天看起来很杰出的。"
			},
			{
				"id": 4818,
				"en": "emperor",
				"zh": "皇帝",
				"phonetic": "/ər/",
				"example": "The emperor is very useful.",
				"exampleZh": "皇帝非常有用。"
			},
			{
				"id": 4819,
				"en": "enchant",
				"zh": "使着迷",
				"phonetic": "/.../",
				"example": "They decided to enchant the plan.",
				"exampleZh": "他们决定使着迷这个计划。"
			},
			{
				"id": 4820,
				"en": "encompass",
				"zh": "包含",
				"phonetic": "/.../",
				"example": "I need to encompass before the deadline.",
				"exampleZh": "我需要在截止日期前包含。"
			},
			{
				"id": 4821,
				"en": "encouragement",
				"zh": "鼓励",
				"phonetic": "/mənt/",
				"example": "This is an important encouragement.",
				"exampleZh": "这是一个重要的鼓励。"
			},
			{
				"id": 4822,
				"en": "encyclopedia",
				"zh": "百科全书",
				"phonetic": "/.../",
				"example": "I really like the encyclopedia.",
				"exampleZh": "我真的很喜欢这个百科全书。"
			},
			{
				"id": 4823,
				"en": "endanger",
				"zh": "危及",
				"phonetic": "/ər/",
				"example": "Let's endanger together.",
				"exampleZh": "让我们一起危及吧。"
			},
			{
				"id": 4824,
				"en": "endowment",
				"zh": "捐赠",
				"phonetic": "/mənt/",
				"example": "Do you understand this endowment?",
				"exampleZh": "你理解这个捐赠吗？"
			},
			{
				"id": 4825,
				"en": "enforcement",
				"zh": "执行",
				"phonetic": "/mənt/",
				"example": "enforcement plays a key role in our life.",
				"exampleZh": "执行在我们的生活中起着关键作用。"
			},
			{
				"id": 4826,
				"en": "engagement",
				"zh": "订婚",
				"phonetic": "/mənt/",
				"example": "This is an important engagement.",
				"exampleZh": "这是一个重要的订婚。"
			},
			{
				"id": 4827,
				"en": "engrave",
				"zh": "雕刻",
				"phonetic": "/.../",
				"example": "She wants to engrave this task.",
				"exampleZh": "她想雕刻这个任务。"
			},
			{
				"id": 4828,
				"en": "engulf",
				"zh": "吞没",
				"phonetic": "/.../",
				"example": "Let's engulf together.",
				"exampleZh": "让我们一起吞没吧。"
			},
			{
				"id": 4829,
				"en": "enlighten",
				"zh": "启发",
				"phonetic": "/.../",
				"example": "They decided to enlighten the plan.",
				"exampleZh": "他们决定启发这个计划。"
			},
			{
				"id": 4830,
				"en": "enlist",
				"zh": "征募",
				"phonetic": "/.../",
				"example": "I need to enlist before the deadline.",
				"exampleZh": "我需要在截止日期前征募。"
			},
			{
				"id": 4831,
				"en": "ensemble",
				"zh": "全体",
				"phonetic": "/.../",
				"example": "This is an important ensemble.",
				"exampleZh": "这是一个重要的全体。"
			},
			{
				"id": 4832,
				"en": "ensue",
				"zh": "接着发生",
				"phonetic": "/.../",
				"example": "She wants to ensue this task.",
				"exampleZh": "她想接着发生这个任务。"
			},
			{
				"id": 4833,
				"en": "entertain",
				"zh": "娱乐",
				"phonetic": "/eɪ/",
				"example": "Let's entertain together.",
				"exampleZh": "让我们一起娱乐吧。"
			},
			{
				"id": 4834,
				"en": "enthusiastic",
				"zh": "热情的",
				"phonetic": "/.../",
				"example": "The result is quite enthusiastic.",
				"exampleZh": "结果是相当热情的的。"
			},
			{
				"id": 4835,
				"en": "entitle",
				"zh": "给...权利",
				"phonetic": "/.../",
				"example": "I need to entitle before the deadline.",
				"exampleZh": "我需要在截止日期前给...权利。"
			},
			{
				"id": 4836,
				"en": "envious",
				"zh": "嫉妒的",
				"phonetic": "/iəs/",
				"example": "This is very envious.",
				"exampleZh": "这非常嫉妒的。"
			},
			{
				"id": 4837,
				"en": "enzyme",
				"zh": "酶",
				"phonetic": "/.../",
				"example": "I really like the enzyme.",
				"exampleZh": "我真的很喜欢这个酶。"
			},
			{
				"id": 4838,
				"en": "epic",
				"zh": "史诗",
				"phonetic": "/.../",
				"example": "The epic is very useful.",
				"exampleZh": "史诗非常有用。"
			},
			{
				"id": 4839,
				"en": "equator",
				"zh": "赤道",
				"phonetic": "/ər/",
				"example": "Do you understand this equator?",
				"exampleZh": "你理解这个赤道吗？"
			},
			{
				"id": 4840,
				"en": "equity",
				"zh": "公平",
				"phonetic": "/kw/",
				"example": "equity plays a key role in our life.",
				"exampleZh": "公平在我们的生活中起着关键作用。"
			},
			{
				"id": 4841,
				"en": "eradicate",
				"zh": "根除",
				"phonetic": "/.../",
				"example": "We should eradicate more carefully.",
				"exampleZh": "我们应该更仔细地根除。"
			},
			{
				"id": 4842,
				"en": "errand",
				"zh": "差事",
				"phonetic": "/.../",
				"example": "I really like the errand.",
				"exampleZh": "我真的很喜欢这个差事。"
			},
			{
				"id": 4843,
				"en": "erupt",
				"zh": "爆发",
				"phonetic": "/.../",
				"example": "Let's erupt together.",
				"exampleZh": "让我们一起爆发吧。"
			},
			{
				"id": 4844,
				"en": "escalate",
				"zh": "升级",
				"phonetic": "/.../",
				"example": "They decided to escalate the plan.",
				"exampleZh": "他们决定升级这个计划。"
			},
			{
				"id": 4845,
				"en": "escort",
				"zh": "护送",
				"phonetic": "/.../",
				"example": "I need to escort before the deadline.",
				"exampleZh": "我需要在截止日期前护送。"
			},
			{
				"id": 4846,
				"en": "evergreen",
				"zh": "常绿的",
				"phonetic": "/iː/",
				"example": "This is very evergreen.",
				"exampleZh": "这非常常绿的。"
			},
			{
				"id": 4847,
				"en": "evict",
				"zh": "驱逐",
				"phonetic": "/.../",
				"example": "She wants to evict this task.",
				"exampleZh": "她想驱逐这个任务。"
			},
			{
				"id": 4848,
				"en": "exalt",
				"zh": "提升",
				"phonetic": "/.../",
				"example": "Let's exalt together.",
				"exampleZh": "让我们一起提升吧。"
			},
			{
				"id": 4849,
				"en": "excessive",
				"zh": "过度的",
				"phonetic": "/.../",
				"example": "The result is quite excessive.",
				"exampleZh": "结果是相当过度的的。"
			},
			{
				"id": 4850,
				"en": "exclaim",
				"zh": "呼喊",
				"phonetic": "/eɪ/",
				"example": "I need to exclaim before the deadline.",
				"exampleZh": "我需要在截止日期前呼喊。"
			},
			{
				"id": 4851,
				"en": "excursion",
				"zh": "远足",
				"phonetic": "/ʒən/",
				"example": "This is an important excursion.",
				"exampleZh": "这是一个重要的远足。"
			},
			{
				"id": 4852,
				"en": "exhibition",
				"zh": "展览",
				"phonetic": "/ʃən/",
				"example": "I really like the exhibition.",
				"exampleZh": "我真的很喜欢这个展览。"
			},
			{
				"id": 4853,
				"en": "expedition",
				"zh": "远征",
				"phonetic": "/ʃən/",
				"example": "The expedition is very useful.",
				"exampleZh": "远征非常有用。"
			},
			{
				"id": 4854,
				"en": "exploration",
				"zh": "探索",
				"phonetic": "/ʃən/",
				"example": "Do you understand this exploration?",
				"exampleZh": "你理解这个探索吗？"
			},
			{
				"id": 4855,
				"en": "exposition",
				"zh": "展览",
				"phonetic": "/ʃən/",
				"example": "exposition plays a key role in our life.",
				"exampleZh": "展览在我们的生活中起着关键作用。"
			},
			{
				"id": 4856,
				"en": "exquisite",
				"zh": "精美的",
				"phonetic": "/kw/",
				"example": "This is very exquisite.",
				"exampleZh": "这非常精美的。"
			},
			{
				"id": 4857,
				"en": "extinguish",
				"zh": "熄灭",
				"phonetic": "/ʃ/",
				"example": "She wants to extinguish this task.",
				"exampleZh": "她想熄灭这个任务。"
			},
			{
				"id": 4858,
				"en": "extracurricular",
				"zh": "课外的",
				"phonetic": "/ɑːr/",
				"example": "It's a extracurricular idea.",
				"exampleZh": "这是一个课外的的主意。"
			},
			{
				"id": 4859,
				"en": "extravagant",
				"zh": "奢侈的",
				"phonetic": "/.../",
				"example": "The result is quite extravagant.",
				"exampleZh": "结果是相当奢侈的的。"
			},
			{
				"id": 4860,
				"en": "eyebrow",
				"zh": "眉毛",
				"phonetic": "/aʊ/",
				"example": "eyebrow plays a key role in our life.",
				"exampleZh": "眉毛在我们的生活中起着关键作用。"
			},
			{
				"id": 4861,
				"en": "eyelid",
				"zh": "眼皮",
				"phonetic": "/.../",
				"example": "This is an important eyelid.",
				"exampleZh": "这是一个重要的眼皮。"
			},
			{
				"id": 4862,
				"en": "fable",
				"zh": "寓言",
				"phonetic": "/əbəl/",
				"example": "I really like the fable.",
				"exampleZh": "我真的很喜欢这个寓言。"
			},
			{
				"id": 4863,
				"en": "fabulous",
				"zh": "极好的",
				"phonetic": "/əs/",
				"example": "It's a fabulous idea.",
				"exampleZh": "这是一个极好的的主意。"
			},
			{
				"id": 4864,
				"en": "facade",
				"zh": "正面",
				"phonetic": "/.../",
				"example": "Do you understand this facade?",
				"exampleZh": "你理解这个正面吗？"
			},
			{
				"id": 4865,
				"en": "facet",
				"zh": "方面",
				"phonetic": "/.../",
				"example": "facet plays a key role in our life.",
				"exampleZh": "方面在我们的生活中起着关键作用。"
			},
			{
				"id": 4866,
				"en": "faction",
				"zh": "派系",
				"phonetic": "/ʃən/",
				"example": "This is an important faction.",
				"exampleZh": "这是一个重要的派系。"
			},
			{
				"id": 4867,
				"en": "fade",
				"zh": "褪色",
				"phonetic": "/.../",
				"example": "She wants to fade this task.",
				"exampleZh": "她想褪色这个任务。"
			},
			{
				"id": 4868,
				"en": "Fahrenheit",
				"zh": "华氏度",
				"phonetic": "/.../",
				"example": "The Fahrenheit is very useful.",
				"exampleZh": "华氏度非常有用。"
			},
			{
				"id": 4869,
				"en": "faint",
				"zh": "微弱的",
				"phonetic": "/eɪ/",
				"example": "The result is quite faint.",
				"exampleZh": "结果是相当微弱的的。"
			},
			{
				"id": 4870,
				"en": "fairy",
				"zh": "仙女",
				"phonetic": "/eɪ/",
				"example": "fairy plays a key role in our life.",
				"exampleZh": "仙女在我们的生活中起着关键作用。"
			},
			{
				"id": 4871,
				"en": "fake",
				"zh": "假的",
				"phonetic": "/.../",
				"example": "This is very fake.",
				"exampleZh": "这非常假的。"
			},
			{
				"id": 4872,
				"en": "famine",
				"zh": "饥荒",
				"phonetic": "/.../",
				"example": "I really like the famine.",
				"exampleZh": "我真的很喜欢这个饥荒。"
			},
			{
				"id": 4873,
				"en": "fanatic",
				"zh": "狂热的",
				"phonetic": "/.../",
				"example": "It's a fanatic idea.",
				"exampleZh": "这是一个狂热的的主意。"
			},
			{
				"id": 4874,
				"en": "fantastic",
				"zh": "极好的",
				"phonetic": "/.../",
				"example": "The result is quite fantastic.",
				"exampleZh": "结果是相当极好的的。"
			},
			{
				"id": 4875,
				"en": "farewell",
				"zh": "告别",
				"phonetic": "/.../",
				"example": "farewell plays a key role in our life.",
				"exampleZh": "告别在我们的生活中起着关键作用。"
			},
			{
				"id": 4876,
				"en": "fascism",
				"zh": "法西斯主义",
				"phonetic": "/.../",
				"example": "This is an important fascism.",
				"exampleZh": "这是一个重要的法西斯主义。"
			},
			{
				"id": 4877,
				"en": "fatal",
				"zh": "致命的",
				"phonetic": "/.../",
				"example": "She looks fatal today.",
				"exampleZh": "她今天看起来很致命的。"
			},
			{
				"id": 4878,
				"en": "fathom",
				"zh": "理解",
				"phonetic": "/.../",
				"example": "Let's fathom together.",
				"exampleZh": "让我们一起理解吧。"
			},
			{
				"id": 4879,
				"en": "faucet",
				"zh": "水龙头",
				"phonetic": "/ɔː/",
				"example": "Do you understand this faucet?",
				"exampleZh": "你理解这个水龙头吗？"
			},
			{
				"id": 4880,
				"en": "faulty",
				"zh": "有缺点的",
				"phonetic": "/ɔː/",
				"example": "He found the task faulty.",
				"exampleZh": "他发现这个任务是有缺点的的。"
			},
			{
				"id": 4881,
				"en": "federation",
				"zh": "联邦",
				"phonetic": "/ʃən/",
				"example": "This is an important federation.",
				"exampleZh": "这是一个重要的联邦。"
			},
			{
				"id": 4882,
				"en": "feeble",
				"zh": "虚弱的",
				"phonetic": "/iː/",
				"example": "She looks feeble today.",
				"exampleZh": "她今天看起来很虚弱的。"
			},
			{
				"id": 4883,
				"en": "fellowship",
				"zh": "友谊",
				"phonetic": "/aʊ/",
				"example": "The fellowship is very useful.",
				"exampleZh": "友谊非常有用。"
			},
			{
				"id": 4884,
				"en": "felony",
				"zh": "重罪",
				"phonetic": "/.../",
				"example": "Do you understand this felony?",
				"exampleZh": "你理解这个重罪吗？"
			},
			{
				"id": 4885,
				"en": "feminist",
				"zh": "女权主义者",
				"phonetic": "/.../",
				"example": "feminist plays a key role in our life.",
				"exampleZh": "女权主义者在我们的生活中起着关键作用。"
			},
			{
				"id": 4886,
				"en": "ferment",
				"zh": "发酵",
				"phonetic": "/mənt/",
				"example": "We should ferment more carefully.",
				"exampleZh": "我们应该更仔细地发酵。"
			},
			{
				"id": 4887,
				"en": "ferocious",
				"zh": "凶猛的",
				"phonetic": "/ʃəs/",
				"example": "She looks ferocious today.",
				"exampleZh": "她今天看起来很凶猛的。"
			},
			{
				"id": 4888,
				"en": "ferry",
				"zh": "渡轮",
				"phonetic": "/.../",
				"example": "The ferry is very useful.",
				"exampleZh": "渡轮非常有用。"
			},
			{
				"id": 4889,
				"en": "fertilizer",
				"zh": "肥料",
				"phonetic": "/ər/",
				"example": "Do you understand this fertilizer?",
				"exampleZh": "你理解这个肥料吗？"
			},
			{
				"id": 4890,
				"en": "fetch",
				"zh": "取",
				"phonetic": "/tʃ/",
				"example": "I need to fetch before the deadline.",
				"exampleZh": "我需要在截止日期前取。"
			},
			{
				"id": 4891,
				"en": "feud",
				"zh": "世仇",
				"phonetic": "/.../",
				"example": "This is an important feud.",
				"exampleZh": "这是一个重要的世仇。"
			},
			{
				"id": 4892,
				"en": "fiber",
				"zh": "纤维",
				"phonetic": "/ər/",
				"example": "I really like the fiber.",
				"exampleZh": "我真的很喜欢这个纤维。"
			},
			{
				"id": 4893,
				"en": "fidelity",
				"zh": "忠诚",
				"phonetic": "/.../",
				"example": "The fidelity is very useful.",
				"exampleZh": "忠诚非常有用。"
			},
			{
				"id": 4894,
				"en": "fiery",
				"zh": "火的",
				"phonetic": "/.../",
				"example": "The result is quite fiery.",
				"exampleZh": "结果是相当火的的。"
			},
			{
				"id": 4895,
				"en": "figurative",
				"zh": "比喻的",
				"phonetic": "/.../",
				"example": "He found the task figurative.",
				"exampleZh": "他发现这个任务是比喻的的。"
			},
			{
				"id": 4896,
				"en": "filth",
				"zh": "污秽",
				"phonetic": "/θ/",
				"example": "This is an important filth.",
				"exampleZh": "这是一个重要的污秽。"
			},
			{
				"id": 4897,
				"en": "finding",
				"zh": "发现",
				"phonetic": "/ɪŋ/",
				"example": "I really like the finding.",
				"exampleZh": "我真的很喜欢这个发现。"
			},
			{
				"id": 4898,
				"en": "fingerprint",
				"zh": "指纹",
				"phonetic": "/.../",
				"example": "The fingerprint is very useful.",
				"exampleZh": "指纹非常有用。"
			},
			{
				"id": 4899,
				"en": "fireplace",
				"zh": "壁炉",
				"phonetic": "/.../",
				"example": "Do you understand this fireplace?",
				"exampleZh": "你理解这个壁炉吗？"
			},
			{
				"id": 4900,
				"en": "fishery",
				"zh": "渔业",
				"phonetic": "/.../",
				"example": "fishery plays a key role in our life.",
				"exampleZh": "渔业在我们的生活中起着关键作用。"
			},
			{
				"id": 4901,
				"en": "fitting",
				"zh": "合适的",
				"phonetic": "/ɪŋ/",
				"example": "This is very fitting.",
				"exampleZh": "这非常合适的。"
			},
			{
				"id": 4902,
				"en": "fixture",
				"zh": "固定装置",
				"phonetic": "/tʃər/",
				"example": "I really like the fixture.",
				"exampleZh": "我真的很喜欢这个固定装置。"
			},
			{
				"id": 4903,
				"en": "flake",
				"zh": "薄片",
				"phonetic": "/.../",
				"example": "The flake is very useful.",
				"exampleZh": "薄片非常有用。"
			},
			{
				"id": 4904,
				"en": "flank",
				"zh": "侧面",
				"phonetic": "/.../",
				"example": "Do you understand this flank?",
				"exampleZh": "你理解这个侧面吗？"
			},
			{
				"id": 4905,
				"en": "flap",
				"zh": "拍打",
				"phonetic": "/.../",
				"example": "I need to flap before the deadline.",
				"exampleZh": "我需要在截止日期前拍打。"
			},
			{
				"id": 4906,
				"en": "flare",
				"zh": "闪耀",
				"phonetic": "/.../",
				"example": "We should flare more carefully.",
				"exampleZh": "我们应该更仔细地闪耀。"
			},
			{
				"id": 4907,
				"en": "flask",
				"zh": "烧瓶",
				"phonetic": "/.../",
				"example": "I really like the flask.",
				"exampleZh": "我真的很喜欢这个烧瓶。"
			},
			{
				"id": 4908,
				"en": "flatten",
				"zh": "使平",
				"phonetic": "/.../",
				"example": "Let's flatten together.",
				"exampleZh": "让我们一起使平吧。"
			},
			{
				"id": 4909,
				"en": "flatter",
				"zh": "奉承",
				"phonetic": "/ər/",
				"example": "They decided to flatter the plan.",
				"exampleZh": "他们决定奉承这个计划。"
			},
			{
				"id": 4910,
				"en": "flavor",
				"zh": "风味",
				"phonetic": "/ər/",
				"example": "flavor plays a key role in our life.",
				"exampleZh": "风味在我们的生活中起着关键作用。"
			},
			{
				"id": 4911,
				"en": "fleet",
				"zh": "舰队",
				"phonetic": "/iː/",
				"example": "This is an important fleet.",
				"exampleZh": "这是一个重要的舰队。"
			},
			{
				"id": 4912,
				"en": "flesh",
				"zh": "肉",
				"phonetic": "/ʃ/",
				"example": "I really like the flesh.",
				"exampleZh": "我真的很喜欢这个肉。"
			},
			{
				"id": 4913,
				"en": "flexibility",
				"zh": "灵活性",
				"phonetic": "/.../",
				"example": "The flexibility is very useful.",
				"exampleZh": "灵活性非常有用。"
			},
			{
				"id": 4914,
				"en": "flick",
				"zh": "轻弹",
				"phonetic": "/k/",
				"example": "They decided to flick the plan.",
				"exampleZh": "他们决定轻弹这个计划。"
			},
			{
				"id": 4915,
				"en": "fling",
				"zh": "扔",
				"phonetic": "/ɪŋ/",
				"example": "I need to fling before the deadline.",
				"exampleZh": "我需要在截止日期前扔。"
			},
			{
				"id": 4916,
				"en": "flip",
				"zh": "翻转",
				"phonetic": "/.../",
				"example": "We should flip more carefully.",
				"exampleZh": "我们应该更仔细地翻转。"
			},
			{
				"id": 4917,
				"en": "flu",
				"zh": "流感",
				"phonetic": "/.../",
				"example": "I really like the flu.",
				"exampleZh": "我真的很喜欢这个流感。"
			},
			{
				"id": 4918,
				"en": "flush",
				"zh": "冲洗",
				"phonetic": "/ʃ/",
				"example": "Let's flush together.",
				"exampleZh": "让我们一起冲洗吧。"
			},
			{
				"id": 4919,
				"en": "flutter",
				"zh": "飘动",
				"phonetic": "/ər/",
				"example": "They decided to flutter the plan.",
				"exampleZh": "他们决定飘动这个计划。"
			},
			{
				"id": 4920,
				"en": "foam",
				"zh": "泡沫",
				"phonetic": "/oʊ/",
				"example": "foam plays a key role in our life.",
				"exampleZh": "泡沫在我们的生活中起着关键作用。"
			},
			{
				"id": 4921,
				"en": "foe",
				"zh": "敌人",
				"phonetic": "/.../",
				"example": "This is an important foe.",
				"exampleZh": "这是一个重要的敌人。"
			},
			{
				"id": 4922,
				"en": "foil",
				"zh": "箔",
				"phonetic": "/ɔɪ/",
				"example": "I really like the foil.",
				"exampleZh": "我真的很喜欢这个箔。"
			},
			{
				"id": 4923,
				"en": "foliage",
				"zh": "叶子",
				"phonetic": "/.../",
				"example": "The foliage is very useful.",
				"exampleZh": "叶子非常有用。"
			},
			{
				"id": 4924,
				"en": "folklore",
				"zh": "民间传说",
				"phonetic": "/.../",
				"example": "Do you understand this folklore?",
				"exampleZh": "你理解这个民间传说吗？"
			},
			{
				"id": 4925,
				"en": "follower",
				"zh": "追随者",
				"phonetic": "/ər/",
				"example": "follower plays a key role in our life.",
				"exampleZh": "追随者在我们的生活中起着关键作用。"
			},
			{
				"id": 4926,
				"en": "fool",
				"zh": "傻瓜",
				"phonetic": "/uː/",
				"example": "This is an important fool.",
				"exampleZh": "这是一个重要的傻瓜。"
			},
			{
				"id": 4927,
				"en": "footprint",
				"zh": "足迹",
				"phonetic": "/uː/",
				"example": "I really like the footprint.",
				"exampleZh": "我真的很喜欢这个足迹。"
			},
			{
				"id": 4928,
				"en": "ford",
				"zh": "浅滩",
				"phonetic": "/.../",
				"example": "The ford is very useful.",
				"exampleZh": "浅滩非常有用。"
			},
			{
				"id": 4929,
				"en": "forehead",
				"zh": "前额",
				"phonetic": "/iː/",
				"example": "Do you understand this forehead?",
				"exampleZh": "你理解这个前额吗？"
			},
			{
				"id": 4930,
				"en": "foremost",
				"zh": "最重要的",
				"phonetic": "/.../",
				"example": "He found the task foremost.",
				"exampleZh": "他发现这个任务是最重要的的。"
			},
			{
				"id": 4931,
				"en": "forerunner",
				"zh": "先驱",
				"phonetic": "/ər/",
				"example": "This is an important forerunner.",
				"exampleZh": "这是一个重要的先驱。"
			},
			{
				"id": 4932,
				"en": "forfeit",
				"zh": "丧失",
				"phonetic": "/.../",
				"example": "She wants to forfeit this task.",
				"exampleZh": "她想丧失这个任务。"
			},
			{
				"id": 4933,
				"en": "formal",
				"zh": "正式的",
				"phonetic": "/.../",
				"example": "It's a formal idea.",
				"exampleZh": "这是一个正式的的主意。"
			},
			{
				"id": 4934,
				"en": "formation",
				"zh": "形成",
				"phonetic": "/ʃən/",
				"example": "Do you understand this formation?",
				"exampleZh": "你理解这个形成吗？"
			},
			{
				"id": 4935,
				"en": "formidable",
				"zh": "可怕的",
				"phonetic": "/əbəl/",
				"example": "He found the task formidable.",
				"exampleZh": "他发现这个任务是可怕的的。"
			},
			{
				"id": 4936,
				"en": "formulate",
				"zh": "制定",
				"phonetic": "/.../",
				"example": "We should formulate more carefully.",
				"exampleZh": "我们应该更仔细地制定。"
			},
			{
				"id": 4937,
				"en": "forsake",
				"zh": "抛弃",
				"phonetic": "/.../",
				"example": "She wants to forsake this task.",
				"exampleZh": "她想抛弃这个任务。"
			},
			{
				"id": 4938,
				"en": "fort",
				"zh": "堡垒",
				"phonetic": "/.../",
				"example": "The fort is very useful.",
				"exampleZh": "堡垒非常有用。"
			},
			{
				"id": 4939,
				"en": "fortify",
				"zh": "加强",
				"phonetic": "/.../",
				"example": "They decided to fortify the plan.",
				"exampleZh": "他们决定加强这个计划。"
			},
			{
				"id": 4940,
				"en": "fortnight",
				"zh": "两星期",
				"phonetic": "/aɪt/",
				"example": "fortnight plays a key role in our life.",
				"exampleZh": "两星期在我们的生活中起着关键作用。"
			},
			{
				"id": 4941,
				"en": "fortress",
				"zh": "堡垒",
				"phonetic": "/.../",
				"example": "This is an important fortress.",
				"exampleZh": "这是一个重要的堡垒。"
			},
			{
				"id": 4942,
				"en": "foul",
				"zh": "犯规",
				"phonetic": "/aʊ/",
				"example": "I really like the foul.",
				"exampleZh": "我真的很喜欢这个犯规。"
			},
			{
				"id": 4943,
				"en": "founder",
				"zh": "创始人",
				"phonetic": "/ər/",
				"example": "The founder is very useful.",
				"exampleZh": "创始人非常有用。"
			},
			{
				"id": 4944,
				"en": "fracture",
				"zh": "骨折",
				"phonetic": "/tʃər/",
				"example": "Do you understand this fracture?",
				"exampleZh": "你理解这个骨折吗？"
			},
			{
				"id": 4945,
				"en": "fragrance",
				"zh": "香味",
				"phonetic": "/əns/",
				"example": "fragrance plays a key role in our life.",
				"exampleZh": "香味在我们的生活中起着关键作用。"
			},
			{
				"id": 4946,
				"en": "frail",
				"zh": "虚弱的",
				"phonetic": "/eɪ/",
				"example": "This is very frail.",
				"exampleZh": "这非常虚弱的。"
			},
			{
				"id": 4947,
				"en": "frantic",
				"zh": "疯狂的",
				"phonetic": "/.../",
				"example": "She looks frantic today.",
				"exampleZh": "她今天看起来很疯狂的。"
			},
			{
				"id": 4948,
				"en": "freight",
				"zh": "货运",
				"phonetic": "/aɪt/",
				"example": "The freight is very useful.",
				"exampleZh": "货运非常有用。"
			},
			{
				"id": 4949,
				"en": "frenzy",
				"zh": "狂乱",
				"phonetic": "/.../",
				"example": "Do you understand this frenzy?",
				"exampleZh": "你理解这个狂乱吗？"
			},
			{
				"id": 4950,
				"en": "friction",
				"zh": "摩擦",
				"phonetic": "/ʃən/",
				"example": "friction plays a key role in our life.",
				"exampleZh": "摩擦在我们的生活中起着关键作用。"
			},
			{
				"id": 4951,
				"en": "fringe",
				"zh": "边缘",
				"phonetic": "/.../",
				"example": "This is an important fringe.",
				"exampleZh": "这是一个重要的边缘。"
			},
			{
				"id": 4952,
				"en": "frost",
				"zh": "霜",
				"phonetic": "/.../",
				"example": "I really like the frost.",
				"exampleZh": "我真的很喜欢这个霜。"
			},
			{
				"id": 4953,
				"en": "frugal",
				"zh": "节俭的",
				"phonetic": "/.../",
				"example": "It's a frugal idea.",
				"exampleZh": "这是一个节俭的的主意。"
			},
			{
				"id": 4954,
				"en": "fugitive",
				"zh": "逃犯",
				"phonetic": "/.../",
				"example": "Do you understand this fugitive?",
				"exampleZh": "你理解这个逃犯吗？"
			},
			{
				"id": 4955,
				"en": "fume",
				"zh": "烟",
				"phonetic": "/.../",
				"example": "fume plays a key role in our life.",
				"exampleZh": "烟在我们的生活中起着关键作用。"
			},
			{
				"id": 4956,
				"en": "furnace",
				"zh": "炉子",
				"phonetic": "/.../",
				"example": "This is an important furnace.",
				"exampleZh": "这是一个重要的炉子。"
			},
			{
				"id": 4957,
				"en": "fury",
				"zh": "狂怒",
				"phonetic": "/.../",
				"example": "I really like the fury.",
				"exampleZh": "我真的很喜欢这个狂怒。"
			},
			{
				"id": 4958,
				"en": "fuse",
				"zh": "保险丝",
				"phonetic": "/.../",
				"example": "The fuse is very useful.",
				"exampleZh": "保险丝非常有用。"
			},
			{
				"id": 4959,
				"en": "fuss",
				"zh": "大惊小怪",
				"phonetic": "/.../",
				"example": "Do you understand this fuss?",
				"exampleZh": "你理解这个大惊小怪吗？"
			},
			{
				"id": 4960,
				"en": "futile",
				"zh": "徒劳的",
				"phonetic": "/.../",
				"example": "He found the task futile.",
				"exampleZh": "他发现这个任务是徒劳的的。"
			},
			{
				"id": 4961,
				"en": "gale",
				"zh": "大风",
				"phonetic": "/.../",
				"example": "This is an important gale.",
				"exampleZh": "这是一个重要的大风。"
			},
			{
				"id": 4962,
				"en": "gallon",
				"zh": "加仑",
				"phonetic": "/.../",
				"example": "I really like the gallon.",
				"exampleZh": "我真的很喜欢这个加仑。"
			},
			{
				"id": 4963,
				"en": "gallop",
				"zh": "奔驰",
				"phonetic": "/.../",
				"example": "Let's gallop together.",
				"exampleZh": "让我们一起奔驰吧。"
			},
			{
				"id": 4964,
				"en": "gang",
				"zh": "帮派",
				"phonetic": "/.../",
				"example": "Do you understand this gang?",
				"exampleZh": "你理解这个帮派吗？"
			},
			{
				"id": 4965,
				"en": "gaol",
				"zh": "监狱",
				"phonetic": "/.../",
				"example": "gaol plays a key role in our life.",
				"exampleZh": "监狱在我们的生活中起着关键作用。"
			},
			{
				"id": 4966,
				"en": "garment",
				"zh": "服装",
				"phonetic": "/mənt/",
				"example": "This is an important garment.",
				"exampleZh": "这是一个重要的服装。"
			},
			{
				"id": 4967,
				"en": "garrison",
				"zh": "驻军",
				"phonetic": "/.../",
				"example": "I really like the garrison.",
				"exampleZh": "我真的很喜欢这个驻军。"
			},
			{
				"id": 4968,
				"en": "gasp",
				"zh": "喘气",
				"phonetic": "/.../",
				"example": "Let's gasp together.",
				"exampleZh": "让我们一起喘气吧。"
			},
			{
				"id": 4969,
				"en": "gauge",
				"zh": "测量仪",
				"phonetic": "/ɔː/",
				"example": "Do you understand this gauge?",
				"exampleZh": "你理解这个测量仪吗？"
			},
			{
				"id": 4970,
				"en": "gear",
				"zh": "齿轮",
				"phonetic": "/ɑːr/",
				"example": "gear plays a key role in our life.",
				"exampleZh": "齿轮在我们的生活中起着关键作用。"
			},
			{
				"id": 4971,
				"en": "gem",
				"zh": "宝石",
				"phonetic": "/.../",
				"example": "This is an important gem.",
				"exampleZh": "这是一个重要的宝石。"
			},
			{
				"id": 4972,
				"en": "generalize",
				"zh": "概括",
				"phonetic": "/.../",
				"example": "She wants to generalize this task.",
				"exampleZh": "她想概括这个任务。"
			},
			{
				"id": 4973,
				"en": "genocide",
				"zh": "种族灭绝",
				"phonetic": "/.../",
				"example": "The genocide is very useful.",
				"exampleZh": "种族灭绝非常有用。"
			},
			{
				"id": 4974,
				"en": "genre",
				"zh": "流派",
				"phonetic": "/.../",
				"example": "Do you understand this genre?",
				"exampleZh": "你理解这个流派吗？"
			},
			{
				"id": 4975,
				"en": "geology",
				"zh": "地质学",
				"phonetic": "/.../",
				"example": "geology plays a key role in our life.",
				"exampleZh": "地质学在我们的生活中起着关键作用。"
			},
			{
				"id": 4976,
				"en": "geometry",
				"zh": "几何学",
				"phonetic": "/.../",
				"example": "This is an important geometry.",
				"exampleZh": "这是一个重要的几何学。"
			},
			{
				"id": 4977,
				"en": "germ",
				"zh": "细菌",
				"phonetic": "/.../",
				"example": "I really like the germ.",
				"exampleZh": "我真的很喜欢这个细菌。"
			},
			{
				"id": 4978,
				"en": "giggle",
				"zh": "咯咯笑",
				"phonetic": "/.../",
				"example": "Let's giggle together.",
				"exampleZh": "让我们一起咯咯笑吧。"
			},
			{
				"id": 4979,
				"en": "gild",
				"zh": "镀金",
				"phonetic": "/.../",
				"example": "They decided to gild the plan.",
				"exampleZh": "他们决定镀金这个计划。"
			},
			{
				"id": 4980,
				"en": "gin",
				"zh": "杜松子酒",
				"phonetic": "/.../",
				"example": "gin plays a key role in our life.",
				"exampleZh": "杜松子酒在我们的生活中起着关键作用。"
			},
			{
				"id": 4981,
				"en": "ginger",
				"zh": "姜",
				"phonetic": "/ər/",
				"example": "This is an important ginger.",
				"exampleZh": "这是一个重要的姜。"
			},
			{
				"id": 4982,
				"en": "glacier",
				"zh": "冰川",
				"phonetic": "/ər/",
				"example": "I really like the glacier.",
				"exampleZh": "我真的很喜欢这个冰川。"
			},
			{
				"id": 4983,
				"en": "glamour",
				"zh": "魅力",
				"phonetic": "/aʊ/",
				"example": "The glamour is very useful.",
				"exampleZh": "魅力非常有用。"
			},
			{
				"id": 4984,
				"en": "gland",
				"zh": "腺",
				"phonetic": "/.../",
				"example": "Do you understand this gland?",
				"exampleZh": "你理解这个腺吗？"
			},
			{
				"id": 4985,
				"en": "glare",
				"zh": "怒视",
				"phonetic": "/.../",
				"example": "I need to glare before the deadline.",
				"exampleZh": "我需要在截止日期前怒视。"
			},
			{
				"id": 4986,
				"en": "glaze",
				"zh": "釉",
				"phonetic": "/.../",
				"example": "This is an important glaze.",
				"exampleZh": "这是一个重要的釉。"
			},
			{
				"id": 4987,
				"en": "gleam",
				"zh": "微光",
				"phonetic": "/iː/",
				"example": "I really like the gleam.",
				"exampleZh": "我真的很喜欢这个微光。"
			},
			{
				"id": 4988,
				"en": "glide",
				"zh": "滑行",
				"phonetic": "/.../",
				"example": "Let's glide together.",
				"exampleZh": "让我们一起滑行吧。"
			},
			{
				"id": 4989,
				"en": "glitter",
				"zh": "闪光",
				"phonetic": "/ər/",
				"example": "They decided to glitter the plan.",
				"exampleZh": "他们决定闪光这个计划。"
			},
			{
				"id": 4990,
				"en": "globalization",
				"zh": "全球化",
				"phonetic": "/ʃən/",
				"example": "globalization plays a key role in our life.",
				"exampleZh": "全球化在我们的生活中起着关键作用。"
			},
			{
				"id": 4991,
				"en": "gloom",
				"zh": "忧郁",
				"phonetic": "/uː/",
				"example": "This is an important gloom.",
				"exampleZh": "这是一个重要的忧郁。"
			},
			{
				"id": 4992,
				"en": "glory",
				"zh": "荣耀",
				"phonetic": "/.../",
				"example": "I really like the glory.",
				"exampleZh": "我真的很喜欢这个荣耀。"
			},
			{
				"id": 4993,
				"en": "glossary",
				"zh": "词汇表",
				"phonetic": "/.../",
				"example": "The glossary is very useful.",
				"exampleZh": "词汇表非常有用。"
			},
			{
				"id": 4994,
				"en": "glossy",
				"zh": "光滑的",
				"phonetic": "/.../",
				"example": "The result is quite glossy.",
				"exampleZh": "结果是相当光滑的的。"
			},
			{
				"id": 4995,
				"en": "gnaw",
				"zh": "咬",
				"phonetic": "/ɔː/",
				"example": "I need to gnaw before the deadline.",
				"exampleZh": "我需要在截止日期前咬。"
			},
			{
				"id": 4996,
				"en": "gorge",
				"zh": "峡谷",
				"phonetic": "/.../",
				"example": "This is an important gorge.",
				"exampleZh": "这是一个重要的峡谷。"
			},
			{
				"id": 4997,
				"en": "gorgeous",
				"zh": "华丽的",
				"phonetic": "/iəs/",
				"example": "She looks gorgeous today.",
				"exampleZh": "她今天看起来很华丽的。"
			},
			{
				"id": 4998,
				"en": "gospel",
				"zh": "福音",
				"phonetic": "/.../",
				"example": "The gospel is very useful.",
				"exampleZh": "福音非常有用。"
			},
			{
				"id": 4999,
				"en": "gossip",
				"zh": "闲话",
				"phonetic": "/.../",
				"example": "Do you understand this gossip?",
				"exampleZh": "你理解这个闲话吗？"
			},
			{
				"id": 5000,
				"en": "govern",
				"zh": "统治",
				"phonetic": "/.../",
				"example": "I need to govern before the deadline.",
				"exampleZh": "我需要在截止日期前统治。"
			}
		]
	},
	{
		"id": 4,
		"category": "日常口语",
		"icon": "🗣️",
		"words": [
			{
				"id": 4001,
				"en": "hello",
				"zh": "你好",
				"phonetic": "/.../",
				"example": "Let's talk about hello.",
				"exampleZh": "让我们来谈谈你好吧。"
			},
			{
				"id": 4002,
				"en": "goodbye",
				"zh": "再见",
				"phonetic": "/uː/",
				"example": "I think goodbye is important.",
				"exampleZh": "我认为再见很重要。"
			},
			{
				"id": 4003,
				"en": "please",
				"zh": "请",
				"phonetic": "/iː/",
				"example": "Let's please together.",
				"exampleZh": "让我们一起请吧。"
			},
			{
				"id": 4004,
				"en": "thanks",
				"zh": "谢谢",
				"phonetic": "/.../",
				"example": "They decided to thanks the plan.",
				"exampleZh": "他们决定谢谢这个计划。"
			},
			{
				"id": 4005,
				"en": "sorry",
				"zh": "对不起",
				"phonetic": "/.../",
				"example": "He found the task sorry.",
				"exampleZh": "他发现这个任务是对不起的。"
			},
			{
				"id": 4006,
				"en": "excuse",
				"zh": "打扰一下",
				"phonetic": "/.../",
				"example": "We should excuse more carefully.",
				"exampleZh": "我们应该更仔细地打扰一下。"
			},
			{
				"id": 4007,
				"en": "welcome",
				"zh": "欢迎；不客气",
				"phonetic": "/.../",
				"example": "She looks welcome today.",
				"exampleZh": "她今天看起来很欢迎；不客气。"
			},
			{
				"id": 4008,
				"en": "congratulations",
				"zh": "恭喜",
				"phonetic": "/ʃən/",
				"example": "The congratulations is very useful.",
				"exampleZh": "恭喜非常有用。"
			},
			{
				"id": 4009,
				"en": "bless",
				"zh": "保佑",
				"phonetic": "/ləs/",
				"example": "They decided to bless the plan.",
				"exampleZh": "他们决定保佑这个计划。"
			},
			{
				"id": 4010,
				"en": "cheers",
				"zh": "干杯",
				"phonetic": "/iː/",
				"example": "I think cheers is important.",
				"exampleZh": "我认为干杯很重要。"
			},
			{
				"id": 4011,
				"en": "greeting",
				"zh": "问候",
				"phonetic": "/ɪŋ/",
				"example": "This is an important greeting.",
				"exampleZh": "这是一个重要的问候。"
			},
			{
				"id": 4012,
				"en": "introduce",
				"zh": "介绍",
				"phonetic": "/.../",
				"example": "She wants to introduce this task.",
				"exampleZh": "她想介绍这个任务。"
			},
			{
				"id": 4013,
				"en": "acquaintance",
				"zh": "熟人",
				"phonetic": "/əns/",
				"example": "The acquaintance is very useful.",
				"exampleZh": "熟人非常有用。"
			},
			{
				"id": 4014,
				"en": "stranger",
				"zh": "陌生人",
				"phonetic": "/ər/",
				"example": "Do you understand this stranger?",
				"exampleZh": "你理解这个陌生人吗？"
			},
			{
				"id": 4015,
				"en": "neighbor",
				"zh": "邻居",
				"phonetic": "/ər/",
				"example": "neighbor plays a key role in our life.",
				"exampleZh": "邻居在我们的生活中起着关键作用。"
			},
			{
				"id": 4016,
				"en": "colleague",
				"zh": "同事",
				"phonetic": "/iː/",
				"example": "This is an important colleague.",
				"exampleZh": "这是一个重要的同事。"
			},
			{
				"id": 4017,
				"en": "roommate",
				"zh": "室友",
				"phonetic": "/uː/",
				"example": "I really like the roommate.",
				"exampleZh": "我真的很喜欢这个室友。"
			},
			{
				"id": 4018,
				"en": "classmate",
				"zh": "同学",
				"phonetic": "/.../",
				"example": "The classmate is very useful.",
				"exampleZh": "同学非常有用。"
			},
			{
				"id": 4019,
				"en": "partner",
				"zh": "伙伴",
				"phonetic": "/ər/",
				"example": "Do you understand this partner?",
				"exampleZh": "你理解这个伙伴吗？"
			},
			{
				"id": 4020,
				"en": "companion",
				"zh": "同伴",
				"phonetic": "/.../",
				"example": "companion plays a key role in our life.",
				"exampleZh": "同伴在我们的生活中起着关键作用。"
			},
			{
				"id": 4021,
				"en": "chat",
				"zh": "聊天",
				"phonetic": "/.../",
				"example": "We should chat more carefully.",
				"exampleZh": "我们应该更仔细地聊天。"
			},
			{
				"id": 4022,
				"en": "conversation",
				"zh": "对话",
				"phonetic": "/ʃən/",
				"example": "I really like the conversation.",
				"exampleZh": "我真的很喜欢这个对话。"
			},
			{
				"id": 4023,
				"en": "discussion",
				"zh": "讨论",
				"phonetic": "/ʃən/",
				"example": "The discussion is very useful.",
				"exampleZh": "讨论非常有用。"
			},
			{
				"id": 4024,
				"en": "gossip",
				"zh": "闲聊",
				"phonetic": "/.../",
				"example": "Do you understand this gossip?",
				"exampleZh": "你理解这个闲聊吗？"
			},
			{
				"id": 4025,
				"en": "rumor",
				"zh": "谣言",
				"phonetic": "/ər/",
				"example": "rumor plays a key role in our life.",
				"exampleZh": "谣言在我们的生活中起着关键作用。"
			},
			{
				"id": 4026,
				"en": "joke",
				"zh": "笑话",
				"phonetic": "/.../",
				"example": "This is an important joke.",
				"exampleZh": "这是一个重要的笑话。"
			},
			{
				"id": 4027,
				"en": "humor",
				"zh": "幽默",
				"phonetic": "/ər/",
				"example": "I really like the humor.",
				"exampleZh": "我真的很喜欢这个幽默。"
			},
			{
				"id": 4028,
				"en": "compliment",
				"zh": "赞美",
				"phonetic": "/mənt/",
				"example": "Let's compliment together.",
				"exampleZh": "让我们一起赞美吧。"
			},
			{
				"id": 4029,
				"en": "praise",
				"zh": "表扬",
				"phonetic": "/eɪ/",
				"example": "They decided to praise the plan.",
				"exampleZh": "他们决定表扬这个计划。"
			},
			{
				"id": 4030,
				"en": "criticize",
				"zh": "批评",
				"phonetic": "/.../",
				"example": "I need to criticize before the deadline.",
				"exampleZh": "我需要在截止日期前批评。"
			},
			{
				"id": 4031,
				"en": "complain",
				"zh": "抱怨",
				"phonetic": "/eɪ/",
				"example": "We should complain more carefully.",
				"exampleZh": "我们应该更仔细地抱怨。"
			},
			{
				"id": 4032,
				"en": "argue",
				"zh": "争论",
				"phonetic": "/.../",
				"example": "She wants to argue this task.",
				"exampleZh": "她想争论这个任务。"
			},
			{
				"id": 4033,
				"en": "debate",
				"zh": "辩论",
				"phonetic": "/.../",
				"example": "Let's debate together.",
				"exampleZh": "让我们一起辩论吧。"
			},
			{
				"id": 4034,
				"en": "agree",
				"zh": "同意",
				"phonetic": "/iː/",
				"example": "They decided to agree the plan.",
				"exampleZh": "他们决定同意这个计划。"
			},
			{
				"id": 4035,
				"en": "disagree",
				"zh": "不同意",
				"phonetic": "/iː/",
				"example": "I need to disagree before the deadline.",
				"exampleZh": "我需要在截止日期前不同意。"
			},
			{
				"id": 4036,
				"en": "approve",
				"zh": "赞成",
				"phonetic": "/.../",
				"example": "We should approve more carefully.",
				"exampleZh": "我们应该更仔细地赞成。"
			},
			{
				"id": 4037,
				"en": "object",
				"zh": "反对",
				"phonetic": "/.../",
				"example": "She wants to object this task.",
				"exampleZh": "她想反对这个任务。"
			},
			{
				"id": 4038,
				"en": "suggest",
				"zh": "建议",
				"phonetic": "/.../",
				"example": "Let's suggest together.",
				"exampleZh": "让我们一起建议吧。"
			},
			{
				"id": 4039,
				"en": "recommend",
				"zh": "推荐",
				"phonetic": "/.../",
				"example": "They decided to recommend the plan.",
				"exampleZh": "他们决定推荐这个计划。"
			},
			{
				"id": 4040,
				"en": "advise",
				"zh": "劝告",
				"phonetic": "/.../",
				"example": "I need to advise before the deadline.",
				"exampleZh": "我需要在截止日期前劝告。"
			},
			{
				"id": 4041,
				"en": "warn",
				"zh": "警告",
				"phonetic": "/.../",
				"example": "We should warn more carefully.",
				"exampleZh": "我们应该更仔细地警告。"
			},
			{
				"id": 4042,
				"en": "remind",
				"zh": "提醒",
				"phonetic": "/.../",
				"example": "She wants to remind this task.",
				"exampleZh": "她想提醒这个任务。"
			},
			{
				"id": 4043,
				"en": "promise",
				"zh": "承诺",
				"phonetic": "/.../",
				"example": "Let's promise together.",
				"exampleZh": "让我们一起承诺吧。"
			},
			{
				"id": 4044,
				"en": "swear",
				"zh": "发誓",
				"phonetic": "/ɑːr/",
				"example": "They decided to swear the plan.",
				"exampleZh": "他们决定发誓这个计划。"
			},
			{
				"id": 4045,
				"en": "apologize",
				"zh": "道歉",
				"phonetic": "/.../",
				"example": "I need to apologize before the deadline.",
				"exampleZh": "我需要在截止日期前道歉。"
			},
			{
				"id": 4046,
				"en": "forgive",
				"zh": "原谅",
				"phonetic": "/.../",
				"example": "We should forgive more carefully.",
				"exampleZh": "我们应该更仔细地原谅。"
			},
			{
				"id": 4047,
				"en": "regret",
				"zh": "后悔",
				"phonetic": "/.../",
				"example": "She wants to regret this task.",
				"exampleZh": "她想后悔这个任务。"
			},
			{
				"id": 4048,
				"en": "comfort",
				"zh": "安慰",
				"phonetic": "/.../",
				"example": "Let's comfort together.",
				"exampleZh": "让我们一起安慰吧。"
			},
			{
				"id": 4049,
				"en": "encourage",
				"zh": "鼓励",
				"phonetic": "/aʊ/",
				"example": "They decided to encourage the plan.",
				"exampleZh": "他们决定鼓励这个计划。"
			},
			{
				"id": 4050,
				"en": "support",
				"zh": "支持",
				"phonetic": "/.../",
				"example": "I need to support before the deadline.",
				"exampleZh": "我需要在截止日期前支持。"
			},
			{
				"id": 4051,
				"en": "congratulate",
				"zh": "祝贺",
				"phonetic": "/.../",
				"example": "We should congratulate more carefully.",
				"exampleZh": "我们应该更仔细地祝贺。"
			},
			{
				"id": 4052,
				"en": "celebrate",
				"zh": "庆祝",
				"phonetic": "/.../",
				"example": "She wants to celebrate this task.",
				"exampleZh": "她想庆祝这个任务。"
			},
			{
				"id": 4053,
				"en": "invite",
				"zh": "邀请",
				"phonetic": "/.../",
				"example": "Let's invite together.",
				"exampleZh": "让我们一起邀请吧。"
			},
			{
				"id": 4054,
				"en": "accept",
				"zh": "接受",
				"phonetic": "/.../",
				"example": "They decided to accept the plan.",
				"exampleZh": "他们决定接受这个计划。"
			},
			{
				"id": 4055,
				"en": "refuse",
				"zh": "拒绝",
				"phonetic": "/.../",
				"example": "I need to refuse before the deadline.",
				"exampleZh": "我需要在截止日期前拒绝。"
			},
			{
				"id": 4056,
				"en": "decline",
				"zh": "婉拒",
				"phonetic": "/.../",
				"example": "We should decline more carefully.",
				"exampleZh": "我们应该更仔细地婉拒。"
			},
			{
				"id": 4057,
				"en": "postpone",
				"zh": "推迟",
				"phonetic": "/.../",
				"example": "She wants to postpone this task.",
				"exampleZh": "她想推迟这个任务。"
			},
			{
				"id": 4058,
				"en": "cancel",
				"zh": "取消",
				"phonetic": "/əns/",
				"example": "Let's cancel together.",
				"exampleZh": "让我们一起取消吧。"
			},
			{
				"id": 4059,
				"en": "confirm",
				"zh": "确认",
				"phonetic": "/.../",
				"example": "They decided to confirm the plan.",
				"exampleZh": "他们决定确认这个计划。"
			},
			{
				"id": 4060,
				"en": "doubt",
				"zh": "怀疑",
				"phonetic": "/aʊ/",
				"example": "I need to doubt before the deadline.",
				"exampleZh": "我需要在截止日期前怀疑。"
			},
			{
				"id": 4061,
				"en": "trust",
				"zh": "信任",
				"phonetic": "/.../",
				"example": "We should trust more carefully.",
				"exampleZh": "我们应该更仔细地信任。"
			},
			{
				"id": 4062,
				"en": "believe",
				"zh": "相信",
				"phonetic": "/.../",
				"example": "She wants to believe this task.",
				"exampleZh": "她想相信这个任务。"
			},
			{
				"id": 4063,
				"en": "suspect",
				"zh": "怀疑",
				"phonetic": "/.../",
				"example": "Let's suspect together.",
				"exampleZh": "让我们一起怀疑吧。"
			},
			{
				"id": 4064,
				"en": "guess",
				"zh": "猜测",
				"phonetic": "/.../",
				"example": "They decided to guess the plan.",
				"exampleZh": "他们决定猜测这个计划。"
			},
			{
				"id": 4065,
				"en": "assume",
				"zh": "假设",
				"phonetic": "/.../",
				"example": "I need to assume before the deadline.",
				"exampleZh": "我需要在截止日期前假设。"
			},
			{
				"id": 4066,
				"en": "wonder",
				"zh": "想知道",
				"phonetic": "/ər/",
				"example": "We should wonder more carefully.",
				"exampleZh": "我们应该更仔细地想知道。"
			},
			{
				"id": 4067,
				"en": "realize",
				"zh": "意识到",
				"phonetic": "/iː/",
				"example": "She wants to realize this task.",
				"exampleZh": "她想意识到这个任务。"
			},
			{
				"id": 4068,
				"en": "remember",
				"zh": "记住",
				"phonetic": "/ər/",
				"example": "Let's remember together.",
				"exampleZh": "让我们一起记住吧。"
			},
			{
				"id": 4069,
				"en": "forget",
				"zh": "忘记",
				"phonetic": "/.../",
				"example": "They decided to forget the plan.",
				"exampleZh": "他们决定忘记这个计划。"
			},
			{
				"id": 4070,
				"en": "recall",
				"zh": "回忆",
				"phonetic": "/.../",
				"example": "I need to recall before the deadline.",
				"exampleZh": "我需要在截止日期前回忆。"
			},
			{
				"id": 4071,
				"en": "imagine",
				"zh": "想象",
				"phonetic": "/.../",
				"example": "We should imagine more carefully.",
				"exampleZh": "我们应该更仔细地想象。"
			},
			{
				"id": 4072,
				"en": "dream",
				"zh": "梦想",
				"phonetic": "/iː/",
				"example": "She wants to dream this task.",
				"exampleZh": "她想梦想这个任务。"
			},
			{
				"id": 4073,
				"en": "hope",
				"zh": "希望",
				"phonetic": "/.../",
				"example": "Let's hope together.",
				"exampleZh": "让我们一起希望吧。"
			},
			{
				"id": 4074,
				"en": "wish",
				"zh": "祝愿",
				"phonetic": "/ʃ/",
				"example": "They decided to wish the plan.",
				"exampleZh": "他们决定祝愿这个计划。"
			},
			{
				"id": 4075,
				"en": "expect",
				"zh": "期望",
				"phonetic": "/.../",
				"example": "I need to expect before the deadline.",
				"exampleZh": "我需要在截止日期前期望。"
			},
			{
				"id": 4076,
				"en": "anticipate",
				"zh": "预期",
				"phonetic": "/.../",
				"example": "We should anticipate more carefully.",
				"exampleZh": "我们应该更仔细地预期。"
			},
			{
				"id": 4077,
				"en": "worry",
				"zh": "担心",
				"phonetic": "/.../",
				"example": "She wants to worry this task.",
				"exampleZh": "她想担心这个任务。"
			},
			{
				"id": 4078,
				"en": "fear",
				"zh": "害怕",
				"phonetic": "/ɑːr/",
				"example": "Let's fear together.",
				"exampleZh": "让我们一起害怕吧。"
			},
			{
				"id": 4079,
				"en": "anxious",
				"zh": "焦虑的",
				"phonetic": "/iəs/",
				"example": "The result is quite anxious.",
				"exampleZh": "结果是相当焦虑的的。"
			},
			{
				"id": 4080,
				"en": "nervous",
				"zh": "紧张的",
				"phonetic": "/əs/",
				"example": "He found the task nervous.",
				"exampleZh": "他发现这个任务是紧张的的。"
			},
			{
				"id": 4081,
				"en": "embarrass",
				"zh": "尴尬",
				"phonetic": "/.../",
				"example": "We should embarrass more carefully.",
				"exampleZh": "我们应该更仔细地尴尬。"
			},
			{
				"id": 4082,
				"en": "ashamed",
				"zh": "羞愧的",
				"phonetic": "/d/",
				"example": "She looks ashamed today.",
				"exampleZh": "她今天看起来很羞愧的。"
			},
			{
				"id": 4083,
				"en": "proud",
				"zh": "自豪的",
				"phonetic": "/aʊ/",
				"example": "It's a proud idea.",
				"exampleZh": "这是一个自豪的的主意。"
			},
			{
				"id": 4084,
				"en": "confident",
				"zh": "自信的",
				"phonetic": "/.../",
				"example": "The result is quite confident.",
				"exampleZh": "结果是相当自信的的。"
			},
			{
				"id": 4085,
				"en": "shy",
				"zh": "害羞的",
				"phonetic": "/.../",
				"example": "He found the task shy.",
				"exampleZh": "他发现这个任务是害羞的的。"
			},
			{
				"id": 4086,
				"en": "brave",
				"zh": "勇敢的",
				"phonetic": "/.../",
				"example": "This is very brave.",
				"exampleZh": "这非常勇敢的。"
			},
			{
				"id": 4087,
				"en": "curious",
				"zh": "好奇的",
				"phonetic": "/iəs/",
				"example": "She looks curious today.",
				"exampleZh": "她今天看起来很好奇的。"
			},
			{
				"id": 4088,
				"en": "impress",
				"zh": "使印象深刻",
				"phonetic": "/.../",
				"example": "Let's impress together.",
				"exampleZh": "让我们一起使印象深刻吧。"
			},
			{
				"id": 4089,
				"en": "surprise",
				"zh": "使惊讶",
				"phonetic": "/.../",
				"example": "They decided to surprise the plan.",
				"exampleZh": "他们决定使惊讶这个计划。"
			},
			{
				"id": 4090,
				"en": "shock",
				"zh": "使震惊",
				"phonetic": "/k/",
				"example": "I need to shock before the deadline.",
				"exampleZh": "我需要在截止日期前使震惊。"
			},
			{
				"id": 4091,
				"en": "amaze",
				"zh": "使惊奇",
				"phonetic": "/.../",
				"example": "We should amaze more carefully.",
				"exampleZh": "我们应该更仔细地使惊奇。"
			},
			{
				"id": 4092,
				"en": "disappoint",
				"zh": "失望",
				"phonetic": "/ɔɪ/",
				"example": "She wants to disappoint this task.",
				"exampleZh": "她想失望这个任务。"
			},
			{
				"id": 4093,
				"en": "frustrate",
				"zh": "使沮丧",
				"phonetic": "/.../",
				"example": "Let's frustrate together.",
				"exampleZh": "让我们一起使沮丧吧。"
			},
			{
				"id": 4094,
				"en": "upset",
				"zh": "使不安",
				"phonetic": "/.../",
				"example": "They decided to upset the plan.",
				"exampleZh": "他们决定使不安这个计划。"
			},
			{
				"id": 4095,
				"en": "annoy",
				"zh": "使恼怒",
				"phonetic": "/ɔɪ/",
				"example": "I need to annoy before the deadline.",
				"exampleZh": "我需要在截止日期前使恼怒。"
			},
			{
				"id": 4096,
				"en": "irritate",
				"zh": "激怒",
				"phonetic": "/.../",
				"example": "We should irritate more carefully.",
				"exampleZh": "我们应该更仔细地激怒。"
			},
			{
				"id": 4097,
				"en": "anger",
				"zh": "愤怒",
				"phonetic": "/ər/",
				"example": "I really like the anger.",
				"exampleZh": "我真的很喜欢这个愤怒。"
			},
			{
				"id": 4098,
				"en": "jealous",
				"zh": "嫉妒的",
				"phonetic": "/əs/",
				"example": "It's a jealous idea.",
				"exampleZh": "这是一个嫉妒的的主意。"
			},
			{
				"id": 4099,
				"en": "envy",
				"zh": "羡慕",
				"phonetic": "/.../",
				"example": "They decided to envy the plan.",
				"exampleZh": "他们决定羡慕这个计划。"
			},
			{
				"id": 4100,
				"en": "grateful",
				"zh": "感激的",
				"phonetic": "/fəl/",
				"example": "He found the task grateful.",
				"exampleZh": "他发现这个任务是感激的的。"
			},
			{
				"id": 4101,
				"en": "thankful",
				"zh": "感谢的",
				"phonetic": "/fəl/",
				"example": "This is very thankful.",
				"exampleZh": "这非常感谢的。"
			},
			{
				"id": 4102,
				"en": "appreciate",
				"zh": "感激",
				"phonetic": "/.../",
				"example": "She wants to appreciate this task.",
				"exampleZh": "她想感激这个任务。"
			},
			{
				"id": 4103,
				"en": "admire",
				"zh": "钦佩",
				"phonetic": "/.../",
				"example": "Let's admire together.",
				"exampleZh": "让我们一起钦佩吧。"
			},
			{
				"id": 4104,
				"en": "respect",
				"zh": "尊重",
				"phonetic": "/.../",
				"example": "They decided to respect the plan.",
				"exampleZh": "他们决定尊重这个计划。"
			},
			{
				"id": 4105,
				"en": "look",
				"zh": "看",
				"phonetic": "/uː/",
				"example": "I need to look before the deadline.",
				"exampleZh": "我需要在截止日期前看。"
			},
			{
				"id": 4106,
				"en": "see",
				"zh": "看见",
				"phonetic": "/iː/",
				"example": "We should see more carefully.",
				"exampleZh": "我们应该更仔细地看见。"
			},
			{
				"id": 4107,
				"en": "watch",
				"zh": "观看",
				"phonetic": "/tʃ/",
				"example": "She wants to watch this task.",
				"exampleZh": "她想观看这个任务。"
			},
			{
				"id": 4108,
				"en": "stare",
				"zh": "盯着",
				"phonetic": "/.../",
				"example": "Let's stare together.",
				"exampleZh": "让我们一起盯着吧。"
			},
			{
				"id": 4109,
				"en": "glance",
				"zh": "瞥一眼",
				"phonetic": "/əns/",
				"example": "They decided to glance the plan.",
				"exampleZh": "他们决定瞥一眼这个计划。"
			},
			{
				"id": 4110,
				"en": "notice",
				"zh": "注意到",
				"phonetic": "/.../",
				"example": "I need to notice before the deadline.",
				"exampleZh": "我需要在截止日期前注意到。"
			},
			{
				"id": 4111,
				"en": "observe",
				"zh": "观察",
				"phonetic": "/.../",
				"example": "We should observe more carefully.",
				"exampleZh": "我们应该更仔细地观察。"
			},
			{
				"id": 4112,
				"en": "hear",
				"zh": "听见",
				"phonetic": "/ɑːr/",
				"example": "She wants to hear this task.",
				"exampleZh": "她想听见这个任务。"
			},
			{
				"id": 4113,
				"en": "listen",
				"zh": "听",
				"phonetic": "/.../",
				"example": "Let's listen together.",
				"exampleZh": "让我们一起听吧。"
			},
			{
				"id": 4114,
				"en": "speak",
				"zh": "说话",
				"phonetic": "/iː/",
				"example": "They decided to speak the plan.",
				"exampleZh": "他们决定说话这个计划。"
			},
			{
				"id": 4115,
				"en": "say",
				"zh": "说",
				"phonetic": "/eɪ/",
				"example": "I need to say before the deadline.",
				"exampleZh": "我需要在截止日期前说。"
			},
			{
				"id": 4116,
				"en": "tell",
				"zh": "告诉",
				"phonetic": "/.../",
				"example": "We should tell more carefully.",
				"exampleZh": "我们应该更仔细地告诉。"
			},
			{
				"id": 4117,
				"en": "ask",
				"zh": "问",
				"phonetic": "/.../",
				"example": "She wants to ask this task.",
				"exampleZh": "她想问这个任务。"
			},
			{
				"id": 4118,
				"en": "answer",
				"zh": "回答",
				"phonetic": "/ər/",
				"example": "Let's answer together.",
				"exampleZh": "让我们一起回答吧。"
			},
			{
				"id": 4119,
				"en": "reply",
				"zh": "回复",
				"phonetic": "/li/",
				"example": "They decided to reply the plan.",
				"exampleZh": "他们决定回复这个计划。"
			},
			{
				"id": 4120,
				"en": "respond",
				"zh": "回应",
				"phonetic": "/.../",
				"example": "I need to respond before the deadline.",
				"exampleZh": "我需要在截止日期前回应。"
			},
			{
				"id": 4121,
				"en": "explain",
				"zh": "解释",
				"phonetic": "/eɪ/",
				"example": "We should explain more carefully.",
				"exampleZh": "我们应该更仔细地解释。"
			},
			{
				"id": 4122,
				"en": "describe",
				"zh": "描述",
				"phonetic": "/.../",
				"example": "She wants to describe this task.",
				"exampleZh": "她想描述这个任务。"
			},
			{
				"id": 4123,
				"en": "mention",
				"zh": "提及",
				"phonetic": "/ʃən/",
				"example": "Let's mention together.",
				"exampleZh": "让我们一起提及吧。"
			},
			{
				"id": 4124,
				"en": "whisper",
				"zh": "耳语",
				"phonetic": "/ər/",
				"example": "They decided to whisper the plan.",
				"exampleZh": "他们决定耳语这个计划。"
			},
			{
				"id": 4125,
				"en": "shout",
				"zh": "喊叫",
				"phonetic": "/aʊ/",
				"example": "I need to shout before the deadline.",
				"exampleZh": "我需要在截止日期前喊叫。"
			},
			{
				"id": 4126,
				"en": "scream",
				"zh": "尖叫",
				"phonetic": "/iː/",
				"example": "We should scream more carefully.",
				"exampleZh": "我们应该更仔细地尖叫。"
			},
			{
				"id": 4127,
				"en": "cry",
				"zh": "哭喊",
				"phonetic": "/.../",
				"example": "She wants to cry this task.",
				"exampleZh": "她想哭喊这个任务。"
			},
			{
				"id": 4128,
				"en": "laugh",
				"zh": "笑",
				"phonetic": "/ɔː/",
				"example": "Let's laugh together.",
				"exampleZh": "让我们一起笑吧。"
			},
			{
				"id": 4129,
				"en": "smile",
				"zh": "微笑",
				"phonetic": "/.../",
				"example": "They decided to smile the plan.",
				"exampleZh": "他们决定微笑这个计划。"
			},
			{
				"id": 4130,
				"en": "frown",
				"zh": "皱眉",
				"phonetic": "/aʊ/",
				"example": "I need to frown before the deadline.",
				"exampleZh": "我需要在截止日期前皱眉。"
			},
			{
				"id": 4131,
				"en": "nod",
				"zh": "点头",
				"phonetic": "/.../",
				"example": "We should nod more carefully.",
				"exampleZh": "我们应该更仔细地点头。"
			},
			{
				"id": 4132,
				"en": "shake",
				"zh": "摇头",
				"phonetic": "/.../",
				"example": "She wants to shake this task.",
				"exampleZh": "她想摇头这个任务。"
			},
			{
				"id": 4133,
				"en": "gesture",
				"zh": "手势",
				"phonetic": "/tʃər/",
				"example": "The gesture is very useful.",
				"exampleZh": "手势非常有用。"
			},
			{
				"id": 4134,
				"en": "express",
				"zh": "表达",
				"phonetic": "/.../",
				"example": "They decided to express the plan.",
				"exampleZh": "他们决定表达这个计划。"
			},
			{
				"id": 4135,
				"en": "share",
				"zh": "分享",
				"phonetic": "/.../",
				"example": "I need to share before the deadline.",
				"exampleZh": "我需要在截止日期前分享。"
			},
			{
				"id": 4136,
				"en": "talk",
				"zh": "交谈",
				"phonetic": "/.../",
				"example": "We should talk more carefully.",
				"exampleZh": "我们应该更仔细地交谈。"
			},
			{
				"id": 4137,
				"en": "discuss",
				"zh": "讨论",
				"phonetic": "/.../",
				"example": "She wants to discuss this task.",
				"exampleZh": "她想讨论这个任务。"
			},
			{
				"id": 4138,
				"en": "interview",
				"zh": "采访",
				"phonetic": "/.../",
				"example": "The interview is very useful.",
				"exampleZh": "采访非常有用。"
			},
			{
				"id": 4139,
				"en": "appointment",
				"zh": "约会",
				"phonetic": "/mənt/",
				"example": "Do you understand this appointment?",
				"exampleZh": "你理解这个约会吗？"
			},
			{
				"id": 4140,
				"en": "date",
				"zh": "约会",
				"phonetic": "/.../",
				"example": "date plays a key role in our life.",
				"exampleZh": "约会在我们的生活中起着关键作用。"
			},
			{
				"id": 4141,
				"en": "meet",
				"zh": "见面",
				"phonetic": "/iː/",
				"example": "We should meet more carefully.",
				"exampleZh": "我们应该更仔细地见面。"
			},
			{
				"id": 4142,
				"en": "visit",
				"zh": "拜访",
				"phonetic": "/.../",
				"example": "She wants to visit this task.",
				"exampleZh": "她想拜访这个任务。"
			},
			{
				"id": 4143,
				"en": "guest",
				"zh": "客人",
				"phonetic": "/.../",
				"example": "The guest is very useful.",
				"exampleZh": "客人非常有用。"
			},
			{
				"id": 4144,
				"en": "host",
				"zh": "主人",
				"phonetic": "/.../",
				"example": "Do you understand this host?",
				"exampleZh": "你理解这个主人吗？"
			},
			{
				"id": 4145,
				"en": "help",
				"zh": "帮助",
				"phonetic": "/.../",
				"example": "I need to help before the deadline.",
				"exampleZh": "我需要在截止日期前帮助。"
			},
			{
				"id": 4146,
				"en": "favor",
				"zh": "帮忙",
				"phonetic": "/ər/",
				"example": "This is an important favor.",
				"exampleZh": "这是一个重要的帮忙。"
			},
			{
				"id": 4147,
				"en": "request",
				"zh": "请求",
				"phonetic": "/kw/",
				"example": "She wants to request this task.",
				"exampleZh": "她想请求这个任务。"
			},
			{
				"id": 4148,
				"en": "offer",
				"zh": "提供",
				"phonetic": "/ər/",
				"example": "Let's offer together.",
				"exampleZh": "让我们一起提供吧。"
			},
			{
				"id": 4149,
				"en": "provide",
				"zh": "提供",
				"phonetic": "/.../",
				"example": "They decided to provide the plan.",
				"exampleZh": "他们决定提供这个计划。"
			},
			{
				"id": 4150,
				"en": "lend",
				"zh": "借出",
				"phonetic": "/.../",
				"example": "I need to lend before the deadline.",
				"exampleZh": "我需要在截止日期前借出。"
			},
			{
				"id": 4151,
				"en": "borrow",
				"zh": "借入",
				"phonetic": "/aʊ/",
				"example": "We should borrow more carefully.",
				"exampleZh": "我们应该更仔细地借入。"
			},
			{
				"id": 4152,
				"en": "return",
				"zh": "归还",
				"phonetic": "/.../",
				"example": "She wants to return this task.",
				"exampleZh": "她想归还这个任务。"
			},
			{
				"id": 4153,
				"en": "exchange",
				"zh": "交换",
				"phonetic": "/.../",
				"example": "Let's exchange together.",
				"exampleZh": "让我们一起交换吧。"
			},
			{
				"id": 4154,
				"en": "buy",
				"zh": "买",
				"phonetic": "/.../",
				"example": "They decided to buy the plan.",
				"exampleZh": "他们决定买这个计划。"
			},
			{
				"id": 4155,
				"en": "sell",
				"zh": "卖",
				"phonetic": "/.../",
				"example": "I need to sell before the deadline.",
				"exampleZh": "我需要在截止日期前卖。"
			},
			{
				"id": 4156,
				"en": "afford",
				"zh": "买得起",
				"phonetic": "/.../",
				"example": "We should afford more carefully.",
				"exampleZh": "我们应该更仔细地买得起。"
			},
			{
				"id": 4157,
				"en": "cost",
				"zh": "花费",
				"phonetic": "/.../",
				"example": "I really like the cost.",
				"exampleZh": "我真的很喜欢这个花费。"
			},
			{
				"id": 4158,
				"en": "price",
				"zh": "价格",
				"phonetic": "/.../",
				"example": "The price is very useful.",
				"exampleZh": "价格非常有用。"
			},
			{
				"id": 4159,
				"en": "expensive",
				"zh": "贵的",
				"phonetic": "/.../",
				"example": "The result is quite expensive.",
				"exampleZh": "结果是相当贵的的。"
			},
			{
				"id": 4160,
				"en": "cheap",
				"zh": "便宜的",
				"phonetic": "/iː/",
				"example": "He found the task cheap.",
				"exampleZh": "他发现这个任务是便宜的的。"
			},
			{
				"id": 4161,
				"en": "worth",
				"zh": "值得",
				"phonetic": "/θ/",
				"example": "This is very worth.",
				"exampleZh": "这非常值得。"
			},
			{
				"id": 4162,
				"en": "free",
				"zh": "免费的",
				"phonetic": "/iː/",
				"example": "She looks free today.",
				"exampleZh": "她今天看起来很免费的。"
			},
			{
				"id": 4163,
				"en": "bargain",
				"zh": "讨价还价",
				"phonetic": "/eɪ/",
				"example": "Let's bargain together.",
				"exampleZh": "让我们一起讨价还价吧。"
			},
			{
				"id": 4164,
				"en": "discount",
				"zh": "折扣",
				"phonetic": "/aʊ/",
				"example": "Do you understand this discount?",
				"exampleZh": "你理解这个折扣吗？"
			},
			{
				"id": 4165,
				"en": "receipt",
				"zh": "收据",
				"phonetic": "/.../",
				"example": "receipt plays a key role in our life.",
				"exampleZh": "收据在我们的生活中起着关键作用。"
			},
			{
				"id": 4166,
				"en": "refund",
				"zh": "退款",
				"phonetic": "/.../",
				"example": "This is an important refund.",
				"exampleZh": "这是一个重要的退款。"
			},
			{
				"id": 4167,
				"en": "change",
				"zh": "零钱",
				"phonetic": "/.../",
				"example": "I really like the change.",
				"exampleZh": "我真的很喜欢这个零钱。"
			},
			{
				"id": 4168,
				"en": "tip",
				"zh": "小费",
				"phonetic": "/.../",
				"example": "The tip is very useful.",
				"exampleZh": "小费非常有用。"
			},
			{
				"id": 4169,
				"en": "bill",
				"zh": "账单",
				"phonetic": "/.../",
				"example": "Do you understand this bill?",
				"exampleZh": "你理解这个账单吗？"
			},
			{
				"id": 4170,
				"en": "charge",
				"zh": "收费",
				"phonetic": "/.../",
				"example": "I need to charge before the deadline.",
				"exampleZh": "我需要在截止日期前收费。"
			},
			{
				"id": 4171,
				"en": "pay",
				"zh": "支付",
				"phonetic": "/eɪ/",
				"example": "We should pay more carefully.",
				"exampleZh": "我们应该更仔细地支付。"
			},
			{
				"id": 4172,
				"en": "cash",
				"zh": "现金",
				"phonetic": "/ʃ/",
				"example": "I really like the cash.",
				"exampleZh": "我真的很喜欢这个现金。"
			},
			{
				"id": 4173,
				"en": "credit",
				"zh": "信用",
				"phonetic": "/.../",
				"example": "The credit is very useful.",
				"exampleZh": "信用非常有用。"
			},
			{
				"id": 4174,
				"en": "order",
				"zh": "点菜；命令",
				"phonetic": "/ər/",
				"example": "They decided to order the plan.",
				"exampleZh": "他们决定点菜；命令这个计划。"
			},
			{
				"id": 4175,
				"en": "serve",
				"zh": "服务",
				"phonetic": "/.../",
				"example": "I need to serve before the deadline.",
				"exampleZh": "我需要在截止日期前服务。"
			},
			{
				"id": 4176,
				"en": "deliver",
				"zh": "递送",
				"phonetic": "/ər/",
				"example": "We should deliver more carefully.",
				"exampleZh": "我们应该更仔细地递送。"
			},
			{
				"id": 4177,
				"en": "weather",
				"zh": "天气",
				"phonetic": "/ər/",
				"example": "I really like the weather.",
				"exampleZh": "我真的很喜欢这个天气。"
			},
			{
				"id": 4178,
				"en": "sunny",
				"zh": "晴的",
				"phonetic": "/.../",
				"example": "It's a sunny idea.",
				"exampleZh": "这是一个晴的的主意。"
			},
			{
				"id": 4179,
				"en": "rainy",
				"zh": "下雨的",
				"phonetic": "/eɪ/",
				"example": "The result is quite rainy.",
				"exampleZh": "结果是相当下雨的的。"
			},
			{
				"id": 4180,
				"en": "cloudy",
				"zh": "多云的",
				"phonetic": "/aʊ/",
				"example": "He found the task cloudy.",
				"exampleZh": "他发现这个任务是多云的的。"
			},
			{
				"id": 4181,
				"en": "windy",
				"zh": "有风的",
				"phonetic": "/.../",
				"example": "This is very windy.",
				"exampleZh": "这非常有风的。"
			},
			{
				"id": 4182,
				"en": "foggy",
				"zh": "有雾的",
				"phonetic": "/.../",
				"example": "She looks foggy today.",
				"exampleZh": "她今天看起来很有雾的。"
			},
			{
				"id": 4183,
				"en": "snowy",
				"zh": "下雪的",
				"phonetic": "/aʊ/",
				"example": "It's a snowy idea.",
				"exampleZh": "这是一个下雪的的主意。"
			},
			{
				"id": 4184,
				"en": "storm",
				"zh": "暴风雨",
				"phonetic": "/.../",
				"example": "Do you understand this storm?",
				"exampleZh": "你理解这个暴风雨吗？"
			},
			{
				"id": 4185,
				"en": "temperature",
				"zh": "温度",
				"phonetic": "/tʃər/",
				"example": "temperature plays a key role in our life.",
				"exampleZh": "温度在我们的生活中起着关键作用。"
			},
			{
				"id": 4186,
				"en": "hot",
				"zh": "热的",
				"phonetic": "/.../",
				"example": "This is very hot.",
				"exampleZh": "这非常热的。"
			},
			{
				"id": 4187,
				"en": "cold",
				"zh": "冷的",
				"phonetic": "/.../",
				"example": "She looks cold today.",
				"exampleZh": "她今天看起来很冷的。"
			},
			{
				"id": 4188,
				"en": "warm",
				"zh": "暖的",
				"phonetic": "/.../",
				"example": "It's a warm idea.",
				"exampleZh": "这是一个暖的的主意。"
			},
			{
				"id": 4189,
				"en": "cool",
				"zh": "凉爽的",
				"phonetic": "/uː/",
				"example": "The result is quite cool.",
				"exampleZh": "结果是相当凉爽的的。"
			},
			{
				"id": 4190,
				"en": "humid",
				"zh": "潮湿的",
				"phonetic": "/.../",
				"example": "He found the task humid.",
				"exampleZh": "他发现这个任务是潮湿的的。"
			},
			{
				"id": 4191,
				"en": "dry",
				"zh": "干燥的",
				"phonetic": "/.../",
				"example": "This is very dry.",
				"exampleZh": "这非常干燥的。"
			},
			{
				"id": 4192,
				"en": "season",
				"zh": "季节",
				"phonetic": "/iː/",
				"example": "I really like the season.",
				"exampleZh": "我真的很喜欢这个季节。"
			},
			{
				"id": 4193,
				"en": "spring",
				"zh": "春天",
				"phonetic": "/ɪŋ/",
				"example": "The spring is very useful.",
				"exampleZh": "春天非常有用。"
			},
			{
				"id": 4194,
				"en": "summer",
				"zh": "夏天",
				"phonetic": "/ər/",
				"example": "Do you understand this summer?",
				"exampleZh": "你理解这个夏天吗？"
			},
			{
				"id": 4195,
				"en": "autumn",
				"zh": "秋天",
				"phonetic": "/ɔː/",
				"example": "autumn plays a key role in our life.",
				"exampleZh": "秋天在我们的生活中起着关键作用。"
			},
			{
				"id": 4196,
				"en": "winter",
				"zh": "冬天",
				"phonetic": "/ər/",
				"example": "This is an important winter.",
				"exampleZh": "这是一个重要的冬天。"
			},
			{
				"id": 4197,
				"en": "direction",
				"zh": "方向",
				"phonetic": "/ʃən/",
				"example": "I really like the direction.",
				"exampleZh": "我真的很喜欢这个方向。"
			},
			{
				"id": 4198,
				"en": "left",
				"zh": "左边",
				"phonetic": "/.../",
				"example": "The left is very useful.",
				"exampleZh": "左边非常有用。"
			},
			{
				"id": 4199,
				"en": "right",
				"zh": "右边",
				"phonetic": "/aɪt/",
				"example": "Do you understand this right?",
				"exampleZh": "你理解这个右边吗？"
			},
			{
				"id": 4200,
				"en": "straight",
				"zh": "直的",
				"phonetic": "/aɪt/",
				"example": "He found the task straight.",
				"exampleZh": "他发现这个任务是直的的。"
			},
			{
				"id": 4201,
				"en": "forward",
				"zh": "向前",
				"phonetic": "/.../",
				"example": "They worked forward on the project.",
				"exampleZh": "他们向前地在这个项目上工作。"
			},
			{
				"id": 4202,
				"en": "backward",
				"zh": "向后",
				"phonetic": "/.../",
				"example": "He spoke backward to the audience.",
				"exampleZh": "他向后地对观众说话。"
			},
			{
				"id": 4203,
				"en": "near",
				"zh": "近的",
				"phonetic": "/ɑːr/",
				"example": "It's a near idea.",
				"exampleZh": "这是一个近的的主意。"
			},
			{
				"id": 4204,
				"en": "far",
				"zh": "远的",
				"phonetic": "/ɑːr/",
				"example": "The result is quite far.",
				"exampleZh": "结果是相当远的的。"
			},
			{
				"id": 4205,
				"en": "distance",
				"zh": "距离",
				"phonetic": "/əns/",
				"example": "distance plays a key role in our life.",
				"exampleZh": "距离在我们的生活中起着关键作用。"
			},
			{
				"id": 4206,
				"en": "address",
				"zh": "地址",
				"phonetic": "/.../",
				"example": "This is an important address.",
				"exampleZh": "这是一个重要的地址。"
			},
			{
				"id": 4207,
				"en": "location",
				"zh": "位置",
				"phonetic": "/ʃən/",
				"example": "I really like the location.",
				"exampleZh": "我真的很喜欢这个位置。"
			},
			{
				"id": 4208,
				"en": "corner",
				"zh": "拐角",
				"phonetic": "/ər/",
				"example": "The corner is very useful.",
				"exampleZh": "拐角非常有用。"
			},
			{
				"id": 4209,
				"en": "crossing",
				"zh": "十字路口",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this crossing?",
				"exampleZh": "你理解这个十字路口吗？"
			},
			{
				"id": 4210,
				"en": "traffic",
				"zh": "交通",
				"phonetic": "/.../",
				"example": "traffic plays a key role in our life.",
				"exampleZh": "交通在我们的生活中起着关键作用。"
			},
			{
				"id": 4211,
				"en": "station",
				"zh": "车站",
				"phonetic": "/ʃən/",
				"example": "This is an important station.",
				"exampleZh": "这是一个重要的车站。"
			},
			{
				"id": 4212,
				"en": "stop",
				"zh": "车站；停止",
				"phonetic": "/.../",
				"example": "I really like the stop.",
				"exampleZh": "我真的很喜欢这个车站；停止。"
			},
			{
				"id": 4213,
				"en": "route",
				"zh": "路线",
				"phonetic": "/aʊ/",
				"example": "The route is very useful.",
				"exampleZh": "路线非常有用。"
			},
			{
				"id": 4214,
				"en": "destination",
				"zh": "目的地",
				"phonetic": "/ʃən/",
				"example": "Do you understand this destination?",
				"exampleZh": "你理解这个目的地吗？"
			},
			{
				"id": 4215,
				"en": "hurry",
				"zh": "赶紧",
				"phonetic": "/.../",
				"example": "I need to hurry before the deadline.",
				"exampleZh": "我需要在截止日期前赶紧。"
			},
			{
				"id": 4216,
				"en": "rush",
				"zh": "冲",
				"phonetic": "/ʃ/",
				"example": "We should rush more carefully.",
				"exampleZh": "我们应该更仔细地冲。"
			},
			{
				"id": 4217,
				"en": "wait",
				"zh": "等",
				"phonetic": "/eɪ/",
				"example": "She wants to wait this task.",
				"exampleZh": "她想等这个任务。"
			},
			{
				"id": 4218,
				"en": "delay",
				"zh": "延误",
				"phonetic": "/eɪ/",
				"example": "Let's delay together.",
				"exampleZh": "让我们一起延误吧。"
			},
			{
				"id": 4219,
				"en": "early",
				"zh": "早的",
				"phonetic": "/li/",
				"example": "The result is quite early.",
				"exampleZh": "结果是相当早的的。"
			},
			{
				"id": 4220,
				"en": "late",
				"zh": "晚的",
				"phonetic": "/.../",
				"example": "He found the task late.",
				"exampleZh": "他发现这个任务是晚的的。"
			},
			{
				"id": 4221,
				"en": "on time",
				"zh": "准时",
				"phonetic": "/.../",
				"example": "She on time agreed with us.",
				"exampleZh": "她准时地同意了我们的意见。"
			},
			{
				"id": 4222,
				"en": "busy",
				"zh": "忙碌的",
				"phonetic": "/.../",
				"example": "She looks busy today.",
				"exampleZh": "她今天看起来很忙碌的。"
			},
			{
				"id": 4223,
				"en": "available",
				"zh": "有空的",
				"phonetic": "/əbəl/",
				"example": "It's a available idea.",
				"exampleZh": "这是一个有空的的主意。"
			},
			{
				"id": 4224,
				"en": "convenient",
				"zh": "方便的",
				"phonetic": "/.../",
				"example": "The result is quite convenient.",
				"exampleZh": "结果是相当方便的的。"
			},
			{
				"id": 4225,
				"en": "wonderful",
				"zh": "精彩的",
				"phonetic": "/fəl/",
				"example": "He found the task wonderful.",
				"exampleZh": "他发现这个任务是精彩的的。"
			},
			{
				"id": 4226,
				"en": "terrible",
				"zh": "糟糕的",
				"phonetic": "/ɪbəl/",
				"example": "This is very terrible.",
				"exampleZh": "这非常糟糕的。"
			},
			{
				"id": 4227,
				"en": "fantastic",
				"zh": "极好的",
				"phonetic": "/.../",
				"example": "She looks fantastic today.",
				"exampleZh": "她今天看起来很极好的。"
			},
			{
				"id": 4228,
				"en": "awful",
				"zh": "可怕的",
				"phonetic": "/fəl/",
				"example": "It's a awful idea.",
				"exampleZh": "这是一个可怕的的主意。"
			},
			{
				"id": 4229,
				"en": "lovely",
				"zh": "可爱的",
				"phonetic": "/li/",
				"example": "The result is quite lovely.",
				"exampleZh": "结果是相当可爱的的。"
			},
			{
				"id": 4230,
				"en": "pretty",
				"zh": "漂亮的",
				"phonetic": "/.../",
				"example": "He found the task pretty.",
				"exampleZh": "他发现这个任务是漂亮的的。"
			},
			{
				"id": 4231,
				"en": "handsome",
				"zh": "英俊的",
				"phonetic": "/.../",
				"example": "This is very handsome.",
				"exampleZh": "这非常英俊的。"
			},
			{
				"id": 4232,
				"en": "ugly",
				"zh": "丑的",
				"phonetic": "/li/",
				"example": "She looks ugly today.",
				"exampleZh": "她今天看起来很丑的。"
			},
			{
				"id": 4233,
				"en": "thin",
				"zh": "瘦的",
				"phonetic": "/.../",
				"example": "It's a thin idea.",
				"exampleZh": "这是一个瘦的的主意。"
			},
			{
				"id": 4234,
				"en": "fat",
				"zh": "胖的",
				"phonetic": "/.../",
				"example": "The result is quite fat.",
				"exampleZh": "结果是相当胖的的。"
			},
			{
				"id": 4235,
				"en": "fit",
				"zh": "健康的",
				"phonetic": "/.../",
				"example": "He found the task fit.",
				"exampleZh": "他发现这个任务是健康的的。"
			},
			{
				"id": 4236,
				"en": "healthy",
				"zh": "健康的",
				"phonetic": "/iː/",
				"example": "This is very healthy.",
				"exampleZh": "这非常健康的。"
			},
			{
				"id": 4237,
				"en": "sick",
				"zh": "生病的",
				"phonetic": "/k/",
				"example": "She looks sick today.",
				"exampleZh": "她今天看起来很生病的。"
			},
			{
				"id": 4238,
				"en": "ill",
				"zh": "病的",
				"phonetic": "/.../",
				"example": "It's a ill idea.",
				"exampleZh": "这是一个病的的主意。"
			},
			{
				"id": 4239,
				"en": "tired",
				"zh": "累的",
				"phonetic": "/d/",
				"example": "The result is quite tired.",
				"exampleZh": "结果是相当累的的。"
			},
			{
				"id": 4240,
				"en": "sleepy",
				"zh": "困的",
				"phonetic": "/iː/",
				"example": "He found the task sleepy.",
				"exampleZh": "他发现这个任务是困的的。"
			},
			{
				"id": 4241,
				"en": "hungry",
				"zh": "饿的",
				"phonetic": "/.../",
				"example": "This is very hungry.",
				"exampleZh": "这非常饿的。"
			},
			{
				"id": 4242,
				"en": "thirsty",
				"zh": "渴的",
				"phonetic": "/.../",
				"example": "She looks thirsty today.",
				"exampleZh": "她今天看起来很渴的。"
			},
			{
				"id": 4243,
				"en": "full",
				"zh": "饱的",
				"phonetic": "/.../",
				"example": "It's a full idea.",
				"exampleZh": "这是一个饱的的主意。"
			},
			{
				"id": 4244,
				"en": "lazy",
				"zh": "懒的",
				"phonetic": "/.../",
				"example": "The result is quite lazy.",
				"exampleZh": "结果是相当懒的的。"
			},
			{
				"id": 4245,
				"en": "diligent",
				"zh": "勤奋的",
				"phonetic": "/.../",
				"example": "He found the task diligent.",
				"exampleZh": "他发现这个任务是勤奋的的。"
			},
			{
				"id": 4246,
				"en": "hardworking",
				"zh": "努力工作的",
				"phonetic": "/ɪŋ/",
				"example": "This is very hardworking.",
				"exampleZh": "这非常努力工作的。"
			},
			{
				"id": 4247,
				"en": "relax",
				"zh": "放松",
				"phonetic": "/.../",
				"example": "She wants to relax this task.",
				"exampleZh": "她想放松这个任务。"
			},
			{
				"id": 4248,
				"en": "rest",
				"zh": "休息",
				"phonetic": "/.../",
				"example": "Let's rest together.",
				"exampleZh": "让我们一起休息吧。"
			},
			{
				"id": 4249,
				"en": "break",
				"zh": "休息",
				"phonetic": "/iː/",
				"example": "Do you understand this break?",
				"exampleZh": "你理解这个休息吗？"
			},
			{
				"id": 4250,
				"en": "holiday",
				"zh": "假期",
				"phonetic": "/eɪ/",
				"example": "holiday plays a key role in our life.",
				"exampleZh": "假期在我们的生活中起着关键作用。"
			},
			{
				"id": 4251,
				"en": "vacation",
				"zh": "假期",
				"phonetic": "/ʃən/",
				"example": "This is an important vacation.",
				"exampleZh": "这是一个重要的假期。"
			},
			{
				"id": 4252,
				"en": "travel",
				"zh": "旅行",
				"phonetic": "/.../",
				"example": "She wants to travel this task.",
				"exampleZh": "她想旅行这个任务。"
			},
			{
				"id": 4253,
				"en": "trip",
				"zh": "旅行",
				"phonetic": "/.../",
				"example": "The trip is very useful.",
				"exampleZh": "旅行非常有用。"
			},
			{
				"id": 4254,
				"en": "journey",
				"zh": "旅程",
				"phonetic": "/aʊ/",
				"example": "Do you understand this journey?",
				"exampleZh": "你理解这个旅程吗？"
			},
			{
				"id": 4255,
				"en": "tour",
				"zh": "观光",
				"phonetic": "/aʊ/",
				"example": "tour plays a key role in our life.",
				"exampleZh": "观光在我们的生活中起着关键作用。"
			},
			{
				"id": 4256,
				"en": "sightseeing",
				"zh": "观光",
				"phonetic": "/ɪŋ/",
				"example": "This is an important sightseeing.",
				"exampleZh": "这是一个重要的观光。"
			},
			{
				"id": 4257,
				"en": "passport",
				"zh": "护照",
				"phonetic": "/.../",
				"example": "I really like the passport.",
				"exampleZh": "我真的很喜欢这个护照。"
			},
			{
				"id": 4258,
				"en": "visa",
				"zh": "签证",
				"phonetic": "/.../",
				"example": "The visa is very useful.",
				"exampleZh": "签证非常有用。"
			},
			{
				"id": 4259,
				"en": "ticket",
				"zh": "票",
				"phonetic": "/.../",
				"example": "Do you understand this ticket?",
				"exampleZh": "你理解这个票吗？"
			},
			{
				"id": 4260,
				"en": "luggage",
				"zh": "行李",
				"phonetic": "/.../",
				"example": "luggage plays a key role in our life.",
				"exampleZh": "行李在我们的生活中起着关键作用。"
			},
			{
				"id": 4261,
				"en": "check",
				"zh": "入住",
				"phonetic": "/k/",
				"example": "We should check more carefully.",
				"exampleZh": "我们应该更仔细地入住。"
			},
			{
				"id": 4262,
				"en": "reserve",
				"zh": "预订",
				"phonetic": "/.../",
				"example": "She wants to reserve this task.",
				"exampleZh": "她想预订这个任务。"
			},
			{
				"id": 4263,
				"en": "book",
				"zh": "预订",
				"phonetic": "/uː/",
				"example": "Let's book together.",
				"exampleZh": "让我们一起预订吧。"
			},
			{
				"id": 4264,
				"en": "room",
				"zh": "房间",
				"phonetic": "/uː/",
				"example": "Do you understand this room?",
				"exampleZh": "你理解这个房间吗？"
			},
			{
				"id": 4265,
				"en": "single",
				"zh": "单人的",
				"phonetic": "/.../",
				"example": "He found the task single.",
				"exampleZh": "他发现这个任务是单人的的。"
			},
			{
				"id": 4266,
				"en": "double",
				"zh": "双人的",
				"phonetic": "/aʊ/",
				"example": "This is very double.",
				"exampleZh": "这非常双人的。"
			},
			{
				"id": 4267,
				"en": "floor",
				"zh": "楼层",
				"phonetic": "/ər/",
				"example": "I really like the floor.",
				"exampleZh": "我真的很喜欢这个楼层。"
			},
			{
				"id": 4268,
				"en": "elevator",
				"zh": "电梯",
				"phonetic": "/ər/",
				"example": "The elevator is very useful.",
				"exampleZh": "电梯非常有用。"
			},
			{
				"id": 4269,
				"en": "stairs",
				"zh": "楼梯",
				"phonetic": "/eɪ/",
				"example": "Do you understand this stairs?",
				"exampleZh": "你理解这个楼梯吗？"
			},
			{
				"id": 4270,
				"en": "key",
				"zh": "钥匙",
				"phonetic": "/.../",
				"example": "key plays a key role in our life.",
				"exampleZh": "钥匙在我们的生活中起着关键作用。"
			},
			{
				"id": 4271,
				"en": "front",
				"zh": "前台",
				"phonetic": "/.../",
				"example": "This is an important front.",
				"exampleZh": "这是一个重要的前台。"
			},
			{
				"id": 4272,
				"en": "service",
				"zh": "服务",
				"phonetic": "/.../",
				"example": "I really like the service.",
				"exampleZh": "我真的很喜欢这个服务。"
			},
			{
				"id": 4273,
				"en": "housekeeping",
				"zh": "客房服务",
				"phonetic": "/ɪŋ/",
				"example": "The housekeeping is very useful.",
				"exampleZh": "客房服务非常有用。"
			},
			{
				"id": 4274,
				"en": "wake-up",
				"zh": "叫醒",
				"phonetic": "/.../",
				"example": "Do you understand this wake-up?",
				"exampleZh": "你理解这个叫醒吗？"
			},
			{
				"id": 4275,
				"en": "complaint",
				"zh": "投诉",
				"phonetic": "/eɪ/",
				"example": "I need to complaint before the deadline.",
				"exampleZh": "我需要在截止日期前投诉。"
			},
			{
				"id": 4276,
				"en": "problem",
				"zh": "问题",
				"phonetic": "/.../",
				"example": "This is an important problem.",
				"exampleZh": "这是一个重要的问题。"
			},
			{
				"id": 4277,
				"en": "fix",
				"zh": "修理",
				"phonetic": "/.../",
				"example": "She wants to fix this task.",
				"exampleZh": "她想修理这个任务。"
			},
			{
				"id": 4278,
				"en": "repair",
				"zh": "修理",
				"phonetic": "/eɪ/",
				"example": "Let's repair together.",
				"exampleZh": "让我们一起修理吧。"
			},
			{
				"id": 4279,
				"en": "broken",
				"zh": "坏了的",
				"phonetic": "/.../",
				"example": "The result is quite broken.",
				"exampleZh": "结果是相当坏了的的。"
			},
			{
				"id": 4280,
				"en": "leak",
				"zh": "漏水",
				"phonetic": "/iː/",
				"example": "I need to leak before the deadline.",
				"exampleZh": "我需要在截止日期前漏水。"
			},
			{
				"id": 4281,
				"en": "noise",
				"zh": "噪音",
				"phonetic": "/ɔɪ/",
				"example": "This is an important noise.",
				"exampleZh": "这是一个重要的噪音。"
			},
			{
				"id": 4282,
				"en": "quiet",
				"zh": "安静的",
				"phonetic": "/kw/",
				"example": "She looks quiet today.",
				"exampleZh": "她今天看起来很安静的。"
			},
			{
				"id": 4283,
				"en": "disturb",
				"zh": "打扰",
				"phonetic": "/.../",
				"example": "Let's disturb together.",
				"exampleZh": "让我们一起打扰吧。"
			},
			{
				"id": 4284,
				"en": "bother",
				"zh": "打扰",
				"phonetic": "/ər/",
				"example": "They decided to bother the plan.",
				"exampleZh": "他们决定打扰这个计划。"
			},
			{
				"id": 4285,
				"en": "mind",
				"zh": "介意",
				"phonetic": "/.../",
				"example": "I need to mind before the deadline.",
				"exampleZh": "我需要在截止日期前介意。"
			},
			{
				"id": 4286,
				"en": "care",
				"zh": "在乎",
				"phonetic": "/.../",
				"example": "We should care more carefully.",
				"exampleZh": "我们应该更仔细地在乎。"
			},
			{
				"id": 4287,
				"en": "matter",
				"zh": "重要",
				"phonetic": "/ər/",
				"example": "She wants to matter this task.",
				"exampleZh": "她想重要这个任务。"
			},
			{
				"id": 4288,
				"en": "means",
				"zh": "意味着",
				"phonetic": "/iː/",
				"example": "Let's means together.",
				"exampleZh": "让我们一起意味着吧。"
			},
			{
				"id": 4289,
				"en": "seem",
				"zh": "似乎",
				"phonetic": "/iː/",
				"example": "They decided to seem the plan.",
				"exampleZh": "他们决定似乎这个计划。"
			},
			{
				"id": 4290,
				"en": "appear",
				"zh": "显得",
				"phonetic": "/ɑːr/",
				"example": "I need to appear before the deadline.",
				"exampleZh": "我需要在截止日期前显得。"
			},
			{
				"id": 4291,
				"en": "probably",
				"zh": "可能",
				"phonetic": "/li/",
				"example": "They worked probably on the project.",
				"exampleZh": "他们可能地在这个项目上工作。"
			},
			{
				"id": 4292,
				"en": "perhaps",
				"zh": "也许",
				"phonetic": "/.../",
				"example": "He spoke perhaps to the audience.",
				"exampleZh": "他也许地对观众说话。"
			},
			{
				"id": 4293,
				"en": "possible",
				"zh": "可能的",
				"phonetic": "/ɪbəl/",
				"example": "It's a possible idea.",
				"exampleZh": "这是一个可能的的主意。"
			},
			{
				"id": 4294,
				"en": "likely",
				"zh": "可能的",
				"phonetic": "/li/",
				"example": "The result is quite likely.",
				"exampleZh": "结果是相当可能的的。"
			},
			{
				"id": 4295,
				"en": "almost",
				"zh": "几乎",
				"phonetic": "/.../",
				"example": "He spoke almost to the audience.",
				"exampleZh": "他几乎地对观众说话。"
			},
			{
				"id": 4296,
				"en": "hardly",
				"zh": "几乎不",
				"phonetic": "/li/",
				"example": "She hardly agreed with us.",
				"exampleZh": "她几乎不地同意了我们的意见。"
			},
			{
				"id": 4297,
				"en": "certainly",
				"zh": "当然",
				"phonetic": "/li/",
				"example": "They worked certainly on the project.",
				"exampleZh": "他们当然地在这个项目上工作。"
			},
			{
				"id": 4298,
				"en": "absolutely",
				"zh": "绝对地",
				"phonetic": "/li/",
				"example": "He spoke absolutely to the audience.",
				"exampleZh": "他绝对地地对观众说话。"
			},
			{
				"id": 4299,
				"en": "exactly",
				"zh": "确切地",
				"phonetic": "/li/",
				"example": "She exactly agreed with us.",
				"exampleZh": "她确切地地同意了我们的意见。"
			},
			{
				"id": 4300,
				"en": "actually",
				"zh": "实际上",
				"phonetic": "/li/",
				"example": "They worked actually on the project.",
				"exampleZh": "他们实际上地在这个项目上工作。"
			},
			{
				"id": 4301,
				"en": "honestly",
				"zh": "老实说",
				"phonetic": "/li/",
				"example": "He spoke honestly to the audience.",
				"exampleZh": "他老实说地对观众说话。"
			},
			{
				"id": 4302,
				"en": "seriously",
				"zh": "认真地",
				"phonetic": "/iəs/",
				"example": "She seriously agreed with us.",
				"exampleZh": "她认真地地同意了我们的意见。"
			},
			{
				"id": 4303,
				"en": "personally",
				"zh": "就个人而言",
				"phonetic": "/li/",
				"example": "They worked personally on the project.",
				"exampleZh": "他们就个人而言地在这个项目上工作。"
			},
			{
				"id": 4304,
				"en": "obviously",
				"zh": "显然",
				"phonetic": "/iəs/",
				"example": "He spoke obviously to the audience.",
				"exampleZh": "他显然地对观众说话。"
			}
		]
	},
	{
		"id": 5,
		"category": "商务英语",
		"icon": "💼",
		"words": [
			{
				"id": 5001,
				"en": "meeting",
				"zh": "会议",
				"phonetic": "/ɪŋ/",
				"example": "This is an important meeting.",
				"exampleZh": "这是一个重要的会议。"
			},
			{
				"id": 5002,
				"en": "agenda",
				"zh": "议程",
				"phonetic": "/.../",
				"example": "I really like the agenda.",
				"exampleZh": "我真的很喜欢这个议程。"
			},
			{
				"id": 5003,
				"en": "minutes",
				"zh": "会议记录",
				"phonetic": "/.../",
				"example": "The minutes is very useful.",
				"exampleZh": "会议记录非常有用。"
			},
			{
				"id": 5004,
				"en": "conference",
				"zh": "大会",
				"phonetic": "/əns/",
				"example": "Do you understand this conference?",
				"exampleZh": "你理解这个大会吗？"
			},
			{
				"id": 5005,
				"en": "seminar",
				"zh": "研讨会",
				"phonetic": "/ɑːr/",
				"example": "seminar plays a key role in our life.",
				"exampleZh": "研讨会在我们的生活中起着关键作用。"
			},
			{
				"id": 5006,
				"en": "workshop",
				"zh": "工作坊",
				"phonetic": "/.../",
				"example": "This is an important workshop.",
				"exampleZh": "这是一个重要的工作坊。"
			},
			{
				"id": 5007,
				"en": "presentation",
				"zh": "演示",
				"phonetic": "/ʃən/",
				"example": "I really like the presentation.",
				"exampleZh": "我真的很喜欢这个演示。"
			},
			{
				"id": 5008,
				"en": "briefing",
				"zh": "简报",
				"phonetic": "/ɪŋ/",
				"example": "The briefing is very useful.",
				"exampleZh": "简报非常有用。"
			},
			{
				"id": 5009,
				"en": "debriefing",
				"zh": "总结会",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this debriefing?",
				"exampleZh": "你理解这个总结会吗？"
			},
			{
				"id": 5010,
				"en": "brainstorm",
				"zh": "头脑风暴",
				"phonetic": "/eɪ/",
				"example": "I need to brainstorm before the deadline.",
				"exampleZh": "我需要在截止日期前头脑风暴。"
			},
			{
				"id": 5011,
				"en": "discussion",
				"zh": "讨论",
				"phonetic": "/ʃən/",
				"example": "This is an important discussion.",
				"exampleZh": "这是一个重要的讨论。"
			},
			{
				"id": 5012,
				"en": "debate",
				"zh": "辩论",
				"phonetic": "/.../",
				"example": "I really like the debate.",
				"exampleZh": "我真的很喜欢这个辩论。"
			},
			{
				"id": 5013,
				"en": "negotiate",
				"zh": "谈判",
				"phonetic": "/.../",
				"example": "Let's negotiate together.",
				"exampleZh": "让我们一起谈判吧。"
			},
			{
				"id": 5014,
				"en": "bargain",
				"zh": "讨价还价",
				"phonetic": "/eɪ/",
				"example": "They decided to bargain the plan.",
				"exampleZh": "他们决定讨价还价这个计划。"
			},
			{
				"id": 5015,
				"en": "compromise",
				"zh": "妥协",
				"phonetic": "/.../",
				"example": "I need to compromise before the deadline.",
				"exampleZh": "我需要在截止日期前妥协。"
			},
			{
				"id": 5016,
				"en": "consensus",
				"zh": "共识",
				"phonetic": "/.../",
				"example": "This is an important consensus.",
				"exampleZh": "这是一个重要的共识。"
			},
			{
				"id": 5017,
				"en": "agreement",
				"zh": "协议",
				"phonetic": "/mənt/",
				"example": "I really like the agreement.",
				"exampleZh": "我真的很喜欢这个协议。"
			},
			{
				"id": 5018,
				"en": "contract",
				"zh": "合同",
				"phonetic": "/.../",
				"example": "The contract is very useful.",
				"exampleZh": "合同非常有用。"
			},
			{
				"id": 5019,
				"en": "clause",
				"zh": "条款",
				"phonetic": "/ɔː/",
				"example": "Do you understand this clause?",
				"exampleZh": "你理解这个条款吗？"
			},
			{
				"id": 5020,
				"en": "term",
				"zh": "条款",
				"phonetic": "/.../",
				"example": "term plays a key role in our life.",
				"exampleZh": "条款在我们的生活中起着关键作用。"
			},
			{
				"id": 5021,
				"en": "condition",
				"zh": "条件",
				"phonetic": "/ʃən/",
				"example": "This is an important condition.",
				"exampleZh": "这是一个重要的条件。"
			},
			{
				"id": 5022,
				"en": "deadline",
				"zh": "截止日期",
				"phonetic": "/iː/",
				"example": "I really like the deadline.",
				"exampleZh": "我真的很喜欢这个截止日期。"
			},
			{
				"id": 5023,
				"en": "milestone",
				"zh": "里程碑",
				"phonetic": "/.../",
				"example": "The milestone is very useful.",
				"exampleZh": "里程碑非常有用。"
			},
			{
				"id": 5024,
				"en": "deliverable",
				"zh": "交付物",
				"phonetic": "/əbəl/",
				"example": "Do you understand this deliverable?",
				"exampleZh": "你理解这个交付物吗？"
			},
			{
				"id": 5025,
				"en": "proposal",
				"zh": "提案",
				"phonetic": "/.../",
				"example": "proposal plays a key role in our life.",
				"exampleZh": "提案在我们的生活中起着关键作用。"
			},
			{
				"id": 5026,
				"en": "quotation",
				"zh": "报价",
				"phonetic": "/ʃən/",
				"example": "This is an important quotation.",
				"exampleZh": "这是一个重要的报价。"
			},
			{
				"id": 5027,
				"en": "estimate",
				"zh": "估算",
				"phonetic": "/.../",
				"example": "She wants to estimate this task.",
				"exampleZh": "她想估算这个任务。"
			},
			{
				"id": 5028,
				"en": "budget",
				"zh": "预算",
				"phonetic": "/.../",
				"example": "The budget is very useful.",
				"exampleZh": "预算非常有用。"
			},
			{
				"id": 5029,
				"en": "cost",
				"zh": "成本",
				"phonetic": "/.../",
				"example": "Do you understand this cost?",
				"exampleZh": "你理解这个成本吗？"
			},
			{
				"id": 5030,
				"en": "expense",
				"zh": "费用",
				"phonetic": "/.../",
				"example": "expense plays a key role in our life.",
				"exampleZh": "费用在我们的生活中起着关键作用。"
			},
			{
				"id": 5031,
				"en": "revenue",
				"zh": "收入",
				"phonetic": "/.../",
				"example": "This is an important revenue.",
				"exampleZh": "这是一个重要的收入。"
			},
			{
				"id": 5032,
				"en": "profit",
				"zh": "利润",
				"phonetic": "/.../",
				"example": "I really like the profit.",
				"exampleZh": "我真的很喜欢这个利润。"
			},
			{
				"id": 5033,
				"en": "loss",
				"zh": "亏损",
				"phonetic": "/.../",
				"example": "The loss is very useful.",
				"exampleZh": "亏损非常有用。"
			},
			{
				"id": 5034,
				"en": "margin",
				"zh": "利润率",
				"phonetic": "/.../",
				"example": "Do you understand this margin?",
				"exampleZh": "你理解这个利润率吗？"
			},
			{
				"id": 5035,
				"en": "investment",
				"zh": "投资",
				"phonetic": "/mənt/",
				"example": "investment plays a key role in our life.",
				"exampleZh": "投资在我们的生活中起着关键作用。"
			},
			{
				"id": 5036,
				"en": "return",
				"zh": "回报",
				"phonetic": "/.../",
				"example": "This is an important return.",
				"exampleZh": "这是一个重要的回报。"
			},
			{
				"id": 5037,
				"en": "fund",
				"zh": "资金",
				"phonetic": "/.../",
				"example": "I really like the fund.",
				"exampleZh": "我真的很喜欢这个资金。"
			},
			{
				"id": 5038,
				"en": "capital",
				"zh": "资本",
				"phonetic": "/.../",
				"example": "The capital is very useful.",
				"exampleZh": "资本非常有用。"
			},
			{
				"id": 5039,
				"en": "asset",
				"zh": "资产",
				"phonetic": "/.../",
				"example": "Do you understand this asset?",
				"exampleZh": "你理解这个资产吗？"
			},
			{
				"id": 5040,
				"en": "liability",
				"zh": "负债",
				"phonetic": "/.../",
				"example": "liability plays a key role in our life.",
				"exampleZh": "负债在我们的生活中起着关键作用。"
			},
			{
				"id": 5041,
				"en": "equity",
				"zh": "股权",
				"phonetic": "/kw/",
				"example": "This is an important equity.",
				"exampleZh": "这是一个重要的股权。"
			},
			{
				"id": 5042,
				"en": "debt",
				"zh": "债务",
				"phonetic": "/.../",
				"example": "I really like the debt.",
				"exampleZh": "我真的很喜欢这个债务。"
			},
			{
				"id": 5043,
				"en": "loan",
				"zh": "贷款",
				"phonetic": "/oʊ/",
				"example": "The loan is very useful.",
				"exampleZh": "贷款非常有用。"
			},
			{
				"id": 5044,
				"en": "interest",
				"zh": "利息",
				"phonetic": "/.../",
				"example": "Do you understand this interest?",
				"exampleZh": "你理解这个利息吗？"
			},
			{
				"id": 5045,
				"en": "tax",
				"zh": "税",
				"phonetic": "/.../",
				"example": "tax plays a key role in our life.",
				"exampleZh": "税在我们的生活中起着关键作用。"
			},
			{
				"id": 5046,
				"en": "tariff",
				"zh": "关税",
				"phonetic": "/.../",
				"example": "This is an important tariff.",
				"exampleZh": "这是一个重要的关税。"
			},
			{
				"id": 5047,
				"en": "invoice",
				"zh": "发票",
				"phonetic": "/ɔɪ/",
				"example": "I really like the invoice.",
				"exampleZh": "我真的很喜欢这个发票。"
			},
			{
				"id": 5048,
				"en": "receipt",
				"zh": "收据",
				"phonetic": "/.../",
				"example": "The receipt is very useful.",
				"exampleZh": "收据非常有用。"
			},
			{
				"id": 5049,
				"en": "payment",
				"zh": "付款",
				"phonetic": "/mənt/",
				"example": "Do you understand this payment?",
				"exampleZh": "你理解这个付款吗？"
			},
			{
				"id": 5050,
				"en": "transfer",
				"zh": "转账",
				"phonetic": "/ər/",
				"example": "I need to transfer before the deadline.",
				"exampleZh": "我需要在截止日期前转账。"
			},
			{
				"id": 5051,
				"en": "deposit",
				"zh": "存款",
				"phonetic": "/.../",
				"example": "This is an important deposit.",
				"exampleZh": "这是一个重要的存款。"
			},
			{
				"id": 5052,
				"en": "withdraw",
				"zh": "取款",
				"phonetic": "/ɔː/",
				"example": "She wants to withdraw this task.",
				"exampleZh": "她想取款这个任务。"
			},
			{
				"id": 5053,
				"en": "balance",
				"zh": "余额",
				"phonetic": "/əns/",
				"example": "The balance is very useful.",
				"exampleZh": "余额非常有用。"
			},
			{
				"id": 5054,
				"en": "account",
				"zh": "账户",
				"phonetic": "/aʊ/",
				"example": "Do you understand this account?",
				"exampleZh": "你理解这个账户吗？"
			},
			{
				"id": 5055,
				"en": "audit",
				"zh": "审计",
				"phonetic": "/ɔː/",
				"example": "I need to audit before the deadline.",
				"exampleZh": "我需要在截止日期前审计。"
			},
			{
				"id": 5056,
				"en": "compliance",
				"zh": "合规",
				"phonetic": "/əns/",
				"example": "This is an important compliance.",
				"exampleZh": "这是一个重要的合规。"
			},
			{
				"id": 5057,
				"en": "regulation",
				"zh": "法规",
				"phonetic": "/ʃən/",
				"example": "I really like the regulation.",
				"exampleZh": "我真的很喜欢这个法规。"
			},
			{
				"id": 5058,
				"en": "policy",
				"zh": "政策",
				"phonetic": "/.../",
				"example": "The policy is very useful.",
				"exampleZh": "政策非常有用。"
			},
			{
				"id": 5059,
				"en": "procedure",
				"zh": "流程",
				"phonetic": "/dʒər/",
				"example": "Do you understand this procedure?",
				"exampleZh": "你理解这个流程吗？"
			},
			{
				"id": 5060,
				"en": "standard",
				"zh": "标准",
				"phonetic": "/.../",
				"example": "standard plays a key role in our life.",
				"exampleZh": "标准在我们的生活中起着关键作用。"
			},
			{
				"id": 5061,
				"en": "quality",
				"zh": "质量",
				"phonetic": "/kw/",
				"example": "This is an important quality.",
				"exampleZh": "这是一个重要的质量。"
			},
			{
				"id": 5062,
				"en": "efficiency",
				"zh": "效率",
				"phonetic": "/.../",
				"example": "I really like the efficiency.",
				"exampleZh": "我真的很喜欢这个效率。"
			},
			{
				"id": 5063,
				"en": "productivity",
				"zh": "生产率",
				"phonetic": "/.../",
				"example": "The productivity is very useful.",
				"exampleZh": "生产率非常有用。"
			},
			{
				"id": 5064,
				"en": "performance",
				"zh": "绩效",
				"phonetic": "/əns/",
				"example": "Do you understand this performance?",
				"exampleZh": "你理解这个绩效吗？"
			},
			{
				"id": 5065,
				"en": "evaluate",
				"zh": "评估",
				"phonetic": "/.../",
				"example": "I need to evaluate before the deadline.",
				"exampleZh": "我需要在截止日期前评估。"
			},
			{
				"id": 5066,
				"en": "appraisal",
				"zh": "考核",
				"phonetic": "/eɪ/",
				"example": "This is an important appraisal.",
				"exampleZh": "这是一个重要的考核。"
			},
			{
				"id": 5067,
				"en": "feedback",
				"zh": "反馈",
				"phonetic": "/k/",
				"example": "I really like the feedback.",
				"exampleZh": "我真的很喜欢这个反馈。"
			},
			{
				"id": 5068,
				"en": "promotion",
				"zh": "晋升",
				"phonetic": "/ʃən/",
				"example": "The promotion is very useful.",
				"exampleZh": "晋升非常有用。"
			},
			{
				"id": 5069,
				"en": "bonus",
				"zh": "奖金",
				"phonetic": "/.../",
				"example": "Do you understand this bonus?",
				"exampleZh": "你理解这个奖金吗？"
			},
			{
				"id": 5070,
				"en": "salary",
				"zh": "薪水",
				"phonetic": "/.../",
				"example": "salary plays a key role in our life.",
				"exampleZh": "薪水在我们的生活中起着关键作用。"
			},
			{
				"id": 5071,
				"en": "wage",
				"zh": "工资",
				"phonetic": "/.../",
				"example": "This is an important wage.",
				"exampleZh": "这是一个重要的工资。"
			},
			{
				"id": 5072,
				"en": "income",
				"zh": "收入",
				"phonetic": "/.../",
				"example": "I really like the income.",
				"exampleZh": "我真的很喜欢这个收入。"
			},
			{
				"id": 5073,
				"en": "payroll",
				"zh": "工资单",
				"phonetic": "/eɪ/",
				"example": "The payroll is very useful.",
				"exampleZh": "工资单非常有用。"
			},
			{
				"id": 5074,
				"en": "benefit",
				"zh": "福利",
				"phonetic": "/.../",
				"example": "Do you understand this benefit?",
				"exampleZh": "你理解这个福利吗？"
			},
			{
				"id": 5075,
				"en": "insurance",
				"zh": "保险",
				"phonetic": "/əns/",
				"example": "insurance plays a key role in our life.",
				"exampleZh": "保险在我们的生活中起着关键作用。"
			},
			{
				"id": 5076,
				"en": "pension",
				"zh": "养老金",
				"phonetic": "/ʒən/",
				"example": "This is an important pension.",
				"exampleZh": "这是一个重要的养老金。"
			},
			{
				"id": 5077,
				"en": "recruit",
				"zh": "招聘",
				"phonetic": "/.../",
				"example": "She wants to recruit this task.",
				"exampleZh": "她想招聘这个任务。"
			},
			{
				"id": 5078,
				"en": "hire",
				"zh": "雇佣",
				"phonetic": "/.../",
				"example": "Let's hire together.",
				"exampleZh": "让我们一起雇佣吧。"
			},
			{
				"id": 5079,
				"en": "fire",
				"zh": "解雇",
				"phonetic": "/.../",
				"example": "They decided to fire the plan.",
				"exampleZh": "他们决定解雇这个计划。"
			},
			{
				"id": 5080,
				"en": "resign",
				"zh": "辞职",
				"phonetic": "/.../",
				"example": "I need to resign before the deadline.",
				"exampleZh": "我需要在截止日期前辞职。"
			},
			{
				"id": 5081,
				"en": "retire",
				"zh": "退休",
				"phonetic": "/.../",
				"example": "We should retire more carefully.",
				"exampleZh": "我们应该更仔细地退休。"
			},
			{
				"id": 5082,
				"en": "layoff",
				"zh": "裁员",
				"phonetic": "/eɪ/",
				"example": "I really like the layoff.",
				"exampleZh": "我真的很喜欢这个裁员。"
			},
			{
				"id": 5083,
				"en": "candidate",
				"zh": "候选人",
				"phonetic": "/.../",
				"example": "The candidate is very useful.",
				"exampleZh": "候选人非常有用。"
			},
			{
				"id": 5084,
				"en": "resume",
				"zh": "简历",
				"phonetic": "/.../",
				"example": "Do you understand this resume?",
				"exampleZh": "你理解这个简历吗？"
			},
			{
				"id": 5085,
				"en": "interview",
				"zh": "面试",
				"phonetic": "/.../",
				"example": "I need to interview before the deadline.",
				"exampleZh": "我需要在截止日期前面试。"
			},
			{
				"id": 5086,
				"en": "qualification",
				"zh": "资格",
				"phonetic": "/ʃən/",
				"example": "This is an important qualification.",
				"exampleZh": "这是一个重要的资格。"
			},
			{
				"id": 5087,
				"en": "experience",
				"zh": "经验",
				"phonetic": "/əns/",
				"example": "I really like the experience.",
				"exampleZh": "我真的很喜欢这个经验。"
			},
			{
				"id": 5088,
				"en": "skill",
				"zh": "技能",
				"phonetic": "/.../",
				"example": "The skill is very useful.",
				"exampleZh": "技能非常有用。"
			},
			{
				"id": 5089,
				"en": "training",
				"zh": "培训",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this training?",
				"exampleZh": "你理解这个培训吗？"
			},
			{
				"id": 5090,
				"en": "orientation",
				"zh": "入职培训",
				"phonetic": "/ʃən/",
				"example": "orientation plays a key role in our life.",
				"exampleZh": "入职培训在我们的生活中起着关键作用。"
			},
			{
				"id": 5091,
				"en": "probation",
				"zh": "试用期",
				"phonetic": "/ʃən/",
				"example": "This is an important probation.",
				"exampleZh": "这是一个重要的试用期。"
			},
			{
				"id": 5092,
				"en": "promote",
				"zh": "提拔",
				"phonetic": "/.../",
				"example": "She wants to promote this task.",
				"exampleZh": "她想提拔这个任务。"
			},
			{
				"id": 5093,
				"en": "delegate",
				"zh": "委派",
				"phonetic": "/.../",
				"example": "Let's delegate together.",
				"exampleZh": "让我们一起委派吧。"
			},
			{
				"id": 5094,
				"en": "supervise",
				"zh": "监督",
				"phonetic": "/.../",
				"example": "They decided to supervise the plan.",
				"exampleZh": "他们决定监督这个计划。"
			},
			{
				"id": 5095,
				"en": "manage",
				"zh": "管理",
				"phonetic": "/.../",
				"example": "I need to manage before the deadline.",
				"exampleZh": "我需要在截止日期前管理。"
			},
			{
				"id": 5096,
				"en": "lead",
				"zh": "领导",
				"phonetic": "/iː/",
				"example": "We should lead more carefully.",
				"exampleZh": "我们应该更仔细地领导。"
			},
			{
				"id": 5097,
				"en": "direct",
				"zh": "指导",
				"phonetic": "/.../",
				"example": "She wants to direct this task.",
				"exampleZh": "她想指导这个任务。"
			},
			{
				"id": 5098,
				"en": "coordinate",
				"zh": "协调",
				"phonetic": "/uː/",
				"example": "Let's coordinate together.",
				"exampleZh": "让我们一起协调吧。"
			},
			{
				"id": 5099,
				"en": "organize",
				"zh": "组织",
				"phonetic": "/.../",
				"example": "They decided to organize the plan.",
				"exampleZh": "他们决定组织这个计划。"
			},
			{
				"id": 5100,
				"en": "arrange",
				"zh": "安排",
				"phonetic": "/.../",
				"example": "I need to arrange before the deadline.",
				"exampleZh": "我需要在截止日期前安排。"
			},
			{
				"id": 5101,
				"en": "schedule",
				"zh": "安排时间",
				"phonetic": "/.../",
				"example": "We should schedule more carefully.",
				"exampleZh": "我们应该更仔细地安排时间。"
			},
			{
				"id": 5102,
				"en": "plan",
				"zh": "计划",
				"phonetic": "/.../",
				"example": "She wants to plan this task.",
				"exampleZh": "她想计划这个任务。"
			},
			{
				"id": 5103,
				"en": "execute",
				"zh": "执行",
				"phonetic": "/.../",
				"example": "Let's execute together.",
				"exampleZh": "让我们一起执行吧。"
			},
			{
				"id": 5104,
				"en": "implement",
				"zh": "实施",
				"phonetic": "/mənt/",
				"example": "They decided to implement the plan.",
				"exampleZh": "他们决定实施这个计划。"
			},
			{
				"id": 5105,
				"en": "monitor",
				"zh": "监控",
				"phonetic": "/ər/",
				"example": "I need to monitor before the deadline.",
				"exampleZh": "我需要在截止日期前监控。"
			},
			{
				"id": 5106,
				"en": "track",
				"zh": "跟踪",
				"phonetic": "/k/",
				"example": "We should track more carefully.",
				"exampleZh": "我们应该更仔细地跟踪。"
			},
			{
				"id": 5107,
				"en": "report",
				"zh": "报告",
				"phonetic": "/.../",
				"example": "She wants to report this task.",
				"exampleZh": "她想报告这个任务。"
			},
			{
				"id": 5108,
				"en": "summarize",
				"zh": "总结",
				"phonetic": "/.../",
				"example": "Let's summarize together.",
				"exampleZh": "让我们一起总结吧。"
			},
			{
				"id": 5109,
				"en": "analyze",
				"zh": "分析",
				"phonetic": "/.../",
				"example": "They decided to analyze the plan.",
				"exampleZh": "他们决定分析这个计划。"
			},
			{
				"id": 5110,
				"en": "research",
				"zh": "研究",
				"phonetic": "/tʃ/",
				"example": "I need to research before the deadline.",
				"exampleZh": "我需要在截止日期前研究。"
			},
			{
				"id": 5111,
				"en": "develop",
				"zh": "开发",
				"phonetic": "/.../",
				"example": "We should develop more carefully.",
				"exampleZh": "我们应该更仔细地开发。"
			},
			{
				"id": 5112,
				"en": "design",
				"zh": "设计",
				"phonetic": "/.../",
				"example": "She wants to design this task.",
				"exampleZh": "她想设计这个任务。"
			},
			{
				"id": 5113,
				"en": "create",
				"zh": "创建",
				"phonetic": "/iː/",
				"example": "Let's create together.",
				"exampleZh": "让我们一起创建吧。"
			},
			{
				"id": 5114,
				"en": "innovate",
				"zh": "创新",
				"phonetic": "/.../",
				"example": "They decided to innovate the plan.",
				"exampleZh": "他们决定创新这个计划。"
			},
			{
				"id": 5115,
				"en": "improve",
				"zh": "改进",
				"phonetic": "/.../",
				"example": "I need to improve before the deadline.",
				"exampleZh": "我需要在截止日期前改进。"
			},
			{
				"id": 5116,
				"en": "optimize",
				"zh": "优化",
				"phonetic": "/.../",
				"example": "We should optimize more carefully.",
				"exampleZh": "我们应该更仔细地优化。"
			},
			{
				"id": 5117,
				"en": "upgrade",
				"zh": "升级",
				"phonetic": "/.../",
				"example": "She wants to upgrade this task.",
				"exampleZh": "她想升级这个任务。"
			},
			{
				"id": 5118,
				"en": "maintain",
				"zh": "维护",
				"phonetic": "/eɪ/",
				"example": "Let's maintain together.",
				"exampleZh": "让我们一起维护吧。"
			},
			{
				"id": 5119,
				"en": "support",
				"zh": "支持",
				"phonetic": "/.../",
				"example": "They decided to support the plan.",
				"exampleZh": "他们决定支持这个计划。"
			},
			{
				"id": 5120,
				"en": "troubleshoot",
				"zh": "排查故障",
				"phonetic": "/uː/",
				"example": "I need to troubleshoot before the deadline.",
				"exampleZh": "我需要在截止日期前排查故障。"
			},
			{
				"id": 5121,
				"en": "solve",
				"zh": "解决",
				"phonetic": "/.../",
				"example": "We should solve more carefully.",
				"exampleZh": "我们应该更仔细地解决。"
			},
			{
				"id": 5122,
				"en": "resolve",
				"zh": "解决",
				"phonetic": "/.../",
				"example": "She wants to resolve this task.",
				"exampleZh": "她想解决这个任务。"
			},
			{
				"id": 5123,
				"en": "handle",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "Let's handle together.",
				"exampleZh": "让我们一起处理吧。"
			},
			{
				"id": 5124,
				"en": "process",
				"zh": "处理",
				"phonetic": "/.../",
				"example": "They decided to process the plan.",
				"exampleZh": "他们决定处理这个计划。"
			},
			{
				"id": 5125,
				"en": "approve",
				"zh": "批准",
				"phonetic": "/.../",
				"example": "I need to approve before the deadline.",
				"exampleZh": "我需要在截止日期前批准。"
			},
			{
				"id": 5126,
				"en": "authorize",
				"zh": "授权",
				"phonetic": "/ɔː/",
				"example": "We should authorize more carefully.",
				"exampleZh": "我们应该更仔细地授权。"
			},
			{
				"id": 5127,
				"en": "sign",
				"zh": "签署",
				"phonetic": "/.../",
				"example": "She wants to sign this task.",
				"exampleZh": "她想签署这个任务。"
			},
			{
				"id": 5128,
				"en": "stamp",
				"zh": "盖章",
				"phonetic": "/.../",
				"example": "Let's stamp together.",
				"exampleZh": "让我们一起盖章吧。"
			},
			{
				"id": 5129,
				"en": "file",
				"zh": "归档",
				"phonetic": "/.../",
				"example": "They decided to file the plan.",
				"exampleZh": "他们决定归档这个计划。"
			},
			{
				"id": 5130,
				"en": "document",
				"zh": "文件",
				"phonetic": "/mənt/",
				"example": "document plays a key role in our life.",
				"exampleZh": "文件在我们的生活中起着关键作用。"
			},
			{
				"id": 5131,
				"en": "record",
				"zh": "记录",
				"phonetic": "/.../",
				"example": "This is an important record.",
				"exampleZh": "这是一个重要的记录。"
			},
			{
				"id": 5132,
				"en": "archive",
				"zh": "存档",
				"phonetic": "/.../",
				"example": "She wants to archive this task.",
				"exampleZh": "她想存档这个任务。"
			},
			{
				"id": 5133,
				"en": "copy",
				"zh": "副本",
				"phonetic": "/.../",
				"example": "The copy is very useful.",
				"exampleZh": "副本非常有用。"
			},
			{
				"id": 5134,
				"en": "original",
				"zh": "原件",
				"phonetic": "/.../",
				"example": "Do you understand this original?",
				"exampleZh": "你理解这个原件吗？"
			},
			{
				"id": 5135,
				"en": "draft",
				"zh": "草稿",
				"phonetic": "/.../",
				"example": "draft plays a key role in our life.",
				"exampleZh": "草稿在我们的生活中起着关键作用。"
			},
			{
				"id": 5136,
				"en": "version",
				"zh": "版本",
				"phonetic": "/ʒən/",
				"example": "This is an important version.",
				"exampleZh": "这是一个重要的版本。"
			},
			{
				"id": 5137,
				"en": "revise",
				"zh": "修订",
				"phonetic": "/.../",
				"example": "She wants to revise this task.",
				"exampleZh": "她想修订这个任务。"
			},
			{
				"id": 5138,
				"en": "update",
				"zh": "更新",
				"phonetic": "/.../",
				"example": "Let's update together.",
				"exampleZh": "让我们一起更新吧。"
			},
			{
				"id": 5139,
				"en": "review",
				"zh": "审核",
				"phonetic": "/.../",
				"example": "They decided to review the plan.",
				"exampleZh": "他们决定审核这个计划。"
			},
			{
				"id": 5140,
				"en": "confirm",
				"zh": "确认",
				"phonetic": "/.../",
				"example": "I need to confirm before the deadline.",
				"exampleZh": "我需要在截止日期前确认。"
			},
			{
				"id": 5141,
				"en": "verify",
				"zh": "核实",
				"phonetic": "/.../",
				"example": "We should verify more carefully.",
				"exampleZh": "我们应该更仔细地核实。"
			},
			{
				"id": 5142,
				"en": "check",
				"zh": "核对",
				"phonetic": "/k/",
				"example": "She wants to check this task.",
				"exampleZh": "她想核对这个任务。"
			},
			{
				"id": 5143,
				"en": "reject",
				"zh": "驳回",
				"phonetic": "/.../",
				"example": "Let's reject together.",
				"exampleZh": "让我们一起驳回吧。"
			},
			{
				"id": 5144,
				"en": "submit",
				"zh": "提交",
				"phonetic": "/.../",
				"example": "They decided to submit the plan.",
				"exampleZh": "他们决定提交这个计划。"
			},
			{
				"id": 5145,
				"en": "apply",
				"zh": "申请",
				"phonetic": "/li/",
				"example": "I need to apply before the deadline.",
				"exampleZh": "我需要在截止日期前申请。"
			},
			{
				"id": 5146,
				"en": "request",
				"zh": "申请",
				"phonetic": "/kw/",
				"example": "We should request more carefully.",
				"exampleZh": "我们应该更仔细地申请。"
			},
			{
				"id": 5147,
				"en": "grant",
				"zh": "批准",
				"phonetic": "/.../",
				"example": "She wants to grant this task.",
				"exampleZh": "她想批准这个任务。"
			},
			{
				"id": 5148,
				"en": "permit",
				"zh": "许可",
				"phonetic": "/.../",
				"example": "The permit is very useful.",
				"exampleZh": "许可非常有用。"
			},
			{
				"id": 5149,
				"en": "license",
				"zh": "执照",
				"phonetic": "/.../",
				"example": "Do you understand this license?",
				"exampleZh": "你理解这个执照吗？"
			},
			{
				"id": 5150,
				"en": "certificate",
				"zh": "证书",
				"phonetic": "/.../",
				"example": "certificate plays a key role in our life.",
				"exampleZh": "证书在我们的生活中起着关键作用。"
			},
			{
				"id": 5151,
				"en": "notarize",
				"zh": "公证",
				"phonetic": "/.../",
				"example": "We should notarize more carefully.",
				"exampleZh": "我们应该更仔细地公证。"
			},
			{
				"id": 5152,
				"en": "legal",
				"zh": "法律的",
				"phonetic": "/.../",
				"example": "She looks legal today.",
				"exampleZh": "她今天看起来很法律的。"
			},
			{
				"id": 5153,
				"en": "lawyer",
				"zh": "律师",
				"phonetic": "/ər/",
				"example": "The lawyer is very useful.",
				"exampleZh": "律师非常有用。"
			},
			{
				"id": 5154,
				"en": "attorney",
				"zh": "律师",
				"phonetic": "/.../",
				"example": "Do you understand this attorney?",
				"exampleZh": "你理解这个律师吗？"
			},
			{
				"id": 5155,
				"en": "court",
				"zh": "法院",
				"phonetic": "/aʊ/",
				"example": "court plays a key role in our life.",
				"exampleZh": "法院在我们的生活中起着关键作用。"
			},
			{
				"id": 5156,
				"en": "sue",
				"zh": "起诉",
				"phonetic": "/.../",
				"example": "We should sue more carefully.",
				"exampleZh": "我们应该更仔细地起诉。"
			},
			{
				"id": 5157,
				"en": "lawsuit",
				"zh": "诉讼",
				"phonetic": "/ɔː/",
				"example": "I really like the lawsuit.",
				"exampleZh": "我真的很喜欢这个诉讼。"
			},
			{
				"id": 5158,
				"en": "settlement",
				"zh": "和解",
				"phonetic": "/mənt/",
				"example": "The settlement is very useful.",
				"exampleZh": "和解非常有用。"
			},
			{
				"id": 5159,
				"en": "arbitration",
				"zh": "仲裁",
				"phonetic": "/ʃən/",
				"example": "Do you understand this arbitration?",
				"exampleZh": "你理解这个仲裁吗？"
			},
			{
				"id": 5160,
				"en": "mediation",
				"zh": "调解",
				"phonetic": "/ʃən/",
				"example": "mediation plays a key role in our life.",
				"exampleZh": "调解在我们的生活中起着关键作用。"
			},
			{
				"id": 5161,
				"en": "dispute",
				"zh": "争议",
				"phonetic": "/.../",
				"example": "This is an important dispute.",
				"exampleZh": "这是一个重要的争议。"
			},
			{
				"id": 5162,
				"en": "violation",
				"zh": "违规",
				"phonetic": "/ʃən/",
				"example": "I really like the violation.",
				"exampleZh": "我真的很喜欢这个违规。"
			},
			{
				"id": 5163,
				"en": "penalty",
				"zh": "罚款",
				"phonetic": "/.../",
				"example": "The penalty is very useful.",
				"exampleZh": "罚款非常有用。"
			},
			{
				"id": 5164,
				"en": "fine",
				"zh": "罚款",
				"phonetic": "/.../",
				"example": "Do you understand this fine?",
				"exampleZh": "你理解这个罚款吗？"
			},
			{
				"id": 5165,
				"en": "copyright",
				"zh": "版权",
				"phonetic": "/aɪt/",
				"example": "copyright plays a key role in our life.",
				"exampleZh": "版权在我们的生活中起着关键作用。"
			},
			{
				"id": 5166,
				"en": "patent",
				"zh": "专利",
				"phonetic": "/.../",
				"example": "This is an important patent.",
				"exampleZh": "这是一个重要的专利。"
			},
			{
				"id": 5167,
				"en": "trademark",
				"zh": "商标",
				"phonetic": "/.../",
				"example": "I really like the trademark.",
				"exampleZh": "我真的很喜欢这个商标。"
			},
			{
				"id": 5168,
				"en": "intellectual",
				"zh": "知识产权的",
				"phonetic": "/.../",
				"example": "It's a intellectual idea.",
				"exampleZh": "这是一个知识产权的的主意。"
			},
			{
				"id": 5169,
				"en": "confidential",
				"zh": "机密的",
				"phonetic": "/ʃəl/",
				"example": "The result is quite confidential.",
				"exampleZh": "结果是相当机密的的。"
			},
			{
				"id": 5170,
				"en": "disclose",
				"zh": "泄露",
				"phonetic": "/.../",
				"example": "I need to disclose before the deadline.",
				"exampleZh": "我需要在截止日期前泄露。"
			},
			{
				"id": 5171,
				"en": "privacy",
				"zh": "隐私",
				"phonetic": "/.../",
				"example": "This is an important privacy.",
				"exampleZh": "这是一个重要的隐私。"
			},
			{
				"id": 5172,
				"en": "data",
				"zh": "数据",
				"phonetic": "/.../",
				"example": "I really like the data.",
				"exampleZh": "我真的很喜欢这个数据。"
			},
			{
				"id": 5173,
				"en": "security",
				"zh": "安全",
				"phonetic": "/.../",
				"example": "The security is very useful.",
				"exampleZh": "安全非常有用。"
			},
			{
				"id": 5174,
				"en": "risk",
				"zh": "风险",
				"phonetic": "/.../",
				"example": "Do you understand this risk?",
				"exampleZh": "你理解这个风险吗？"
			},
			{
				"id": 5175,
				"en": "crisis",
				"zh": "危机",
				"phonetic": "/.../",
				"example": "crisis plays a key role in our life.",
				"exampleZh": "危机在我们的生活中起着关键作用。"
			},
			{
				"id": 5176,
				"en": "emergency",
				"zh": "紧急情况",
				"phonetic": "/.../",
				"example": "This is an important emergency.",
				"exampleZh": "这是一个重要的紧急情况。"
			},
			{
				"id": 5177,
				"en": "strategy",
				"zh": "策略",
				"phonetic": "/.../",
				"example": "I really like the strategy.",
				"exampleZh": "我真的很喜欢这个策略。"
			},
			{
				"id": 5178,
				"en": "tactic",
				"zh": "战术",
				"phonetic": "/.../",
				"example": "The tactic is very useful.",
				"exampleZh": "战术非常有用。"
			},
			{
				"id": 5179,
				"en": "goal",
				"zh": "目标",
				"phonetic": "/oʊ/",
				"example": "Do you understand this goal?",
				"exampleZh": "你理解这个目标吗？"
			},
			{
				"id": 5180,
				"en": "objective",
				"zh": "目标",
				"phonetic": "/.../",
				"example": "objective plays a key role in our life.",
				"exampleZh": "目标在我们的生活中起着关键作用。"
			},
			{
				"id": 5181,
				"en": "target",
				"zh": "指标",
				"phonetic": "/.../",
				"example": "This is an important target.",
				"exampleZh": "这是一个重要的指标。"
			},
			{
				"id": 5182,
				"en": "KPI",
				"zh": "关键绩效指标",
				"phonetic": "/.../",
				"example": "I really like the KPI.",
				"exampleZh": "我真的很喜欢这个关键绩效指标。"
			},
			{
				"id": 5183,
				"en": "result",
				"zh": "结果",
				"phonetic": "/.../",
				"example": "The result is very useful.",
				"exampleZh": "结果非常有用。"
			},
			{
				"id": 5184,
				"en": "outcome",
				"zh": "成果",
				"phonetic": "/aʊ/",
				"example": "Do you understand this outcome?",
				"exampleZh": "你理解这个成果吗？"
			},
			{
				"id": 5185,
				"en": "achievement",
				"zh": "成就",
				"phonetic": "/mənt/",
				"example": "achievement plays a key role in our life.",
				"exampleZh": "成就在我们的生活中起着关键作用。"
			},
			{
				"id": 5186,
				"en": "success",
				"zh": "成功",
				"phonetic": "/.../",
				"example": "This is an important success.",
				"exampleZh": "这是一个重要的成功。"
			},
			{
				"id": 5187,
				"en": "failure",
				"zh": "失败",
				"phonetic": "/eɪ/",
				"example": "I really like the failure.",
				"exampleZh": "我真的很喜欢这个失败。"
			},
			{
				"id": 5188,
				"en": "challenge",
				"zh": "挑战",
				"phonetic": "/.../",
				"example": "The challenge is very useful.",
				"exampleZh": "挑战非常有用。"
			},
			{
				"id": 5189,
				"en": "opportunity",
				"zh": "机遇",
				"phonetic": "/.../",
				"example": "Do you understand this opportunity?",
				"exampleZh": "你理解这个机遇吗？"
			},
			{
				"id": 5190,
				"en": "threat",
				"zh": "威胁",
				"phonetic": "/iː/",
				"example": "threat plays a key role in our life.",
				"exampleZh": "威胁在我们的生活中起着关键作用。"
			},
			{
				"id": 5191,
				"en": "advantage",
				"zh": "优势",
				"phonetic": "/.../",
				"example": "This is an important advantage.",
				"exampleZh": "这是一个重要的优势。"
			},
			{
				"id": 5192,
				"en": "disadvantage",
				"zh": "劣势",
				"phonetic": "/.../",
				"example": "I really like the disadvantage.",
				"exampleZh": "我真的很喜欢这个劣势。"
			},
			{
				"id": 5193,
				"en": "strength",
				"zh": "优势",
				"phonetic": "/θ/",
				"example": "The strength is very useful.",
				"exampleZh": "优势非常有用。"
			},
			{
				"id": 5194,
				"en": "weakness",
				"zh": "弱点",
				"phonetic": "/nəs/",
				"example": "Do you understand this weakness?",
				"exampleZh": "你理解这个弱点吗？"
			},
			{
				"id": 5195,
				"en": "competitor",
				"zh": "竞争对手",
				"phonetic": "/ər/",
				"example": "competitor plays a key role in our life.",
				"exampleZh": "竞争对手在我们的生活中起着关键作用。"
			},
			{
				"id": 5196,
				"en": "competition",
				"zh": "竞争",
				"phonetic": "/ʃən/",
				"example": "This is an important competition.",
				"exampleZh": "这是一个重要的竞争。"
			},
			{
				"id": 5197,
				"en": "market",
				"zh": "市场",
				"phonetic": "/.../",
				"example": "I really like the market.",
				"exampleZh": "我真的很喜欢这个市场。"
			},
			{
				"id": 5198,
				"en": "industry",
				"zh": "行业",
				"phonetic": "/.../",
				"example": "The industry is very useful.",
				"exampleZh": "行业非常有用。"
			},
			{
				"id": 5199,
				"en": "sector",
				"zh": "行业",
				"phonetic": "/ər/",
				"example": "Do you understand this sector?",
				"exampleZh": "你理解这个行业吗？"
			},
			{
				"id": 5200,
				"en": "trend",
				"zh": "趋势",
				"phonetic": "/.../",
				"example": "trend plays a key role in our life.",
				"exampleZh": "趋势在我们的生活中起着关键作用。"
			},
			{
				"id": 5201,
				"en": "analysis",
				"zh": "分析",
				"phonetic": "/.../",
				"example": "This is an important analysis.",
				"exampleZh": "这是一个重要的分析。"
			},
			{
				"id": 5202,
				"en": "forecast",
				"zh": "预测",
				"phonetic": "/.../",
				"example": "I really like the forecast.",
				"exampleZh": "我真的很喜欢这个预测。"
			},
			{
				"id": 5203,
				"en": "statistics",
				"zh": "统计数据",
				"phonetic": "/.../",
				"example": "The statistics is very useful.",
				"exampleZh": "统计数据非常有用。"
			},
			{
				"id": 5204,
				"en": "survey",
				"zh": "调查",
				"phonetic": "/.../",
				"example": "Do you understand this survey?",
				"exampleZh": "你理解这个调查吗？"
			},
			{
				"id": 5205,
				"en": "questionnaire",
				"zh": "问卷",
				"phonetic": "/ʃən/",
				"example": "questionnaire plays a key role in our life.",
				"exampleZh": "问卷在我们的生活中起着关键作用。"
			},
			{
				"id": 5206,
				"en": "poll",
				"zh": "民意调查",
				"phonetic": "/.../",
				"example": "This is an important poll.",
				"exampleZh": "这是一个重要的民意调查。"
			},
			{
				"id": 5207,
				"en": "focus",
				"zh": "焦点",
				"phonetic": "/.../",
				"example": "I really like the focus.",
				"exampleZh": "我真的很喜欢这个焦点。"
			},
			{
				"id": 5208,
				"en": "brand",
				"zh": "品牌",
				"phonetic": "/.../",
				"example": "The brand is very useful.",
				"exampleZh": "品牌非常有用。"
			},
			{
				"id": 5209,
				"en": "logo",
				"zh": "标志",
				"phonetic": "/.../",
				"example": "Do you understand this logo?",
				"exampleZh": "你理解这个标志吗？"
			},
			{
				"id": 5210,
				"en": "slogan",
				"zh": "口号",
				"phonetic": "/.../",
				"example": "slogan plays a key role in our life.",
				"exampleZh": "口号在我们的生活中起着关键作用。"
			},
			{
				"id": 5211,
				"en": "advertise",
				"zh": "做广告",
				"phonetic": "/.../",
				"example": "We should advertise more carefully.",
				"exampleZh": "我们应该更仔细地做广告。"
			},
			{
				"id": 5212,
				"en": "marketing",
				"zh": "营销",
				"phonetic": "/ɪŋ/",
				"example": "I really like the marketing.",
				"exampleZh": "我真的很喜欢这个营销。"
			},
			{
				"id": 5213,
				"en": "publicity",
				"zh": "宣传",
				"phonetic": "/.../",
				"example": "The publicity is very useful.",
				"exampleZh": "宣传非常有用。"
			},
			{
				"id": 5214,
				"en": "campaign",
				"zh": "活动",
				"phonetic": "/eɪ/",
				"example": "Do you understand this campaign?",
				"exampleZh": "你理解这个活动吗？"
			},
			{
				"id": 5215,
				"en": "launch",
				"zh": "发布",
				"phonetic": "/tʃ/",
				"example": "I need to launch before the deadline.",
				"exampleZh": "我需要在截止日期前发布。"
			},
			{
				"id": 5216,
				"en": "sponsor",
				"zh": "赞助",
				"phonetic": "/ər/",
				"example": "We should sponsor more carefully.",
				"exampleZh": "我们应该更仔细地赞助。"
			},
			{
				"id": 5217,
				"en": "endorse",
				"zh": "代言",
				"phonetic": "/.../",
				"example": "She wants to endorse this task.",
				"exampleZh": "她想代言这个任务。"
			},
			{
				"id": 5218,
				"en": "public",
				"zh": "公众",
				"phonetic": "/.../",
				"example": "The public is very useful.",
				"exampleZh": "公众非常有用。"
			},
			{
				"id": 5219,
				"en": "customer",
				"zh": "客户",
				"phonetic": "/ər/",
				"example": "Do you understand this customer?",
				"exampleZh": "你理解这个客户吗？"
			},
			{
				"id": 5220,
				"en": "client",
				"zh": "客户",
				"phonetic": "/.../",
				"example": "client plays a key role in our life.",
				"exampleZh": "客户在我们的生活中起着关键作用。"
			},
			{
				"id": 5221,
				"en": "consumer",
				"zh": "消费者",
				"phonetic": "/ər/",
				"example": "This is an important consumer.",
				"exampleZh": "这是一个重要的消费者。"
			},
			{
				"id": 5222,
				"en": "user",
				"zh": "用户",
				"phonetic": "/ər/",
				"example": "I really like the user.",
				"exampleZh": "我真的很喜欢这个用户。"
			},
			{
				"id": 5223,
				"en": "member",
				"zh": "会员",
				"phonetic": "/ər/",
				"example": "The member is very useful.",
				"exampleZh": "会员非常有用。"
			},
			{
				"id": 5224,
				"en": "subscriber",
				"zh": "订户",
				"phonetic": "/ər/",
				"example": "Do you understand this subscriber?",
				"exampleZh": "你理解这个订户吗？"
			},
			{
				"id": 5225,
				"en": "satisfaction",
				"zh": "满意度",
				"phonetic": "/ʃən/",
				"example": "satisfaction plays a key role in our life.",
				"exampleZh": "满意度在我们的生活中起着关键作用。"
			},
			{
				"id": 5226,
				"en": "loyalty",
				"zh": "忠诚度",
				"phonetic": "/ɔɪ/",
				"example": "This is an important loyalty.",
				"exampleZh": "这是一个重要的忠诚度。"
			},
			{
				"id": 5227,
				"en": "complaint",
				"zh": "投诉",
				"phonetic": "/eɪ/",
				"example": "I really like the complaint.",
				"exampleZh": "我真的很喜欢这个投诉。"
			},
			{
				"id": 5228,
				"en": "service",
				"zh": "服务",
				"phonetic": "/.../",
				"example": "The service is very useful.",
				"exampleZh": "服务非常有用。"
			},
			{
				"id": 5229,
				"en": "guarantee",
				"zh": "保证",
				"phonetic": "/iː/",
				"example": "Do you understand this guarantee?",
				"exampleZh": "你理解这个保证吗？"
			},
			{
				"id": 5230,
				"en": "warranty",
				"zh": "保修",
				"phonetic": "/.../",
				"example": "warranty plays a key role in our life.",
				"exampleZh": "保修在我们的生活中起着关键作用。"
			},
			{
				"id": 5231,
				"en": "exchange",
				"zh": "换货",
				"phonetic": "/.../",
				"example": "This is an important exchange.",
				"exampleZh": "这是一个重要的换货。"
			},
			{
				"id": 5232,
				"en": "refund",
				"zh": "退款",
				"phonetic": "/.../",
				"example": "She wants to refund this task.",
				"exampleZh": "她想退款这个任务。"
			},
			{
				"id": 5233,
				"en": "cancel",
				"zh": "取消",
				"phonetic": "/əns/",
				"example": "Let's cancel together.",
				"exampleZh": "让我们一起取消吧。"
			},
			{
				"id": 5234,
				"en": "subscribe",
				"zh": "订阅",
				"phonetic": "/.../",
				"example": "They decided to subscribe the plan.",
				"exampleZh": "他们决定订阅这个计划。"
			},
			{
				"id": 5235,
				"en": "unsubscribe",
				"zh": "退订",
				"phonetic": "/.../",
				"example": "I need to unsubscribe before the deadline.",
				"exampleZh": "我需要在截止日期前退订。"
			},
			{
				"id": 5236,
				"en": "renew",
				"zh": "续费",
				"phonetic": "/.../",
				"example": "We should renew more carefully.",
				"exampleZh": "我们应该更仔细地续费。"
			},
			{
				"id": 5237,
				"en": "downgrade",
				"zh": "降级",
				"phonetic": "/aʊ/",
				"example": "She wants to downgrade this task.",
				"exampleZh": "她想降级这个任务。"
			},
			{
				"id": 5238,
				"en": "package",
				"zh": "套餐",
				"phonetic": "/.../",
				"example": "The package is very useful.",
				"exampleZh": "套餐非常有用。"
			},
			{
				"id": 5239,
				"en": "bundle",
				"zh": "捆绑",
				"phonetic": "/.../",
				"example": "Do you understand this bundle?",
				"exampleZh": "你理解这个捆绑吗？"
			},
			{
				"id": 5240,
				"en": "free",
				"zh": "免费的",
				"phonetic": "/iː/",
				"example": "He found the task free.",
				"exampleZh": "他发现这个任务是免费的的。"
			},
			{
				"id": 5241,
				"en": "trial",
				"zh": "试用",
				"phonetic": "/.../",
				"example": "This is an important trial.",
				"exampleZh": "这是一个重要的试用。"
			},
			{
				"id": 5242,
				"en": "premium",
				"zh": "高级的",
				"phonetic": "/.../",
				"example": "She looks premium today.",
				"exampleZh": "她今天看起来很高级的。"
			},
			{
				"id": 5243,
				"en": "discount",
				"zh": "折扣",
				"phonetic": "/aʊ/",
				"example": "The discount is very useful.",
				"exampleZh": "折扣非常有用。"
			},
			{
				"id": 5244,
				"en": "coupon",
				"zh": "优惠券",
				"phonetic": "/aʊ/",
				"example": "Do you understand this coupon?",
				"exampleZh": "你理解这个优惠券吗？"
			},
			{
				"id": 5245,
				"en": "voucher",
				"zh": "代金券",
				"phonetic": "/ər/",
				"example": "voucher plays a key role in our life.",
				"exampleZh": "代金券在我们的生活中起着关键作用。"
			},
			{
				"id": 5246,
				"en": "sale",
				"zh": "销售",
				"phonetic": "/.../",
				"example": "This is an important sale.",
				"exampleZh": "这是一个重要的销售。"
			},
			{
				"id": 5247,
				"en": "clearance",
				"zh": "清仓",
				"phonetic": "/əns/",
				"example": "I really like the clearance.",
				"exampleZh": "我真的很喜欢这个清仓。"
			},
			{
				"id": 5248,
				"en": "stock",
				"zh": "库存",
				"phonetic": "/k/",
				"example": "The stock is very useful.",
				"exampleZh": "库存非常有用。"
			},
			{
				"id": 5249,
				"en": "inventory",
				"zh": "库存",
				"phonetic": "/.../",
				"example": "Do you understand this inventory?",
				"exampleZh": "你理解这个库存吗？"
			},
			{
				"id": 5250,
				"en": "supply",
				"zh": "供应",
				"phonetic": "/li/",
				"example": "supply plays a key role in our life.",
				"exampleZh": "供应在我们的生活中起着关键作用。"
			},
			{
				"id": 5251,
				"en": "chain",
				"zh": "供应链",
				"phonetic": "/eɪ/",
				"example": "This is an important chain.",
				"exampleZh": "这是一个重要的供应链。"
			},
			{
				"id": 5252,
				"en": "logistics",
				"zh": "物流",
				"phonetic": "/.../",
				"example": "I really like the logistics.",
				"exampleZh": "我真的很喜欢这个物流。"
			},
			{
				"id": 5253,
				"en": "warehouse",
				"zh": "仓库",
				"phonetic": "/aʊ/",
				"example": "The warehouse is very useful.",
				"exampleZh": "仓库非常有用。"
			},
			{
				"id": 5254,
				"en": "delivery",
				"zh": "配送",
				"phonetic": "/.../",
				"example": "Do you understand this delivery?",
				"exampleZh": "你理解这个配送吗？"
			},
			{
				"id": 5255,
				"en": "ship",
				"zh": "发货",
				"phonetic": "/.../",
				"example": "I need to ship before the deadline.",
				"exampleZh": "我需要在截止日期前发货。"
			},
			{
				"id": 5256,
				"en": "tracking",
				"zh": "追踪",
				"phonetic": "/ɪŋ/",
				"example": "This is an important tracking.",
				"exampleZh": "这是一个重要的追踪。"
			},
			{
				"id": 5257,
				"en": "freight",
				"zh": "货运",
				"phonetic": "/aɪt/",
				"example": "I really like the freight.",
				"exampleZh": "我真的很喜欢这个货运。"
			},
			{
				"id": 5258,
				"en": "customs",
				"zh": "海关",
				"phonetic": "/.../",
				"example": "The customs is very useful.",
				"exampleZh": "海关非常有用。"
			},
			{
				"id": 5259,
				"en": "import",
				"zh": "进口",
				"phonetic": "/.../",
				"example": "Do you understand this import?",
				"exampleZh": "你理解这个进口吗？"
			},
			{
				"id": 5260,
				"en": "export",
				"zh": "出口",
				"phonetic": "/.../",
				"example": "export plays a key role in our life.",
				"exampleZh": "出口在我们的生活中起着关键作用。"
			},
			{
				"id": 5261,
				"en": "trade",
				"zh": "贸易",
				"phonetic": "/.../",
				"example": "This is an important trade.",
				"exampleZh": "这是一个重要的贸易。"
			},
			{
				"id": 5262,
				"en": "global",
				"zh": "全球的",
				"phonetic": "/.../",
				"example": "She looks global today.",
				"exampleZh": "她今天看起来很全球的。"
			},
			{
				"id": 5263,
				"en": "international",
				"zh": "国际的",
				"phonetic": "/ʃən/",
				"example": "It's a international idea.",
				"exampleZh": "这是一个国际的的主意。"
			},
			{
				"id": 5264,
				"en": "domestic",
				"zh": "国内的",
				"phonetic": "/.../",
				"example": "The result is quite domestic.",
				"exampleZh": "结果是相当国内的的。"
			},
			{
				"id": 5265,
				"en": "local",
				"zh": "本地的",
				"phonetic": "/.../",
				"example": "He found the task local.",
				"exampleZh": "他发现这个任务是本地的的。"
			},
			{
				"id": 5266,
				"en": "headquarters",
				"zh": "总部",
				"phonetic": "/kw/",
				"example": "This is an important headquarters.",
				"exampleZh": "这是一个重要的总部。"
			},
			{
				"id": 5267,
				"en": "branch",
				"zh": "分公司",
				"phonetic": "/tʃ/",
				"example": "I really like the branch.",
				"exampleZh": "我真的很喜欢这个分公司。"
			},
			{
				"id": 5268,
				"en": "subsidiary",
				"zh": "子公司",
				"phonetic": "/.../",
				"example": "The subsidiary is very useful.",
				"exampleZh": "子公司非常有用。"
			},
			{
				"id": 5269,
				"en": "office",
				"zh": "办公室",
				"phonetic": "/.../",
				"example": "Do you understand this office?",
				"exampleZh": "你理解这个办公室吗？"
			},
			{
				"id": 5270,
				"en": "department",
				"zh": "部门",
				"phonetic": "/mənt/",
				"example": "department plays a key role in our life.",
				"exampleZh": "部门在我们的生活中起着关键作用。"
			},
			{
				"id": 5271,
				"en": "division",
				"zh": "事业部",
				"phonetic": "/ʒən/",
				"example": "This is an important division.",
				"exampleZh": "这是一个重要的事业部。"
			},
			{
				"id": 5272,
				"en": "team",
				"zh": "团队",
				"phonetic": "/iː/",
				"example": "I really like the team.",
				"exampleZh": "我真的很喜欢这个团队。"
			},
			{
				"id": 5273,
				"en": "staff",
				"zh": "员工",
				"phonetic": "/.../",
				"example": "The staff is very useful.",
				"exampleZh": "员工非常有用。"
			},
			{
				"id": 5274,
				"en": "employee",
				"zh": "雇员",
				"phonetic": "/iː/",
				"example": "Do you understand this employee?",
				"exampleZh": "你理解这个雇员吗？"
			},
			{
				"id": 5275,
				"en": "employer",
				"zh": "雇主",
				"phonetic": "/ər/",
				"example": "employer plays a key role in our life.",
				"exampleZh": "雇主在我们的生活中起着关键作用。"
			},
			{
				"id": 5276,
				"en": "boss",
				"zh": "老板",
				"phonetic": "/.../",
				"example": "This is an important boss.",
				"exampleZh": "这是一个重要的老板。"
			},
			{
				"id": 5277,
				"en": "manager",
				"zh": "经理",
				"phonetic": "/ər/",
				"example": "I really like the manager.",
				"exampleZh": "我真的很喜欢这个经理。"
			},
			{
				"id": 5278,
				"en": "director",
				"zh": "总监",
				"phonetic": "/ər/",
				"example": "The director is very useful.",
				"exampleZh": "总监非常有用。"
			},
			{
				"id": 5279,
				"en": "executive",
				"zh": "高管",
				"phonetic": "/.../",
				"example": "Do you understand this executive?",
				"exampleZh": "你理解这个高管吗？"
			},
			{
				"id": 5280,
				"en": "CEO",
				"zh": "首席执行官",
				"phonetic": "/.../",
				"example": "CEO plays a key role in our life.",
				"exampleZh": "首席执行官在我们的生活中起着关键作用。"
			},
			{
				"id": 5281,
				"en": "chairman",
				"zh": "董事长",
				"phonetic": "/eɪ/",
				"example": "This is an important chairman.",
				"exampleZh": "这是一个重要的董事长。"
			},
			{
				"id": 5282,
				"en": "board",
				"zh": "董事会",
				"phonetic": "/oʊ/",
				"example": "I really like the board.",
				"exampleZh": "我真的很喜欢这个董事会。"
			},
			{
				"id": 5283,
				"en": "shareholder",
				"zh": "股东",
				"phonetic": "/ər/",
				"example": "The shareholder is very useful.",
				"exampleZh": "股东非常有用。"
			},
			{
				"id": 5284,
				"en": "stakeholder",
				"zh": "利益相关者",
				"phonetic": "/ər/",
				"example": "Do you understand this stakeholder?",
				"exampleZh": "你理解这个利益相关者吗？"
			},
			{
				"id": 5285,
				"en": "partner",
				"zh": "合伙人",
				"phonetic": "/ər/",
				"example": "partner plays a key role in our life.",
				"exampleZh": "合伙人在我们的生活中起着关键作用。"
			},
			{
				"id": 5286,
				"en": "colleague",
				"zh": "同事",
				"phonetic": "/iː/",
				"example": "This is an important colleague.",
				"exampleZh": "这是一个重要的同事。"
			},
			{
				"id": 5287,
				"en": "coworker",
				"zh": "同事",
				"phonetic": "/ər/",
				"example": "I really like the coworker.",
				"exampleZh": "我真的很喜欢这个同事。"
			},
			{
				"id": 5288,
				"en": "superior",
				"zh": "上级",
				"phonetic": "/ər/",
				"example": "The superior is very useful.",
				"exampleZh": "上级非常有用。"
			},
			{
				"id": 5289,
				"en": "subordinate",
				"zh": "下属",
				"phonetic": "/.../",
				"example": "Do you understand this subordinate?",
				"exampleZh": "你理解这个下属吗？"
			},
			{
				"id": 5290,
				"en": "assistant",
				"zh": "助理",
				"phonetic": "/.../",
				"example": "assistant plays a key role in our life.",
				"exampleZh": "助理在我们的生活中起着关键作用。"
			},
			{
				"id": 5291,
				"en": "secretary",
				"zh": "秘书",
				"phonetic": "/.../",
				"example": "This is an important secretary.",
				"exampleZh": "这是一个重要的秘书。"
			},
			{
				"id": 5292,
				"en": "receptionist",
				"zh": "前台",
				"phonetic": "/ʃən/",
				"example": "I really like the receptionist.",
				"exampleZh": "我真的很喜欢这个前台。"
			},
			{
				"id": 5293,
				"en": "intern",
				"zh": "实习生",
				"phonetic": "/.../",
				"example": "The intern is very useful.",
				"exampleZh": "实习生非常有用。"
			},
			{
				"id": 5294,
				"en": "freelancer",
				"zh": "自由职业者",
				"phonetic": "/əns/",
				"example": "Do you understand this freelancer?",
				"exampleZh": "你理解这个自由职业者吗？"
			},
			{
				"id": 5295,
				"en": "consultant",
				"zh": "顾问",
				"phonetic": "/.../",
				"example": "consultant plays a key role in our life.",
				"exampleZh": "顾问在我们的生活中起着关键作用。"
			},
			{
				"id": 5296,
				"en": "expert",
				"zh": "专家",
				"phonetic": "/.../",
				"example": "This is an important expert.",
				"exampleZh": "这是一个重要的专家。"
			},
			{
				"id": 5297,
				"en": "specialist",
				"zh": "专家",
				"phonetic": "/.../",
				"example": "I really like the specialist.",
				"exampleZh": "我真的很喜欢这个专家。"
			},
			{
				"id": 5298,
				"en": "professional",
				"zh": "专业人士",
				"phonetic": "/ʒən/",
				"example": "The professional is very useful.",
				"exampleZh": "专业人士非常有用。"
			},
			{
				"id": 5299,
				"en": "entrepreneur",
				"zh": "企业家",
				"phonetic": "/.../",
				"example": "Do you understand this entrepreneur?",
				"exampleZh": "你理解这个企业家吗？"
			},
			{
				"id": 5300,
				"en": "startup",
				"zh": "创业公司",
				"phonetic": "/.../",
				"example": "startup plays a key role in our life.",
				"exampleZh": "创业公司在我们的生活中起着关键作用。"
			},
			{
				"id": 5301,
				"en": "enterprise",
				"zh": "企业",
				"phonetic": "/.../",
				"example": "This is an important enterprise.",
				"exampleZh": "这是一个重要的企业。"
			},
			{
				"id": 5302,
				"en": "corporation",
				"zh": "公司",
				"phonetic": "/ʃən/",
				"example": "I really like the corporation.",
				"exampleZh": "我真的很喜欢这个公司。"
			},
			{
				"id": 5303,
				"en": "company",
				"zh": "公司",
				"phonetic": "/.../",
				"example": "The company is very useful.",
				"exampleZh": "公司非常有用。"
			},
			{
				"id": 5304,
				"en": "firm",
				"zh": "公司",
				"phonetic": "/.../",
				"example": "Do you understand this firm?",
				"exampleZh": "你理解这个公司吗？"
			},
			{
				"id": 5305,
				"en": "agency",
				"zh": "代理机构",
				"phonetic": "/.../",
				"example": "agency plays a key role in our life.",
				"exampleZh": "代理机构在我们的生活中起着关键作用。"
			},
			{
				"id": 5306,
				"en": "organization",
				"zh": "组织",
				"phonetic": "/ʃən/",
				"example": "This is an important organization.",
				"exampleZh": "这是一个重要的组织。"
			},
			{
				"id": 5307,
				"en": "institution",
				"zh": "机构",
				"phonetic": "/ʃən/",
				"example": "I really like the institution.",
				"exampleZh": "我真的很喜欢这个机构。"
			},
			{
				"id": 5308,
				"en": "association",
				"zh": "协会",
				"phonetic": "/ʃən/",
				"example": "The association is very useful.",
				"exampleZh": "协会非常有用。"
			},
			{
				"id": 5309,
				"en": "union",
				"zh": "工会",
				"phonetic": "/.../",
				"example": "Do you understand this union?",
				"exampleZh": "你理解这个工会吗？"
			},
			{
				"id": 5310,
				"en": "chamber",
				"zh": "商会",
				"phonetic": "/ər/",
				"example": "chamber plays a key role in our life.",
				"exampleZh": "商会在我们的生活中起着关键作用。"
			},
			{
				"id": 5311,
				"en": "email",
				"zh": "邮件",
				"phonetic": "/eɪ/",
				"example": "This is an important email.",
				"exampleZh": "这是一个重要的邮件。"
			},
			{
				"id": 5312,
				"en": "attachment",
				"zh": "附件",
				"phonetic": "/mənt/",
				"example": "I really like the attachment.",
				"exampleZh": "我真的很喜欢这个附件。"
			},
			{
				"id": 5313,
				"en": "CC",
				"zh": "抄送",
				"phonetic": "/.../",
				"example": "Let's CC together.",
				"exampleZh": "让我们一起抄送吧。"
			},
			{
				"id": 5314,
				"en": "BCC",
				"zh": "密送",
				"phonetic": "/.../",
				"example": "They decided to BCC the plan.",
				"exampleZh": "他们决定密送这个计划。"
			},
			{
				"id": 5315,
				"en": "forward",
				"zh": "转发",
				"phonetic": "/.../",
				"example": "I need to forward before the deadline.",
				"exampleZh": "我需要在截止日期前转发。"
			},
			{
				"id": 5316,
				"en": "reply",
				"zh": "回复",
				"phonetic": "/li/",
				"example": "We should reply more carefully.",
				"exampleZh": "我们应该更仔细地回复。"
			},
			{
				"id": 5317,
				"en": "subject",
				"zh": "主题",
				"phonetic": "/.../",
				"example": "I really like the subject.",
				"exampleZh": "我真的很喜欢这个主题。"
			},
			{
				"id": 5318,
				"en": "greeting",
				"zh": "问候",
				"phonetic": "/ɪŋ/",
				"example": "The greeting is very useful.",
				"exampleZh": "问候非常有用。"
			},
			{
				"id": 5319,
				"en": "signature",
				"zh": "签名",
				"phonetic": "/tʃər/",
				"example": "Do you understand this signature?",
				"exampleZh": "你理解这个签名吗？"
			},
			{
				"id": 5320,
				"en": "regards",
				"zh": "致意",
				"phonetic": "/.../",
				"example": "regards plays a key role in our life.",
				"exampleZh": "致意在我们的生活中起着关键作用。"
			},
			{
				"id": 5321,
				"en": "memo",
				"zh": "备忘录",
				"phonetic": "/.../",
				"example": "This is an important memo.",
				"exampleZh": "这是一个重要的备忘录。"
			},
			{
				"id": 5322,
				"en": "notice",
				"zh": "通知",
				"phonetic": "/.../",
				"example": "I really like the notice.",
				"exampleZh": "我真的很喜欢这个通知。"
			},
			{
				"id": 5323,
				"en": "announcement",
				"zh": "公告",
				"phonetic": "/mənt/",
				"example": "The announcement is very useful.",
				"exampleZh": "公告非常有用。"
			},
			{
				"id": 5324,
				"en": "circular",
				"zh": "通告",
				"phonetic": "/ɑːr/",
				"example": "Do you understand this circular?",
				"exampleZh": "你理解这个通告吗？"
			},
			{
				"id": 5325,
				"en": "newsletter",
				"zh": "通讯",
				"phonetic": "/ər/",
				"example": "newsletter plays a key role in our life.",
				"exampleZh": "通讯在我们的生活中起着关键作用。"
			},
			{
				"id": 5326,
				"en": "slide",
				"zh": "幻灯片",
				"phonetic": "/.../",
				"example": "This is an important slide.",
				"exampleZh": "这是一个重要的幻灯片。"
			},
			{
				"id": 5327,
				"en": "chart",
				"zh": "图表",
				"phonetic": "/.../",
				"example": "I really like the chart.",
				"exampleZh": "我真的很喜欢这个图表。"
			},
			{
				"id": 5328,
				"en": "graph",
				"zh": "图表",
				"phonetic": "/f/",
				"example": "The graph is very useful.",
				"exampleZh": "图表非常有用。"
			},
			{
				"id": 5329,
				"en": "table",
				"zh": "表格",
				"phonetic": "/əbəl/",
				"example": "Do you understand this table?",
				"exampleZh": "你理解这个表格吗？"
			},
			{
				"id": 5330,
				"en": "diagram",
				"zh": "示意图",
				"phonetic": "/.../",
				"example": "diagram plays a key role in our life.",
				"exampleZh": "示意图在我们的生活中起着关键作用。"
			},
			{
				"id": 5331,
				"en": "spreadsheet",
				"zh": "电子表格",
				"phonetic": "/iː/",
				"example": "This is an important spreadsheet.",
				"exampleZh": "这是一个重要的电子表格。"
			},
			{
				"id": 5332,
				"en": "database",
				"zh": "数据库",
				"phonetic": "/.../",
				"example": "I really like the database.",
				"exampleZh": "我真的很喜欢这个数据库。"
			},
			{
				"id": 5333,
				"en": "software",
				"zh": "软件",
				"phonetic": "/.../",
				"example": "The software is very useful.",
				"exampleZh": "软件非常有用。"
			},
			{
				"id": 5334,
				"en": "hardware",
				"zh": "硬件",
				"phonetic": "/.../",
				"example": "Do you understand this hardware?",
				"exampleZh": "你理解这个硬件吗？"
			},
			{
				"id": 5335,
				"en": "system",
				"zh": "系统",
				"phonetic": "/.../",
				"example": "system plays a key role in our life.",
				"exampleZh": "系统在我们的生活中起着关键作用。"
			},
			{
				"id": 5336,
				"en": "network",
				"zh": "网络",
				"phonetic": "/.../",
				"example": "This is an important network.",
				"exampleZh": "这是一个重要的网络。"
			},
			{
				"id": 5337,
				"en": "server",
				"zh": "服务器",
				"phonetic": "/ər/",
				"example": "I really like the server.",
				"exampleZh": "我真的很喜欢这个服务器。"
			},
			{
				"id": 5338,
				"en": "cloud",
				"zh": "云",
				"phonetic": "/aʊ/",
				"example": "The cloud is very useful.",
				"exampleZh": "云非常有用。"
			},
			{
				"id": 5339,
				"en": "app",
				"zh": "应用",
				"phonetic": "/.../",
				"example": "Do you understand this app?",
				"exampleZh": "你理解这个应用吗？"
			},
			{
				"id": 5340,
				"en": "platform",
				"zh": "平台",
				"phonetic": "/.../",
				"example": "platform plays a key role in our life.",
				"exampleZh": "平台在我们的生活中起着关键作用。"
			},
			{
				"id": 5341,
				"en": "online",
				"zh": "在线的",
				"phonetic": "/.../",
				"example": "This is very online.",
				"exampleZh": "这非常在线的。"
			},
			{
				"id": 5342,
				"en": "offline",
				"zh": "离线的",
				"phonetic": "/.../",
				"example": "She looks offline today.",
				"exampleZh": "她今天看起来很离线的。"
			},
			{
				"id": 5343,
				"en": "digital",
				"zh": "数字的",
				"phonetic": "/.../",
				"example": "It's a digital idea.",
				"exampleZh": "这是一个数字的的主意。"
			},
			{
				"id": 5344,
				"en": "password",
				"zh": "密码",
				"phonetic": "/.../",
				"example": "Do you understand this password?",
				"exampleZh": "你理解这个密码吗？"
			},
			{
				"id": 5345,
				"en": "login",
				"zh": "登录",
				"phonetic": "/.../",
				"example": "I need to login before the deadline.",
				"exampleZh": "我需要在截止日期前登录。"
			},
			{
				"id": 5346,
				"en": "logout",
				"zh": "登出",
				"phonetic": "/aʊ/",
				"example": "We should logout more carefully.",
				"exampleZh": "我们应该更仔细地登出。"
			},
			{
				"id": 5347,
				"en": "profile",
				"zh": "个人资料",
				"phonetic": "/.../",
				"example": "I really like the profile.",
				"exampleZh": "我真的很喜欢这个个人资料。"
			},
			{
				"id": 5348,
				"en": "setting",
				"zh": "设置",
				"phonetic": "/ɪŋ/",
				"example": "The setting is very useful.",
				"exampleZh": "设置非常有用。"
			},
			{
				"id": 5349,
				"en": "install",
				"zh": "安装",
				"phonetic": "/.../",
				"example": "They decided to install the plan.",
				"exampleZh": "他们决定安装这个计划。"
			},
			{
				"id": 5350,
				"en": "download",
				"zh": "下载",
				"phonetic": "/oʊ/",
				"example": "I need to download before the deadline.",
				"exampleZh": "我需要在截止日期前下载。"
			},
			{
				"id": 5351,
				"en": "upload",
				"zh": "上传",
				"phonetic": "/oʊ/",
				"example": "We should upload more carefully.",
				"exampleZh": "我们应该更仔细地上传。"
			},
			{
				"id": 5352,
				"en": "backup",
				"zh": "备份",
				"phonetic": "/.../",
				"example": "She wants to backup this task.",
				"exampleZh": "她想备份这个任务。"
			},
			{
				"id": 5353,
				"en": "restore",
				"zh": "恢复",
				"phonetic": "/.../",
				"example": "Let's restore together.",
				"exampleZh": "让我们一起恢复吧。"
			},
			{
				"id": 5354,
				"en": "delete",
				"zh": "删除",
				"phonetic": "/.../",
				"example": "They decided to delete the plan.",
				"exampleZh": "他们决定删除这个计划。"
			},
			{
				"id": 5355,
				"en": "save",
				"zh": "保存",
				"phonetic": "/.../",
				"example": "I need to save before the deadline.",
				"exampleZh": "我需要在截止日期前保存。"
			},
			{
				"id": 5356,
				"en": "print",
				"zh": "打印",
				"phonetic": "/.../",
				"example": "We should print more carefully.",
				"exampleZh": "我们应该更仔细地打印。"
			},
			{
				"id": 5357,
				"en": "scan",
				"zh": "扫描",
				"phonetic": "/.../",
				"example": "She wants to scan this task.",
				"exampleZh": "她想扫描这个任务。"
			},
			{
				"id": 5358,
				"en": "paste",
				"zh": "粘贴",
				"phonetic": "/.../",
				"example": "Let's paste together.",
				"exampleZh": "让我们一起粘贴吧。"
			},
			{
				"id": 5359,
				"en": "cut",
				"zh": "剪切",
				"phonetic": "/.../",
				"example": "They decided to cut the plan.",
				"exampleZh": "他们决定剪切这个计划。"
			},
			{
				"id": 5360,
				"en": "undo",
				"zh": "撤销",
				"phonetic": "/.../",
				"example": "I need to undo before the deadline.",
				"exampleZh": "我需要在截止日期前撤销。"
			},
			{
				"id": 5361,
				"en": "redo",
				"zh": "重做",
				"phonetic": "/.../",
				"example": "We should redo more carefully.",
				"exampleZh": "我们应该更仔细地重做。"
			},
			{
				"id": 5362,
				"en": "done",
				"zh": "完成",
				"phonetic": "/.../",
				"example": "She looks done today.",
				"exampleZh": "她今天看起来很完成。"
			},
			{
				"id": 5363,
				"en": "pending",
				"zh": "待处理",
				"phonetic": "/ɪŋ/",
				"example": "It's a pending idea.",
				"exampleZh": "这是一个待处理的主意。"
			},
			{
				"id": 5364,
				"en": "progress",
				"zh": "进行中",
				"phonetic": "/.../",
				"example": "Do you understand this progress?",
				"exampleZh": "你理解这个进行中吗？"
			},
			{
				"id": 5365,
				"en": "complete",
				"zh": "完成",
				"phonetic": "/.../",
				"example": "I need to complete before the deadline.",
				"exampleZh": "我需要在截止日期前完成。"
			},
			{
				"id": 5366,
				"en": "postpone",
				"zh": "延期",
				"phonetic": "/.../",
				"example": "We should postpone more carefully.",
				"exampleZh": "我们应该更仔细地延期。"
			},
			{
				"id": 5367,
				"en": "extend",
				"zh": "延长",
				"phonetic": "/.../",
				"example": "She wants to extend this task.",
				"exampleZh": "她想延长这个任务。"
			},
			{
				"id": 5368,
				"en": "overdue",
				"zh": "逾期的",
				"phonetic": "/.../",
				"example": "It's a overdue idea.",
				"exampleZh": "这是一个逾期的的主意。"
			},
			{
				"id": 5369,
				"en": "urgent",
				"zh": "紧急的",
				"phonetic": "/.../",
				"example": "The result is quite urgent.",
				"exampleZh": "结果是相当紧急的的。"
			},
			{
				"id": 5370,
				"en": "priority",
				"zh": "优先级",
				"phonetic": "/.../",
				"example": "priority plays a key role in our life.",
				"exampleZh": "优先级在我们的生活中起着关键作用。"
			},
			{
				"id": 5371,
				"en": "important",
				"zh": "重要的",
				"phonetic": "/.../",
				"example": "This is very important.",
				"exampleZh": "这非常重要的。"
			},
			{
				"id": 5372,
				"en": "calendar",
				"zh": "日历",
				"phonetic": "/ɑːr/",
				"example": "I really like the calendar.",
				"exampleZh": "我真的很喜欢这个日历。"
			},
			{
				"id": 5373,
				"en": "reminder",
				"zh": "提醒",
				"phonetic": "/ər/",
				"example": "The reminder is very useful.",
				"exampleZh": "提醒非常有用。"
			},
			{
				"id": 5374,
				"en": "alarm",
				"zh": "闹钟",
				"phonetic": "/.../",
				"example": "Do you understand this alarm?",
				"exampleZh": "你理解这个闹钟吗？"
			},
			{
				"id": 5375,
				"en": "appointment",
				"zh": "预约",
				"phonetic": "/mənt/",
				"example": "appointment plays a key role in our life.",
				"exampleZh": "预约在我们的生活中起着关键作用。"
			},
			{
				"id": 5376,
				"en": "reschedule",
				"zh": "重新安排",
				"phonetic": "/.../",
				"example": "We should reschedule more carefully.",
				"exampleZh": "我们应该更仔细地重新安排。"
			},
			{
				"id": 5377,
				"en": "attend",
				"zh": "参加",
				"phonetic": "/.../",
				"example": "She wants to attend this task.",
				"exampleZh": "她想参加这个任务。"
			},
			{
				"id": 5378,
				"en": "participate",
				"zh": "参与",
				"phonetic": "/.../",
				"example": "Let's participate together.",
				"exampleZh": "让我们一起参与吧。"
			},
			{
				"id": 5379,
				"en": "join",
				"zh": "加入",
				"phonetic": "/ɔɪ/",
				"example": "They decided to join the plan.",
				"exampleZh": "他们决定加入这个计划。"
			},
			{
				"id": 5380,
				"en": "host",
				"zh": "主持",
				"phonetic": "/.../",
				"example": "I need to host before the deadline.",
				"exampleZh": "我需要在截止日期前主持。"
			},
			{
				"id": 5381,
				"en": "chair",
				"zh": "主持",
				"phonetic": "/eɪ/",
				"example": "We should chair more carefully.",
				"exampleZh": "我们应该更仔细地主持。"
			},
			{
				"id": 5382,
				"en": "present",
				"zh": "展示",
				"phonetic": "/.../",
				"example": "She wants to present this task.",
				"exampleZh": "她想展示这个任务。"
			},
			{
				"id": 5383,
				"en": "speak",
				"zh": "发言",
				"phonetic": "/iː/",
				"example": "Let's speak together.",
				"exampleZh": "让我们一起发言吧。"
			},
			{
				"id": 5384,
				"en": "lecture",
				"zh": "讲座",
				"phonetic": "/tʃər/",
				"example": "Do you understand this lecture?",
				"exampleZh": "你理解这个讲座吗？"
			},
			{
				"id": 5385,
				"en": "keynote",
				"zh": "主题演讲",
				"phonetic": "/.../",
				"example": "keynote plays a key role in our life.",
				"exampleZh": "主题演讲在我们的生活中起着关键作用。"
			},
			{
				"id": 5386,
				"en": "panel",
				"zh": "小组讨论",
				"phonetic": "/.../",
				"example": "This is an important panel.",
				"exampleZh": "这是一个重要的小组讨论。"
			},
			{
				"id": 5387,
				"en": "Q&A",
				"zh": "问答",
				"phonetic": "/.../",
				"example": "I really like the Q&A.",
				"exampleZh": "我真的很喜欢这个问答。"
			},
			{
				"id": 5388,
				"en": "conclusion",
				"zh": "结论",
				"phonetic": "/ʒən/",
				"example": "The conclusion is very useful.",
				"exampleZh": "结论非常有用。"
			},
			{
				"id": 5389,
				"en": "action",
				"zh": "行动",
				"phonetic": "/ʃən/",
				"example": "Do you understand this action?",
				"exampleZh": "你理解这个行动吗？"
			},
			{
				"id": 5390,
				"en": "follow-up",
				"zh": "跟进",
				"phonetic": "/aʊ/",
				"example": "follow-up plays a key role in our life.",
				"exampleZh": "跟进在我们的生活中起着关键作用。"
			},
			{
				"id": 5391,
				"en": "next",
				"zh": "下一步",
				"phonetic": "/.../",
				"example": "This is an important next.",
				"exampleZh": "这是一个重要的下一步。"
			},
			{
				"id": 5392,
				"en": "status",
				"zh": "状态",
				"phonetic": "/.../",
				"example": "I really like the status.",
				"exampleZh": "我真的很喜欢这个状态。"
			}
		]
	},
	{
		"id": 6,
		"category": "餐饮食品",
		"icon": "🍽️",
		"words": [
			{
				"id": 6001,
				"en": "restaurant",
				"zh": "餐厅",
				"phonetic": "/ɔː/",
				"example": "This is an important restaurant.",
				"exampleZh": "这是一个重要的餐厅。"
			},
			{
				"id": 6002,
				"en": "cafe",
				"zh": "咖啡馆",
				"phonetic": "/.../",
				"example": "I really like the cafe.",
				"exampleZh": "我真的很喜欢这个咖啡馆。"
			},
			{
				"id": 6003,
				"en": "bar",
				"zh": "酒吧",
				"phonetic": "/ɑːr/",
				"example": "The bar is very useful.",
				"exampleZh": "酒吧非常有用。"
			},
			{
				"id": 6004,
				"en": "diner",
				"zh": "小餐馆",
				"phonetic": "/ər/",
				"example": "Do you understand this diner?",
				"exampleZh": "你理解这个小餐馆吗？"
			},
			{
				"id": 6005,
				"en": "buffet",
				"zh": "自助餐",
				"phonetic": "/.../",
				"example": "buffet plays a key role in our life.",
				"exampleZh": "自助餐在我们的生活中起着关键作用。"
			},
			{
				"id": 6006,
				"en": "canteen",
				"zh": "食堂",
				"phonetic": "/iː/",
				"example": "This is an important canteen.",
				"exampleZh": "这是一个重要的食堂。"
			},
			{
				"id": 6007,
				"en": "bakery",
				"zh": "面包店",
				"phonetic": "/.../",
				"example": "I really like the bakery.",
				"exampleZh": "我真的很喜欢这个面包店。"
			},
			{
				"id": 6008,
				"en": "kitchen",
				"zh": "厨房",
				"phonetic": "/.../",
				"example": "The kitchen is very useful.",
				"exampleZh": "厨房非常有用。"
			},
			{
				"id": 6009,
				"en": "dining",
				"zh": "用餐",
				"phonetic": "/ɪŋ/",
				"example": "Do you understand this dining?",
				"exampleZh": "你理解这个用餐吗？"
			},
			{
				"id": 6010,
				"en": "meal",
				"zh": "一餐",
				"phonetic": "/iː/",
				"example": "meal plays a key role in our life.",
				"exampleZh": "一餐在我们的生活中起着关键作用。"
			},
			{
				"id": 6011,
				"en": "breakfast",
				"zh": "早餐",
				"phonetic": "/iː/",
				"example": "This is an important breakfast.",
				"exampleZh": "这是一个重要的早餐。"
			},
			{
				"id": 6012,
				"en": "lunch",
				"zh": "午餐",
				"phonetic": "/tʃ/",
				"example": "I really like the lunch.",
				"exampleZh": "我真的很喜欢这个午餐。"
			},
			{
				"id": 6013,
				"en": "dinner",
				"zh": "正餐",
				"phonetic": "/ər/",
				"example": "The dinner is very useful.",
				"exampleZh": "正餐非常有用。"
			},
			{
				"id": 6014,
				"en": "brunch",
				"zh": "早午餐",
				"phonetic": "/tʃ/",
				"example": "Do you understand this brunch?",
				"exampleZh": "你理解这个早午餐吗？"
			},
			{
				"id": 6015,
				"en": "supper",
				"zh": "晚餐",
				"phonetic": "/ər/",
				"example": "supper plays a key role in our life.",
				"exampleZh": "晚餐在我们的生活中起着关键作用。"
			},
			{
				"id": 6016,
				"en": "snack",
				"zh": "小吃",
				"phonetic": "/k/",
				"example": "This is an important snack.",
				"exampleZh": "这是一个重要的小吃。"
			},
			{
				"id": 6017,
				"en": "appetizer",
				"zh": "开胃菜",
				"phonetic": "/ər/",
				"example": "I really like the appetizer.",
				"exampleZh": "我真的很喜欢这个开胃菜。"
			},
			{
				"id": 6018,
				"en": "starter",
				"zh": "前菜",
				"phonetic": "/ər/",
				"example": "The starter is very useful.",
				"exampleZh": "前菜非常有用。"
			},
			{
				"id": 6019,
				"en": "main",
				"zh": "主菜",
				"phonetic": "/eɪ/",
				"example": "Do you understand this main?",
				"exampleZh": "你理解这个主菜吗？"
			},
			{
				"id": 6020,
				"en": "side",
				"zh": "配菜",
				"phonetic": "/.../",
				"example": "side plays a key role in our life.",
				"exampleZh": "配菜在我们的生活中起着关键作用。"
			},
			{
				"id": 6021,
				"en": "dessert",
				"zh": "甜点",
				"phonetic": "/.../",
				"example": "This is an important dessert.",
				"exampleZh": "这是一个重要的甜点。"
			},
			{
				"id": 6022,
				"en": "soup",
				"zh": "汤",
				"phonetic": "/aʊ/",
				"example": "I really like the soup.",
				"exampleZh": "我真的很喜欢这个汤。"
			},
			{
				"id": 6023,
				"en": "salad",
				"zh": "沙拉",
				"phonetic": "/.../",
				"example": "The salad is very useful.",
				"exampleZh": "沙拉非常有用。"
			},
			{
				"id": 6024,
				"en": "bread",
				"zh": "面包",
				"phonetic": "/iː/",
				"example": "Do you understand this bread?",
				"exampleZh": "你理解这个面包吗？"
			},
			{
				"id": 6025,
				"en": "rice",
				"zh": "米饭",
				"phonetic": "/.../",
				"example": "rice plays a key role in our life.",
				"exampleZh": "米饭在我们的生活中起着关键作用。"
			},
			{
				"id": 6026,
				"en": "noodle",
				"zh": "面条",
				"phonetic": "/uː/",
				"example": "This is an important noodle.",
				"exampleZh": "这是一个重要的面条。"
			},
			{
				"id": 6027,
				"en": "pasta",
				"zh": "意大利面",
				"phonetic": "/.../",
				"example": "I really like the pasta.",
				"exampleZh": "我真的很喜欢这个意大利面。"
			},
			{
				"id": 6028,
				"en": "pizza",
				"zh": "披萨",
				"phonetic": "/.../",
				"example": "The pizza is very useful.",
				"exampleZh": "披萨非常有用。"
			},
			{
				"id": 6029,
				"en": "burger",
				"zh": "汉堡",
				"phonetic": "/ər/",
				"example": "Do you understand this burger?",
				"exampleZh": "你理解这个汉堡吗？"
			},
			{
				"id": 6030,
				"en": "sandwich",
				"zh": "三明治",
				"phonetic": "/tʃ/",
				"example": "sandwich plays a key role in our life.",
				"exampleZh": "三明治在我们的生活中起着关键作用。"
			},
			{
				"id": 6031,
				"en": "steak",
				"zh": "牛排",
				"phonetic": "/iː/",
				"example": "This is an important steak.",
				"exampleZh": "这是一个重要的牛排。"
			},
			{
				"id": 6032,
				"en": "chicken",
				"zh": "鸡肉",
				"phonetic": "/.../",
				"example": "I really like the chicken.",
				"exampleZh": "我真的很喜欢这个鸡肉。"
			},
			{
				"id": 6033,
				"en": "pork",
				"zh": "猪肉",
				"phonetic": "/.../",
				"example": "The pork is very useful.",
				"exampleZh": "猪肉非常有用。"
			},
			{
				"id": 6034,
				"en": "beef",
				"zh": "牛肉",
				"phonetic": "/iː/",
				"example": "Do you understand this beef?",
				"exampleZh": "你理解这个牛肉吗？"
			},
			{
				"id": 6035,
				"en": "lamb",
				"zh": "羊肉",
				"phonetic": "/.../",
				"example": "lamb plays a key role in our life.",
				"exampleZh": "羊肉在我们的生活中起着关键作用。"
			},
			{
				"id": 6036,
				"en": "fish",
				"zh": "鱼",
				"phonetic": "/ʃ/",
				"example": "This is an important fish.",
				"exampleZh": "这是一个重要的鱼。"
			},
			{
				"id": 6037,
				"en": "shrimp",
				"zh": "虾",
				"phonetic": "/.../",
				"example": "I really like the shrimp.",
				"exampleZh": "我真的很喜欢这个虾。"
			},
			{
				"id": 6038,
				"en": "crab",
				"zh": "螃蟹",
				"phonetic": "/.../",
				"example": "The crab is very useful.",
				"exampleZh": "螃蟹非常有用。"
			},
			{
				"id": 6039,
				"en": "lobster",
				"zh": "龙虾",
				"phonetic": "/ər/",
				"example": "Do you understand this lobster?",
				"exampleZh": "你理解这个龙虾吗？"
			},
			{
				"id": 6040,
				"en": "egg",
				"zh": "鸡蛋",
				"phonetic": "/.../",
				"example": "egg plays a key role in our life.",
				"exampleZh": "鸡蛋在我们的生活中起着关键作用。"
			},
			{
				"id": 6041,
				"en": "cheese",
				"zh": "奶酪",
				"phonetic": "/iː/",
				"example": "This is an important cheese.",
				"exampleZh": "这是一个重要的奶酪。"
			},
			{
				"id": 6042,
				"en": "butter",
				"zh": "黄油",
				"phonetic": "/ər/",
				"example": "I really like the butter.",
				"exampleZh": "我真的很喜欢这个黄油。"
			},
			{
				"id": 6043,
				"en": "cream",
				"zh": "奶油",
				"phonetic": "/iː/",
				"example": "The cream is very useful.",
				"exampleZh": "奶油非常有用。"
			},
			{
				"id": 6044,
				"en": "milk",
				"zh": "牛奶",
				"phonetic": "/.../",
				"example": "Do you understand this milk?",
				"exampleZh": "你理解这个牛奶吗？"
			},
			{
				"id": 6045,
				"en": "yogurt",
				"zh": "酸奶",
				"phonetic": "/.../",
				"example": "yogurt plays a key role in our life.",
				"exampleZh": "酸奶在我们的生活中起着关键作用。"
			},
			{
				"id": 6046,
				"en": "tofu",
				"zh": "豆腐",
				"phonetic": "/.../",
				"example": "This is an important tofu.",
				"exampleZh": "这是一个重要的豆腐。"
			},
			{
				"id": 6047,
				"en": "potato",
				"zh": "土豆",
				"phonetic": "/.../",
				"example": "I really like the potato.",
				"exampleZh": "我真的很喜欢这个土豆。"
			},
			{
				"id": 6048,
				"en": "tomato",
				"zh": "番茄",
				"phonetic": "/.../",
				"example": "The tomato is very useful.",
				"exampleZh": "番茄非常有用。"
			},
			{
				"id": 6049,
				"en": "onion",
				"zh": "洋葱",
				"phonetic": "/.../",
				"example": "Do you understand this onion?",
				"exampleZh": "你理解这个洋葱吗？"
			},
			{
				"id": 6050,
				"en": "garlic",
				"zh": "大蒜",
				"phonetic": "/.../",
				"example": "garlic plays a key role in our life.",
				"exampleZh": "大蒜在我们的生活中起着关键作用。"
			},
			{
				"id": 6051,
				"en": "ginger",
				"zh": "姜",
				"phonetic": "/ər/",
				"example": "This is an important ginger.",
				"exampleZh": "这是一个重要的姜。"
			},
			{
				"id": 6052,
				"en": "pepper",
				"zh": "胡椒",
				"phonetic": "/ər/",
				"example": "I really like the pepper.",
				"exampleZh": "我真的很喜欢这个胡椒。"
			},
			{
				"id": 6053,
				"en": "salt",
				"zh": "盐",
				"phonetic": "/.../",
				"example": "The salt is very useful.",
				"exampleZh": "盐非常有用。"
			},
			{
				"id": 6054,
				"en": "sugar",
				"zh": "糖",
				"phonetic": "/ɑːr/",
				"example": "Do you understand this sugar?",
				"exampleZh": "你理解这个糖吗？"
			},
			{
				"id": 6055,
				"en": "oil",
				"zh": "油",
				"phonetic": "/ɔɪ/",
				"example": "oil plays a key role in our life.",
				"exampleZh": "油在我们的生活中起着关键作用。"
			},
			{
				"id": 6056,
				"en": "vinegar",
				"zh": "醋",
				"phonetic": "/ɑːr/",
				"example": "This is an important vinegar.",
				"exampleZh": "这是一个重要的醋。"
			},
			{
				"id": 6057,
				"en": "soy",
				"zh": "酱油",
				"phonetic": "/ɔɪ/",
				"example": "I really like the soy.",
				"exampleZh": "我真的很喜欢这个酱油。"
			},
			{
				"id": 6058,
				"en": "sauce",
				"zh": "酱汁",
				"phonetic": "/ɔː/",
				"example": "The sauce is very useful.",
				"exampleZh": "酱汁非常有用。"
			},
			{
				"id": 6059,
				"en": "ketchup",
				"zh": "番茄酱",
				"phonetic": "/.../",
				"example": "Do you understand this ketchup?",
				"exampleZh": "你理解这个番茄酱吗？"
			},
			{
				"id": 6060,
				"en": "mustard",
				"zh": "芥末",
				"phonetic": "/.../",
				"example": "mustard plays a key role in our life.",
				"exampleZh": "芥末在我们的生活中起着关键作用。"
			},
			{
				"id": 6061,
				"en": "mayonnaise",
				"zh": "蛋黄酱",
				"phonetic": "/eɪ/",
				"example": "This is an important mayonnaise.",
				"exampleZh": "这是一个重要的蛋黄酱。"
			},
			{
				"id": 6062,
				"en": "chili",
				"zh": "辣椒",
				"phonetic": "/.../",
				"example": "I really like the chili.",
				"exampleZh": "我真的很喜欢这个辣椒。"
			},
			{
				"id": 6063,
				"en": "spice",
				"zh": "香料",
				"phonetic": "/.../",
				"example": "The spice is very useful.",
				"exampleZh": "香料非常有用。"
			},
			{
				"id": 6064,
				"en": "herb",
				"zh": "香草",
				"phonetic": "/.../",
				"example": "Do you understand this herb?",
				"exampleZh": "你理解这个香草吗？"
			},
			{
				"id": 6065,
				"en": "curry",
				"zh": "咖喱",
				"phonetic": "/.../",
				"example": "curry plays a key role in our life.",
				"exampleZh": "咖喱在我们的生活中起着关键作用。"
			},
			{
				"id": 6066,
				"en": "flour",
				"zh": "面粉",
				"phonetic": "/aʊ/",
				"example": "This is an important flour.",
				"exampleZh": "这是一个重要的面粉。"
			},
			{
				"id": 6067,
				"en": "wheat",
				"zh": "小麦",
				"phonetic": "/w/",
				"example": "I really like the wheat.",
				"exampleZh": "我真的很喜欢这个小麦。"
			},
			{
				"id": 6068,
				"en": "corn",
				"zh": "玉米",
				"phonetic": "/.../",
				"example": "The corn is very useful.",
				"exampleZh": "玉米非常有用。"
			},
			{
				"id": 6069,
				"en": "bean",
				"zh": "豆子",
				"phonetic": "/iː/",
				"example": "Do you understand this bean?",
				"exampleZh": "你理解这个豆子吗？"
			},
			{
				"id": 6070,
				"en": "pea",
				"zh": "豌豆",
				"phonetic": "/iː/",
				"example": "pea plays a key role in our life.",
				"exampleZh": "豌豆在我们的生活中起着关键作用。"
			},
			{
				"id": 6071,
				"en": "carrot",
				"zh": "胡萝卜",
				"phonetic": "/.../",
				"example": "This is an important carrot.",
				"exampleZh": "这是一个重要的胡萝卜。"
			},
			{
				"id": 6072,
				"en": "cabbage",
				"zh": "卷心菜",
				"phonetic": "/.../",
				"example": "I really like the cabbage.",
				"exampleZh": "我真的很喜欢这个卷心菜。"
			},
			{
				"id": 6073,
				"en": "lettuce",
				"zh": "生菜",
				"phonetic": "/.../",
				"example": "The lettuce is very useful.",
				"exampleZh": "生菜非常有用。"
			},
			{
				"id": 6074,
				"en": "spinach",
				"zh": "菠菜",
				"phonetic": "/tʃ/",
				"example": "Do you understand this spinach?",
				"exampleZh": "你理解这个菠菜吗？"
			},
			{
				"id": 6075,
				"en": "broccoli",
				"zh": "西兰花",
				"phonetic": "/.../",
				"example": "broccoli plays a key role in our life.",
				"exampleZh": "西兰花在我们的生活中起着关键作用。"
			},
			{
				"id": 6076,
				"en": "mushroom",
				"zh": "蘑菇",
				"phonetic": "/uː/",
				"example": "This is an important mushroom.",
				"exampleZh": "这是一个重要的蘑菇。"
			},
			{
				"id": 6077,
				"en": "cucumber",
				"zh": "黄瓜",
				"phonetic": "/ər/",
				"example": "I really like the cucumber.",
				"exampleZh": "我真的很喜欢这个黄瓜。"
			},
			{
				"id": 6078,
				"en": "pumpkin",
				"zh": "南瓜",
				"phonetic": "/.../",
				"example": "The pumpkin is very useful.",
				"exampleZh": "南瓜非常有用。"
			},
			{
				"id": 6079,
				"en": "celery",
				"zh": "芹菜",
				"phonetic": "/.../",
				"example": "Do you understand this celery?",
				"exampleZh": "你理解这个芹菜吗？"
			},
			{
				"id": 6080,
				"en": "eggplant",
				"zh": "茄子",
				"phonetic": "/.../",
				"example": "eggplant plays a key role in our life.",
				"exampleZh": "茄子在我们的生活中起着关键作用。"
			},
			{
				"id": 6081,
				"en": "avocado",
				"zh": "牛油果",
				"phonetic": "/.../",
				"example": "This is an important avocado.",
				"exampleZh": "这是一个重要的牛油果。"
			},
			{
				"id": 6082,
				"en": "lemon",
				"zh": "柠檬",
				"phonetic": "/.../",
				"example": "I really like the lemon.",
				"exampleZh": "我真的很喜欢这个柠檬。"
			},
			{
				"id": 6083,
				"en": "lime",
				"zh": "青柠",
				"phonetic": "/.../",
				"example": "The lime is very useful.",
				"exampleZh": "青柠非常有用。"
			},
			{
				"id": 6084,
				"en": "orange",
				"zh": "橙子",
				"phonetic": "/.../",
				"example": "Do you understand this orange?",
				"exampleZh": "你理解这个橙子吗？"
			},
			{
				"id": 6085,
				"en": "apple",
				"zh": "苹果",
				"phonetic": "/.../",
				"example": "apple plays a key role in our life.",
				"exampleZh": "苹果在我们的生活中起着关键作用。"
			},
			{
				"id": 6086,
				"en": "banana",
				"zh": "香蕉",
				"phonetic": "/.../",
				"example": "This is an important banana.",
				"exampleZh": "这是一个重要的香蕉。"
			},
			{
				"id": 6087,
				"en": "grape",
				"zh": "葡萄",
				"phonetic": "/.../",
				"example": "I really like the grape.",
				"exampleZh": "我真的很喜欢这个葡萄。"
			},
			{
				"id": 6088,
				"en": "strawberry",
				"zh": "草莓",
				"phonetic": "/ɔː/",
				"example": "The strawberry is very useful.",
				"exampleZh": "草莓非常有用。"
			},
			{
				"id": 6089,
				"en": "blueberry",
				"zh": "蓝莓",
				"phonetic": "/.../",
				"example": "Do you understand this blueberry?",
				"exampleZh": "你理解这个蓝莓吗？"
			},
			{
				"id": 6090,
				"en": "cherry",
				"zh": "樱桃",
				"phonetic": "/.../",
				"example": "cherry plays a key role in our life.",
				"exampleZh": "樱桃在我们的生活中起着关键作用。"
			},
			{
				"id": 6091,
				"en": "peach",
				"zh": "桃子",
				"phonetic": "/tʃ/",
				"example": "This is an important peach.",
				"exampleZh": "这是一个重要的桃子。"
			},
			{
				"id": 6092,
				"en": "pear",
				"zh": "梨",
				"phonetic": "/ɑːr/",
				"example": "I really like the pear.",
				"exampleZh": "我真的很喜欢这个梨。"
			},
			{
				"id": 6093,
				"en": "mango",
				"zh": "芒果",
				"phonetic": "/.../",
				"example": "The mango is very useful.",
				"exampleZh": "芒果非常有用。"
			},
			{
				"id": 6094,
				"en": "pineapple",
				"zh": "菠萝",
				"phonetic": "/iː/",
				"example": "Do you understand this pineapple?",
				"exampleZh": "你理解这个菠萝吗？"
			},
			{
				"id": 6095,
				"en": "watermelon",
				"zh": "西瓜",
				"phonetic": "/.../",
				"example": "watermelon plays a key role in our life.",
				"exampleZh": "西瓜在我们的生活中起着关键作用。"
			},
			{
				"id": 6096,
				"en": "coconut",
				"zh": "椰子",
				"phonetic": "/.../",
				"example": "This is an important coconut.",
				"exampleZh": "这是一个重要的椰子。"
			},
			{
				"id": 6097,
				"en": "cook",
				"zh": "烹饪",
				"phonetic": "/uː/",
				"example": "She wants to cook this task.",
				"exampleZh": "她想烹饪这个任务。"
			},
			{
				"id": 6098,
				"en": "boil",
				"zh": "煮",
				"phonetic": "/ɔɪ/",
				"example": "Let's boil together.",
				"exampleZh": "让我们一起煮吧。"
			},
			{
				"id": 6099,
				"en": "steam",
				"zh": "蒸",
				"phonetic": "/iː/",
				"example": "They decided to steam the plan.",
				"exampleZh": "他们决定蒸这个计划。"
			},
			{
				"id": 6100,
				"en": "fry",
				"zh": "煎；炸",
				"phonetic": "/.../",
				"example": "I need to fry before the deadline.",
				"exampleZh": "我需要在截止日期前煎；炸。"
			},
			{
				"id": 6101,
				"en": "stir-fry",
				"zh": "炒",
				"phonetic": "/.../",
				"example": "We should stir-fry more carefully.",
				"exampleZh": "我们应该更仔细地炒。"
			},
			{
				"id": 6102,
				"en": "deep-fry",
				"zh": "油炸",
				"phonetic": "/iː/",
				"example": "She wants to deep-fry this task.",
				"exampleZh": "她想油炸这个任务。"
			},
			{
				"id": 6103,
				"en": "roast",
				"zh": "烤",
				"phonetic": "/oʊ/",
				"example": "Let's roast together.",
				"exampleZh": "让我们一起烤吧。"
			},
			{
				"id": 6104,
				"en": "bake",
				"zh": "烘焙",
				"phonetic": "/.../",
				"example": "They decided to bake the plan.",
				"exampleZh": "他们决定烘焙这个计划。"
			},
			{
				"id": 6105,
				"en": "grill",
				"zh": "烧烤",
				"phonetic": "/.../",
				"example": "I need to grill before the deadline.",
				"exampleZh": "我需要在截止日期前烧烤。"
			},
			{
				"id": 6106,
				"en": "broil",
				"zh": "炙烤",
				"phonetic": "/ɔɪ/",
				"example": "We should broil more carefully.",
				"exampleZh": "我们应该更仔细地炙烤。"
			},
			{
				"id": 6107,
				"en": "stew",
				"zh": "炖",
				"phonetic": "/.../",
				"example": "She wants to stew this task.",
				"exampleZh": "她想炖这个任务。"
			},
			{
				"id": 6108,
				"en": "braise",
				"zh": "焖",
				"phonetic": "/eɪ/",
				"example": "Let's braise together.",
				"exampleZh": "让我们一起焖吧。"
			},
			{
				"id": 6109,
				"en": "simmer",
				"zh": "小火煮",
				"phonetic": "/ər/",
				"example": "They decided to simmer the plan.",
				"exampleZh": "他们决定小火煮这个计划。"
			},
			{
				"id": 6110,
				"en": "poach",
				"zh": "水煮",
				"phonetic": "/tʃ/",
				"example": "I need to poach before the deadline.",
				"exampleZh": "我需要在截止日期前水煮。"
			},
			{
				"id": 6111,
				"en": "blanch",
				"zh": "焯",
				"phonetic": "/tʃ/",
				"example": "We should blanch more carefully.",
				"exampleZh": "我们应该更仔细地焯。"
			},
			{
				"id": 6112,
				"en": "marinate",
				"zh": "腌制",
				"phonetic": "/.../",
				"example": "She wants to marinate this task.",
				"exampleZh": "她想腌制这个任务。"
			},
			{
				"id": 6113,
				"en": "season",
				"zh": "调味",
				"phonetic": "/iː/",
				"example": "Let's season together.",
				"exampleZh": "让我们一起调味吧。"
			},
			{
				"id": 6114,
				"en": "stir",
				"zh": "搅拌",
				"phonetic": "/.../",
				"example": "They decided to stir the plan.",
				"exampleZh": "他们决定搅拌这个计划。"
			},
			{
				"id": 6115,
				"en": "mix",
				"zh": "混合",
				"phonetic": "/.../",
				"example": "I need to mix before the deadline.",
				"exampleZh": "我需要在截止日期前混合。"
			},
			{
				"id": 6116,
				"en": "blend",
				"zh": "搅拌",
				"phonetic": "/.../",
				"example": "We should blend more carefully.",
				"exampleZh": "我们应该更仔细地搅拌。"
			},
			{
				"id": 6117,
				"en": "whisk",
				"zh": "搅打",
				"phonetic": "/w/",
				"example": "She wants to whisk this task.",
				"exampleZh": "她想搅打这个任务。"
			},
			{
				"id": 6118,
				"en": "knead",
				"zh": "揉",
				"phonetic": "/iː/",
				"example": "Let's knead together.",
				"exampleZh": "让我们一起揉吧。"
			},
			{
				"id": 6119,
				"en": "roll",
				"zh": "擀",
				"phonetic": "/.../",
				"example": "They decided to roll the plan.",
				"exampleZh": "他们决定擀这个计划。"
			},
			{
				"id": 6120,
				"en": "chop",
				"zh": "切",
				"phonetic": "/.../",
				"example": "I need to chop before the deadline.",
				"exampleZh": "我需要在截止日期前切。"
			},
			{
				"id": 6121,
				"en": "slice",
				"zh": "切片",
				"phonetic": "/.../",
				"example": "We should slice more carefully.",
				"exampleZh": "我们应该更仔细地切片。"
			},
			{
				"id": 6122,
				"en": "dice",
				"zh": "切丁",
				"phonetic": "/.../",
				"example": "She wants to dice this task.",
				"exampleZh": "她想切丁这个任务。"
			},
			{
				"id": 6123,
				"en": "mince",
				"zh": "剁碎",
				"phonetic": "/.../",
				"example": "Let's mince together.",
				"exampleZh": "让我们一起剁碎吧。"
			},
			{
				"id": 6124,
				"en": "grate",
				"zh": "磨碎",
				"phonetic": "/.../",
				"example": "They decided to grate the plan.",
				"exampleZh": "他们决定磨碎这个计划。"
			},
			{
				"id": 6125,
				"en": "peel",
				"zh": "削皮",
				"phonetic": "/iː/",
				"example": "I need to peel before the deadline.",
				"exampleZh": "我需要在截止日期前削皮。"
			},
			{
				"id": 6126,
				"en": "mash",
				"zh": "捣碎",
				"phonetic": "/ʃ/",
				"example": "We should mash more carefully.",
				"exampleZh": "我们应该更仔细地捣碎。"
			},
			{
				"id": 6127,
				"en": "spread",
				"zh": "涂抹",
				"phonetic": "/iː/",
				"example": "She wants to spread this task.",
				"exampleZh": "她想涂抹这个任务。"
			},
			{
				"id": 6128,
				"en": "pour",
				"zh": "倒",
				"phonetic": "/aʊ/",
				"example": "Let's pour together.",
				"exampleZh": "让我们一起倒吧。"
			},
			{
				"id": 6129,
				"en": "drain",
				"zh": "沥干",
				"phonetic": "/eɪ/",
				"example": "They decided to drain the plan.",
				"exampleZh": "他们决定沥干这个计划。"
			},
			{
				"id": 6130,
				"en": "strain",
				"zh": "过滤",
				"phonetic": "/eɪ/",
				"example": "I need to strain before the deadline.",
				"exampleZh": "我需要在截止日期前过滤。"
			},
			{
				"id": 6131,
				"en": "sift",
				"zh": "筛",
				"phonetic": "/.../",
				"example": "We should sift more carefully.",
				"exampleZh": "我们应该更仔细地筛。"
			},
			{
				"id": 6132,
				"en": "measure",
				"zh": "测量",
				"phonetic": "/ʒər/",
				"example": "She wants to measure this task.",
				"exampleZh": "她想测量这个任务。"
			},
			{
				"id": 6133,
				"en": "weigh",
				"zh": "称重",
				"phonetic": "/f/",
				"example": "Let's weigh together.",
				"exampleZh": "让我们一起称重吧。"
			},
			{
				"id": 6134,
				"en": "taste",
				"zh": "尝",
				"phonetic": "/.../",
				"example": "They decided to taste the plan.",
				"exampleZh": "他们决定尝这个计划。"
			},
			{
				"id": 6135,
				"en": "flavor",
				"zh": "风味",
				"phonetic": "/ər/",
				"example": "flavor plays a key role in our life.",
				"exampleZh": "风味在我们的生活中起着关键作用。"
			},
			{
				"id": 6136,
				"en": "sweet",
				"zh": "甜的",
				"phonetic": "/iː/",
				"example": "This is very sweet.",
				"exampleZh": "这非常甜的。"
			},
			{
				"id": 6137,
				"en": "sour",
				"zh": "酸的",
				"phonetic": "/aʊ/",
				"example": "She looks sour today.",
				"exampleZh": "她今天看起来很酸的。"
			},
			{
				"id": 6138,
				"en": "bitter",
				"zh": "苦的",
				"phonetic": "/ər/",
				"example": "It's a bitter idea.",
				"exampleZh": "这是一个苦的的主意。"
			},
			{
				"id": 6139,
				"en": "salty",
				"zh": "咸的",
				"phonetic": "/.../",
				"example": "The result is quite salty.",
				"exampleZh": "结果是相当咸的的。"
			},
			{
				"id": 6140,
				"en": "spicy",
				"zh": "辣的",
				"phonetic": "/.../",
				"example": "He found the task spicy.",
				"exampleZh": "他发现这个任务是辣的的。"
			},
			{
				"id": 6141,
				"en": "hot",
				"zh": "辣的",
				"phonetic": "/.../",
				"example": "This is very hot.",
				"exampleZh": "这非常辣的。"
			},
			{
				"id": 6142,
				"en": "mild",
				"zh": "清淡的",
				"phonetic": "/.../",
				"example": "She looks mild today.",
				"exampleZh": "她今天看起来很清淡的。"
			},
			{
				"id": 6143,
				"en": "bland",
				"zh": "无味的",
				"phonetic": "/.../",
				"example": "It's a bland idea.",
				"exampleZh": "这是一个无味的的主意。"
			},
			{
				"id": 6144,
				"en": "savory",
				"zh": "咸香的",
				"phonetic": "/.../",
				"example": "The result is quite savory.",
				"exampleZh": "结果是相当咸香的的。"
			},
			{
				"id": 6145,
				"en": "rich",
				"zh": "浓郁的",
				"phonetic": "/tʃ/",
				"example": "He found the task rich.",
				"exampleZh": "他发现这个任务是浓郁的的。"
			},
			{
				"id": 6146,
				"en": "creamy",
				"zh": "奶油般的",
				"phonetic": "/iː/",
				"example": "This is very creamy.",
				"exampleZh": "这非常奶油般的。"
			},
			{
				"id": 6147,
				"en": "crispy",
				"zh": "酥脆的",
				"phonetic": "/.../",
				"example": "She looks crispy today.",
				"exampleZh": "她今天看起来很酥脆的。"
			},
			{
				"id": 6148,
				"en": "crunchy",
				"zh": "松脆的",
				"phonetic": "/.../",
				"example": "It's a crunchy idea.",
				"exampleZh": "这是一个松脆的的主意。"
			},
			{
				"id": 6149,
				"en": "tender",
				"zh": "嫩的",
				"phonetic": "/ər/",
				"example": "The result is quite tender.",
				"exampleZh": "结果是相当嫩的的。"
			},
			{
				"id": 6150,
				"en": "tough",
				"zh": "老的",
				"phonetic": "/ʌf/",
				"example": "He found the task tough.",
				"exampleZh": "他发现这个任务是老的的。"
			},
			{
				"id": 6151,
				"en": "chewy",
				"zh": "有嚼劲的",
				"phonetic": "/.../",
				"example": "This is very chewy.",
				"exampleZh": "这非常有嚼劲的。"
			},
			{
				"id": 6152,
				"en": "juicy",
				"zh": "多汁的",
				"phonetic": "/.../",
				"example": "She looks juicy today.",
				"exampleZh": "她今天看起来很多汁的。"
			},
			{
				"id": 6153,
				"en": "fresh",
				"zh": "新鲜的",
				"phonetic": "/ʃ/",
				"example": "It's a fresh idea.",
				"exampleZh": "这是一个新鲜的的主意。"
			},
			{
				"id": 6154,
				"en": "stale",
				"zh": "不新鲜的",
				"phonetic": "/.../",
				"example": "The result is quite stale.",
				"exampleZh": "结果是相当不新鲜的的。"
			},
			{
				"id": 6155,
				"en": "raw",
				"zh": "生的",
				"phonetic": "/ɔː/",
				"example": "He found the task raw.",
				"exampleZh": "他发现这个任务是生的的。"
			},
			{
				"id": 6156,
				"en": "rare",
				"zh": "三分熟的",
				"phonetic": "/.../",
				"example": "This is very rare.",
				"exampleZh": "这非常三分熟的。"
			},
			{
				"id": 6157,
				"en": "medium",
				"zh": "五分熟的",
				"phonetic": "/.../",
				"example": "She looks medium today.",
				"exampleZh": "她今天看起来很五分熟的。"
			},
			{
				"id": 6158,
				"en": "well-done",
				"zh": "全熟的",
				"phonetic": "/.../",
				"example": "It's a well-done idea.",
				"exampleZh": "这是一个全熟的的主意。"
			},
			{
				"id": 6159,
				"en": "burnt",
				"zh": "烧焦的",
				"phonetic": "/.../",
				"example": "The result is quite burnt.",
				"exampleZh": "结果是相当烧焦的的。"
			},
			{
				"id": 6160,
				"en": "ripe",
				"zh": "熟的",
				"phonetic": "/.../",
				"example": "He found the task ripe.",
				"exampleZh": "他发现这个任务是熟的的。"
			},
			{
				"id": 6161,
				"en": "rotten",
				"zh": "腐烂的",
				"phonetic": "/.../",
				"example": "This is very rotten.",
				"exampleZh": "这非常腐烂的。"
			},
			{
				"id": 6162,
				"en": "delicious",
				"zh": "美味的",
				"phonetic": "/ʃəs/",
				"example": "She looks delicious today.",
				"exampleZh": "她今天看起来很美味的。"
			},
			{
				"id": 6163,
				"en": "tasty",
				"zh": "好吃的",
				"phonetic": "/.../",
				"example": "It's a tasty idea.",
				"exampleZh": "这是一个好吃的的主意。"
			},
			{
				"id": 6164,
				"en": "yummy",
				"zh": "好吃的",
				"phonetic": "/.../",
				"example": "The result is quite yummy.",
				"exampleZh": "结果是相当好吃的的。"
			},
			{
				"id": 6165,
				"en": "disgusting",
				"zh": "难吃的",
				"phonetic": "/ɪŋ/",
				"example": "He found the task disgusting.",
				"exampleZh": "他发现这个任务是难吃的的。"
			},
			{
				"id": 6166,
				"en": "awful",
				"zh": "很差的",
				"phonetic": "/fəl/",
				"example": "This is very awful.",
				"exampleZh": "这非常很差的。"
			},
			{
				"id": 6167,
				"en": "knife",
				"zh": "刀",
				"phonetic": "/.../",
				"example": "I really like the knife.",
				"exampleZh": "我真的很喜欢这个刀。"
			},
			{
				"id": 6168,
				"en": "fork",
				"zh": "叉",
				"phonetic": "/.../",
				"example": "The fork is very useful.",
				"exampleZh": "叉非常有用。"
			},
			{
				"id": 6169,
				"en": "spoon",
				"zh": "勺子",
				"phonetic": "/uː/",
				"example": "Do you understand this spoon?",
				"exampleZh": "你理解这个勺子吗？"
			},
			{
				"id": 6170,
				"en": "chopsticks",
				"zh": "筷子",
				"phonetic": "/.../",
				"example": "chopsticks plays a key role in our life.",
				"exampleZh": "筷子在我们的生活中起着关键作用。"
			},
			{
				"id": 6171,
				"en": "plate",
				"zh": "盘子",
				"phonetic": "/.../",
				"example": "This is an important plate.",
				"exampleZh": "这是一个重要的盘子。"
			},
			{
				"id": 6172,
				"en": "bowl",
				"zh": "碗",
				"phonetic": "/aʊ/",
				"example": "I really like the bowl.",
				"exampleZh": "我真的很喜欢这个碗。"
			},
			{
				"id": 6173,
				"en": "cup",
				"zh": "杯子",
				"phonetic": "/.../",
				"example": "The cup is very useful.",
				"exampleZh": "杯子非常有用。"
			},
			{
				"id": 6174,
				"en": "glass",
				"zh": "玻璃杯",
				"phonetic": "/.../",
				"example": "Do you understand this glass?",
				"exampleZh": "你理解这个玻璃杯吗？"
			},
			{
				"id": 6175,
				"en": "mug",
				"zh": "马克杯",
				"phonetic": "/.../",
				"example": "mug plays a key role in our life.",
				"exampleZh": "马克杯在我们的生活中起着关键作用。"
			},
			{
				"id": 6176,
				"en": "bottle",
				"zh": "瓶子",
				"phonetic": "/.../",
				"example": "This is an important bottle.",
				"exampleZh": "这是一个重要的瓶子。"
			},
			{
				"id": 6177,
				"en": "pot",
				"zh": "锅",
				"phonetic": "/.../",
				"example": "I really like the pot.",
				"exampleZh": "我真的很喜欢这个锅。"
			},
			{
				"id": 6178,
				"en": "pan",
				"zh": "平底锅",
				"phonetic": "/.../",
				"example": "The pan is very useful.",
				"exampleZh": "平底锅非常有用。"
			},
			{
				"id": 6179,
				"en": "wok",
				"zh": "炒锅",
				"phonetic": "/.../",
				"example": "Do you understand this wok?",
				"exampleZh": "你理解这个炒锅吗？"
			},
			{
				"id": 6180,
				"en": "lid",
				"zh": "盖子",
				"phonetic": "/.../",
				"example": "lid plays a key role in our life.",
				"exampleZh": "盖子在我们的生活中起着关键作用。"
			},
			{
				"id": 6181,
				"en": "tray",
				"zh": "托盘",
				"phonetic": "/eɪ/",
				"example": "This is an important tray.",
				"exampleZh": "这是一个重要的托盘。"
			},
			{
				"id": 6182,
				"en": "napkin",
				"zh": "餐巾",
				"phonetic": "/.../",
				"example": "I really like the napkin.",
				"exampleZh": "我真的很喜欢这个餐巾。"
			},
			{
				"id": 6183,
				"en": "tablecloth",
				"zh": "桌布",
				"phonetic": "/əbəl/",
				"example": "The tablecloth is very useful.",
				"exampleZh": "桌布非常有用。"
			},
			{
				"id": 6184,
				"en": "menu",
				"zh": "菜单",
				"phonetic": "/.../",
				"example": "Do you understand this menu?",
				"exampleZh": "你理解这个菜单吗？"
			},
			{
				"id": 6185,
				"en": "order",
				"zh": "点菜",
				"phonetic": "/ər/",
				"example": "I need to order before the deadline.",
				"exampleZh": "我需要在截止日期前点菜。"
			},
			{
				"id": 6186,
				"en": "serve",
				"zh": "上菜",
				"phonetic": "/.../",
				"example": "We should serve more carefully.",
				"exampleZh": "我们应该更仔细地上菜。"
			},
			{
				"id": 6187,
				"en": "waiter",
				"zh": "服务员",
				"phonetic": "/ər/",
				"example": "I really like the waiter.",
				"exampleZh": "我真的很喜欢这个服务员。"
			},
			{
				"id": 6188,
				"en": "waitress",
				"zh": "女服务员",
				"phonetic": "/eɪ/",
				"example": "The waitress is very useful.",
				"exampleZh": "女服务员非常有用。"
			},
			{
				"id": 6189,
				"en": "chef",
				"zh": "主厨",
				"phonetic": "/.../",
				"example": "Do you understand this chef?",
				"exampleZh": "你理解这个主厨吗？"
			},
			{
				"id": 6190,
				"en": "customer",
				"zh": "顾客",
				"phonetic": "/ər/",
				"example": "customer plays a key role in our life.",
				"exampleZh": "顾客在我们的生活中起着关键作用。"
			},
			{
				"id": 6191,
				"en": "reservation",
				"zh": "预订",
				"phonetic": "/ʃən/",
				"example": "This is an important reservation.",
				"exampleZh": "这是一个重要的预订。"
			},
			{
				"id": 6192,
				"en": "table",
				"zh": "餐桌",
				"phonetic": "/əbəl/",
				"example": "I really like the table.",
				"exampleZh": "我真的很喜欢这个餐桌。"
			},
			{
				"id": 6193,
				"en": "seat",
				"zh": "座位",
				"phonetic": "/iː/",
				"example": "The seat is very useful.",
				"exampleZh": "座位非常有用。"
			},
			{
				"id": 6194,
				"en": "bill",
				"zh": "账单",
				"phonetic": "/.../",
				"example": "Do you understand this bill?",
				"exampleZh": "你理解这个账单吗？"
			},
			{
				"id": 6195,
				"en": "check",
				"zh": "买单",
				"phonetic": "/k/",
				"example": "check plays a key role in our life.",
				"exampleZh": "买单在我们的生活中起着关键作用。"
			},
			{
				"id": 6196,
				"en": "tip",
				"zh": "小费",
				"phonetic": "/.../",
				"example": "This is an important tip.",
				"exampleZh": "这是一个重要的小费。"
			},
			{
				"id": 6197,
				"en": "split",
				"zh": "分摊",
				"phonetic": "/.../",
				"example": "She wants to split this task.",
				"exampleZh": "她想分摊这个任务。"
			},
			{
				"id": 6198,
				"en": "treat",
				"zh": "请客",
				"phonetic": "/iː/",
				"example": "Let's treat together.",
				"exampleZh": "让我们一起请客吧。"
			},
			{
				"id": 6199,
				"en": "invite",
				"zh": "邀请",
				"phonetic": "/.../",
				"example": "They decided to invite the plan.",
				"exampleZh": "他们决定邀请这个计划。"
			},
			{
				"id": 6200,
				"en": "toast",
				"zh": "敬酒",
				"phonetic": "/oʊ/",
				"example": "toast plays a key role in our life.",
				"exampleZh": "敬酒在我们的生活中起着关键作用。"
			},
			{
				"id": 6201,
				"en": "cheers",
				"zh": "干杯",
				"phonetic": "/iː/",
				"example": "Let's talk about cheers.",
				"exampleZh": "让我们来谈谈干杯吧。"
			},
			{
				"id": 6202,
				"en": "drink",
				"zh": "饮料",
				"phonetic": "/.../",
				"example": "I really like the drink.",
				"exampleZh": "我真的很喜欢这个饮料。"
			},
			{
				"id": 6203,
				"en": "water",
				"zh": "水",
				"phonetic": "/ər/",
				"example": "The water is very useful.",
				"exampleZh": "水非常有用。"
			},
			{
				"id": 6204,
				"en": "tea",
				"zh": "茶",
				"phonetic": "/iː/",
				"example": "Do you understand this tea?",
				"exampleZh": "你理解这个茶吗？"
			},
			{
				"id": 6205,
				"en": "coffee",
				"zh": "咖啡",
				"phonetic": "/iː/",
				"example": "coffee plays a key role in our life.",
				"exampleZh": "咖啡在我们的生活中起着关键作用。"
			},
			{
				"id": 6206,
				"en": "juice",
				"zh": "果汁",
				"phonetic": "/.../",
				"example": "This is an important juice.",
				"exampleZh": "这是一个重要的果汁。"
			},
			{
				"id": 6207,
				"en": "soda",
				"zh": "汽水",
				"phonetic": "/.../",
				"example": "I really like the soda.",
				"exampleZh": "我真的很喜欢这个汽水。"
			},
			{
				"id": 6208,
				"en": "cola",
				"zh": "可乐",
				"phonetic": "/.../",
				"example": "The cola is very useful.",
				"exampleZh": "可乐非常有用。"
			},
			{
				"id": 6209,
				"en": "smoothie",
				"zh": "冰沙",
				"phonetic": "/uː/",
				"example": "Do you understand this smoothie?",
				"exampleZh": "你理解这个冰沙吗？"
			},
			{
				"id": 6210,
				"en": "milkshake",
				"zh": "奶昔",
				"phonetic": "/.../",
				"example": "milkshake plays a key role in our life.",
				"exampleZh": "奶昔在我们的生活中起着关键作用。"
			},
			{
				"id": 6211,
				"en": "beer",
				"zh": "啤酒",
				"phonetic": "/ər/",
				"example": "This is an important beer.",
				"exampleZh": "这是一个重要的啤酒。"
			},
			{
				"id": 6212,
				"en": "wine",
				"zh": "葡萄酒",
				"phonetic": "/.../",
				"example": "I really like the wine.",
				"exampleZh": "我真的很喜欢这个葡萄酒。"
			},
			{
				"id": 6213,
				"en": "cocktail",
				"zh": "鸡尾酒",
				"phonetic": "/eɪ/",
				"example": "The cocktail is very useful.",
				"exampleZh": "鸡尾酒非常有用。"
			},
			{
				"id": 6214,
				"en": "whisky",
				"zh": "威士忌",
				"phonetic": "/w/",
				"example": "Do you understand this whisky?",
				"exampleZh": "你理解这个威士忌吗？"
			},
			{
				"id": 6215,
				"en": "champagne",
				"zh": "香槟",
				"phonetic": "/.../",
				"example": "champagne plays a key role in our life.",
				"exampleZh": "香槟在我们的生活中起着关键作用。"
			},
			{
				"id": 6216,
				"en": "liquor",
				"zh": "烈酒",
				"phonetic": "/ər/",
				"example": "This is an important liquor.",
				"exampleZh": "这是一个重要的烈酒。"
			},
			{
				"id": 6217,
				"en": "recipe",
				"zh": "食谱",
				"phonetic": "/.../",
				"example": "I really like the recipe.",
				"exampleZh": "我真的很喜欢这个食谱。"
			},
			{
				"id": 6218,
				"en": "ingredient",
				"zh": "食材",
				"phonetic": "/.../",
				"example": "The ingredient is very useful.",
				"exampleZh": "食材非常有用。"
			},
			{
				"id": 6219,
				"en": "portion",
				"zh": "份量",
				"phonetic": "/ʃən/",
				"example": "Do you understand this portion?",
				"exampleZh": "你理解这个份量吗？"
			},
			{
				"id": 6220,
				"en": "serving",
				"zh": "一份",
				"phonetic": "/ɪŋ/",
				"example": "serving plays a key role in our life.",
				"exampleZh": "一份在我们的生活中起着关键作用。"
			},
			{
				"id": 6221,
				"en": "calorie",
				"zh": "卡路里",
				"phonetic": "/.../",
				"example": "This is an important calorie.",
				"exampleZh": "这是一个重要的卡路里。"
			},
			{
				"id": 6222,
				"en": "diet",
				"zh": "饮食",
				"phonetic": "/.../",
				"example": "I really like the diet.",
				"exampleZh": "我真的很喜欢这个饮食。"
			},
			{
				"id": 6223,
				"en": "vegetarian",
				"zh": "素食者",
				"phonetic": "/.../",
				"example": "The vegetarian is very useful.",
				"exampleZh": "素食者非常有用。"
			},
			{
				"id": 6224,
				"en": "vegan",
				"zh": "纯素食者",
				"phonetic": "/.../",
				"example": "Do you understand this vegan?",
				"exampleZh": "你理解这个纯素食者吗？"
			},
			{
				"id": 6225,
				"en": "allergy",
				"zh": "过敏",
				"phonetic": "/.../",
				"example": "allergy plays a key role in our life.",
				"exampleZh": "过敏在我们的生活中起着关键作用。"
			},
			{
				"id": 6226,
				"en": "allergic",
				"zh": "过敏的",
				"phonetic": "/.../",
				"example": "This is very allergic.",
				"exampleZh": "这非常过敏的。"
			},
			{
				"id": 6227,
				"en": "gluten",
				"zh": "麸质",
				"phonetic": "/.../",
				"example": "I really like the gluten.",
				"exampleZh": "我真的很喜欢这个麸质。"
			},
			{
				"id": 6228,
				"en": "organic",
				"zh": "有机的",
				"phonetic": "/.../",
				"example": "It's a organic idea.",
				"exampleZh": "这是一个有机的的主意。"
			},
			{
				"id": 6229,
				"en": "frozen",
				"zh": "冷冻的",
				"phonetic": "/.../",
				"example": "The result is quite frozen.",
				"exampleZh": "结果是相当冷冻的的。"
			},
			{
				"id": 6230,
				"en": "canned",
				"zh": "罐装的",
				"phonetic": "/d/",
				"example": "He found the task canned.",
				"exampleZh": "他发现这个任务是罐装的的。"
			},
			{
				"id": 6231,
				"en": "dried",
				"zh": "干的",
				"phonetic": "/d/",
				"example": "This is very dried.",
				"exampleZh": "这非常干的。"
			},
			{
				"id": 6232,
				"en": "pickled",
				"zh": "腌制的",
				"phonetic": "/d/",
				"example": "She looks pickled today.",
				"exampleZh": "她今天看起来很腌制的。"
			},
			{
				"id": 6233,
				"en": "smoked",
				"zh": "烟熏的",
				"phonetic": "/d/",
				"example": "It's a smoked idea.",
				"exampleZh": "这是一个烟熏的的主意。"
			},
			{
				"id": 6234,
				"en": "cured",
				"zh": "腌制的",
				"phonetic": "/d/",
				"example": "The result is quite cured.",
				"exampleZh": "结果是相当腌制的的。"
			},
			{
				"id": 6235,
				"en": "fermented",
				"zh": "发酵的",
				"phonetic": "/mənt/",
				"example": "He found the task fermented.",
				"exampleZh": "他发现这个任务是发酵的的。"
			},
			{
				"id": 6236,
				"en": "homemade",
				"zh": "自制的",
				"phonetic": "/.../",
				"example": "This is very homemade.",
				"exampleZh": "这非常自制的。"
			},
			{
				"id": 6237,
				"en": "takeout",
				"zh": "外卖",
				"phonetic": "/aʊ/",
				"example": "I really like the takeout.",
				"exampleZh": "我真的很喜欢这个外卖。"
			},
			{
				"id": 6238,
				"en": "delivery",
				"zh": "外卖配送",
				"phonetic": "/.../",
				"example": "The delivery is very useful.",
				"exampleZh": "外卖配送非常有用。"
			},
			{
				"id": 6239,
				"en": "leftover",
				"zh": "剩菜",
				"phonetic": "/ər/",
				"example": "Do you understand this leftover?",
				"exampleZh": "你理解这个剩菜吗？"
			},
			{
				"id": 6240,
				"en": "appetite",
				"zh": "胃口",
				"phonetic": "/.../",
				"example": "appetite plays a key role in our life.",
				"exampleZh": "胃口在我们的生活中起着关键作用。"
			},
			{
				"id": 6241,
				"en": "hungry",
				"zh": "饿的",
				"phonetic": "/.../",
				"example": "This is very hungry.",
				"exampleZh": "这非常饿的。"
			},
			{
				"id": 6242,
				"en": "thirsty",
				"zh": "渴的",
				"phonetic": "/.../",
				"example": "She looks thirsty today.",
				"exampleZh": "她今天看起来很渴的。"
			},
			{
				"id": 6243,
				"en": "full",
				"zh": "饱的",
				"phonetic": "/.../",
				"example": "It's a full idea.",
				"exampleZh": "这是一个饱的的主意。"
			},
			{
				"id": 6244,
				"en": "starving",
				"zh": "饿极了的",
				"phonetic": "/ɪŋ/",
				"example": "The result is quite starving.",
				"exampleZh": "结果是相当饿极了的的。"
			},
			{
				"id": 6245,
				"en": "stuffed",
				"zh": "吃撑了的",
				"phonetic": "/d/",
				"example": "He found the task stuffed.",
				"exampleZh": "他发现这个任务是吃撑了的的。"
			}
		]
	}
]

const dailySentences = [
	{ "en": "The secret of getting ahead is getting started.", "zh": "成功的秘诀就是开始行动。", "author": "Mark Twain" },
	{ "en": "It does not matter how slowly you go as long as you do not stop.", "zh": "走得慢不要紧，只要你不停止。", "author": "Confucius" },
	{ "en": "Believe you can and you're halfway there.", "zh": "相信你能做到，你就已经成功了一半。", "author": "Theodore Roosevelt" },
	{ "en": "The only way to do great work is to love what you do.", "zh": "做出伟大成就的唯一方法就是热爱你所做的事。", "author": "Steve Jobs" },
	{ "en": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "zh": "成功不是终点，失败也不是末日：重要的是继续前进的勇气。", "author": "Winston Churchill" },
	{ "en": "The future belongs to those who believe in the beauty of their dreams.", "zh": "未来属于那些相信梦想之美的人。", "author": "Eleanor Roosevelt" },
	{ "en": "Don't watch the clock; do what it does. Keep going.", "zh": "不要盯着时钟看；做时钟做的事。继续前进。", "author": "Sam Levenson" },
	{ "en": "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", "zh": "曾经尝试过。曾经失败过。没关系。再试一次。再失败一次。失败得更好。", "author": "Samuel Beckett" },
	{ "en": "Be yourself; everyone else is already taken.", "zh": "做你自己，因为别人都有人做了。", "author": "Oscar Wilde" },
	{ "en": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "zh": "有两样东西是无限的：宇宙和人类的愚蠢；对于宇宙我不太确定。", "author": "Albert Einstein" },
	{ "en": "Be the change that you wish to see in the world.", "zh": "欲变世界，先变其身。", "author": "Mahatma Gandhi" },
	{ "en": "In three words I can sum up everything I've learned about life: it goes on.", "zh": "用三个字我可以总结我学到的人生一切：继续走。", "author": "Robert Frost" },
	{ "en": "If you tell the truth, you don't have to remember anything.", "zh": "如果你说真话，你就不必记住任何事。", "author": "Mark Twain" },
	{ "en": "A friend is someone who knows all about you and still loves you.", "zh": "朋友是了解你一切却依然爱你的人。", "author": "Elbert Hubbard" },
	{ "en": "To live is the rarest thing in the world. Most people exist, that is all.", "zh": "活着是世上最稀罕的事。大多数人只是存在，仅此而已。", "author": "Oscar Wilde" },
	{ "en": "Always forgive your enemies; nothing annoys them so much.", "zh": "永远宽恕你的敌人，没有什么比这更令他们恼怒了。", "author": "Oscar Wilde" },
	{ "en": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", "zh": "黑暗无法驱散黑暗，只有光可以；仇恨无法驱散仇恨，只有爱可以。", "author": "Martin Luther King Jr." },
	{ "en": "The best way to predict the future is to create it.", "zh": "预测未来最好的方法就是去创造它。", "author": "Peter Drucker" },
	{ "en": "Do what you can, with what you have, where you are.", "zh": "用你所有，在你所在，做你能做。", "author": "Theodore Roosevelt" },
	{ "en": "It is during our darkest moments that we must focus to see the light.", "zh": "在最黑暗的时刻，我们更要聚焦去看光明。", "author": "Aristotle" },
	{ "en": "The only impossible journey is the one you never begin.", "zh": "唯一不可能的旅程是你从未开始的那一个。", "author": "Tony Robbins" },
	{ "en": "Life is what happens when you're busy making other plans.", "zh": "生活就是在你忙于制定其他计划时发生的事情。", "author": "John Lennon" },
	{ "en": "The purpose of our lives is to be happy.", "zh": "我们人生的目的就是快乐。", "author": "Dalai Lama" },
	{ "en": "Get busy living or get busy dying.", "zh": "要么忙于生存，要么忙于死亡。", "author": "Stephen King" },
	{ "en": "You only live once, but if you do it right, once is enough.", "zh": "你只活一次，但如果你活对了，一次足矣。", "author": "Mae West" },
	{ "en": "Many of life's failures are people who did not realize how close they were to success when they gave up.", "zh": "很多人生失败的人都没有意识到，他们放弃时离成功有多近。", "author": "Thomas Edison" },
	{ "en": "If you want to live a happy life, tie it to a goal, not to people or things.", "zh": "如果你想过快乐的生活，把它绑在目标上，而非人或物上。", "author": "Albert Einstein" },
	{ "en": "Never let the fear of striking out keep you from playing the game.", "zh": "永远不要因为害怕出局就不去参与这场比赛。", "author": "Babe Ruth" },
	{ "en": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "zh": "你头脑里有脑子，你脚上有鞋子，你可以把自己引向任何选择的方向。", "author": "Dr. Seuss" },
	{ "en": "Life is either a daring adventure or nothing at all.", "zh": "生活要么是一场大胆的冒险，要么什么都不是。", "author": "Helen Keller" },
	{ "en": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "zh": "人生最大的荣耀不在于从不跌倒，而在于每次跌倒后都爬起来。", "author": "Nelson Mandela" },
	{ "en": "The way to get started is to quit talking and begin doing.", "zh": "开始的方法就是停止空谈，开始实干。", "author": "Walt Disney" },
	{ "en": "Your time is limited, so don't waste it living someone else's life.", "zh": "你的时间有限，所以不要浪费它去过别人的生活。", "author": "Steve Jobs" },
	{ "en": "If life were predictable it would cease to be life, and be without flavor.", "zh": "如果生活可以预测，那它就不再是生活，也失去了滋味。", "author": "Eleanor Roosevelt" },
	{ "en": "The big lesson in life is never be scared of anyone or anything.", "zh": "人生最大的教训就是永远不要害怕任何人或任何事。", "author": "Frank Sinatra" },
	{ "en": "Curiosity about life in all of its aspects is still the secret of great creative people.", "zh": "对生活方方面面都保持好奇，仍然是伟大创意者的秘诀。", "author": "Leo Burnett" },
	{ "en": "Life is not a problem to be solved, but a reality to be experienced.", "zh": "生活不是一个有待解决的问题，而是一份有待体验的现实。", "author": "Soren Kierkegaard" },
	{ "en": "The unexamined life is not worth living.", "zh": "未经审视的人生不值得过。", "author": "Socrates" },
	{ "en": "Turn your wounds into wisdom.", "zh": "把你的伤口变成智慧。", "author": "Oprah Winfrey" },
	{ "en": "The healthiest response to life is joy.", "zh": "对生活最健康的回应就是快乐。", "author": "Deepak Chopra" },
	{ "en": "Life is really simple, but we insist on making it complicated.", "zh": "生活其实很简单，但我们执意把它搞复杂。", "author": "Confucius" },
	{ "en": "Live as if you were to die tomorrow. Learn as if you were to live forever.", "zh": "像明天就会死去一样生活，像永远会活着一样学习。", "author": "Mahatma Gandhi" },
	{ "en": "The best revenge is massive success.", "zh": "最好的复仇就是巨大的成功。", "author": "Frank Sinatra" },
	{ "en": "It is never too late to be what you might have been.", "zh": "成为你可能成为的那种人，永远不会太迟。", "author": "George Eliot" },
	{ "en": "Nothing is impossible, the word itself says 'I'm possible'!", "zh": "没有什么是不可能的，这个词本身就说了'我是可能的'！", "author": "Audrey Hepburn" },
	{ "en": "You miss 100% of the shots you don't take.", "zh": "你不尝试就100%会错失。", "author": "Wayne Gretzky" },
	{ "en": "Strive not to be a success, but rather to be of value.", "zh": "不要努力去成为成功者，而要努力成为有价值的人。", "author": "Albert Einstein" },
	{ "en": "Life is like riding a bicycle. To keep your balance, you must keep moving.", "zh": "生活就像骑自行车，要保持平衡就必须不断前进。", "author": "Albert Einstein" },
	{ "en": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "zh": "不要走现成的路，去没有人走过的地方，留下你的足迹。", "author": "Ralph Waldo Emerson" },
	{ "en": "The only limit to our realization of tomorrow will be our doubts of today.", "zh": "我们实现明天梦想的唯一限制，就是今天的疑虑。", "author": "Franklin D. Roosevelt" },
	{ "en": "We become what we think about.", "zh": "我们思考什么，就会成为什么。", "author": "Earl Nightingale" },
	{ "en": "Happiness is not something ready made. It comes from your own actions.", "zh": "幸福不是现成的，它来自你的行动。", "author": "Dalai Lama" },
	{ "en": "Don't count the days, make the days count.", "zh": "不要数日子，要让日子算数。", "author": "Muhammad Ali" },
	{ "en": "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", "zh": "世上最好的、最美的东西，看不见也摸不着——必须用心去感受。", "author": "Helen Keller" },
	{ "en": "It always seems impossible until it's done.", "zh": "任何事情在做成之前，看起来总是不可思议。", "author": "Nelson Mandela" },
	{ "en": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "zh": "我们身后和身前的事，与内心的事相比，都是微不足道的。", "author": "Ralph Waldo Emerson" },
	{ "en": "Keep your face always toward the sunshine — and shadows will fall behind you.", "zh": "永远面朝阳光，阴影就会被甩在身后。", "author": "Walt Whitman" },
	{ "en": "Perfection is not attainable, but if we chase perfection we can catch excellence.", "zh": "完美无法达到，但如果我们追求完美，就能抓住卓越。", "author": "Vince Lombardi" },
	{ "en": "Be yourself; everyone else is already taken.", "zh": "做你自己，因为别人都有人做了。", "author": "Oscar Wilde" },
	{ "en": "You must be the change you wish to see in the world.", "zh": "你必须成为你希望在世界上看到的改变。", "author": "Mahatma Gandhi" },
	{ "en": "Whether you think you can or you think you can't, you're right.", "zh": "无论你认为自己能行还是不能行，你都是对的。", "author": "Henry Ford" },
	{ "en": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", "zh": "二十年后，你对自己没做过的事会比做过的事更失望。", "author": "Mark Twain" },
	{ "en": "I have not failed. I've just found 10,000 ways that won't work.", "zh": "我没有失败，我只是发现了一万种行不通的方法。", "author": "Thomas Edison" },
	{ "en": "The man who has confidence in himself gains the confidence of others.", "zh": "对自己有信心的人，也能赢得别人的信心。", "author": "Hasidic Proverb" },
	{ "en": "Go confidently in the direction of your dreams. Live the life you have imagined.", "zh": "自信地朝梦想的方向前进，过你想象中的生活。", "author": "Henry David Thoreau" },
	{ "en": "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.", "zh": "你不爬就不会摔，但一辈子待在地上也没意思。", "author": "Unknown" },
	{ "en": "We must let go of the life we have planned, so as to accept the one that is waiting for us.", "zh": "我们必须放下计划中的生活，去接纳等待着我们的生活。", "author": "Joseph Campbell" },
	{ "en": "What we achieve inwardly will change outer reality.", "zh": "我们内在的成就会改变外在的现实。", "author": "Plutarch" },
	{ "en": "The power of imagination makes us infinite.", "zh": "想象的力量让我们无限。", "author": "John Muir" },
	{ "en": "We can't help everyone, but everyone can help someone.", "zh": "我们不能帮助所有人，但每个人都能帮助某些人。", "author": "Ronald Reagan" },
	{ "en": "Nothing will work unless you do.", "zh": "除非你去干，否则什么都不会发生。", "author": "Maya Angelou" },
	{ "en": "A person who never made a mistake never tried anything new.", "zh": "从不犯错的人，也从没尝试过任何新事物。", "author": "Albert Einstein" },
	{ "en": "Education is the most powerful weapon which you can use to change the world.", "zh": "教育是你可以用来改变世界的最强大武器。", "author": "Nelson Mandela" },
	{ "en": "Don't let yesterday take up too much of today.", "zh": "不要让昨天占据太多的今天。", "author": "Will Rogers" },
	{ "en": "It's not whether you get knocked down, it's whether you get up.", "zh": "重要的不是你是否被击倒，而是你能否站起来。", "author": "Vince Lombardi" },
	{ "en": "If you're going through hell, keep going.", "zh": "如果你正经历地狱，继续走下去。", "author": "Winston Churchill" },
	{ "en": "Failure is simply the opportunity to begin again, this time more intelligently.", "zh": "失败不过是重新开始的机会，这一次更聪明地开始。", "author": "Henry Ford" },
	{ "en": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "zh": "我们最大的弱点在于放弃。成功最可靠的方法就是再试一次。", "author": "Thomas Edison" },
	{ "en": "Challenges are what make life interesting and overcoming them is what makes life meaningful.", "zh": "挑战让生活变得有趣，克服挑战让生活变得有意义。", "author": "Joshua J. Marine" },
	{ "en": "When something is important enough, you do it even if the odds are not in your favor.", "zh": "当一件事足够重要时，即使胜算不高你也会去做。", "author": "Elon Musk" },
	{ "en": "If you can dream it, you can do it.", "zh": "如果你能梦想，你就能做到。", "author": "Walt Disney" },
	{ "en": "Quality is not an act, it is a habit.", "zh": "优秀不是一个行为，而是一种习惯。", "author": "Aristotle" },
	{ "en": "The only person you are destined to become is the person you decide to be.", "zh": "你注定成为的唯一的人，就是你决定要成为的那个人。", "author": "Ralph Waldo Emerson" },
	{ "en": "An unexamined life is not worth living.", "zh": "未经审视的人生不值得过。", "author": "Socrates" },
	{ "en": "Where there is love there is life.", "zh": "有爱的地方就有生命。", "author": "Mahatma Gandhi" },
	{ "en": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", "zh": "健康是最好的礼物，知足是最大的财富，守信是最好的关系。", "author": "Buddha" },
	{ "en": "Every moment is a fresh beginning.", "zh": "每一刻都是全新的开始。", "author": "T.S. Eliot" },
	{ "en": "When you reach the end of your rope, tie a knot in it and hang on.", "zh": "当你到了山穷水尽时，打个结，抓紧。", "author": "Franklin D. Roosevelt" },
	{ "en": "There is only one happiness in this life, to love and be loved.", "zh": "人生只有一种幸福，去爱和被爱。", "author": "George Sand" },
	{ "en": "Simplicity is the ultimate sophistication.", "zh": "简约是最终的精致。", "author": "Leonardo da Vinci" },
	{ "en": "Peace begins with a smile.", "zh": "和平从微笑开始。", "author": "Mother Teresa" },
	{ "en": "It is not how much we have, but how much we enjoy, that makes happiness.", "zh": "幸福不在于我们拥有多少，而在于我们享受多少。", "author": "Charles Spurgeon" },
	{ "en": "A goal without a plan is just a wish.", "zh": "没有计划的目标只是一个愿望。", "author": "Antoine de Saint-Exupéry" },
	{ "en": "Hardships often prepare ordinary people for an extraordinary destiny.", "zh": "困难常常让普通人准备好迎接非凡的命运。", "author": "C.S. Lewis" },
	{ "en": "The harder the conflict, the greater the triumph.", "zh": "战斗越艰难，胜利越辉煌。", "author": "George Washington" },
	{ "en": "You cannot shake hands with a clenched fist.", "zh": "紧握拳头时无法与人握手。", "author": "Indira Gandhi" },
	{ "en": "Try to be a rainbow in someone's cloud.", "zh": "努力成为别人乌云里的一道彩虹。", "author": "Maya Angelou" },
	{ "en": "Learning never exhausts the mind.", "zh": "学习从不令头脑疲惫。", "author": "Leonardo da Vinci" },
	{ "en": "The beautiful thing about learning is that nobody can take it away from you.", "zh": "学习的美好之处在于没人能把它从你身上夺走。", "author": "B.B. King" },
	{ "en": "Start where you are. Use what you have. Do what you can.", "zh": "从你所在开始，用你所拥有的，做你能做的。", "author": "Arthur Ashe" }
]

function getAllWords() {
	const allWords = []
	wordData.forEach(category => {
		category.words.forEach(word => {
			allWords.push({ ...word, category: category.category })
		})
	})
	return allWords
}

function getCategories() {
	return wordData.map(cat => ({
		id: cat.id,
		category: cat.category,
		icon: cat.icon,
		count: cat.words.length
	}))
}

function getWordsByCategory(categoryId) {
	const category = wordData.find(cat => cat.id === categoryId)
	return category ? category.words.map(w => ({ ...w, category: category.category })) : []
}

function getGroupCount(categoryId, size = 10) {
	const words = getWordsByCategory(categoryId)
	return Math.ceil(words.length / size)
}

function getWordsByGroup(categoryId, group, size = 10) {
	const words = getWordsByCategory(categoryId)
	const start = group * size
	return words.slice(start, start + size)
}

function getRandomSentence() {
	const index = Math.floor(Math.random() * dailySentences.length)
	return dailySentences[index]
}

function getAllSentences() {
	return dailySentences
}

function generateQuiz(categoryId, count = 10) {
	let pool = []
	if (categoryId) {
		pool = getWordsByCategory(categoryId)
	} else {
		pool = getAllWords()
	}
	const shuffled = pool.sort(() => Math.random() - 0.5)
	const selected = shuffled.slice(0, Math.min(count, shuffled.length))
	const allWords = getAllWords()

	return selected.map(word => {
		let options = [word.zh]
		const others = allWords.filter(w => w.id !== word.id && w.zh !== word.zh)
		while (options.length < 4 && options.length < others.length + 1) {
			const randomOther = others[Math.floor(Math.random() * others.length)]
			if (!options.includes(randomOther.zh)) {
				options.push(randomOther.zh)
			}
		}
		options = options.sort(() => Math.random() - 0.5)
		return {
			id: word.id,
			en: word.en,
			correct: word.zh,
			options: options
		}
	})
}

function generateQuizByWords(wordIds, categoryId) {
	const pool = categoryId ? getWordsByCategory(categoryId) : getAllWords()
	const selected = wordIds.map(id => pool.find(w => w.id === id)).filter(Boolean)
	if (selected.length === 0) return []
	const allWords = getAllWords()

	return selected.map(word => {
		let options = [word.zh]
		const others = allWords.filter(w => w.id !== word.id && w.zh !== word.zh)
		while (options.length < 4 && options.length < others.length + 1) {
			const randomOther = others[Math.floor(Math.random() * others.length)]
			if (!options.includes(randomOther.zh)) {
				options.push(randomOther.zh)
			}
		}
		options = options.sort(() => Math.random() - 0.5)
		return {
			id: word.id,
			en: word.en,
			correct: word.zh,
			options: options
		}
	})
}

function generateSpellQuiz(categoryId, count = 10) {
	let pool = []
	if (categoryId) {
		pool = getWordsByCategory(categoryId)
	} else {
		pool = getAllWords()
	}
	const shuffled = pool.sort(() => Math.random() - 0.5)
	return shuffled.slice(0, Math.min(count, shuffled.length)).map(w => ({
		id: w.id,
		en: w.en,
		zh: w.zh,
		phonetic: w.phonetic || ''
	}))
}

function generateSpellQuizByWords(wordIds, categoryId) {
	const pool = categoryId ? getWordsByCategory(categoryId) : getAllWords()
	return wordIds.map(id => {
		const w = pool.find(word => word.id === id)
		return w ? { id: w.id, en: w.en, zh: w.zh, phonetic: w.phonetic || '' } : null
	}).filter(Boolean)
}

export {
	wordData,
	getAllWords,
	getCategories,
	getWordsByCategory,
	getGroupCount,
	getWordsByGroup,
	getRandomSentence,
	getAllSentences,
	generateQuiz,
	generateQuizByWords,
	generateSpellQuiz,
	generateSpellQuizByWords
}
