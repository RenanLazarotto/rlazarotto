<script>
    import Container from "$lib/components/Container.svelte";
</script>

<footer>
    <Container>
        <p class="text-sm font-medium text-center">
            Renan Lazarotto &copy; {new Date().getFullYear()}
        </p>
    </Container>
</footer>

<style>
    footer {
        background-image: repeating-conic-gradient(
            var(--purple-1) 0% 25%,
            var(--purple-2) 0% 50%
        );
        background-position:
            0 0,
            8px 8px;
        background-size: 16px 16px;
        background-color: var(--purple-2);

        border-top: 1px solid var(--purple-3);
        padding: var(--size-4) 0;
    }

    p {
        font-weight: var(--font-weight-5);
        text-align: center;
        font-size: var(--font-size-1);
    }
</style>
