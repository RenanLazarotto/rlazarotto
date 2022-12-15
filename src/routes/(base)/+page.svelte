<script>
    import { onMount } from "svelte";
    import { url } from "$lib/stores";
    
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

<SEO
    pageTitle="Início"
    description="Página inicial do meu portfolio."
    url={$url}
/>

<Header samePageLinks={data.samePageLinks} navLinks={data.navLinks} />
<Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />

<div>
    <Hero />
    <AboutMe />
    <Experiences jobs={data.jobs} />
    <Projects projects={data.projects} />
    <Skills stack={data.stack} />
    <Contact />
</div>

<style>
    div {
        padding-top: 12rem;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    @media (max-width: 640px) {
        div {
            max-width: 800px;
        }
    }
</style>
