---
title: Nova versão a caminho!
description: Nova versão do Svelte = nova versão do blog
published: 2024-11-11T12:28-03:00
updated:
category: Atualizações
---

Olá mundo novamente!

Como nada na vida são flores, algumas coisas do lado pessoal mudaram um pouco e eu acabei precisando focar mais em trabalho e sem querer o blog ficou um pouco de lado, algo que eu definitivamente não queria.

Eu tinha inclusive começado a escrever um review do meu fone novo, um Fuxi H3 (que eu ainda pretendo terminar em algum momento), mas apareceu uma nova prioridade pra antes disso: uma atualização da "plataforma" do meu blog.

## Atualização de plataforma

Pra quem não sabe, meu blog é feito usando Svelte sem o uso de bancos de dados, ou seja, todas as publicações são apenas arquivos no código-fonte do projeto. A principal vantagem dessa maneira de organizar as coisas é que eu não preciso depender de um servidor rodando um banco de dados (que envolve custo, algo que eu tentei evitar completamente nesse meu site), consequentemente eu tenho um ponto a menos de falha. A principal desvantagem é que pra cada vez que eu faço um post novo, o que infelizmente tem sido mais demorado do que eu gostaria, um novo deployment é realizado no projeto, ou seja, é como se fosse sempre publicado uma nova versão do site mesmo que tudo que tenha mudado seja um único arquivo (desconsiderando imagens, quando existirem).

Recentemente, foi lançada uma nova versão do Svelte, a muito antecipada versão 5. Eu venho usando ele desde a versão 2, se não me falha a memória. Até a versão 4 as atualizações eram basicamente incrementais e com impactos mínimos. Na versão 5, alguns conceitos foram mudados e consequentemente houveram mudanças mais significativas na forma como certas coisas funcionam, o que essencialmente quebrou algumas partes dos meus códigos quando eu tentei dar uma de malandrão e atualizei as versões das dependências do projeto.

Não apenas isso, alguns conceitos que eu apliquei no desenvolvimento do site já não me parecem exatamente ideais por serem repetitivos sob alguns aspectos, então como houveram mudanças conceituais na base, elas meio que precisam se refletir no resto do projeto para que seja possível manter tudo alinhado e fácil de manter.

Por isso, estou estudando essas mudanças pra ver como elas me afetam e como eu posso tirar proveito delas. Estou finalmente conseguindo alguns minutos de folga aqui e ali, que vou fazer valer aqui. Não vai ser uma grande reestilização, não quero perder mais tempo com isso, mas alguma coisa visual ainda vai mudar, com bastante foco em consistência visual, algo que ainda me incomoda apesar de o design do meu site ser extremamente simples e minimalista, algo deliberadamente proposital pra facilidar a manutenção.

Espero conseguir realizar essa transição logo, pois quero criar uma certa frequência de postagens. Enquanto isso não acontece, dá pra acompanhar o que eu vou eventualmente fazer no <a href="https://github.com/RenanLazarotto/rlazarotto" target="_blank">repositório do blog</a>, mais especificamente no branch <a href="https://github.com/RenanLazarotto/rlazarotto/tree/next" target="_blank">next</a> (que, no momento em que estou escrevendo esse post, ainda não existe).

Esse branch servirá como uma prévia do que virá, e já garanto que vai ter muita coisa que não funciona nele até estar tudo pronto.

Até breve!
