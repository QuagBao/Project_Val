'use server'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
	agentName: z.string({ invalid_type_error: 'Name of agent cannot be empty' }),
	roleId: z.string({ invalid_type_error: 'Please select a role' }),
	overview: z.string().min(1, { message: 'Overview cannot be empty.' }),
	description: z.string().min(1, { message: 'Description cannot be empty.' }),
	img_url: z.string().min(1, { message: 'Image cannot be empty.' }),
})
export type State = {
	errors?: {
		roleId?: string[]
		overview?: string[]
		description?: string[]
		img_url?: string[]
	}
	message?: string | null
}

export type STATE_ROLE = {
	errors?: {
		roleName?: string[]
		description?: string[]
		img_url?: string[]
	}
	message?: string | null
}

// function update agent
export async function updateAgent(
	id: number,
	prevState: State,
	formData: FormData
) {
	const validatedFields = FormSchema.safeParse({
		agentName: formData.get('agentName')?.toString() || '',
		roleId: formData.get('roleId')?.toString() || '',
		overview: formData.get('overview')?.toString() || '',
		description: formData.get('description')?.toString() || '',
		img_url: formData.get('fileInput')?.toString() || '',
	})
	if (!validatedFields.success) {
		console.log(
			'Validation Errors:',
			validatedFields.error.flatten().fieldErrors
		)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Update Agent.',
		}
	}
	const { roleId, overview, description } = validatedFields.data

	try {
		await sql`
            UPDATE agents 
            SET role_id = ${roleId}, overview = ${overview}, description = ${description}
            WHERE id = ${id}
        `
	} catch (error) {
		console.error('Error updating agent:', error)
		return {
			message: 'Failed to update agent',
		}
	}
	console.log('Đã cập nhật thành công')
	revalidatePath(`/dashboard/agents/${id}/view`)
	redirect(`/dashboard/agents/${id}/view`)
}
// Function create new agent
export async function createAgent(prevState: State, formData: FormData) {
	const pathName = formData.get('pathName') as string
	const fileName = formData.get('fileInput') as File

	// Set img_url based on the path
	const img_url =
		pathName === '/dashboard/agents/create' && fileName
			? `/img/agents/${fileName.name}`
			: fileName?.name
	console.log('Path Name get in createAgent: ', pathName)
	console.log('Final img_url: ', img_url)

	const validatedFields = FormSchema.safeParse({
		agentName: formData.get('agentName')?.toString() || '',
		roleId: formData.get('roleId')?.toString() || '',
		overview: formData.get('overview')?.toString() || '',
		description: formData.get('description')?.toString() || '',
		img_url,
	})
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: '❌ Missing Fields. Failed to Create Agent.',
		}
	}

	const { agentName, roleId, overview, description } = validatedFields.data

	try {
		await sql`
			INSERT INTO agents (name, role_id, agent_url, overview, description)
			VALUES (${agentName}, ${roleId}, ${img_url}, ${overview}, ${description})
		`
		console.log('✅ Agent created successfully!') // Trả về thông báo thành công
	} catch (error) {
		console.error('❌ Error creating agent:', (error as Error).message)
		return {
			message: `❌ Failed to create agent. Error: ${(error as Error).message}`,
		}
	}
	revalidatePath('/dashboard/agents')
	redirect('/dashboard/agents')
}

const FormSchema_Role = z.object({
	roleName: z.string({ invalid_type_error: 'Name of role cannot be empty' }),
	description: z.string().min(1, { message: 'Description cannot be empty.' }),
	img_url: z.string().min(1, { message: 'Image cannot be empty.' }),
})
// function update role
export async function updateRole(
	id: number,
	prevState: STATE_ROLE,
	formData: FormData
) {
	const validatedFields = FormSchema_Role.safeParse({
		roleName: formData.get('roleName'),
		description: formData.get('description'),
		img_url: formData.get('fileInput'),
	})

	if (!validatedFields.success) {
		console.log(
			'Validation Errors Roles: ',
			validatedFields.error.flatten().fieldErrors
		)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Update Role.',
		}
	}
	const { roleName, description } = validatedFields.data

	try {
		await sql`
			UPDATE roles
			SET role_name = ${roleName}, description = ${description}
			WHERE id = ${id}
		`
	} catch (error) {
		console.error('Error updating role:', error)
		return {
			message: 'Failed to update role',
		}
	}
	console.log('Đã cập nhật role thành công')
	revalidatePath(`/dashboard/roles/${id}/view`)
	redirect(`/dashboard/roles/${id}/view`)
}
