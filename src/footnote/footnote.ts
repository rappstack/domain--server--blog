/// <reference types="ctx-core/be" />
import { be_, type Ctx } from 'ctx-core/be'
import { be_sig_triple_ } from 'relementjs'
const uuid_M_footnote_ = be_(()=>
	new Map<string, footnote_T>)
export const [
	footnote_o$_,
	footnote_o_,
	footnote_o__set,
] = be_sig_triple_(()=>({
		seq: 0,
		footnote_a: []
	} as footnote_o_T),
	{ id: 'footnote_o' })
/**
 * @param {Ctx}ctx
 * @param {string}id - handle Astrojs progressive rendering
 * @param {string}html
 */
export function footnote__new(ctx:Ctx, id:string, html:string):footnote_T {
	let footnote:footnote_T|null = null
	let seq:number = footnote_o_(ctx).seq
	const { footnote_a } = footnote_o_(ctx)
	if (uuid_M_footnote_(ctx).has(id)) {
		footnote = uuid_M_footnote_(ctx).get(id)!
		footnote.html = html
	}
	if (!footnote) {
		seq = footnote_o_(ctx).seq + 1
		footnote = {
			seq,
			html,
			id,
		}
		uuid_M_footnote_(ctx).set(id, footnote)
		footnote_a.push(footnote)
	}
	footnote_o__set(ctx, {
		seq: seq,
		footnote_a: footnote_a,
	})
	return footnote
}
export interface footnote_o_T {
	seq:number
	footnote_a:footnote_T[]
}
export interface footnote_T {
	seq:number
	html:string
	id:string
}
