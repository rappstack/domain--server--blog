import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
export const [
	site$_,
	site_,
	site__set,
	site__memo,
] = be_atom_memo_tuple5_('site', ()=>
	atom_<Site>())
export type Site = {
	website:string
	author:string
	description:string
	title:string
	og_image?:string
	light_and_dark_mode:boolean
	post_per_page:number
}
