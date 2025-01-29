import Img from './Img'

interface dataBoardInfo {
	id: string
	agent_url: string
	name: string
	role_url: string
	role_name: string
	overview: string
	description: string
}

export default function BoardInfo({ data }: { data: dataBoardInfo }) {
	return (
		<div className="grid grid-cols-[2fr_1fr] p-14">
			<div className="details flex flex-col gap-3">
				<p className="text-3xl font-extrabold text-slate-100 uppercase">
					{data.name}
				</p>
				<p className="text-3xl font-extrabold text-slate-100 uppercase">
					{data.role_name}
				</p>
				{/* <Img src={data.role_url} alt={data.role_name} /> */}
				<p className="text-3xl font-semibold text-slate-100 uppercase">
					Overview
				</p>
				<p className="text-xl font-normal text-slate-100 p-5 ">
					{data.overview}
				</p>
				<p className="text-3xl font-semibold text-slate-100 uppercase">
					Description
				</p>
				<p className="text-xl font-normal text-slate-100 p-5 ">
					{data.description}
				</p>
			</div>
			<Img src={data.agent_url} alt={data.name} />
		</div>
	)
}
