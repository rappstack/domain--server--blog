import { post_mod_a1__set } from '@btakita/domain--any--blog'
import { post_mod_a1 } from 'briantakita.me/src2/post/index.ts'
import { type middleware_ctx_T } from 'rebuildjs/server'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { request_ctx__ensure } from 'relysjs/server'
import { logo_image__set, type logo_image_T } from '../logo/index.ts'
import { site__set, type site_T } from '../site/index.ts'
import { social_a1__set, type social_T } from '../social/index.ts'
export function blog_server_request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	{
		logo_image,
		site,
		social_a1
	}:blog_server_request_ctx__ensure_config_T
) {
	const request_ctx = request_ctx__ensure(middleware_ctx, context)
	relement__use(server__relement)
	logo_image__set(request_ctx, logo_image)
	site__set(request_ctx, site)
	social_a1__set(request_ctx, social_a1)
	post_mod_a1__set(request_ctx, post_mod_a1)
	return request_ctx
}
export type blog_server_request_ctx__ensure_config_T = {
	logo_image?:logo_image_T
	site:site_T
	social_a1:social_T[]
}
