<script lang="ts">
    interface Props {
        src: string;
        type: string;
        children?: import('svelte').Snippet;
    }

    let { src, type, children }: Props = $props();
</script>

<div
    class="not-prose relative mx-auto mb-4 mt-4 w-fit rounded-lg bg-black/30 px-2 pt-2"
>
    <div class="flex flex-col items-center">
        <!-- svelte-ignore a11y_media_has_caption -->
        <video class="max-h-[400px] w-full object-contain rounded" controls>
            <source {src} {type} />
        </video>
        {#if children}
            <p class="my-2 text-center text-sm text-gray-400">
                {@render children?.()}
            </p>
        {/if}
    </div>
</div>
