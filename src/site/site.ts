import { type Site } from '@btakita/ui--server--blog'
import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
export const [
	site$_,
	site_,
	site__set,
	site__memo,
] = be_atom_memo_tuple5_(()=>
	atom_<Site>())