export default function DashBoardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<div>
				<div>Layout Dashboard</div>
				<div>{children}</div>
			</div>
		</div>
	)
}
