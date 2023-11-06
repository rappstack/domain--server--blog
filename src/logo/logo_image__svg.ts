import { nullish__check_ } from '@ctx-core/function'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { logo_image_ } from './logo_image'
export const [
	logo_image__svg$_,
	logo_image__svg_,
] = val__be_derive_pair__new('logo_image__svg', ctx=>
	nullish__check_([logo_image_(ctx)], logo_image=>
		logo_image!.svg))
