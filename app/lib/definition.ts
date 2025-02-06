export type typeOfGun = {
	id: number
	name: string
}

export type Gun = {
	id: number
	type_of_gun_id: number
	name: string
	description: string
	gun_url: string
	cost: number
}

export type Role = {
	id: number
	role_name: string
	description: string
	role_url: string
}

export type Agent = {
	id: number
	role_id: number
	gun_ids: number
	name: string
	overview: string
	description: string
	agent_url: string
}

export type AgentDetail = Agent & {
	role_name: string
	role_url: string
}
