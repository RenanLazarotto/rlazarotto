<script lang="ts">
    import "@fontsource-variable/inter";
    import "../app.css";

    import { ArrowLeft, Coffee } from "lucide-svelte";
    import type { LayoutData } from "./$types";

    interface Props {
        data: LayoutData;
        children?: import("svelte").Snippet;
    }

    let { data, children }: Props = $props();
</script>

<div class="max-w-5xl mx-auto flex flex-col min-h-screen px-8 md:px-4 lg:px-0">
    <header
        class:mb-12={data.url == "/"}
        class="flex justify-between items-center mt-12"
    >
        {#if data.url != "/"}
            <a href="/" class="flex items-center gap-2 mb-12">
                <ArrowLeft size={16} />
                Home
            </a>
        {:else}
            <a href="/" class="font-medium text-3xl">Renan Lazarotto</a>
        {/if}
    </header>

    <main class="flex-1">
        {@render children?.()}
    </main>

    <footer class="pb-16 text-gray-600 text-center">
        <p class="inline-flex items-center gap-1 mb-2">
            Criado com <Coffee size={16} /> por Renan "Firehawk" Lazarotto.
        </p>

        <p class="text-sm">
            Licenciado sobre AGPLv3. Código fonte disponível no
            <a href="https://github.com/RenanLazarotto/rlazarotto">GitHub</a>
        </p>
    </footer>
</div>
