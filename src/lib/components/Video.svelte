<script lang="ts">
    export let src: string;
    export let type: string;
</script>

<div
    class="not-prose relative mx-auto mb-4 mt-4 w-fit rounded-lg bg-black/30 px-2 pt-2"
>
    <div class="flex flex-col items-center">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="max-h-[400px] w-full object-contain rounded" controls>
            <source {src} {type} />
        </video>
        {#if $$slots.default}
            <p class="my-2 text-center text-sm text-gray-400">
                <slot />
            </p>
        {/if}
    </div>
</div>
