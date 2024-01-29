import { blog_ctx__new } from '@btakita/domain--any--blog'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { logo_image__set, type LogoImage } from '../logo/index.js'
import { type Site, site__set } from '../site/index.js'
import { type Social, socials__set } from '../social/index.js'
export function blog_server_ctx__new(
	{ logo_image, site, socials }:{
		logo_image?:LogoImage
		site:Site
		socials:Social[]
	}
) {
	const ctx = blog_ctx__new()
	relement__use(server__relement)
	logo_image__set(ctx, logo_image)
	site__set(ctx, site)
	socials__set(ctx, socials)
	return ctx
}
