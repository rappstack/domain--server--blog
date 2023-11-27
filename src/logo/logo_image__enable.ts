import { nullish__none_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'ctx-core/all'
import { logo_image_ } from './logo_image.js'
export const [
	logo_image__enable$_,
	logo_image__enable_,
] = be_memo_pair_(ctx=>
		nullish__none_([logo_image_(ctx)], logo_image=>
			logo_image!.enable),
	{ id: 'logo_image__enable' })
