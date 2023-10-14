import { type Post } from '@btakita/domain--all--blog/src/post'
export function sorted__posts__new(posts:Post[]) {
	return (
		posts
			.filter(({ data })=>!data.draft)
			.sort(
				(a, b)=>
					Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
					Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)))
}
