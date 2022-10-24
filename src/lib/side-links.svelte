<script>
    import GithubLogo from "phosphor-svelte/lib/GithubLogo/GithubLogo.svelte";
    import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo/LinkedinLogo.svelte";
    import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";

    import VerticalLink from "./components/vertical-link.svelte";
</script>

<section>
    <VerticalLink href="https://github.com/RenanLazarotto" target="_blank">
        <slot name="icon">
            <GithubLogo weight="duotone" width="20" height="20" />
        </slot>
        <div class="vertical">github</div>
    </VerticalLink>

    <VerticalLink
        href="https://www.linkedin.com/in/renanlazarotto/"
        target="_blank"
    >
        <slot name="icon">
            <LinkedinLogo weight="duotone" width="20" height="20" />
        </slot>
        <div class="vertical">linkedin</div>
    </VerticalLink>

    <VerticalLink
        href="mailto:renanlazarotto@gmail.com?subject=Contato via site"
    >
        <slot name="icon">
            <Envelope weight="duotone" width="20" height="20" />
        </slot>
        <div class="vertical">email</div>
    </VerticalLink>

    <div />
</section>

<style>
    section {
        display: flex;
        column-gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    section > div {
        display: none;
    }

    .vertical {
        writing-mode: horizontal-tb;
    }

    @media (min-width: 640px) {
        section {
            row-gap: 0.5rem;
            column-gap: 0px;
            position: fixed;
            bottom: 0px;
            left: auto;
            right: 1.5rem;
            flex-direction: column;
        }

        section > div {
            display: block;
            width: 1px;
            height: 7rem;
            background-color: rgb(167 139 250);
        }

        .vertical  {
            writing-mode: vertical-lr;
        }
    }
</style>
