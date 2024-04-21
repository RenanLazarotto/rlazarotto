import { json } from "@sveltejs/kit";

async function getPosts() {
    // Listagem de posts comuns
    let posts: Types.Post[] = [];

    // Listagem de posts fixos
    let fixed: Types.Post[] = [];

    const files = import.meta.glob("/src/posts/*.md", { eager: true });

    for (const path in files) {
        const file = files[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Types.Post, "slug">;
            const post = { ...metadata, slug } satisfies Types.Post;

            // Adiciona o post à listagem correspondente
            post.fixed ? fixed.push(post) : posts.push(post);
        }
    }

    // Ordena os posts fixos por título
    fixed.sort((first, second) => {
        return first.title.localeCompare(second.title);
    });

    // Ordena os posts comuns por publicação ou atualização
    posts.sort((first, second) => {
        const d1 = first.updated ?? first.published;
        const d2 = second.updated ?? second.published;
        return new Date(d2).getTime() - new Date(d1).getTime();
    });

    return { fixed, posts };
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const posts = await getPosts();

    return json(posts);
}
