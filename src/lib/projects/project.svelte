<script>
    import Link from "$lib/common/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";

    export let year;
    export let title;
    export let at;
    export let stack;
    export let links;
</script>

<tr class="hover:bg-purple-100 dark:hover:bg-gray-800">
    <td
        class="font-medium text-center text-purple-600 dark:text-purple-400 py-3 px-2 rounded-l"
        >{year}</td
    >
    <td class="font-bold py-3 px-2">{title}</td>
    <td class="text-gray-400 dark:text-gray-500 py-3 px-2">{at}</td>
    <td class="text-gray-400 dark:text-gray-500 py-3 px-2">
        <ul class="inline-flex gap-x-1 text-xs py-3 px-2">
            {#each stack as tech, i}
                <li>
                    {tech}
                    {#if i < stack.length -1}
                    ╌
                    {/if}
                </li>
            {/each}
        </ul>
    </td>
    <td class="rounded-r py-3 px-2">
        {#each links as link}
            <Link href={link}>
                <ArrowSquareOut weight="duotone" />
            </Link>
        {/each}
    </td>
</tr>
