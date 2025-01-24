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
	title: 'Комплексная мойка авто в Ижевске — цены и услуги!',
	description:
		'Ищете комплексную мойку автомобиля в Ижевске? Мы предлагаем широкий спектр услуг по доступным ценам! Узнайте, что входит в комплексную мойку и сколько это стоит!'
}

export default function Carcase() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={<>Детейлинг мойка</>}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{
								name: 'Детейлинг мойка',
								price: 1600,
								description:
									'Мойка с нанесением быстрого кварцевого состава (2-х фазная мойка  кузова с применением кисточки, для промывки труднодоступных мест, продуем и высушим бесконтакной турбосушкой, чернение резины и наружного пластика'
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
