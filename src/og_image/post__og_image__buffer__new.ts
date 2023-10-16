import { type Post } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import satori from 'satori'
import { post__og_template__new } from './_og_template'
import { _satori_options__load } from './_satori_options'
import { _svg__png_buffer__new } from './_svg__png_buffer__new.ts'
export async function post__og_image__buffer__new(ctx:Ctx, post:Post) {
	const _satori_options = await _satori_options__load()
	const svg = await satori(post__og_template__new(ctx, post), _satori_options)
	return _svg__png_buffer__new(svg)
}