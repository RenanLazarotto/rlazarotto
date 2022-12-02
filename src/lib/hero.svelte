<script>
    import Link from "./components/link.svelte";
</script>

<section>
    <p class="subtitle">Olá! Eu me chamo</p>
    <h1>Renan Lazarotto</h1>
    <p>
        Eu sou um programador Web especializado em backends e APIs escritas em
        PHP. Atualmente, estou trabalhando na <Link
            href="https://wlgrupo.com/empresa/hammer/">Hammer Consultoria</Link
        >.
    </p>
</section>

<style>
    section {
        margin-bottom: var(--section-margin);
    }

    h1 {
        color: var(--white);
        font-size: var(--hero-size);
        font-weight: 800;
        line-height: 3.25rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    p.subtitle {
        color: var(--accent);
        font-size: var(--font-size);
        font-weight: 500;
        line-height: var(--line-height);
        margin-bottom: 1.5rem;
    }

    p {
        color: var(--gray);
        font-size: var(--font-size);
        font-weight: 500;
        line-height: var(--line-height);
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-align: justify;
    }

    @media (min-width: 640px) {
        p {
            width: 70%;
        }
    }
</style>
