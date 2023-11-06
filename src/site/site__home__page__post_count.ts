import { nullish__none_ } from '@ctx-core/function'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { site_ } from './site.ts'
export const [
	site__home__page__post_count$_,
	site__home__page__post_count_,
] = val__be_derive_pair__new('site__home__page__post_count', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.home__page__post_count))
