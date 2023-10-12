import { z } from 'zod'
import type { ZodType } from 'zod/lib/types'
import { type Post } from './Post.ts'
export const Post__schema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date({
		errorMap: ({ code }, { defaultError })=>{
			if (code == 'invalid_date') return { message: 'Wrong date format.' }
			return { message: defaultError }
		}
	}),
	updated_date: z.coerce.date().optional(),
	hero_image: z.string().optional(),
} as {
	[k in keyof Post]:ZodType<Post[k]>
})
