<script lang="ts">
    import Link from "./Link.svelte";

    export let pages: Types.Page[];
</script>

<header class="mb-8 flex justify-between items-center">
    <a href="/" class="text-purple-600 hover:text-purple-400">
        <h1 class="font-compact text-5xl tracking-wide">Renan Lazarotto</h1>
        <div class="uppercase text-lg font-bold text-gray-500 tracking-widest">full stack developer</div></a
    >

    <nav>
        <ul class="flex gap-2">
            {#each pages as page}
                <li>
                    <Link href={`/pages/${page.slug}`} class="font-compact text-3xl">
                        {page.title}
                    </Link>
                </li>
            {/each}
        </ul>
    </nav>
</header>
