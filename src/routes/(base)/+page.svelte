<script>
    import Hero from "$lib/hero.svelte";
    import AboutMe from "$lib/about-me.svelte";
    import Experiences from "$lib/experiences.svelte";
    import Projects from "$lib/projects.svelte";
    import Skills from "$lib/skills.svelte";
    import Contact from "$lib/contact.svelte";

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

    <Skills stack={data.stack} />

    <Contact />
</div>

<style>
    div {
        padding-top: 10rem;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
    }

    @media (max-width: 640px) {
        div {
            max-width: 800px;
        }
    }
</style>
