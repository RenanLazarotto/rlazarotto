<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  const header: Writable<string> = getContext("header");

  onMount(() => {
    header.set("sobre mim");
  });
</script>

<section>
  <p>Olá! Eu me chamo Renan Lazarotto, sou um programador full-stack</p>
</section>
