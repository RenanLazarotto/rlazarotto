import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	try {
		const file = await import(`@content/pages/${params.slug}.md`);
		const metadata = file.metadata as Omit<Types.Page, 'slug'>;

		if (metadata.published) {
			metadata.published = new Date(metadata.published);
		}

		if (metadata.updated) {
			metadata.updated = new Date(metadata.updated);
		}

		const page = {
			...metadata,
			slug: params.slug
		} satisfies Types.Page;

		return {
			content: file.default,
			meta: page
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
