import Button from '../../_components/Button'
import Image from 'next/image'

type cardProps = {
	id: string
	name: string
	img_Url: string
}

function Card({ id, name, img_Url }: cardProps) {
	return (
		<div
			className="card bg-slate-700 
		min-w-[400px] max-w-[600px] h-[600px] 
		rounded-md flex flex-col justify-between gap-5 items-center"
		>
			<div className="p-2 relative">
				<div className="relative top-24 right-2/3">
					<h1
						className="text-3xl font-extrabold text-slate-100 uppercase
				absolute top-10 tracking-wide w-full rotate-90 right-2
				[--tw-text-stroke:2px_black] [text-shadow:_1px_4px_6px_rgba(19,53,123,0.8)] "
					>
						{name}
					</h1>
				</div>
				<Image
					className="w-[280px] h-[450px] aspect-square object-contain	 rounded-md drop-shadow-custom"
					src={img_Url}
					width={300}
					height={500}
					alt=""
				/>
			</div>
			<Button name="Details" id={id} />
			<div></div>
		</div>
	)
}

export default Card
