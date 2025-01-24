import benefits1Icon from '@public/icons/benefits-1.svg'
import benefits2Icon from '@public/icons/benefits-2.svg'
import benefits3Icon from '@public/icons/benefits-3.svg'
import benefits4Icon from '@public/icons/benefits-4.svg'
import benefitsImage1 from '@public/images/benefits-image-1.webp'
import benefitsImage2 from '@public/images/benefits-image-2.webp'
import benefitsImage3 from '@public/images/benefits-image-3.webp'
import benefitsImage4 from '@public/images/benefits-image-4.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Typography } from '@/components/typography'

import cn from './index.module.scss'

export const Advantages: FC = () => {
	return (
		<section>
			<div className={cn.imagesWrapper}>
				<div className={cn.info1}>
					<Typography
						tag='p'
						size='s'
					>
						Зона отдыха в Штиль
					</Typography>
				</div>
				<div className={cn.info2}>
					<Typography
						tag='p'
						size='s'
					>
						Парк «Открытый сад» <br /> вблизи автомойки
					</Typography>
				</div>
				<div className={cn.image1}>
					<Image
						src={benefitsImage1}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.image2}>
					<Image
						src={benefitsImage2}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.image3}>
					<Image
						src={benefitsImage3}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.image4}>
					<Image
						src={benefitsImage4}
						alt=''
						fill={true}
					/>
				</div>
			</div>
			<Typography
				className={cn.title}
				tag='h2'
				font='expanded'
			>
				Почему выбирают <br /> автомойку Штиль
			</Typography>
			<div className={cn.wrapper}>
				<div className={cn.item}>
					<div className={cn.icon}>
						<Image
							src={benefits1Icon}
							alt=''
							fill={true}
						/>
					</div>
					<Typography
						className={cn.itemTitle}
						tag='h3'
						size='s'
					>
						Комфортная локация
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Мойка находится в центре города. Можно прогуляться, перекусить или
						отдохнуть в зоне отдыха автомойки
					</Typography>
				</div>
				<div className={cn.item}>
					<div className={cn.icon}>
						<Image
							src={benefits2Icon}
							alt=''
							fill={true}
						/>
					</div>
					<Typography
						className={cn.itemTitle}
						tag='h3'
						size='s'
					>
						Круглосуточная работа
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Автомойка работает 24/7, чтобы клиент мог получить услуги в удобное
						время, независимо от собственного графика
					</Typography>
				</div>
				<div className={cn.item}>
					<div className={cn.icon}>
						<Image
							src={benefits3Icon}
							alt=''
							fill={true}
						/>
					</div>
					<Typography
						className={cn.itemTitle}
						tag='h3'
						size='s'
					>
						Работа по записи
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Клиент может планировать свой день и избежать возможного ожидания в
						живой очереди
					</Typography>
				</div>
				<div className={cn.item}>
					<div className={cn.icon}>
						<Image
							src={benefits4Icon}
							alt=''
							fill={true}
						/>
					</div>
					<Typography
						className={cn.itemTitle}
						tag='h3'
						size='s'
					>
						Профессиональная химия
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Мы используем только качественные моющие средства
					</Typography>
				</div>
			</div>
		</section>
	)
}
