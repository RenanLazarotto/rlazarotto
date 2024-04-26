<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Categorias</title>
</svelte:head>

<ul class="flex gap-2 text-xs text-neutral-400 font-medium mb-5">
    <li><a href="/">Início</a></li>
    <li><span class="material-symbols-rounded"> arrow_forward_ios </span></li>
    <li><a href="/categories">Categorias</a></li>
</ul>
<section class="mb-12">
    <h2 class="font-bold text-2xl mb-4">Categorias</h2>

    <div class="flex flex-col">
        {#each data.categories as category}
            <div
                class="flex [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <div class="pt-2 pb-3">
                    <a href={category.href} class="font-bold hover:text-purple-500">
                        {category.title}
                    </a>
                    <p class="text-xs text-neutral-400 font-medium">
                        {category.count}
                        {category.count > 1 ? "publicações" : "publicação"}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>
