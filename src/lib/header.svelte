<script>
    // Shows the header by default
    let showHeader = true;

    // Doesn't show the shadow by default
    let showShadow = false;

    // Starts at y: 0;
    let previousY = 0;

    $: showHeaderClasses = showHeader ? "top-0" : "-top-32 sm:-top-20";
    $: showShadowClasses = showShadow ? "shadow-lg" : "";

    $: classes =
        `backdrop-blur bg-gray-900/60 sm:md-0 z-50 transition-all duration-500 fixed min-w-full h-32 sm:h-20 ${showHeaderClasses} ${showShadowClasses}`.trim();

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
    <div class="py-4 flex flex-col sm:flex-row justify-between items-center w-11/12 sm:w-5/6 mx-auto">
        <a href="/" class="flex items-center text-gray-300 hover:text-purple-500 transition-colors duration-300 mb-2 sm:mb-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="text-2xl text-yellow-500"
                viewBox="0 0 16 16"
            >
                <path
                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                />
            </svg>
            <div class="flex items-center flex-col ml-2">
                <span class="text-xl font-bold"> renan.lazarotto </span>
                <span
                    class="ml-3 md:mr-0 text-sm text-gray-600 font-semibold font-mono"
                >
                    web developer
                </span>
            </div>
        </a>
        <nav
            class="grid grid-cols-3 sm:flex sm:ml-auto items-center justify-end font-semibold"
        >
            <a
                href="#about"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                sobre
            </a>
            <a
                href="#experiences"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                experiências
            </a>
            <a
                href="#projects"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                projetos
            </a>
            <a
                href="#stack"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                tecnologias
            </a>
            <a
                href="#contact"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                contato
            </a>
            <a
                href="/curriculo"
                target="_blank"
                class="text-sm px-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
                currículo
            </a>
        </nav>
    </div>
</header>
