<script>
    import { onMount } from "svelte";
    import { url } from "$lib/stores";

    import Base from "$lib/layouts/base.svelte";

    import Hero from "$lib/components/hero.svelte";
    import AboutMe from "$lib/components/about-me.svelte";
    import Experiences from "$lib/components/experiences.svelte";
    import Projects from "$lib/components/projects.svelte";
    import Skills from "$lib/components/skills.svelte";
    import Contact from "$lib/components/contact.svelte";
    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    export let data;

    onMount(() => {
        url.set(window.location.href);
    });
</script>

<Base>
    <div slot="header">
        <SEO
            pageTitle="Início"
            description="Página inicial do meu portfolio."
            url={$url}
        />

        <Header samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
    </div>
    <div slot="main" class="main">
        <Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />

        <Hero />
        <AboutMe />
        <Experiences jobs={data.jobs} />
        <Projects projects={data.projects} />
        <Skills stack={data.stack} />
        <Contact />
    </div>
</Base>

<style>
    .main {
        padding-top: 10rem;
    }
</style>