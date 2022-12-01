<script>
    import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
    import GithubLogo from "phosphor-svelte/lib/GithubLogo/GithubLogo.svelte";
    import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo/LinkedinLogo.svelte";
    import Link from "./components/link.svelte";
</script>

<footer>
    <p>
        <Link href="https://github.com/RenanLazarotto/site" muted={true}>
            Desenvolvido por Renan Lazarotto
        </Link>
    </p>
    <div>
        <Link
            href="https://github.com/RenanLazarotto"
            target="_blank"
            muted={true}
        >
            <GithubLogo weight="duotone" width="32" height="32" />
        </Link>

        <Link
            href="https://www.linkedin.com/in/renanlazarotto/"
            target="_blank"
            muted={true}
        >
            <LinkedinLogo weight="duotone" width="32" height="32" />
        </Link>

        <Link
            href="mailto:renanlazarotto@gmail.com?subject=Contato via site"
            muted={true}
        >
            <Envelope weight="duotone" width="32" height="32" />
        </Link>
    </div>
</footer>

<style>
    footer {
        padding-top: 4rem;
        padding-bottom: 2rem;
        text-align: center;
        width: 92%;
        margin-left: auto;
        margin-right: auto;
    }

    footer > p {
        color: var(--text-muted);
        margin-bottom: 16px;
        font-size: 0.75rem;
        line-height: 1rem;
    }

    footer div {
        display: flex;
        justify-content: center;
        column-gap: 16px;
    }
</style>
