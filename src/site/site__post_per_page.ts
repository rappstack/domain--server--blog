import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { site_ } from './site.ts'
export const [
	site__post_per_page$_,
	site__post_per_page_,
	site__post_per_page__memo,
	site__post_per_page__memo_,
] = val__be_computed_memo_tuple4_('site__post_per_page', ctx=>
	nullish__none_([site_(ctx)], site=>
		site.post_per_page))