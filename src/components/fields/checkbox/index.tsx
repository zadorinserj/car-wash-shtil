import checkboxCheckedIcon from '@public/icons/checkbox-checked.svg'
import checkboxEmptyIcon from '@public/icons/checkbox-empty.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const Checkbox: FC<{
	className?: string
	name?: string
	label?: string
	disabled?: boolean
	selected?: boolean
	onChange?: (selected: boolean) => void
}> = ({ className, name, label, disabled = false, selected, onChange }) => {
	return (
		<label className={clsx(cn.wrapper, disabled && cn.disabled, className)}>
			<input
				className={cn.hidden}
				name={name}
				type='checkbox'
				disabled={disabled}
				checked={selected}
				onChange={() => onChange?.(!selected)}
			/>
			<div className={cn.checkbox}>
				<Image
					src={selected ? checkboxCheckedIcon : checkboxEmptyIcon}
					alt=''
				/>
			</div>
			<Typography
				tag='p'
				size='xs'
			>
				{label}
			</Typography>
		</label>
	)
}
