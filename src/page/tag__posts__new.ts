import { type Post, str_a__slug_a__new } from '@btakita/domain--all--blog'
export function tag__posts__new(posts:Post[], tag:string) {
	return posts.filter(post=>str_a__slug_a__new(post.data.tags).includes(tag))
}
