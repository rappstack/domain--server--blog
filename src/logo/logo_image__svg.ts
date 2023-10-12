import { nullish__check_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { logo_image_ } from './logo_image.ts'
export const [
	logo_image__svg$_,
	logo_image__svg_,
	logo_image__svg__memo,
	logo_image__svg__memo_,
] = val__be_computed_memo_tuple4_('logo_image__svg', ctx=>
	nullish__check_([logo_image_(ctx)], logo_image=>
		logo_image.svg))
