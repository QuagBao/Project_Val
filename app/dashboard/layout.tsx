import NavLinks from './_components/NavLinks'

export default function DashBoardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div
			className="grid grid-row-[80px_1fr_100px] gap-10 justify-center 
			overflow-x-hidden overflow-y-auto 
			min-w-screen max-w-screen h-screen max-h-screen bg-red-500"
		>
			<header className="w-screen h-[80px]">
				<NavLinks />
			</header>
			<main>
				<div>{children}</div>
			</main>
		</div>
	)
}
