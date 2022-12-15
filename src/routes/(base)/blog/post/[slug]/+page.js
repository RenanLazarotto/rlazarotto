import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    const post = import(`../../../../../posts/${slug}.md`);
    const postResult = await post;

    let { default: body, metadata } = postResult;

    if(metadata.draft) {
        throw error(404, {
            title: '404',
            message: 'Publicação não encontrada!',
            description: 'Página de erro de publicação não encontrada'
        });
    }

    let date = new Date(metadata.date);

    metadata.date = date;

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