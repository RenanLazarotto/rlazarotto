export async function load({ fetch }) {
    const postsResponse = await fetch("api/posts");
    const pagesResponse = await fetch("api/pages");

    let posts: Types.Post[] = await postsResponse.json();
    let pages: Types.Page[] = await pagesResponse.json();

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

    posts = posts.sort((first: Types.Post, second: Types.Post) => {
        const d1 = first.updated || first.published;
        const d2 = second.updated || second.published;
        return d2.getTime() - d1.getTime();
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

    return { posts: posts, pages: pages };
}
