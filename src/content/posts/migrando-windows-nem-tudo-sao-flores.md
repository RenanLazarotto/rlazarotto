---
title: Migrando do Windows - nem tudo são flores
description: Minha experiência diária mudou a minha forma de ver os sistemas de modo geral - e isso me fez questionar minha decisão. Até que ponto a falta de conveniência vale a pena pelos princípios?
published: 2024-09-12T17:55-03:00
updated:
category: Sistemas operacionais
---

<script lang="ts">
    import Image from "$lib/components/Image.svelte";
    import Link from "$lib/components/Link.svelte";
</script>

Algum tempo atrás eu comecei a minha migração do Windows para Linux, que se deu em partes por uma questão de necessidade - meu computador quando eu escrevi sobre a migração não se dava muito bem com o Windows e isso impactava diretamente a minha produtividade (e a minha sanidade mental).

Hoje, o cenário é um pouco diferente. Eu recentemente troquei de notebook por um outro bem melhor: saí de um HP Pavilion com um AMD A8-6410 para um Acer Aspire 3 com um Ryzen 5 2500U. A diferença é notável, apesar de a tela pode ser considerada um _downgrade_ quando comparada ao motivo antigo por conta da sua resolução, mas é algo que pode ser resolvido com uma troca futuramente.

<Image
src="/images/posts/migrando-windows-nem-tudo-sao-flores/6410-vs-2500u.png"
alt="Comparativo de algumas especificações entre os AMD A8 6410 e o AMD Ryzen 5 2500U">
Comparativo de algumas especificações entre os AMD A8 6410 e o AMD Ryzen 5 2500U
</Image>

Juntamente com essa mudança, vieram algumas outras supresas: por motivos que eu desconheço, o notebook novo simplesmente não parece gostar do Linux. Bora detalhar isso e reconsiderar se eu fiz a escolha certa ou se eu só sou um bom libriano indeciso.

---

## Burrice e incompatibilidade

O meu notebook novo já não é exatamente um computador novo - o Ryzen 5 que tem nele é de 2017, e já deve ter completado os 7 anos de idade. Não é de todo uma máquina super potente para os padrões atuais, mas também está longe de ser um computador ruim. Com um pouquinho de carinho, ele vai chegar no patamar que eu espero pra um computador razoável em que eu possa trabalhar - o primeiro grande passo foi trocar o HD convencional que havia nele por um SSD. Ele também tem um slot M2, mas com interface SATA ao invés dos NVME mais modernos. Não sei se é motivo de incompatibilidade do processador ou corte de custos por parte da fabricante, mas é melhor ter espaço para duas unidades de armazenamento do que para uma só.

Como é de praxe, toda vez que eu abro algum computador pra fazer qualquer tipo de coisa eu sempre faço uma limpeza. Notebooks costumam ter problemas de aquecimento por conta das saídas de ar ficarem entupidas com sujeira, então é sempre uma boa ideia fazer uma limpeza. Como eu não sei de todo o histórico desse computador até ele chegar nas minhas mãos, eu costumo trocar também a pasta térmica, já que na enorme maiora das vezes ela está ressecada e já não serve de muita coisa.

Foi exatamente isso que eu fiz com esse notebook e cometi um pequeno deslize no processo - esqueci de ligar o conector da ventoinha de refrigeração e, por conta disso, o computador estava superaquecendo e desligando sozinho. Após resolver esse "probleminha", comecei a configurar a máquina e, com apenas alguns minutos de uso enquanto eu abria o navegador, ele travou. A primeira coisa que fiz foi verificar se ele estava esquentando demais - vai que alguma coisa deu errao? - mas ele estava em temperatura normal.

Pensei que poderia ser uma travada "normal", algo que geralmente acontece quando tem uma súbita demanda de processamento (enquanto eu havia solicitado a abertura do navegador eu estava instalando outros programas), e costuma se resolver em alguns segundos. Porém, até mesmo o mouse parou de responder, um péssimo sinal. Não voltou sozinho nem mesmo depois de 5 minutos parado, então forcei a reinicialização do sistema.

