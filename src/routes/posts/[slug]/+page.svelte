<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-screen-lg mx-auto">
    <h2 class="font-bold text-5xl mt-5 text-gray-100">{data.meta.title}</h2>
    <p class="mt-2 mb-3 text-gray-400 text-xl font-medium">
        {data.meta.description}
    </p>
    <div class="flex gap-2 mb-12 text-xs text-gray-400">
        <FormattedDate date={data.meta.published} class="font-medium" />
        {#if data.meta.updated}
            <p>•</p>
            <p>
                Atualizado em <FormattedDate date={data.meta.updated} class="font-medium" />
            </p>
        {/if}
        <p>•</p>
        <p><b>{data.meta.readingTime} min.</b> de leitura</p>
    </div>

    <section class="article mb-12 text-justify">
        <svelte:component this={data.content} />
    </section>
</article>
