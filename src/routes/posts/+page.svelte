<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Todas as publicações</title>
</svelte:head>

<section class="mb-12">
    <h2 class="font-bold text-2xl mb-6">Todas as publicações</h2>

    <div class="flex flex-col">
        {#each data.posts as post}
            <div
                class="flex [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <div class="pt-2 pb-3 pr-4">
                    <FormattedDate date={post.updated ?? post.published} class="font-light text-sm text-neutral-400" />
                    <p class="text-xs text-purple-500 text-center font-medium">{post.category}</p>
                </div>
                <div class="pt-2 pb-3">
                    <a href={`/posts/${post.slug}`} class="font-bold hover:text-purple-500">
                        {post.title}
                    </a>
                    <p class="leading-tight text-neutral-400 text-sm">{post.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
