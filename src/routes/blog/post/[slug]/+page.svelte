<script>
    import { onMount } from "svelte";
    import { url } from "$lib/stores";

    import Base from "$lib/layouts/base.svelte";
    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    import "normalize.css";

    export let data;

    onMount(() => {
        url.set(window.location.href);
    });
</script>

<Base>
    <div slot="header" class="header">
        <SEO pageTitle={data.title} description={data.title} url={$url} />
        <Header samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
    </div>
    <div slot="main" class="main">
        <Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
        <h1>{data.title}</h1>

        <p>
            {data.date.toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
            })}
        </p>

        <div class="post">
            <svelte:component this={data.body} />
        </div>
    </div>
</Base>

<style>
    div.header {
        padding-top: 5rem;
    }

    .main * {
        color: var(--white);
    }

    .main h1 {
        margin-top: 1rem;
        margin-bottom: 0.2rem;
    }

    .main p {
        color: var(--gray);
        padding-bottom: 1rem;
    }

    .main .post {
        display: flex;
        flex-direction: column;
        text-align: justify;
    }

    .post :global(p) {
        margin-bottom: 1rem;
    }

    .post :global(h1),
    .post :global(h2),
    .post :global(h3),
    .post :global(h4),
    .post :global(h5),
    .post :global(h6) {
        padding-top: 1rem;
        padding-bottom: 0.2rem;
    }

    .post :global(img) {
        display: block;
        margin: auto;
    }
</style>
