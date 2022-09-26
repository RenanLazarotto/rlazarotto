<script>
    // Shows the header by default
    let showHeader = true;

    // Doesn't show the shadow by default
    let showShadow = false;

    // Starts at y: 0;
    let previousY = 0;

    $: showHeaderClasses = showHeader ? "top-0" : "-top-20";
    $: showShadowClasses = showShadow ? "shadow-lg" : "";

    $: classes =
        `bg-gray-900 sm:md-0 py-4 z-50 transition-all duration-500 fixed min-w-full h-20 ${showHeaderClasses} ${showShadowClasses}`.trim();

    const onScroll = () => {
        let currentY = window.scrollY;

        // If the current y position is below 40,
        // shows the header and hides the shadow
        if (currentY <= 40) {
            showHeader = true;
            showShadow = false;
        } else {
            // Only shows the header if the current y position
            // is lower than the previous one
            showHeader = currentY < previousY;

            // Shows the shadow all the times
            showShadow = true;

            // Saves the last y position
            previousY = currentY;
        }
    };
</script>

<svelte:window on:scroll={onScroll} />

<header class={classes}>
    <div class="flex justify-between items-center w-11/12 sm:w-5/6 mx-auto">
        <a href="/" class="flex items-center text-responsive">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="text-2xl text-purple-600 dark:text-purple-500"
                viewBox="0 0 16 16"
            >
                <path
                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                />
            </svg>
            <div class="flex items-center flex-col ml-2">
                <span class="text-xl font-bold "> renan.lazarotto </span>
                <span
                    class="ml-3 md:mr-0 text-xs text-gray-400 dark:text-gray-600 font-medium"
                >
                    web developer
                </span>
            </div>
        </a>
        <nav
            class="hidden md:ml-auto sm:flex items-center font-medium"
        >
            <a
                href="#about"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                sobre
            </a>
            <a
                href="#experiences"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                experiências
            </a>
            <a
                href="#projects"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                projetos
            </a>
            <a
                href="#stack"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                tecnologias
            </a>
            <a
                href="#contact"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                contato
            </a>
            <a
                href="/curriculo"
                class="flex justify-center items-center text-xs px-2 text-responsive"
            >
                currículo
            </a>
        </nav>
    </div>
</header>