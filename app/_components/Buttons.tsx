interface ButtonProps {
	id: string | number
	name: string
}

function Button({ name }: ButtonProps) {
	return (
		<div
			className="px-8 py-3 min-w-[120px] hover:border-double hover:border-4  hover:border-slate-100 
			rounded-sm text-md text-custom text-center font-semibold cursor-pointer
			
			"
		>
			<h6 className="text-slate-300">{name}</h6>
		</div>
	)
}

export default Button
