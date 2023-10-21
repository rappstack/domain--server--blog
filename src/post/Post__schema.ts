import { type Post } from '@btakita/domain--all--blog'
import { z, type ZodType } from 'zod'
export const Post__schema = z.object({
	author: z.string(),
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
	og_image: z.string().optional(),
	tags: z.array(z.string()).default(["others"]),
	draft: z.boolean().optional(),
	canonical_url: z.string().optional(),
} as {
	[k in keyof Post['data']]:ZodType<Post['data'][k]>
})
