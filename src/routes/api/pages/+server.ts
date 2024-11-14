import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	let pages: Types.Page[] = [];

	const files = import.meta.glob('/src/content/pages/*.md', { eager: true });

	for (const path in files) {
		const file = files[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Types.Page, 'slug'>;
			const page = { ...metadata, slug } satisfies Types.Page;

			pages.push(page);
		}
	}

	// Ordena os posts fixos por título
	pages.sort((first, second) => {
		return first.title.localeCompare(second.title);
	});

	return json(pages);
}
