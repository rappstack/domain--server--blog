import { dehydrated_post_meta_a1_, type dehydrated_post_meta_T, str_a__slug_a__new } from '@btakita/domain--any--blog'
import { nullish__none_, tup } from 'ctx-core/function'
import { id_be_memo_pair_ } from 'rmemo'
import { tag_ } from './tag.js'
export const [
	tag__dehydrated_post_meta_a1$_,
	tag__dehydrated_post_meta_a1_,
] = id_be_memo_pair_(
	'tag__dehydrated_post_meta_a1',
	ctx=>
		nullish__none_(tup(
			dehydrated_post_meta_a1_(ctx),
			tag_(ctx)
		), (dehydrated_post_meta_a1, tag)=>
			tag__dehydrated_post_meta_a1__new(dehydrated_post_meta_a1, tag))
)
export function tag__dehydrated_post_meta_a1__new(
	dehydrated_post_meta_a1:dehydrated_post_meta_T[],
	tag:string
) {
	return dehydrated_post_meta_a1.filter(dehydrated_tag_meta=>
		str_a__slug_a__new(dehydrated_tag_meta.tag_a1)
			.includes(tag))
}
