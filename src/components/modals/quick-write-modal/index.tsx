'use client'

import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import { FC, useState } from 'react'

import { Button } from '@/components/button'
import { Checkbox } from '@/components/fields/checkbox'
import { Input } from '@/components/fields/input'
import { BaseModal } from '@/components/modals/base-modal'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const QuickWriteModal: FC<{ open: boolean; onClose: () => void }> = ({
	onClose
}) => {
	const [fullName, changeFullName] = useState<string>('')
	const [phone, changePhone] = useState<string>('')
	const [email, changeEmail] = useState<string>('')
	const [sopd, changeSopd] = useState<boolean>(true)

	return (
		<BaseModal
			className={cn.modal}
			onClose={onClose}
		>
			<Typography
				className={cn.title}
				tag='h3'
				size='s'
			>
				Заявка для корпоративных клиентов
			</Typography>
			<Typography
				className={cn.paragraph}
				tag='p'
				size='s'
			>
				Оставьте данные и мы свяжемся с вами в ближайшее время
			</Typography>
			<div className={cn.fields}>
				<Input
					name='fullName'
					size='l'
					placeholder='ФИО'
					value={fullName}
					onChange={changeFullName}
				/>
				<Input
					name='phone'
					size='l'
					placeholder='Номер телефона'
					value={phone}
					onChange={changePhone}
				/>
				<Input
					name='email'
					size='l'
					placeholder='E-mail'
					value={email}
					onChange={changeEmail}
				/>
			</div>
			<Button
				className={cn.action}
				type='main'
				color='green'
				block={true}
				icon={arrowRightWhiteIcon}
				hoverIcon={arrowRightBlackIcon}
				hoverColor='hoverBlack'
				animationDirection='left'
			>
				Отправить заявку
			</Button>
			<Checkbox
				name='sopd'
				label='Согласие с политикой конфиденциальности и обработкой персональных данных'
				selected={sopd}
				onChange={changeSopd}
			/>
		</BaseModal>
	)
}
