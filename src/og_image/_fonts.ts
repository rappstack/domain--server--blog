import { atom_, be_computed_pair_ } from '@ctx-core/nanostores'
export const [
	_fonts$_,
	_fonts_,
] = be_computed_pair_(()=>{
	const _fonts$ = atom_<_font_T>()
	_fonts__load.then(_fonts=>
		_fonts$.$ = _fonts)
	return _fonts$
})
async function _fonts__load():Promise<_font_T> {
	// Regular Font
	const regular_font__url = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf'
	)
	const regular_font = await regular_font__url.arrayBuffer()
	// Bold Font
	const bold_font__url = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf'
	)
	const bold_font = await bold_font__url.arrayBuffer()
	return { regular_font, bold_font }
}
export interface _font_T {
	regular_font:ArrayBuffer
	bold_font:ArrayBuffer
}