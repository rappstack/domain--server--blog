import { blog_ctx__new } from '@btakita/domain--any--blog'
import { blog_server_request__init, type blog_server_request__init_config_T } from './blog_server_request__init.ts'
export function blog_server_ctx__new(
	config:blog_server_request__init_config_T
) {
	return blog_server_request__init(blog_ctx__new(), config)
}
