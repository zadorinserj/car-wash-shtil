import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import services1Image from '@public/images/services-1.webp'
import services2Image from '@public/images/services-2.webp'
import services3Image from '@public/images/services-3.webp'
import services4Image from '@public/images/services-4.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import { Pages } from '@/constants/pages'

import cn from './index.module.css'

export const Services: FC = () => {
	return (
		<section>
			<Typography
				className={cn.header}
				tag='h2'
				font='expanded'
			>
				Услуги автомоек Штиль
			</Typography>
			<div className={cn.wrapper}>
				<div className={cn.section}>
					<div className={cn.content}>
						<Typography
							className={cn.number}
							tag='p'
							size='s'
						>
							01
						</Typography>
						<Typography
							className={cn.title}
							tag='h3'
							size='s'
						>
							Автомойка и чистка салона
						</Typography>
						<Typography
							className={cn.paragraph}
							tag='p'
							size='s'
						>
							Мойка кузова и салона поддерживает чистоту и сохраняет
							работоспособность авто, как утренний душ
						</Typography>
						<div className={cn.actions}>
							<Button
								type='main'
								color='green'
								icon={arrowRightWhiteIcon}
								hoverIcon={arrowRightBlackIcon}
								animationDirection='left'
								hoverColor={false}
								href={Pages.CAR_WASH}
								target='_self'
							>
								Подробнее
							</Button>
							<Typography
								className={cn.tag}
								tag='p'
								size='s'
							>
								от 600 ₽
							</Typography>
						</div>
					</div>
					<div className={cn.image}>
						<Image
							src={services1Image}
							alt=''
							fill={true}
						/>
					</div>
				</div>
				<div className={cn.section}>
					<div className={cn.content}>
						<Typography
							className={cn.number}
							tag='p'
							size='s'
						>
							02
						</Typography>
						<Typography
							className={cn.title}
							tag='h3'
							size='s'
						>
							Полировка
						</Typography>
						<Typography
							className={cn.paragraph}
							tag='p'
							size='s'
						>
							Глубокая очистка, защита и восстановление автомобиля — это как
							нарядиться перед важным свиданием
						</Typography>
						<div className={cn.actions}>
							<Button
								type='main'
								color='green'
								icon={arrowRightWhiteIcon}
								hoverIcon={arrowRightBlackIcon}
								animationDirection='left'
								hoverColor={false}
								href={Pages.POLISHING}
								target='_self'
							>
								Подробнее
							</Button>
							<Typography
								className={cn.tag}
								tag='p'
								size='s'
							>
								от 1500 ₽
							</Typography>
						</div>
					</div>
					<div className={cn.image}>
						<Image
							src={services2Image}
							alt=''
							fill={true}
						/>
					</div>
				</div>
				<div className={cn.section}>
					<div className={cn.content}>
						<Typography
							className={cn.number}
							tag='p'
							size='s'
						>
							03
						</Typography>
						<Typography
							className={cn.title}
							tag='h3'
							size='s'
						>
							Химчистка салона
						</Typography>
						<Typography
							className={cn.paragraph}
							tag='p'
							size='s'
						>
							Освежает интерьер автомобиля и возвращает его к первоначальному
							состоянию
						</Typography>
						<div className={cn.actions}>
							<Button
								type='main'
								color='green'
								icon={arrowRightWhiteIcon}
								hoverIcon={arrowRightBlackIcon}
								animationDirection='left'
								hoverColor={false}
								href={Pages.CLEANERS}
								target='_self'
							>
								Подробнее
							</Button>
							<Typography
								className={cn.tag}
								tag='p'
								size='s'
							>
								от 7500 ₽
							</Typography>
						</div>
					</div>
					<div className={cn.image}>
						<Image
							src={services3Image}
							alt=''
							fill={true}
						/>
					</div>
				</div>
				<div className={cn.section}>
					<div className={cn.content}>
						<Typography
							className={cn.number}
							tag='p'
							size='s'
						>
							04
						</Typography>
						<Typography
							className={cn.title}
							tag='h3'
							size='s'
						>
							Защитные покрытия кузова
						</Typography>
						<Typography
							className={cn.paragraph}
							tag='p'
							size='s'
						>
							Это как антивозрастной крем, который превращает 10-летний
							автомобиль в 5-летний
						</Typography>
						<div className={cn.actions}>
							<Button
								type='main'
								color='green'
								icon={arrowRightWhiteIcon}
								hoverIcon={arrowRightBlackIcon}
								animationDirection='left'
								hoverColor={false}
								href={Pages.PROTECTION_CERAMICS}
								target='_self'
							>
								Подробнее
							</Button>
							<Typography
								className={cn.tag}
								tag='p'
								size='s'
							>
								от 1000 ₽
							</Typography>
						</div>
					</div>
					<div className={cn.image}>
						<Image
							src={services4Image}
							alt=''
							fill={true}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
