import { val__be_derive_pair_ } from '@btakita/domain--all--blog'
import { nullish__check_ } from '@ctx-core/function'
import { logo_image_ } from './logo_image.ts'
export const [
	logo_image__width$_,
	logo_image__width_,
] = val__be_derive_pair_('logo_image__width', ctx=>
	nullish__check_([logo_image_(ctx)], logo_image=>
		logo_image!.width))
