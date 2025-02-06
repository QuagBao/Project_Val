import { db, VercelPoolClient } from '@vercel/postgres'

async function listAgents(client: VercelPoolClient) {
	const data = await client.sql`SELECT * FROM agents;`
	return data.rows
}

export async function GET() {
	try {
		const client = await db.connect()
		const type_of_guns = await listAgents(client)
		return new Response(JSON.stringify(type_of_guns), { status: 200 })
	} catch (error) {
		console.error('Error fetching agents:', error)
		return new Response('Error fetching agents', { status: 500 })
	}
}
