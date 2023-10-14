import { type Ctx } from '@ctx-core/object'
import { site__post_per_page_ } from '../site'
export function page_number_a__new(ctx:Ctx, numberOfPosts:number) {
	const numberOfPages = numberOfPosts / Number(site__post_per_page_(ctx))
	let pageNumbers:number[] = []
	for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
		pageNumbers = [...pageNumbers, i]
	}
	return pageNumbers
}
