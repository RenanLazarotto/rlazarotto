<script>
    import Link from "$lib/common/link.svelte";

    export let openSource;
    export let title;
    export let description;
    export let repoUrl;
    export let stack;
</script>

<div
    class="border border-gray-300 dark:border-purple-500 rounded-md p-4 flex flex-col justify-between w-full"
>
    <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
            <p class="font-bold text-xl">{title}</p>
            {#if openSource}
                <Link href={repoUrl} text="Código fonte" />
            {/if}
        </div>
        <p>{description}</p>
    </div>
    {#if stack.length > 0}
        <div>
            <p class="mb-1">Tecnologias:</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
                {#each stack as item}
                    <svelte:component this={item} width="32" height="32"/>
                {/each}
            </div>
        </div>
    {/if}
</div>
