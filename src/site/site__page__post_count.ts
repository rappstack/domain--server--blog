import { nullish__none_ } from 'ctx-core/function'
import { be_memo_pair_ } from 'rmemo'
import { site_ } from './site.js'
export const [
	site__page__post_count$_,
	site__page__post_count_,
] = be_memo_pair_(ctx=>
		nullish__none_([site_(ctx)], site=>
			site!.page__post_count),
	{ id: 'site__page__post_count' })
