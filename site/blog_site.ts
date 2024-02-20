import { site__set, type site_T } from '@rappstack/domain--server/site'
import { id_be_sig_triple_, memo_ } from 'relementjs'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	,
	blog_site_,
	blog_site__set
] = id_be_sig_triple_(
	'blog_site',
	()=><blog_site_T|undefined>undefined
).add((ctx, blog_site$)=>
	memo_(()=>site__set(ctx, blog_site$())))
export const [
	,
	site__page__post_count_,
] = id_be_memo_pair_(
	'site__page__post_count',
	()=><number|undefined>undefined)
export const [
	,
	site__home__post_count_,
] = id_be_memo_pair_(
	'site__home__post_count',
	()=><number|undefined>undefined)
export type blog_site_T = site_T&{
	page__post_count:number
	home__post_count:number
}
