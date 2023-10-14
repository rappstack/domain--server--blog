import { type Post } from '@btakita/domain--all--blog/src/post'
import { str_a__slug_a__new } from '@btakita/domain--all--blog/src/slug'
export function tag__posts__new(posts:Post[], tag:string) {
	return posts.filter(post=>str_a__slug_a__new(post.data.tags).includes(tag))
}
