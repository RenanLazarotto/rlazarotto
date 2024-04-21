/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const postsResponse = await fetch("/api/posts");

    let { posts, fixed }: { fixed: Types.Post[]; posts: Types.Post[] } = await postsResponse.json();

    posts.forEach((post, index) => {
        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        posts[index] = post;
    });

    fixed.forEach((post, index) => {
        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        fixed[index] = post;
    });

    return {
        posts: posts,
        fixed: fixed,
    };
}
