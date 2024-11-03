'use client'

import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import completeModal from '@public/images/complete-modal.webp'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import { BaseModal } from '@/components/modals/base-modal'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const CompleteModal: FC<{ open: boolean; onClose: () => void }> = ({
	onClose
}) => {
	return (
		<BaseModal
			className={cn.modal}
			onClose={onClose}
		>
			<div className={cn.image}>
				<Image
					src={completeModal}
					alt=''
					fill={true}
				/>
			</div>
			<Typography
				className={cn.title}
				tag='h3'
				size='s'
			>
				Ваша заявка на пути к нам
			</Typography>
			<Typography
				className={cn.paragraph}
				tag='p'
				size='s'
			>
				В ближайшее время мы свяжемся с вами для обсуждения деталей
			</Typography>
			<Button
				type='main'
				color='green'
				block={true}
				icon={arrowRightWhiteIcon}
				hoverIcon={arrowRightBlackIcon}
				hoverColor='hoverBlack'
				animationDirection='left'
				onClick={onClose}
			>
				Вернуться на страницу
			</Button>
		</BaseModal>
	)
}
