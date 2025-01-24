import EmblaCarousel from '../shared/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { fetchRoles } from '@/app/lib/data'

const OPTIONS: EmblaOptionsType = { loop: true }
export default async function page() {
	const rolesData = await fetchRoles()

	const formattedRoles = rolesData.map((role) => ({
		id: role.id,
		name: role.role_name,
		image_url: role.image_url,
	}))

	return (
		<div className="flex flex-col items-center">
			<EmblaCarousel slides={formattedRoles} options={OPTIONS} />
		</div>
	)
}
