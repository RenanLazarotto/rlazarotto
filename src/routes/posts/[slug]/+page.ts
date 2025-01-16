import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        const file = await import(`@content/posts/${params.slug}.md`);
        const metadata = file.metadata as Omit<Types.Post, "slug">;

        if (metadata.published) {
            metadata.published = new Date(metadata.published);
        }

        if (metadata.updated) {
            metadata.updated = new Date(metadata.updated);
        }

        const post = {
            ...metadata,
            slug: params.slug,
        } satisfies Types.Post;

        return {
            content: file.default,
            meta: post,
        };
    } catch (e) {
        error(404, JSON.stringify(e));
    }
}
