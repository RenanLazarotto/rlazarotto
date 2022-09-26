<script>
    import Link from "./components/link.svelte";
</script>

<section class="mb-20">
    <div class="flex items-center gap-x-2 mt-3 mb-9">
        <span
            class="h-px block relative w-8 bg-purple-500"
        />
        <p id="about" class="font-bold text-lg sm:text-2xl">Sobre mim</p>
        <span
            class="h-px block relative w-32 bg-purple-500"
        />
    </div>

    <div
        class="flex flex-col gap-y-4 text-md md:text-xl leading-relaxed font-light text-justify sm:text-left"
    >
        <p class="flex-wrap">
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
            >. Estou ansioso pelos projetos que irei desenolver!
        </p>
    </div>
</section>
