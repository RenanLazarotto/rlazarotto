<script>
  import ArrowLeft from "phosphor-svelte/lib/ArrowLeft/ArrowLeft.svelte";
  import Envelope from "phosphor-svelte/lib/Envelope/Envelope.svelte";
  import DeviceMobile from "phosphor-svelte/lib/DeviceMobile/DeviceMobile.svelte";
  import LinkSimpleHorizontal from "phosphor-svelte/lib/LinkSimpleHorizontal/LinkSimpleHorizontal.svelte";

  import Entry from "$lib/curriculum/entry.svelte";
  import Button from "$lib/common/button.svelte";

  import GraduationCap from "phosphor-svelte/lib/GraduationCap/GraduationCap.svelte";
  import Briefcase from "phosphor-svelte/lib/Briefcase/Briefcase.svelte";
  import Stack from "phosphor-svelte/lib/Stack/Stack.svelte";
  import ThemeToggle from "$lib/common/theme-toggle.svelte";
  import Section from "$lib/curriculum/section.svelte";

  export let data;
</script>

<svelte:head>
  <title>renan.lazarotto | currículo</title>
</svelte:head>

<div class="w-11/12 mx-auto py-5 dark:text-gray-200">
  <nav class="flex items-center gap-x-1 mb-4">
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
  <section class="mb-4">
    <h1 class="text-4xl text-center lg:text-left md:text-5xl font-bold mb-8">
      Renan Lazarotto
    </h1>
    <div
      class="text-sm flex flex-col md:flex-row items-center md:justify-start bg-gray-100 dark:bg-gray-800 p-2 rounded gap-y-2 lg:gap-y-0"
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
  <Section>
    Programador PHP com experiência em desenvolvimento de aplicações Web, APIs e
    DevOps. Também sou técnico de suporte com vivência em atendimento ao usuário
    <i>in loco</i> e remotamente.
  </Section>

  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <!-- Formação -->
      <Section>
        <slot name="header">
          <div class="inline-flex items-center justify-start mb-2">
            <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
              <GraduationCap
                weight="duotone"
                class="text-purple-600 dark:text-purple-400 text-5xl p-3"
              />
            </div>
            <h2
              class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
            >
              Educação
            </h2>
          </div>
        </slot>

        {#each data.education as entry}
          <Entry {...entry} />
        {/each}
      </Section>
      <!-- Experiências -->
      <Section>
        <slot name="header">
          <div class="inline-flex items-center justify-start mb-2">
            <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
              <Briefcase
                weight="duotone"
                class="text-purple-600 dark:text-purple-400 text-5xl p-3"
              />
            </div>
            <h2
              class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
            >
              Experiências
            </h2>
          </div>
        </slot>

        <div class="flex flex-col space-y-2 md:space-y-6">
          {#each data.jobs as job}
            <Entry {...job} />
          {/each}
        </div>
      </Section>
    </div>
    
    <div>
      <!-- Tecnologias -->
      <Section>
        <slot name="header">
          <div class="inline-flex items-center justify-start mb-2">
            <div class="bg-purple-200 dark:bg-gray-700 rounded-full my-2 mr-2">
              <Stack
                weight="duotone"
                class="text-purple-600 dark:text-purple-400 text-5xl p-3"
              />
            </div>
            <h2
              class="text-purple-800 dark:text-purple-400 font-bold uppercase text-xl"
            >
              Tecnologias
            </h2>
          </div>
        </slot>

        {#each Object.entries(data.stack) as [title, items]}
          <p class="leading-relaxed text-lg my-2 font-medium">{title}:</p>
          <div
            class="grid grid-cols-1 gap-3 justify-center mb-10"
          >
            {#each items as item}
              <svelte:component this={item} />
            {/each}
          </div>
        {/each}
      </Section>
    </div>
  </div>
</div>
