import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	let slug = params.slug;

	const file = (await import(`@content/pages/${params.slug}.md`)) as {
		default: { render: Function; $$render: Function };
		metadata: { [key: string]: any };
	};

	const metadata = file.metadata as Omit<Types.Page, 'slug'>;
	const post = {
		...metadata,
		slug
	} satisfies Types.Page;

	return json(post);
}
