<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import NotByIA from "$lib/components/NotByIA.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<h2 class="font-medium text-3xl my-5 text-gray-100">{data.meta.title}</h2>
<div class="flex flex-col sm:flex-row gap-2 mb-12 text-xs text-gray-400">
    <FormattedDate date={data.meta.published} class="font-medium" />
    {#if data.meta.updated}
        <p class="hidden sm:contents">•</p>
        <p>
            Atualizado em <FormattedDate date={data.meta.updated} class="font-medium" />
        </p>
    {/if}
    <p class="hidden sm:contents">•</p>
    <p><b>{data.meta.readingTime} min.</b> de leitura</p>
</div>

<section class="prose prose-invert mb-16 prose-hr:border-dashed text-justify max-w-none">
    <svelte:component this={data.content} />
</section>

<NotByIA />
