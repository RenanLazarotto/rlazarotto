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

<div class:show={isOpen} class="sidebar">
    <nav class:show={isOpen}>
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
            <a href="#stack" on:click={onClick} data-target="stack">
                tecnologias
            </a>
            <a href="#contact" on:click={onClick} data-target="contact">
                contato
            </a>
            <a href="/curriculo" target="_blank"> currículo </a>
        </div>
    </nav>
</div>

<style>
    div.sidebar {
        display: flex;
        justify-content: right;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 100;
        transition: backdrop-filter cubic-bezier(0.4, 0, 0.2, 1) 250ms;
        transform: translateX(100%);
    }

    div.sidebar.show {
        backdrop-filter: blur(8px);
        transform: translateX(0);
    }

    nav {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 100vh;
        background-color: rgba(30 41 59 / 0.8);
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
        transition: transform cubic-bezier(0.4, 0, 0.2, 1) 300ms;
        transform: translateX(100%);
        visibility: hidden;
    }

    nav.show {
        transform: translateX(0);
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
        font-size: 1.5rem;
        cursor: pointer;
        transition: color cubic-bezier(0.4, 0, 0.2, 1) 300ms;
    }

    nav div.close button:hover {
        color: rgb(139 92 246);
    }

    nav div.links {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav div.links a {
        padding: 0.5rem 0.75rem;
        color: rgb(209 213 219);
        transition-property: color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    nav div.links a:hover {
        color: rgb(139 92 246);
    }
</style>
