---
title: Migrando do Windows - o início do fim
description: Como e por que eu comecei a migrar do Windows para o Linux
published: 2024-07-24T14:10-03:00
updated: 2024-08-13T18:20-03:00
category: Sistemas operacionais
---

<script lang="ts">
    import Image from "$lib/components/Image.svelte";
    import Link from "$lib/components/Link.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<Image src="/images/posts/migrando-windows-inicio-do-fim/hero.webp"
alt="Imagem do post">
Fonte: <Link href="https://arstechnica.com/information-technology/2012/07/how-to-move-from-windows-to-linux/" target="_blank">
Ars Technica

</Link>
</Image>

Finalmente chegou o dia onde eu me cansei da Microsoft e decidi fazer alguma coisa. Depois de muitos anos preso e atrelado ao Windows, eu tomei minha dose de coragem e me aventurei por algumas distribuições do Linux até achar uma que me fizesse sentir o mesmo quentinho de "estar em casa".

Com isso, chega ao fim um relacionamento de mais de 20 anos com o Windows e hoje eu vou contar os motivos.

---

## O início do fim

O último Windows realmente bom foi o Windows 7. Nada de IA, nada de recursos online que não agregam em nada na usabilidade do sistema ou de lojas de aplicativos malfeitas. Apenas um sistema com o mais básico dos recursos que o Windows pode oferecer, que é o sistema em si, um navegador meia boca pra baixar outro melhor, um player de mídia meia boca mas que dá conta de ouvir uma música ou outra e alguns vídeos que não sejam modernos demais, além de mais uns cacarecos que praticamente não ocupam espaço ou consomem recursos.

<Image 
    src="/images/posts/migrando-windows-inicio-do-fim/w7.webp"
    alt="A área de trabalho 'clássica' do Windows 7, como muitos ainda lembram."
/>

O Windows 8 foi uma tentativa frustrada de modernizar o que não precisava ser modernizado. Com a interface pensada em dispositivos sensíveis ao toque, que era a promessa do momento, quem usava um computador do modo tradicional ficou a ver navios com a mudança. Mesmo com as correções no Windows 8.1 (que nada mais é do que um Windows 8 levemente menos quebrado), o estrago foi feito e não tinha muito mais o que ser feito além de começar tudo de novo.

<Image
src="/images/posts/migrando-windows-inicio-do-fim/w8.webp",
alt="A 'tela' iniciar do Windows 8. Não consigo nem pensar em um comentário para colocar aqui."
/>

O Windows 10 veio para ser o salvador da pátria. A ideia era trazer de volta parte da experiência do Windows 7 com uma identidade visual nova, baseada no quadradão do Windows 8(.1). Foi inclusive vendido como "o último Windows", que seria atualizado constantemente daquele ponto em diante, funcionando como uma forma de "serviço".

<Image 
    src="/images/posts/migrando-windows-inicio-do-fim/w10.webp"
    alt="A área de trabalho do Windows 10, uma mistura do bom e do ruim mas que ainda assim deu certo."
/>

De início, muita coisa foi herdada das versões passadas. Eu consigo me lembrar vagamente de quando a janela do UAC (aquela confirmação chata que aparece pra pedir permissões elevadas pra fazer alguma coisa, como instalar um programa) migrou do estilo Windows 7 para um mais integrado ao restante do Windos 10 - ficou escondida no programa Insiders por algum tempo até ser liberada para todos.

Confesso que o Windows 10 funcionou muito bem por anos desde que eu comecei a usá-lo. Enquanto ainda tinha muita gente brigando pelo Windows 7, eu decidi abraçar o 10 integralmente e não me arrependo nem um pouco disso. Ele me trouxe uma experiência muito boa durante o tempo em que foi realmente cuidado pela Microsoft, chegando a um ápice onde ele superava o Windows 7 em todos os aspectos que importavam pra mim (jogos, basicamente, na época). Até que algum dia, alguém que trabalhava na Microsoft acordou e decidiu que era hora de enfiar boas ideias no 🆒 e anunciaram o Windows 11.

---

## O Windows que ninguém precisava ou queria

Apesar de o Windows 11 contar com alguns avanços interessantes com relação ao Windows 7, especialmente na interface do usuário, de modo geral o sistema é um retrocesso em praticamente todos os aspectos. Lembra do Menu Iniciar? Estragado. Lembra daquela ideia de um sistema enxuto que só tem o básico pra você começar? Não dessa vez.

O 11 carrega uma quantidade absurda de funcionalidades que são totalmente dispensáveis. Que tal um botão dedicado à "widgets", que precisam de internet e uma conta da Microsoft pra funcionar? Ou talvez um Menu Iniciar que não presta pra essencialmente nada, com as funcionalidades básicas do que consagraram o Menu Iniciar deixadas em segundo plano para favorecer recomendações e sugestões? E talvez uma loja de aplicativos mal otimizada e recheada de aplicativos no mínimo duvidosos? Você encontra tudo isso na nova versão do Windows.

<Gallery images={[
{
src: "/images/posts/migrando-windows-inicio-do-fim/w11.webp",
alt: "A área de trabalho do Windows 11.",
},
{
src: "/images/posts/migrando-windows-inicio-do-fim/w11-widgets.webp",
alt: "Menu com 'widgets' do Windows 11 - uma alteração que absolutamente ninguém pediu.",
}
]}/>

