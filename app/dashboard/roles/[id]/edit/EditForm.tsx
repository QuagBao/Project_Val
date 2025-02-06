'use client'

import { Cancel, Submit } from '@/app/_components/Buttons'
import Img from '@/app/_components/Img'
import { STATE_ROLE, updateRole } from '@/app/lib/actions'
import { Role } from '@/app/lib/definition'
import { usePathname } from 'next/navigation'
import { useActionState } from 'react'

export default function EditForm({ role }: { role: Role }) {
	const pathName = usePathname()
	const initialValues: STATE_ROLE = { message: null, errors: {} }
	const updateRoleById = updateRole.bind(null, role.id)
	const [state, formAction] = useActionState(updateRoleById, initialValues)

	return (
		<form action={formAction}>
			{/* Thêm phần hiển thị lỗi */}
			{state.message && (
				<p className="text-red-500 text-center mb-4">{state.message}</p>
			)}
			<div
				className="rounded-md text-custom 
				grid grid-cols-[2fr_1fr_0.5fr] gap-x-14 
			"
			>
				<div className="grid grid-cols-2 grid-rows-[auto_2fr_1fr] gap-5 text-right justify-items-end">
					<input type="hidden" name="pathName" value={pathName} />
					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Class:
					</label>
					<input
						id="roleName"
						name="roleName"
						defaultValue={role.role_name}
						className="rounded-md h-10 max-w-full w-[500px] min-w-full p-2 read-only:bg-gray-400 outline-none focus:ring-slate-400 focus:ring-2"
						readOnly
					/>

					<label className="text-xl font-semibold text-slate-100 " htmlFor="">
						Description:
					</label>
					<textarea
						id="description"
						name="description"
						defaultValue={role.description}
						className="max-w-full w-[500px] min-w-full 
						rounded-md p-2 min-h-[200px] resize-none outline-none focus:ring-slate-400 focus:ring-2"
					/>
				</div>
				<Img src={role.role_url} alt={role.role_name} />
				<input
					type="hidden"
					id="fileInput"
					name="fileInput"
					value={role.role_url}
				/>
			</div>
			<div className="grid grid-cols-2 justify-items-center gap-3 mt-5 mb-5">
				<Cancel id={role.id} />
				<button type="submit">
					<Submit />
				</button>
			</div>
		</form>
	)
}
