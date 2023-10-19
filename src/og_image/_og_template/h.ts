import type { ReactNode } from 'react'
import type { JSX } from 'solid-js'
export function h<
	P extends JSX.HTMLElementTags['base']
>(type:string, props:P) {
	return {
		type,
		props,
	} as ReactNode
}
