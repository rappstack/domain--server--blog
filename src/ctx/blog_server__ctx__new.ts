import { blog__ctx__new } from '@btakita/domain--all--blog'
import { Astro__set } from '@btakita/domain--server'
import { type APIContext, type AstroGlobal } from 'astro'
import { logo_image__set, type LogoImage } from '../logo'
import { type Site, site__set } from '../site'
import { type Social, socials__set } from '../social'
export function blog_server__ctx__new(
	Astro:APIContext|AstroGlobal,
	{ logo_image, site, socials }:{
		logo_image?:LogoImage
		site:Site
		socials:Social[]
	}
) {
	const ctx = blog__ctx__new()
	Astro__set(ctx, Astro)
	logo_image__set(ctx, logo_image)
	site__set(ctx, site)
	socials__set(ctx, socials)
	return ctx
}