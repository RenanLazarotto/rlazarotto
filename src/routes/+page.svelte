<script lang="ts">
    import { goto } from "$app/navigation";
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<section class="mb-12">
    <h2 class="font-bold mb-4">E aí, beleza? Eu sou Renan ✌🏻</h2>
    <p class="text-justify mb-4">
        Eu sou um programador full-stack de Curitiba, no Paraná, e atualmente trabalho do conforto do meu lar para a
        <Link href="https://wlgrupo.com/empresa/hammer/" target="_blank">Hammer Consultoria</Link>, convertendo café e
        requisitos em código e resultados.
    </p>
    <p class="text-justify">
        Aqui é o meu pequeno refúgio na internet, onde eu compartilho minhas paixões, minhas ideias e coisas que são
        interessantes ou úteis de forma geral. Você pode ver um pouquinho mais das groselhas que eu tenho pra falar <Link
            href="/blog">aqui</Link
        >, pode saber mais sobre mim e meu trabalho <Link href="/sobre">aqui</Link> ou descobrir qual é meu plano infalível
        da vez <Link href="/agora">aqui</Link>.
    </p>
</section>

<section class="mb-12">
    <h2 class="font-bold text-2xl mb-4">Páginas e publicações</h2>

    <div class="grid grid-cols-[max-content_minmax(0,1fr)]">
        <div class="pb-2">
            <p class="uppercase text-xs font-medium text-neutral-600">Páginas</p>
        </div>
        <div />
        {#each data.fixed as post}
            <div
                class="pt-2 pb-3 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <FormattedDate date={post.updated ?? post.published} class="font-light text-sm text-neutral-400" />
            </div>
            <div
                class="pt-2 pb-3 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <a href={post.slug} class="font-bold hover:text-purple-500">
                    {post.title}
                </a>
                <p class="leading-tight text-neutral-400 text-sm">{post.description}</p>
            </div>
        {/each}
        <div class="py-2">
            <p class="uppercase text-xs font-medium text-neutral-600">Publicações</p>
        </div>
        <div />
        {#each data.posts as post}
            <div
                class="pt-2 pb-3 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <FormattedDate date={post.updated ?? post.published} class="font-light text-sm text-neutral-400" />
            </div>
            <div
                class="pt-2 pb-3 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <a href={post.slug} class="font-bold hover:text-purple-500">{post.title}</a>
                <p class="leading-tight text-neutral-400 text-sm">{post.description}</p>
            </div>
        {/each}
    </div>
</section>
