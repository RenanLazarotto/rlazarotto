<script>
  import ArrowLeft from "phosphor-svelte/lib/ArrowLeft/ArrowLeft.svelte";
  import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
  import DeviceMobile from "phosphor-svelte/lib/DeviceMobile/DeviceMobile.svelte";
  import LinkSimpleHorizontal from "phosphor-svelte/lib/LinkSimpleHorizontal/LinkSimpleHorizontal.svelte";

  import Entry from "$lib/curriculum/entry.svelte";
  import SectionHeader from "$lib/curriculum/section-header.svelte";
  import LinkButton from "$lib/common/link-button.svelte";

  import GraduationCap from "phosphor-svelte/lib/GraduationCap/GraduationCap.svelte";
  import Briefcase from "phosphor-svelte/lib/Briefcase/Briefcase.svelte";
  import Stack from "phosphor-svelte/lib/Stack/Stack.svelte";

  export let data;
</script>

<svelte:head>
  <title>renan.lazarotto | currículo</title>
</svelte:head>

<div class="w-10/12 md:w-8/12 mx-auto pt-5 md:pt-10 md:pb-20">
  <LinkButton
    href="/"
    text="Voltar"
    classes="inline-flex items-center text-purple-600 hover:bg-purple-200 hover:text-purple-800 transition-colors duration-300 font-bold p-2 rounded mb-4 text-xs"
    icon={ArrowLeft}
    iconClass="mr-2 text-purple-700"
  />

  <!-- Informações básicas -->
  <section class="mb-6">
    <h1 class="text-4xl text-center lg:text-left md:text-5xl font-bold mb-4">
      Renan Lazarotto
    </h1>
    <div
      class="text-sm flex flex-col lg:flex-row bg-gray-100 p-2 rounded gap-y-2 lg:gap-y-0"
    >
      <LinkButton
        href="mailto:renanlazarotto@gmail.com"
        text="renanlazarotto@gmail.com"
        classes="flex flex-1 items-center justify-center"
        icon={Envelope}
        iconClass="mr-2 text-purple-700"
      />
      <LinkButton
        href="tel:41998156063"
        text="+55 (41) 99815-6063"
        classes="flex flex-1 items-center justify-center"
        icon={DeviceMobile}
        iconClass="mr-2 text-purple-700"
      />
      <LinkButton
        href="https://renan.lazarotto.dev.br"
        text="https://renan.lazarotto.dev.br"
        classes="flex flex-1 items-center justify-center"
        icon={LinkSimpleHorizontal}
        iconClass="mr-2 text-purple-700"
      />
    </div>
  </section>

  <!-- Resumo -->
  <section class="mb-6 text-justify">
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário <i
      >in loco</i
    > e remotamente.
  </section>

  <!-- Formação -->
  <section class="mb-6">
    <SectionHeader component={GraduationCap} text="Formação" />

    {#each data.education as entry}
      <Entry {...entry} />
    {/each}
  </section>

  <!-- Experiências -->
  <section class="mb-6">
    <SectionHeader component={Briefcase} text="Experiências" />

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
