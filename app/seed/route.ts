import { db } from '@vercel/postgres'
import { agents, roles, typeOfGuns, guns } from '../lib/placeholder-data'

const client = await db.connect()

async function seedRoles() {
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

async function seedTypeOfGuns() {
	await client.sql`
	CREATE TABLE IF NOT EXISTS type_of_guns (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL
	);
	`
	const insertedTypeOfGuns = await Promise.all(
		typeOfGuns.map(async (type) => {
			return client.sql`
		INSERT INTO type_of_guns (id, name)
		VALUES (${type.id}, ${type.name})
		ON CONFLICT (id) DO NOTHING;
	  `
		})
	)
	return insertedTypeOfGuns
}

async function seedGuns() {
	await client.sql`DROP TABLE IF EXISTS guns CASCADE;`
	await client.sql`
	CREATE TABLE IF NOT EXISTS guns (
		id SERIAL PRIMARY KEY,
		type_of_gun_id INT NOT NULL,
		name VARCHAR(255) NOT NULL,
		image_url VARCHAR(255) NOT NULL
	);
	`
	const insertedGuns = await Promise.all(
		guns.map(async (gun) => {
			return client.sql`
        INSERT INTO guns (id, type_of_gun_id, name, image_url)
        VALUES (${gun.id}, ${gun.type_of_gun_id}, ${gun.name}, ${gun.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
		})
	)
	return insertedGuns
}

export async function GET() {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
		await client.sql`BEGIN`

		await seedRoles()
		await seedAgents()
		await seedTypeOfGuns()
		await seedGuns()

		await client.sql`COMMIT`

		console.log('Database seeded successfully')
		return new Response('Database seeded successfully', { status: 200 })
	} catch (error) {
		await client.sql`ROLLBACK`
		console.error('Error seeding database:', error)
		return new Response('Error seeding database: ${error.message}', {
			status: 500,
		})
	}
}
