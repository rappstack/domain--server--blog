import { be_state_triple_, van_ } from '@btakita/domain--all--blog'
import { type LogoImage } from './logo_image'
export const [
	v_logo_image$_,
	v_logo_image_,
	v_logo_image__set,
] = be_state_triple_('v_logo_image', ctx=>
	van_(ctx).state<LogoImage|undefined>(undefined))
