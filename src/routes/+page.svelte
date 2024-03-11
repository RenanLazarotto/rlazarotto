<script lang="ts">
    import type { PageData } from "./$types";
    import Container from "$lib/components/Container.svelte";
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";
    import LinkButton from "$lib/components/LinkButton.svelte";

    export let data: PageData;
</script>

<Container>
    <section>
        <h2>E aí, beleza? Eu sou Renan ✌🏻</h2>
        <p>
            Eu sou um programador full-stack brasileiro, e atualmente trabalho
            do conforto do meu lar para a Hammer Consultoria, convertendo café e
            requisitos em código e resultados.
        </p>
        <p>
            Aqui é o meu pequeno refúgio na internet, onde eu compartilho minhas
            paixões, minhas ideias e coisas que são interessantes ou úteis de
            forma geral. Você pode ver um pouquinho mais das groselhas que eu
            tenho pra falar <Link href="/blog">aqui</Link>, pode saber mais
            sobre mim e meu trabalho <Link href="/sobre">aqui</Link> ou descobrir
            qual é meu plano infalível da vez <Link href="/agora">aqui</Link>.
        </p>
    </section>

    <section>
        <h2>📝 Publicações</h2>

        <div class="posts">
            {#each data.posts.slice(0, 5) as post}
                <div class="post">
                    <Link href={`/blog/${post.slug}`} class="flex-1">
                        {post.title}
                    </Link>
                    <FormattedDate date={post.updated || post.published} />
                </div>
            {/each}
        </div>

        {#if data.posts.length > 5}
            <footer>
                <LinkButton href="/blog">
                    Ver todas as publicações
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path
                            d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                        ></path>
                    </svg>
                </LinkButton>
            </footer>
        {/if}
    </section>

    <section>
        <h2>📃 Páginas</h2>
        <div class="pages">
            {#each data.pages as page}
                <LinkButton href={page.slug}>
                    <div class="page">
                        <div class="icon">
                            {page.icon.trim()}
                        </div>
                        <div class="description">
                            <h2>
                                {page.title}
                            </h2>
                            <p>
                                {page.description}
                            </p>
                        </div>
                    </div>
                </LinkButton>
            {/each}
        </div>
    </section>
</Container>

<style>
    section {
        padding-top: var(--size-6);
    }

    h2 {
        font-weight: var(--font-weight-7);
        font-size: var(--font-size-3);
        margin-bottom: var(--size-3);
    }

    p + p {
        margin-top: var(--size-4);
    }

    div.posts {
        display: flex;
        flex-direction: column;
        row-gap: var(--size-4);
    }

    div.post {
        display: flex;
        flex-direction: column;
        row-gap: var(--size-1);
    }

    footer {
        padding-top: var(--size-4);
    }

    div.pages {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: var(--size-4);
        row-gap: var(--size-4);
    }

    div.page {
        display: flex;
        align-items: center;
        column-gap: var(--size-4);
    }

    div.page .icon {
        width: var(--size-8);
        height: var(--size-8);
        background-color: var(--gray-8);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 0;
        vertical-align: middle;
        font-size: var(--font-size-4);
    }

    div.page .description h2 {
        font-weight: var(--font-weight-5);
        text-decoration: underline dotted;
        margin-bottom: var(--size-1);
        font-size: var(--font-size-2);
    }
    div.page .description p {
        font-size: var(--font-size-1);
        color: var(--stone-7);
    }
</style>
