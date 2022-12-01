<script>
    export let href;
    export let target = "_self";
    export let muted = false;
</script>

<a {href} {target} class:muted>
    <slot />
</a>

<style>
    a {
        font-weight: 700;
        color: var(--link);
        transition: all ease-in-out 300ms;
        font-family: var(--font-highlight);
    }

    a.muted {
        color: var(--link-muted);
    }

    a:hover {
        color: var(--link-hover);
        text-shadow: var(--link-shadow)
    }
</style>
