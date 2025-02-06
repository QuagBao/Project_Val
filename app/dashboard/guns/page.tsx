import EmblaCarousel from '../shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { fetchGuns } from '@/app/lib/data'

const OPTIONS: EmblaOptionsType = { loop: true }
export default async function page() {
	const gunsData = await fetchGuns()

	const formattedGuns = gunsData.map((gun) => ({
		id: Number(gun.id),
		name: gun.name,
		agent_url: gun.gun_url,
	}))

	return (
		<div className="flex flex-col items-center">
			<EmblaCarousel slides={formattedGuns} options={OPTIONS} />
		</div>
	)
}
