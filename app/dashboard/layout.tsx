import NavLinks from './_components/NavLinks'

export default function DashBoardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div
			className="grid grid-rows-[80px_auto] gap-10
			overflow-x-hidden overflow-y-auto 
			w-screen h-screen max-h-screen bg-red-500"
		>
			<header className="w-screen">
				<NavLinks />
			</header>
			<main className="flex flex-col gap-2 items-center justify-center">
				<div>{children}</div>
			</main>
		</div>
	)
}
