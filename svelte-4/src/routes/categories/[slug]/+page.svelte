<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Publicações da categoria {data.category}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Publicações da categoria {data.category}" />
</svelte:head>

<h2 class="font-medium text-3xl my-5 text-gray-100">Publicações da categoria "{data.category}"</h2>

<div class="flex flex-col gap-8">
    {#each data.posts as post}
        <a href={`/posts/${post.slug}`} class="flex group">
            <img src={`/images/posts/${post.slug}/hero.webp`} alt="Imagem do post" class="rounded-lg lg:max-w-64" />
            <div class="flex flex-1 flex-col p-4">
                <h2 class="text-2xl font-bold text-mint-300 group-hover:text-purple-400">{post.title}</h2>
                <p class="mt-3 text-gray-300">{post.description}</p>
                <span class="flex-1" />

                <div class="mt-6 text-xs flex gap-2 text-gray-500">
                    <Link
                        href={`/categories/${post.category
                            .normalize("NFKD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(" ", "-")
                            .toLowerCase()}`}>{post.category}</Link
                    >
                    <p>•</p>
                    <FormattedDate date={post.updated ?? post.published} />
                    <p>•</p>
                    <p><b>{post.readingTime} min.</b> de leitura</p>
                </div>
            </div>
        </a>
    {/each}
</div>
