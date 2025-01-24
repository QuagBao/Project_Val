'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import Card from '../_components/Card'

type listObject = {
	id: string
	name: string
	image_url: string
}

type propType = {
	slides: listObject[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<propType> = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 3000 }),
	])

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div className="embla max-w-6xl mx-auto">
			<div className="embla__viewport overflow-hidden" ref={emblaRef}>
				<div className="embla__container flex touch-pan-y touch-pinch-zoom -ml-4">
					{slides.map((agent) => (
						<div
							key={agent.id}
							className="embla__slide transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_50%] min-w-0 pl-4"
						>
							<div className="embla__slide__number rounded-md text-2xl font-semibold flex items-center justify-center h-76 select-none">
								<Card
									id={agent.id}
									name={agent.name}
									img_Url={agent.image_url}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls grid grid-cols-[auto_1fr_auto] justify-between gap-5 mt-7">
				<div className="embla__buttons grid grid-cols-2 gap-2 items-center">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel
