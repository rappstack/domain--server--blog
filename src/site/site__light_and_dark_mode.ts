import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { site_ } from './site.ts'
export const [
	site__light_and_dark_mode$_,
	site__light_and_dark_mode_,
	site__light_and_dark_mode__memo,
	site__light_and_dark_mode__memo_,
] = val__be_computed_memo_tuple4_('site__light_and_dark_mode', ctx=>
	nullish__none_([site_(ctx)], site=>
		site.light_and_dark_mode))