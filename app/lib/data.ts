import { sql } from '@vercel/postgres'
import { Agent, Role, Gun, AgentDetail } from './definition'

export async function fetchAgents(): Promise<Agent[]> {
	const result = await sql<Agent>`SELECT * FROM agents ORDER BY id ASC;`
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
	id: number
): Promise<AgentDetail | null> {
	try {
		const data = await sql<AgentDetail>`
			SELECT agents.*, roles.role_name, roles.role_url
			FROM agents
			JOIN roles ON agents.role_id = roles.id
			WHERE agents.id = ${id};
		`
		return data.rows[0] ?? null
	} catch (error) {
		console.error('Error fetching agent:', error)
		throw new Error('Failed to fetch agent details')
	}
}

export async function fetchDetailRoleById(id: number): Promise<Role | null> {
	try {
		const data = await sql<Role>`
			SELECT roles.*
			FROM roles
			WHERE roles.id = ${id};
		`
		return data.rows[0] ?? null
	} catch (error) {
		console.error('Error fetching agent:', error)
		throw new Error('Failed to fetch agent details')
	}
}

export async function fetchAgentsByRole(id: number): Promise<Agent[] | null> {
	try {
		const data = await sql<Agent>`
			SELECT roles.*, agents.role_id, agents.agent_url, agents.id, agents.name
			FROM roles
			JOIN agents ON roles.id = agents.role_id
			WHERE roles.id = ${id}
			ORDER BY agents.id ASC;
		`
		return data.rows ?? null
	} catch (error) {
		console.error('Error fetching agent:', error)
		throw new Error('Failed to fetch agent details')
	}
}
