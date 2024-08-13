import { estimateReadingTime } from "$lib/utils";
import { json } from "@sveltejs/kit";
import { stripHtml } from "string-strip-html";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    let posts: Types.Post[] = [];

    const files = import.meta.glob("@content/posts/*.md", { eager: true });

    for (const path in files) {
        const file = files[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const dom = stripHtml(file.default.render().html).result;
            const metadata = file.metadata as Omit<Types.Post, "slug">;
            const post = {
                ...metadata,
                slug,
                readingTime: estimateReadingTime(dom),
            } satisfies Types.Post;

            posts.push(post);
        }
    }

    // Ordena os posts por publicação
    posts.sort((first, second) => {
        return (
            new Date(second.published).getTime() -
            new Date(first.published).getTime()
        );
    });

    return json(posts);
}
