'use client'

import arrowBottomIcon from '@public/icons/arrow-bottom-icon.svg'
import menuCarWashImage from '@public/images/menu-car-wash-image.png'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { AdaptiveMenu } from '@/components/adaptive-menu'
import { Logo } from '@/components/logo'
import { MenuButton } from '@/components/menu-button'
import { Tooltip } from '@/components/tooltip'

import { MENU, Pages } from '@/constants/pages'

import cn from './index.module.css'

export const Header: FC = () => {
	const [carWashMenuOpen, setCarWashMenuOpen] = useState<boolean>(false)
	// const [cleaningMenuOpen, setCleaningMenuOpen] = useState<boolean>(false)
	// const [protectionMenuOpen, setProtectionMenuOpen] = useState<boolean>(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

	return (
		<header className={cn.header}>
			<div className={clsx(cn.content, 'container')}>
				<Logo />
				<nav className={clsx(cn.menu, cn.desktop)}>
					<Tooltip
						trigger='hover'
						placement='bottom-start'
						offset={[-60, 14]}
						onToggle={setCarWashMenuOpen}
						content={
							<div className={cn.tooltip}>
								<div className={cn.menuContent}>
									{MENU.find(({ text }) => text === 'Автомойка').submenu.map(
										({ text, url }) => (
											<Link
												key={text}
												href={url}
												className={cn.link}
											>
												{text}
											</Link>
										)
									)}
								</div>
								<div className={cn.promoImage}>
									<Image
										src={menuCarWashImage}
										alt=''
										fill={true}
									/>
								</div>
							</div>
						}
					>
						<Link
							href={Pages.CAR_WASH}
							className={clsx(
								cn.link,
								cn.withIcon,
								carWashMenuOpen && cn.withIconRotate
							)}
						>
							Автомойка
							<div className={cn.icon}>
								<Image
									src={arrowBottomIcon}
									alt=''
								/>
							</div>
						</Link>
					</Tooltip>
					{/*<Tooltip*/}
					{/*	trigger='hover'*/}
					{/*	placement='bottom-start'*/}
					{/*	offset={[-60, 14]}*/}
					{/*	onToggle={setCleaningMenuOpen}*/}
					{/*	content={*/}
					{/*		<div className={cn.tooltip}>*/}
					{/*			<div className={cn.menuContent}>*/}
					{/*				{MENU.find(*/}
					{/*					({ text }) => text === 'Химчистка'*/}
					{/*				)?.submenu?.map?.(({ text, url }) => (*/}
					{/*					<Link*/}
					{/*						key={text}*/}
					{/*						href={url}*/}
					{/*						className={cn.link}*/}
					{/*					>*/}
					{/*						{text}*/}
					{/*					</Link>*/}
					{/*				))}*/}
					{/*			</div>*/}
					{/*			<div className={cn.promoImage}>*/}
					{/*				<Image*/}
					{/*					src={menuCarWashImage}*/}
					{/*					alt=''*/}
					{/*					fill={true}*/}
					{/*				/>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	}*/}
					{/*>*/}
					<Link
						href={Pages.CLEANERS}
						className={clsx(cn.link)}
					>
						Химчистка
					</Link>
					{/*</Tooltip>*/}
					{/*<Tooltip*/}
					{/*	trigger='hover'*/}
					{/*	placement='bottom-start'*/}
					{/*	offset={[-60, 14]}*/}
					{/*	onToggle={setProtectionMenuOpen}*/}
					{/*	content={*/}
					{/*		<div className={cn.tooltip}>*/}
					{/*			<div className={cn.menuContent}>*/}
					{/*				{MENU.find(*/}
					{/*					({ text }) => text === 'Защитные покрытия'*/}
					{/*				)?.submenu?.map?.(({ text, url }) => (*/}
					{/*					<Link*/}
					{/*						key={text}*/}
					{/*						href={url}*/}
					{/*						className={cn.link}*/}
					{/*					>*/}
					{/*						{text}*/}
					{/*					</Link>*/}
					{/*				))}*/}
					{/*			</div>*/}
					{/*			<div className={cn.promoImage}>*/}
					{/*				<Image*/}
					{/*					src={menuCarWashImage}*/}
					{/*					alt=''*/}
					{/*					fill={true}*/}
					{/*				/>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	}*/}
					{/*>*/}
					{/*	<div*/}
					{/*		className={clsx(*/}
					{/*			cn.link,*/}
					{/*			cn.withIcon,*/}
					{/*			protectionMenuOpen && cn.withIconRotate*/}
					{/*		)}*/}
					{/*	>*/}
					{/*		Защита кузова*/}
					{/*		<div className={cn.icon}>*/}
					{/*			<Image*/}
					{/*				src={arrowBottomIcon}*/}
					{/*				alt=''*/}
					{/*			/>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</Tooltip>*/}
					<Link
						href={Pages.POLISHING}
						className={cn.link}
					>
						Полировка
					</Link>
					<Link
						href={Pages.PROTECTION_CERAMICS}
						className={cn.link}
					>
						Керамопокрытие
					</Link>
					{/*<Link*/}
					{/*	href={Pages.DETAILING}*/}
					{/*	className={cn.link}*/}
					{/*>*/}
					{/*	Детейлинг*/}
					{/*</Link>*/}
				</nav>
				<div className={cn.contacts}>
					<Link
						href={Pages.CONTACTS}
						className={clsx(cn.link, cn.desktop)}
					>
						Контакты
					</Link>
					<Link
						href='tel:+73412911119'
						className={clsx(cn.link, cn.phone)}
					>
						+7 (3412) 91-11-19
					</Link>
					<Tooltip
						trigger={false}
						opened={mobileMenuOpen}
						placement='bottom-end'
						popoverClassName={cn.mobileMenuPopover}
						targetClassName={cn.mobileMenuButton}
						content={<AdaptiveMenu />}
						onToggle={visible => setMobileMenuOpen(visible)}
					>
						<MenuButton
							open={mobileMenuOpen}
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						/>
					</Tooltip>
				</div>
			</div>
		</header>
	)
}
