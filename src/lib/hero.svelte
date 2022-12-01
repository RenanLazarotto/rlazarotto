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
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 3rem;
        line-height: 3.25rem;
        font-weight: 800;
        color: var(--white);
    }

    p.subtitle {
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        color: var(--accent);
    }

    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: var(--font-size);
        line-height: var(--line-height);
        color: var(--gray);
        text-align: justify;
        font-weight: 500;
    }

    @media (min-width: 640px) {
        p {
            width: 70%;
        }
    }
</style>
