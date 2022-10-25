<script>
    import Hero from "$lib/hero.svelte";
    import AboutMe from "$lib/about-me.svelte";
    import Experiences from "$lib/experiences.svelte";
    import Projects from "$lib/projects.svelte";
    import TechStack from "$lib/tech-stack.svelte";
    import Contact from "$lib/contact.svelte";
    import SideLinks from "$lib/side-links.svelte";

    export let data;
</script>

<svelte:head>
    <title>renan.lazarotto</title>
</svelte:head>

<div>
    <Hero />

    <AboutMe />

    <Experiences jobs={data.jobs} />

    <Projects projects={data.projects} />

    <TechStack stack={data.stack} />

    <Contact />

    <SideLinks />
</div>

<style>
    div {
        padding-top: 10rem;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        color: rgb(243 244 246);
    }

    @media (max-width: 640px) {
        div {
            max-width: 800px;
        }
    }
</style>
