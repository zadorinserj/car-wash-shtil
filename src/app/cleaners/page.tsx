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

import cn from '../inner_page.module.scss'

export const metadata = {
	title: 'Автомойка в Ижевске — цены и акции!',
	description:
		'Ищете недорогую мойку автомобиля в Ижевске? Мы предлагаем широкий спектр услуг по доступным ценам. '
}

export default function Services() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={<>Химчистка</>}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{
								name: 'Салон',
								price: 7500,
								description: 'Полная химчистка салона'
							},
							{
								name: 'Пол/потолок',
								price: 3000,
								description: 'Ковровое покрытие пола или потолок со стойками'
							},
							{
								name: 'Сидения',
								price: 2000,
								description: 'Химчистка двух сидений'
							},
							{
								name: 'Локально',
								price: 1500,
								description: 'Локальная химчистка определенных мест'
							},
							{
								name: 'Багажник',
								price: 1500,
								description: 'Химчистка багажника'
							},
							{
								name: 'Двери',
								price: 800,
								description: 'Обработка четырех дверей'
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
