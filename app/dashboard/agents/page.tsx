import EmblaCarousel from '../shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { fetchAgents } from '@/app/lib/data'

const OPTIONS: EmblaOptionsType = { loop: true }
export default async function page() {
	const agents = await fetchAgents()
	console.log('Agents: ', agents)

	return (
		<div className="flex flex-col items-center">
			<EmblaCarousel slides={agents} options={OPTIONS} />
		</div>
	)
}
