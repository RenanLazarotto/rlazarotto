<script lang="ts">
    import "@fontsource-variable/inter";
    import "../app.css";
    import FormattedDate from "$lib/components/FormattedDate.svelte";

    export let data;
</script>

<div class="wrapper">
    <header class="bg-base-300 rounded-xl shadow overflow-hidden">
        <div class="flex justify-between items-center">
            <div class="flex-shrink">
                <h1 class="text-2xl font-bold px-3 pt-2">Renan Lazarotto</h1>
                <p class="text-sm text-neutral-content px-3 pb-2 border-b border-b-base-100">
                    Desenvolvedor web full-stack na Hammer
                </p>
            </div>
            <ul class="menu menu-horizontal">
                {#each data.pages as page}
                    <li><a href={page.slug}>{page.title}</a></li>
                {/each}
            </ul>
        </div>
        <div class="text-xs breadcrumbs px-3 bg-base-200">
            <ul>
                <li>Início</li>
            </ul>
        </div>
    </header>

    <aside>
        <ul class="menu bg-base-200 rounded-box shadow">
            <li class="menu-title">Últimas publicações</li>
            {#each data.posts as post}
                <li>
                    <a href={post.slug} class="flex flex-col items-start gap-0">
                        <b>{post.title}</b>
                        <FormattedDate date={post.updated ?? post.published} class="text-accent" />
                    </a>
                </li>
            {/each}
            <li><a href="/blog"> Ver mais</a></li>
        </ul>
    </aside>

    <main>
        <slot />
    </main>

    <footer>Renan Lazarotto &copy; {new Date().getFullYear()}</footer>
</div>

<style>
    .wrapper {
        display: grid;
        height: 100vh;
        gap: 24px;
        grid-template-columns: 6rem 20rem 1fr 6rem;
        grid-template-rows: 3rem auto 1fr auto 3rem;
        grid-template-areas:
            ". . . ."
            ". header header ."
            ". sidebar content ."
            ". footer footer ."
            ". . . .";
    }

    header {
        grid-area: header;
    }

    aside {
        grid-area: sidebar;
    }

    main {
        grid-area: content;
    }

    footer {
        grid-area: footer;
    }
</style>
