<script>
    import { page } from "$app/stores";

    import BaseLayout from "$lib/layouts/baselayout.svelte";

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

    let url = $page.url.href;
</script>

<BaseLayout>
    <div slot="header">
        <SEO
            pageTitle="Início"
            description="Página inicial do meu portfolio."
            {url}
            imgUrl="/assets/images/pages/home.png"
            imgAlt="Imagem com formas poligonais e o texto renan.lazarotto no canto superior direito."
            imgWidth="900"
            imgHeight="500"
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
</BaseLayout>

<style>
    .main {
        padding-top: 10rem;
    }
</style>
