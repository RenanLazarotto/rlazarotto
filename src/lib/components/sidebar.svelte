<script>
    import { sidebar } from "$lib/stores";
    import X from "phosphor-svelte/lib/X/X.svelte";

    $: isOpen = $sidebar;

    const onClick = (e) => {
        e.preventDefault();

        let target = document.getElementById(e.target.dataset.target);
        let targetPosition = target.getBoundingClientRect().top;
        let offsetPosition = targetPosition + window.pageYOffset - 80;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });

        toggleSidebar();
    };

    const toggleSidebar = () => {
        sidebar.set(!$sidebar);
    };
</script>

<nav class:show={isOpen} class="sidebar">
    <div class="close">
        <button on:click={toggleSidebar}><X weight="duotone" /></button>
    </div>
    <div class="links">
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
</nav>

<style>
    nav {
        backdrop-filter: blur(4px);
        background-color: var(--background-hover-transparent);
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        right: -100%;
        top: 0;
        transition: all ease-in-out 300ms;
        visibility: hidden;
        width: 200px;
        z-index: 100;
    }

    nav.show {
        right: 0;
        visibility: visible;
    }

    nav > div.close {
        display: flex;
        height: 5rem;
        margin-left: auto;
        padding-right: 1rem;
    }

    nav > div.close button {
        color: rgb(209 213 219);
        cursor: pointer;
        font-size: 1.5rem;
        transition: color cubic-bezier(0.4, 0, 0.2, 1) 300ms;
    }

    nav div.close button:hover {
        color: rgb(139 92 246);
    }

    nav div.links {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    nav div.links a {
        color: rgb(209 213 219);
        padding: 0.5rem 0.75rem;
        transition: color ease-in-out 300ms;
    }

    nav div.links a:hover {
        color: rgb(139 92 246);
        text-shadow: 0 0 12px rgb(102, 68, 180);
    }
</style>
