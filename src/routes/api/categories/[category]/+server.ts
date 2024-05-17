import { error, json } from "@sveltejs/kit";

/**
 * Retorna as publicações de uma categoria informada.
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET({ params }) {
    let posts: Types.Post[] = [];

    // Escrita correta da categoria para ser usada na página de listagem
    let category: string = "";

    const files = import.meta.glob("/src/content/posts/*.md", { eager: true });

    for (const path in files) {
        const file = files[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Types.Post, "slug">;
            const post = { ...metadata, slug } satisfies Types.Post;

            if (
                post.category
                    .normalize("NFKD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(" ", "-")
                    .toLowerCase() == params.category.toLowerCase()
            ) {
                if (category == "") category = post.category;

                posts.push(post);
            }
        }
    }

    // Ordena os posts pela data de atualização ou publicação
    posts.sort((first, second) => {
        const d1 = first.updated ?? first.published;
        const d2 = second.updated ?? second.published;
        return new Date(d2).getTime() - new Date(d1).getTime();
    });

    return json({ posts, category });
}