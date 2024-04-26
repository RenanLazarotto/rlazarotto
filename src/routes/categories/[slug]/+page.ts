export async function load({ fetch, params }) {
    const postsByCategory = await fetch(`/api/categories/${params.slug}`);

    const data: { posts: Types.Post[]; category: string } = await postsByCategory.json();

    data.posts.forEach((post, index) => {
        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        data.posts[index] = post;
    });

    return { ...data, slug: params.slug };
}
