<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<h2 class="font-bold text-2xl mb-6">{data.meta.title}</h2>

<article class="article">
    <svelte:component this={data.content} />
</article>
