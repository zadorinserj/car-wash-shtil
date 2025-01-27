import twoGisIcon from '@public/icons/2gis-icon.svg'
import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import arrowTopRightWhiteIcon from '@public/icons/arrow-top-right-white-icon.svg'
import vkIcon from '@public/icons/vk-icon.svg'
import yandexIcon from '@public/icons/yandex-icon.svg'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Logo } from '@/components/logo'
import { Typography } from '@/components/typography'

import { MENU, Pages } from '@/constants/pages'

import cn from './index.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={cn.wrapper}>
			<div className={clsx(cn.footer, 'container')}>
				<section className={cn.content}>
					<div className={cn.logo}>
						<Logo color='white' />
						<Button
							href='https://vk.com/izh_shtil'
							type='main'
							icon={vkIcon}
							hoverIcon={arrowTopRightWhiteIcon}
						/>
					</div>
					<div className={cn.menu}></div>
					{/*<div className={cn.menu}>*/}
					{/*	<div className={cn.title}>*/}
					{/*		<Typography*/}
					{/*			tag='h3'*/}
					{/*			size='s'*/}
					{/*		>*/}
					{/*			Услуги*/}
					{/*		</Typography>*/}
					{/*	</div>*/}
					{/*	<div className={cn.services}>*/}
					{/*		<div className={cn.section}>*/}
					{/*			<div className={cn.sectionTitle}>*/}
					{/*				<Typography*/}
					{/*					tag='p'*/}
					{/*					size='s'*/}
					{/*				>*/}
					{/*					Автомойка*/}
					{/*				</Typography>*/}
					{/*			</div>*/}
					{/*			{MENU.find(({ text }) => text === 'Автомойка')?.submenu?.map(*/}
					{/*				({ text, url }) => (*/}
					{/*					<Link*/}
					{/*						key={text}*/}
					{/*						className={cn.sectionLink}*/}
					{/*						href={url}*/}
					{/*					>*/}
					{/*						<Typography*/}
					{/*							tag='p'*/}
					{/*							size='s'*/}
					{/*						>*/}
					{/*							{text}*/}
					{/*						</Typography>*/}
					{/*					</Link>*/}
					{/*				)*/}
					{/*			)}*/}
					{/*		</div>*/}
					{/*		<div className={cn.subSection}>*/}
					{/*			/!*<div className={cn.section}>*!/*/}
					{/*			/!*	<div className={cn.sectionTitle}>*!/*/}
					{/*			/!*		<Typography*!/*/}
					{/*			/!*			tag='p'*!/*/}
					{/*			/!*			size='s'*!/*/}
					{/*			/!*		>*!/*/}
					{/*			/!*			Химчистка*!/*/}
					{/*			/!*		</Typography>*!/*/}
					{/*			/!*	</div>*!/*/}
					{/*			/!*	<Link*!/*/}
					{/*			/!*		className={cn.sectionLink}*!/*/}
					{/*			/!*		href={Pages.CLEANERS_CARCASE}*!/*/}
					{/*			/!*	>*!/*/}
					{/*			/!*		<Typography*!/*/}
					{/*			/!*			tag='p'*!/*/}
					{/*			/!*			size='s'*!/*/}
					{/*			/!*		>*!/*/}
					{/*			/!*			Кузов*!/*/}
					{/*			/!*		</Typography>*!/*/}
					{/*			/!*	</Link>*!/*/}
					{/*			/!*	<Link*!/*/}
					{/*			/!*		className={cn.sectionLink}*!/*/}
					{/*			/!*		href={Pages.CLEANERS_SALON}*!/*/}
					{/*			/!*	>*!/*/}
					{/*			/!*		<Typography*!/*/}
					{/*			/!*			tag='p'*!/*/}
					{/*			/!*			size='s'*!/*/}
					{/*			/!*		>*!/*/}
					{/*			/!*			Салон*!/*/}
					{/*			/!*		</Typography>*!/*/}
					{/*			/!*	</Link>*!/*/}
					{/*			/!*</div>*!/*/}
					{/*			<div className={cn.section}>*/}
					{/*				/!*<div className={cn.sectionTitle}>*!/*/}
					{/*				/!*	<Typography*!/*/}
					{/*				/!*		tag='p'*!/*/}
					{/*				/!*		size='s'*!/*/}
					{/*				/!*	>*!/*/}
					{/*				/!*		Полировка*!/*/}
					{/*				/!*	</Typography>*!/*/}
					{/*				/!*</div>*!/*/}
					{/*				<Link*/}
					{/*					className={clsx(cn.sectionTitle, cn.sectionLink)}*/}
					{/*					href={Pages.CLEANERS}*/}
					{/*				>*/}
					{/*					<Typography*/}
					{/*						tag='p'*/}
					{/*						size='s'*/}
					{/*					>*/}
					{/*						Химчистка*/}
					{/*					</Typography>*/}
					{/*				</Link>*/}
					{/*				<Link*/}
					{/*					className={clsx(cn.sectionTitle, cn.sectionLink)}*/}
					{/*					href={Pages.POLISHING}*/}
					{/*				>*/}
					{/*					<Typography*/}
					{/*						tag='p'*/}
					{/*						size='s'*/}
					{/*					>*/}
					{/*						Полировка*/}
					{/*					</Typography>*/}
					{/*				</Link>*/}
					{/*				<Link*/}
					{/*					className={clsx(cn.sectionTitle, cn.sectionLink)}*/}
					{/*					href={Pages.PROTECTION_CERAMICS}*/}
					{/*				>*/}
					{/*					<Typography*/}
					{/*						tag='p'*/}
					{/*						size='s'*/}
					{/*					>*/}
					{/*						Керамопокрытие GYEON*/}
					{/*					</Typography>*/}
					{/*				</Link>*/}
					{/*				<Link*/}
					{/*					className={clsx(cn.sectionTitle, cn.sectionLink)}*/}
					{/*					href={Pages.POLISHING}*/}
					{/*				>*/}
					{/*					<Typography*/}
					{/*						tag='p'*/}
					{/*						size='s'*/}
					{/*					>*/}
					{/*						Твердый воск*/}
					{/*					</Typography>*/}
					{/*				</Link>*/}
					{/*				/!*<Link*!/*/}
					{/*				/!*	className={cn.sectionLink}*!/*/}
					{/*				/!*	href={Pages.PROTECTION_QUARTS}*!/*/}
					{/*				/!*>*!/*/}
					{/*				/!*	<Typography*!/*/}
					{/*				/!*		tag='p'*!/*/}
					{/*				/!*		size='s'*!/*/}
					{/*				/!*	>*!/*/}
					{/*				/!*		Кварц*!/*/}
					{/*				/!*	</Typography>*!/*/}
					{/*				/!*</Link>*!/*/}
					{/*				/!*<Link*!/*/}
					{/*				/!*	className={cn.sectionLink}*!/*/}
					{/*				/!*	href={Pages.PROTECTION_WAX}*!/*/}
					{/*				/!*>*!/*/}
					{/*				/!*	<Typography*!/*/}
					{/*				/!*		tag='p'*!/*/}
					{/*				/!*		size='s'*!/*/}
					{/*				/!*	>*!/*/}
					{/*				/!*		Воск*!/*/}
					{/*				/!*	</Typography>*!/*/}
					{/*				/!*</Link>*!/*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*		/!*<div className={cn.section}>*!/*/}
					{/*		/!*	<Link*!/*/}
					{/*		/!*		href='/'*!/*/}
					{/*		/!*		className={clsx(cn.sectionTitle, cn.sectionLink)}*!/*/}
					{/*		/!*	>*!/*/}
					{/*		/!*		<Typography*!/*/}
					{/*		/!*			tag='p'*!/*/}
					{/*		/!*			size='s'*!/*/}
					{/*		/!*		>*!/*/}
					{/*		/!*			Детейлинг*!/*/}
					{/*		/!*		</Typography>*!/*/}
					{/*		/!*	</Link>*!/*/}
					{/*		/!*</div>*!/*/}
					{/*		<div className={cn.section}>*/}
					{/*			<div className={clsx(cn.sectionTitle, cn.disabled)}>*/}
					{/*				<Typography*/}
					{/*					tag='p'*/}
					{/*					size='s'*/}
					{/*				>*/}
					{/*					Бронирование пленкой*/}
					{/*				</Typography>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className={cn.contacts}>
						<div className={cn.title}>
							<Typography
								tag='h3'
								size='s'
							>
								Контакты
							</Typography>
						</div>
						<div className={cn.address}>
							<Typography
								tag='p'
								size='s'
							>
								Ижевск, ул. Пушкинская 268/1
							</Typography>
							<div className={cn.hoursWrapper}>
								<div className={cn.hours}>
									<Typography
										tag='p'
										size='s'
									>
										24/7
									</Typography>
								</div>
								<Link
									href='tel:+73412911119'
									className={cn.phone}
								>
									<Typography
										tag='p'
										size='s'
									>
										+7 (3412) 91-11-19
									</Typography>
								</Link>
							</div>
							<div className={cn.actions}>
								<Button
									href='https://yandex.ru/maps/-/CDdhiMkC'
									icon={yandexIcon}
									hoverIcon={arrowTopRightGreenIcon}
									hoverColor='hoverGreen'
								>
									В Яндекс
								</Button>
								<Button
									href='https://go.2gis.com/ubwms'
									icon={twoGisIcon}
									hoverIcon={arrowTopRightGreenIcon}
									hoverColor='hoverGreen'
								>
									В 2gis
								</Button>
							</div>
						</div>
						{/*<div className={cn.address}>*/}
						{/*	<Typography*/}
						{/*		tag='p'*/}
						{/*		size='s'*/}
						{/*	>*/}
						{/*		Ижевск, ул. 8 марта, 16а, к. 2*/}
						{/*	</Typography>*/}
						{/*	<div className={cn.hoursWrapper}>*/}
						{/*		<div className={cn.hours}>*/}
						{/*			<Typography*/}
						{/*				tag='p'*/}
						{/*				size='s'*/}
						{/*			>*/}
						{/*				24/7*/}
						{/*			</Typography>*/}
						{/*		</div>*/}
						{/*		<Link*/}
						{/*			href='tel:+73412911119'*/}
						{/*			className={cn.phone}*/}
						{/*		>*/}
						{/*			<Typography*/}
						{/*				tag='p'*/}
						{/*				size='s'*/}
						{/*			>*/}
						{/*				+7 (3412) 91-11-19*/}
						{/*			</Typography>*/}
						{/*		</Link>*/}
						{/*	</div>*/}
						{/*	<div className={cn.actions}>*/}
						{/*		<Button*/}
						{/*			href='https://yandex.ru/maps/-/CDdhmJmJ'*/}
						{/*			icon={yandexIcon}*/}
						{/*			hoverIcon={arrowTopRightGreenIcon}*/}
						{/*			hoverColor='hoverGreen'*/}
						{/*		>*/}
						{/*			В Яндекс*/}
						{/*		</Button>*/}
						{/*		<Button*/}
						{/*			href='https://go.2gis.com/g19zwe'*/}
						{/*			icon={twoGisIcon}*/}
						{/*			hoverIcon={arrowTopRightGreenIcon}*/}
						{/*			hoverColor='hoverGreen'*/}
						{/*		>*/}
						{/*			В 2gis*/}
						{/*		</Button>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>
				</section>
				<section className={cn.basement}>
					<div className={cn.year}>
						<Typography
							tag='p'
							size='s'
						>
							© 2025
						</Typography>
					</div>
					<Link
						className={cn.fileLink}
						href='/'
					>
						<Typography
							tag='p'
							size='s'
						>
							Юридическая информация
						</Typography>
					</Link>
					<Link
						className={cn.fileLink}
						href='https://moishtil18.ru//docs/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%A8%D1%82%D0%B8%D0%BB%D1%8C.pdf'
						target='_blank'
					>
						<Typography
							tag='p'
							size='s'
						>
							Политика конфиденциальности
						</Typography>
					</Link>
					<div className={cn.mention}>
						<Typography
							tag='p'
							size='s'
						>
							Design by&nbsp;
							<Link
								className={cn.mentionLink}
								href='https://www.obradesign.ru/'
								target='_blank'
							>
								Obra
							</Link>
						</Typography>
					</div>
				</section>
			</div>
		</footer>
	)
}
