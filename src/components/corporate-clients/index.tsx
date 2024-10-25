'use client'

import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import corporateClientImage from '@public/images/corporate-client.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { ModalTypes } from '@/components/modals'
import { Typography } from '@/components/typography'

import cn from './index.module.css'
import { useModal } from '@/context/modal-context'

export const CorporateClients: FC = () => {
	const { showModal } = useModal()

	return (
		<section className={cn.wrapper}>
			<div className={cn.bg}>
				<Image
					src={corporateClientImage}
					alt=''
					fill={true}
				/>
			</div>
			<div>
				<Typography
					className={cn.title}
					tag='h3'
					size='m'
					font='expanded'
				>
					Обслуживание корпоративных <br /> клиентов
				</Typography>
				<Typography
					tag='p'
					size='s'
				>
					Оплата производится по факту оказания услуг <br /> в конце месяца
				</Typography>
				<Button
					className={cn.action}
					type='main'
					color='green'
					icon={arrowRightWhiteIcon}
					hoverIcon={arrowRightBlackIcon}
					animationDirection='left'
					onClick={() => showModal(ModalTypes.QUICK_WRITE)}
				>
					Оставить заявку
				</Button>
			</div>
		</section>
	)
}
