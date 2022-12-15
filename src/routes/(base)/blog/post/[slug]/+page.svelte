<script>
    import { onMount } from "svelte";
    import { url } from "$lib/stores";

    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    import "normalize.css";

    export let data;
    
    onMount(() => {
        url.set(window.location.href);
    });
</script>

<SEO pageTitle={data.title} description={data.title} url={$url} />
<Header samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
<Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />

<section>
    <h1>{data.title}</h1>

    <p>{data.date.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    })}
    </p>

    <div class="post">
        <svelte:component this={data.body} />
    </div>
</section>

<style>
    * {
        color: var(--white);
    }

    section {
        padding-top: 6rem;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
    }

    section h1 {
        margin-top: 1rem;
        margin-bottom: 0.2rem;
    }

    section p {
        color: var(--gray);
        padding-bottom: 1rem;
    }

    .post {
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
