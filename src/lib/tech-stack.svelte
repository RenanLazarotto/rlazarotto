<script>
    import Link from "./components/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";
    import ProgressBar from "./progress-bar.svelte";

    export let stack;
</script>

<section class="mb-20">
    <div class="flex items-center gap-x-2 mt-3 mb-9">
        <span
            class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
        />
        <p id="stack" class="font-bold text-2xl">Tecnologias que uso</p>
        <span
            class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
        />
    </div>
    <table class="table-auto min-w-full cursor-default">
        <thead>
            <tr class="text-gray-400 dark:text-gray-500 font-bold">
                <th class="py-3 px-2 text-left">Nome</th>
                <th class="py-3 px-2 text-left">Conhecimento</th>
                <th class="py-3 px-2 text-left">Link</th>
            </tr>
        </thead>
        <tbody>
            {#each stack as tech}
                <tr class="hover:bg-purple-100 dark:hover:bg-gray-800">
                    <td class="font-bold py-3 px-2 rounded-l w-2/6">
                        <div class="flex items-center gap-x-2">
                            <svelte:component this={tech.icon} />
                            {tech.name}
                        </div>
                    </td>
                    <td
                        class="text-gray-400 dark:text-gray-500 py-3 px-2 w-3/6"
                    >
                    <ProgressBar progress={tech.knowledge} />
                    </td>
                    <td class="rounded-r py-3 px-2 w-1/6">
                        {#if tech.link !== ""}
                            <Link href={tech.link} target="_blank">
                                <ArrowSquareOut weight="duotone" />
                            </Link>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>
