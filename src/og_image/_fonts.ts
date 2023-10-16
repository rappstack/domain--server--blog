import { noop, type nullish, nullish__check_ } from '@ctx-core/function'
import { atom_, be_computed_pair_, computed_, onMount } from '@ctx-core/nanostores'
import { type Ctx } from '@ctx-core/object'
import { load__bold_font_, type load__font_T, load__regular_font_ } from './font'
export const [
	_fonts$_,
	_fonts_,
] = be_computed_pair_(ctx=>{
	const _fonts$ = atom_<_font_T|nullish>()
	const _fonts__load__subscribe$ = computed_(()=>{
		nullish__check_([load__regular_font_(ctx), load__bold_font_(ctx)], async (
			load__regular_font,
			load__bold_font
		)=>{
			const fonts = await _fonts__load(ctx)
			if (
				load__regular_font === load__regular_font_(ctx)
				&& load__bold_font === load__bold_font_(ctx)
			) {
				_fonts$.set(fonts)
			}
		}, nullish=>{
			_fonts$.set(nullish)
		})
	})
	onMount(_fonts$, ()=>
		_fonts__load__subscribe$.listen(noop))
	return _fonts$
})
async function _fonts__load(ctx:Ctx):Promise<_font_T> {
	// Regular Font
	const load__regular_font = load__regular_font_(ctx)!
	const regular_font__response = await fetch(load__regular_font.url)
	const regular_font = await regular_font__response.arrayBuffer()
	// Bold Font
	const load__bold_font = load__bold_font_(ctx)!
	const bold_font__response = await fetch(load__bold_font.url)
	const bold_font = await bold_font__response.arrayBuffer()
	return {
		regular_font,
		load__regular_font,
		bold_font,
		load__bold_font,
	}
}
export interface _font_T {
	regular_font:ArrayBuffer
	load__regular_font:load__font_T
	bold_font:ArrayBuffer
	load__bold_font:load__font_T
}