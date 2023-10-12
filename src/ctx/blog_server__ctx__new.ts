import { blog__ctx__new } from '@btakita/domain--all--blog'
import { Astro__set } from '@btakita/domain--server'
import { type Site } from '@btakita/ui--server--blog'
import { type APIContext, type AstroGlobal } from 'astro'
import { site__set } from '../site'
export function blog_server__ctx__new(
	Astro:APIContext|AstroGlobal,
	site:Site
) {
  const ctx = blog__ctx__new()
	Astro__set(ctx, Astro)
	site__set(ctx, site)
	return ctx
}