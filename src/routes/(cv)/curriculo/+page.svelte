<script>
  import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
  import DeviceMobile from "phosphor-svelte/lib/DeviceMobile/DeviceMobile.svelte";
  import LinkSimpleHorizontal from "phosphor-svelte/lib/LinkSimpleHorizontal/LinkSimpleHorizontal.svelte";

  import Link from "$lib/components/link.svelte";
  import MapPin from "phosphor-svelte/lib/MapPin/MapPin.svelte";

  export let data;
</script>

<svelte:head>
  <title>renan.lazarotto | currículo</title>
</svelte:head>

<div class="w-3/4 mx-auto py-5 dark:text-gray-200">
  <!-- Informações básicas -->
  <section class="mb-4">
    <div class="flex justify-between items-center my-8">
      <h1 class="text-4xl text-center lg:text-left md:text-5xl font-bold">
        Renan Lazarotto
      </h1>
    </div>

    <div
      class="text-sm flex flex-col md:flex-row items-center md:justify-start bg-gray-100 dark:bg-gray-800 p-2 rounded gap-y-2 lg:gap-x-4 lg:gap-y-0"
    >
      <Link ink href="mailto:renanlazarotto@gmail.com">
        <span class="flex items-center">
          <Envelope
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
          renanlazarotto@gmail.com
        </span>
      </Link>
      <Link href="tel:41998156063">
        <span class="flex items-center">
          <DeviceMobile
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
          +55 (41) 99815-6063
        </span>
      </Link>
      <Link href="https://renan.lazarotto.dev.br">
        <span class="flex items-center">
          <LinkSimpleHorizontal
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
          https://renan.lazarotto.dev.br
        </span>
      </Link>
    </div>
  </section>

  <!-- Resumo -->
  <section class="mb-6 text-justify">
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário
    <i>in loco</i> e remotamente.
  </section>

  <div class="flex gap-x-4">
    <div class="w-8/12">
      <!-- Experiências -->

      <section class="mb-6 text-justify">
        <h2
          class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
        >
          Experiências
        </h2>
        {#each data.jobs as job}
          <div class="mb-4">
            <p class="text-lg">
              {job.title}
              <a
                href={job.companyUrl}
                class="font-bold text-responsive"
                target="_blank"
              >
                @ {job.company}
              </a>
            </p>
            <div class="text-sm flex gap-x-4 mb-4">
              <div>
                {job.startDate.toLocaleString("pt-BR", { year: "numeric" })} - {job.endDate.toLocaleString(
                  "pt-BR",
                  { year: "numeric" }
                )}
              </div>
              <div class="flex items-center">
                <MapPin
                  weight="duotone"
                  class="text-purple-600 dark:text-purple-400 mr-1"
                />
                {job.location}
              </div>
            </div>

            {#if Array.isArray(job.description)}
              <ul class="list-disc list-inside">
                {#each job.description as li}
                  <li class="my-1">{li}</li>
                {/each}
              </ul>
            {:else}
              <p>{job.description}</p>
            {/if}
          </div>
        {/each}
      </section>
    </div>
    <div class="w-4/12">
      <!-- Tecnologias -->
      <section class="mb-6">
        <h2
          class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
        >
          Tecnologias
        </h2>
        {#each Object.entries(data.stack) as [title, items]}
          <p class="leading-relaxed text-lg mb-2 font-medium">{title}:</p>
          <ul class="list-disc list-inside">
            {#each items as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/each}
      </section>

      <!-- Formação -->
      <section class="mb-6 text-justify">
        <h2
          class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
        >
          Educação
        </h2>

        {#each data.education as entry}
          <div class="mb-4">
            <p class="text-lg">
              {entry.title}
              <a
                href={entry.companyUrl}
                class="font-bold text-responsive"
                target="_blank"
              >
                @ {entry.company}
              </a>
            </p>
            <div class="text-sm flex gap-x-4 mb-4">
              <div>
                {entry.startDate.toLocaleString("pt-BR", { year: "numeric" })} -
                {entry.endDate.toLocaleString("pt-BR", { year: "numeric" })}
              </div>
              <div class="flex items-center">
                <MapPin
                  weight="duotone"
                  class="text-purple-600 dark:text-purple-400 mr-1"
                />
                {entry.location}
              </div>
            </div>

            {#if Array.isArray(entry.description)}
              <ul class="list-disc list-inside">
                {#each entry.description as li}
                  <li class="my-1">{li}</li>
                {/each}
              </ul>
            {:else}
              <p>{entry.description}</p>
            {/if}
          </div>
        {/each}
      </section>
    </div>
  </div>
</div>
