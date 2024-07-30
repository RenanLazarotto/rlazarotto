---
title: Olá, mundo... de novo?
description: "Saindo de um portfolio para um site pessoal, reescrito do zero e sobre uma nova perspectiva."
published: 2024-03-07T20:00-03:00
updated: 2024-06-06T10:00-03:00
category: Atualizações
---

<script lang="ts">
    import Image from "$lib/components/Image.svelte";
    import Link from "$lib/components/Link.svelte";
    import List from "$lib/components/List.svelte";
    import ListItem from "$lib/components/ListItem.svelte";
</script>

## Olá, mundo outra vez!

Depois de muito tempo e muito sofrer com inúmeras ideias que não se mostraram boas, finalmente chego numa segunda versão do meu site! Contrariando a mim mesmo, deixei de seguir o formato de portfolio que eu utilizei na primeira versão. Agora, meu site é uma mistura dos dois, com foco em ser um blog onde eu pretendo comentar sobre as mais diversas e variadas coisas que eu aprendo ou acontecem comigo no meu dia a dia.

---

### Novo design

Eu não sou exatamente o que pode se chamar de bom em desenhar interfaces. Eu tenho algumas noções de como as coisas devem ser, mas de modo geral não é meu forte. Por conta disso, e grande parte da demora pra finalmente lançar uma versão 2.0, procurei por inspiração em vários outros sites/portfolios diferentes pra achar o que mais me agradava.

Por conta disso, implementei muitas coisas que sozinhas eram incríveis, mas juntas não davam certo. Escrevi muito código que foi descartado simplesmente por não ter necessidade ou uso real.

Do momento que eu comecei essa reescrita até agora, eu devo ter testado _pelo menos_ seis layouts completamente diferentes - dentre eles:

<List class="gap-2 mb-8">
<ListItem>
<p class="before:content-['•'] before:mr-2 before:text-mint-500">
Um design que lembrava um painel administrativo (dashboard)
</p>
</ListItem>
<ListItem>
<p class="before:content-['•'] before:mr-2 before:text-mint-500">
Um blog onde todas as páginas do site eram publicações
</p>
</ListItem>
<ListItem>
<p class="before:content-['•'] before:mr-2 before:text-mint-500">
Um site similar ao antigo, porém redesenhado para não parecer tanto quanto um portfolio "genérico"
</p>
</ListItem>
<ListItem>
<p class="before:content-['•'] before:mr-2 before:text-mint-500">
Um site extremamente minimalista, com pouquíssimas informações detalhadas
</p>
</ListItem>
</List>

E esses são os que eu lembro. Por fim, acabei por achar um único site que me serviu de inspiração "definitiva": o site pessoal de <Link href="https://alexandersandberg.com/" target="_blank">Alexander Sandberg</Link>. Eu já tinha um layout praticamente pronto, mas algumas coisas ainda me incomodavam, como os links de navegação como uma barra superior, algo que eu considero comum _demais_ ao ponto de eu preferir não utilizar essa disposição por causa disso.

---

### Mais pessoal

A ideia de ter um site pessoal é _muito_ antiga. Meu primeiro contato com HTML foi quando eu ainda era criança, na faixa dos 7 anos se não me falha a memória. Lembro vagamente de ter feito, na época, uma págnina HTML simples com uma lista de músicas que eu tinha na época, com a intenção de fazer disso um formulário onde seria possível escolher quais músicas você queria baixar e, bom, baixá-las de uma vez só.

Não preciso nem dizer que isso nunca saiu do papel, pois eu não tinha sequer maturidade o suficiente pra entender tudo que era necessário pra fazer essa ideia funcionar, ainda mais nos anos 90, quando a internet como conhecemos não existia. Mas a ideia ficou cravada na minha memória, pois eu ainda lembro relativamente bem de como eu me senti empolgado por simplesmente _ver_ na minha tela uma lista com checkboxes do lado.

Quando eu comecei a primeira versão do que viria ser meu site, eu queria algo que fosse um portfolio, igual aos <Link href="https://github.com/emmabostian/developer-portfolios" target="_blank">muitos outros que tem por aí</Link>.

<Image 
src="/images/posts/ola-mundo/site-v1.webp"
title="A carinha da versão 1.0 do meu site"
alt="Captura de tela da versão 1.0 do meu site"
/>

Confesso que eu fiquei - ainda estou - bem feliz com o resultado. Foi um grande desafio desenvolver esse site, especialmente se considerar que eu estava começando a me aventurar mais profundamente no desenvolvimento front-end. Hoje ele já não representa a imagem que eu quero passar a meu respeito como profissional, a começar pela seção de "Habilidades", algo que eu considerei ser absolutamente essencial destacar _pois era o que todos os outros portfolios que eu visitei faziam_.

<Image
src="/images/posts/ola-mundo/habilidades.webp"
title="Bloco de habilidades, prontamente destacado"
alt="Captura de tela exibindo a seção de habilidades"
 />

Agora, o foco é em me apresentar como pessoa e minhas ideias. Ainda mantenho um histórico de alguns projetos em que trabalhei, destacando quais habilidades efetivamente foram utilizados em cada um, além do histórico profissional na página <Link href="/pages/sobre">sobre mim</Link>. Essas informações, ao meu ver, já dão uma visão geral do meu conhecimento, sem necessariamente entrar em detalhes que, muitas vezes, acabam não sendo tão relevantes.

---

### Finalizando

Bom, essa é a minha re-introdução do site que venho desenvolvendo há, pelo menos, <Link href="https://github.com/RenanLazarotto/rlazarotto/commit/9d53b4522b323b1ec14303b70bd6e3bcb6f906fe" target="_blank">dois anos</Link>. Tenho muitas ideias, das quais algumas já coloquei em prática, pro futuro. Nos vemos em breve!
