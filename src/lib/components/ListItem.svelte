<script lang="ts">
    export let showLine: boolean = true;
</script>

<div
    class:items-center={showLine && $$slots.left && $$slots.right}
    class:gap-4={showLine && $$slots.left && $$slots.right}
    class="flex {$$props.class}"
>
    {#if $$slots.left && $$slots.right}
        <slot name="left" />
        {#if showLine}
            <hr class="flex-1 border-dashed border-gray-800" />
        {:else}
            <div class="flex-1" />
        {/if}
        <slot name="right" />
    {:else}
        <slot />
    {/if}
</div>
