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

import { Pages } from '@/constants/pages'

import cn from '../inner_page.module.scss'

export const metadata = {
	title: 'Автомойка в Ижевске — цены и акции!',
	description:
		'Ищете недорогую мойку автомобиля в Ижевске? Мы предлагаем широкий спектр услуг по доступным ценам. '
}

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
					title='Европейская'
					paragraph='2-х фазная мойка кузова и дисков губкой с полирущющим шампунем, коврики и пороги, продуем и высушим специальным полотенцем'
					tag='от 500 ₽'
					image={carWashServices1Image}
					mobileImage={carWashServicesMobile1Image}
					url={Pages.CAR_WASH_EUROPEAN}
				/>
				<ServiceCard
					title='Европейская'
					paragraph='3-х фазная мойка кузова и дисков'
					tag='от 1600 ₽'
					image={carWashServices2Image}
					mobileImage={carWashServicesMobile2Image}
					url={Pages.CAR_WASH_COMPLEX}
				/>
			</div>
			<div className={cn.content}>
				<ServiceCard
					title='Мойка днища'
					paragraph='3-х фазная мойка, с полирующим консервантом, бережная сушка турбосушкой'
					tag='от 500 ₽'
					url={Pages.CAR_WASH_BOTTOM}
				/>
				<ServiceCard
					title='Сухая уборка салона'
					paragraph='Уборка пылесосом пола, сидений'
					tag='от 1000 ₽'
					url={Pages.CAR_WASH_DRY}
				/>
				<ServiceCard
					title='Влажная уборка'
					paragraph='Уборка салона. Мойка окон, пластиковых поверхностей'
					tag='от 420 ₽'
					url={Pages.CAR_WASH_WET}
				/>
				<ServiceCard
					title='Уборка багажинка'
					paragraph='Внутренняя уборка багажника (влажная и сухая)'
					tag='от 200 ₽'
					url={Pages.CAR_WASH_TRUNK}
				/>
				<ServiceCard
					title='Чистка от шерсти'
					paragraph='Уборка салона от шерсти, чистка специальной щеткой'
					tag='от 500 ₽'
					url={Pages.CAR_WASH_HAIR}
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
