<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  const header: Writable<string> = getContext("header");

  onMount(() => {
    header.set("agora");
  });
</script>

<h2>O que eu to fazendo agora?</h2>
