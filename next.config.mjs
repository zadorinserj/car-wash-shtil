import {PHASE_PRODUCTION_BUILD} from 'next/constants.js'

/** После билда поменять в global.css путь до файла со шрифтами */
export default (phase) => {
    const production = phase === PHASE_PRODUCTION_BUILD

    /** @type {import('next').NextConfig} */
    const nextConfig = {
        images: {
            unoptimized: true
        },
        distDir: 'dist'
    }

    if (production) {
        // nextConfig.output = 'export';
        nextConfig.trailingSlash = true;
        // nextConfig.assetPrefix = 'https://cy79364.tw1.ru/';
        // nextConfig.assetPrefix = 'https://moishtil18.ru/';
    }

    return nextConfig
}
