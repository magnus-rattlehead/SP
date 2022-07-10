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
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

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
			link: 'https://gmail.com/',
		},
		{
			id: '2',
			name: 'CALENDAR',
			icon: 'calendar',
			link: 'https://calendar.google.com/',
		},
		{
			id: '3',
			name: 'YOUTUBE',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '4',
			name: 'REDDIT',
			icon: 'user',
			link: 'https://reddit.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '5',
			name: 'GIT',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '6',
			name: 'GENTOO',
			icon: 'rocket',
			link: 'https://wiki.gentoo.com/',
		},
	],
};
