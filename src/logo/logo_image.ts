import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
export const [
	logo_image$_,
	logo_image_,
	logo_image__set,
	logo_image__memo,
	logo_image__memo_,
] = be_atom_memo_tuple5_('logo_image', ()=>
	atom_<LogoImage>())
export interface LogoImage {
	enable:boolean
	svg:boolean
	width:number
	height:number
}