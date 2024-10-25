export enum Pages {
	MAIN = '/',
	SERVICES = '/services',
	CLEANER = '/cleaner',
	PROTECTION = '/protection',
	POLISHING = '/polishing',
	DETAILING = '/detailing',
	CONTACTS = '/contacts'
}

export const MENU = [
	{
		text: 'Автомойка',
		submenu: [
			{ text: 'Комплексная', url: `${Pages.SERVICES}/complex` },
			{ text: 'Кузов', url: `${Pages.SERVICES}/carcase` },
			{ text: 'Двухфазная', url: `${Pages.SERVICES}/two-phase` },
			{ text: 'Салон', url: `${Pages.SERVICES}/salon` },
			{ text: 'Трехфазная', url: `${Pages.SERVICES}/three-phase` },
			{ text: 'Днище', url: `${Pages.SERVICES}/bottom` },
			{ text: 'Грузовые авто', url: `${Pages.SERVICES}/trucks` }
		]
	},
	{
		text: 'Химчистка',
		submenu: [{ text: 'Комплексная', url: `${Pages.CLEANER}/complex` }]
	},
	{
		text: 'Защитные покрытия',
		submenu: [{ text: 'Карбон', url: `${Pages.PROTECTION}/carbon` }]
	},
	{
		text: 'Полировка',
		url: Pages.POLISHING
	},
	{
		text: 'Детейлинг',
		url: Pages.DETAILING
	}
]
