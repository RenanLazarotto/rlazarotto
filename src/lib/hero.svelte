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
        margin-bottom: 6rem;
    }

    h1 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 800;
    }

    p.subtitle {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: rgb(167 139 250);
    }

    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: rgb(156 163 175);
        text-align: justify;
        font-weight: 600;
    }

    @media (min-width: 640px) {
        section {
            margin-bottom: 12rem;
        }

        h1 {
            font-size: 3.75rem;
            line-height: 1;
        }

        p.subtitle {
            margin-bottom: 1.5rem;
        }

        p {
            width: 67%;
        }
    }
</style>
