<script>
    export let icon;
    export let text;
</script>

<div class="inline-flex items-center justify-start mb-2">
    <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
        <svelte:component
            this={icon}
            weight="duotone"
            class="text-purple-600 dark:text-purple-400 text-5xl p-3"
        />
    </div>
    <h2
        class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
    >
        {text}
    </h2>
</div>
