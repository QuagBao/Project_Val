export type typeOfGun = {
	id: string
	name: string
}

export type Gun = {
	id: string
	type_of_gun_id: string
	name: string
	description: string
	gun_url: string
	cost: number
}

export type Role = {
	id: string
	role_name: string
	description: string
	role_url: string
}

export type Agent = {
	id: string
	role_id: string
	gun_ids: string
	name: string
	overview: string
	description: string
	agent_url: string
}

export type AgentDetail = Agent & {
	role_name: string
	role_url: string
}
