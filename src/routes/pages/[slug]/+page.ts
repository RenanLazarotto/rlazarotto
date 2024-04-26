import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const file = await import(`../../../content/pages/${params.slug}.md`);

        const metadata = file.metadata as Omit<Types.Page, "slug">;
        const post = { ...metadata, slug: params.slug } satisfies Types.Page;

        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        return {
            content: file.default,
            ...post,
        };
    } catch (e) {
        error(404, `Could not find ${params.slug}`);
    }
}
