<script>
    export let id;
</script>

<div>
    <span />
    <p {id}>
        <slot />
    </p>
    <span />
</div>

<style>
    div {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        margin-top: 0.75rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-weight: 500;
        font-family: "JetBrains Mono";
        font-size: 1.125rem;
        line-height: 1.75rem;
        letter-spacing: 0.1rem;
    }

    span {
        height: 1px;
        background-color: rgb(139 92 246);
        width: 4rem;
    }

    @media (min-width: 640px) {
        p {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
</style>
