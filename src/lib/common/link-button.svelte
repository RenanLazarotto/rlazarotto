<script>
    export let href;
    export let text;
    export let classes;
    export let icon;
    export let iconClass;
</script>

<a {href} class={classes}>
    {#if typeof icon !== undefined}
        <svelte:component
            this={icon}
            class={iconClass}
            weight="duotone"
        />
    {/if}
    {text}
</a>
