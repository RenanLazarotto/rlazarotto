/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    const pagesResponse = await fetch("api/pages");

    let pages: Types.Page[] = await pagesResponse.json();

    pages.forEach((page, index) => {
        if (page.published) {
            page.published = new Date(page.published);
        }

        if (page.updated) {
            page.updated = new Date(page.updated);
        }

        pages[index] = page;
    });

    pages = pages.sort((first: Types.Page, second: Types.Page) => {
        if (first.title > second.title) {
            return 1;
        } else if (first.title < second.title) {
            return -1;
        } else {
            return 0;
        }
    });

    const postsResponse = await fetch("api/posts?limit=5");

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

    posts = posts.sort((first: Types.Post, second: Types.Post) => {
        const d1 = first.updated || first.published;
        const d2 = second.updated || second.published;
        return d2.getTime() - d1.getTime();
    });

    return {
        url: url.pathname,
        pages: pages,
        posts: posts,
    };
}
