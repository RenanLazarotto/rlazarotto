<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css/default";
    import "$lib/themes/splide.css";
    import Icon from "./Icon.svelte";
    import { onMount } from "svelte";
    import type {
        Splide as SplideType,
        SplideSlide as SplideSlideType,
    } from "@splidejs/svelte-splide";
    import { browser } from "$app/environment";

    export let images: Types.Image[];

    // Referências à elementos
    let main: SplideType;
    let thumbs: SplideSlideType;
    let closeButton: HTMLButtonElement;

    // Índice selecinado
    let current: number = 0;

    // Controla o modal de visualização
    let isOpen: boolean = false;

    /**
     * Função de callback para fechar o modal com o teclado
     *
     * @param {KeyboardEvent} e - Evento que é disparado quando uma tecla é pressionada
     */
    const keyboardClose = (e: KeyboardEvent) => {
        if (e.code == "Escape" || e.key == "Escape") {
            close();
        }
    };

    /**
     * Função para desabilitar "capturar" o foco da tecla Tab para o botão de fechar
     * quando o modal é aberto
     *
     * @param {KeyboardEvent} e - Evento que é disparado quando uma tecla é pressionada
     */
    const disableTab = (e: KeyboardEvent) => {
        if (e.code == "Tab") {
            e.preventDefault();
        }
    };

    const open = () => {
        document.body.style.overflow = "hidden";
        isOpen = true;
        closeButton.addEventListener("keydown", disableTab);
        document.addEventListener("keydown", keyboardClose);
        setTimeout(() => {
            closeButton.focus();
        }, 100);
    };

    const close = () => {
        document.body.style.overflow = "auto";
        isOpen = false;
        closeButton.removeEventListener("keydown", disableTab);
        document.removeEventListener("keydown", keyboardClose);
    };

    onMount(() => {
        if (browser) {
            main.splide.sync(thumbs.splide);
        }
    });
</script>

<Splide
    aria-label="Image gallery"
    options={{
        type: "loop",
        height: "650px",
        pagination: false,
        arrows: true,
        drag: true,
        snap: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
    }}
    bind:this={main}
    class="my-6 not-prose"
>
    {#each images as image, i}
        <SplideSlide class="flex justify-center">
            <button
                on:click={(e) => {
                    current = i;
                    open();
                }}
                class="max-h-[650px] h-full"
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    class="h-full object-contain rounded"
                />
            </button>
        </SplideSlide>
    {/each}
</Splide>

<Splide
    options={{
        rewind: true,
        fixedWidth: 128,
        fixedHeight: 96,
        isNavigation: true,
        gap: 4,
        focus: "center",
        pagination: false,
        cover: true,
        arrows: false,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
    }}
    bind:this={thumbs}
    class="not-prose mb-6"
>
    {#each images as image}
        <SplideSlide class="rounded-lg">
            <img src={image.src} alt={image.alt} class="rounded-lg" />
        </SplideSlide>
    {/each}
</Splide>

<div
    role="dialog"
    class:hidden={!isOpen}
    aria-label={images[current].alt}
    class="fixed z-50 left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-md not-prose p-4 flex justify-center items-center"
>
    <img
        src={images[current].src}
        alt={images[current].alt}
        class="rounded-lg max-w-full max-h-full h-auto self-center"
    />

    <button
        bind:this={closeButton}
        on:click={close}
        class="absolute top-4 right-4 sm:left-4 sm:bottom-4 sm:top-auto sm:right-auto cursor-pointer px-3 py-2 text-white font-bold select-none transition-all ease-in-out rounded-lg bg-mint-950/75 hover:bg-mint-800 flex items-center backdrop-blur"
    >
        <Icon id="close" width={24} height={24} />
        <p class="hidden sm:contents">Fechar</p>
    </button>
</div>
