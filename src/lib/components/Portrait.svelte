<script lang="ts">
    export let src: string;
    export let alt: string;
    export let title: string = "";
    export let rounded: boolean = false;
</script>

<img
    class:rounded-full={rounded}
    class:rounded={!rounded}
    class:shape-circle={rounded}
    {src}
    {alt}
    {title}
    class="sm:float-right mx-auto my-0 sm:mx-4 sm:my-4 max-w-32 max-h-32 sm:max-w-64 sm:max-h-64"
/>
