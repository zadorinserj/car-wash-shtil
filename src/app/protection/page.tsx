import clsx from 'clsx'

import { Advantages } from '@/components/advantages'
import { CorporateClients } from '@/components/corporate-clients'
import { QuickWrite } from '@/components/quick-write'
import { ServiceCard } from '@/components/service-card'
import { Typography } from '@/components/typography'

import { Pages } from '@/constants/pages'

import cn from './page.module.css'

export const metadata = {
	title: 'Защитное покрытие кузова – сохраните красоту авто!',
	description:
		'Защитное покрытие для кузова автомобиля – это надёжный способ сохранить его в первозданном виде. Широкий выбор покрытий по доступным ценам!'
}

export default function Services() {
	return (
		<div className={clsx(cn.page, 'container')}>
			<Typography
				className={cn.title}
				tag='h1'
				font='expanded'
			>
				Защитное покрытие кузова – сохраните красоту авто! 🌟
			</Typography>
			<div className={cn.content}>
				<ServiceCard
					title='Воск'
					paragraph='Узнайте, как покрытие воском помогает защитить кузов вашего автомобиля от внешних воздействий!'
					tag='от 1000 ₽'
					url={Pages.PROTECTION_WAX}
				/>
				<ServiceCard
					title='Керамика'
					paragraph='Керамическая полировка кузова автомобиля. Отзывы владельцев, цены и многое другое'
					tag='от 1000 ₽'
					url={Pages.PROTECTION_CERAMICS}
				/>
				<ServiceCard
					title='Кварц'
					paragraph='Кварцевое покрытие для авто – защита и блеск надолго'
					tag='от 1000 ₽'
					url={Pages.PROTECTION_QUARTS}
				/>
			</div>
			<div className={cn.section}>
				<QuickWrite />
			</div>
			<div className={cn.section}>
				<Advantages />
			</div>
			<div className={cn.section}>
				<CorporateClients />
			</div>
		</div>
	)
}
