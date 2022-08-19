<script>
    import Brasil from "$lib/icons/brasil.svelte";
    import Heart from "phosphor-svelte/lib/Heart/Heart.svelte";
</script>

<footer class="pt-12 pb-6 text-center">
    <p class="text-xs text-gray-500 dark:text-purple-200">
        renan.lazarotto © {new Date().getFullYear()}
    </p>
    <div
        class="flex flex-col items-center justify-center text-sm text-gray-600 dark:text-purple-100"
    >
        <div class="flex items-center">made with <Heart class="text-purple-500 mx-1" weight="duotone" /> in</div>
        <div class="flex"><Brasil /></div>
    </div>
</footer>
