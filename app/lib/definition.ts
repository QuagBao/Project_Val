export type Gun = {
	id: string
	name: string
	description: string
	image_url: string
	cost: number
}

export type Role = {
	id: string
	role_name: string
	description: string
	image_url: string
}

export type Agent = {
	id: string
	role_id: string
	gun_ids: string
	name: string
	description: string
	image_url: string
}
