'use client'
import Search from '@/app/_components/Search'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const links = [
	{ name: 'Home', href: '/dashboard', id: 0 },
	{ name: 'Roles', href: '/dashboard/roles', id: 1 },
	{ name: 'Guns', href: '/dashboard/guns', id: 2 },
]

export default function NavLinks() {
	const pathName = usePathname()
	console.log('Path Name: ' + pathName)
	return (
		<div
			className="h-full w-screen max-w-screen 
		bg-[#657899] flex justify-around items-center px-5 "
		>
			<div className="flex gap-14 justify-center items-center">
				{links.map((button) => (
					<Link
						key={button.name}
						href={button.href}
						className={clsx(
							'px-8 py-3 min-w-[120px] hover:border-double hover:border-4 hover:border-slate-100 rounded-sm text-md text-center text-slate-50 font-semibold cursor-pointer',
							{
								'bg-sky-200': pathName === button.href,
							}
						)}
					>
						<p
							className={clsx('hidden md:block', {
								'text-custom': pathName === button.href,
							})}
						>
							{button.name}
						</p>
					</Link>
				))}
			</div>
			<Search />
		</div>
	)
}
