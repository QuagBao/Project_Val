import { fetchDetailAgentByID, fetchRoles } from '@/app/lib/data'
import EditForm from './EditForm'

export default async function Page(props: { params: Promise<{ id: number }> }) {
	const param = await props.params
	const id = param.id
	const [agentDetail, roles] = await Promise.all([
		fetchDetailAgentByID(id),
		fetchRoles(),
	])

	console.log('Test env in page edit:', process.env.TEST_ENV)

	if (!agentDetail) {
		return <p className="text-slate-500">Agent {id} not found</p>
	}

	return (
		<section className="flex flex-col items-center justify-center h-screen">
			<EditForm agentDetail={agentDetail} roles={roles} />
		</section>
	)
}
