<script lang="ts">
    export let href: string;
    export let target: string = "_self";
</script>

<a {href} {target} class={$$props.class}> <slot /></a>

<style>
    a {
        text-decoration: underline dotted 1px currentColor;
    }

    a:hover {
        text-decoration-color: currentColor;
    }
</style>
