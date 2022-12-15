<script>
    import Link from "./link.svelte";
    import SectionTitle from "./section-title.svelte";
</script>

<section>
    <SectionTitle id="about">Sobre mim</SectionTitle>

    <div>
        <p>
            Olá! Eu me chamo <b>Renan</b> e eu gosto de desenvolver aplicações
            em PHP, com ou sem frameworks, sendo minha maior afinidade com
            <Link href="https://symfony.com/">Symfony</Link> (💜).
        </p>
        <p>
            Iniciei no desenvolvimento ainda na minha adolescência, quando criei
            interesse por automatizar algumas tarefas que achava muito
            repetitivas e acabei aprendendo um pouco de programação por
            curiosidade.
        </p>
        <p>
            Desde então, trabalhei em uma variada gama de projetos, começando
            como técnico de suporte, e-commerce, serviços financeiros e de
            proteção ao crédito e até mesmo software para concessionárias
            automotivas.
        </p>
        <p>
            Recentemente, iniciei uma nova jornada na <Link
                href="https://wlgrupo.com/empresa/hammer/"
                target="_blank">Hammer Consultoria</Link
            >. Estou ansioso pelos projetos que irei desenvolver!
        </p>
    </div>
</section>

<style>
    section {
        margin-bottom: var(--section-margin);
    }

    div {
        color: var(--white);
        display: flex;
        flex-direction: column;
        font-size: var(--font-size);
        line-height: var(--line-height);
        row-gap: 1rem;
        text-align: justify;
    }
</style>
