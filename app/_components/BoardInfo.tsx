import { Back, DeleteAgent, EditAgent } from './Buttons'
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
		<div>
			<section className="grid grid-cols-[700px_350px] mt-20 px-14 gap-x-5">
				<div>
					<Back id={data.id} />
				</div>
				<div className="flex justify-around">
					<EditAgent id={data.id} />
					<DeleteAgent id={data.id} />
				</div>
			</section>
			<section className="grid grid-cols-[700px_350px] p-14 gap-x-5 gap-y-10">
				<div className="details flex flex-col gap-3">
					<p className="text-4xl font-extrabold text-slate-100 uppercase mb-4">
						{data.name}
					</p>
					<section className="role flex items-end gap-5">
						<p className="text-2xl font-bold text-slate-100 uppercase">
							Class:
						</p>
						<p className="text-lg font-normal text-slate-100 uppercase">
							{data.role_name}
						</p>
					</section>
					{/* <Img src={data.role_url} alt={data.role_name} /> */}
					<p className="text-2xl font-bold text-slate-100 uppercase">
						Overview
					</p>
					<p className="text-lg font-normal text-slate-100 p-4 whitespace-pre-line">
						{data.overview}
					</p>
					<p className="text-2xl font-bold text-slate-100 uppercase">
						Description
					</p>
					<p className="text-lg font-normal text-slate-100 p-4">
						{data.description}
					</p>
				</div>
				<Img src={data.agent_url} alt={data.name} />
			</section>
		</div>
	)
}
