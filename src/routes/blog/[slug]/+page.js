import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    let post;

    try {
        post = await import(`../../../posts/${slug}.md`);
    } catch (e) {
        throw error(404, {
            title: '404 - Publicação não encontrada',
            message: 'Ops! Essa publicação não existe!',
            description: 'Página de erro de publicação não encontrada'
        });
    }

    let { default: body, metadata } = post;

    if (metadata.draft) {
        throw error(404, {
            title: '404 - Publicação não encontrada',
            message: 'Ops! Essa publicação não existe!',
            description: 'Página de erro de publicação não encontrada'
        });
    }

    let publishedDate = new Date(metadata.published);
    let updatedDate = "";

    if(metadata.updated != false) {
        updatedDate = new Date(metadata.updated)
    }

    metadata.published = publishedDate;
    metadata.updated = updatedDate;

    if (!body) {
        return {
            status: 404,
        };
    }

    return {
        navLinks: [
            {
                href: "/blog",
                text: "voltar"
            },
            {
                href: "/curriculo",
                target: "_blank",
                text: "curriculo"
            }
        ],
        samePageLinks: [],
        body: body,
        ...metadata
    };
}