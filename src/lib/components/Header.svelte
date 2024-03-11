<script lang="ts">
    import Link from "./Link.svelte";
    import NavLink from "./NavLink.svelte";

    export let current: string;
</script>

<header>
    <div>
        <Link href="/">
            <span class="title">Renan Lazarotto</span>
        </Link>
        <nav>
            <NavLink href="/sobre" active={current == "/sobre"}>Sobre</NavLink>
            <NavLink href="/blog" active={current == "/blog"}>Blog</NavLink>
            <NavLink href="/usos" active={current == "/usos"}>Usos</NavLink>
            <NavLink href="/agora" active={current == "/agora"}>Agora</NavLink>
        </nav>
    </div>
</header>

<style>
    header {
        padding-top: var(--size-4);
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 var(--size-3);
    }

    .title {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-6);
    }

    nav {
        display: flex;
        column-gap: var(--size-2);
    }
</style>
