import benefits1Icon from '@public/icons/benefits-1.svg'
import benefits2Icon from '@public/icons/benefits-2.svg'
import benefits3Icon from '@public/icons/benefits-3.svg'
import Image from 'next/image'
import { FC } from 'react'

import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const Advantages: FC = () => {
	return (
		<section>
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
			</div>
		</section>
	)
}
