import { atom_, be_computed_pair_, onStart, onStop, subscribe_wait } from '@ctx-core/nanostores'
import { type SatoriOptions } from 'satori'
import { _fonts$_ } from './_fonts'
import { _og_image__ctx } from './_og_image__ctx'
const [
	_satori_options$_,
	_satori_options_
] = be_computed_pair_('_satori_options', ctx=>{
	const _satori_options$ = atom_<SatoriOptions>()
	onStart(_satori_options$, ()=>{
		onStop(_satori_options$, _fonts$_(ctx).subscribe(_fonts=>{
			const {
				regular_font,
				load__regular_font,
				bold_font,
				load__bold_font
			} = _fonts!
			_satori_options$.$ = {
				width: 1200,
				height: 630,
				embedFont: true,
				fonts: [
					{
						name: load__regular_font.name,
						data: regular_font,
						weight: load__regular_font.weight,
						style: load__regular_font.style,
					},
					{
						name: 'Atkinson Hyperlegible',
						data: bold_font,
						weight: 600,
						style: 'normal',
					},
				],
			}
		}))
	})
	return _satori_options$
})
export async function _satori_options__load():Promise<SatoriOptions> {
	return subscribe_wait(
		_satori_options$_(_og_image__ctx),
			$=>$,
		10_000)
}