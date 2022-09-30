<script>
    import Link from "./components/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";
    import SectionTitle from "./components/section-title.svelte";

    export let projects;
</script>

<section class="mb-24 sm:mb-48">
    <SectionTitle id="projects">Projetos</SectionTitle>

    <table class="table-auto min-w-full cursor-default">
        <thead>
            <tr class="text-gray-500 font-bold">
                <th class="px-2 hidden sm:block">Ano</th>
                <th class="px-2 text-left">Título</th>
                <th class="px-2 text-left hidden sm:block">Feito em</th>
                <th class="px-2 text-left">Tecnologias</th>
                <th class="px-2 text-left">Link</th>
            </tr>
        </thead>
        <tbody>
            {#each projects as project}
                <tr class="hover:bg-gray-800">
                    <td
                        class="hidden sm:table-cell justify-center items-center font-medium text-purple-500 py-3 px-2"
                    >
                        {project.year}
                    </td>
                    <td class="py-3 px-2"
                        ><p class="font-bold">{project.title}</p>
                        <div class="text-sm text-gray-500 sm:hidden">
                            <span class="font-bold text-purple-500"
                                >{project.year}</span
                            >
                            {#if project.at !== "-"}
                                @ {project.at}
                            {/if}
                        </div>
                    </td>
                    <td class="hidden sm:table-cell text-gray-500 py-3 px-2">
                        {project.at}
                    </td>
                    <td class="text-gray-500 py-3 px-2">
                        <ul
                            class="flex sm:inline-flex flex-col sm:flex-row gap-x-1 text-xs py-3 px-2 list-disc sm:list-none list-inside"
                        >
                            {#each project.stack as tech, i}
                                <li class="flex gap-x-2">
                                    {tech}
                                    {#if i < project.stack.length - 1}
                                        <span class="hidden sm:block">╌</span>
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
