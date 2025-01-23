import EmblaCarousel from '../shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

function page() {
	const OPTIONS: EmblaOptionsType = { loop: true }
	const SLIDE_COUNT = 4
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

	return (
		<div className="flex flex-col items-center">
			<EmblaCarousel slides={SLIDES} options={OPTIONS} />
		</div>
	)
}

export default page
