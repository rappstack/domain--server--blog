import { post_mod_a1_ } from '@rappstack/domain--any--blog/post'
import { nullish__none_, tup } from 'ctx-core/function'
import { type request_ctx_T } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
import { blog_post_slug_ } from './blog_post_slug.js'
export const [
	blog_post_mod$_,
	blog_post_mod_,
] = id_be_memo_pair_(
	'blog_post_mod',
	(ctx:request_ctx_T)=>
		nullish__none_(tup(
			post_mod_a1_(ctx),
			blog_post_slug_(ctx)
		), (
			post_mod,
			post_slug
		)=>post_mod.find(post_mod=>
			post_mod.meta_(ctx).slug === post_slug)))
export const [
	blog_post_mod__meta$_,
	blog_post_mod__meta_,
] = id_be_memo_pair_(
	'blog_post_mod__meta',
	(ctx:request_ctx_T)=>
		blog_post_mod_(ctx)?.meta_(ctx))
export const [
	blog_post__tag$_,
	blog_post__tag_,
] = id_be_memo_pair_(
	'blog_post__tag',
	(ctx:request_ctx_T)=>
		blog_post_mod_(ctx)?.default)
export function blog_post__render(ctx:request_ctx_T) {
	return (
		blog_post__tag_(ctx)
			? blog_post__tag_(ctx)!(ctx)
			: null
	)
}
export const [
	blog_post__canonical_url$_,
	blog_post__canonical_url_,
] = id_be_memo_pair_(
	'blog_post__canonical_url',
	(ctx:request_ctx_T)=>
		blog_post_mod__meta_(ctx)?.canonical_url)
export const [
	blog_post__hero_image$_,
	blog_post__hero_image_,
] = id_be_memo_pair_(
	'blog_post__hero_image',
	(ctx:request_ctx_T)=>
		blog_post_mod__meta_(ctx)?.hero_image)
export const [
	blog_post__pub_date$_,
	blog_post__pub_date_,
] = id_be_memo_pair_(
	'blog_post__pub_date',
	(ctx:request_ctx_T)=>
		blog_post_mod__meta_(ctx)?.pub_date)
export const [
	blog_post__tag_a1$_,
	blog_post__tag_a1_,
] = id_be_memo_pair_(
	'blog_post__tag_a1',
	(ctx:request_ctx_T)=>
		blog_post_mod__meta_(ctx)?.tag_a1)
export const [
	blog_post__title$_,
	blog_post__title_,
] = id_be_memo_pair_(
	'blog_post__title',
	(ctx:request_ctx_T)=>
		blog_post_mod__meta_(ctx)?.title)
