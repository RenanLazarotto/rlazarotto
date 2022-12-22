<script>
    import "../../node_modules/normalize.css/normalize.css";
    import "../app.css";

    import { page } from "$app/stores";

    import SEO from "$lib/components/SEO/SEO.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
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

<BaseLayout hideFooter={true}>
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
            {#if $page.error.message == "Not Found"}
                <h1>Ops! Parece que essa página não existe.</h1>
            {:else}
                <h1>
                    {$page.error.message ??
                        "Ops! Parece que essa página não existe."}
                </h1>
            {/if}
        </div>
    </div>
</BaseLayout>

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
    }
</style>
