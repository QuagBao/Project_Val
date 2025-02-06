'use client'

import { Cancel, Submit } from '@/app/_components/Buttons'
import Img from '@/app/_components/Img'
import { State, updateAgent } from '@/app/lib/actions'
import { AgentDetail, Role } from '@/app/lib/definition'
import { usePathname } from 'next/navigation'
import { useActionState } from 'react'

export default function EditForm({
	agentDetail,
	roles,
}: {
	agentDetail: AgentDetail
	roles: Role[]
}) {
	const pathName = usePathname()
	const initialValues: State = { message: null, errors: {} }
	const updateAgentById = updateAgent.bind(null, agentDetail.id)
	const [state, formAction] = useActionState(updateAgentById, initialValues)

	return (
		<form action={formAction}>
			{/* Thêm phần hiển thị lỗi */}
			{state.message && (
				<p className="text-red-500 text-center mb-4">{state.message}</p>
			)}
			<div
				className="rounded-md text-custom 
				grid grid-cols-[2fr_1fr_0.5fr] gap-x-14 items-center
			"
			>
				<div className="grid grid-cols-2 gap-5 text-right justify-items-end items-center">
					<input type="hidden" name="pathName" value={pathName} />
					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Agent:
					</label>
					<input
						id="agentName"
						name="agentName"
						defaultValue={agentDetail.name}
						className="rounded-md h-10 max-w-full w-[500px] min-w-full p-2 read-only:bg-gray-400 outline-none focus:ring-slate-400 focus:ring-2"
						readOnly
					/>
					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Class:
					</label>
					<select
						id="roleId"
						name="roleId"
						className="max-w-full w-[500px] min-w-full 
						rounded-md p-2 cursor-pointer text-sm placeholder:text-gray-500 outline-none focus:ring-slate-400 focus:ring-2"
						defaultValue={agentDetail.role_id}
					>
						<option value="" disabled>
							Select a class
						</option>
						{roles.map((role) => (
							<option key={role.id} value={role.id}>
								{role.role_name}
							</option>
						))}
					</select>
					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Overview:
					</label>
					<textarea
						id="overview"
						name="overview"
						defaultValue={agentDetail.overview}
						className="max-w-full w-[500px] min-w-full 
						rounded-md p-2 min-h-[200px] resize-none outline-none focus:ring-slate-400 focus:ring-2"
					/>
					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Description:
					</label>
					<textarea
						id="description"
						name="description"
						defaultValue={agentDetail.description}
						className="max-w-full w-[500px] min-w-full 
						rounded-md p-2 min-h-[200px] resize-none outline-none focus:ring-slate-400 focus:ring-2"
					/>
				</div>
				<Img src={agentDetail.agent_url} alt={agentDetail.name} />
				<input
					type="hidden"
					id="fileInput"
					name="fileInput"
					value={agentDetail.agent_url}
				/>
			</div>
			<div className="grid grid-cols-2 justify-items-center gap-3 mt-10">
				<Cancel id={agentDetail.id} />
				<button type="submit">
					<Submit />
				</button>
			</div>
		</form>
	)
}
