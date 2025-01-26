'use client'
import Search from '@/app/_components/Search'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const links = [
	{ name: 'Home', href: '/dashboard', id: 0 },
	{ name: 'Agents', href: '/dashboard/agents', id: 1 },
	{ name: 'Roles', href: '/dashboard/roles', id: 2 },
	{ name: 'Guns', href: '/dashboard/guns', id: 3 },
]

export default function NavLinks() {
	const pathName = usePathname()
	console.log('Path Name: ' + pathName)
	return (
		<nav
			className="h-full w-screen max-w-screen 
		bg-[#657899] flex justify-around items-center ms-auto"
		>
			<div className="w-1/5"></div>
			<div className="flex gap-5 justify-center items-center">
				{links.map((button) => (
					<Link
						key={button.name}
						href={button.href}
						className={clsx(
							'px-8 py-3 hover:bg-sky-500 rounded-sm text-md text-center text-slate-50 font-semibold cursor-pointer',
							{
								'bg-sky-200': pathName === button.href,
							}
						)}
					>
						<p
							className={clsx('', {
								'text-custom': pathName === button.href,
							})}
						>
							{button.name}
						</p>
					</Link>
				))}
			</div>
			<div className="w-1/5"></div>
			<Search />
			<div className="w-1/5"></div>
		</nav>
	)
}
