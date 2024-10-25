import carWashServices1Image from '@public/images/car-wash-services-1.webp'
import carWashServices2Image from '@public/images/car-wash-services-2.webp'
import carWashServicesMobile1Image from '@public/images/car-wash-services-mobile-1.webp'
import carWashServicesMobile2Image from '@public/images/car-wash-services-mobile-2.webp'
import clsx from 'clsx'

import { Advantages } from '@/components/advantages'
import { CorporateClients } from '@/components/corporate-clients'
import { QuickWrite } from '@/components/quick-write'
import { ServiceCard } from '@/components/service-card'
import { Typography } from '@/components/typography'

import cn from './page.module.css'

export default function Services() {
	return (
		<div className={clsx(cn.page, 'container')}>
			<Typography
				className={cn.title}
				tag='h1'
				font='expanded'
			>
				Автомойка
			</Typography>
			<div className={cn.header}>
				<ServiceCard
					title='Мойка кузова'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
					image={carWashServices1Image}
					mobileImage={carWashServicesMobile1Image}
				/>
				<ServiceCard
					title='Комплексная мойка'
					paragraph='В услугу входит мойка кузова, чистка педалей, сухая и влажная уборка салона и стекол'
					tag='от 1000 ₽'
					image={carWashServices2Image}
					mobileImage={carWashServicesMobile2Image}
				/>
			</div>
			<div className={cn.content}>
				<ServiceCard
					title='Двухфазная'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
				/>
				<ServiceCard
					title='Трехфазная'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
				/>
				<ServiceCard
					title='Днище'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
				/>
				<ServiceCard
					title='Салон'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
				/>
				<ServiceCard
					title='Грузовые авто'
					paragraph='Услуга включает очистку кузова, дисков, арок, ковриков и последующую сушку'
					tag='от 1000 ₽'
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
