<script>
    import SectionTitle from "./components/section-title.svelte";
    import ProgressBar from "./components/progress-bar.svelte";

    export let stack;
</script>

<section class="mb-32">
    <SectionTitle id="stack">Tecnologias</SectionTitle>
    <table class="table-auto min-w-full cursor-default">
        <thead>
            <tr class="text-gray-500 font-bold">
                <th class="py-1 sm:py-3 px-2 text-left">Nome</th>
                <th class="py-1 sm:py-3 px-2 text-left">Conhecimento</th>
            </tr>
        </thead>
        <tbody>
            {#each stack as tech}
                <tr>
                    <td class="font-bold py-1 sm:py-3 px-2">
                        <div class="flex items-center">
                            <div class="hidden sm:block mr-3">
                                <svelte:component this={tech.icon} />
                            </div>
                            {tech.name}
                        </div>
                    </td>
                    <td class="py-1 sm:py-3 px-2 w-2/3">
                        <ProgressBar progress={tech.knowledge} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>
