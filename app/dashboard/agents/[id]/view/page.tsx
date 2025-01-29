import BoardInfo from '@/app/_components/BoardInfo'
import { fetchDetailAgentByID } from '@/app/lib/data'

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id
	const data = await fetchDetailAgentByID(id)

	if (!data) {
		return <p className="text-slate-500">Agent {id} not found</p>
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<BoardInfo data={data} />
		</div>
	)
}
