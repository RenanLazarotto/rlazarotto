<script>
    import Button from "$lib/common/button.svelte";
    import ThemeToggle from "$lib/common/theme-toggle.svelte";

    import Code from "phosphor-svelte/lib/Code/Code.svelte";
    import FileText from "phosphor-svelte/lib/FileText/FileText.svelte";
    import GithubLogo from "phosphor-svelte/lib/GithubLogo/GithubLogo.svelte";
</script>

<header
    class="mx-auto flex flex-col md:flex-row justify-between items-center py-4 sm:py-8 w-11/12"
>
    <a
        href="/"
        class="flex items-center hover:text-purple-600  transition-colors duration-300 mb-2 md:mb-0"
    >
        <Code
            class="text-2xl text-purple-600 dark:text-purple-400"
            weight="duotone"
        />
        <div class="flex items-center flex-col ml-2">
            <span
                class="text-xl font-bold dark:text-white dark:hover:text-purple-400"
                >renan.lazarotto</span
            >
            <span class="ml-3 md:mr-0 text-xs text-gray-600 dark:text-gray-400"
                >web developer</span
            >
        </div>
    </a>
    <nav class="md:ml-auto flex items-center gap-x-1 font-medium">
        <Button href="https://github.com/RenanLazarotto">
            <slot name="icon">
                <GithubLogo class="text-base mr-1" weight="duotone" />
            </slot>
            github
        </Button>
        
        <Button href="/curriculo">
            <slot name="icon">
                <FileText class="text-base mr-1" weight="duotone" />
            </slot>
            currículo
        </Button>

        <ThemeToggle />
    </nav>
</header>
