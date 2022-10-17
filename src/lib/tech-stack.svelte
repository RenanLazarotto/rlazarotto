<script>
    import SectionTitle from "./components/section-title.svelte";
    import ProgressBar from "./components/progress-bar.svelte";

    export let stack;
</script>

<section>
    <SectionTitle id="stack">Tecnologias</SectionTitle>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Conhecimento</th>
            </tr>
        </thead>
        <tbody>
            {#each stack as tech}
                <tr>
                    <td class="tech">
                        <div>
                            <div>
                                <svelte:component this={tech.icon} />
                            </div>
                            {tech.name}
                        </div>
                    </td>
                    <td class="progress">
                        <ProgressBar progress={tech.knowledge} />
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

    tbody > tr > td {
        padding: 0.5rem 0.25rem;
        color: rgb(156 163 175);
    }

    tbody > tr > td.tech {
        font-weight: 700;
    }

    tbody > tr > td.tech > div {
        display: flex;
        align-items: center;
    }

    tbody > tr > td.tech > div > div {
        display: none;
    }

    tbody > tr > td.progress {
        width: 67%;
    }

    @media (min-width: 640px) {
        tbody > tr > td.tech > div > div {
            display: block;
            margin-right: 0.75rem;
        }
    }
</style>
