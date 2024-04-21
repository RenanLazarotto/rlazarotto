import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const post = await import(`../../posts/${params.slug}.md`);

        if (post.metadata.published) {
            post.metadata.published = new Date(post.metadata.published);
        }

        if (post.metadata.updated) {
            post.metadata.updated = new Date(post.metadata.updated);
        }
        console.log(post);

        return {
            content: post.default,
            meta: post.metadata,
        };
    } catch (e) {
        error(404, `Could not find ${params.slug}`);
    }
}
