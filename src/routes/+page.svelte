<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Renan Lazarotto</title>
</svelte:head>

<section class="mb-12 text-lg">
    <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
            <h2 class="font-bold mb-8 text-3xl">E aí, beleza? Eu sou Renan ✌🏻</h2>
            <p class="text-justify mb-6">
                Eu sou um programador full-stack de Curitiba, no Paraná, e atualmente trabalho do conforto do meu lar
                para a
                <Link href="https://wlgrupo.com/empresa/hammer/" target="_blank">Hammer Consultoria</Link>, convertendo
                café e requisitos em código e resultados.
            </p>
            <p class="text-justify">
                Aqui é o meu pequeno refúgio na internet, onde eu compartilho minhas paixões, minhas ideias e coisas que
                são interessantes ou úteis de forma geral. Você pode ver um pouquinho mais das groselhas que eu tenho
                pra falar <Link href="/blog">aqui</Link>, pode saber mais sobre mim e meu trabalho <Link href="/sobre"
                    >aqui</Link
                > ou descobrir qual é meu plano infalível da vez <Link href="/agora">aqui</Link>.
            </p>
        </div>
        <div class="rounded-full w-64 h-64 overflow-hidden">
            <img src="/images/me.jpg" alt="Eu, o autor!" class="grayscale" />
        </div>
    </div>
</section>

<section class="mb-12">
    <h2 class="font-bold text-2xl mb-4">Publicações</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.posts.slice(0, 5) as post}
            <a href={`/posts/${post.slug}`} class="flex flex-col group">
                <img src={`/images/posts/${post.slug}/hero.webp`} alt="Imagem do post" class="rounded-lg" />
                <div class="flex flex-1 flex-col p-4">
                    <h2 class="text-2xl font-bold text-mint-300 group-hover:text-purple-400">{post.title}</h2>
                    <p class="mt-3">{post.description}</p>
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
    {#if data.posts.length > 5}
        <Link href="/posts">Ver todas as publicações</Link>
    {/if}
</section>
