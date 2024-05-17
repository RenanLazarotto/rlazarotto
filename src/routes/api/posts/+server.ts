import { estimateReadingTime } from "$lib/utils";
import { json } from "@sveltejs/kit";
import { JSDOM } from "jsdom";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    let posts: Types.Post[] = [];

    const files = import.meta.glob("/src/content/posts/*.md", { eager: true });

    for (const path in files) {
        const file = files[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const dom = new JSDOM(file.default.$$render());
            const words = dom.window.document.body.textContent || "";

            const metadata = file.metadata as Omit<Types.Post, "slug">;
            const post = { ...metadata, slug, readingTime: estimateReadingTime(words) } satisfies Types.Post;

            posts.push(post);
        }
    }

    // Ordena os posts por atualização ou publicação
    posts.sort((first, second) => {
        const d1 = first.updated ?? first.published;
        const d2 = second.updated ?? second.published;
        return new Date(d2).getTime() - new Date(d1).getTime();
    });

    return json(posts);
}
