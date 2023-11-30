import { be_sig_triple_ } from 'rmemo'
import { type Social } from './types.js'
export const [
	socials$_,
	socials_,
	socials__set,
] = be_sig_triple_<Social[]>(ctx=>
		[],
	{ id: 'socials' })
