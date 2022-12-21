<script>
    import "../../node_modules/normalize.css/normalize.css";
    import "../app.css";

    import { page } from "$app/stores";

    import SEO from "$lib/components/SEO/SEO.svelte";
    import Base from "$lib/layouts/base.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import Img from "$lib/components/blog/img.svelte";

    let navLinks = [
        {
            href: "/",
            text: "início",
        },
        {
            href: "/blog",
            text: "blog",
        },
    ];

    let url = $page.url.href;
</script>

<Base>
    <div slot="header">
        <SEO
            pageTitle={$page.error.title ?? "404 - Página não encontrada"}
            description={$page.error.description ?? "Página não encontrada"}
            {url}
        />
        <Header {navLinks} />
    </div>
    <div slot="main" class="main">
        <Sidebar {navLinks} />
        <div>
            <Img
                src="/assets/images/errors/404.png"
                alt="404 - Não encontrado"
            />
            <h1>{$page.error.message ?? "Ops! Parece que essa página não existe."}</h1>

            <nav>
                <a href="/" alt="Voltar ao início">início</a>
                <a href="/blog" alt="Voltar ao blog">blog</a>
            </nav>
        </div>
    </div>
</Base>

<style>
    .main {
        padding-top: 4rem;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        margin: auto;
    }

    .main h1 {
        color: var(--white);
        text-align: center;
        margin-bottom: 2rem;
    }

    .main nav {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .main nav a {
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        transition: all ease-in-out 300ms;
    }

    .main nav a:hover {
        background-color: var(--background-hover);
    }
</style>
