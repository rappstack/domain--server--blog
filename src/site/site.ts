import { be_sig_triple_ } from 'relementjs'
import type { Site } from './types.js'
export const [
	site$_,
	site_,
	site__set,
] = be_sig_triple_<Site|null>(()=>
		null,
	{ id: 'site' })
