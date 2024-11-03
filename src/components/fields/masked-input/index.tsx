import { FC, useEffect, useRef } from 'react'
import { createTextMaskInputElement } from 'text-mask-core'

import { Input, TInputProps } from '@/components/fields/input'

export const MaskedInput: FC<TInputProps & { mask: any[] }> = props => {
	const inputRef = useRef()
	const textMask = useRef()

	const handleChange = value => {
		textMask.current.update(value)

		props?.onChange?.(textMask.current.state.previousConformedValue)
	}

	useEffect(() => {
		if (inputRef.current) {
			textMask.current = createTextMaskInputElement({
				inputElement: inputRef.current,
				mask: props.mask,
				guide: false,
				keepCharPositions: false,
				showMask: false,
				placeholderChar: '\u2000',
				rawValue: '',
				currentCaretPosition: 0,
				previousConformedValue: ''
			})
		}
	}, [props.mask, inputRef.current])

	return (
		<Input
			{...props}
			ref={inputRef}
			onChange={handleChange}
		/>
	)
}
