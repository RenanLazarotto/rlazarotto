<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  const header: Writable<string> = getContext("header");

  onMount(() => {
    header.set("renan lazarotto");
  });
</script>

<section class="sm:col-span-2 mb-12 text-xl text-justify">
  <p class="mb-4">
    Olá, seja bem vindo! Você encontrou meu refúgio na internet. Eu me chamo
    Renan e eu sou um desenvolvedor web full stack, trabalhando atualmente na
    Hammer Consultoria.
  </p>
  <p>
    Também sou um curioso por natureza e aficionado pelo Japão. Falo demais e o
    tempo todo, não me segurei e vim falar aqui também. Se por um algum motivo
    quiser saber mais, <a
      href="/sobre"
      class="text-purple-500 hover:text-purple-400 underline">veja aqui</a
    >. Você também pode ver o que eu tanto falo aqui no blog.
  </p>
</section>

<div class="grid grid-cols-1 md:grid-cols-2">
  <section class="">
    <h2 class="text-xl font-bold">projetos pessoais</h2>
    <ul class="list-disc list-inside flex flex-col gap-4">
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
    </ul>
  </section>

  <section>
    <h2 class="text-xl font-bold">projetos de trabalho</h2>
    <ul class="list-disc list-inside flex flex-col gap-4">
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
      <li>
        projeto - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pharetra pharetra sodales.
      </li>
    </ul>
  </section>
</div>
