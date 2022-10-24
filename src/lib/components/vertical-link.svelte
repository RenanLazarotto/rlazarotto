<script>
    export let href;
    export let target = "_self";
</script>

<a {href} {target}>
    <slot name="icon" />
    <slot />
</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        row-gap: 0.25rem;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
        padding: 0.5rem;
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    a:hover {
        color: rgb(124 58 237);
    }

</style>
