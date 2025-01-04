<script lang="ts">
    import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto">
    <h2 class="font-bold text-3xl my-5 text-gray-100">{data.meta.title}</h2>
    <p class="mb-3 text-gray-400 font-medium">
        {data.meta.description}
    </p>
    <div class="flex gap-2 mb-12 text-xs text-gray-500">
        <time datetime={data.meta.published.toISOString()}>
            {formatDate(data.meta.published)}
        </time>
        {#if data.meta.updated}
            <p>•</p>
            <p>
                Atualizado em <time datetime={data.meta.updated.toISOString()}>
                    {formatDate(data.meta.updated)}
                </time>
            </p>
        {/if}
    </div>

    <section class="prose prose-invert mb-16 prose-hr:border-dashed max-w-none">
        <data.content />
    </section>
</article>
