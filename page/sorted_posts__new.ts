import { type dehydrated_post_meta_T } from '@btakita/domain--any--blog'
export function sorted_posts__new(dehydrated_post_meta_a1:dehydrated_post_meta_T[]) {
	return (
		dehydrated_post_meta_a1
			.filter(({ draft })=>!draft)
			.sort(
				(a, b)=>
					Math.floor(new Date(b.pub_date).getTime() / 1000) -
					Math.floor(new Date(a.pub_date).getTime() / 1000)))
}
