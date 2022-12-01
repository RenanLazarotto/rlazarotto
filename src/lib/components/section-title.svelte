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
        column-gap: 1.25rem;
        margin-top: 0.75rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-weight: 500;
        font-family: var(--font-highlight);
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
        color: var(--white);
    }

    span {
        height: 2px;
        background-color: var(--accent);
    }

    div span:first-of-type {
        flex: 1;
    }
    div span:last-of-type {
        flex: 5;
    }
</style>
