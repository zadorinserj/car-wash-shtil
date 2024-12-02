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
	title: 'Сухая уборка салона автомобиля – быстро, чисто, выгодно!',
	description:
		'Ищете профессиональную уборку салона автомобиля по доступной цене? Мы предлагаем широкий спектр услуг: от обычной уборки до комплексной мойки салона. Гарантируем высокое качество и оперативность работы!'
}

export default function Carcase() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={<>Сухая уборка салона</>}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{
								name: 'Сухая уборка',
								price: 400,
								description: 'Уборка салона пылесосом, уборка пола и сидений'
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
