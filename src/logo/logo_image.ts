import { be_sig_triple_ } from 'relementjs'
export const [
	logo_image$_,
	logo_image_,
	logo_image__set,
] = be_sig_triple_<LogoImage|undefined>(()=>
		undefined,
	{ id: 'logo_image' })
export interface LogoImage {
	enable:boolean
	svg:boolean
	width:number
	height:number
}
