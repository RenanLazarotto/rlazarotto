/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const pagesResponse = await fetch("/api/pages");

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

    return {
        pages,
    };
}
