import twoGisIcon from '@public/icons/2gis-icon.svg'
import arrowTopRightGreenIcon from '@public/icons/arrow-top-right-green-icon.svg'
import yandexIcon from '@public/icons/yandex-icon.svg'
import contactsBgImage from '@public/images/contacts-bg.webp'
import contactsVector1Image from '@public/images/contacts-vector-1.png'
import contactsVector2Image from '@public/images/contacts-vector-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const Contacts: FC = () => {
	return (
		<section>
			<Typography
				tag='h2'
				font='expanded'
			>
				Контакты
			</Typography>
			<div className={cn.content}>
				<div className={cn.description}>
					<div className={cn.descriptionVector}>
						<Image
							src={contactsVector1Image}
							alt=''
							fill={true}
						/>
					</div>
					<Typography
						tag='h3'
						size='s'
					>
						Штиль в центре города
					</Typography>
					<div className={cn.contacts}>
						<Typography
							tag='p'
							size='s'
						>
							Ижевск, ул. Пушкинская 268/1
						</Typography>
						<div className={cn.time}>
							<div className={cn.hours}>24/7</div>
							<Link
								href='tel:+73412911119'
								className={cn.phone}
							>
								+7 (3412) 91-11-19
							</Link>
						</div>
						<div className={cn.actions}>
							<Button
								href='https://yandex.ru/maps/-/CDdhiMkC'
								color='black'
								type='secondary'
								hoverColor='hoverGreen'
								icon={yandexIcon}
								hoverIcon={arrowTopRightGreenIcon}
							>
								В Яндекс
							</Button>
							<Button
								href='https://go.2gis.com/ubwms'
								color='black'
								type='secondary'
								hoverColor='hoverGreen'
								icon={twoGisIcon}
								hoverIcon={arrowTopRightGreenIcon}
							>
								В 2gis
							</Button>
						</div>
					</div>
				</div>
				<div className={cn.image}>
					<Image
						src={contactsBgImage}
						alt=''
						fill={true}
					/>
					<div className={cn.imageVector}>
						<Image
							src={contactsVector2Image}
							alt=''
							fill={true}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
