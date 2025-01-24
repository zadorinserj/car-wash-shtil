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
	title: 'Европейская автомобиля в Ижевске – быстро, чисто, выгодно!',
	description:
		'Европейская мойка в Ижевске по доступным ценам. Гарантия качества! '
}

export default function Carcase() {
	return (
		<div>
			<MainBlock
				className={cn.mainBlock}
				image={mainPageBgImage}
				mobileImage={mainPageBgMobileImage}
				title={<>Европейская мойка</>}
			/>
			<div className='container'>
				<div className={cn.section}>
					<ServiceCompound
						main={[
							{ name: 'Евро экспресс', price: 500, description: '' },
							{
								name: 'Евромойка',
								price: 600,
								description:
									'2-х фазная мойка кузова и дисков губкой с полирущющим шампунем, коврики и пороги, продуем и высушим спец. полотенцем'
							},
							{
								name: 'Еврокомплекс',
								price: 1390,
								description:
									'2-х фазная мойка кузова и дисков губкой с полирущющим шампунем, сухая уборка салона, влажная уборка, чистка педалей. Сушка кузова спец. полотенцем'
							},
							{
								name: 'Европейская нано-мойка',
								price: 1210,
								description:
									'3-х фазная мойка, с полирующим консервантом  бережная сушка турбосушкой'
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
