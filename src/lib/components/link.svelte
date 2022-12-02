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
        color: var(--link);
        font-family: var(--font-highlight);
        font-weight: 700;
        transition: all ease-in-out 300ms;
    }

    a.muted {
        color: var(--link-muted);
    }

    a:hover {
        color: var(--link-hover);
        text-shadow: var(--link-shadow)
    }
</style>
