'use client'

import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Checkbox } from '@/components/fields/checkbox'
import { Input } from '@/components/fields/input'
import { MaskedInput } from '@/components/fields/masked-input'
import { ModalTypes } from '@/components/modals'
import { BaseModal } from '@/components/modals/base-modal'
import { Typography } from '@/components/typography'

import { useForm } from '@/hooks/use-form'

import { nameNormalizer } from '@/utils/normalizers/name-normalizer'
import { checkEmailForCyrillic } from '@/utils/validators/check-email-for-cyrillic'
import { emailValidator } from '@/utils/validators/email-validator'
import { phoneValidator } from '@/utils/validators/phone'
import { requiredValidator } from '@/utils/validators/required'

import cn from './index.module.scss'
import { useModal } from '@/context/modal-context'

const PHONE_MASK = [
	'+',
	'7',
	' ',
	/([0-6]|[8-9])/,
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/
]

export const QuickWriteModal: FC<{ open: boolean; onClose: () => void }> = ({
	onClose
}) => {
	const { showModal, hideModal } = useModal()

	const { fields, change, blur, submit } = useForm({
		initial: { name: '', phone: '', email: '', sopd: true },
		validators: {
			name: [requiredValidator],
			phone: [requiredValidator, phoneValidator()],
			email: [requiredValidator, checkEmailForCyrillic, emailValidator()],
			sopd: [requiredValidator]
		},
		normalizers: { name: [nameNormalizer] }
	})

	const handleSubmit = () => {
		const valid = submit()

		if (valid) {
			hideModal()
			showModal(ModalTypes.COMPLETE)
		}
	}

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
					value={fields.values.name}
					error={fields.errors.name}
					onChange={value => change('name', value)}
					onBlur={value => blur('name', value)}
				/>
				<MaskedInput
					name='phone'
					size='l'
					placeholder='Номер телефона'
					mask={PHONE_MASK}
					value={fields.values.phone}
					error={fields.errors.phone}
					onChange={value => change('phone', value)}
					onBlur={value => blur('phone', value)}
				/>
				<Input
					name='email'
					size='l'
					placeholder='E-mail'
					value={fields.values.email}
					error={fields.errors.email}
					onChange={value => change('email', value)}
					onBlur={value => blur('email', value)}
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
				onClick={handleSubmit}
			>
				Отправить заявку
			</Button>
			<Checkbox
				name='sopd'
				label='Согласие с политикой конфиденциальности и обработкой персональных данных'
				selected={fields.values.sopd}
				error={fields.errors.sopd}
				onChange={value => blur('sopd', value)}
			/>
		</BaseModal>
	)
}
