<script lang="ts">
    import { formatDateToString } from "$lib/utils.js";

    export let data;
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="max-w-screen-lg mx-auto px-4 md:px-8">
    <h1 class="font-bold text-2xl sm:text-4xl mb-2">{data.meta.title}</h1>

    <!-- Post -->
    <article class="article">
        <svelte:component this={data.content} />
    </article>
</section>
