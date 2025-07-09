import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const postsResponse = await fetch('/posts');

	let posts: Post[] = await postsResponse.json();

	posts.forEach((post, index) => {
		if (post.published) {
			post.published = new Date(post.published);
		}

		if (post.updated) {
			post.updated = new Date(post.updated);
		}

		posts[index] = post;
	});

	return {
		posts
	};
};
