<script lang="ts">
    import { X } from "lucide-svelte";

    let { src, alt, children }: Props.Image = $props();

    let isOpen: boolean = $state(false);

    const keyboardClose = (e: KeyboardEvent) => {
        if (e.code == "Escape" || e.key == "Escape") {
            close();
        }
    };

    const disableTab = (e: KeyboardEvent) => {
        if (e.code == "Tab") {
            e.preventDefault();
        }
    };

    const open = () => {
        isOpen = true;
        document.addEventListener("keydown", keyboardClose);
    };

    const close = () => {
        isOpen = false;
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
    class="fixed z-50 left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/60 backdrop-blur-md not-prose p-4 flex justify-center items-center overscroll-contain"
>
    <img
        {src}
        {alt}
        class="rounded-lg max-w-full max-h-full h-auto self-center"
    />
    <button
        onclick={close}
        onkeydown={disableTab}
        class="absolute top-4 right-4 sm:left-4 sm:bottom-4 sm:top-auto sm:right-auto cursor-pointer px-3 py-2 text-white font-bold select-none transition-all ease-in-out rounded-lg bg-mint-950/75 hover:bg-mint-800 flex items-center backdrop-blur"
    >
        <X size={24} />
        <p class="hidden sm:contents">Fechar</p>
    </button>
</div>

<style>
    div[role="dialog"].hidden {
        transition:
            display 300ms allow-discrete,
            overlay 300ms allow-discrete;
        animation: close 300ms forwards;
    }

    div[role="dialog"] {
        animation: open 300ms forwards;
    }
</style>
