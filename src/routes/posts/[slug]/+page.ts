import type { Component } from 'svelte';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const file = (await import(`@content/posts/${params.slug}.md`)) as {
		default: Component;
		metadata: Record<string, any>;
	};
	const metadata = file.metadata as Omit<Types.Post, 'slug'>;

	if (metadata.published) {
		metadata.published = new Date(metadata.published);
	}

	if (metadata.updated) {
		metadata.updated = new Date(metadata.updated);
	}

	const post = {
		...metadata,
		slug: params.slug
	} satisfies Types.Post;

	return {
		content: file.default,
		meta: post
	};
}
