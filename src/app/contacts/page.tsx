import twoGisIcon from '@public/icons/2gis-icon.svg'
import arrowRightBlackIcon from '@public/icons/arrow-right-black-icon.svg'
import arrowRightWhiteIcon from '@public/icons/arrow-right-white-icon.svg'
import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import vkBlueIcon from '@public/icons/vk-blue-icon.svg'
import yandexIcon from '@public/icons/yandex-icon.svg'
import contacts1Image from '@public/images/contacts-1.webp'
import contacts2Image from '@public/images/contacts-2.png'
import contacts3Image from '@public/images/contacts-3.png'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './page.module.css'

export const metadata = {
	title: 'Автомойка рядом 🚘 — круглосуточная мойка в Ижевске',
	description:
		'Ищете, где помыть машину в Ижевске? Мы работаем круглосуточно! 🚗 Рядом с вами на карте.'
}

export default function Contacts() {
	return (
		<div className={clsx(cn.page, 'container')}>
			<Typography
				className={cn.title}
				tag='h1'
				font='expanded'
			>
				Контакты
			</Typography>
			<section className={cn.card}>
				<div className={cn.image}>
					<Image
						src={contacts1Image}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.content}>
					<Typography
						className={cn.contentTitle}
						tag='h3'
						size='s'
					>
						Штиль в центре города
					</Typography>
					<div>
						<Typography
							tag='p'
							size='s'
						>
							Ижевск, ул. Пушкинская 268/1
						</Typography>
						<div className={cn.wrapper}>
							<Typography
								tag='p'
								size='s'
								className={cn.hours}
							>
								24/7
							</Typography>
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
								color='grey'
								type='secondary'
								icon={yandexIcon}
								hoverIcon={arrowTopRightGreenIcon}
								hoverColor='hoverGreen'
							>
								В Яндекс
							</Button>
							<Button
								href='https://go.2gis.com/ubwms'
								color='grey'
								type='secondary'
								icon={twoGisIcon}
								hoverIcon={arrowTopRightGreenIcon}
								hoverColor='hoverGreen'
							>
								В 2gis
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className={cn.card}>
				<div className={cn.image}>
					<Image
						src={contacts2Image}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.content}>
					<Typography
						className={cn.contentTitle}
						tag='h3'
						size='s'
					>
						Быстрая запись
					</Typography>
					<Typography
						className={cn.paragraph}
						tag='p'
						size='s'
					>
						Запишитесь онлайн, чтобы не ждать очереди. Нажмите кнопку или
						воспользуйтесь QR-кодом
					</Typography>
					<Button
						type='main'
						color='green'
						icon={arrowRightWhiteIcon}
						hoverIcon={arrowRightBlackIcon}
						animationDirection='left'
					>
						Онлайн запись
					</Button>
				</div>
			</section>
			<section className={cn.card}>
				<div className={cn.image}>
					<Image
						src={contacts3Image}
						alt=''
						fill={true}
					/>
				</div>
				<div className={cn.content}>
					<Typography
						className={cn.contentTitle}
						tag='h3'
						size='s'
					>
						Мы Вконтакте
					</Typography>
					<Typography
						className={cn.paragraph}
						tag='p'
						size='s'
					>
						Публикуем новости, акции, расписание и новинки
					</Typography>
					<Button
						href='https://vk.com/shtil18'
						type='main'
						color='green'
						icon={vkBlueIcon}
						hoverIcon={arrowRightBlackIcon}
						animationDirection='left'
					>
						Наша группа ВК
					</Button>
				</div>
			</section>
		</div>
	)
}
