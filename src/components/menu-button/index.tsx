import closeIcon from '@public/icons/close-icon.svg'
import menuIcon from '@public/icons/menu-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import cn from './index.module.scss'

export const MenuButton: FC<{
	className?: string
	open: boolean
	onClick: () => void
}> = ({ className, open, onClick }) => {
	return (
		<button
			className={clsx(cn.button, className)}
			onClick={onClick}
		>
			<Image
				src={open ? closeIcon : menuIcon}
				alt=''
			/>
		</button>
	)
}
