'use client'

import sliderArrowRightHoverIcon from '@public/icons/slider-arrow-right-hover-icon.svg'
import sliderArrowRightIcon from '@public/icons/slider-arrow-right-icon.svg'
import gallery1Image from '@public/images/gallery-1.png'
import gallery2Image from '@public/images/gallery-2.png'
import gallery3Image from '@public/images/gallery-3.png'
import gallery4Image from '@public/images/gallery-4.png'
import gallery5Image from '@public/images/gallery-5.png'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import SlickSlider from 'react-slick'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

import cn from './index.module.css'

export const Slider = ({ title }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const [sliderRef, setSliderRef] = useState(null)

	return (
		<div>
			<div className={cn.header}>
				<Typography
					tag='h2'
					font='expanded'
				>
					{title}
				</Typography>
				<div className={cn.arrows}>
					<Button
						type='main'
						className={cn.leftButton}
						icon={sliderArrowRightIcon}
						hoverIcon={sliderArrowRightHoverIcon}
						animationDirection='left'
						onClick={() => sliderRef?.slickGoTo?.(slideIndex - 1)}
					/>
					<Button
						type='main'
						icon={sliderArrowRightIcon}
						hoverIcon={sliderArrowRightHoverIcon}
						animationDirection='left'
						onClick={() => sliderRef?.slickGoTo?.(slideIndex + 1)}
					/>
				</div>
			</div>
			<SlickSlider
				ref={setSliderRef}
				dots={false}
				infinite={true}
				lazyLoad={false}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				variableWidth={true}
				adaptiveHeight={true}
				prevArrow={null}
				nextArrow={null}
				className={clsx(cn.slider, sliderRef === null && cn.hide)}
				beforeChange={(current, next) => setSlideIndex(next)}
			>
				<div className={cn.slide}>
					<Image
						src={gallery1Image}
						alt='Image 1'
					/>
				</div>
				<div className={cn.slide}>
					<Image
						src={gallery2Image}
						alt='Image 2'
					/>
				</div>
				<div className={cn.slide}>
					<Image
						src={gallery3Image}
						alt='Image 3'
					/>
				</div>
				<div className={cn.slide}>
					<Image
						src={gallery4Image}
						alt='Image 4'
					/>
				</div>
				<div className={cn.slide}>
					<Image
						src={gallery5Image}
						alt='Image 5'
					/>
				</div>
			</SlickSlider>
		</div>
	)
}
