import { type Post, str__slug__new } from '@btakita/domain--all--blog'
export function unique__tags__new(posts:Post[]) {
	const filteredPosts = posts.filter(({ data })=>!data.draft)
	const tags:string[] = filteredPosts
		.flatMap(post=>post.data.tags)
		.map(tag=>str__slug__new(tag))
		.filter(
			(value:string, index:number, self:string[])=>
				self.indexOf(value) === index
		)
		.sort((tagA:string, tagB:string)=>tagA.localeCompare(tagB))
	return tags
}
