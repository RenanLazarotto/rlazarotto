---
title: O processo de desenvolvimento do site - parte 1
description: Da necessidade de atualizar o que já existe até a vontade de fazer algo novo
published: 2024-06-06T14:25-03:00
updated:
category: Atualizações
---

<script lang="ts">
    import Media from "$lib/components/Media.svelte";
    import Link from "$lib/components/Link.svelte";
</script>

E começa hoje uma explicação de como esse lindo e maravilhoso site que você está vendo foi criado! Sem delongas, vamos ao que interessa!

## No princípio...

Conforme eu comentei no post de <Link href="/posts/ola-mundo">Olá mundo... de novo?</Link>, essa é a segunda versão do meu site. Criado inicialmente para ser apenas um portfolio, eu decidi que queria algo mais pessoal, e que principalmente tivesse mais a minha cara do que algo que pareça ter saído de um modelo qualquer que você encontra por aí.

---

### Passo 1: o que reaproveitar?

Da primeira versão do meu site, eu sabia que poderia reaproveitar alguma coisa - principalmente conteúdo. Eu já tinha em mente que eu não iria querer o mesmo formato de página única separada em blocos, com páginas separadas apenas para currículo e publicações (que eu nunca cheguei a efetivamente fazer).

Sendo assim, logo no começo da reescrita ficou evidente que eu iria reaproveitar apenas o conteúdo do site - e ainda assim, boa parte dele sofreu alterações, principalmente com o objetivo de simplificar os conteúdos. A ideia geral era algo que fosse mais minimalista.

---

### Passo 2: criando os componentes

A criação de componentes se mistura muito com o passo 3, que é a criação do layout, pois alguns componentes só existem em função do layout, como por exemplo os componentes para o cabeçalho (Header) e para o rodapé (Footer). Esses acabam mudando muito durante o processo de desenvolvimento, especialmente por ter sido bem difícil pra mim achar um layout que eu considerasse definitivo já no começo (mais sobre isso abaixo).

Por outro lado, alguns componentes existem em função do conteúdo. Esse post que você lê agora é composto por um componente de mídia e um componente de link, enquanto a rota responsável por todos os posts usa um componente de data formatada e o componente do ícone "escrito por humano", ali em baixo. Esses são algus dos componentes que, apesar de também terem sofrido muitas alterações no decorrer do desenvolvimento do site, não foram reescritas - foram ajustes para alinhar os componentes com a identidade visual que eu estava criando, ou para corrigir bugs que eu encontrava no caminho.

<Media media={{
src: "/images/posts/processo-desenvolvimento-p1/componentes.webp",
title: "Componentes que existem atualmente no site",
alt: "Listagem da pasta do código-fonte com os componentes usados no site",
type: "image",
}} />

Tem alguns outros componentes para listas, ícones, a minha foto na página <Link href="/pages/sobre">sobre</Link> e para um alerta/banner, que até o momento eu usei mais para colocar informações que não precisam necessariamente fazer parte do conteúdo dos poucos posts que escrevi.

---

### Passo 3: definindo layout

Com alguns componentes já criados, veio o desafio de definir o layout do site. Seria um site com uma ou duas colunas? Como seria o cabeçalho? E o menu? Seria uma navegação horizontal ou vertical? Em dispositivos móveis teria um menu lateral que fica oculto? Eu poderia seguir com essa lista de perguntas, mas acho que já deu pra entender o conceito.

Apenas nessa parte, eu acredito que eu fiz mais protótipos do que eu consigo lembrar. Alguns foram mais longe, outros não saíram das primeiras linhas de código - algumas vezes você já consegue perceber que algo não vai dar certo logo de cara. Cheguei a modelos _quase_ definitivos outras tantas vezes, mas sempre encontrava algo que me fazia repensar o que eu já tinha feito até então - fosse passeando pela internet ou fosse por algum incômodo ou desconforto meu.

Depois de muito protelar, cheguei num layout final, que é o que você está vendo hoje. Muito do que ficou na versão final já estava pronto quando eu no site de <Link href="https://alexandersandberg.com/" target="_blank">Alexander Sandberg</Link>. Por exemplo, os itens de navegação das páginas principais ainda estavam no cabeçalho da página, ao invés de terem uma seção dedicada após a introdução:

<Media media={{
src: "/images/posts/processo-desenvolvimento-p1/navegacao.webp",
title: "Introdução com a navegação das principais páginas do site logo após",
alt: "Captura do menu de navegação com as princiapis páginas do site em baixo do texto de introdução",
type: "image",
}} />

Em um primeiro momento, eu ia incluir os projetos que eu trabalhei também na página inicial, após a navegação, mas preferi agrupar essas informações a meu respeito dentro da página <Link href="/pages/sobre">sobre</Link>, afinal a ideia é destacar a minha introdução e os conteúdos que eu vou escrever.

---

### Passo 4: as páginas

Agora, veio a dúvida: _quais_ páginas criar? Será que eu deixo os projetos e as experiências profissionais separadas da página sobre mim?

Acabei por deixar apenas 3 páginas principais: a página <Link href="/pages/agora">Agora</Link>, baseada no movimento <Link href="https://nownownow.com/about" target="_blank">nownownow</Link>, a página <Link href="/pages/sobre">Sobre</Link>, onde eu efetivamente falo sobre mim, meu histórico profissional e os projetos que eu destaquei, e a página <Link href="/pages/um-dia">Um dia</Link>, baseada no movimento <Link href="https://someday.page/" target="_blank">someday</Link>, onde eu comento um pouco sobre meus planos a longo prazo. Essa divisão faz bastante sentido pra mim, uma vez que o site tem um intuito mais pessoal.

Ainda falta pelo menos uma página, que vai ficar no rodapé do site: uma página <Link href="https://indieweb.org/colophon" target="_blank">_"colophon"_</Link>, onde eu vou comentar um pouco mais sobre o que foi utilizado no desenvolvimento do site - mas de uma forma difente do que vou comentar na parte 2 do processo de desenvolvimento - pense em algo mais próximo a uma lista do que um detalhamento.

---

E agora eu chego ao fim da parte 1. Espero que esse pequeno esboço da tarefa herculéa que foi o desenvolvimento dessa versão. Mas ao menos ela saiu do papel!

Até a próxima.
