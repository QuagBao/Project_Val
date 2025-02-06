import Image from 'next/image'

interface imgProps {
	src: string
	alt: string
}

function Img({ src, alt }: imgProps) {
	return (
		<div
			className="max-w-[600px] w-[320px] h-[495px] bg-slate-700 drop-shadow-custom
			rounded-md flex justify-center items-center"
		>
			<Image
				className="  rounded-md p-2
				w-[320px] h-full aspect-video object-contain
				drop-shadow-custom"
				src={src}
				width={0}
				height={0}
				sizes="100vw"
				alt={alt}
			/>
		</div>
	)
}

export default Img
