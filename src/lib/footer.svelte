<script>
    import Link from "./components/link.svelte";
</script>

<footer>
    <p>
        <Link href="https://github.com/RenanLazarotto/site"
            >Desenvolvido por Renan Lazarotto</Link
        >,<br> baseado no site de <Link href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang</Link
        >.
    </p>
</footer>

<style>
    footer {
        padding-top: 4rem;
        padding-bottom: 2rem;
        text-align: center;
        width: 92%;
        margin-left: auto;
        margin-right: auto;
    }

    footer > p {
        font-size: 0.75rem;
        line-height: 1rem;
        color: rgb(75 85 99);
    }
</style>
