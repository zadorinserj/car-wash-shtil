'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

const COUNTER = 98897650

export const Metrika = () => {
	const pathName = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		// @ts-ignore
		ym(COUNTER, 'hit', window.location.href)
	}, [pathName, searchParams])

	return (
		<Script id='yandex-metrika'>
			{`
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		
				ym(${COUNTER}, "init", {
				  defer: true,
				  clickmap:true,
				  trackLinks:true,
				  accurateTrackBounce:true,
				  webvisor:true,
				  ecommerce:"dataLayer"
				});    
			`}
		</Script>
	)
}
