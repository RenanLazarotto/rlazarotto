<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Páginas</title>
</svelte:head>

<ul class="flex gap-2 text-xs text-neutral-400 font-medium mb-5">
    <li><a href="/">Início</a></li>
    <li><span class="material-symbols-rounded"> arrow_forward_ios </span></li>
    <li><a href="/pages">Páginas</a></li>
</ul>

<section class="mb-12">
    <h2 class="font-bold text-2xl mb-4">Páginas</h2>

    <div class="flex flex-col">
        {#each data.pages as page}
            <div
                class="flex [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <div class="pt-2 pb-3 pr-4">
                    <FormattedDate date={page.updated ?? page.published} class="font-light text-sm text-neutral-400" />
                </div>
                <div class="pt-2 pb-3">
                    <a href={`/pages/${page.slug}`} class="font-bold hover:text-purple-500">
                        {page.title}
                    </a>
                    <p class="leading-tight text-neutral-400 text-sm">{page.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
