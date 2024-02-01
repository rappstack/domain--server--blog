import { nullish__none_ } from 'ctx-core/function'
import { id_be_sig_triple_ } from 'relementjs'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	site$_,
	site_,
	site__set,
] = id_be_sig_triple_<site_T|null>(
	'site',
	()=>null)
export const [
	site__website$_,
	site__website_,
] = id_be_memo_pair_(
	'site__website',
	ctx=>site_(ctx)?.website)
export const [
	site__website__url$_,
	site__website__url_,
] = id_be_memo_pair_(
	'site__website__url',
	ctx=>
		nullish__none_([site__website_(ctx)],
			site__website=>new URL(site__website)))
export const [
	site__author$_,
	site__author_,
] = id_be_memo_pair_(
	'site__author',
	ctx=>site_(ctx)?.author)
export const [
	site__title$_,
	site__title_,
] = id_be_memo_pair_(
	'site__title',
	ctx=>site_(ctx)?.title)
export const [
	site__description$_,
	site__description_,
] = id_be_memo_pair_(
	'site__description',
	ctx=>site_(ctx)?.description)
export const [
	site__og_image$_,
	site__og_image_,
] = id_be_memo_pair_(
	'site__og_image',
	ctx=>site_(ctx)?.og_image)
export const [
	site__light_and_dark_mode$_,
	site__light_and_dark_mode_,
] = id_be_memo_pair_(
	'site__light_and_dark_mode',
	ctx=>site_(ctx)?.light_and_dark_mode)
export const [
	site__page__post_count$_,
	site__page__post_count_,
] = id_be_memo_pair_(
	'site__page__post_count',
	ctx=>site_(ctx)?.page__post_count)
export const [
	site__home__post_count$_,
	site__home__post_count_,
] = id_be_memo_pair_(
	'site__home__post_count',
	ctx=>site_(ctx)?.home__post_count)
export type site_T = {
	website:string
	author:string
	description:string
	title:string
	og_image?:string
	light_and_dark_mode:boolean
	page__post_count:number
	home__post_count:number
}
