<script lang="ts">
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Renan Lazarotto</title>
</svelte:head>

<section class="mb-12">
    <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
            <h2 class="font-bold mb-4">E aí, beleza? Eu sou Renan ✌🏻</h2>
            <p class="text-justify mb-4">
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
        <img
            src="/images/me.jpg"
            alt="Eu, o autor!"
            class="rounded-full w-48 h-48 grayscale border-4 border-neutral-300 shadow-lg shadow-neutral-900"
        />
    </div>
</section>

<section class="mb-12">
    <h2 class="font-bold text-2xl mb-4">Publicações</h2>

    <div class="flex flex-col mt-6 mb-4">
        {#each data.posts.slice(0, 5) as post}
            <div
                class="grid grid-cols-[max-content_minmax(0,1fr)] [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <div class="pt-2 pb-3 pr-4 flex flex-col justify-center">
                    <FormattedDate date={post.updated ?? post.published} class="font-light text-sm text-neutral-400" />
                    <a
                        href={`/categories/${post.category
                            .normalize("NFKD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(" ", "-")
                            .toLowerCase()}`}
                        class="text-xs text-purple-500 hover:text-purple-400 font-semibold">{post.category}</a
                    >
                </div>
                <div class="pt-2 pb-3">
                    <a href={`/posts/${post.slug}`} class="font-bold hover:text-purple-500">{post.title}</a>
                    <p class="leading-tight text-neutral-400 text-sm">{post.description}</p>
                </div>
            </div>
        {/each}
    </div>
    {#if data.posts.length > 5}
        <Link href="/posts">Ver todas as publicações</Link>
    {/if}
</section>
