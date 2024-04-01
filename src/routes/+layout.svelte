<script lang="ts">
    import "@fontsource/ibm-plex-sans";
    import "../app.css";
    import FormattedDate from "$lib/components/FormattedDate.svelte";
    import Link from "$lib/components/Link.svelte";

    export let data;
</script>

<div class="max-w-screen-xl mx-auto py-12 flex flex-col min-h-screen">
    <header class="mb-6">
        <h1 class="text-6xl font-bold">
            <a href="/" class="hover:underline hover:decoration-dotted hover:text-rose-300">Renan Lazarotto</a>
        </h1>
        <p class="text-lg text-purple-500">Desenvolvedor web full-stack na Hammer</p>
    </header>

    <section class="flex-1 flex gap-6">
        <aside class="w-1/5">
            <ul class="mb-6 flex flex-col gap-2">
                {#each data.pages as page}
                    <li>
                        <Link href={`/${page.slug}`}>
                            {page.title}
                        </Link>
                    </li>
                {/each}
            </ul>
            <p class="text-gray-500 text-sm mb-3">Últimas publicações</p>
            <ul>
                {#each data.posts as post}
                    <li class="flex flex-col">
                        <Link href={"/blog/" + post.slug}>
                            <b>{post.title}</b>
                        </Link>
                        <FormattedDate date={post.updated ?? post.published} class="text-accent" />
                    </li>
                {/each}
                <li class="mt-3">
                    <Link href="/blog">Ver mais</Link>
                </li>
            </ul>
        </aside>

        <main class="w-4/5 mb-6">
            <slot />
        </main>
    </section>

    <footer>Renan Lazarotto &copy; {new Date().getFullYear()}</footer>
</div>
