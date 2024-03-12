import { post_mod_a1__set, type post_mod_T } from '@rappstack/domain--any--blog/post'
import { logo_image__new__set } from '@rappstack/domain--server/logo'
import { social_a1__set, type social_T } from '@rappstack/domain--server/social'
import { type middleware_ctx_T } from 'rebuildjs/server'
import { request_ctx__ensure } from 'relysjs/server'
import { blog_site__set, type blog_site_T } from '../site/index.js'
export function blog_request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	{
		blog_site,
		social_a1,
		post_mod_a1,
	}:blog_request_ctx__ensure_config_T
) {
	const request_ctx = request_ctx__ensure(middleware_ctx, context)
	blog_site__set(request_ctx, blog_site)
	social_a1__set(request_ctx, social_a1)
	post_mod_a1__set(request_ctx, post_mod_a1)
	return request_ctx
}
export type blog_request_ctx__ensure_config_T = {
	blog_site:blog_site_T
	social_a1:social_T[]
	post_mod_a1:post_mod_T[]
}
