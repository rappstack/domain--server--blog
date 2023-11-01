import { be_derive_pair_, van_ } from '@btakita/domain--all--blog'
import { nullish__none_ } from '@ctx-core/function'
import { v_logo_image_ } from './v_logo_image'
export const [
	v_logo_image__svg$_,
	v_logo_image__svg_,
] = be_derive_pair_('v_logo_image__svg', ctx=>
	van_(ctx).derive(()=>
		nullish__none_([v_logo_image_(ctx)], v_logo_image=>
			v_logo_image!.svg)))
