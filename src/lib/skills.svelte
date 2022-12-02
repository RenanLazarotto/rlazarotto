<script>
    import SectionTitle from "./components/section-title.svelte";

    export let stack;
</script>

<section>
    <SectionTitle id="skills">Habilidades</SectionTitle>

    {#each Object.entries(stack) as [title, items]}
        <p class="name">{title}:</p>
        <div class="skills-grid">
            {#each items as item}
                <div class="card">
                    <svelte:component this={item.icon} />
                    {item.name}
                </div>
            {/each}
        </div>
    {/each}
</section>

<style>
    section {
        margin-bottom: var(--section-margin);
    }

    div.skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 8px;
        row-gap: 8px;
    }

    div.card {
        column-gap: 1rem;
        padding: 1rem;
        background-color: var(--background-hover);
        text-align: center;
        display: flex;
        align-items: center;
        border-radius: 4px;
        color: var(--white);
    }

    p.name {
        line-height: 1.625;
        font-size: var(--font-size);
        line-height: var(--line-height);
        font-weight: 500;
        padding-top: 1.5rem;
        padding-bottom: 0.25rem;
        color: var(--accent);
    }

    @media (min-width: 640px) {
        div.skills-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
