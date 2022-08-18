<script>
    import Code from "phosphor-svelte/lib/Code/Code.svelte";
</script>

<header class="container mx-auto flex flex-wrap pt-16 pb-8 w-3/5 flex-col md:flex-row items-center">
    <a href="/" class="flex items-center">
        <Code class="font-bold text-2xl text-purple-600 dark:text-yellow-400" weight="duotone" />
        <div class="flex items-center md:flex-col ml-3">
            <span class="text-xl font-bold dark:text-white dark:hover:text-purple-400">renan.lazarotto</span>
            <span class="hidden md:inline ml-3 md:mr-0 text-xs text-gray-600 dark:text-purple-100">web developer</span>
        </div>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center justify-center mt-2 md:mt-0 gap-x-4">
        <a href="/curriculo" class="hover:text-purple-900 dark:text-white dark:hover:text-purple-400 py-2 px-4 flex items-center">curriculo</a>
    </nav>
</header>