Aí me veio a primeira grande realização: eu prefiro ter paz à ter razão. Peguei meu HD externo com a ISO do Windows 11 e fiz a instalção. Nenhum travamento esquisito no processo de instalação, configuração, atualização (que é _MUITO_ mais demorado, diga-se de passagem), migração da instalação padrão do Windows para o AtlasOS e instalação dos meus aplicativos - tudo funcionou como deveria funcionar.

---

## Que comecem os questionamentos!

A primeira coisa que me veio na cabeça foi: será que eu _realmente_ gosto de usar o Linux, ou eu me tranquei num círculo fechado onde apenas queria ver as coisas que eram do meu agrado enquanto ignorava sumariamente os defeitos dele como um sistema? Ou talvez eu estivesse cego de desgosto pelas decisões que a Microsoft tomou com relação ao Windows e precisava de alguma forma para extravasar minha insatisfação?

Bom, vamos por partes.

### Será que eu realmente gosto do Linux?

Essa é uma pergunta muito complicada de responder, já que os motivos vão muito além do que é superficial.

Dentro do universo do Linux, e de modo geral quando o assunto é código-aberto eu já notei esse mesmo padrão, você pode fazer as coisas do seu jeito. Essa é uma liberdade que nenhum outro sistema operacional te dá - e eu acho isso incrível. A possibilidade de poder testar diferentes ambientes, com diferentes premissas e ideais para fazer as mesmas coisas é uma experiência única, e com um pouco de criatividade e esforço é possível criar <Link href="https://www.reddit.com/r/unixporn/" target="_blank">interfaces muito bonitas</Link>.

Mas, até onde isso é relevante o suficiente para ser um fator decisivo? Quanto tempo eu preciso "gastar" pra customizar o sistema até que ele chegue num "grau de perfeição", apenas pra logo depois deixar toda a perfeição visual ficar a cargo da minha visão periférica enquanto eu me foco em outra coisa?

Depois disso, vem o argumento que costuma ser a "grande sacada" de todo mundo que gosta de criticar o Linux sem nunca ter usado o sistema:

#### _"No Linux não tem programa nenhum"_.

<Image 
    src="/images/posts/migrando-windows-nem-tudo-sao-flores/apps-mint.png"
    alt="Loja de aplicativos do Linux Mint - será mesmo que não tem nada?">
Loja de aplicativos do Linux Mint - será mesmo que não tem nada?
</Image>

Essa é a maior mentira que já vi alguém falar a respeito do sistema. Pelo menos para o meu fluxo de trabalho, não só o Linux tem todos os programas que eu uso como eles costumam ser exatamente iguais às versões do Windows. Quando não há uma versão para Linux de algum programa, na grande maioria das vezes existe alguma alternativa que foi criada justamente para substituir o programa faltante.

#### _"Ah, mas e o Office? Vai editar um Word como?"_

Outro argumento furado - já estamos em 2024, se você ainda depende do Office pra qualquer coisa provavelmente seu fluxo de trabalho não acompanhou as evoluções desde os anos 90, eu diria. Com ferramentas como o Google Docs, eu acho realmente difícil de justificar usar o Microsoft Office, mas se esse é o caso, existem alternativas como o LibreOffice e o OnlyOffice, que inclusive são as duas opções que eu considero usar até mesmo no Windows por conta de não ser necessário pagar por algo que eu uso tão pouco - mas acabo usando o Google Docs no fim das contas já que eu só preciso fazer umas tabelinhas pra comparação e mais nada.

#### _"Tá, mas no Linux não dá pra jogar! Há!"_

<Image 
    src="/images/posts/migrando-windows-nem-tudo-sao-flores/steam-linux.png"
    alt="Listagem de jogos compatíveis com Linux de acordo com o Steam - mais de 15 mil jogos">
