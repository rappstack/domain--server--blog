import { type Post } from '@btakita/domain--all--blog'
import { style_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type ReactNode } from 'react'
import { relement__use } from 'relementjs'
import { div_, p_, span_ } from 'relementjs/html'
import { server__base__relement } from 'relementjs/server'
import { html } from 'satori-html'
import { site_ } from '../../site/index.js'
import { h } from './h.js'
export function post__og_template__new(ctx:Ctx, post:Post) {
	relement__use(server__base__relement)
	return html(
		div_<'server'>({
				style: style_({
					background: '#fefbfb',
					width: '100%',
					height: '100%',
					display: 'flex',
					'align-items': 'center',
					'justify-content': 'center',
				})
			},
			div_({
				style: style_({
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					border: '4px solid #000',
					background: '#ecebeb',
					opacity: '0.9',
					'border-radius': '4px',
					display: 'flex',
					'justify-content': 'center',
					margin: '2.5rem',
					width: '88%',
					height: '80%',
				})
			}),
			div_({
					border: '4px solid #000',
					background: '#fefbfb',
					'border-radius': '4px',
					display: 'flex',
					'justify-content': 'center',
					margin: '2rem',
					width: '88%',
					height: '80%',
				},
				div_({
						style: style_({
							display: 'flex',
							'flex-direction': 'column',
							'justify-content': 'space-between',
							margin: '20px',
							width: '90%',
							height: '90%',
						})
					},
					p_({
						style: style_({
							'font-size': 72,
							'font-weight': 'bold',
							'max-height': '84%',
							overflow: 'hidden',
						})
					}, post.data.title),
					div_({
							style: style_({
								display: 'flex',
								'justify-content': 'space-between',
								width: '100%',
								'margin-bottom': '8px',
								fontSize: 28,
							})
						},
						span_(
							'by ',
							span_({
								style: style_({
									color: 'transparent',
								})
							}, '"'),
							span_({
								style: style_({
									overflow: 'hidden',
									'font-weight': 'bold',
								}, post.data.author)
							})
						),
						span_({
							style: style_({
								overflow: 'hidden',
								'font-weight': 'bold',
							}, site_(ctx).title)
						}))))).render()
	) as ReactNode
}
