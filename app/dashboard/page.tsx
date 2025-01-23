import EmblaCarousel from './shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function page() {
	return (
		<div className="h-full w-full flex flex-col items-center gap-5">
			<EmblaCarousel slides={SLIDES} options={OPTIONS} />
		</div>
	)
}

export default page
