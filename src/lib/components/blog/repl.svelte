<script>
    export let src;
    export let legend = "";
</script>

<iframe src={`https://svelte.dev/repl/${src}`} title="REPL" />
{#if (legend != "")}
    <p>{legend}</p>
{/if}

<style>
    iframe {
        width: 80%;
        height: 400px;
        margin: 1rem auto;
    }

    p {
        text-align: center;
        font-variation-settings: 'ital' 10;
        font-size: 0.8rem;
    }
</style>
