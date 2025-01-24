import { db } from '@vercel/postgres'
import { agents, roles } from '../lib/placeholder-data'

const client = await db.connect()

async function seedRoles() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

	await client.sql`
    CREATE TABLE IF NOT EXISTS roles (
      id SERIAL PRIMARY KEY,
      role_name VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `

	const insertedRoles = await Promise.all(
		roles.map(async (role) => {
			return client.sql`
        INSERT INTO roles (id, role_name, image_url)
        VALUES (${role.id}, ${role.role_name}, ${role.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
		})
	)

	return insertedRoles
}

async function seedAgents() {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

	await client.sql`
    CREATE TABLE IF NOT EXISTS agents (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `

	const insertedAgents = await Promise.all(
		agents.map(async (agent) => {
			return client.sql`
        INSERT INTO agents (id, name, image_url)
        VALUES (${agent.id}, ${agent.name}, ${agent.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
		})
	)

	return insertedAgents
}

export async function GET() {
	try {
		await client.sql`BEGIN`

		await seedRoles()
		await seedAgents()

		await client.sql`COMMIT`

		return new Response('Database seeded successfully', { status: 200 })
	} catch (error) {
		await client.sql`ROLLBACK`
		console.error('Error seeding database:', error)
		return new Response('Error seeding database', { status: 500 })
	}
}
