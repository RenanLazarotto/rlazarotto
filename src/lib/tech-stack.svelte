<script>
    import SectionTitle from "./components/section-title.svelte";

    export let stack;
</script>

<section>
    <SectionTitle id="stack">Tecnologias</SectionTitle>

    {#each Object.entries(stack) as [title, items]}
        <p class="name">{title}:</p>
        <div class="tech-grid">
            {#each items as item}
                <div class="card">
                    <svelte:component this={item.icon} />
                    {item.name}
                </div>
            {/each}
        </div>
    {/each}

    <!-- <table>
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
    </table> -->
</section>

<style>
    section {
        margin-bottom: 6rem;
    }

    div.tech-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 8px;
        row-gap: 8px;
    }

    div.card {
        column-gap: 1rem;
        padding: 1rem;
        background-color: rgb(31 41 55 / 0.5);
        text-align: center;
        display: flex;
        align-items: center;
        border-radius: 4px;
    }

    p.name {
        line-height: 1.625;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 500;
        padding-top: 1.5rem;
        padding-bottom: 0.25rem;
    }

    @media (min-width: 640px) {
        div.tech-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
