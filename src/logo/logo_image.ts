import { val__be_state_triple__new } from '@ctx-core/vanjs'
export const [
	logo_image$_,
	logo_image_,
	logo_image__set,
] = val__be_state_triple__new<LogoImage|undefined>('logo_image', ()=>
	undefined)
export interface LogoImage {
	enable:boolean
	svg:boolean
	width:number
	height:number
}
