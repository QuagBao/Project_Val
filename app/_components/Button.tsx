import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ButtonProps {
	id: string | number
	name: string
}

function Button({ id, name }: ButtonProps) {
	const pathName = usePathname()
	const getLinkPath = () => {
		if (pathName === '/dashboard') return `/dashboard/agents/view/${id}`
		if (pathName === '/dashboard/guns') return `/dashboard/guns/view/${id}`
		if (pathName === '/dashboard/roles') return `/dashboard/roles/view/${id}`
		return '/'
	}
	return (
		<Link
			href={getLinkPath()}
			className="px-8 py-3 min-w-[120px] hover:border-double hover:border-4  hover:border-slate-100 
			rounded-sm text-md text-custom text-center font-semibold cursor-pointer"
		>
			<h6 className="text-slate-300">{name}</h6>
		</Link>
	)
}

export default Button
