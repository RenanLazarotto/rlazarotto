/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let posts: Types.Post[];
    const postsResponse = await fetch("/api/posts");

    posts = await postsResponse.json();
    posts.forEach((post, index) => {
        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        posts[index] = post;
    });

    return { posts };
}
