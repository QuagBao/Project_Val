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
import { Create } from '@/app/_components/Buttons'
import { usePathname } from 'next/navigation'

type listObject = {
	id: number
	name: string
	agent_url: string
}

type propType = {
	slides: listObject[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<propType> = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 3500 }),
	])

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	const pathName = usePathname()

	console.log('Img Url: ' + slides[0].agent_url)
	return (
		<div className="embla w-screen flex flex-col items-center gap-5 ">
			<div
				className="embla__viewport min-w-screen max-w-6xl overflow-hidden"
				ref={emblaRef}
			>
				<div className="embla__container flex ">
					{slides.map((agent) => (
						<div
							key={agent.id}
							className="embla__slide transform translate-x-0 translate-y-0 translate-z-0 min-w-[500px]"
						>
							<div className="embla__slide__number rounded-md text-2xl font-semibold flex items-center justify-center select-none">
								<Card
									id={agent.id}
									name={agent.name}
									img_Url={agent.agent_url}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			{pathName !== '/dashboard/roles' && <Create />}

			<div className="embla__controls mb-7">
				<div className="embla__buttons grid grid-cols-2 gap-2 items-center">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel
