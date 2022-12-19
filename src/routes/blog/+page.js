export async function load() {
	const postsFiles = import.meta.glob('../../posts/*.md');

	let posts = await Promise.all(
		Object.keys(postsFiles).map(async (path) => {
			const { metadata } = await postsFiles[path]();
			let { title, date, resume, image, slug, draft } = metadata;

			date = new Date(date);

			return { title, date, resume, image, slug, draft };
		}),
	);

	posts = posts.filter((post) => {
		return !post.draft;
	});

	posts.sort((a, b) => b.date - a.date);

	return {
		navLinks: [
			{
				href: "/",
				text: "início"
			},
			{
				href: "/curriculo",
				target: "_blank",
				text: "curriculo"
			}
		],
		posts: posts
	};
}