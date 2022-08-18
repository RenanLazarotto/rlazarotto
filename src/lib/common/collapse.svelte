<script>
    import { slide } from "svelte/transition";

    export let open = false;
    export let classes;

    function toggle() {
        open = !open;
    }
</script>

<div>
    <div class={classes} on:click={toggle}>
        <slot name="trigger" {open} />
    </div>
    
    {#if open}
        <div transition:slide>
            <slot />
        </div>
    {/if}
</div>