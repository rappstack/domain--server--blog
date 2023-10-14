import { type Post } from '@btakita/domain--all--blog'
import satori from 'satori'
import { post__og_template__new } from './_og_template'
import { _satori_options$_, _satori_potions__load } from './_satori_options.ts'
import { _svg__png_buffer__new } from './_svg__png_buffer__new.ts'
export async function post__og_image__buffer__new(post:Post) {
	const _satori_options = await _satori_potions__load()
	const svg = await satori(post__og_template__new(post), _satori_options)
	return _svg__png_buffer__new(svg)
}