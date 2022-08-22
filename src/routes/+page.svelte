<script>
    // Imports externos
    import At from "phosphor-svelte/lib/At/At.svelte";

    // Imports comuns
    import Link from "$lib/common/link.svelte";
    import LinkButton from "$lib/common/button.svelte";
    import SectionHeader from "$lib/common/section-header.svelte";

    // Import expecífico
    import Project from "$lib/projects/project.svelte";
    import Paragraph from "$lib/common/paragraph.svelte";

    export let data;
</script>

<svelte:head>
    <title>renan.lazarotto</title>
</svelte:head>

<div class="mx-auto w-11/12 text-gray-800 dark:text-purple-100">
    <h1
        class="pt-4 pb-3 md:pt-16 md:pb-12 text-3xl md:text-5xl font-semibold text-center"
    >
        Oi, eu me chamo Renan! 👋
    </h1>
    <p class="leading-relaxed text-center my-4 text-xl">
        Sou um programador de Backends PHP e com conhecimentos em JS localizado
        em Colombo, Paraná.
    </p>

    <!-- Sobre mim -->
    <section class="py-3 md:py-9">
        <div class="text-md md:text-xl">
            <Paragraph>
                Desenvolvo aplicações em PHP, sendo minha maior afinidade com
                Symfony, fazer café e corrigir bugs. Tenho experiência
                desenvolvendo APIs (e me aventurando no desenvolvimento
                front-end), além de também já ter trabalhado com suporte técnico
                (remoto e presencial) e manutenção de hardware. Nenhum framework
                é tão difícil para que não possa ser explorado, estou sempre
                atrás de ferramentas novas que possam ser úteis na hora de
                desenvolver.
            </Paragraph>

            <Paragraph>
                Meu ponto forte para backends é o
                <Link href="https://symfony.com/">Symfony</Link>, mas já
                desenvolvi com
                <Link href="https://codeigniter.com/">CodeIgniter</Link> e
                <Link href="https://laravel.com/">Laravel</Link>. Também estou
                aprendendo <Link href="https://kit.svelte.dev/">SvelteKit</Link>
                para desenvolvimento front-end, além de já ter trabalhado com
                <Link href="https://getbootstrap.com/">Bootstrap</Link> e <Link
                    href="https://tailwindcss.com/">Tailwind</Link
                >.
            </Paragraph>

            <Paragraph>
                Além de PHP, tenho conhecimento em JavaScript, CSS e Python.
                Além dos projetos relacionados a APIs e backends, já atuei no
                desenvolvimento de web scrapers, painéis administrativos, filas
                de processamento e automatização de processos - seja em PHP,
                Python ou scripts Shell.
            </Paragraph>
        </div>
    </section>

    <!-- stack -->
    <section class="py-3 md:py-9">
        <SectionHeader text="stacks" />

        {#each Object.entries(data.stack) as [title, items]}
            <p class="leading-relaxed text-lg my-2 font-medium">{title}:</p>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mb-10"
            >
                {#each items as item}
                    <svelte:component this={item} />
                {/each}
            </div>
        {/each}
    </section>

    <!-- Projetos -->
    <section class="py-3 md:py-12">
        <SectionHeader text="projetos" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10">
            {#each data.projects as project}
                <Project {...project} />
            {/each}
        </div>
    </section>

    <!-- Contato -->
    <section class="py-3 md:py-12">
        <SectionHeader text="contato" />

        <div class="text-md md:text-xl">
            <Paragraph>
                Quer trocar uma ideia? Tem algum projeto em mente? Além de
                desenvolver, também posso te ajudar com consultoria e suporte
                técnico para PCs e notebooks.
            </Paragraph>
            <Paragraph>
                Posso ajudar com coisas simples como escolher o melhor hardware
                pra sua empresa, auxiliar na migração de hardware antigo pra um
                novo, buscar as melhores soluções pros mais diversos problemas
                do dia a dia dentre outros.
            </Paragraph>
            <Paragraph>
                Quer saber mais? Não hesite em entrar em contato, e responderei
                assim que possível.
            </Paragraph>
        </div>
        <LinkButton
            href="mailto:renanlazarotto@gmail.com?subject=Contato via site"
            text="Enviar um e-mail"
            classes="p-4 rounded flex items-center justify-center bg-purple-50 hover:bg-purple-100 title-font font-medium text-purple-700 md:w-1/2 mx-auto dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-purple-300 dark:hover:text-purple-400"
            icon={At}
            iconClass="w-8 h-8 mr-6"
        />
    </section>
</div>
