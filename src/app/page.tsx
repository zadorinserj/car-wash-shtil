import mainPageBgMobileImage from '@public/images/main-page-bg-mobile-image.webp'
import mainPageBgImage from '@public/images/main-page-bg.webp'

import { Advantages } from '@/components/advantages'
import { Contacts } from '@/components/contacts'
import { CorporateClients } from '@/components/corporate-clients'
import { Discounts } from '@/components/discounts'
import { FooterQr } from '@/components/footer-qr'
import { MainBlock } from '@/components/main-block'
import { Services } from '@/components/services'

import cn from './page.module.css'

export const metadata = {
	title: 'Комплексная мойка и детейлинг авто в Ижевске',
	description:
		'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄',
	openGraph: {
		title: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
		description:
			'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄',
		url: 'https://moishtil18.ru',
		siteName: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
		images: [
			{
				url: 'https://moishtil18.ru/opengraph-image-1.webp',
				width: 1200,
				height: 630
			}
		]
	}
}

// TODO Добавить картинки в Advantages
export default function Home() {
	return (
		<div className={cn.page}>
			<MainBlock
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={
					<>
						Комплексная <br /> мойка и детейлинг <br /> авто в Ижевске
					</>
				}
			/>
			<div className='container'>
				<Services />
			</div>
			<div className='container'>
				<Discounts />
			</div>
			<div className='container'>
				<Advantages />
			</div>
			<div className='container'>
				<CorporateClients />
			</div>
			<div className='container'>
				<Contacts />
			</div>
			<FooterQr />
		</div>
	)
}
