---
title: Apresentando a nova galeria!
description: A primeira "grande" atualização chegou e é um componente que eu vou usar muito
published: 2024-08-14T09:26-03:00
updated:
category: Atualizações
---

<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Image from "$lib/components/Image.svelte";
</script>

Com a criação da nova versão do meu site (que já não tem nada de nova), uma das coisas que eu notei que seria extremamente necessário seria uma forma inteligente e componentizada de exibir imagens individuais e em coletivo, popularmente chamado de galeria.

Sistemas de gerenciamento de conteúdo normalmente já tem algum tipo de galeria embutida, ou no mínimo um _lightbox_. Como eu fiz tudo do zero ~~por ser mais teimoso que um burro~~, eu precisava de uma forma própria de fazer isso, preferencialmente sem depender de muitas dependências externas - algo que era um dos objetivos que eu tinha no começo do desenvolvimento da segunda versão. Não é uma questão de **"eu não quero código externo no meu projeto"**, mas sim **"eu quero aprender mais enquanto eu desenvolvo minha própria visão"**.

Infelizmente, nem tudo são rosas e eu cheguei à conclusão de que eu poderia melhorar muito minha galeria usando alguma coisa que já existia.

---

## A minha visão/versão da galeria

Inicialmente, a galeria era para ser algo simples que surgiu como necessidade quando eu comentei sobre as minhas <Link href="/posts/g84-primeiras-impressoes" target="_blank">primeiras experiências com o Moto G84</Link>. Ficou claro que jogar um monte de imagens perdidas durante o artigo poderia não ser a melhor solução pro que eu queria naquele momento, e nascia ali a primeira iteração da galeria, totalmente feita por mim utilizando como base milhares de artigos e tutoriais.

<Image 
    src="/images/posts/atualizacao-galeria/minha-galeria.webp"
    alt="Componente simples de galeria criado por mim"
/>

Logo de início ficou claro algumas coisas. Primeiro, embora a ideia geral seja fácil de ser implementada, muitos recursos que eu acredito que devem estar presentes em qualquer coisa criada em 2024 se mostraram mais chatos do que eu previa. Responsividade e a habilidade de usar gestos ao invés de apenas o mouse foram os principais problemas que eu encontrei, e provavelmente eu teria conseguido resolvê-los sozinho após algum tempo de estudo e pesquisa.

Mas aí eu caio na mesma coisa que me impediu de lançar uma segunda versão pro site: estudo e pesquisa demandam _tempo_, que por sua vez pode ser o minador de qualquer motivação se não houver tempo o suficiente disponível ou dedicado, e já havia indicadores de que era pra esse caminho que eu estava indo quando o primeiro commit da refatoração foi no dia 08 de agosto e até ontem, dia 13 de agosto, não havia nenhum progresso significativo além de reinventar a roda do que já havia sido feito.

Como meu tempo é escasso, por hora a solução foi adotar uma dependência externa que cobrisse os pontos que eu considerei cruciais no começo e é aí que entra o <Link href="https://splidejs.com/" target="_blank">SplideJS</Link>.

---

## Acessibilidade

Antes de comentar a respeito do Splide, vou me aprofundar um pouco a respeito de outra coisa que chamou minha atenção recentemente: a acessibilidade.

Quando eu pensava em acessiblidade, o que vinha na minha mente era _quantas pessoas eu sou capaz de atingir com o que eu desenvolvo_, num sentido mais próximo de alcançe do que de acessível. Após entender melhor o que acessibilidade realmente significa, e o quanto eu releguei isso como dispensável em toda a minha jornada como programador até então, foi necessário todo uma reorganização mental no que diz respeito à acessibilidade durante o desenvolvimento de software, mesmo que apenas uma parte ínfima das pessoas que utilizem o que eu desenvolvo precisem de ferramentas de auxílio para utilizar o celular/computador.

Infelizmente, esse é um campo muito vasto que demanda muito estudo, porém ele não é um impeditivo para o progresso no desenvolvimento. Durante o desenvolvimento da galeria, levei em conta algumas questões que aparentemente são inerentes ao padrão de design de uma galeria, somados ao fato que junto da galeria eu também fiz a implementação de um diálogo de visualização das imagens em maior tamanho.

Aos poucos, eu fui implementando mais opções de acessibilidade conforme eu estudava e encontrava mais a respeito, mas uma coisa ficou clara: será que eu ia ser capaz de cuidar de todos os pontos de interesse quanto à acessibilidade? Será que alguma coisa iria mudar conforme eu incrementasse mais a galeria, incluindo a responsividade para dispositivos móveis?

---

## Pedindo ajuda aos universitários

Bom, ficou claro que era demais pra mim resolver tudo isso de uma vez só, enquanto eu estava estudando diversos pontos sobre o funcionamento da galeria em diferentes dispositivos e aprendia mais sobre como tornar um site acessível.

Resolvi procurar o que havia no escopo de plugins que suportassem o Svelte, que é a base do meu site. A enorme maioria dos scripts de galeria possuem integração apenas com Angular, React ou Vue (quando possuem algum desses, pra ser honesto). Embora não fosse impossível fazer uma implementação desses scripts no Svelte, seria um trabalho que eu não queria ter que fazer no momento.

Foi então que eu esbarrei no SplideJS, um script de galeria que eu já havia visto quando comecei o desenvolvimento do componente de galeria, mas achei que não atenderia o que eu precisava por não ter me empenhado o suficiente em ler a sua documentação~~, também conhecido como fogo no 🆒 pra fazer sozinho~~.

<Image 
    src="/images/posts/atualizacao-galeria/galeria-atual.webp"
    alt="Componente atualizado da galeria usando SplideJS"
/>

De imediato, a transição resolveu todos os problemas funcionais que eu tinha. Apesar de que já era possível navegar de forma basica na galeria através de toques, ainda não havia suporte pra gestos, algo que o plugin trás com algumas poucas configurações. Também foi resolvido a questão de responsividade, uma vez que agora a galeria funciona conforme eu esperava que funcionasse no celular.

Sobre a questão de acessiblidade, existe uma <Link href="https://splidejs.com/guides/accessibility/" target="_blank">seção na documentação</Link> do Splide dedicada à acessibilidade. Eu não li todos os pormenores, mas foi muito melhor deixar que o trabalho de alguém, que já conhece mais sobre o assunto, tomasse lugar do que eu havia feito.

Com um pouco de alterações aqui e ali, eu consegui aplicar um pouco da identidade visual que eu coloquei no meu site para não ficar tão deslocado e o resultado final fala por si só. Ainda precisa de alguns ajustes que vão ser feitos em algum momento entre hoje e o fim do mundo, mas o funcional está pronto e atende as minhas necessidades, que por ventura vão ser as mesmas necessidades de quem visitar meu site. 😁

---

E essa foi a primeira grande mudança no meu site. Em breve, vou começar o desenvolvimento de algumas pequenas ferramentas que devem me ajudar com pequenas coisas no meu dia a dia, então vejo vocês em breve com utilitários pra apresentar!
