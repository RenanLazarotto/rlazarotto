---
title: Desenvolvendo o site - parte 1
date: 2022-12-21 10:26:00 -03
resume: "O processo de desenvolvimento de um site, em detalhes"
image: "/assets/images/desenvolvimento/hero.png"
slug: "desenvolvimento-p1"
draft: false
---

<script>
    import REPL from '$lib/components/blog/repl.svelte';
    import Img from '$lib/components/blog/img.svelte';
    import Link from '$lib/components/link.svelte';
</script>

Desde que comecei a trabalhar como programador, tive interesse em desenvolver um site próprio. Por diversos motivos, nunca consegui colocar um projeto desenvolvido exclusivamente por mim no ar.

Quando minha carreira como programador começou a se solidificar, achei que era hora de separar um tempo para criar meu site. Já tendo trabalhado muitas vezes com frameworks backend, que também ficavam responsáveis pelo frontend, desenvolver um site utilizando, preferencialmente, apenas ferramentas de frontend foi um desafio que criei para mim, uma vez que meu conhecimento com frontend se resumia a, basicamente, Bootstrap e um pouco de JavaScript.

## Começando
Inicialmente, procurei quais eram os frameworks frontend mais em alta no mercado e li um pouco sobre cada um deles. Para quem já é da área, as opções são meio óbvias: React e Vue, ou seus derivados, como Next.js e Nuxt.js. Comecei com o React, pois era a ferramenta ideal para o momento - na empresa que trabalhava quando comecei o projeto, o React era usado pelo time de frontend, então me pareceu natural iniciar com uma ferramenta que poderia me ajudar no dia-a-dia do trabalho (além de ser uma excelente desculpa pra estudar algo novo fora da minha alçada).

<Img src="/assets/images/desenvolvimento/react.png" legend="Logo do React, framework desenvolvido pelo Facebook." alt="Logo do React" />

O React é meio... confuso, para quem não tem conhecimento com frontend. Os componentes num primeiro momento são estranhos, mas em poucos dias divididos entre leitura e prática, eu tinha um esqueleto funcional do meu site, com navegação e um pouco de SEO já aplicados.

Mesmo assim, não foi o ideal para mim. A maneira como o React é construído é um verdadeiro campo minado para quem não está acostumado a lidar o estado de uma aplicação. Coisas simples, como passar um componente como propriedade para um componente filho, foram uma tormenta para mim (possivelmente por falta de conhecimento no framework e pela dificuldade de encontrar uma resposta simples para minhas pesquisas). Eu buscava desde o começo algo que fosse simples e direto, de maneira análoga ao que eu faço com frameworks tipo Symfony.

## Continuando a busca
Uma vez que o React não atingiu as minhas expectativas (novamente, por pura falta de conhecimento da minha parte, e pela ansiedade de conseguir um resultado satisfatório com uma curva de aprendizado curta - um erro muito grande que cometi), voltei a procurar novas ferramentas. 

De imediato, a ideia era testar o Vue. Uma rápida lida na documentação me mostrou que o Vue me traria uma experiência similar à do React, com alguns pontos que eu considerei ainda piores, como a maneira como trabalhar com condições e repetições nos templates, que eu considero ser, no mínimo, exótica demais, especialmente para quem tem um background considerável em construir layouts com Twig.

<Img src="/assets/images/desenvolvimento/condicionais-vue.png " legend="Condições e repetições em Vue. A sintaxe não me é nada agradável." alt="Exemplo de condicionais e repetições em Vue" />

Nenhum desses pontos é demérito dos frameworks, é culpa da minha falta de conhecimento e pouco contato com as diferentes formas de fazer as mesmas coisas. Mesmo assim, minha busca seguiu em algo que fosse familiar ao que eu já conhecia. Até que eu cheguei no...

## Svelte
<Img src="/assets/images/desenvolvimento/svelte.png " alt="Imagem com o logo do Svelte." />

Eu caí no Svelte de paraquedas. Enquanto lia artigos sobre a performance de diferentes frameworks e bibliotecas JS, achei uma comparação onde o Svelte estava entre os primeiros colocados, na frente de todas as outras alternativas que já tinha pesquisado até então. Isso me chamou um pouco a atenção e resolvi ir atrás, pois o Svelte é um framework bastante novo e ser tão performático assim foi algo que me pareceu bastante promissor.

Logo de cara, percebi que o Svelte é exatamente o que eu estava atrás. Com um mínimo possível de código, era possível fazer exatamente o que eu queria, sem precisar de implementações específicas de um framework, tudo parecendo extremamente *puro*.

<REPL src="hello-world" legend="'Hello World' feito em Svelte - direto e simples." />

Em pouco tempo, eu já tinha migrado a maior parte do que já estava feito em React para o Svelte - com a facilidade de me parecer bastante familiar com o que eu já conhecia. Algumas questões que eram bastante enigmáticas para mim no React foram facilmente respondidas pela própria documentação do Svelte, como por exemplo minha dificuldade em passar um componente como propriedade para um componente filho. Repetições e condições são muito similares à sintaxe que o Twig usa (que, até onde eu saiba, é defivada do Handlebars/Mustache).

<Img src="/assets/images/desenvolvimento/condicionais-svelte.png" legend="Sintaxe de condições no Svelte." atl="Sintaxe de condições no Svelte" />

<Img src="/assets/images/desenvolvimento/repeticoes-svelte.png" legend="Sintaxe de repetições no Svelte." atl="Sintaxe de repetições no Svelte" />

Pelas condições/repetições terem suas declarações separadas das tags HTML, elas são muito mais legíveis. Outro ponto que foi uma vantagem do Svelte em relação ao React são como as rotas são gerenciadas.

No React, é necessário usar o <Link href="https://reactrouter.com/en/main">react-router</Link> para ter rotas, equanto no Svelte ele segue a estrutura de pastas:

<Img src="/assets/images/desenvolvimento/rotas-svelte.png" legend="Rotas do Svelte baseadas na estrutura de pastas." atl="Rotas do Svelte baseadas na estrutura de pastas" />

## Finalizando
E assim eu termino a primeira parte de como desenvolvi meu site. Na próxima parte, vou comentar um pouco sobre o layout, como eu cheguei ao layout atual e as etapas que foram necessárias pra chegar até aqui.

Obrigado e até o próximo post!