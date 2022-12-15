<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { url } from "$lib/stores";

    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    onMount(() => {
        url.set(window.location.href);
    });

    let navLinks = [
        {
            href: "/",
            text: "início",
        },
    ];
</script>

<SEO
    pageTitle={$page.error.title}
    description={$page.error.description}
    url={$url}
/>

<Header {navLinks} />
<Sidebar {navLinks} />

<div>
    <h1>{$page.error.message}</h1>

    <a href="/blog" alt="Voltar ao blog">Voltar ao blog</a>
    <a href="/" alt="Voltar ao início">Voltar ao início</a>
</div>

<style>
    div {
        padding-top: 6rem;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    div h1 {
        color: var(--white);
        text-align: center;
    }
</style>
