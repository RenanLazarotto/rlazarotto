<script lang="ts">
    import "@fontsource-variable/onest";
    import "@fontsource-variable/material-symbols-rounded";

    import "../app.css";
    import SVG from "$lib/components/SVG.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<SVG />
<div class="max-w-screen-xl mx-auto p-8 flex flex-col min-h-screen">
    <Header pages={data.pages} />

    <main class="flex-1">
        <slot />
    </main>

    <Footer />
</div>
