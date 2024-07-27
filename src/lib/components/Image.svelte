<script lang="ts">
    import { handleKeypress } from "$lib/utils";
    import Icon from "./Icon.svelte";

    export let src: string;
    export let alt: string;
    export let title: string;
    export let enlargeable: boolean = true;

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
    class="not-prose relative mx-auto mb-4 mt-4 w-fit rounded-lg bg-black/30 px-2 pt-2"
>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div
        role={enlargeable ? "button" : null}
        class="inline-flex flex-col items-center"
        on:click={enlargeable ? open : () => {}}
        on:keypress={enlargeable
            ? (e) => handleKeypress(e, ["Space", "Enter"], open)
            : () => {}}
        tabindex={enlargeable ? 0 : null}
    >
        <img
            {src}
            {alt}
            class:cursor-pointer={enlargeable}
            class="w-full rounded object-contain"
        />
        {#if $$slots.default}
            <p class="my-2 text-center text-sm text-gray-400">
                <slot />
            </p>
        {/if}
    </div>
</div>

{#if enlargeable}
    <div
        role="dialog"
        class:hidden={!isOpen}
        aria-label={title}
        class="not-prose fixed left-0 top-0 z-30 h-screen min-h-screen w-full overflow-auto bg-black/60 backdrop-blur-md flex items-center"
    >
        <button
            bind:this={closeButton}
            on:click={close}
            class="absolute right-8 top-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-mint-700 text-white transition-colors duration-300 hover:bg-mint-600 active:bg-mint-800"
        >
            <Icon id="close" width={32} height={32} />
        </button>
        <img {src} {alt} class="z-40 mx-auto p-8" />
    </div>
{/if}
