import { type Post } from '@btakita/domain--any--blog'
export function sorted__posts__new(posts:Post[]) {
	return (
		posts
			.filter(({ data })=>!data.draft)
			.sort(
				(a, b)=>
					Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
					Math.floor(new Date(a.data.pubDate).getTime() / 1000)))
}
