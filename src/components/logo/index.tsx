import logoIcon from '@public/icons/logo-icon.svg'
import logoWhiteIcon from '@public/icons/logo-white-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import cn from './index.module.css'

export const Logo: FC<{ color?: 'green' | 'white' }> = ({
	color = 'green'
}) => {
	return (
		<Link
			href='/'
			className={cn.wrapper}
		>
			<Image
				src={color === 'green' ? logoIcon : logoWhiteIcon}
				alt=''
				fill={true}
			/>
		</Link>
	)
}
