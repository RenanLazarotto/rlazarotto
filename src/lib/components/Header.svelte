<script lang="ts">
    import Link from "./Link.svelte";

    export let pages: Types.Page[];
</script>

<header class="mb-16 flex justify-between items-center">
    <div class="flex-1 block relative group h-10">
        <p
            class="uppercase absolute font-bold text-4xl tracking-wide text-mint-400 group-hover:text-purple-500 blur-[8px] z-20"
        >
            Renan Lazarotto
        </p>
        <a
            href="/"
            class="absolute z-30 text-mint-100 group-hover:text-purple-400 uppercase font-bold text-4xl tracking-wide"
        >
            Renan Lazarotto
        </a>
    </div>

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
