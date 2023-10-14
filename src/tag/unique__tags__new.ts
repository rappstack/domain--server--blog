import { str__slug__new } from '@btakita/domain--all--blog'
import type { CollectionEntry } from 'astro:content'
export const unique__tags__new = (posts:CollectionEntry<'posts'>[])=>{
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
