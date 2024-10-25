import { Metadata } from 'next'
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
		'Профессиональная мойка машин в Ижевске. Бережно очищаем от загрязнений, сохраняем покрытие. Запишитесь онлайн или по телефону! 🚗🔄'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<Modals>
			<html lang='en'>
				<body className={cn.body}>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</Modals>
	)
}
