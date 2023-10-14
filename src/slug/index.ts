import { type Post } from '@btakita/domain--all--blog'
import { slug } from 'github-slugger'
export const str__slug_ = (str:string)=>slug(str)
export const post__slug_ = (post:Post|Post['data'])=>
	post.data
		? post.slug
			? slug(post.slug)
			: slug(post.data.title)
		: post.slug
			? slug(post.slug)
			: slug(post.title)
export const str_a__slug_a_ = (str_a:string[])=>str_a.map(str=>str__slug_(str))
