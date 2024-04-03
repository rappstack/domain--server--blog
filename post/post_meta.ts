import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { type author_T, site__author_a1_ } from '@rappstack/domain--server/site'
import type { request_ctx_T } from 'rebuildjs/server'
export function post_meta__validate(
	ctx:request_ctx_T,
	dehydrated_post_meta:in_dehydrated_post_meta_T,
):dehydrated_post_meta_T {
	const {
		pub_date,
		updated_date,
	} = dehydrated_post_meta
	if (isNaN(new Date(pub_date) as never)) {
		throw Error('invalid pub_date ' + pub_date)
	}
	if (
		updated_date
		&& isNaN(new Date(updated_date) as never)
	) {
		throw Error('invalid updated_date ' + updated_date)
	}
	return {
		author_a1: site__author_a1_(ctx)!,
		...dehydrated_post_meta,
		tag_a1: dehydrated_post_meta.tag_a1 ?? ['other']
	}
}
export type in_dehydrated_post_meta_T = {
	author_a1?:[author_T, ...author_T[]]
	pub_date:string
	title:string
	subtitle?:string
	slug:string
	description:string
	updated_date?:string
	hero_image?:string
	og_image?:string
	tag_a1?:string[]
	featured?:boolean
	draft?:boolean
	canonical_url?:string
}
