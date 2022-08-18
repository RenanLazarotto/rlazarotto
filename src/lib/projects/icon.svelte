<script>
    import LockKey from "phosphor-svelte/lib/LockKey/LockKey.svelte";
    import LockOpen from "phosphor-svelte/lib/LockOpen/LockOpen.svelte";

    export let openSource;
</script>

<div class={`md:w-1/6 flex flex-col rounded-l justify-center items-center ${openSource ? "bg-purple-700" : "bg-blue-700"}`}>
    {#if openSource}
        <LockOpen
            class="text-purple-200 w-8 h-8 md:w-16 md:h-16"
            weight="duotone"
        />
    {:else}
        <LockKey
            class="text-blue-300 w-8 h-8 md:w-16 md:h-16"
            weight="duotone"
        />
    {/if}
    <p class={`text-center md:text-left mx-1 md:mx-0 px-1 md:px-3 py-1 rounded-full text-xs font-bold ${openSource ? "text-purple-200 bg-purple-600" : "text-blue-200 bg-blue-600"}`}>
        {openSource ? "open source" : "proprietário"}
    </p>
</div>
