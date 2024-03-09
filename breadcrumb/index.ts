import type { BreadcrumbList } from '@btakita/schema-dts'
import { id_be_id_ref_jsonld_pair_ } from '@rappstack/domain--server/jsonld'
import { site__title_, site__website_ } from '@rappstack/domain--server/site'
import { request_url__origin_ } from '@rappstack/ui--server/request'
import { isNumber_ } from 'ctx-core/number'
import { url__join } from 'ctx-core/uri'
import { id_be_memo_pair_, type request_ctx_T, request_url_ } from 'relysjs/server'
export const [
	,
	breadcrumb_a1_
] = id_be_memo_pair_('breadcrumb_a1', (ctx:request_ctx_T)=>{
	const current_url_path:string = request_url_(ctx)
		.pathname
		.replace(/\/+$/, '')
	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	const breadcrumb_a1 = current_url_path.split('/').slice(1)
	if (breadcrumb_a1[0] === 'posts' && isNumber_(breadcrumb_a1[1]) && !breadcrumb_a1[1].includes('-')) {
		breadcrumb_a1.splice(0, 2, `Posts (page ${breadcrumb_a1[1] || 1})`)
	}
	return breadcrumb_a1
})
export const [
	BreadcrumbList_id_ref_,
	BreadcrumbList_
] = id_be_id_ref_jsonld_pair_('jsonld_BreadcrumbList', ctx=><BreadcrumbList>{
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	'@id': url__join(site__website_(ctx)!, request_url_(ctx).pathname, '#BreadcrumbList'),
	name: 'BreadcrumbList | ' + site__title_(ctx),
	itemListElement: [
		{
			'@type': 'ListItem',
			'@id': url__join(request_url__origin_(ctx), '#BreadcrumbList_home'),
			position: 1,
			name: 'Home',
			item: request_url__origin_(ctx)
		},
		...breadcrumb_a1_(ctx).map((breadcrumb, idx)=>({
			'@type': 'ListItem',
			'@id': url__join(request_url__origin_(ctx), `#BreadcrumbList_${breadcrumb.replaceAll('/', '_')}`),
			position: idx + 2,
			name: breadcrumb,
			item: url__join(request_url__origin_(ctx), breadcrumb)
		}))
	]
})
