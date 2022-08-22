<script>
    import Sun from "phosphor-svelte/lib/Sun/Sun.svelte";
    import Moon from "phosphor-svelte/lib/Moon/Moon.svelte";

    import { localStore } from "$lib/localStore";
    import { onMount } from "svelte";

    let isDarkMode = localStore("darkMode", false);

    onMount(async () => {
        if ($isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });

    let toggle = () => {
        if ($isDarkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        $isDarkMode = !$isDarkMode;
    };
</script>

<button
    on:click={toggle}
    class="rounded-md px-2 py-1 transition-colors hover:bg-purple-100 dark:hover:bg-gray-700"
>
    {#if $isDarkMode}
        <Sun class="text-yellow-400 mr-1" weight="duotone" />
    {:else}
        <Moon class="text-purple-600 mr-1" weight="duotone" />
    {/if}
</button>
