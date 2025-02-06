'use client'
import { Cancel, Submit } from '@/app/_components/Buttons'
import { createAgent, State } from '@/app/lib/actions'
import { Role } from '@/app/lib/definition'
import { usePathname } from 'next/navigation'
import React, { useActionState, useRef, useState } from 'react'

export default function CreateForm({ roles }: { roles: Role[] }) {
	const [selectedImg, setSelectedImg] = useState<string | null>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [fileName, setFileName] = useState<string | null>(null)
	const [message, setMessage] = useState<string | null>(null)
	const pathName = usePathname()

	// useActionState
	const initialValues: State = { message: null, errors: {} }
	const [state, formAction] = useActionState(createAgent, initialValues)

	// Function to click on div => open file import
	const handleDivClick = () => {
		fileInputRef.current?.click() //Open choose file
	}
	// Function Change Image
	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target?.files?.[0]
		if (file) {
			const imgUrl = URL.createObjectURL(file)
			setSelectedImg(imgUrl)
			setFileName(file.name)
		}
	}
	//Function slove drag&drog
	const handleDrog = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const files = event.dataTransfer.files
		// Prevent select more than 1 files
		if (files && files.length > 1) {
			setSelectedImg(null)
			setFileName(null)
			setMessage('❌ More than 1 file selected. Please select only 1 file')
			return
		}

		const file = files?.[0]
		if (file) {
			setSelectedImg(URL.createObjectURL(file))
			setFileName(file.name)
			setMessage(null)
		}
	}
	// Function prevent the default event drag&drog
	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}
	// Remove File
	const handleRemoveFile = () => {
		setFileName(null)
		setSelectedImg(null)
		fileInputRef.current!.value = '' //Reset Input File
	}

	return (
		<form action={formAction}>
			{/* Thêm phần hiển thị lỗi */}
			{state.message && (
				<p className="text-slate-50 text-center mb-4">{state.message}</p>
			)}
			<div
				className="grid grid-cols-[2fr_1fr_0.5fr] gap-x-14 justify-center text-center
				text-slate-100"
			>
				<input type="hidden" name="pathName" value={pathName} />
				{/* Form Input */}
				<div className="grid grid-cols-2 text-right gap-x-10 gap-y-5 items-center">
					<label className="text-xl font-bold " htmlFor="agentName">
						Agent:
					</label>
					<input
						id="agentName"
						name="agentName"
						className="max-w-full w-[500px] min-w-full rounded-md text-custom p-2  focus:ring-slate-400 outline-none"
						type="text"
					/>
					<label className="text-xl font-bold " htmlFor="roleId">
						Class:
					</label>
					<select
						id="roleId"
						name="roleId"
						className="max-w-full w-[500px] min-w-full text-custom 
						rounded-md p-2 cursor-pointer focus:ring-2
						 focus:ring-slate-400 outline-none text-sm outline-2 placeholder:text-gray-500"
						defaultValue=""
					>
						<option className="bg-slate-200" value="">
							Select a class
						</option>
						{roles.map((role) => (
							<option key={role.id} value={role.id}>
								{role.role_name}
							</option>
						))}
					</select>
					<label className="text-xl font-bold " htmlFor="overview">
						Overview:
					</label>
					<textarea
						id="overview"
						name="overview"
						className="rounded-md max-w-full w-[500px] min-w-full h-[180px] resize-none
						text-custom p-2 focus:ring-2 focus:ring-slate-400 outline-none"
					/>
					<label className="text-xl font-bold " htmlFor="description">
						Description:
					</label>
					<textarea
						id="description"
						name="description"
						className="rounded-md max-w-full w-[500px] min-w-full h-[180px] resize-none
						text-custom p-2 focus:ring-2 focus:ring-slate-400 outline-none"
					/>
				</div>

				{/* Form Image */}
				<div className="flex flex-col gap-5 justify-start items-center">
					<div
						className="flex flex-col justify-center items-center gap-2 border-2 rounded-md border-dashed p-2
						 cursor-pointer w-full min-h-[200px]
						"
						onClick={handleDivClick}
						onDragOver={handleDragOver}
						onDrop={handleDrog}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-10"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
							/>
						</svg>

						<p className="text-lg font-normal">
							Drag and drog or{' '}
							<label className="text-blue-700">choose a file</label>
						</p>
						<input
							ref={fileInputRef}
							hidden
							id="fileInput"
							name="fileInput"
							onChange={handleImageChange}
							type="file"
						/>
					</div>
					{/* Message */}
					{message && (
						<div className="w-full bg-slate-50 p-1 rounded">
							<p className="text-wrap text-orange-800">{message}</p>
						</div>
					)}
					{selectedImg && (
						<div className="w-full flex justify-between gap-2 p-2 rounded-md bg-slate-50 text-green-500">
							<div className="flex gap-2">
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
										d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
									/>
								</svg>
								<p>{fileName}</p>
							</div>
							<button
								onClick={handleRemoveFile}
								className="hover:opacity-50 hover:bg-slate-400 hover:text-cyan-50 rounded-md"
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
							</button>
						</div>
					)}
				</div>
				{/* )} */}
			</div>
			<div className="grid grid-cols-2 justify-items-center gap-3 mt-5 mb-3">
				<Cancel id={0} />
				<button type="submit" onClick={() => console.log('Button Clicked')}>
					<Submit />
				</button>
			</div>
		</form>
	)
}
