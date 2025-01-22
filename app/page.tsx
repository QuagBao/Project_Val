import Link from 'next/link'

export default function Home() {
	return (
		<div className="min-h-screen font-[family-name:var(--font-geist-sans)] w-full h-screen relative">
			<main className="flex flex-col gap-2 items-center justify-center h-full w-full relative">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover"
					src="/vid/Home-screen.mp4"
				></video>
				<h6 className="relative z-10 animate-colorChange drop-shadow-2xl text-2xl text-center font-bold transition-colors duration-600">
					Welcome to the World of Valorant
				</h6>
				<Link
					href={'/dashboard'}
					className="relative z-10 p-5 border-2 bg-slate-50 border-white rounded-lg text-xl text-orange-400 text-center font-bold hover:bg-orange-100 hover:border-orange-100 cursor-pointer"
				>
					Discovery
				</Link>
			</main>
		</div>
	)
}
