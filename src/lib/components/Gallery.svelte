<script lang="ts">
    import Glide from "@glidejs/glide";
    import "@glidejs/glide/dist/css/glide.core.min.css";
    import { ChevronLeft, ChevronRight } from "lucide-svelte";
    import { onMount } from "svelte";

    let { children } = $props();

    let glide: Glide;
    let options = {};
    let dots = $state(0);

    const init = (node: HTMLElement) => {
        glide = new Glide(node, options);
        glide.mount();

        return {
            update: glide.update,
            destroy: glide.destroy,
        };
    };

    onMount(() => {
        dots = document.querySelectorAll("li.glide__slide").length;
        console.log(dots);
    });
</script>

<div use:init class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {@render children()}
        </ul>
    </div>
    <div class="glide__wrapper">
        <div class="glide__arrows" data-glide-el="controls">
            <button data-glide-dir="<" class="glide__arrow">
                <ChevronLeft size={16} />
            </button>
            <button data-glide-dir=">" class="glide__arrow">
                <ChevronRight size={16} />
            </button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
            {#each Array(dots) as _, i}
                <button
                    class="glide__bullet"
                    onclick={() => {
                        glide.go(`=${i}`);
                    }}
                >
                    <span class="sr-only">Goto slide {i + 1}</span>
                </button>
            {/each}
        </div>
    </div>
</div>
