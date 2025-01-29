import { db } from '@vercel/postgres'
import { agents, roles, typeOfGuns, guns } from '../lib/placeholder-data'

const client = await db.connect()

async function seedRoles() {
	await client.sql`DROP TABLE IF EXISTS roles CASCADE;`
	await client.sql`
        CREATE TABLE IF NOT EXISTS roles (
            id SERIAL PRIMARY KEY,
            role_name VARCHAR(255) NOT NULL,
            role_url VARCHAR(255) NOT NULL
        );
    `

	const insertedRoles = await Promise.all(
		roles.map(async (role) => {
			return client.sql`
                INSERT INTO roles (id, role_name, role_url)
                VALUES (${role.id}, ${role.role_name}, ${role.role_url})
                ON CONFLICT (id) DO NOTHING;
            `
		})
	)

	return insertedRoles
}

async function seedAgents() {
	await client.sql`DROP TABLE IF EXISTS agents CASCADE;`
	await client.sql`
        CREATE TABLE IF NOT EXISTS agents (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            role_id INT NOT NULL,
            agent_url VARCHAR(255) NOT NULL,
            overview TEXT,
            description TEXT
        );
    `

	const insertedAgents = await Promise.all(
		agents.map(async (agent) => {
			return client.sql`
                INSERT INTO agents (id, name, role_id, agent_url, overview, description)
                VALUES (${agent.id}, ${agent.name}, ${agent.role_id}, ${agent.agent_url}, ${agent.overview}, ${agent.description})
                ON CONFLICT (id) DO NOTHING;
            `
		})
	)

	return insertedAgents
}

async function seedTypeOfGuns() {
	await client.sql`DROP TABLE IF EXISTS type_of_guns CASCADE;`
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
            gun_url VARCHAR(255) NOT NULL
        );
    `

	const insertedGuns = await Promise.all(
		guns.map(async (gun) => {
			return client.sql`
                INSERT INTO guns (id, type_of_gun_id, name, gun_url)
                VALUES (${gun.id}, ${gun.type_of_gun_id}, ${gun.name}, ${gun.gun_url})
                ON CONFLICT (id) DO NOTHING;
            `
		})
	)
	return insertedGuns
}

export async function GET() {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
		await client.sql`BEGIN;`

		await seedRoles()
		await seedAgents()
		await seedTypeOfGuns()
		await seedGuns()

		await client.sql`COMMIT;`

		console.log('✅ Database seeded successfully')
		return new Response('✅ Database seeded successfully', { status: 200 })
	} catch (error) {
		await client.sql`ROLLBACK;`
		console.error('❌ Error seeding database:', error)
		return new Response(`❌ Error seeding database: ${error}`, {
			status: 500,
		})
	}
}
