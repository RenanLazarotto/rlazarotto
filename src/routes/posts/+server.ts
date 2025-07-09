import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { MarkdownModule } from '$lib/types/mdsvex';

export const GET: RequestHandler = () => {
	let posts: Post[] = [];

	const files = import.meta.glob('@content/*.md', { eager: true });

	for (const path in files) {
		const file = files[path] as MarkdownModule;
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = {
				...metadata,
				slug
			} satisfies Post;

			posts.push(post);
		}
	}

	posts.sort((first, second) => {
		return new Date(second.published).getTime() - new Date(first.published).getTime();
	});

	return json(posts);
};
