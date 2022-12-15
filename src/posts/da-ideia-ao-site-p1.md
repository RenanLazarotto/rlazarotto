---
title: Da ideia ao site - como tudo começou
date: 2022-12-15 06:12:00 -03
resume: "O início de tudo, parte 1"
image: "/assets/images/placeholder.png"
slug: "da-ideia-ao-site-p1"
draft: true
---

Como desenvolvedor, eu sempre tive vontade de ter um projeto publicado para chamar de meu, um
desejo que venho carregando comigo desde a época da faculdade.

Conforme eu fui me desenvolvendo profissionalmente, me foquei muito no backend e acabei deixando
o frontend de lado. Essa foi a deixa perfeita - juntar uma área de desenvolvimento na qual quase não
tinha familiaridade com a vontade de ter algo meu.

## O projeto inicial
Inicialmente, comecei meus estudos usando React - um framework que vejo sendo usado em muitos lugares,
algo que considerei importante ter em meu currículo. Aprender uma nova ferramenta é sempre um desafio,
ainda mais quando a familiaridade com as ferramentas é praticamente nula.

O React como ferramenta é incrível. Criado pelo Facebook em 2013, ganhou uma imensa popularidade com o
passar dos anos, sendo utilizado em projetos de todos os tamanhos e complexidades.

No entanto, achei a complexidade do framework alta demais para algo tão simples quanto um site pessoal,
especialmente no quesito de como funcionam os componentes, o DOM virtual, a dificuldade de entender
alguns conceitos e fazer algumas coisas (especificamente, lidar com props entre componentes sem adicionar
ainda mais níveis de complexidade). Aliado ao fato de que o `create-react-app` resultava em um processo
de desenvolvimento absurdamente lento (até onde eu usei o React), parti em busca de outra ferramenta.

Nesse meio tempo, considerei alguns nomes famosos, como Angular e Vue, porém as similaridades com o React
foram um sinal de alerta para mim - eu queria algo que fosse simples de manter e não tivesse uma curva de aprendizado muito longa para quem não tinha experiência nenhuma com ferramentas JS, visto que todo o estudo
e desenvolvimento seria realizado apenas no meu tempo livre.

Foi enquanto procurava a respeito de frameworks JS que descobri um nome até então pouco conhecido: o
SvelteKit.

## Descobrindo o Svelte
Lendo um pouco mais a respeito do SvelteKit, descobri o framework perfeito para mim: a curva de aprendizado
foi muito menor da que eu enfrentei com o React. Uma aplicação Svelte é quase tão simples quanto importar um 
script dentro de uma página e utilizar seu código nela.

Minha ideia aqui não é comentar sobre as nuances entre os frameworks, existem muitos artigos na internet que
fazem isso de forma muito melhor do que eu conseguiria. Ao invés disso, vou destacar alguns passos do
desenvolvimento.

### Rotas baseadas na hierarquia de pastas
Esse foi o primeiro ponto que achei interessante quando comparado ao React. Enquanto o React precisa de um
pacote extra para funcionar gerenciar as rotas, no SvelteKit basta criar um aquivo dentro da pasta de rotas.
A estrutura das pastas também se reflete nas rotas.

![Estrutura de rotas no código-fonte do meu site](/assets/images/routes.png "Estrutura de rotas do meu site")

Ainda é possível ir mais a fundo, como definir layouts específicos para cada rota e obter dados de maneira
bastante simples tanto no layout quanto na página em si. Certamente, também é possível fazer essas coisas
em outros frameworks, cada um com suas particularidades, mas pra mim esse foi um dos pontos positivos na


## Finalizando
Esse é o primeiro post relatando minha experiência na criação do meu próprio site. É difícil falar sobre
algo que já aconteceu a algum tempo - o projeto inicial foi começado em meados de 2021 e desde que mudei
do React para o SvelteKit, praticamente tudo que aprendi de React caiu no esquecimento.

No próximo post, vou comentar um pouco mais sobre o desenvolvimento do site em si: iniciando no Tailwind CSS,
os inúmeros designs que idealizei até chegar no que está publicado hoje.

Até breve!