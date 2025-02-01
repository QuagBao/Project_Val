'use server'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

console.log('Test env:', process.env.TEST_ENV)

const FormSchema = z.object({
	roleId: z.string({ invalid_type_error: 'Please select a role' }),
	overview: z.string().min(1, { message: 'Overview cannot be empty.' }),
	description: z.string().min(1, { message: 'Description cannot be empty.' }),
})
export type State = {
	errors?: {
		roleId?: string[]
		overview?: string[]
		description?: string[]
	}
	message?: string | null
}

export async function updateAgent(
	id: string,
	prevState: State,
	formData: FormData
) {
	const validatedFields = FormSchema.safeParse({
		roleId: formData.get('roleId'),
		overview: formData.get('overview'),
		description: formData.get('description'),
	})
	if (!validatedFields.success) {
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
