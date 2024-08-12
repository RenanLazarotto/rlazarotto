<script lang="ts">
    import Icon from "./Icon.svelte";

    // Conteúdo da galeria
    export let slides: Types.Image[];

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

<div class="relative my-6 not-prose">
    <div class="h-[500px] flex justify-center">
        {#each slides as slide, i}
            <button on:click={open} class:hidden={current != i} class="h-full">
                <img
                    src={slide.src}
                    alt={slide.alt}
                    class="h-full object-contain rounded cursor-pointer"
                />
            </button>
        {/each}
    </div>
</div>
<nav class="flex justify-center gap-2 not-prose">
    {#each slides as slide, i}
        <button
            on:click={() => navigate(i)}
            class:border-mint-500={i == current}
            class:border-transparent={i != current}
            class="{i == current
                ? 'hover:border-purple-400'
                : 'hover:border-purple-400/75'} border-2 rounded-lg overflow-hidden"
        >
            <img
                src={slide.src}
                alt={slide.alt}
                class:opacity-50={i != current}
                class:opacity-100={i == current}
                class="object-cover h-16 min-h-16 w-16 min-w-16 hover:opacity-75"
            />
        </button>
    {/each}
</nav>

<div
    role="dialog"
    class:hidden={!isOpen}
    aria-label={slides[current].alt}
    class="fixed z-50 left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-md not-prose p-4 flex justify-center items-center"
>
    <img
        src={slides[current].src}
        alt={slides[current].alt}
        class="rounded-lg max-w-full max-h-full h-auto self-center"
    />

    <button
        bind:this={closeButton}
        on:click={close}
        class="absolute left-4 bottom-4 cursor-pointer px-3 py-2 text-white font-bold select-none transition ease-in-out rounded-lg bg-mint-900/50 hover:bg-mint-800 flex items-center"
    >
        <Icon id="close" width={24} height={24} /> Fechar
    </button>
</div>
