<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Renan Lazarotto</title>
</svelte:head>

<section>
    <p class="text-justify mb-6 text-gray-300">
        Programador full-stack de Curitiba, no Paraná, atualmente trabalhando do
        conforto do meu lar para a
        <Link href="https://wlgrupo.com/empresa/hammer/" target="_blank"
            >Hammer Consultoria</Link
        >, convertendo café e requisitos em código e resultados.
    </p>
    <p class="text-justify mb-6 text-gray-300">
        Aqui é o meu pequeno refúgio na internet. Você pode ver um pouquinho
        mais das groselhas que eu tenho pra falar <Link href="/posts">aqui</Link
        >, pode saber mais sobre mim e meu trabalho <Link href="/pages/sobre"
            >aqui</Link
        > ou descobrir qual é meu plano infalível da vez <Link
            href="/pages/agora">aqui</Link
        >.
    </p>
</section>

<section class="my-12">
    <nav class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {#each data.pages as page}
            <div class="text-center">
                <Link href={`/pages/${page.slug}`} class="text-xl">
                    {page.title}
                </Link>
                <p class="text-gray-500">{page.description}</p>
            </div>
        {/each}
    </nav>
</section>

<Divider />

<section>
    <h2 class="text-2xl leading-snug font-bold mb-4">Publicações</h2>

    <div class="flex flex-col gap-8">
        {#each data.posts.slice(0, 5) as post}
            <a
                href={`/posts/${post.slug}`}
                class="flex flex-col lg:flex-row lg:items-center gap-4 group"
            >
                <img
                    src={`/images/posts/${post.slug}/hero.webp`}
                    alt="Imagem do post"
                    class="rounded-lg lg:max-w-64"
                />
                <div class="flex flex-1 flex-col p-4">
                    <h2
                        class="text-2xl font-bold text-mint-300 group-hover:text-purple-400"
                    >
                        {post.title}
                    </h2>
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
                        <FormattedDate date={post.published} />
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
