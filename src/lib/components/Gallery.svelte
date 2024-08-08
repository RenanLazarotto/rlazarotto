<script lang="ts">
    import { fade } from "svelte/transition";
    import Icon from "./Icon.svelte";
    import { cubicInOut } from "svelte/easing";

    // Conteúdo da galeria
    export let slides: Types.Slide[];

    // Índice da imagem/vídeo selecinado
    let current: number = 0;

    // Controla o modal de visualização da imagem/vídeo
    let isOpen: boolean = false;

    // Referência ao botão de fechar dentro do modal
    let closeButton: HTMLButtonElement;

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

    /**
     * Navega para o item anterior da galeria.
     *
     * Caso o item atual seja o primeiro, navega para o último item da lista
     */
    const previous = () => {
        if (current > 0) {
            current--;
        } else {
            current = slides.length - 1;
        }
    };

    /**
     * Navega para o próximo item da galeria.
     *
     * Caso o item atual seja o último, navega para o primeiro item da lista
     */
    const next = () => {
        if (current + 1 < slides.length) {
            current++;
        } else {
            current = 0;
        }
    };

    /**
     * Navega para o item especificado da galeria.
     *
     * @param {number} index - Índice do item para o qual navegar
     */
    const navigate = (index: number) => {
        current = index;
    };

    /**
     * Abre o modal de visualização de imagem
     */
    const open = () => {
        // Oculta a barra de navegação na página
        document.body.style.overflow = "hidden";

        // Abre o modal
        isOpen = true;

        // Adiciona os listeners dos eventos
        closeButton.addEventListener("keydown", disableTab);
        document.addEventListener("keydown", keyboardClose);

        // Espera 100ms para focar no botão de fechar
        setTimeout(() => {
            closeButton.focus();
        }, 100);
    };

    /**
     * Fecha o modal de visualização de imagem
     */
    const close = () => {
        // Deixa a critério do navegador exibir a barra de navegação da página
        document.body.style.overflow = "auto";

        // Fecha o modal
        isOpen = false;

        // Remove os listeners dos eventos
        closeButton.removeEventListener("keydown", disableTab);
        document.removeEventListener("keydown", keyboardClose);
    };
</script>

<div class="relative mt-4 not-prose">
    <div class="h-[400px]">
        {#each slides as slide, i}
            {#if current === i}
                <div
                    transition:fade={{
                        delay: 0,
                        duration: 500,
                        easing: cubicInOut,
                    }}
                    class="flex justify-center"
                >
                    {#if slide.type == "image"}
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            class="max-w-fit h-[400px] object-contain rounded absolute"
                        />
                        <p
                            class="absolute z-50 bottom-[10px] bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold"
                        >
                            {slide.title}
                        </p>
                    {:else}
                        <!-- svelte-ignore a11y-media-has-caption -->
                        <video
                            class="h-[400px] object-contain max-w-fit absolute"
                            controls
                            loop
                        >
                            <source src={slide.src} type="video/webm" />
                        </video>
                        <p
                            class="absolute z-50 bottom-10 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold"
                        >
                            {slide.title}
                        </p>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>

    <button
        on:click={open}
        class="absolute bottom-0 left-0 cursor-pointer w-auto p-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
    >
        <Icon id="expand" width={24} height={24} />
    </button>

    <div class="flex absolute right-0 bottom-0 gap-2">
        <button
            on:click={previous}
            class="cursor-pointer w-auto px-3 py-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
        >
            <Icon id="arrow-left" width={24} height={24} />
        </button>
        <button
            on:click={next}
            class="cursor-pointer w-auto px-3 py-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
        >
            <Icon id="arrow-right" width={24} height={24} />
        </button>
    </div>
</div>

<div
    role="dialog"
    class:hidden={!isOpen}
    aria-label={slides[current].title}
    class="fixed z-50 left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-md grid grid-rows-[1fr_auto] p-4 gap-4"
>
    <div class="flex w-full relative overflow-hidden">
        <div class="flex relative h-full w-full justify-center">
            {#each slides as slide, i}
                {#if current === i}
                    <div
                        transition:fade={{
                            delay: 0,
                            duration: 500,
                            easing: cubicInOut,
                        }}
                        class="flex justify-center relative"
                    >
                        {#if slide.type == "image"}
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                class="object-contain rounded-lg not-prose h-full max-w-fit mx-auto absolute"
                            />
                        {:else}
                            <!-- svelte-ignore a11y-media-has-caption -->
                            <video
                                class="object-contain rounded-lg not-prose h-full max-w-fit mx-auto absolute"
                                controls
                            >
                                <source src={slide.src} type="video/webm" />
                            </video>
                        {/if}
                    </div>
                {/if}
                <!-- {#if slide.type == "image"}
                    <div
                        class:hidden={i != current}
                        class="relative"
                        in:fade
                        out:fade
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            class="object-contain rounded-lg not-prose h-full max-w-fit mx-auto"
                            in:fade
                            out:fade
                        />
                    </div>
                {:else}
                    <div class:hidden={i != current} class="relative">
                        < !-- svelte-ignore a11y-media-has-caption -- >
                        <video
                            class="object-contain max-w-fit not-prose h-full mx-auto"
                            in:fade
                            out:fade
                            controls
                        >
                            <source src={slide.src} type="video/webm" />
                        </video>
                    </div>
                {/if} -->
            {/each}
        </div>

        <button
            bind:this={closeButton}
            on:click={close}
            class="absolute left-0 bottom-4 cursor-pointer w-auto px-3 py-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
        >
            <Icon id="close" width={32} height={32} />
        </button>
        <div class="flex absolute right-0 bottom-4 gap-2">
            <button
                on:click={previous}
                class="cursor-pointer w-auto px-3 py-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
            >
                <Icon id="arrow-left" width={24} height={24} />
            </button>
            <button
                on:click={next}
                class="cursor-pointer w-auto px-3 py-2 text-white font-bold text-lg select-none transition ease-in-out rounded bg-mint-900/50 hover:bg-mint-800"
            >
                <Icon id="arrow-right" width={24} height={24} />
            </button>
        </div>
    </div>

    <nav class="flex gap-2 not-prose">
        {#each slides as slide, i}
            <button
                on:click={() => navigate(i)}
                class="{i == current
                    ? 'opacity-100'
                    : 'opacity-35'} hover:opacity-70 rounded"
            >
                <img
                    src={slide.thumb}
                    alt={slide.alt}
                    class="object-cover rounded h-16 w-16"
                />
            </button>
        {/each}
    </nav>
</div>
