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
	title: 'Керамическая защита кузова авто — отзывы владельцев и цены',
	description:
		'Керамическая защита кузова автомобиля. Отзывы владельцев, цены и многое другое'
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
						Керамическая <br /> защита кузова
					</>
				}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{
								name: 'Керамическая защита',
								price: 1000,
								description: 'Керамо-покрытие GYEON (кузов и стекла)'
							}
						]}
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
