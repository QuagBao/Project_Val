'use client'
import { useParams } from 'next/navigation'

export default function AgentDetail() {
	const params = useParams()
	const { id } = params

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl text-white">Agent Details</h1>
			<p className="text-2xl mt-5 text-gray-300">Agent ID: {id}</p>
		</div>
	)
}
