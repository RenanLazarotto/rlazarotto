<script>
  import { page } from "$app/stores";

  import Link from "$lib/components/link.svelte";
  import SEO from "$lib/components/SEO/SEO.svelte";

  export let data;

  let url = $page.url.href;
</script>

<SEO
  pageTitle="Currículo"
  description="Página com meu currículo profissional."
  {url}
  imgUrl="/assets/images/curriculo/hero.png"
  imgAlt="Imagem representativa de uma pessoa analizando um perfil."
  imgWidth="900"
  imgHeight="500"
/>

<div class="container">
  <!-- Informações básicas -->
  <section>
    <h1>Renan Lazarotto</h1>

    <div class="contact">
      <Link href="mailto:renanlazarotto@gmail.com">
        renanlazarotto@gmail.com
      </Link>
      <Link href="tel:41998156063">+55 (41) 99815-6063</Link>
      <Link href="https://rlazarotto.pages.dev">
        https://rlazarotto.pages.dev
      </Link>
    </div>
  </section>

  <!-- Resumo -->
  <section class="resume">
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário
    <i>in loco</i> e remotamente.
  </section>

  <div class="wrapper">
    <div class="experiences">
      <!-- Experiências -->
      <section>
        <h2>Experiências</h2>

        {#each data.jobs as job, i}
          <div class="job">
            <p>
              {job.title} -
              <Link href={job.companyUrl}>{job.company}</Link>
            </p>
            <div>
              {job.startDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })} - {job.endDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
              |
              {job.location}
            </div>
            <ul>
              {#each job.description as li, i}
                <li>
                  {li}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
    </div>
    <div class="knowledge">
      <!-- Tecnologias -->
      <section class="stack">
        <h2>Tecnologias</h2>

        {#each Object.entries(data.stack) as [title, items]}
          <p class="name">{title}:</p>
          <ul>
            {#each items as item}
              <li>{item}</li>
            {/each}
          </ul>
          <p class="items">{items.join(", ")}</p>
        {/each}
      </section>

      <!-- Formação -->
      <section>
        <h2>Educação</h2>

        {#each data.education as entry}
          <div class="education">
            <p>
              {entry.title}
              <Link href={entry.companyUrl}>@ {entry.company}</Link>
            </p>
            <div>
              {entry.startDate.toLocaleString("pt-BR", { year: "numeric" })} -
              {entry.endDate.toLocaleString("pt-BR", { year: "numeric" })}
              ::
              {entry.location}
            </div>

            <ul>
              {#each entry.description as li}
                <li>{li}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
    </div>
  </div>
</div>

<style>
  .container {
    color: var(--white);
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
  section {
    margin-bottom: 1rem;
  }

  section.resume {
    text-align: justify;
  }

  section > h1 {
    color: var(--white);
    font-size: var(--hero-size);
    font-weight: 700;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
  }

  div.contact {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    justify-content: space-between;
    line-height: 1.25rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    row-gap: 0.5rem;
  }

  div.wrapper {
    column-gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  div.wrapper section > h2 {
    color: var(--primary);
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    line-height: var(--line-height);
  }

  div.job,
  div.education {
    margin-bottom: 2rem;
  }

  div.job > p,
  div.education > p {
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  div.job > div,
  div.education > div {
    color: var(--gray);
    font-size: 0.75rem;
    font-weight: 500;
    font-weight: 500;
    line-height: 1rem;
  }

  div.job > ul li,
  div.education > ul li,
  section.stack ul li {
    padding-bottom: 0.65rem;
    padding-left: 1rem;
    position: relative;
    text-align: justify;
  }

  div.job > ul li::before,
  div.education > ul li::before,
  section.stack ul li::before {
    color: var(--accent);
    content: "»";
    left: 0;
    position: absolute;
  }

  section.stack p.name {
    color: var(--accent);
    font-size: var(--font-size);
    font-weight: 500;
    line-height: 1.625;
    line-height: var(--line-height);
  }

  section.stack ul {
    display: none;
  }

  section.stack p.items {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  @media (min-width: 640px) {
    div.contact {
      flex-direction: row;
    }

    div.wrapper {
      flex-direction: row;
    }

    div.experiences {
      width: 70%;
    }

    div.knowledge {
      width: 30%;
    }

    section.stack ul {
      display: block;
      margin-bottom: 1.25rem;
    }

    section.stack p.items {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    div.contact {
      justify-content: flex-start;
      column-gap: 1rem;
      row-gap: 0px;
    }
  }
</style>
