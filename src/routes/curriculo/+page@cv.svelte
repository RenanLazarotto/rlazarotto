<script>
  import ArrowLeft from "phosphor-svelte/lib/ArrowLeft/ArrowLeft.svelte";
  import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
  import DeviceMobile from "phosphor-svelte/lib/DeviceMobile/DeviceMobile.svelte";
  import LinkSimpleHorizontal from "phosphor-svelte/lib/LinkSimpleHorizontal/LinkSimpleHorizontal.svelte";

  import Entry from "$lib/curriculum/entry.svelte";
  import SectionHeader from "$lib/curriculum/section-header.svelte";
  import Button from "$lib/common/button.svelte";

  import GraduationCap from "phosphor-svelte/lib/GraduationCap/GraduationCap.svelte";
  import Briefcase from "phosphor-svelte/lib/Briefcase/Briefcase.svelte";
  import Stack from "phosphor-svelte/lib/Stack/Stack.svelte";
  import ThemeToggle from "$lib/common/theme-toggle.svelte";

  export let data;
</script>

<svelte:head>
  <title>renan.lazarotto | currículo</title>
</svelte:head>

<div class="w-10/12 md:w-8/12 mx-auto pt-5 md:pt-10 md:pb-20 dark:text-white">
  <nav class="flex items-center gap-x-1">
    <Button href="/">
      <slot name="icon">
        <ArrowLeft
          class="mr-2 text-purple-600 dark:text-purple-400"
          weight="duotone"
        />
      </slot>
      Voltar
    </Button>
    <ThemeToggle />
  </nav>

  <!-- Informações básicas -->
  <section class="mb-6">
    <h1
      class="text-4xl text-center lg:text-left md:text-5xl font-bold mb-4 dark:text-white"
    >
      Renan Lazarotto
    </h1>
    <div
      class="text-sm flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-800 p-2 rounded gap-y-2 lg:gap-y-0"
    >
      <Button href="mailto:renanlazarotto@gmail.com">
        <slot name="icon">
          <Envelope
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
        </slot>
        renanlazarotto@gmail.com
      </Button>
      <Button href="tel:41998156063">
        <slot name="icon">
          <DeviceMobile
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
        </slot>
        +55 (41) 99815-6063
      </Button>
      <Button href="https://renan.lazarotto.dev.br">
        <slot name="icon">
          <LinkSimpleHorizontal
            class="text-base mr-1 text-purple-600 dark:text-purple-400"
            weight="duotone"
          />
        </slot>
        https://renan.lazarotto.dev.br
      </Button>
    </div>
  </section>

  <!-- Resumo -->
  <section class="mb-6 text-justify">
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário
    <i>in loco</i> e remotamente.
  </section>

  <!-- Formação -->
  <section class="mb-6">
    <SectionHeader>
      <slot name="icon">
        <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
          <GraduationCap
            class="text-purple-600 dark:text-purple-400 text-5xl p-3"
            weight="duotone"
          />
        </div>
      </slot>
      <h2 class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl">
        Formação
      </h2>
    </SectionHeader>

    {#each data.education as entry}
      <Entry {...entry} />
    {/each}
  </section>

  <!-- Experiências -->
  <section class="mb-6">
    <SectionHeader>
      <slot name="icon">
        <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
          <Briefcase
            class="text-purple-600 dark:text-purple-400 text-5xl p-3"
            weight="duotone"
          />
        </div>
      </slot>
      <h2 class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl">
        Experiências
      </h2>
    </SectionHeader>

    <!-- Mais recentes -->
    <div class="flex flex-col space-y-2 md:space-y-6">
      {#each data.jobs as job}
        <Entry {...job} />
      {/each}
    </div>
  </section>

  <section class="md:mb-6">
    <SectionHeader component={Stack} text="Tecnologias" />
    {#each Object.entries(data.stack) as [title, items]}
      <p class="leading-relaxed text-lg my-2 font-medium">{title}:</p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mb-10"
      >
        {#each items as item}
          <svelte:component this={item} />
        {/each}
      </div>
    {/each}
  </section>
</div>
