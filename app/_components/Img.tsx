/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface imgProps {
	src: string
	alt: string
}

function Image({ src, alt }: imgProps) {
	return (
		<div className="bg-slate-600 rounded-xl drop-shadow-custom">
			<img
				className="w-full border-2 border-gray-300 rounded-xl p-2 h-[500px] 
				object-contain
				drop-shadow-custom"
				src={src}
				alt={alt}
			/>
		</div>
	)
}

export default Image
