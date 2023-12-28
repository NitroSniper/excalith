const defaultConfig = {
	username: "nitro",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "https://i.ibb.co/55JwcCX/Excalith.gif",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false,
		opacity: 0.9,
		blur: 0
	},
	prompt: {
		ctrlC: true,
		placeholder: "",
		placeholderColor: "gray",
		userColor: "red",
		atColor: "gray",
		hostColor: "cyan",
		promptColor: "magenta",
		promptSymbol: "➜",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "orange"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "repo",
				name: "Repository Search",
				url: "https://github.com/NitroSniper/{}"
			},
			{
				alias: "lh",
				name: "Localhost port",
				url: "http://localhost:{}"
			},
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
				]
			},
			{
				title: "Dev",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com/NitroSniper",
						icon: "mdi:github"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com",
						icon: "simple-icons:openai"
					},
					{
						name: "Advent Of Code",
						url: "https://adventofcode.com",
						icon: "simple-icons:adventofcode"
					},
					{
						name: "Vercel",
						url: "https://vercel.com",
						icon: "akar-icons:vercel-fill"
					},
				]
			},
			{
				title: "Services",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Youtube",
						url: "https://youtube.com",
						icon: "mdi:youtube"
					},
					{
						name: "Gmail",
						url: "https://mail.google.com",
						icon: "mdi:gmail"
					},
					{
						name: "Spotify",
						url: "https://open.spotify.com",
						icon: "mdi:spotify"
					},
				]
			},
			{
				title: "Valorant",
				color: "red",
				align: "left",
				links: [
					{
						name: "Tracker",
						url: "https://tracker.gg/valorant/profile/riot/NitroSniper%23NERD/overview",
						icon: "healthicons:magnifying-glass"
					},
					{
						name: "VCT",
						url: "https://vct.gg",
						icon: "streamline:esports"
					},
					{
						name: "VLR",
						url: "https://vlr.gg",
						icon: "iconoir:stats-up-square"
					},
					{
						name: "TMV Twitch",
						url: "https://www.twitch.tv/thinkingmansvalo",
						icon: "mdi:twitch"
					},
				]
			},
			{
				title: "University",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "Blackboard",
						url: "https://learn.uea.ac.uk",
						icon: "icon-park-outline:blackboard"
					},
					{
						name: "Outlook",
						url: "https://outlook.office.com",
						icon: "file-icons:microsoft-outlook"
					},
					{
						name: "Timetabler",
						url: "https://timetabler.uea.ac.uk",
						icon: "mdi:timetable"
					},
					{
						name: "SU Events",
						url: "https://www.ueasu.org/tickets",
						icon: "mdi:events"
					},
				]
			},
			{
				title: "Tech",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Monkeytype",
						url: "https://monkeytype.com",
						icon: "simple-icons:monkeytype"
					},
					{
						name: "Lichess",
						url: "https://lichess.org",
						icon: "simple-icons:lichess"
					},
				]
			}
		]
	}
}

export default defaultConfig
