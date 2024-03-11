<script lang="ts">
    export let href: string;
    export let target: string = "_self";

    export let active: boolean = false;
</script>

<a class:active {href} {target} class={$$props.class}>
    <slot />
</a>

<style>
    a {
        font-weight: var(--font-weight-5);
        color: var(--stone-9);
        text-decoration: none;
    }

    a:hover {
        color: var(--purple-10);
    }

    a.active {
        color: var(--purple-10);
        text-decoration: underline dotted 1px var(--purple-9);
    }
</style>
