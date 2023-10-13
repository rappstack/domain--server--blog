import { slug } from 'github-slugger'
import { type Post } from '../post'
export const str__slug_ = (str:string)=>slug(str)
export const post__slug_ = (post:Post)=>
	post.slug ? slug(post.slug) : slug(post.data.title)
export const str_a__slug_a_ = (str_a:string[])=>str_a.map(str=>str__slug_(str))
