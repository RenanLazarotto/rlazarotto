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

<h2 class="font-bold text-4xl mt-5 text-purple-100">{data.meta.title}</h2>
<p class="mt-2 mb-4 text-purple-500 text-lg">
    {data.meta.description}
</p>
<div class="flex gap-6 mb-12 text-xs">
    <p class="text-purple-400">
        <FormattedDate date={data.meta.published} class="font-medium" />
        • <b>{data.meta.readingTime} min.</b> de leitura
    </p>
    {#if data.meta.updated}
        <p class="text-neutral-500">
            Última atualização em <FormattedDate date={data.meta.updated} class="font-medium" />
        </p>
    {/if}
</div>

<article class="article mb-12">
    <svelte:component this={data.content} />
</article>
