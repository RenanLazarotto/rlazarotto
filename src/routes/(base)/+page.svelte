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

<div class="pt-40 sm:pt-30 mx-auto w-11/12 sm:w-5/6 text-gray-300">
    <Hero />

    <AboutMe />

    <Experiences jobs={data.jobs} />

    <Projects projects={data.projects} />

    <TechStack stack={data.stack} />

    <Contact />

    <SideLinks />
</div>
