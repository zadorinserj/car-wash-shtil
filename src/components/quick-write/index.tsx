import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import quickWriteBgImage from '@public/images/quick-write-bg.png'
import quickWriteQrImage from '@public/images/quick-write-qr-image.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import { ROCKET_WASH_URL } from '@/constants/pages'

import cn from './index.module.scss'

export const QuickWrite: FC = () => {
	return (
		<div className={cn.wrapper}>
			<div className={cn.content}>
				<Typography
					className={cn.title}
					tag='h2'
					font='expanded'
				>
					Быстрая запись
				</Typography>
				<Typography
					tag='p'
					size='m'
				>
					Запишитесь онлайн, чтобы не <br /> ждать очереди. Нажмите кнопку{' '}
					<br /> или воспользуйтесь QR-кодом
				</Typography>
				<Button
					className={cn.action}
					type='main'
					icon={arrowTopRightIcon}
					hoverIcon={arrowTopRightGreenIcon}
					href={ROCKET_WASH_URL}
				>
					Онлайн запись
				</Button>
			</div>
			<div className={cn.image}>
				<Image
					src={quickWriteQrImage}
					alt=''
					fill={true}
				/>
			</div>
			<div className={cn.bg}>
				<Image
					src={quickWriteBgImage}
					alt=''
					fill={true}
				/>
			</div>
		</div>
	)
}
