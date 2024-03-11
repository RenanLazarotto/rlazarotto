<script lang="ts">
    import type { PageData } from "./$types";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "@fontsource-variable/inter";
    import "../app.css";

    export let data: PageData;
</script>

<div>
    <Header current={data.url} />
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    main {
        flex: 1;
        margin: var(--size-8) 0;
    }
</style>
