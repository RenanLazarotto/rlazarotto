import { json } from "@sveltejs/kit";

/**
 * Retorna uma lista de categorias com a contagem de publicações em cada uma delas
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET() {
    let categories: Types.Category[] = [];

    const files = import.meta.glob("/src/content/posts/*.md", { eager: true });

    for (const path in files) {
        const file = files[path] as {
            default: { render: Function; $$render: Function };
            metadata: { [key: string]: any };
        };

        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Types.Post, "slug">;

            // Verifica se a categoria do post atual já está na lista de categorias
            const idx = categories.findIndex((el) => el.title == metadata.category);

            if (idx == -1) {
                categories.push({
                    title: metadata.category,
                    href: `/categories/${metadata.category
                        .normalize("NFKD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(" ", "-")
                        .toLowerCase()}`,
                    count: 1,
                });
            } else {
                categories[idx].count++;
            }
        }
    }

    // Ordena as categorias por ordem alfabética
    categories.sort((first, second) => {
        return first.title.localeCompare(second.title);
    });

    return json(categories);
}
