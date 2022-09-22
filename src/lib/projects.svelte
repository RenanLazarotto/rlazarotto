<script>
    import Link from "./components/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";

    export let projects;
</script>

<section class="mb-20">
    <div class="flex items-center gap-x-2 mt-3 mb-9">
        <span
            class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
        />
        <p id="projects" class="font-bold text-2xl">Projetos em que trabalhei</p>
        <span
            class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
        />
    </div>
    <table class="table-auto min-w-full cursor-default">
        <thead>
            <tr class="text-gray-400 dark:text-gray-500 font-bold">
                <th class="py-3 px-2">Ano</th>
                <th class="py-3 px-2 text-left">Título</th>
                <th class="py-3 px-2 text-left">Feito em</th>
                <th class="py-3 px-2 text-left">Tecnologias</th>
                <th class="py-3 px-2 text-left">Link</th>
            </tr>
        </thead>
        <tbody>
            {#each projects as project}
                <tr class="hover:bg-purple-100 dark:hover:bg-gray-800">
                    <td
                        class="font-medium text-center text-purple-600 dark:text-purple-500 py-3 px-2 rounded-l"
                        >{project.year}</td
                    >
                    <td class="font-bold py-3 px-2">{project.title}</td>
                    <td class="text-gray-400 dark:text-gray-500 py-3 px-2"
                        >{project.at}</td
                    >
                    <td class="text-gray-400 dark:text-gray-500 py-3 px-2">
                        <ul class="inline-flex gap-x-1 text-xs py-3 px-2">
                            {#each project.stack as tech, i}
                                <li>
                                    {tech}
                                    {#if i < project.stack.length - 1}
                                        ╌
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </td>
                    <td class="rounded-r py-3 px-2">
                        {#each project.links as link}
                            <Link href={link} target="_blank">
                                <ArrowSquareOut weight="duotone" />
                            </Link>
                        {/each}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>
