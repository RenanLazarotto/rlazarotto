<script>
    // Shows the header by default
    let showHeader = true;

    // Doesn't show the shadow by default
    let showShadow = false;

    // Starts at y: 0;
    let previousY = 0;

    // Holds the screen width to watch for changes
    let screenWidth;

    // Changes the scroll offset based on the screen width
    $: scrollOffset = screenWidth < 640 ? 128 : 80;

    const onScroll = () => {
        let currentY = window.scrollY;

        // If the current y position is below 40,
        // shows the header and hides the shadow
        if (currentY <= 40) {
            showHeader = true;
            showShadow = false;
        } else {
            showHeader = currentY < previousY;

            // Shows the shadow all the times
            showShadow = true;

            // Saves the last y position
            previousY = currentY;
        }
    };

    // When a link of the navbar is clicked,
    // smooth scrolls to the target
    const onClick = (e) => {
        e.preventDefault();

        let target = document.getElementById(e.target.dataset.target);
        let targetPosition = target.getBoundingClientRect().top;
        let offsetPosition = targetPosition + window.pageYOffset - scrollOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
</script>

<svelte:window on:scroll={onScroll} bind:innerWidth={screenWidth} />

<header class:hidden={!showHeader} class:shadow={showShadow}>
    <div>
        <a href="/" class="logo">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path
                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                />
            </svg>
            <div>
                <span class="name"> renan.lazarotto </span>
                <span class="title"> web developer </span>
            </div>
        </a>
        <nav>
            <a href="#about" on:click={onClick} data-target="about"> sobre </a>
            <a href="#experiences" on:click={onClick} data-target="experiences">
                experiências
            </a>
            <a href="#projects" on:click={onClick} data-target="projects">
                projetos
            </a>
            <a href="#stack" on:click={onClick} data-target="stack">
                tecnologias
            </a>
            <a href="#contact" on:click={onClick} data-target="contact">
                contato
            </a>
            <a href="/curriculo" target="_blank"> currículo </a>
        </nav>
    </div>
</header>

<style>
    header {
        position: fixed;
        min-width: 100%;
        height: 8rem;
        backdrop-filter: blur(8px);
        background-color: rgb(17 24 39 / 0.6);
        z-index: 50;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 500ms;
        transform: translateY(0);
        top: 0;
        display: block;
    }

    header.hidden {
        transform: translateY(-8rem);
    }

    header.shadow {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    header > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
    }

    a.logo {
        display: flex;
        align-items: center;
        color: rgb(209 213 219);
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
        margin-bottom: 0.5rem;
    }
    a.logo:hover {
        color: rgb(139 92 246);
    }

    a.logo svg {
        font-size: 1.5rem;
        line-height: 2rem;
        color: rgb(245 158 11);
    }

    a.logo div {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0.5rem;
    }

    span.name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
    }

    span.title {
        margin-left: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(75 85 99);
        font-weight: 600;
        font-family: "JetBrains Mono", monospace;
    }

    nav {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        font-weight: 600;
    }

    nav > a {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(209 213 219);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    nav > a:hover {
        color: rgb(139 92 246);
    }

    @media (min-width: 640px) {
        header {
            height: 5rem;
        }

        header.hidden {
            transform: translateY(-5rem);
        }

        header > div {
            flex-direction: row;
            width: 83%;
        }

        a.logo {
            margin-bottom: 0px;
        }

        nav {
            display: flex;
            margin-left: auto;
            align-items: center;
            justify-content: flex-end;
        }
    }
    @media (min-width: 768px) {
        span.title {
            margin-right: 0px;
        }
    }
</style>
