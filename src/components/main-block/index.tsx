import twoGisIcon from '@public/icons/2gis-icon.svg'
import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import yandexIcon from '@public/icons/yandex-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import { ROCKET_WASH_URL } from '@/constants/pages'

import cn from './index.module.scss'

export const MainBlock: FC<{
	className?: string
	image: any
	mobileImage: any
	title: ReactNode
}> = ({ className, image, mobileImage, title }) => {
	return (
		<section className={clsx(cn.main, className)}>
			<div className='container'>
				<Typography
					className={cn.title}
					tag='h1'
					font='expanded'
				>
					{title}
				</Typography>
				<Button
					type='main'
					icon={arrowTopRightIcon}
					hoverIcon={arrowTopRightGreenIcon}
					href={ROCKET_WASH_URL}
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
							href='https://yandex.ru/maps/-/CDdhiMkC'
							type='secondary'
							icon={yandexIcon}
							hoverIcon={arrowTopRightGreenIcon}
						>
							В Яндекс
						</Button>
						<Button
							href='https://go.2gis.com/ubwms'
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
