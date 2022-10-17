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
                    <td class="year responsive">
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
                    <td class="stack">
                        {#each project.stack as tech, i}
                            <span>
                                {tech}
                                {#if i < project.stack.length - 1}
                                    <span class="separator">·</span>
                                {/if}
                            </span>
                        {/each}
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

    thead > tr > th {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-align: left;
    }

    thead > tr > th.responsive {
        display: none;
    }

    tbody tr {
        border-radius: 1rem;
    }

    tbody tr:hover {
        background-color: rgb(31 41 55 / 0.5);
    }

    tbody > tr > td {
        padding: 0.5rem 0.25rem;
        color: rgb(156 163 175);
    }

    tbody > tr > td.responsive {
        display: none;
    }

    tbody > tr > td.title {
        color: rgb(229 231 235);
    }

    tbody > tr > td.title > p {
        font-weight: 700;
    }

    tbody > tr > td.title > div {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(107 114 128);
    }

    tbody > tr > td.title > div.responsive {
        display: table-cell;
    }

    tbody > tr > td.title div > span {
        font-weight: 700;
        color: rgb(139 92 246);
    }

    tbody > tr > td.year {
        font-weight: 500;
        color: rgb(139 92 246);
    }

    tbody > tr > td.stack {
        font-size: 0.75rem;
        line-height: 1rem;
        padding: 0.75rem 0.5rem;
    }

    tbody > tr > td.stack > span {
        display: inline-block;
    }

    tbody > tr > td.stack > span > span.separator {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }

    @media (min-width: 640px) {
        thead > tr > th.responsive {
            display: block;
        }

        tbody > tr > td.responsive {
            display: table-cell;
        }

        tbody > tr > td.title > div.responsive {
            display: none;
        }
    }
</style>
