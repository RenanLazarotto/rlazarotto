<!--
    @component 
    Cria uma galeria com imagens ou vídeos

    @param {Types.Slide[]} slides Conteúdo da galeria
-->
<script lang="ts">
    import { handleKeypress } from "$lib/utils";
    import Icon from "./Icon.svelte";

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

<div
    class="relative bg-black/30 rounded-lg mt-4 not-prose"
    class:w-fit={slides.length == 1}
    class:pt-2={slides.length == 1}
    class:px-2={slides.length == 1}
    class:mb-4={slides.length == 1}
    class:mx-auto={slides.length == 1}
>
    {#each slides as slide, i}
        {#if slide.type == "image"}
            <div
                role="button"
                class:hidden={i != current}
                class:inline-flex={slides.length == 1}
                class:flex={slides.length > 1}
                class="flex-col items-center"
                on:click={open}
                on:keypress={(e) => handleKeypress(e, ["Space", "Enter"], open)}
                tabindex="0"
            >
                <img
                    src={slide.src}
                    alt={slide.alt}
                    class="w-full max-h-[400px] object-contain cursor-pointer rounded"
                />
                <p class="text-sm text-gray-400 text-center my-2">{slide.title}</p>
            </div>
        {:else}
            <div class:hidden={i != current} class="flex flex-col items-center">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    class="w-full max-h-[400px] object-contain"
                    controls
                    on:click={open}
                    on:keypress={(e) => handleKeypress(e, ["Space", "Enter"], open)}
                >
                    <source src={slide.src} type="video/webm" />
                </video>
                <p class="text-sm text-gray-400 text-center my-2">{slide.title}</p>
            </div>
        {/if}
    {/each}

    {#if slides.length > 1}
        <button
            on:click={previous}
            class="left-0 cursor-pointer absolute top-1/2 w-auto p-4 -mt-5 text-white font-bold text-lg select-none transition ease-in-out rounded-r hover:bg-black/20"
        >
            <Icon id="back" width={32} height={32} />
        </button>
        <button
            on:click={next}
            class="right-0 cursor-pointer absolute top-1/2 w-auto p-4 -mt-5 text-white font-bold text-lg select-none transition ease-in-out rounded-l hover:bg-black/20"
        >
            <Icon id="forward" width={32} height={32} />
        </button>
    {/if}
</div>
{#if slides.length > 1}
    <nav class="flex justify-center gap-2 mt-4 mb-4 not-prose">
        {#each slides as slide, i}
            <button
                on:click={() => navigate(i)}
                class="{i == current ? 'border-mint-500' : 'border-white/50'}  border-2 hover:border-purple-400 rounded"
            >
                <img src={slide.thumb} alt={slide.alt} class="object-cover rounded h-12 w-12" />
            </button>
        {/each}
    </nav>
{/if}

<div
    role="dialog"
    class:hidden={!isOpen}
    aria-label={slides[current].title}
    class="fixed z-30 left-0 top-0 w-full min-h-screen overflow-auto bg-black/60 backdrop-blur-md flex flex-col justify-center"
>
    <button
        bind:this={closeButton}
        on:click={close}
        class="absolute top-8 right-8 cursor-pointer transition-colors duration-300 bg-mint-700 hover:bg-mint-600 active:bg-mint-800 text-white rounded-full h-12 w-12 flex items-center justify-center"
    >
        <Icon id="close" width={32} height={32} />
    </button>
    {#if slides[current].type == "image"}
        <img src={slides[current].src} alt={slides[current].alt} class="mx-auto p-8 z-40 max-h-screen" />
    {:else}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="flex-1 mx-auto p-8 z-40 w-full" controls>
            <source src={slides[current].src} type="video/webm" />
        </video>
    {/if}
</div>
