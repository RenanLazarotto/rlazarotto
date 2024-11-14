import { json } from '@sveltejs/kit';
import type { Component } from 'svelte';

export async function GET({ url }) {
	let posts: Types.Post[] = [];

	const files = import.meta.glob<{ default: Component; metadata: Record<string, any> }>('@content/posts/*.md', {
		eager: true
	});

	for (const path in files) {
		const file = files[path];

		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Types.Post, 'slug'>;
			const post = {
				...metadata,
				slug
			} satisfies Types.Post;

			posts.push(post);
		}
	}

	let sort = url.searchParams.get('sort');

	switch (sort) {
		case 'title':
			posts.sort((first, second) => {
				return first.title.localeCompare(second.title);
			});
			break;
		case 'date':
		default:
			posts.sort((first, second) => {
				return new Date(second.published).getTime() - new Date(first.published).getTime();
			});
			break;
	}

	return json(posts);
}
