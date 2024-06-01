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
<div class="max-w-4xl mx-auto px-8 py-12 flex flex-col min-h-screen">
    <Header url={data.url}/>

    <main class="flex-1">
        <slot />
    </main>

    <Footer />
</div>
