/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const postsResponse = await fetch("/api/posts");
    const pagesResponse = await fetch("/api/pages");

    let pages: Types.Page[] = await pagesResponse.json();
    let posts: Types.Post[] = await postsResponse.json();

    posts.forEach((post, index) => {
        if (post.published) {
            post.published = new Date(post.published);
        }

        if (post.updated) {
            post.updated = new Date(post.updated);
        }

        posts[index] = post;
    });

    pages.forEach((page, index) => {
        if (page.published) {
            page.published = new Date(page.published);
        }

        if (page.updated) {
            page.updated = new Date(page.updated);
        }

        pages[index] = page;
    });

    return {
        posts,
        pages,
    };
}
