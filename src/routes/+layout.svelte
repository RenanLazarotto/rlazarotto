<script lang="ts">
    import "@fontsource-variable/inter";

    import "../app.css";
    import SVG from "$lib/components/SVG.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<SVG />
<div class="max-w-5xl mx-auto flex flex-col min-h-screen px-8 md:px-4 lg:px-0">
    <Header url={data.url} />

    <main class="flex-1">
        <slot />
    </main>

    <Footer />
</div>
