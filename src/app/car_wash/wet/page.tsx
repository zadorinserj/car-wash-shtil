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

import cn from '../../inner_page.module.css'

export const metadata = {
	title: 'Влажная мойка авто 🚘 — быстро, чисто, безопасно!',
	description:
		'Влажная мойка автомобиля — это профессиональная очистка кузова и салона. Гарантируем высокое качество услуг и отличный результат!'
}

export default function Carcase() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={<>Влажная уборка</>}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{
								name: 'Влажная уборка',
								price: 420,
								description:
									'Влажная уборка салона, очистка стекол и пластиковых поверхностей'
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
