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

<div class="mx-auto w-11/12 text-gray-300 text-justify">
  <!-- Informações básicas -->
  <section class="mb-4">
    <h1 class="mt-10 mb-6 text-4xl sm:text-5xl font-bold text-purple-500">
      Renan Lazarotto
    </h1>

    <div
      class="text-sm flex flex-col sm:flex-row justify-between lg:justify-start py-2 gap-y-2 lg:gap-x-4 lg:gap-y-0"
    >
      <Link ink href="mailto:renanlazarotto@gmail.com">
        <span class="flex items-center">
          <Envelope class="text-base mr-1 text-purple-500" weight="duotone" />
          renanlazarotto@gmail.com
        </span>
      </Link>
      <Link href="tel:41998156063">
        <span class="flex items-center">
          <DeviceMobile
            class="text-base mr-1 text-purple-500"
            weight="duotone"
          />
          +55 (41) 99815-6063
        </span>
      </Link>
      <Link href="https://rlazarotto.pages.dev">
        <span class="flex items-center">
          <LinkSimpleHorizontal
            class="text-base mr-1 text-purple-500"
            weight="duotone"
          />
          https://rlazarotto.pages.dev
        </span>
      </Link>
    </div>
  </section>

  <!-- Resumo -->
  <section class="mb-6">
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário
    <i>in loco</i> e remotamente.
  </section>

  <div class="flex flex-col sm:flex-row gap-x-4">
    <div class="sm:w-8/12">
      <!-- Experiências -->
      <section class="mb-6">
        <h2 class="text-purple-500 font-medium uppercase text-xl tracking-widest">
          Experiências
        </h2>
        {#each data.jobs as job, i}
          <div class="mb-4">
            <p class="text-lg">
              {job.title}
              <Link href={job.companyUrl}>@ {job.company}</Link>
            </p>
            <div class="text-xs text-gray-400 font-medium mb-1">
              {job.startDate.toLocaleString("pt-BR", { year: "numeric" })} - {job.endDate.toLocaleString(
                "pt-BR",
                { year: "numeric" }
              )}
              ::
              {job.location}
            </div>
            <ul class="text-gray-400">
              {#each job.description as li, i}
                <li class="relative pl-3 before:[content:'»'] before:absolute before:left-0">
                  {li}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
    </div>
    <div class="sm:w-4/12">
      <!-- Tecnologias -->
      <section class="mb-6">
        <h2
          class="text-purple-500 font-medium uppercase text-xl tracking-widest"
        >
          Tecnologias
        </h2>
        {#each Object.entries(data.stack) as [title, items]}
          <p class="leading-relaxed text-lg font-medium">{title}:</p>
          <ul class="hidden sm:block mb-2 text-gray-400">
            {#each items as item}
              <li class="relative pl-3 before:[content:'»'] before:absolute before:left-0">{item}</li>
            {/each}
          </ul>
          <p class="text-gray-400 mb-2 sm:hidden">{items.join(", ")}</p>
        {/each}
      </section>

      <!-- Formação -->
      <section class="mb-6">
        <h2
          class="text-purple-500 font-medium uppercase text-xl tracking-widest"
        >
          Educação
        </h2>

        {#each data.education as entry}
          <div class="mb-4">
            <p class="text-lg">
              {entry.title}
              <Link href={entry.companyUrl}>@ {entry.company}</Link>
            </p>
            <div class="text-sm text-gray-400 font-medium mb-1">
              {entry.startDate.toLocaleString("pt-BR", { year: "numeric" })} -
              {entry.endDate.toLocaleString("pt-BR", { year: "numeric" })}
              ::
              {entry.location}
            </div>

            <ul class="text-gray-400">
              {#each entry.description as li}
                <li class="relative pl-3 before:[content:'»'] before:absolute before:left-0">{li}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
    </div>
  </div>
</div>
