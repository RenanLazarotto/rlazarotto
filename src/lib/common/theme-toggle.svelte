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
    class="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-800 dark:text-white hover:bg-purple-200 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-300"
>
    {#if $isDarkMode}
        <Sun class="text-base text-yellow-400 mr-1" weight="duotone" />
        modo claro
    {:else}
        <Moon class="text-base text-purple-600 mr-1" weight="duotone" />
        modo escuro
    {/if}
</button>
