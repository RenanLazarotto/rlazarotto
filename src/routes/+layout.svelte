<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  import "../app.css";
</script>

<main class="py-8 min-h-screen flex">
  <div
    class="flex-1 flex flex-col bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg max-w-screen-lg mx-auto"
  >
    <Header />
    <div class="p-6 flex-1">
      <div class="grid grid-cols-2 gap-x-6">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</main>
