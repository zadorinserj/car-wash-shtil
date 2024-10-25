'use client'

import clsx from 'clsx'
import { FC, useState } from 'react'

import cn from './index.module.css'

export const Input: FC<{
	className?: string
	name?: string
	value?: string
	error?: string
	placeholder?: string
	size?: 'l' | 'm' | 's'
	onChange?: (value: string) => void
	onBlur?: (value: string) => void
}> = ({
	className,
	name,
	placeholder,
	value,
	error,
	size = 'l',
	onChange,
	onBlur
}) => {
	const [focus, setFocus] = useState<boolean>(false)

	const handleFocus = () => {
		setFocus(true)
	}

	const handleChange = event => {
		const value = event.target.value

		onChange?.(value)
	}

	const handleBlur = event => {
		const value = event.target.value

		onBlur?.(value)

		setFocus(false)
	}

	return (
		<label
			className={clsx(
				cn.field,
				cn[size],
				focus && cn.focus,
				error && cn.withError,
				className
			)}
		>
			<input
				className={cn.input}
				name={name}
				type='text'
				placeholder={placeholder}
				value={value}
				onFocus={handleFocus}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{error && <div className={cn.error}>{error}</div>}
		</label>
	)
}
