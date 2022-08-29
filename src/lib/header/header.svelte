<script>
    import Button from "$lib/common/button.svelte";
    import ThemeToggle from "$lib/common/theme-toggle.svelte";

    let showShadow = false;

    const onScroll = () => {
        showShadow = window.scrollY >= 40;
    };
</script>

<svelte:window on:scroll={onScroll} />

<header
    class:top-0={!showShadow}
    class:-top-20={showShadow}
    class:shadow-lg={showShadow}
    class="flex 
    flex-col
    md:flex-row 
    justify-between 
    items-center 
    py-4 
    px-8    
    bg-white 
    dark:bg-gray-900 
    z-50
    transition-all
    duration-500
    fixed
    min-w-full
    h-20"
>
    <a
        href="/"
        class="flex items-center hover:text-purple-600  transition-colors duration-300 mb-2 md:mb-0"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="text-2xl text-purple-600 dark:text-purple-400"
            viewBox="0 0 16 16"
        >
            <path
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
            />
        </svg>
        <div class="flex items-center flex-col ml-2">
            <span
                class="text-xl font-bold dark:text-white dark:hover:text-purple-400"
                >renan.lazarotto</span
            >
            <span
                class="ml-3 md:mr-0 text-xs text-gray-600 dark:text-gray-400 font-medium"
                >web developer</span
            >
        </div>
    </a>
    <nav class="md:ml-auto flex items-center gap-x-1 font-medium">
        <Button href="#about" newTab={false}>sobre</Button>
        <Button href="#experiences" newTab={false}>experiências</Button>
        <Button href="#projects" newTab={false}>projetos</Button>
        <Button href="#stack" newTab={false}>tecnologias</Button>
        <Button href="#contact" newTab={false}>contato</Button>
        <Button href="/curriculo" bordered={true}>currículo</Button>

        <ThemeToggle />
    </nav>
</header>
