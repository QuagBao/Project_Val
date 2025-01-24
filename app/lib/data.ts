import { sql } from '@vercel/postgres'
import { Agent, Role } from './definition'

export async function fetchAgents(): Promise<Agent[]> {
	const result = await sql<Agent>`SELECT * FROM agents;`
	return result.rows
}

export async function fetchRoles(): Promise<Role[]> {
	const result = await sql<Role>`SELECT * FROM roles;`
	return result.rows
}
