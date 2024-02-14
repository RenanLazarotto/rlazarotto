<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  const header: Writable<string> = getContext("header");
</script>

<header class="flex justify-between items-center mb-8">
  <h1 class="text-3xl font-bold">{$header}</h1>
  <nav>
    <ul class="flex gap-4 text-xl font-medium">
      <li><a href="/" class="hover:text-purple-500">início</a></li>
      <li><a href="/sobre" class="hover:text-purple-500">sobre</a></li>
      <li><a href="/agora" class="hover:text-purple-500">agora</a></li>
      <li><a href="/agora" class="hover:text-purple-500">blog</a></li>
    </ul>
  </nav>
</header>
