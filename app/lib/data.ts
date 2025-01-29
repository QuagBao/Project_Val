import { sql } from '@vercel/postgres'
import { Agent, Role, Gun, AgentDetail } from './definition'

export async function fetchAgents(): Promise<Agent[]> {
	const result = await sql<Agent>`SELECT * FROM agents;`
	return result.rows
}

export async function fetchRoles(): Promise<Role[]> {
	const result = await sql<Role>`SELECT * FROM roles;`
	return result.rows
}

export async function fetchGuns(): Promise<Gun[]> {
	const result = await sql<Gun>`SELECT * FROM guns;`
	return result.rows
}

export async function fetchDetailAgentByID(
	id: string
): Promise<AgentDetail | null> {
	try {
		const data = await sql<AgentDetail>`
			SELECT agents.*, roles.role_name, roles.role_url
			FROM agents
			JOIN roles ON agents.role_id = roles.id
			WHERE agents.id = ${Number(id)};
		`
		return data.rows[0] ?? null
	} catch (error) {
		console.error('Error fetching agent:', error)
		throw new Error('Failed to fetch agent details')
	}
}
