import { type Post } from '@btakita/domain--any--blog'
import { type route_ctx_T } from 'relysjs'
import satori from 'satori'
import { post__og_template__new } from './_og_template/index.ts'
import { _satori_options__load } from './_satori_options.js'
import { _svg__png_buffer__new } from './_svg__png_buffer__new.js'
export async function post__og_image__buffer__new(
	ctx:route_ctx_T,
	post:Post
) {
	const _satori_options = await _satori_options__load()
	const svg = await satori(
		post__og_template__new(ctx, post),
		_satori_options)
	return _svg__png_buffer__new(svg)
}
