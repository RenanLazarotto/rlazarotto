<script lang="ts">
    import Link from "./Link.svelte";

    export let pages: Types.Page[];
</script>

<header class="mb-16 flex justify-between items-center">
    <Link href="/" class="uppercase font-bold text-4xl tracking-wide">Renan Lazarotto</Link>

    <nav class="flex justify-center">
        <ul class="inline-flex gap-2">
            {#each pages as page}
                <li>
                    <Link href={`/pages/${page.slug}`} class="block text-xl ">
                        {page.title}
                    </Link>
                </li>
            {/each}
        </ul>
    </nav>
</header>
