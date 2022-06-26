// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'MORNING',
	greetingAfternoon: 'GOOD AFTERNOON',
	greetingEvening: 'GOOD EVENING',
	greetingNight: 'GO TO BED',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '359.273750',
	defaultLongitude: '15.207540',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '00:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'MAIL',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '2',
			name: 'CALENDAR',
			icon: 'calendar',
			link: 'https://calendar.protonmail.com/',
		},
		{
			id: '5',
			name: 'ANILIST',
			icon: 'heart',
			link: 'https://anilist.co',
		},
		{
			id: '3',
			name: 'REDDIT',
			icon: 'glasses',
			link: 'https://reddit.artemislena.eu/settings/restore/?theme=black&front_page=default&layout=clean&wide=on&comment_sort=confidence&show_nsfw=on&use_hls=on&hide_hls_notification=off&subscriptions=anime%2BAzurLane%2BAzurLewd%2Bflicks%2Bformula1%2Bgachagaming%2BJuve%2Bmovies%2BMovieSuggestions%2Bsoccer%2Bsummonerschool%2Btelevisionsuggestions%2BTrueFilm%2Bunixporn%2Bvoidlinux&filters=',
		},
		{
			id: '4',
			name: 'FSR',
			icon: 'film',
			link: 'https://filmschoolrejects.com/',
		},
		{
			id: '6',
			name: 'HN',
			icon: 'glasses',
			link: 'https://www.hckrnws.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '4',
			name: 'GIT',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '5',
			name: 'DOCKER',
			icon: 'package',
			link: 'http://192.168.1.245:9000/',
		},
		{
			id: '3',
			name: 'ENDEAVOUR',
			icon: 'rocket',
			link: 'https://forum.endeavouros.com/',
		},
		{
			id: '1',
			name: 'MB',
			icon: 'server',
			link: 'http://192.168.1.245:81',
		},
		{
			id: '6',
			name: 'FIN',
			icon: 'play-circle',
			link: 'http://192.168.1.245:8096',
		},
		{
			id: '2',
			name: 'DL',
			icon: 'download',
			link: 'http://192.168.1.245:9091/transmission/web/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
