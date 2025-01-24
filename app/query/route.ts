import { db } from '@vercel/postgres'

const client = await db.connect()

async function listAgents() {
	const data = await client.sql`SELECT * FROM agents;`
	return data.rows
}

export async function GET() {
	try {
		const agents = await listAgents()
		return new Response(JSON.stringify(agents), { status: 200 })
	} catch (error) {
		console.error('Error fetching agents:', error)
		return new Response('Error fetching agents', { status: 500 })
	}
}
