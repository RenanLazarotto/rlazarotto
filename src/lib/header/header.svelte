<script>
    import ToggleDarkmode from "$lib/common/toggle-darkmode.svelte";
import Code from "phosphor-svelte/lib/Code/Code.svelte";
</script>

<header
    class="container mx-auto flex justify-between pt-12 pb-4 w-11/12 md:w-3/5 md:flex-row items-center"
>
    <a href="/" class="flex items-center hover:text-purple-200 transition-colors duration-300">
        <Code
            class="text-2xl text-purple-600 dark:text-yellow-400"
            weight="duotone"
        />
        <div class="flex items-center flex-col ml-2">
            <span
                class="text-xl font-bold dark:text-white dark:hover:text-purple-400 "
                >renan.lazarotto</span
            >
            <span
                class="ml-3 md:mr-0 text-xs text-gray-600 dark:text-purple-100"
                >web developer</span
            >
        </div>
    </a>
    <nav class="md:ml-auto flex items-center gap-x-1 font-medium">
        <a
            href="https://github.com/RenanLazarotto"
            class="hover:text-purple-600 dark:text-white dark:hover:text-purple-400 hover:bg-purple-50 px-1 rounded-md transition-colors"
            >github</a
        >
        <a
            href="/curriculo"
            class="hover:text-purple-600 dark:text-white dark:hover:text-purple-400 hover:bg-purple-50 px-1 rounded-md transition-colors"
            >curriculo</a
        >
        <ToggleDarkmode />
    </nav>
</header>
