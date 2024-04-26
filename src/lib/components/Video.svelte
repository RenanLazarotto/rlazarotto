<script lang="ts">
    export let src: string;
</script>

<div class="mb-4">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls class="border-4 border-white rounded">
        <source {src} type="video/webm" />
    </video>
    <slot />
</div>
