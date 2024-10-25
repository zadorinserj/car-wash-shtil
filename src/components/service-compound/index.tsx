import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import arrowTopRightWhiteIcon from '@public/icons/arrow-top-right-white-icon.svg'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const ServiceCompound: FC = () => {
	return (
		<div className={cn.wrapper}>
			<div className={cn.header}>
				<Typography
					className={cn.title}
					tag='h2'
					font='expanded'
				>
					Состав услуги
				</Typography>
				<Typography
					tag='p'
					size='s'
				>
					Включены базовые работы, а дополнительные опции предоставляются за
					отдельную стоимость
				</Typography>
				<Button
					className={cn.action}
					color='green'
					type='main'
					icon={arrowTopRightIcon}
					hoverIcon={arrowTopRightWhiteIcon}
				>
					Онлайн запись
				</Button>
			</div>
			<div className={cn.content}>
				<div className={cn.table}>
					<div className={cn.rowHeader}>
						<Typography
							tag='h3'
							size='s'
						>
							Основные
						</Typography>
					</div>
					<div className={cn.row}>
						<div className={cn.name}>
							<Typography
								tag='p'
								size='s'
							>
								Твердый воск
							</Typography>
							<Typography
								className={cn.price}
								tag='p'
								size='s'
							>
								от 1000 ₽
							</Typography>
						</div>
						<div className={cn.description}>
							<Typography
								tag='p'
								size='s'
							>
								устранит мелкие царапины
							</Typography>
						</div>
						<Typography
							className={cn.price}
							tag='p'
							size='s'
						>
							от 1000 ₽
						</Typography>
					</div>
					<div className={cn.rowHeader}>
						<Typography
							tag='h3'
							size='s'
						>
							Дополнительные
						</Typography>
						<Typography
							tag='p'
							size='s'
						>
							Оплачиваются отдельно
						</Typography>
					</div>
					<div className={cn.row}>
						<div className={cn.name}>
							<Typography
								tag='p'
								size='s'
							>
								Твердый воск
							</Typography>
							<Typography
								className={cn.price}
								tag='p'
								size='s'
							>
								от 1000 ₽
							</Typography>
						</div>
						<div className={cn.description}>
							<Typography
								tag='p'
								size='s'
							>
								устранит мелкие царапины устранит мелкие царапины устранит
								мелкие царапины устранит мелкие царапины устранит мелкие
								царапины устранит мелкие царапины
							</Typography>
						</div>
						<Typography
							className={cn.price}
							tag='p'
							size='s'
						>
							от 1000 ₽
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}
