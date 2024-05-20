import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    try {
        const file = await import(`@content/posts/${params.slug}.md`);
        const rtResponse = await fetch(`/api/posts/reading-time/${params.slug}`);
        const readingTime = await rtResponse.json();
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
            ...readingTime,
        } satisfies Types.Post;

        return {
            content: file.default,
            meta: post,
        };
    } catch (e) {
        error(404, JSON.stringify(e));
    }
}
