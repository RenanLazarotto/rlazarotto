<script lang="ts">
    import Icon from "./Icon.svelte";

    interface Props {
        src: string;
        alt: string;
        children?: import('svelte').Snippet;
    }

    let { src, alt, children }: Props = $props();

    // Controla o modal de visualização da imagem/vídeo
    let isOpen: boolean = $state(false);

    // Referência ao botão de fechar dentro do modal
    let closeButton: HTMLButtonElement = $state();

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

<div class="my-6 not-prose">
    <div class="flex flex-col justify-center">
        <button onclick={open} class="max-h-[500px]">
            <img
                {src}
                {alt}
                class="max-h-[500px] h-full object-contain rounded cursor-pointer mx-auto"
            />
        </button>
        {#if children}
            <p class="mt-2 text-center text-sm text-gray-400">
                {@render children?.()}
            </p>
        {/if}
    </div>
</div>

<div
    role="dialog"
    class:hidden={!isOpen}
    aria-label={alt}
    class="fixed z-50 left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-md not-prose p-4 flex justify-center items-center"
>
    <img
        {src}
        {alt}
        class="rounded-lg max-w-full max-h-full h-auto self-center"
    />
    <button
        bind:this={closeButton}
        onclick={close}
        class="absolute top-4 right-4 sm:left-4 sm:bottom-4 sm:top-auto sm:right-auto cursor-pointer px-3 py-2 text-white font-bold select-none transition-all ease-in-out rounded-lg bg-mint-950/75 hover:bg-mint-800 flex items-center backdrop-blur"
    >
        <Icon id="close" width={24} height={24} />
        <p class="hidden sm:contents">Fechar</p>
    </button>
</div>
