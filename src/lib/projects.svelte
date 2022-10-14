<script>
    import Link from "./components/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";
    import SectionTitle from "./components/section-title.svelte";

    export let projects;
</script>

<section>
    <SectionTitle id="projects">Projetos</SectionTitle>

    <table>
        <thead>
            <tr>
                <th class="responsive">Ano</th>
                <th>Título</th>
                <th class="responsive">Feito em</th>
                <th>Tecnologias</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            {#each projects as project}
                <tr>
                    <td class="responsive year">
                        {project.year}
                    </td>
                    <td class="title">
                        <p>{project.title}</p>
                        <div class="responsive">
                            <span>
                                {project.year}
                            </span>
                            {#if project.at !== "-"}
                                @ {project.at}
                            {/if}
                        </div>
                    </td>
                    <td class="responsive">
                        {project.at}
                    </td>
                    <td>
                        <ul
                            class="flex sm:flex-row gap-x-1 text-xs py-3 px-2 sm:list-none list-inside"
                        >
                            {#each project.stack as tech, i}
                                <li>
                                    {tech}
                                    {#if i < project.stack.length - 1}
                                        <p class="hidden sm:inline-block mx-1">·</p>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </td>
                    <td>
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

<style>
    section {
        margin-bottom: 6rem;
    }

    table {
        table-layout: auto;
        min-width: 100%;
        cursor: default;
    }
    thead > tr {
        color: rgb(107 114 128);
        font-weight: 700;
    }

    thead th {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-align: left;
    }

    thead th.responsive {
        display: none;
    }

    tbody td {
        padding: 0.5rem 0.25rem;
        color: rgb(156 163 175);
    }

    tbody tr {
        border-radius: 1rem;
    }

    tbody tr:hover {
        background-color: rgb(31 41 55 / 0.5);
    }

    tbody td.title {
        color: rgb(229 231 235);
    }

    tbody td.title p {
        font-weight: 700;
    }

    tbody td.title div {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(107 114 128);
    }

    tbody td.title div > span {
        font-weight: 700;
        color: rgb(139 92 246);
    }

    tbody td.title > div.responsive {
        display: table-cell;
    }

    tbody td.responsive {
        display: none;
    }

    tbody td.year {
        font-weight: 500;
        color: rgb(139 92 246);
    }

    @media (min-width: 640px) {
        thead th.responsive {
            display: block;
        }

        tbody td.responsive {
            display: table-cell;
        }

        tbody td.title > div.responsive {
            display: none;
        }
    }
</style>