Mas calma que piora - já foram <Link href="https://news.microsoft.com/pt-br/trazendo-o-poder-da-ia-para-o-windows-11-desbloqueando-uma-nova-era-de-produtividade-para-clientes-e-desenvolvedores-com-o-windows-copilot-e-o-dev-home/" target="_blank">anunciados</Link> diversos "recursos" de IA que chegarão (ou já chegaram) no Windows em atualizações próximas. Nem todos esses recursos necessariamente rodam localmente (algo que ainda planejo escrever sobre), mas de qualquer forma consomem recursos que poderiam ser utilizados para outras coisas mais importantes, além de são recursos potencialmente invasivos, pois alguns deles funcionam observando tudo que se passa na tela do computador para aprender mais sobre o usuário (algo que eu também planejo escrever sobre).

---

## É hora de mudar

Eu poderia passar mais um bom tempo citando motivos e defeitos na direção que o Windows tomou com o tempo mas vou parar por aqui pois eu pretendo terminar de escrever essa publicação um dia. Tem apenas mais dois fatores que acabaram sendo decisivos: o meu equipamento atual é um tanto quanto defasado e o Windows 10 vai deixar de receber suporte oficialmente em 2025.

Vamos por partes. Saber que o sistema que roda no meu computador vai deixar de receber suporte é algo que me incomoda, pois uma vez que a Microsoft abandone de vez o sistema para o público geral, outros fornecedores de software também vão seguir o mesmo caminho - e como eu inevitavelmente quero voltar a ter um computador para jogos um dia, isso significa que os desenvolvedores vão migrar para o Windows 11 como requisito - e o sistema está fundamentalmente quebrado, especialmente pelo abuso de IA. Vai ser inevitável voltar a usar o Windows em algum ponto, mas até esse dia chegar, provavelmente ferramentas como o AtlasOS vão conseguir resolver uma parte dessas questões - isso se já não hover um Windows 12 que roda 90% na nuvem e com IA para coisas simples como o botão do Menu Iniciar.

Outro fator a se considerar é o aumento artificial nos requisitos de sistema entre o Windows 10 e o Windows 11. Basta procurar na internet maneiras de burlar os requisitos do Windows 11 e veja como ele roda perfeitamente nos mesmos hardwares que rodavam o Windows 10 - incluindo meu notebook, um HP Pavilion 17 com um processador AMD A8-6410, 16GB de memória RAM DDR3 e um SSD SATA3 de 240GB. Pros padrões atuais é uma configuração bem básica, mas dá conta do recado pra praticamente tudo que eu preciso.

Apesar de eu conseguir instalar e rodar de forma bastante satisfatória o Windows 11 (graças ao <Link href="https://atlasos.net/" target="_blank">AtlasOS</Link>, que faz o Windows ser minimamente usável sem o amontoado de inutilidades que ele instala por padrão), o Windows consome mais recursos do que o necessário para fazer o que um sistema operacional foi desenvolvido pra fazer. Com o futuro coberto por IA, algo que provavelmente vai ser "obrigatório" em algum momento, ter uma alternativa para ter um computador usável (sem precisar ter tudo que eu faço nele analisado por uma inteligencia artifical que provavelmente foi treinada especificamente para aprender meus interesses afim de vender coisas pra mim) deixa de ser uma opção para ser uma necessidade.

As duas alternativas, atualmente, são: gastar rios de dinheiro em um Mac, que tem os mesmos problemas com uma cara diferente, ou usar o Linux, que tem problemas e caras diferentes. Como eu ainda não descobri uma forma de fazer dinheiro de forma honesta, legal e/ou sem esforço, migrar para o Linux é a única opção.

## Seja bem vindo, Mint

Depois de alguns dias testando distribuições aleatórias, sejam elas grandes e famosas ou pequenas e quase desconhecidas, eu decidi ficar com o Linux Mint. Não vou me extender ainda mais para falar sobre ele - vou deixar isso pra uma eventual parte 2, mas posso comentar a respeito de como ele facilitou a transição. A interface padrão dele é essa:

<Image
    src="/images/posts/migrando-windows-inicio-do-fim/mint-install.webp"
    alt="Tela padrão da instalação do Mint, que é praticamente a mesma do que é vista após iniciar o sistema instalado pela primeira vez."
/>

Consegue perceber as semelhanças com as áreas de trabalho das versões do Windows que eu coloquei pra cima? Então, facilita bastante a transição quando você já tem um ambiente familiar. Mas, ao contrário do Windows que é muito limitado quando o quesito é personalização, é assim que o meu Linux Mint se parece hoje:

<Image
    src="/images/posts/migrando-windows-inicio-do-fim/desktop.webp"
    alt="Inspirado no Mac, sim, fazer o que se ao menos isso a Apple faz direito?"
/>

Eu tenho todos os meus fluxos de trabalho funcionando perfeitamente nele, incluindo os aplicativos que eu preciso para trabalhar (e até alguns jogos, mas quase não tenho tempo pra isso). O sistema é, de forma geral, mais responsivo e eu tenho a impressão de que ele gerencia melhor os recursos do meu computador.

Nem toda mudança desse porte ocorre sem alguma dificuldade, e com certeza eu não fui premiado com a galinha de ouro nesse ponto: durante meus testes, dentre todas as opções existentes de interfaces gráficas para o Linux, eu esbarrei em problemas com gerenciamento de energia e conectividade, dentre outros ocorridos com interfaces gráficas diferenciadas.

---

Sem mais delongas, já estou com os dedos doendo de tanto "falar mal" do Windows - ou melhor, de apontar seus defeitos e que me fizeram cansar dele. Para a próxima, vamos "falar mal" do Linux e comentar sobre as dificuldades que eu enfrentei até chegar ao ponto onde me dei por satisfeito com o meu computador - e pude ser produtivo com ele.

Até breve!
