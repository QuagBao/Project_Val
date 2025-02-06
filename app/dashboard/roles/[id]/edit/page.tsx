import { fetchDetailRoleById } from '@/app/lib/data'
import EditForm from './EditForm'

export default async function Page(props: { params: Promise<{ id: number }> }) {
	const param = await props.params
	const id = param.id
	const [role] = await Promise.all([fetchDetailRoleById(id)])

	console.log('Test env in page edit:', process.env.TEST_ENV)

	if (!role) {
		return <p className="text-slate-500">Role {id} not found</p>
	}

	return (
		<section className="flex flex-col ">
			<EditForm role={role} />
		</section>
	)
}
