<script lang="ts">
    export let href: string;
    export let target: string = "_self";
</script>

<a {href} {target}>
    <slot />
</a>

<style>
    a {
        font-size: var(--font-size-1);
        padding: var(--size-3);
        border: 1px solid var(--gray-8);
        border-radius: var(--radius-2);
        transition: all 300ms ease-in-out;
        display: inline-flex;
        align-items: center;
        gap: var(--size-1);
    }

    a:hover {
        background-color: var(--gray-10);
    }
</style>
