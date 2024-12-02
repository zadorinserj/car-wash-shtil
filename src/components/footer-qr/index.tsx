import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import arrowTopRightIcon from '@public/icons/arrow-top-right-icon.svg'
import contactsQrImage from '@public/images/contacts-qr.png'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import { ROCKET_WASH_URL } from '@/constants/pages'

import cn from './index.module.css'

export const FooterQr: FC = () => {
	return (
		<section className={cn.section}>
			<Typography
				className={cn.title}
				tag='h2'
				font='expanded'
			>
				Быстрая запись
			</Typography>
			<Typography
				className={cn.paragraph}
				tag='p'
				size='m'
				font='expanded'
			>
				Запишитесь онлайн, чтобы не ждать очереди. <br /> Нажмите кнопку или
				воспользуйтесь QR-кодом
			</Typography>
			<Button
				className={cn.action}
				type='main'
				icon={arrowTopRightIcon}
				hoverIcon={arrowTopRightGreenIcon}
				href={ROCKET_WASH_URL}
			>
				Онлайн-запись
			</Button>
			<div className={cn.qr}>
				<Image
					src={contactsQrImage}
					alt=''
					fill={true}
				/>
			</div>
		</section>
	)
}
