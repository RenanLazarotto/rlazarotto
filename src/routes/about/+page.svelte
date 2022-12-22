<script>
    import { page } from "$app/stores";

    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/SEO/SEO.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";
    import Link from "$lib/components/link.svelte";
    import ArrowSquareOut from "phosphor-svelte/lib/ArrowSquareOut/ArrowSquareOut.svelte";

    export let data;

    let url = $page.url.href;
</script>

<BaseLayout>
    <div slot="header">
        <SEO
            pageTitle="Sobre o site"
            description="Página com informações a respeito do site e das ferramentas usadas para criá-lo."
            {url}
            imgUrl="/assets/images/pages/sobre.png"
            imgAlt="Imagem representativa de um código-fonte de uma página."
            imgWidth="900"
            imgHeight="500"
        />

        <Header navLinks={data.navLinks} />
    </div>

    <div slot="main" class="main">
        <Sidebar samePageLinks={data.samePageLinks} navLinks={data.navLinks} />

        <h1>Sobre o site</h1>

        <p>
            Assim como inúmeros projetos, meu site foi criado com base em
            projetos open source, criados e mantidos por inúmeras pessoas ao
            redor do mundo. Sem esses projetos, muita coisa desse site
            precisaria ser feita do zero - e provavelmente eu ainda estaria no
            começo de tudo 😅
        </p>
        <p>Esses são os projetos que tornaram esse site possível:</p>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Licença</th>
                    <th>Usado em</th>
                </tr>
            </thead>
            <tbody>
                {#each data.libraries as library}
                    <tr>
                        <td class="inline">
                            <Link href={library.link} target="_blank">
                                <span class="inline">
                                    {library.name}
                                    <ArrowSquareOut weight="duotone" />
                                </span>
                            </Link>
                        </td>
                        <td>{library.license}</td>
                        <td>{library.usedOn}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</BaseLayout>

<style>
    .main {
        padding-top: 6rem;
    }

    .main h1 {
        color: var(--white);
        text-align: center;
        padding-bottom: 2rem;
    }
    .main p {
        color: var(--white);
        text-align: justify;
        margin-bottom: 0.8rem;
    }

    table {
        table-layout: auto;
        min-width: 100%;
        cursor: default;
        margin-bottom: 1rem;
    }

    thead tr {
        color: var(--gray);
        font-weight: 700;
    }

    thead th,
    tbody td {
        padding: 0.5rem;
        text-align: left;
    }

    tbody td {
        color: var(--white);
    }

    span.inline {
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
        white-space: nowrap;
    }
</style>
