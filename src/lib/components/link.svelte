<script>
    export let href;
    export let target = "_self";
</script>

<a {href} {target}>
    <slot />
</a>

<style>
    a {
        font-weight: 700;
        color: rgb(229 231 235);
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    a:hover {
        color: rgb(124 58 237);
    }
</style>
