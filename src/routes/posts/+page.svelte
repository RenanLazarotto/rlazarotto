<script lang="ts">
    import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>Todas as publicações</title>
</svelte:head>

<section class="mb-12">
    <h2 class="font-bold text-3xl mt-5 mb-12 text-gray-100">
        Todas as publicações
    </h2>

    <div class="flex flex-col gap-12">
        {#each data.posts as post}
            <a
                href={`/posts/${post.slug}`}
                class="flex flex-col lg:flex-row lg:items-center gap-4 group"
            >
                <img
                    src={`/images/posts/${post.slug}/hero.webp`}
                    alt="Imagem do post"
                    class="rounded-lg lg:max-w-64"
                />
                <div>
                    <h2
                        class="text-2xl font-bold text-mint-300 group-hover:text-purple-400 transition-colors duration-200"
                    >
                        {post.title}
                    </h2>
                    <p class="mt-2 mb-1 text-gray-300">{post.description}</p>

                    <div class="flex gap-2 text-gray-300">
                        {post.category}
                        <p>•</p>
                        <time
                            datetime={post.published?.toISOString() ??
                                post.updated?.toISOString()}
                            class="font-medium"
                        >
                            {formatDate(post.published ?? post.updated)}
                        </time>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>
