import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import 'slick-carousel/slick/slick.css'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Metrika } from '@/components/metrika'
import { Modals } from '@/components/modals'

import cn from './layout.module.scss'
import '@/app/globals.css'

export const metadata: Metadata = {
	title: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
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

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html>
			<GoogleTagManager gtmId='GTM-KWZ8W5JL' />
			<link
				rel='icon'
				href='/favicon.ico'
				sizes='any'
			/>
			<body className={cn.body}>
				<Modals>
					<Header />
					<main>{children}</main>
					<Footer />
				</Modals>
			</body>
			<Suspense fallback={null}>
				<Metrika />
			</Suspense>
		</html>
	)
}
