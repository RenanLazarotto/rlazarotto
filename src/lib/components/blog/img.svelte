<script>
    export let src;
    export let alt;
    export let legend = "";
    export let rounded = false;
</script>

<div>
    <img {src} {alt} loading="lazy" title={alt} class:rounded />
    {#if legend != ""}
        <p>{legend}</p>
    {/if}
</div>

<style>
    div {
        margin: 1rem auto;
    }
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto 0.5rem;
    }

    img.rounded {
        border-radius: var(--border-radius);
    }

    p {
        text-align: center;
        font-size: 0.8rem;
        display: block;
        margin-top: 0.4rem;
        margin-bottom: 1rem;
        font-variation-settings: "ital" 10;
    }
</style>
