<script lang="ts">
    export let src: string;
    export let alt: string = "";
</script>

<div class="mb-4">
    <img {src} {alt} class={`border-4 border-white rounded ${$$props.class}`} />
    <slot />
</div>
