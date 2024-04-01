import { json } from "@sveltejs/kit";

async function getPages() {
    let pages: Types.Page[] = [];

    const pageFiles = import.meta.glob("/src/pages/*.md", { eager: true });

    for (const path in pageFiles) {
        const file = pageFiles[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any | any[] };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Types.Page, "slug">;
            const page = { ...metadata, slug } satisfies Types.Page;

            pages.push(page);
        }
    }

    pages = pages.sort((first: Types.Page, second: Types.Page) => {
        if (first.title > second.title) {
            return 1;
        } else if (first.title < second.title) {
            return -1;
        } else {
            return 0;
        }
    });

    return pages;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const pages = await getPages();
    return json(pages);
}
