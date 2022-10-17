<script>
    export let progress = 50;
</script>

<div>
    <div style="width: {progress}%" />
</div>

<style>
    div {
        height: 1rem;
        position: relative;
        background-color: rgb(31 41 55);
        border-radius: 0.25rem;
    }

    div > div {
        height: 1rem;
        border-radius: 0.25rem;
        mask: linear-gradient(#fff, 0, 0);
    }

    div > div::before {
        border-radius: 0.25rem;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(to right, #3b82f6, #5b21b6);
    }
</style>
