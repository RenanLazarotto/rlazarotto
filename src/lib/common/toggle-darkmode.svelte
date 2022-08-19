<script>
    import Sun from "phosphor-svelte/lib/Sun/Sun.svelte";
    import Moon from "phosphor-svelte/lib/Moon/Moon.svelte";

    let isDarkMode = false;

    let toggle = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

        isDarkMode = !isDarkMode;
    };
</script>

<button on:click={toggle} class="hover:bg-purple-100 dark:hover:bg-gray-600 p-2 rounded">
    {#if isDarkMode}
        <Sun class="text-yellow-400" weight="duotone" />
    {:else}
        <Moon class="text-purple-600" weight="duotone"/>
    {/if}
</button>
