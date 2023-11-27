import type { ReactNode } from 'react'
import type { JSX } from 'react'
export function h<
	// P extends JSX.HTMLElementTags['base']
	P extends JSX.IntrinsicElements
>(type:string, props:P) {
	return {
		type,
		props,
	} as ReactNode
}
