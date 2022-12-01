<script>
    import SectionTitle from "./components/section-title.svelte";
</script>

<section>
    <SectionTitle id="contact">Contato</SectionTitle>
    <div>
        <p>
            Embora eu não esteja buscando novas oportunidades atualmente, estou
            sempre aberto para projetos. Além de desenvolver, também posso
            ajudar com consultoria e suporte técnico para PCs e notebooks.
        </p>
        <p>
            Posso ajudar a escolher o melhor hardware equipamento para a sua
            empresa, auxiliar na migração de hardware antigo pra um novo, buscar
            as melhores soluções pros mais diversos problemas do dia a dia
            dentre outros.
        </p>
        <p>
            Quer saber mais? Não hesite em entrar em contato, e responderei
            assim que possível.
        </p>
    </div>
</section>

<style>
    section {
        margin-bottom: 6rem;
    }

    div {
        font-size: 1.125rem;
        line-height: 1.75rem;
        text-align: justify;

        color: var(--white);
    }

    p {
        margin-bottom: 1rem;
    }
</style>
