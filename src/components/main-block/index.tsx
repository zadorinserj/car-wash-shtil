import twoGisIcon from '@public/icons/2gis-icon.svg'
import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import yandexIcon from '@public/icons/yandex-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const MainBlock: FC<{
	className?: string
	image: any
	mobileImage: any
}> = ({ className, image, mobileImage }) => {
	return (
		<section className={clsx(cn.main, className)}>
			<div className='container'>
				<Typography
					className={cn.title}
					tag='h1'
					font='expanded'
				>
					Комплексная <br /> мойка и детейлинг <br /> авто в Ижевске
				</Typography>
				<Button
					type='main'
					icon={arrowTopRightIcon}
					hoverIcon={arrowTopRightGreenIcon}
				>
					Онлайн-запись
				</Button>
				<div className={cn.contacts}>
					<Typography
						tag='p'
						size='s'
					>
						Ижевск, ул. Пушкинская 268/1
					</Typography>
					<div className={cn.wrapper}>
						<Typography
							tag='p'
							size='s'
						>
							24/7
						</Typography>
						<Link
							href='tel:+73412911119'
							className={cn.phone}
						>
							<Typography
								tag='p'
								size='s'
							>
								+7 (3412) 91-11-19
							</Typography>
						</Link>
					</div>
					<div className={cn.actions}>
						<Button
							type='secondary'
							icon={yandexIcon}
							hoverIcon={arrowTopRightGreenIcon}
						>
							В Яндекс
						</Button>
						<Button
							type='secondary'
							icon={twoGisIcon}
							hoverIcon={arrowTopRightGreenIcon}
						>
							В 2gis
						</Button>
					</div>
				</div>
				<div className={cn.bg}>
					<Image
						src={image}
						alt=''
						fill={true}
					/>
				</div>
			</div>
			<div className={cn.bgMobile}>
				<Image
					src={mobileImage}
					alt=''
					fill={true}
				/>
			</div>
		</section>
	)
}
