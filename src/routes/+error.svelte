<script>
    import "../../node_modules/normalize.css/normalize.css";
    import "../app.css";

    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { url } from "$lib/stores";

    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import Footer from "$lib/components/footer.svelte";

    onMount(() => {
        url.set(window.location.href);
    });

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
</script>

<SEO
    pageTitle={$page.error.title}
    description={$page.error.description}
    url={$url}
/>

<div class="container">
    <div class="header">
        <Header {navLinks} />
    </div>
    <main>
        <Sidebar {navLinks} />
        <div>
            <h1>{$page.error.message}</h1>

            <nav>
                <a href="/" alt="Voltar ao início">início</a>
                <a href="/blog" alt="Voltar ao blog">blog</a>
            </nav>
        </div>
    </main>
    <Footer />
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }
    div main {
        padding-top: 4rem;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        margin: auto;
    }

    main h1 {
        color: var(--white);
        text-align: center;
        margin-bottom: 2rem;
    }

    main nav {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    main nav a {
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        transition: all ease-in-out 300ms;
    }

    main nav a:hover {
        background-color: var(--background-hover);
    }
</style>
