import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const ServiceCard: FC<{
	image?: StaticImageData
	mobileImage?: StaticImageData
	title: string
	paragraph: string
	tag: string
	url: any
}> = ({ image, url, mobileImage, title, paragraph, tag }) => {
	return (
		<div className={clsx(cn.wrapper, image && cn.withImage)}>
			<div className={cn.content}>
				<Typography
					className={cn.title}
					tag='h3'
					size='s'
				>
					{title}
				</Typography>
				<Typography
					className={cn.paragraph}
					tag='p'
					size='s'
				>
					{paragraph}
				</Typography>
				<div className={cn.actions}>
					<Button
						href={url}
						target='_self'
						type='main'
						color='green'
						icon={arrowRightWhiteIcon}
						hoverIcon={arrowRightBlackIcon}
					>
						Подробнее
					</Button>
					<Typography
						className={cn.tag}
						tag='p'
						size='s'
					>
						{tag}
					</Typography>
				</div>
				{mobileImage && (
					<div className={cn.mobileImage}>
						<Image
							src={mobileImage}
							alt=''
							fill={true}
						/>
					</div>
				)}
			</div>
			{image && (
				<div className={cn.image}>
					<Image
						src={image}
						alt=''
						fill={true}
					/>
				</div>
			)}
		</div>
	)
}
