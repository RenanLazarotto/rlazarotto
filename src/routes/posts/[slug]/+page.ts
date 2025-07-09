import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const file = await import(`@content/${params.slug}.md`);
		const metadata = file.metadata as Omit<Post, 'slug'>;

		if (metadata.published) {
			metadata.published = new Date(metadata.published);
		}

		if (metadata.updated) {
			metadata.updated = new Date(metadata.updated);
		}

		const post = {
			...metadata,
			slug: params.slug
		} satisfies Post;

		return {
			content: file.default,
			meta: post
		};
	} catch (e) {
		error(404, JSON.stringify(e));
	}
};
