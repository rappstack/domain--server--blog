import { nullish__none_ } from '@ctx-core/function'
import { site_ } from './site.ts'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
export const [
	site__page__post_count$_,
	site__page__post_count_,
] = val__be_derive_pair__new('site__page__post_count', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.page__post_count))
