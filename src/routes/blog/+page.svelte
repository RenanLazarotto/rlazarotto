<script>
    import { page } from "$app/stores";

    import Base from "$lib/layouts/base.svelte";
    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    export let data;

    let url = $page.url.href;
</script>

<Base>
    <div slot="header">
        <SEO pageTitle="Blog" description="Postagens do meu blog." {url} />
        <Header navLinks={data.navLinks} />
    </div>
    <div slot="main" class="main">
        <Sidebar navLinks={data.navLinks} />
        <h1>Últimas postagens</h1>
        <div class="posts">
            {#each data.posts as post}
                <a href={`/blog/${post.slug}`}>
                    <div class="post">
                        <img
                            src={post.image}
                            alt="Imagem de destaque do post"
                        />
                        <div class="heading">
                            <h2>{post.title}</h2>
                            <span
                                >{post.date.toLocaleString("pt-BR", {
                                    dateStyle: "short",
                                    timeStyle: "short",
                                })}</span
                            >
                        </div>
                        <div class="content">
                            {post.resume}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</Base>

<style>
    .main {
        padding-top: 6rem;
    }

    h1 {
        color: var(--white);
        text-align: center;
        padding-bottom: 2rem;
    }

    .posts {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        flex-direction: column;
        gap: 2rem;
    }

    .posts .post {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
    }

    .post img {
        border-radius: var(--border-radius);
    }

    .post .heading h2 {
        color: var(--primary);
        font-size: 1.2rem;
        padding: 0;
        margin: 0;
    }

    .post .heading h2:hover {
        color: var(--accent);
    }

    .post .heading span {
        display: inline-block;
        color: var(--gray);
        font-size: 0.75rem;
        text-align: center;
    }

    .post .content {
        color: var(--white);
    }

    @media (max-width: 640px) {
        .posts {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>
