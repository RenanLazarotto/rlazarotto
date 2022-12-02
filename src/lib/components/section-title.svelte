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
        align-items: center;
        column-gap: 1.25rem;
        display: flex;
        margin-bottom: 1.5rem;
        margin-top: 0.75rem;
    }

    p {
        color: var(--white);
        font-family: var(--font-highlight);
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2rem;
        text-align: center;
    }

    span {
        background-color: var(--accent);
        height: 2px;
    }

    div span:first-of-type {
        flex: 1;
    }
    div span:last-of-type {
        flex: 5;
    }
</style>
