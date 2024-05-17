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

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        {#each data.posts.slice(0, 5) as post}
            <div class="border border-purple-950 rounded-lg overflow-hidden flex flex-col">
                <img src={`/images/posts/${post.slug}/hero.webp`} alt="Imagem do post" />
                <div class="flex flex-col p-6">
                    <div class="mb-3">
                        <a
                            href={`/categories/${post.category
                                .normalize("NFKD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .replace(" ", "-")
                                .toLowerCase()}`}
                            class="bg-purple-950/50 hover:bg-purple-950/40 text-purple-400 hover:text-purple-500 px-2 py-1 rounded text-sm"
                            >{post.category}</a
                        >
                    </div>

                    <a href={`/posts/${post.slug}`} class="text-2xl font-bold hover:text-mint-500">{post.title}</a>
                    <p class="mt-3 opacity-80">{post.description}</p>
                    <div class="border-t border-t-purple-950 pt-3 mt-6 opacity-80 text-xs">
                        Publicado em
                        <FormattedDate date={post.updated ?? post.published} />
                        :: Aprox. {post.readingTime} min
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {#if data.posts.length > 5}
        <Link href="/posts">Ver todas as publicações</Link>
    {/if}
</section>
