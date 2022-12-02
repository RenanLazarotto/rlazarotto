<script>
    import { sidebar } from "$lib/stores";
    import List from "phosphor-svelte/lib/List/List.svelte";

    // Shows the header by default
    let showHeader = true;

    // Doesn't show the shadow by default
    let showShadow = false;

    // Starts at y: 0;
    let previousY = 0;

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
        let offsetPosition = targetPosition + window.pageYOffset - 80;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    const toggleSidebar = () => {
        sidebar.set(!$sidebar);
    };
</script>

<svelte:window on:scroll={onScroll} />

<header class:hidden={!showHeader} class:shadow={showShadow}>
    <nav>
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
        <div>
            <a href="#about" on:click={onClick} data-target="about"> sobre </a>
            <a href="#experiences" on:click={onClick} data-target="experiences">
                experiências
            </a>
            <a href="#projects" on:click={onClick} data-target="projects">
                projetos
            </a>
            <a href="#skills" on:click={onClick} data-target="skills">
                habilidades
            </a>
            <a href="#contact" on:click={onClick} data-target="contact">
                contato
            </a>
            <a href="/curriculo" target="_blank"> currículo </a>
        </div>

        <button on:click={toggleSidebar}>
            <List weight="duotone" />
        </button>
    </nav>
</header>

<style>
    header {
        backdrop-filter: blur(16px);
        background-color: var(--background-transparent);
        display: flex;
        height: 5rem;
        position: fixed;
        top: 0px;
        transform: translateY(0);
        transition: all ease-in-out 500ms;
        width: 100%;
        z-index: 50;
    }

    header.hidden {
        transform: translateY(-5rem);
    }

    header.shadow {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2),
            0 4px 6px -4px rgb(0 0 0 / 0.3);
    }

    nav {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        width: 100%;
    }

    nav a.logo {
        align-items: center;
        color: var(--white);
        display: flex;
        transition: color ease-in-out 300ms;
    }

    nav a.logo:hover {
        color: var(--link-hover);
    }

    nav a.logo svg {
        color: var(--accent);
        font-size: 1.5rem;
        line-height: 2rem;
        transition: filter ease-in-out 300ms;
    }

    nav a.logo:hover svg {
        filter: drop-shadow(var(--link-shadow));
    }

    nav a.logo div {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
    }

    nav a.logo div span.name {
        font-size: var(--font-size);
        font-weight: 700;
    }

    nav a.logo:hover div span.name {
        text-shadow: var(--link-shadow);
    }

    nav a.logo div span.title {
        color: var(--gray);
        font-family: var(--font-highlight);
        font-size: 0.75rem;
        font-weight: 500;
    }

    nav div {
        display: none;
    }

    nav div > a {
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        transition: color ease-in-out 300ms;
    }

    nav div > a:hover {
        color: var(--primary);
        text-shadow: var(--link-shadow);
    }

    nav button {
        align-items: center;
        color: var(--white);
        cursor: pointer;
        display: flex;
        font-size: 1.5rem;
        transition: all ease-in-out 300ms;
    }

    nav button:hover {
        background-color: var(--background-hover);
        border-radius: 4px;
        color: var(--primary);
    }

    @media (min-width: 640px) {
        nav button {
            display: none;
        }

        nav a.logo {
            margin-bottom: 0px;
        }

        nav div {
            align-items: center;
            display: flex;
        }
    }
    @media (min-width: 768px) {
        span.title {
            margin-right: 0px;
        }
    }
</style>
