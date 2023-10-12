import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { site_ } from './site.ts'
export const [
	site__title$_,
	site__title_,
	site__title__memo,
	site__title__memo_,
] = val__be_computed_memo_tuple4_('site__title', ctx=>
	nullish__none_([site_(ctx)], site=>
		site.title))