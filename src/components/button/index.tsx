import clsx from 'clsx'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

import cn from './style.module.css'

export const Button: FC<{
	className?: string
	type?: 'main' | 'secondary'
	color?: 'white' | 'green' | 'black' | 'grey'
	size?: 'l' | 'm' | 's'
	icon?: any
	hoverIcon?: any
	animationDirection?: 'top' | 'right' | 'left'
	hoverColor?: 'hoverBlack' | 'hoverGreen' | false
	block?: boolean
	onClick?: () => void
	children?: ReactNode
}> = ({
	className,
	type = 'secondary',
	color = 'white',
	size = 'l',
	children = null,
	icon,
	hoverIcon,
	animationDirection = 'top',
	hoverColor = 'hoverBlack',
	block = false,
	onClick
}) => {
	return (
		<button
			className={clsx(
				cn.button,
				cn[size],
				cn[color],
				cn[type],
				cn[animationDirection],
				hoverColor !== false && cn[hoverColor],
				block && cn.block,
				children !== null && cn.withText,
				className
			)}
			onClick={onClick}
		>
			{children && <span className={cn.text}>{children}</span>}
			{icon && (
				<div className={cn.wrapper}>
					<Image
						src={icon}
						alt=''
						fill={true}
					/>
					<div className={cn.hoverIcon}>
						<Image
							src={hoverIcon}
							alt=''
							fill={true}
						/>
					</div>
				</div>
			)}
		</button>
	)
}
