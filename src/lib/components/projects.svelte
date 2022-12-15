<script>
    import Link from "./link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";
    import FileCode from "phosphor-svelte/lib/FileCode/FileCode.svelte";
    import SectionTitle from "./section-title.svelte";

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
                    <td class="links">
                        {#if project.link !== ""}
                            <Link
                                href={project.link}
                                target="_blank"
                                muted={true}
                            >
                            <span class="inline">
                                <ArrowSquareOut weight="duotone" /> Acessar
                            </span>
                            </Link>
                        {/if}
                        {#if project.repo !== ""}
                            <Link
                                href={project.repo}
                                target="_blank"
                                muted={true}
                            >
                            <span class="inline">
                                <FileCode /> Repositório
                            </span>
                            </Link>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    section {
        margin-bottom: var(--section-margin);
    }

    table {
        table-layout: auto;
        min-width: 100%;
        cursor: default;
    }

    thead tr {
        color: var(--gray);
        font-weight: 700;
    }

    thead th {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-bottom: 0.5rem;
        text-align: left;
    }

    thead th.responsive {
        display: none;
    }

    tbody tr td {
        transition: background-color ease-in-out 150ms;
        padding: 1rem 0.5rem;
        color: var(--gray);
    }

    tbody tr td.responsive {
        display: none;
    }

    tbody tr:hover td {
        background-color: var(--background-hover);
    }

    tbody tr td:first-child {
        border-radius: 10px 0 0 10px;
    }

    tbody tr td:last-child {
        border-radius: 0 10px 10px 0;
    }

    td.title {
        border-radius: 10px 0 0 10px;
    }

    td.title p {
        color: var(--white);
        font-weight: 700;
    }

    td.title div {
        font-size: 0.75rem;
        line-height: 1.1rem;
        color: var(--gray);
    }

    td.title div.responsive {
        display: table-cell;
    }

    td.title div > span {
        font-weight: 700;
        color: var(--accent);
    }

    td.year {
        font-weight: 500;
        color: var(--accent);
    }

    td.stack {
        font-size: 0.75rem;
        line-height: 1rem;
        padding: 0.75rem 0.5rem;
    }

    td.stack span {
        display: inline-block;
    }

    td.stack span.separator {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }

    td.links {
        font-size: 0.75rem;
        line-height: 1rem;
        display: table-cell;
    }

    td.links span.inline {
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
    }

    @media (min-width: 640px) {
        thead th.responsive {
            display: block;
        }

        tbody tr td.responsive {
            display: table-cell;
        }

        td.title {
            border-radius: 0;
        }

        td.title > div.responsive {
            display: none;
        }
    }
</style>
