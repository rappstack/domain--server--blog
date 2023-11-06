import { nullish__none_ } from '@ctx-core/function'
import { val__be_derive_pair__new } from '@ctx-core/vanjs'
import { site_ } from './site.ts'
export const [
	site__title$_,
	site__title_,
] = val__be_derive_pair__new('site__title', ctx=>
	nullish__none_([site_(ctx)], site=>
		site!.title))
