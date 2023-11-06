import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { nullish__none_ } from '@ctx-core/function'
import { logo_image_ } from './logo_image'
export const [
	logo_image__enable$_,
	logo_image__enable_,
] = val__be_derive_pair__new('logo_image__enable', ctx=>
	nullish__none_([logo_image_(ctx)], logo_image=>
		logo_image!.enable)
)
