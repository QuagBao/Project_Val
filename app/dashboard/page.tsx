export default async function page() {
	return (
		<div className="h-full w-screen flex flex-col items-center gap-5 rounded-sm">
			<video
				autoPlay
				loop
				playsInline
				className="object-contain rounded-md drop-shadow-custom aspect-video max-h-[550px]"
				src="/vid/Dashboard1.mp4"
			></video>
		</div>
	)
}
