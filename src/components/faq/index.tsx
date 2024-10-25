import { FC } from 'react'

import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const Faq: FC = () => {
	return (
		<div className={cn.wrapper}>
			<Typography
				className={cn.title}
				tag='h2'
				font='expanded'
			>
				Часто задаваемые вопросы
			</Typography>
			<div className={cn.content}>
				<div className={cn.item}>
					<Typography
						className={cn.counter}
						tag='p'
						size='s'
					>
						01
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Как часто нужно мыть кузов автомобиля?
					</Typography>
					<Typography
						className={cn.answer}
						tag='p'
						size='s'
					>
						Рекомендуется мыть кузов автомобиля каждые 2-4 недели, чтобы
						предотвратить накопление грязи, пыли и загрязнений
					</Typography>
				</div>
				<div className={cn.item}>
					<Typography
						className={cn.counter}
						tag='p'
						size='s'
					>
						02
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Как долго длится мойка кузова?
					</Typography>
					<Typography
						className={cn.answer}
						tag='p'
						size='s'
					>
						Предварительная запись рекомендуется, но также возможен приём без
						записи в зависимости от загруженности
					</Typography>
				</div>
				<div className={cn.item}>
					<Typography
						className={cn.counter}
						tag='p'
						size='s'
					>
						03
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Что входит в стандартную мойку кузова?
					</Typography>
					<Typography
						className={cn.answer}
						tag='p'
						size='s'
					>
						В стандартную мойку входят очистка кузова, дисков, арок и ковриков
					</Typography>
				</div>
				<div className={cn.item}>
					<Typography
						className={cn.counter}
						tag='p'
						size='s'
					>
						04
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Могу ли я оставить автомобиль на мойку?
					</Typography>
					<Typography
						className={cn.answer}
						tag='p'
						size='s'
					>
						Да, вы можете оставить автомобиль, и мы позвоним вам, когда мойка
						будет завершена
					</Typography>
				</div>
				<div className={cn.item}>
					<Typography
						className={cn.counter}
						tag='p'
						size='s'
					>
						05
					</Typography>
					<Typography
						tag='p'
						size='s'
					>
						Какой тип мойки лучше выбрать для моего автомобиля?
					</Typography>
					<Typography
						className={cn.answer}
						tag='p'
						size='s'
					>
						Рекомендуем уточнить у нас, исходя из состояния вашего автомобиля и
						ваших потребностей
					</Typography>
				</div>
			</div>
		</div>
	)
}
