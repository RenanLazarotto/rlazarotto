import { json } from "@sveltejs/kit";

async function getPosts() {
    let posts: Types.Post[] = [];

    const postFiles = import.meta.glob("/src/posts/*.md", { eager: true });

    for (const path in postFiles) {
        const file = postFiles[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any | any[] };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Types.Post, "slug">;
            const post = { ...metadata, slug } satisfies Types.Post;

            posts.push(post);
        }
    }

    return posts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const limit = Number(url.searchParams.get("limit") ?? 0);
    const posts = await getPosts();

    if (limit > 0) {
        return json(posts.slice(0, limit));
    }

    return json(posts);
}
