import benefitsVector1Image from '@public/images/benefits-vector-1-image.svg'
import benefitsVector2Image from '@public/images/benefits-vector-2-image.svg'
import benefitsVector3Image from '@public/images/benefits-vector-3-image.svg'
import benefitsVector4Image from '@public/images/benefits-vector-4-image.svg'
import Image from 'next/image'
import { FC } from 'react'

import { QuickWrite } from '@/components/quick-write'
import { Typography } from '@/components/typography'

import cn from './index.module.scss'

export const Discounts: FC = () => {
	return (
		<section className={cn.section}>
			<Typography
				className={cn.header}
				tag='h2'
				font='expanded'
			>
				Скидки и акции
			</Typography>
			<div className={cn.wrapper}>
				<div className={cn.plate}>
					<div className={cn.content}>
						<Typography
							className={cn.title}
							tag='h3'
							size='m'
							font='expanded'
						>
							до&nbsp;
							<span className={cn.percent}>
								10%
								<div className={cn.vector}>
									<Image
										src={benefitsVector1Image}
										alt=''
									/>
								</div>
							</span>{' '}
							кэшбек
						</Typography>
						<Typography
							tag='h3'
							size='s'
						>
							на ваш бонусный счет
						</Typography>
					</div>
					<Typography
						className={cn.info}
						tag='p'
						size='s'
					>
						*кэшбек начисляется в филиале на Пушкинской со всех услуг с пеной
						(исключение полировка и химчистка)
					</Typography>
				</div>
				<div className={cn.plate}>
					<div className={cn.content}>
						<Typography
							className={cn.title}
							tag='h3'
							size='m'
							font='expanded'
						>
							<span className={cn.percent}>
								-30%
								<div className={cn.vector}>
									<Image
										src={benefitsVector2Image}
										alt=''
									/>
								</div>
							</span>
							&nbsp;по вторникам
						</Typography>
						<Typography
							tag='h3'
							size='s'
						>
							на покрытие кузова быстрым защитным составом
						</Typography>
					</div>
					<Typography
						className={cn.info}
						tag='p'
						size='s'
					>
						*cкидка действует только в филиале на Пушкинской
					</Typography>
				</div>
				<div className={cn.plate}>
					<div className={cn.content}>
						<Typography
							className={cn.title}
							tag='h3'
							size='m'
							font='expanded'
						>
							<span className={cn.percent}>
								-30%
								<div className={cn.vector}>
									<Image
										src={benefitsVector3Image}
										alt=''
									/>
								</div>
							</span>
							&nbsp;по средам
						</Typography>
						<Typography
							tag='h3'
							size='s'
						>
							на пылесос пола
						</Typography>
					</div>
					<Typography
						className={cn.info}
						tag='p'
						size='s'
					>
						*cкидка действует только в филиале на Пушкинской
					</Typography>
				</div>
				<div className={cn.plate}>
					<div className={cn.content}>
						<Typography
							className={cn.title}
							tag='h3'
							size='m'
							font='expanded'
						>
							<span className={cn.percent}>
								-30%
								<div className={cn.vector}>
									<Image
										src={benefitsVector4Image}
										alt=''
									/>
								</div>
							</span>
							&nbsp;по четвергам
						</Typography>
						<Typography
							tag='h3'
							size='s'
						>
							на химчистку дисков
						</Typography>
					</div>
					<Typography
						className={cn.info}
						tag='p'
						size='s'
					>
						*cкидка действует только в филиале на Пушкинской
					</Typography>
				</div>
			</div>
			<QuickWrite />
		</section>
	)
}
