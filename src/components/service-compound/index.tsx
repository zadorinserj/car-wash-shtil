import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import arrowTopRightWhiteIcon from '@public/icons/arrow-top-right-white-icon.svg'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import { ROCKET_WASH_URL } from '@/constants/pages'

import cn from './index.module.scss'

type SERVICE = {
	name: string
	price: number
	description: string
}

export const ServiceCompound: FC<{
	main?: SERVICE[]
	additional?: SERVICE[]
}> = ({ main = [], additional = [] }) => {
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
					href={ROCKET_WASH_URL}
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
					{main?.map(({ name, price, description }) => (
						<div
							className={cn.row}
							key={name}
						>
							<div className={cn.name}>
								<Typography
									tag='p'
									size='s'
								>
									{name}
								</Typography>
								<Typography
									className={cn.price}
									tag='p'
									size='s'
								>
									от {price} ₽
								</Typography>
							</div>
							<div className={cn.description}>
								<Typography
									tag='p'
									size='s'
								>
									{description}
								</Typography>
							</div>
							<Typography
								className={cn.price}
								tag='p'
								size='s'
							>
								от {price} ₽
							</Typography>
						</div>
					))}
					{additional?.length > 0 && (
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
					)}
					{additional?.map?.(({ name, price, description }) => (
						<div
							className={cn.row}
							key={name}
						>
							<div className={cn.name}>
								<Typography
									tag='p'
									size='s'
								>
									{name}
								</Typography>
								<Typography
									className={cn.price}
									tag='p'
									size='s'
								>
									от {price} ₽
								</Typography>
							</div>
							<div className={cn.description}>
								<Typography
									tag='p'
									size='s'
								>
									{description}
								</Typography>
							</div>
							<Typography
								className={cn.price}
								tag='p'
								size='s'
							>
								от {price} ₽
							</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
