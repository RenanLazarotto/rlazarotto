<script lang="ts">
    import Carousel from "$lib/components/Carousel.svelte";

    let slides: Types.Slide[] = [
        {
            src: "/images/posts/moto-g84-primeiras-impressões/tela-inicial.webp",
            caption: "Tela inicial, já customizada",
            alt: "Minha tela inicial do Moto G84",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/painel-notificações.webp",
            caption: "Painel de notificações",
            alt: "Painel de notificações do Moto G84",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/configurações-rapidas.webp",
            caption: "Painel de configurações rápidas",
            alt: "Configurações rápidas do Moto G84",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/menu-desligar.webp",
            caption: "Menu de desligar",
            alt: "Menu de desligar do Moto G84",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/personalização.webp",
            alt: "Tela de personalização do Moto G84",
            caption: "Tela de personalização do Moto G84",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/plano-de-fundo.webp",
            alt: "Opções de plano de fundo",
            caption: "Opções de plano de fundo",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/temas.webp",
            alt: "Temas pré-definidos",
            caption: "Temas pré-definidos",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/fontes.webp",
            alt: "Fontes do celular",
            caption: "Fontes do celular",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/cores.webp",
            alt: "Opções de cores",
            caption: "Opções de cores",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/ícones.webp",
            alt: "Opções de formato dos ícones",
            caption: "Opções de formato dos ícones",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/texto-tamanho-exibição.webp",
            alt: "Ajuste do tamanho de exibição e da fonte",
            caption: "Ajuste do tamanho de exibição e da fonte",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/layout.webp",
            alt: "Opções de layout da grade de aplicativos",
            caption: "Opções de layout da grade de aplicativos",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/sons.webp",
            alt: "Customização de sons",
            caption: "Customização de sons",
        },
        {
            src: "/images/posts/moto-g84-primeiras-impressões/modo-escuro.webp",
            alt: "Customização do modo escuro",
            caption: "Customização do modo escuro",
        },
    ];
</script>

<svelte:head>
    <title>Renan Lazarotto</title>
</svelte:head>

<Carousel {slides} title="Galeria" />
