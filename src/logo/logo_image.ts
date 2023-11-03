import { val__be_state_triple_ } from '@btakita/domain--all--blog'
export const [
	logo_image$_,
	logo_image_,
	logo_image__set,
] = val__be_state_triple_<LogoImage|undefined>('logo_image', ()=>
	undefined)
export interface LogoImage {
	enable:boolean
	svg:boolean
	width:number
	height:number
}
