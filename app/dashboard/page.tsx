import EmblaCarousel from './shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { fetchAgents } from '../lib/data'

const OPTIONS: EmblaOptionsType = { loop: true }

export default async function page() {
	const agents = await fetchAgents()
	console.log('Agents: ' + JSON.stringify(agents))
	return (
		<div className="h-full w-full flex flex-col items-center gap-5">
			<EmblaCarousel slides={agents} options={OPTIONS} />
		</div>
	)
}
