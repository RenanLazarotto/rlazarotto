<script>
    // Imports externos
    import GithubLogo from "phosphor-svelte/lib/GithubLogo/GithubLogo.svelte";
    import At from "phosphor-svelte/lib/At/At.svelte";

    // Imports comuns
    import Link from "$lib/common/link.svelte";
    import LinkButton from "$lib/common/link-button.svelte";
    import SectionHeader from "$lib/common/section-header.svelte";

    // Import expecífico
    import Project from "$lib/projects/project.svelte";

    // Ícones
    import PHP from "$lib/icons/php.svelte";
    import JavaScript from "$lib/icons/javascript.svelte";
    import Python from "$lib/icons/python.svelte";
    import CSS from "$lib/icons/css.svelte";
    import Bash from "$lib/icons/bash.svelte";
    import Symfony from "$lib/icons/symfony.svelte";
    import Laravel from "$lib/icons/laravel.svelte";
    import Tailwind from "$lib/icons/tailwind.svelte";
    import Bootstrap from "$lib/icons/bootstrap.svelte";
    import Svelte from "$lib/icons/svelte.svelte";
    import Redis from "$lib/icons/redis.svelte";
    import RabbitMQ from "$lib/icons/rabbitmq.svelte";
    import Linux from "$lib/icons/linux.svelte";
    import Windows from "$lib/icons/windows.svelte";

    export let data;
</script>

<svelte:head>
    <title>renan.lazarotto</title>
</svelte:head>

<div class="mx-auto w-3/5 text-gray-800 dark:text-purple-100">
    <h1 class="mb-6 mt-24 px-2 md:px-0 text-6xl font-semibold text-center">
        Oi, eu me chamo Renan! 👋
    </h1>
    <p class="leading-relaxed text-center my-4 text-xl">
        Sou um programador Backend PHP e JS localizado em Colombo, Paraná.
    </p>

    <!-- Sobre mim -->
    <section class="mt-10 mb-20 px-2 md:px-0">
        <div class="text-xl">
            <p class="leading-relaxed text-justify my-4 font-light">
                Desenvolvo aplicações em PHP, sendo minha maior afinidade com
                Symfony, fazer café e corrigir bugs. Tenho experiência
                desenvolvendo APIs (e me aventurando no desenvolvimento
                front-end), além de também já ter trabalhado com suporte técnico
                (remoto e presencial) e manutenção de hardware. Nenhum framework
                é tão difícil para que não possa ser explorado, estou sempre
                atrás de ferramentas novas que possam ser úteis na hora de
                desenvolver.
            </p>
            <p class="leading-relaxed text-justify my-4 font-light">
                Meu ponto forte para backends é o <Link
                    href="https://symfony.com/"
                    text="Symfony"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                />, mas já desenvolvi com
                <Link
                    href="https://codeigniter.com/"
                    text="CodeIgniter"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                /> e
                <Link
                    href="https://laravel.com/"
                    text="Laravel"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                />. Também estou aprendendo <Link
                    href="https://kit.svelte.dev/"
                    text="SvelteKit"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                /> para desenvolvimento front-end, além de já ter trabalhado com
                <Link
                    href="https://getbootstrap.com/"
                    text="Bootstrap"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                /> e <Link
                    href="https://tailwindcss.com/"
                    text="Tailwind"
                    classes="text-purple-500 dark:text-purple-200 font-bold"
                />.
            </p>
            <p class="leading-relaxed text-justify my-4 font-light">
                Além de PHP, tenho conhecimento em JavaScript, CSS e Python.
                Além dos projetos relacionados a APIs e backends, já atuei no
                desenvolvimento de web scrapers, painéis administrativos, filas
                de processamento e automatização de processos - seja em PHP,
                Python ou scripts Shell.
            </p>
        </div>
    </section>

    <!-- stack -->
    <section class="mt-10 mb-20 px-2 md:px-0">
        <SectionHeader text="stack" />

        <p class="leading-relaxed text-lg my-2">Backend:</p>
        <div class="grid grid-cols-3 gap-2 justify-center">
            <!-- PHP -->
            <PHP />

            <!-- Symfony -->
            <Symfony />

            <!-- Laravel -->
            <Laravel />

            <!-- Redis -->
            <Redis />

            <!-- RabbitMQ -->
            <RabbitMQ />
            
            <!-- Python -->
            <Python />
        </div>

        <p class="leading-relaxed text-lg my-2">Front-end:</p>
        <div class="grid grid-cols-3 gap-2 justify-center">
            <!-- Bootstrap -->
            <Bootstrap />

            <!-- JavaScript -->
            <JavaScript />

            <!-- Tailwind CSS -->
            <Tailwind />

            <!-- CSS3 -->
            <CSS />

            <!-- Svelte -->
            <Svelte />
        </div>

        <p class="leading-relaxed text-lg my-2">Outros:</p>
        <div class="grid grid-cols-3 gap-2 justify-center">
            <!-- Windows -->
            <Windows />

            <!-- Linux -->
            <Linux />

            <!-- Bash -->
            <Bash />
        </div>
    </section>

    <section class="mt-10 mb-20 px-2 md:px-0">
        <SectionHeader text="projetos" />

        <div class="flex flex-col gap-4 mt-4 mb-10 w-3/4 mx-auto">
            {#each data.projects as project}
                <Project {...project} />
            {/each}
        </div>
    </section>

    <!-- Contato -->
    <section class="mt-10 mb-20 px-2 md:px-0">
        <SectionHeader text="contato" />

        <div class="flex flex-col text-justify font-light mb-20">
            <p class="leading-relaxed text-lg my-2">
                Quer trocar uma ideia? Tem algum projeto em mente? Além de
                desenvolver, também posso te ajudar com consultoria e suporte
                técnico para PCs e notebooks.
            </p>
            <p class="leading-relaxed text-lg my-2">
                Posso ajudar com coisas simples como escolher o melhor hardware
                pra sua empresa, auxiliar na migração de hardware antigo pra um
                novo, buscar as melhores soluções pros mais diversos problemas
                do dia a dia dentre outros.
            </p>
            <p class="leading-relaxed text-lg my-2">
                Quer saber mais? Não hesite em entrar em contato, e responderei
                assim que possível.
            </p>
        </div>
        <div class="flex flex-col w-1/2 mx-auto">
            <div class="p-2">
                <LinkButton
                    href="https://github.com/RenanLazarotto"
                    text="Perfil no GitHub"
                    classes="p-4 h-full rounded flex items-center justify-center bg-purple-50 hover:bg-purple-100 title-font font-medium text-purple-700"
                    icon={GithubLogo}
                    iconClass="w-8 h-8 mr-6"
                />
            </div>
            <div class="p-2">
                <LinkButton
                    href="mailto:renanlazarotto@gmail.com"
                    text="Enviar um e-mail"
                    classes="p-4 max-h-16 rounded flex items-center justify-center bg-purple-50 hover:bg-purple-100 title-font font-medium text-purple-700 overflow-hidden"
                    icon={At}
                    iconClass="w-8 h-8 mr-6"
                />
            </div>
        </div>
    </section>
</div>
