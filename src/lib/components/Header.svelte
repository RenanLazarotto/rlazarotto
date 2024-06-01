<script lang="ts">
    import Icon from "./Icon.svelte";
    import Link from "./Link.svelte";

    export let url: string;
</script>

<header class:mb-16={url == "/"} class="flex justify-between items-center">
    {#if url != "/"}
        <Link href="/" class="flex items-center gap-2">
            <Icon id="arrow-back" width={16} height={16} />
            Home
        </Link>
    {:else}
        <Link href="/" class="font-medium text-3xl">Renan Lazarotto</Link>
    {/if}
</header>
