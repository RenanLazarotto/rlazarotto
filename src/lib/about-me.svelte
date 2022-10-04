<script>
    import Link from "./components/link.svelte";
    import SectionTitle from "./components/section-title.svelte";
</script>

<section class="mb-24">
    <SectionTitle id="about">Sobre mim</SectionTitle>

    <div
        class="text-lg text-justify text-gray-300"
    >
        <p class="mb-4">
            Olá! Eu me chamo <b>Renan</b> e eu gosto de desenvolver aplicações
            em PHP, com ou sem frameworks, sendo minha maior afinidade com
            <Link href="https://symfony.com/">Symfony</Link> (💜).
        </p>
        <p class="mb-4">
            Iniciei no desenvolvimento ainda na minha adolescência, quando criei
            interesse por automatizar algumas tarefas que achava muito
            repetitivas e acabei aprendendo um pouco de programação por
            curiosidade.
        </p>
        <p class="mb-4">
            Desde então, trabalhei em uma variada gama de projetos, começando
            como técnico de suporte, e-commerce, serviços financeiros e de
            proteção ao crédito e até mesmo software para concessionárias
            automotivas.
        </p>
        <p class="mb-4">
            Recentemente, iniciei uma nova jornada na <Link
                href="https://wlgrupo.com/empresa/hammer/"
                target="_blank">Hammer Consultoria</Link
            >. Estou ansioso pelos projetos que irei desenvolver!
        </p>
    </div>
</section>
