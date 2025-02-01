/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface imgProps {
	src: string
	alt: string
}

function Image({ src, alt }: imgProps) {
	return (
		<div className=" rounded-xl drop-shadow-custom">
			<img
				className="w-full bg-slate-600 border-2 border-gray-300 rounded-xl p-2 h-[600px] 
				object-contain
				drop-shadow-custom"
				src={src}
				alt={alt}
			/>
		</div>
	)
}

export default Image
