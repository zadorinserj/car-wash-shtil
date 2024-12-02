'use client'

import arrowBottomIcon from '@public/icons/arrow-bottom-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo, useState } from 'react'

import { Typography } from '@/components/typography'

import { MENU, Pages } from '@/constants/pages'

import cn from './index.module.css'

export const AdaptiveMenu: FC = () => {
	const [selected, setSelected] = useState<string>('')

	const submenu = useMemo(() => {
		if (selected === '') return []

		return MENU.find(({ text }) => text === selected)?.submenu?.map(
			({ text, url }) => (
				<Link
					key={url}
					href={url}
					className={clsx(cn.link, cn.item)}
				>
					<Typography
						tag='p'
						size='s'
					>
						{text}
					</Typography>
				</Link>
			)
		)
	}, [selected])

	return (
		<div className={cn.wrapper}>
			<div className={clsx(cn.menu, selected !== '' && cn.menuSelected)}>
				<div
					className={clsx(cn.submenu, selected !== '' && cn.topMenuSelected)}
				>
					{/*{MENU.map(({ text, submenu = null, url = null }) =>*/}
					{/*	url !== null ? (*/}
					{/*		<Link*/}
					{/*			className={clsx(cn.link, selected !== '' && cn.itemHint)}*/}
					{/*			key={url}*/}
					{/*			href={url}*/}
					{/*		>*/}
					{/*			<Typography*/}
					{/*				tag='p'*/}
					{/*				size='s'*/}
					{/*			>*/}
					{/*				{submenu}*/}
					{/*				{text}*/}
					{/*			</Typography>*/}
					{/*		</Link>*/}
					{/*	) : (*/}
					{/*		<button*/}
					{/*			key={text}*/}
					{/*			className={clsx(*/}
					{/*				cn.item,*/}
					{/*				selected !== '' && cn.itemHint,*/}
					{/*				selected === text && cn.itemSelected*/}
					{/*			)}*/}
					{/*			onClick={() => handleChange(text)}*/}
					{/*		>*/}
					{/*			<Typography*/}
					{/*				tag='p'*/}
					{/*				size='s'*/}
					{/*			>*/}
					{/*				{text}*/}
					{/*			</Typography>*/}
					{/*			{submenu !== null && (*/}
					{/*				<div className={cn.icon}>*/}
					{/*					<Image*/}
					{/*						src={arrowBottomIcon}*/}
					{/*						alt=''*/}
					{/*					/>*/}
					{/*				</div>*/}
					{/*			)}*/}
					{/*		</button>*/}
					{/*	)*/}
					{/*)}*/}
					<Link
						className={clsx(cn.link)}
						href={Pages.CAR_WASH}
					>
						<Typography
							tag='p'
							size='s'
						>
							Автомойка
						</Typography>
					</Link>
					<Link
						className={clsx(cn.link)}
						href={Pages.CLEANERS}
					>
						<Typography
							tag='p'
							size='s'
						>
							Химчистка
						</Typography>
					</Link>
					<Link
						className={clsx(cn.link)}
						href={Pages.POLISHING}
					>
						<Typography
							tag='p'
							size='s'
						>
							Полировка
						</Typography>
					</Link>
					<Link
						className={clsx(cn.link)}
						href={Pages.PROTECTION_CERAMICS}
					>
						<Typography
							tag='p'
							size='s'
						>
							Керамопокрытие
						</Typography>
					</Link>
					<Link
						className={clsx(
							cn.link,
							selected !== '' && cn.itemHint,
							cn.contactsItem
						)}
						href={Pages.CONTACTS}
					>
						<Typography
							tag='p'
							size='s'
						>
							Контакты
						</Typography>
					</Link>
					<Link
						href='tel:+73412911119'
						className={cn.phoneLink}
					>
						<Typography
							tag='p'
							size='s'
						>
							+7 (3412) 91-11-19
						</Typography>
					</Link>
				</div>
				{submenu.length !== 0 && (
					<div>
						<button
							className={cn.backButton}
							onClick={() => setSelected('')}
						>
							<div className={cn.backButtonIcon}>
								<Image
									src={arrowBottomIcon}
									alt=''
								/>
							</div>
							<Typography
								tag='p'
								size='s'
							>
								{selected}
							</Typography>
						</button>
						<div className={cn.submenu}>{submenu}</div>
					</div>
				)}
			</div>
		</div>
	)
}
