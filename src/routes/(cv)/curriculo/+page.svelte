<script>
  import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
  import DeviceMobile from "phosphor-svelte/lib/DeviceMobile/DeviceMobile.svelte";
  import LinkSimpleHorizontal from "phosphor-svelte/lib/LinkSimpleHorizontal/LinkSimpleHorizontal.svelte";

  import Link from "$lib/components/link.svelte";

  export let data;
</script>

<svelte:head>
  <title>renan.lazarotto | currículo</title>
</svelte:head>

<div class="container">
  <!-- Informações básicas -->
  <section>
    <h1>Renan Lazarotto</h1>

    <div class="contact">
      <Link href="mailto:renanlazarotto@gmail.com">
        <span>
          <span class="icon">
            <Envelope weight="duotone" />
          </span>
          renanlazarotto@gmail.com
        </span>
      </Link>
      <Link href="tel:41998156063">
        <span>
          <span class="icon">
            <DeviceMobile weight="duotone" />
          </span>
          +55 (41) 99815-6063
        </span>
      </Link>
      <Link href="https://rlazarotto.pages.dev">
        <span>
          <span class="icon">
            <LinkSimpleHorizontal weight="duotone" />
          </span>
          https://rlazarotto.pages.dev
        </span>
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
              {job.title}
              <Link href={job.companyUrl}>@ {job.company}</Link>
            </p>
            <div>
              {job.startDate.toLocaleString("pt-BR", { year: "numeric" })} - {job.endDate.toLocaleString(
                "pt-BR",
                { year: "numeric" }
              )}
              ::
              {job.location}
            </div>
            <ul class="text-gray-400">
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
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    color: rgb(209 213 219);
  }
  section {
    margin-bottom: 1rem;
  }

  section.resume {
    text-align: justify;
  }

  section > h1 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: rgb(139 92 246);
  }

  div.contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    row-gap: 0.5rem;
  }

  div.contact span {
    display: flex;
    align-items: center;
  }

  div.contact span .icon {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-right: 0.25rem;
    color: rgb(139 92 246);
  }

  div.wrapper {
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
  }

  div.wrapper section > h2 {
    color: rgb(139 92 246);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.1em;
  }

  div.job,
  div.education {
    margin-bottom: 1rem;
  }

  div.job > p,
  div.education > p {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  div.job > div,
  div.education > div {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(156 163 175);
    font-weight: 500;
    font-weight: 500;
  }

  div.job > ul,
  div.education > ul {
    color: rgb(156 163 175);
  }

  div.job > ul li,
  div.education > ul li {
    position: relative;
    padding-left: 1rem;
    text-align: justify;
  }

  div.job > ul li::before,
  div.education > ul li::before {
    content: "»";
    position: absolute;
    left: 0;
  }

  section.stack p.name {
    line-height: 1.625;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  section.stack ul {
    display: none;
  }

  section.stack ul li {
    position: relative;
    padding-left: 1rem;
  }

  section.stack ul li::before {
    content: "»";
    position: absolute;
    left: 0;
  }

  section.stack p.items {
    color: rgb(156 163 175);
    margin-bottom: 0.5rem;
  }

  @media (min-width: 640px) {
    section > h1 {
      font-size: 3rem;
      line-height: 1;
    }

    div.contact {
      flex-direction: row;
    }

    div.wrapper {
      flex-direction: row;
    }

    div.experiences {
      width: 67%;
    }

    div.knowledge {
      width: 33%;
    }

    section.stack ul {
      display: block;
      margin-bottom: 0.5rem;
      color: rgb(156 163 175);
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
