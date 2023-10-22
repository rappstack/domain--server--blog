import { atom_ } from '@ctx-core/nanostores'
import { be_, type Ctx } from '@ctx-core/object'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
const uuid_M_citation_ = be_(()=>
	new Map<string, citation_T>)
const [
	citation_o$_,
	citation_o_,
	citation_o__set,
	citation_o__memo,
	citation_o__memo_,
] = be_atom_memo_tuple5_(()=>
	atom_<citation_o_T>({
		id: 0,
		citation_a: []
	}))
export {
	citation_o$_,
	citation_o_,
	citation_o__memo,
	citation_o__memo_,
}
/**
 * @param {Ctx}ctx
 * @param {string}uuid - handle Astrojs progressive rendering
 * @param {string}html
 */
export function cite(ctx:Ctx, uuid:string, html:string):citation_T {
	let citation:citation_T|null = null
	let id:number = citation_o_(ctx).id
	const { citation_a } = citation_o_(ctx)
	if (uuid_M_citation_(ctx).has(uuid)) {
		citation = uuid_M_citation_(ctx).get(uuid)!
		citation.html = html
	}
	if (!citation) {
		id = citation_o_(ctx).id + 1
		citation = {
			id,
			html,
			uuid,
		}
		uuid_M_citation_(ctx).set(uuid, citation)
		citation_a.push(citation)
	}
	citation_o__set(ctx, {
		id,
		citation_a,
	})
	return citation
}
export interface citation_o_T {
	id:number
	citation_a:citation_T[]
}
export interface citation_T {
	id:number
	html:string
	uuid:string
}