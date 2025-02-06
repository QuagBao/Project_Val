import { fetchRoles } from '@/app/lib/data'
import CreateForm from './CreateForm'
export default async function page() {
	const roles = await fetchRoles()

	return (
		<section>
			<CreateForm roles={roles} />
		</section>
	)
}
