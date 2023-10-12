import { z } from 'zod'
import { ZodType } from 'zod/lib/types'
export const Post__schema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pub_date: z.coerce.date(),
	updated_date: z.coerce.date().optional(),
	hero_image: z.string().optional(),
} as {
	[k in keyof Post]: ZodType<Post[k]>
})
