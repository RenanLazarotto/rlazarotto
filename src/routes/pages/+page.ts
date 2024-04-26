export async function load({ fetch }) {
    let pages: Types.Page[] | Types.Post[];
    const pagesResponse = await fetch("/api/pages");

    pages = await pagesResponse.json();
    pages.forEach((page, index) => {
        if (page.published) {
            page.published = new Date(page.published);
        }

        if (page.updated) {
            page.updated = new Date(page.updated);
        }

        pages[index] = page;
    });

    return { pages };
}
