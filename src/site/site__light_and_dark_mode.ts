import { nullish__none_ } from '@ctx-core/function'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { site_ } from './site.ts'
export const [
	site__light_and_dark_mode$_,
	site__light_and_dark_mode_,
] = val__be_derive_pair__new('site__light_and_dark_mode', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.light_and_dark_mode))
