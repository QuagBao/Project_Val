'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Back({ id }: { id: number }) {
	const pathName = usePathname()
	const getPathLink = () => {
		if (pathName === `/dashboard/agents/${id}/view`) return '/dashboard/agents'
		if (pathName === `/dashboard/guns/${id}/view`) return '/dashboard/guns'
		if (pathName === `/dashboard/roles/${id}/view`) return '/dashboard/roles'
		return '/'
	}

	return (
		<Link
			href={getPathLink()}
			className="w-[120px] flex items-center justify-center gap-2 text-slate-100 hover:text-custom hover:bg-slate-200 rounded-md border p-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5 8.25 12l7.5-7.5"
				/>
			</svg>
			<span>Back</span>
		</Link>
	)
}

export function Edit({ id }: { id: number }) {
	const pathName = usePathname()
	const getPathLink = () => {
		if (pathName === `/dashboard/agents/${id}/view`)
			return `/dashboard/agents/${id}/edit`
		if (pathName === `/dashboard/guns/${id}/view`)
			return `/dashboard/guns/${id}/edit`
		if (pathName === `/dashboard/roles/${id}/view`)
			return `/dashboard/roles/${id}/edit`
		return '/'
	}
	return (
		<Link
			href={getPathLink()}
			className="w-[120px] flex items-center justify-center gap-2 text-slate-100 hover:bg-sky-500 hover:text-custom rounded-md border p-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
				/>
			</svg>

			<span>Edit</span>
		</Link>
	)
}

export function DeleteAgent({ id }: { id: number }) {
	const deleteAgentById = id
	console.log('Agent Deleted: ', deleteAgentById)
	return (
		<form
			className="w-[120px] flex items-center justify-center gap-2 text-slate-100 hover:bg-orange-400 hover:text-custom rounded-md border p-2"
			// action={deleteAgentById}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
				/>
			</svg>

			<span>Delete</span>
		</form>
	)
}

export function Cancel({ id }: { id: number }) {
	const pathName = usePathname()
	const getPathLink = () => {
		if (id != 0) {
			switch (pathName) {
				case `/dashboard/agents/${id}/edit`:
					return `/dashboard/agents/${id}/view`
				case `/dashboard/guns/${id}/edit`:
					return `/dashboard/guns/${id}/view`
				case `/dashboard/roles/${id}/edit`:
					return `/dashboard/roles/${id}/view`
				default:
					return '/'
			}
		} else {
			switch (pathName) {
				case `/dashboard/agents/create`:
					return `/dashboard/agents`
				case `/dashboard/guns/create`:
					return `/dashboard/guns`
				case `/dashboard/roles/create`:
					return `/dashboard/roles`
				default:
					return '/'
			}
		}
	}

	return (
		<Link
			href={getPathLink()}
			className="w-[120px] flex items-center justify-center gap-2 text-slate-100 hover:bg-red-300 hover:text-custom rounded-md border p-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18 18 6M6 6l12 12"
				/>
			</svg>
			<span>Cancel</span>
		</Link>
	)
}

export function Submit() {
	return (
		<div className="w-[120px] flex items-center cursor-pointer justify-center gap-2 text-slate-100 hover:bg-emerald-500 hover:text-custom rounded-md border p-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m4.5 12.75 6 6 9-13.5"
				/>
			</svg>
			<span>Submit</span>
		</div>
	)
}

export function Create() {
	const pathName = usePathname()

	const getPathLink = () => {
		console.log('PathName: ', pathName)
		if (pathName === '/dashboard/agents') return '/dashboard/agents/create'
		if (pathName === '/dashboard/guns') return '/dashboard/guns/create'
		if (pathName === '/dashboard/roles') return '/dashboard/roles/create'
		return '/'
	}
	return (
		<Link
			href={getPathLink()}
			className="w-[120px] flex items-center cursor-pointer justify-center gap-2 text-slate-100 hover:bg-slate-500 rounded-md border p-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
			<span>Create</span>
		</Link>
	)
}
