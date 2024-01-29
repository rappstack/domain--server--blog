import { nullish__none_ } from 'ctx-core/function'
import { id_be_memo_pair_ } from 'rmemo'
import { site_ } from './site.js'
export const [
	site__light_and_dark_mode$_,
	site__light_and_dark_mode_,
] = id_be_memo_pair_(
	'site__light_and_dark_mode',
	ctx=>
		nullish__none_([site_(ctx)],
			site=>
				site!.light_and_dark_mode))
