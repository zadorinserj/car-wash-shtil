import closeIcon from '@public/icons/close-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

import cn from './index.module.css'

export const BaseModal: FC<{
	className?: string
	children: ReactNode
	onClose: () => void
}> = ({ className, children, onClose }) => {
	return (
		<div className={cn.wrapper}>
			<div className={cn.overlay} />
			<div className={clsx(cn.modal, className)}>
				<button
					className={cn.close}
					onClick={onClose}
				>
					<Image
						src={closeIcon}
						alt=''
						fill={true}
					/>
				</button>
				{children}
			</div>
		</div>
	)
}
