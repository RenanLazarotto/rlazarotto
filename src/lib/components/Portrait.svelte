<script lang="ts">
    interface Props {
        src: string;
        alt: string;
        title?: string;
        rounded?: boolean;
    }

    let {
        src,
        alt,
        title = "",
        rounded = false
    }: Props = $props();
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
