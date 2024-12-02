export enum Pages {
	MAIN = '/',
	CAR_WASH = '/car_wash',
	CAR_WASH_COMPLEX = `${CAR_WASH}/complex`,
	CAR_WASH_CARCASE = `${CAR_WASH}/carcase`,
	CAR_WASH_THO_PHASE = `${CAR_WASH}/two-phase`,
	CAR_WASH_THREE_PHASE = `${CAR_WASH}/three-phase`,
	CAR_WASH_SALON = `${CAR_WASH}/salon`,
	CAR_WASH_BOTTOM = `${CAR_WASH}/bottom`,
	CAR_WASH_TRUCK = `${CAR_WASH}/trucks`,
	CAR_WASH_EUROPEAN = `${CAR_WASH}/european`,
	CAR_WASH_DETAILING = `${CAR_WASH}/detailing`,
	CAR_WASH_DRY = `${CAR_WASH}/dry`,
	CAR_WASH_WET = `${CAR_WASH}/wet`,
	CAR_WASH_TRUNK = `${CAR_WASH}/trunk`,
	CAR_WASH_HAIR = `${CAR_WASH}/hair`,
	CLEANERS = '/cleaners',
	CLEANERS_CARCASE = `${CLEANERS}/carcase`,
	CLEANERS_SALON = `${CLEANERS}/salon`,
	CLEANERS_FLOOR = `${CLEANERS}/floor`,
	CLEANERS_SEATS = `${CLEANERS}/seats`,
	CLEANERS_LOCAL = `${CLEANERS}/local`,
	CLEANERS_TRUNK = `${CLEANERS}/trunk`,
	CLEANERS_DOORS = `${CLEANERS}/doors`,
	PROTECTION = '/protection',
	PROTECTION_CERAMICS = `${PROTECTION}/ceramics`,
	PROTECTION_QUARTS = `${PROTECTION}/quartz`,
	PROTECTION_WAX = `${PROTECTION}/wax`,
	POLISHING = '/polishing',
	DETAILING = '/detailing',
	CONTACTS = '/contacts'
}

export const MENU = [
	{
		text: 'Автомойка',
		submenu: [
			{ text: 'Европейская', url: Pages.CAR_WASH_EUROPEAN },
			{ text: 'Детейлинг', url: Pages.CAR_WASH_DETAILING },
			{ text: 'Днище', url: Pages.CAR_WASH_BOTTOM },
			{ text: 'Сухая', url: Pages.CAR_WASH_DRY },
			{ text: 'Влажная', url: Pages.CAR_WASH_WET },
			{ text: 'Багажник', url: Pages.CAR_WASH_TRUNK },
			{ text: 'Чистка от шерсти', url: Pages.CAR_WASH_HAIR }
		]
	},
	{
		text: 'Химчистка',
		submenu: [
			{ text: 'Салон', url: Pages.CLEANERS_SALON },
			{ text: 'Покрытие пола', url: Pages.CLEANERS_FLOOR },
			{ text: 'Сидения', url: Pages.CLEANERS_SEATS },
			{ text: 'Локально', url: Pages.CLEANERS_LOCAL },
			{ text: 'Багажник', url: Pages.CLEANERS_TRUNK },
			{ text: 'Двери', url: Pages.CLEANERS_DOORS }
		]
	},
	// {
	// 	text: 'Защитные покрытия',
	// 	submenu: [
	// 		{ text: 'Керамика', url: Pages.PROTECTION_CERAMICS },
	// 		{
	// 			text: 'Кварц',
	// 			url: Pages.PROTECTION_QUARTS
	// 		},
	// 		{
	// 			text: 'Воск',
	// 			url: Pages.PROTECTION_WAX
	// 		}
	// 	]
	// },
	{
		text: 'Полировка',
		url: Pages.POLISHING
	},
	{
		text: 'Керамопокрытие',
		url: Pages.PROTECTION_CERAMICS
	}
	// {
	// 	text: 'Детейлинг',
	// 	url: Pages.DETAILING
	// }
]

export const ROCKET_WASH_URL = 'https://online.rocketwash.me/?id=2645'
