export interface Post {
	title:string
	description:string
	pubDate:Date // astro compatibility
	updated_date?:Date
	hero_image?:string
	slug?:string
}
