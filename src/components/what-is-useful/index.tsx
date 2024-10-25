import whatIsUseful1Image from '@public/images/what-is-useful-1.webp'
import whatIsUseful2Image from '@public/images/what-is-useful-2.webp'
import whatIsUseful3Image from '@public/images/what-is-useful-3.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const WhatIsUseful: FC = () => {
	return (
		<div>
			<Typography
				className={cn.title}
				tag='h2'
				font='expanded'
			>
				Чем полезна мойка <br /> кузова автомобиля
			</Typography>
			<div className={cn.content}>
				<div className={cn.item}>
					<div className={cn.image}>
						<Image
							src={whatIsUseful1Image}
							alt=''
							fill={true}
						/>
					</div>
					<div className={cn.itemContent}>
						<Typography
							tag='h3'
							size='s'
						>
							Долговечность авто
						</Typography>
						<Typography
							tag='p'
							size='s'
						>
							Поддержание авто в хорошем состоянии и предотвращение накопления
							грязи, чтобы автомобиль служил долго
						</Typography>
					</div>
				</div>
				<div className={cn.item}>
					<div className={cn.image}>
						<Image
							src={whatIsUseful2Image}
							alt=''
							fill={true}
						/>
					</div>
					<div className={cn.itemContent}>
						<Typography
							tag='h3'
							size='s'
						>
							Защита покрытия
						</Typography>
						<Typography
							tag='p'
							size='s'
						>
							Удаление агрессивных веществ, таких как соли и химикаты, которые
							могут вызвать коррозию и повреждения
						</Typography>
					</div>
				</div>
				<div className={cn.item}>
					<div className={cn.image}>
						<Image
							src={whatIsUseful3Image}
							alt=''
							fill={true}
						/>
					</div>
					<div className={cn.itemContent}>
						<Typography
							tag='h3'
							size='s'
						>
							Подготовка к продаже
						</Typography>
						<Typography
							tag='p'
							size='s'
						>
							Хорошо ухоженный автомобиль выглядит более привлекательно при
							продаже, что может повысить его рыночную стоимость
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}
