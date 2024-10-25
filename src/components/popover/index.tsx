import { BasePlacement, VariationPlacement } from '@popperjs/core'
import clsx from 'clsx'
import { FC, ReactNode, useState } from 'react'
import { usePopper } from 'react-popper'

import styles from './index.module.css'

export const Popover: FC<{
	className?: string
	visible: boolean
	target: any
	placement: BasePlacement | VariationPlacement
	offset?: number[]
	children: ReactNode
}> = ({ className, visible, target, children, offset = [0, 8], placement }) => {
	const [popperElement, setPopperElement] = useState(null)

	const { styles: popperStyles, attributes } = usePopper(
		target,
		popperElement,
		{
			placement,
			modifiers: [{ name: 'offset', options: { offset: offset as any } }]
		}
	)

	return (
		<div
			ref={setPopperElement}
			className={clsx(styles.popover, visible && styles.visible, className)}
			style={popperStyles.popper}
			{...attributes.popper}
		>
			{children}
		</div>
	)
}
