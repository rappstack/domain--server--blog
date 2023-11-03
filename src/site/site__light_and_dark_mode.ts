import { val__be_derive_pair_ } from '@btakita/domain--all--blog'
import { nullish__none_ } from '@ctx-core/function'
import { site_ } from './site.ts'
export const [
	site__light_and_dark_mode$_,
	site__light_and_dark_mode_,
] = val__be_derive_pair_('site__light_and_dark_mode', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.light_and_dark_mode))
