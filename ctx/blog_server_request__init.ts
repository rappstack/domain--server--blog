import { type root_ctx_T } from '@btakita/domain--any--blog'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { logo_image__set, type logo_image_T } from '../logo/index.ts'
import { type site_T, site__set } from '../site/index.ts'
import { type social_T, social_a1__set } from '../social/index.ts'
export function blog_server_request__init(
	ctx:root_ctx_T,
	{
		logo_image,
		site,
		social_a1
	}:blog_server_request__init_config_T
) {
	relement__use(server__relement)
	logo_image__set(ctx, logo_image)
	site__set(ctx, site)
	social_a1__set(ctx, social_a1)
	return ctx
}
export type blog_server_request__init_config_T = {
	logo_image?:logo_image_T
	site:site_T
	social_a1:social_T[]
}
