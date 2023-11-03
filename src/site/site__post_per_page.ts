import { val__be_derive_pair_ } from '@btakita/domain--all--blog'
import { nullish__none_ } from '@ctx-core/function'
import { site_ } from './site.ts'
export const [
	site__post_per_page$_,
	site__post_per_page_,
] = val__be_derive_pair_('site__post_per_page', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.post_per_page))
