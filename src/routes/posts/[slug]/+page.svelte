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

<ul class="flex gap-2 text-xs text-neutral-400 font-medium mb-5">
    <li><a href="/">Início</a></li>
    <li><span class="material-symbols-rounded"> arrow_forward_ios </span></li>
    <li><a href="/posts">Publicações</a></li>
    <li><span class="material-symbols-rounded"> arrow_forward_ios </span></li>
    <li>
        <a
            href={`${data.meta.category
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()}`}>{data.meta.title}</a
        >
    </li>
</ul>
<h2 class="font-bold text-4xl mt-5 mb-2">{data.meta.title}</h2>
<p class="mb-2 before:inline-block before:align-middle before:w-8 before:h-0.5 before:mr-2 before:bg-purple-500">
    {data.meta.description}
</p>
<div class="flex gap-6 mb-6 text-xs">
    <p class="text-neutral-500">
        Publicado em <FormattedDate date={data.meta.published} class="font-medium text-neutral-300" />
    </p>
    {#if data.meta.updated}
        <p class="text-neutral-500">
            Última atualização em <FormattedDate date={data.meta.updated} class="font-medium text-neutral-300" />
        </p>
    {/if}
</div>

<article class="article mb-12">
    <svelte:component this={data.content} />
</article>
