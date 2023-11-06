import { nullish__check_ } from '@ctx-core/function'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { logo_image_ } from './logo_image.ts'
export const [
	logo_image__height$_,
	logo_image__height_,
] = val__be_derive_pair__new('logo_image__height', ctx=>
	nullish__check_([logo_image_(ctx)], logo_image=>
		logo_image!.height))
