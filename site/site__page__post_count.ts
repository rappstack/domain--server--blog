import { nullish__none_ } from 'ctx-core/function'
import { id_be_memo_pair_ } from 'rmemo'
import { site_ } from './site.js'
export const [
	site__page__post_count$_,
	site__page__post_count_,
] = id_be_memo_pair_(
	'site__page__post_count',
	ctx=>
		nullish__none_([site_(ctx)],
			site=>
				site!.page__post_count))
