import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
import { type Social } from './types.ts'
export const [
	socials$_,
	socials_,
	socials__set,
	socials__memo,
	socials__memo_,
] = be_atom_memo_tuple5_(()=>
	atom_<Social[]>())