<script>
    // Imports externos
    import At from "phosphor-svelte/lib/At/At.svelte";

    // Imports comuns
    import Link from "$lib/common/link.svelte";
    import LinkButton from "$lib/common/button.svelte";

    // Import expecífico
    import Project from "$lib/projects/project.svelte";
    import Paragraph from "$lib/common/paragraph.svelte";
    import Tabs from "$lib/common/tabs.svelte";
    import Button from "$lib/common/button.svelte";

    export let data;
</script>

<svelte:head>
    <title>renan.lazarotto</title>
</svelte:head>

<div class="pt-32 mx-auto w-5/6 text-gray-800 dark:text-purple-100">
    <section class="mb-20">
        <p
            class="text-lg font-medium text-purple-600 dark:text-purple-400 mb-6"
        >
            Olá! 👋 Eu me chamo
        </p>
        <h1 class="my-4 text-3xl md:text-6xl font-extrabold">
            Renan Lazarotto.
        </h1>
        <p class="my-4 text-lg w-1/2 text-gray-500 text-justify">
            Eu sou um programador Web especializado em backends e APIs escritas
            em PHP. Atualmente, estou trabalhando na <Link
                href="https://wlgrupo.com/empresa/hammer/">Hammer Consult</Link
            >.
        </p>
    </section>

    <!-- Sobre mim -->
    <section class="mb-20">
        <div class="flex items-center gap-x-2 mt-3 mb-9">
            <span
                class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
            />
            <p id="about" class="font-bold text-2xl">Sobre mim</p>
            <span
                class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
            />
        </div>

        <div class="text-md md:text-xl">
            <Paragraph justify={true}>
                Olá! Eu me chamo <b>Renan</b> e eu gosto de desenvolver
                aplicações em PHP, com ou sem frameworks, sendo minha maior
                afinidade com
                <Link href="https://symfony.com/">Symfony</Link> (💜).
            </Paragraph>
            <Paragraph>
                Iniciei no desenvolvimento ainda na minha adolescência, quando
                criei interesse por automatizar algumas tarefas que achava muito
                repetitivas e acabei aprendendo um pouco de programação por
                curiosidade.
            </Paragraph>
            <Paragraph>
                Desde então, trabalhei em uma variada gama de projetos,
                começando como técnico de suporte, e-commerce, serviços
                financeiros e de proteção ao crédito e até mesmo software para
                concessionárias automotivas.
            </Paragraph>
            <Paragraph>
                Recentemente, iniciei uma nova jornada na <Link
                    href="https://wlgrupo.com/empresa/hammer/"
                    >Hammer Consult</Link
                >. Estou ansioso pelos projetos que irei desenolver!
            </Paragraph>
        </div>
    </section>

    <!-- Experiências -->
    <section class="mb-20">
        <div class="flex items-center gap-x-2 mt-3 mb-9">
            <span
                class="h-px block relative w-8 bg-purple-900  dark:bg-purple-500"
            />
            <p id="experiences" class="font-bold text-2xl">
                Experiências profissionais
            </p>
            <span
                class="h-px block relative w-32 bg-purple-900  dark:bg-purple-500"
            />
        </div>

        <Tabs flex={true} data={data.jobs} />
    </section>

    <!-- Projetos -->
    <section class="mb-20">
        <div class="flex items-center gap-x-2 mt-3 mb-9">
            <span
                class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
            />
            <p id="projects" class="font-bold text-2xl">
                Projetos em que trabalhei
            </p>
            <span
                class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
            />
        </div>
        <table class="table-auto min-w-full cursor-default">
            <thead>
                <tr class="text-gray-400 dark:text-gray-500 font-bold">
                    <th class="py-3 px-2">Ano</th>
                    <th class="py-3 px-2 text-left">Título</th>
                    <th class="py-3 px-2 text-left">Feito em</th>
                    <th class="py-3 px-2 text-left">Tecnologias</th>
                    <th class="py-3 px-2 text-left">Link</th>
                </tr>
            </thead>
            <tbody>
                {#each data.projects as project}
                    <Project {...project} />
                {/each}
            </tbody>
        </table>
    </section>

    <!-- Tecnologias -->
    <section class="mb-20">
        <div class="flex items-center gap-x-2 mt-3 mb-9">
            <span
                class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
            />
            <p id="stack" class="font-bold text-2xl">Tecnologias que uso</p>
            <span
                class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {#each data.stack as item}
                <svelte:component this={item} />
            {/each}
        </div>
    </section>

    <!-- Contato -->
    <section class="mb-20">
        <div class="flex items-center gap-x-2 mt-3 mb-9">
            <span
                class="h-px block relative w-8 bg-purple-600 dark:bg-purple-500"
            />
            <p id="contact" class="font-bold text-2xl">Vamos conversar?</p>
            <span
                class="h-px block relative w-32 bg-purple-600 dark:bg-purple-500"
            />
        </div>

        <div class="text-md md:text-xl">
            <Paragraph>
                Embora eu não esteja buscando novas oportunidades atualmente,
                estou sempre aberto para projetos. Além de desenvolver, também
                posso ajudar com consultoria e suporte técnico para PCs e
                notebooks.
            </Paragraph>
            <Paragraph>
                Posso ajudar a escolher o melhor hardware equipamento para a sua
                empresa, auxiliar na migração de hardware antigo pra um novo,
                buscar as melhores soluções pros mais diversos problemas do dia
                a dia dentre outros.
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

    <section
        class="fixed bottom-0 left-auto right-10 flex flex-col gap-y-2 items-center"
    >
        <Button href="https://github.com/RenanLazarotto" vertical={true}>
            <slot name="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                </svg>
                <div class="[writing-mode:vertical-rl]">github</div>
            </slot>
        </Button>

        <Button
            href="https://www.linkedin.com/in/renanlazarotto/"
            vertical={true}
        >
            <slot name="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                </svg>
                <div class="[writing-mode:vertical-rl]">linkedin</div>
            </slot>
        </Button>
        <div class="w-px h-32 bg-purple-600 dark:bg-purple-400" />
    </section>
</div>
