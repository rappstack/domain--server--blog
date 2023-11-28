import { be_memo_pair_ } from 'rmemo'
import { nullish__none_ } from 'ctx-core/function'
import { site_ } from './site.js'
export const [
	site__title$_,
	site__title_,
] = be_memo_pair_(ctx=>
		nullish__none_([site_(ctx)], site=>
			site!.title),
	{ id: 'site__title' })
