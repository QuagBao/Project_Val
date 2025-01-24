import EmblaCarousel from './shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { fetchAgents } from '../lib/data'

const OPTIONS: EmblaOptionsType = { loop: true }

export default async function page() {
	const agents = await fetchAgents()

	return (
		<div className="h-full w-screen flex flex-col justify-center items-center gap-5">
			<EmblaCarousel slides={agents} options={OPTIONS} />
		</div>
	)
}
