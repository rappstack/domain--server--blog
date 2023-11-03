import { be_state_triple_, van_ } from '@btakita/domain--all--blog'
import { type Social } from './types.ts'
export const [
	socials$_,
	socials_,
	socials__set,
] = be_state_triple_(ctx=>
	van_(ctx).state<Social[]>([]))
