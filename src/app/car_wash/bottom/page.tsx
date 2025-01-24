import mainPageBgMobileImage from '@public/images/main-page-bg-mobile-image.webp'
import mainPageBgImage from '@public/images/main-page-bg.webp'

import { CorporateClients } from '@/components/corporate-clients'
import { Discounts } from '@/components/discounts'
import { Faq } from '@/components/faq'
import { FooterQr } from '@/components/footer-qr'
import { MainBlock } from '@/components/main-block'
import { ServiceCompound } from '@/components/service-compound'
import { Slider } from '@/components/slider'
import { WhatIsUseful } from '@/components/what-is-useful'

import cn from '../../inner_page.module.scss'

export const metadata = {
	title: 'Мойка днища авто 🚘 — профессиональная чистка в Ижевске!',
	description:
		'Профессиональная мойка днища автомобиля 🚗 в Ижевске! Используем эффективные методы и оборудование, чтобы ваш автомобиль был чистым и безопасным!'
}

export default function Carcase() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={
					<>
						Мойка днища авто <br /> профессиональная <br /> чистка в Ижевске!
					</>
				}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[{ name: 'Мойка днища', price: 500, description: '' }]}
					/>
				</div>
				<div className={cn.section}>
					<WhatIsUseful />
				</div>
				<div className={cn.section}>
					<Discounts />
				</div>
				<div className={cn.section}>
					<CorporateClients />
				</div>
				<div className={cn.section}>
					<Slider title='Фото-галерея' />
				</div>
				<div className={cn.section}>
					<Faq />
				</div>
			</div>
			<FooterQr />
		</div>
	)
}