Listagem de jogos compatíveis com Linux de acordo com o Steam - mais de 15 mil jogos
</Image>

<Link href="https://store.steampowered.com/linux" target="_blank">É sério mesmo isso?</Link> Muitos títulos contam com versões nativas para Linux, e quando isso não é possível existem diversas ferramentas pra resolver esse problema, e é possível até mesmo ver o grau de compatibilidade do jogo com o Linux em sites como o <Link href="https://www.protondb.com/explore?selectedFilters=excludeNative" target="_blank">ProtonDB</Link>.

Inclusive, alguns jogos rodam _melhor_ no Linux do que no Windows. Mas, como eu falei antes...

### Nem tudo são flores

Nenhum processo de migração ocorre sem algumas dores de cabeça ou algumas dificuldades. É inevitável que em algum ponto atritos vão acontecer, e comparações entre o antigo e o novo vão existir. Problemas de compatibilidade costumam ser o maior desanimador de migrações, ou o maior criador de dores de cabeça.

Como eu disse, meu maior problema com esse novo computador foi uma incompatibilidade de algum item de hardware com o Linux que estava ocasionando travamentos aleatórios. Eu já briguei muito com meu antigo computador para achar a solução para um comportamento chato onde o modo avião era ativado toda vez que eu fechava a tela do notebook, e eu não tenho mais força e energia para isso - eu quero que as coisas funcionem com o menor esforço o possível.

É legal e interessante conhecer seu sistema mais a fundo, e ter essa possibilidade de manipular comportamentos pequenos do computador é sensacional para certos contextos, mas quando deixa de ser algo que você deseja, deixa de ser uma solução para ser um problema. Só de imaginar o esforço que seria:

1. Identificar o que estava causando as travadas aleatórias
2. Isolar o responsável de maneira reproduzível
3. Procurar por soluções
4. Achar uma solução efetiva e definitiva
5. Como último recurso, testar outra distribuição para ver se o problema persiste

Já me fez desistir. Eu não tenho mais paciência ou vontade pra isso. Ficou difícil de justificar o Linux quando o Windows _simplesmente **funciona**_.

### Mas eu já desisti?

Desde que decidi escrever esse artigo, meu maior receio é justamente a sensação que eu fiquei de que, na verdade, eu desisti no primeiro obstáculo. Mas, parando para lembrar, eu uso Linux desde antes do ubuntu ter dois dígitos de versão principal, então acho que eu dei muitas chances pro sistema no decorrer de uns 20 anos. Chances de me conquistar totalmente não faltaram.

E não é de todo uma desistẽncia - meu notebook de trabalho ainda rota Linux com o Mint 22, e não vai mudar tão cedo - com ele as coisas estão simplesmente funcionando e eu não vejo motivos para mexer em time que está ganhando. Nesse computador, um Lenovo com Core i7-8565U, 12GB de RAM e SSD NVME de 256GB. Tem até uma placa de vídeo "dedicada" MX110 - que dizem que é capaz de rodar alguns jogos, mas não consigo pensar em nenhum que eu realmente queria testar.

No fim das contas eu passo mais tempo nesse computador do trabalho do que no meu próprio computador, que atualmente está sendo usado mais como som ambiente na hora de dormir do que qualquer outra coisa.

Mas, existem batalhas que são ganhas simplesmente se você não participar. Eu acho que isso faz parte do envelhecimento - perceber situações que você pode evitar simplesmente aceitando as coisas como elas são, ou então adaptando o que for possível ao invés de querer que seja tudo do seu jeito.

A verdade é que meu computador é, no mínimo, uma batalha muito custosa para ser ganha - e por um benefício mínimo. O que me resta agora é aceitar que as críticas que eu fiz no passado talvez não fossem tão "criticosas" como pareciam...
