import { Metadata } from 'next'
import { ReactNode } from 'react'
import 'slick-carousel/slick/slick.css'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Modals } from '@/components/modals'

import cn from './layout.module.css'
import './normalize.css'
import '@/app/globals.css'

// const hovesExpanded = localFont({
// 	src: [
// 		{
// 			path: 'fonts/hovesProExpandedDemiBold.ttf',
// 			weight: '600'
// 		},
// 		{
// 			path: 'fonts/hovesProExpandedMedium.ttf',
// 			weight: '500'
// 		}
// 	],
// 	variable: '--font-hoves-expanded'
// })
// const hoves = localFont({
// 	src: 'fonts/hovesProMedium.ttf',
// 	variable: '--font-hoves',
// 	weight: '500'
// })

export const metadata: Metadata = {
	title: 'Автомойка „Штиль“ — чистота вашего авто в Ижевске! ✨',
	description:
		'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<Modals>
				<body className={cn.body}>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</Modals>
		</html>
	)
}
