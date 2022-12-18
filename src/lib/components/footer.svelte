<script>
    import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
    import GithubLogo from "phosphor-svelte/lib/GithubLogo/GithubLogo.svelte";
    import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo/LinkedinLogo.svelte";
    import Link from "./link.svelte";
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
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 2rem;
        padding-top: 2rem;
        text-align: center;
        width: 92%;
    }

    footer > p {
        color: var(--text-muted);
        font-size: 0.75rem;
        line-height: 1rem;
        margin-bottom: 16px;
    }

    footer div {
        column-gap: 16px;
        display: flex;
        justify-content: center;
    }
</style>
