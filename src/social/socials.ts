import { id_be_sig_triple_ } from 'rmemo'
import { type Social } from './types.js'
export const [
	socials$_,
	socials_,
	socials__set,
] = id_be_sig_triple_<Social[]>(
	'socials',
	()=>[])
