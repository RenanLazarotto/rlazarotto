<script>
  import "../../app.css";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Navigation from "$lib/navigation.svelte";
</script>

<Navigation />

<div class="min-h-full min-w-full relative top-0 bottom-full left-0 sm:translate-x-0 transition-transform duration-500 z-10 bg-gray-900">
  <Header />
  <slot />
  <Footer />
</div>
