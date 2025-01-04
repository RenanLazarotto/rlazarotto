<script lang="ts">
    import Portrait from "$lib/components/Portrait.svelte";

    import { experiences } from "$content/experiences";
    import { projects } from "$content/projects";
</script>

<svelte:head>
    <title>Sobre</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Sobre" />
</svelte:head>

<h1 class="title">Quem sou eu?</h1>

<article class="prose prose-invert max-w-none">
    <section>
        <Portrait
            src="/images/me.jpg"
            alt="A minha cara além da tela"
            title="A única foto com qualidade profissional minha que eu tenho"
            rounded
        />

        <p>
            Olá, seja bem vindo! Eu me chamo Renan, sou programador full-stack,
            nascido e morando em Curitiba, no Paraná. Desde pequeno eu sou o
            tipo de pessoa curiosa que gosta de entender como as coisas
            funcionam, com um talento especial pra desmontar alguma coisa pra
            "ver como ela funciona por dentro", apenas pra ter sucesso variável
            na remontagem.
        </p>

        <p>
            Comecei a demonstrar interesse e aptidão com computadores ainda
            pequeno, quando fiz meu pai gastar uma pequena fortuna pagando um
            técnico pra consertar as bobeiras que eu fazia. Depois disso se
            repetir algumas vezes, fiz um curso de montagem e manutenção de
            computadores. Com o que eu aprendi, fiz muitos bicos de formatação e
            manutenção nos computadores da vizinhança, posteriormente sendo um
            diferencial pra conseguir emprego.
        </p>

        <p>
            O interesse por programação veio quase que naturalmente, quando as
            engrenagens da discórdia começaram a girar dentro da minha cabeça
            querendo entender _como_ um computador funciona a nível lógico, pois
            o físico eu já conhecia razoavelmente bem. Durante um bom tempo eu
            fui autodidata, mas acabei empacando na enorme quantidade de
            conteúdos e conceitos que eu precisaria absorver antes de sair do
            "hello world" pra algo mais concreto. Mesmo assim, acabei escrevendo
            alguns programas que automatizavam minhas rotinas de trabalho, me
            poupando um bom tempo.
        </p>

        <p>
            Isso tudo me levou ao inevitável caminho da faculdade de TI.
            Aproveitando o fato de que, na época, eu trabalhava na escola de uma
            rede de ensino que possuía também uma faculdade, me formei em Gestão
            de TI. Comecei a trabalhar como desenvolvedor algum tempo depois,
            uma coisa levou a outra e hoje estou aqui.
        </p>
    </section>

    <section>
        <h2>O que eu faço?</h2>

        <p>
            Inicialmente, trabalhei apenas com backends em PHP - um pouco por
            medo de tentar novas coisas e sair da minha zona de conforto e um
            pouco pelo pouco incentivo pra aprender mais, uma vez que meu
            trabalho era justamente desenvolver backends em PHP.
        </p>

        <p>
            Hoje, meu cinto de utilidades tem algumas ferramentas a mais. Além
            do conhecimento em bancos de dados, essencial quando você trabalha
            com backends, eu conheço (algo além do básico) de Go, Python e
            JavaScript, além de tecnologias auxiliares como Redis e RabbitMQ.
            Também sei algo de DevOPs, análise de requisitos e controle de
            qualidade.
        </p>

        <p>
            O que eu não sei não é problema, eu aprendo. Tendo um bom ponto de
            partida, seja algum artigo explicativo ou alguém para tirar as
            dúvidas, nenhuma tecnologia é complexa demais que não possa ser
            estudada.
        </p>

        <p>
            Agora, eu passo meu tempo me divertindo com o SvelteKit, minha
            ferramenta de escolha pra desenvolvimento front-end - a qual eu usei
            pra fazer esse site. Embora eu não tenha mais o costume de mexer com
            backends para projetos pessoais, minha linguagem de escolha seria o
            Go, que eu uso bastante no trabalho.
        </p>

        <blockquote>
            Eu falo mais sobre meu plano infalível do momento na minha página <a
                href="/agora">Agora</a
            >.
        </blockquote>
    </section>

    <section>
        <h2>Por que criar um site?</h2>

        <p>
            Ser uma pessoa curiosa e que gosta de fazer as coisas do seu jeito
            tem suas desvantagens. Eu poderia apenas utilizar uma plataforma de
            blog como o WordPress e escrever minhas coisas lá, mas eu queria
            algo que fosse meu.
        </p>

        <p>
            Desenvolver um site próprio também tem sido algo que eu desejava
            desde quando conheci a internet, antes mesmo de entender como que
            essa coisa toda funcionava, e quando os computadores eram
            brancos-amarelados com monitores CRT de 14".
        </p>

        <p>
            Meu site também é a minha plataforma de testes - é aqui que eu
            aprendo muita coisa, que eu faço muita coisa (que raramente eu
            publico) e que eu mantenho a chama da minha curiosidade acesa.
        </p>
    </section>

    <hr />

    <section>
        <h2>Experiência profissional</h2>

        <div class="flex flex-col gap-4 not-prose">
            {#each experiences as experience}
                <div class="flex items-center gap-4">
                    <div>
                        {#if experience.href}
                            <a href={experience.href}>{experience.company}</a>
                        {:else}
                            <p>{experience.company}</p>
                        {/if}
                    </div>
                    <hr class="flex-1 border-dashed border-gray-800" />
                    <div class="flex text-sm text-gray-500">
                        <p>{experience.position}</p>
                        <span class="mx-2">•</span>
                        <p>{experience.start}</p>
                        {#if experience.end}
                            {#if experience.start != experience.end}
                                <span class="mx-0.5">–</span>
                                <p>{experience.end}</p>
                            {/if}
                        {:else}
                            <span class="mx-0.5">–</span>
                            <p>Agora</p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section>
        <h2>Projetos em que trabalhei</h2>

        <div class="flex flex-col gap-4 not-prose">
            {#each projects as project}
                <div class="flex flex-col">
                    <div class="flex-1 flex gap-4 items-center mb-2">
                        <div>
                            {#if project.link}
                                <a href={project.link} target="_blank"
                                    >{project.title}</a
                                >
                            {:else}
                                <p class="font-bold">{project.title}</p>
                            {/if}
                            <div class="flex text-xs text-gray-600 gap-2">
                                {#each project.stack as stack, i}
                                    <p>{stack}</p>
                                    {#if i + 1 != project.stack.length}
                                        <p>•</p>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                        <div class="flex-1"></div>

                        <div class="flex gap-2 text-sm text-gray-500">
                            {#if project.source}
                                <a href={project.source} target="_blank"
                                    >Open-source</a
                                >
                                <p>•</p>
                            {/if}
                            <p>{project.company}</p>
                            <p>•</p>
                            <p>{project.year}</p>
                        </div>
                    </div>
                    <div class="text-gray-400">
                        {#each project.description as description}
                            <p>{description}</p>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <hr />

    <section>
        <h2>Contato</h2>

        <div class="flex flex-col gap-4 not-prose">
            <div class="flex flex-col">
                <a href="mailto:renanlazarotto@gmail.com">Email</a>
                <div class="text-sm text-gray-500">
                    renanlazarotto@gmail.com
                </div>
            </div>
            <div class="flex flex-col">
                <a href="https://github.com/RenanLazarotto" target="_blank"
                    >GitHub</a
                >
                <div class="text-sm text-gray-500">@RenanLazarotto</div>
            </div>
            <div class="flex flex-col">
                <a href="/curriculo">Currículo</a>
                <div class="text-sm text-gray-500">PDF</div>
            </div>
        </div>
    </section>
</article>
