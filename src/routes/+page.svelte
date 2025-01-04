<script lang="ts">
    import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>Renan Lazarotto</title>
</svelte:head>

<section>
    <p>
        Programador full-stack de Curitiba, no Paraná, atualmente trabalhando do
        conforto do meu lar, convertendo café e requisitos em código e
        resultados.
    </p>
    <p>
        Aqui é o meu pequeno refúgio na internet. Você pode ver um pouquinho
        mais das groselhas que eu tenho pra falar <a href="/posts">aqui</a>,
        pode saber mais sobre mim e meu trabalho <a href="/sobre">aqui</a>
        ou descobrir qual é meu plano infalível da vez
        <a href="/agora">aqui</a>.
    </p>
</section>

<section class="my-12">
    <nav class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div class="text-center">
            <a href="/agora" class="text-xl"> Agora </a>
            <p class="text-gray-500">Objetivos a curto-prazo</p>
        </div>
        <div class="text-center">
            <a href="/sobre" class="text-xl"> Sobre </a>
            <p class="text-gray-500">Sobre mim além da tela</p>
        </div>
        <div class="text-center">
            <a href="/um-dia" class="text-xl"> Um dia </a>
            <p class="text-gray-500">Desejos para o futuro</p>
        </div>
    </nav>
</section>

<hr />

<section>
    <h2 class="text-2xl leading-snug font-bold mb-4">Publicações</h2>

    <div class="flex flex-col gap-8 mb-8">
        {#each data.posts.slice(0, 5) as post}
            <div class="flex flex-col lg:flex-row lg:items-center gap-4">
                <img
                    src={`/images/posts/${post.slug}/hero.webp`}
                    alt="Imagem do post"
                    class="rounded-lg lg:max-w-64"
                />
                <div class="flex flex-1 flex-col m-4">
                    <a
                        href={`/posts/${post.slug}`}
                        class="text-2xl font-bold text-mint-300 hover:text-purple-400"
                    >
                        {post.title}
                    </a>
                    <p class="mt-3 text-gray-300">{post.description}</p>
                    <span class="flex-1"></span>

                    <div class="mt-6 text-xs flex gap-2 text-gray-500">
                        {post.category}
                        <p>•</p>
                        <time datetime={post.published.toISOString()}>
                            {formatDate(post.published)}
                        </time>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="flex justify-center py-8">
        {#if data.posts.length > 5}
            <a
                href="/posts"
                class="py-3 px-4 rounded-md bg-mint-700/20 hover:bg-purple-700/20"
                >Ver todas as publicações</a
            >
        {/if}
    </div>
</section>
