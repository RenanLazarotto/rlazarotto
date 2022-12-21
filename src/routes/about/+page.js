export function load() {
    return {
        navLinks: [
            {
                href: "/",
                text: "início"
            },
            {
                href: "/blog",
                text: "blog"
            },
            {
                href: "/curriculo",
                target: "_blank",
                text: "curriculo"
            }
        ],
        libraries: [
            {
                name: 'SvelteKit',
                license: 'MIT',
                usedOn: 'Framework usado para gerar todo o site',
                link: 'https://kit.svelte.dev'
            },
            {
                name: 'SimpleIcons',
                license: 'CC0',
                usedOn: 'Ícones das tecnologias na página inicial',
                link: 'https://simpleicons.org'
            },
            {
                name: 'Phosphor Svelte',
                license: 'MIT',
                usedOn: 'Ícones de envelope, GitHub, LinkedIn, botão de abrir e de fechar o menu lateral, link externo e repositório',
                link: 'https://simpleicons.org'
            },
            {
                name: 'MDsveX',
                license: 'MIT',
                usedOn: 'Pré-processador de arquivos markdown para o conteúdo das publicações do blog',
                link: 'https://mdsvex.pngwn.io'
            },
            {
                name: 'ManyPixels',
                license: 'ManyPixels',
                usedOn: 'Ilustrações utilizadas nas imagens dos posts',
                link: 'https://www.manypixels.co/'
            }
        ]
    };
}