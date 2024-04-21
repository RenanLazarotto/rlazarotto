<script lang="ts">
    import type { LayoutData } from "./$types";

    import "@fontsource-variable/archivo";
    import "@fontsource/bebas-neue";
    import "@fontsource-variable/big-shoulders-stencil-display";
    import "@fontsource-variable/material-symbols-rounded";

    import "../app.css";
    import Link from "$lib/components/Link.svelte";
</script>

<div class="max-w-screen-xl mx-auto p-8 flex flex-col min-h-screen bg-neutral-800 shadow-x">
    <header class="mb-4">
        <a href="/" class="text-purple-600 hover:text-purple-400">
            <h1 class="font-compact text-5xl tracking-wide">Renan Lazarotto</h1>
            <div class="uppercase text-lg font-bold text-gray-500 tracking-widest">full stack developer</div></a
        >
    </header>

    <main class="mb-6">
        <slot />
    </main>

    <footer>
        <dl class="grid grid-cols-[max-content_minmax(0,1fr)] text-sm">
            <dt
                class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                Desenvolvido por
            </dt>
            <dd
                class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                Renan Lazarotto
            </dd>
            <dt
                class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                Código fonte
            </dt>
            <dd
                class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                <Link href="https://github.com/RenanLazarotto/rlazarotto" target="_blank">
                    RenanLazarotto/rlazarotto
                </Link>
            </dd>

            <dt
                class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                Versão
            </dt>
            <dd
                class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
            >
                2024.04.15
            </dd>
        </dl>
    </footer>
</div>
