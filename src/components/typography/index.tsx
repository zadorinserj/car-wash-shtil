import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import cn from './index.module.css'

export const Typography: FC<{
	className?: string
	tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
	size?: 'm' | 's' | 'xs'
	font?: 'default' | 'expanded'
	children: ReactNode | any
}> = ({ className, tag = 'div', size = 'm', font = 'default', children }) => {
	const Component = tag

	return (
		<Component
			className={clsx(cn.typography, cn[font], cn[size], cn[tag], className)}
		>
			{children}
		</Component>
	)
}
