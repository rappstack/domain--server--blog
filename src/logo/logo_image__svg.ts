import { nullish__check_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'rmemo'
import { logo_image_ } from './logo_image.js'
export const [
	logo_image__svg$_,
	logo_image__svg_,
] = be_memo_pair_(ctx=>
		nullish__check_([logo_image_(ctx)], logo_image=>
			logo_image!.svg),
	{ id: 'logo_image__svg' })
