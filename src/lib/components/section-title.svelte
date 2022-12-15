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
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 2rem;
    }

    span {
        height: 2px;
    }

    div span:first-of-type {
        flex: 1;
        background: rgb(124, 77, 255);
        background: linear-gradient(
            90deg,
            rgba(124, 77, 255, 0) 0%,
            rgba(124, 77, 255, 1) 100%
        );
    }
    div span:last-of-type {
        flex: 1;

        background: rgb(124, 77, 255);
        background: linear-gradient(
            90deg,
            rgba(124, 77, 255, 1) 0%,
            rgba(124, 77, 255, 0) 100%
        );
    }
</style>
