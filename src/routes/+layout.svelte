<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  import { header } from "$lib/stores";
  import { setContext } from "svelte";

  setContext("header", header);

  import "../app.css";
</script>

<main class="pt-16 pb-8 min-h-screen flex flex-col max-w-screen-md mx-auto">
  <Header />
  <div class="flex-1">
    <slot />
  </div>
  <Footer />
</main>
