<script lang="ts">
    import { Lightbox } from "svelte-lightbox";

    export let title: string;
    export let slides: Types.Slide[];
</script>

<h2>{title}</h2>
<div class="grid grid-cols-8 gap-4">
    {#each slides as slide}
        <Lightbox description={slide.caption}>
            <img src={slide.src} alt={slide.alt} class="hover:-translate-y-2 ease-in-out duration-300" />
        </Lightbox>
    {/each}
</div>
