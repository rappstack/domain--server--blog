import { nullish__check_ } from '@ctx-core/function'
import { be_memo_pair_ } from 'ctx-core/all'
import { logo_image_ } from './logo_image.js'
export const [
	logo_image__width$_,
	logo_image__width_,
] = be_memo_pair_(ctx=>
		nullish__check_([logo_image_(ctx)], logo_image=>
			logo_image!.width),
	{ id: 'logo_image__width' })
