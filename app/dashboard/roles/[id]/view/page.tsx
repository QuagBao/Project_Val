import { Back, Edit } from '@/app/_components/Buttons'
import Img from '@/app/_components/Img'
import { fetchAgentsByRole, fetchDetailRoleById } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page(props: { params: Promise<{ id: number }> }) {
	const param = await props.params
	const id = param.id
	const [role, agentRoles] = await Promise.all([
		fetchDetailRoleById(id),
		fetchAgentsByRole(id),
	])
	if (!role) {
		return <p className="text-slate-500">Roles {id} not found</p>
	}
	console.log('data: ', role)
	console.log('data agents by role: ', agentRoles)

	return (
		<div className="flex flex-col items-center">
			<section
				className="grid grid-cols-[0.2fr_1fr_320px_0.2fr] grid-rows-[auto_1fr]
				justify-items-center gap-x-10 p-5 gap-y-5
				ms-auto
				"
			>
				<div className="top-button w-full flex justify-around gap-x-5 p-5 col-span-4">
					<Back id={role.id} />
					<Edit id={role.id} />
				</div>
				<div></div>
				{/* Information by text */}
				<div className="flex flex-col gap-5 justify-self-start">
					{/* Class */}
					<div className="flex items-end gap-5">
						<p className="text-4xl font-bold text-slate-100 uppercase">
							Class:
						</p>
						<p className="text-2xl font-semibold text-slate-100 uppercase">
							{role.role_name}
						</p>
					</div>
					{/* Description */}
					<p className="text-2xl font-bold text-slate-100 uppercase">
						Description:
					</p>
					<p className="text-lg font-normal text-slate-100 p-4 whitespace-pre-line">
						{role.description}
					</p>
					{/* Agents */}
					<p className="text-2xl font-bold text-slate-100 uppercase">Agents:</p>
					<div className="flex items-center gap-5 flex-wrap p-2">
						{agentRoles?.map((agent) => (
							<Link
								key={agent.id}
								href={`/dashboard/agents/${agent.id}/view`}
								className="flex flex-col items-center hover:scale-110 filter grayscale-[80%] hover:filter-none cursor-pointer"
							>
								<Image
									className="object-cover object-top bg-slate-500 w-[100px] h-[100px] rounded-full"
									src={agent.agent_url}
									alt={agent.name ? agent.name : ''}
									width={0}
									height={0}
									sizes="100vw"
								/>
								<p className="text-md font-thin text-slate-100 uppercase">
									{agent.name}
								</p>
							</Link>
						))}
					</div>
				</div>
				{/* In4 by Img */}
				<div>
					<Img src={role.role_url} alt={role.role_name} />
				</div>
			</section>
		</div>
	)
}
