<script>
    import { page } from "$app/stores";

    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import Img from "$lib/components/blog/img.svelte";

    export let data;

    let url = $page.url.href;
</script>

<BaseLayout>
    <div slot="header" class="header">
        <SEO
            description={data.resume}
            pageTitle={data.title}
            {url}
            article={true}
            datePublished={data.published.toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
            })}
            lastUpdated={data.updated.toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
            })}
            imgUrl={data.image}
            imgAlt={data.title}
            imgWidth="900"
            imgHeight="500"
        />
        <Header samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
    </div>
    <div slot="main" class="main">
        <Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />

        <Img src={data.image} alt={data.title} rounded={true} />

        <h1>{data.title}</h1>

        <p>
            Publicado em
            {data.published.toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
            })}
            {#if data.updated != ""}
                - Atualizado em
                {data.updated.toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                })}
            {/if}
        </p>

        <div class="post">
            <svelte:component this={data.body} />
        </div>
    </div>
</BaseLayout>

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
        font-size: 0.8rem;
    }

    .main .post {
        display: flex;
        flex-direction: column;
        text-align: justify;
    }

    .post :global(p) {
        margin-bottom: 0.8rem;
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
</style>
