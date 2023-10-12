import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { logo_image_ } from './logo_image.ts'
export const [
	logo_image__enable$_,
	logo_image__enable_,
	logo_image__enable__memo,
	logo_image__enable__memo_,
] = val__be_computed_memo_tuple4_('logo_image__enable', ctx=>
	nullish__none_([logo_image_(ctx)], logo_image=>
		logo_image.enable))