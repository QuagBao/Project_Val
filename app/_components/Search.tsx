import Link from 'next/link'

function Search() {
	return (
		<div className="w-full flex gap-1 bg-slate-100 p-2 rounded">
			<div className="border-r-2 border-slate-500 ">
				<Link href={'/'} className="text-slate-500">
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
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</Link>
			</div>

			<input
				className="w-full bg-transparent px-2
				border focus:border-slate-500 outline-none
				rounded text-slate-500"
				type="text"
				name=""
				id=""
			/>
		</div>
	)
}

export default Search
