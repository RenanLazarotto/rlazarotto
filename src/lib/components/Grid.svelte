<script lang="ts">
    export let columns: number = 2;
</script>

<div style="--columns: {columns}">
    <slot />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        column-gap: var(--gap);
    }
</style>
