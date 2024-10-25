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
	CLEANERS = '/cleaners',
	CLEANERS_CARCASE = `${CLEANERS}/carcase`,
	CLEANERS_SALON = `${CLEANERS}/salon`,
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
			{ text: 'Комплексная', url: Pages.CAR_WASH_COMPLEX },
			{ text: 'Кузов', url: Pages.CAR_WASH_CARCASE },
			{ text: 'Двухфазная', url: Pages.CAR_WASH_THO_PHASE },
			{ text: 'Трехфазная', url: Pages.CAR_WASH_THREE_PHASE },
			{ text: 'Салон', url: Pages.CAR_WASH_SALON },
			{ text: 'Днище', url: Pages.CAR_WASH_BOTTOM },
			{ text: 'Грузовые авто', url: Pages.CAR_WASH_TRUCK }
		]
	},
	{
		text: 'Химчистка',
		submenu: [
			{ text: 'Кузов', url: Pages.CLEANERS_CARCASE },
			{ text: 'Салон', url: Pages.CLEANERS_SALON }
		]
	},
	{
		text: 'Защитные покрытия',
		submenu: [
			{ text: 'Керамика', url: Pages.PROTECTION_CERAMICS },
			{
				text: 'Кварц',
				url: Pages.PROTECTION_QUARTS
			},
			{
				text: 'Воск',
				url: Pages.PROTECTION_WAX
			}
		]
	},
	{
		text: 'Полировка',
		url: Pages.POLISHING
	}
	// {
	// 	text: 'Детейлинг',
	// 	url: Pages.DETAILING
	// }
]
