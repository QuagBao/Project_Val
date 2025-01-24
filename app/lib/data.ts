import { sql } from '@vercel/postgres'

export async function fetchAgents() {
	const result = await sql`SELECT * FROM agents;`
	return result.rows
}
