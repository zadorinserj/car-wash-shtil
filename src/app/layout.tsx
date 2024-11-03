import { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import 'slick-carousel/slick/slick.css'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Modals } from '@/components/modals'

import cn from './layout.module.css'
import './normalize.css'
import '@/app/globals.css'

export const metadata: Metadata = {
	title: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
	description:
		'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄',
	openGraph: {
		title: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
		description:
			'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄',
		url: 'https://moishtil.ru',
		siteName: 'Автомойка "Штиль" — чистота вашего авто в Ижевске! ✨',
		images: [
			{
				url: '/',
				width: 800,
				height: 600
			}
		]
	}
}

export const viewport: Viewport = {
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	width: 'device-width'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
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
		</html>
	)
}
