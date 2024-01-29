import { id_be_sig_triple_ } from 'relementjs'
export const [
	logo_image$_,
	logo_image_,
	logo_image__set,
] = id_be_sig_triple_<LogoImage|undefined>(
	'logo_image',
	()=>undefined)
export interface LogoImage {
	enable:boolean
	svg:boolean
	src:string
	width:number
	height:number
}
