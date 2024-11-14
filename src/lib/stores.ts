import { stripHtml } from 'string-strip-html';
import { writable } from 'svelte/store';

export const pages = writable<Types.Page[]>([]);
export const posts = writable<Types.Post[]>([]);

const pageFiles = import.meta.glob('@content/pages/*.md', { eager: true });

console.log(pageFiles);

for (const path in pageFiles) {
	const file = pageFiles[path] as {
		default: { render: Function; $$render: Function };
		metadata: { [key: string]: any };
	};

	const slug = path.split('/').at(-1)?.replace('.md', '');

	if (file && typeof file === 'object' && 'metadata' in file && slug) {
		const metadata = file.metadata as Omit<Types.Page, 'slug'>;
		const page = { ...metadata, slug } satisfies Types.Page;

		pages.update((pages) => {
			console.log('pages before push', pages);
			pages.push(page);
			console.log(pages);
			return pages;
		});
	}
}

// Ordena os posts fixos por título
pages.update((pages) => {
	pages.sort((first, second) => {
		return first.title.localeCompare(second.title);
	});

	return pages;
});

const postFiles = import.meta.glob('@content/posts/*.md', { eager: true });

for (const path in postFiles) {
	const file = pageFiles[path] as {
		default: { render: Function; $$render: Function };
		metadata: { [key: string]: any };
	};

	const slug = path.split('/').at(-1)?.replace('.md', '');

	if (file && typeof file === 'object' && 'metadata' in file && slug) {
		const dom = stripHtml(file.default.render().html).result;
		const metadata = file.metadata as Omit<Types.Post, 'slug'>;
		const post = {
			...metadata,
			slug,
			readingTime: Math.ceil(dom.split('').length / 260)
		} satisfies Types.Post;

		posts.update((posts) => {
			posts.push(post);

			return posts;
		});
	}
}

// Ordena os posts por publicação
posts.update((posts) => {
	posts.sort((first, second) => {
		return new Date(second.published).getTime() - new Date(first.published).getTime();
	});
	return posts;
});
