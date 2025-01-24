import { db } from '@vercel/postgres'

const client = await db.connect()

async function listAgents() {
	const data = await client.sql`SELECT * FROM guns;`
	return data.rows
}

export async function GET() {
	try {
		const type_of_guns = await listAgents()
		return new Response(JSON.stringify(type_of_guns), { status: 200 })
	} catch (error) {
		console.error('Error fetching agents:', error)
		return new Response('Error fetching agents', { status: 500 })
	}
}
