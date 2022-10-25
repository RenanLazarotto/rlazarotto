<script>
  import "../../../node_modules/normalize.css/normalize.css";
  import "../../app.css";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Sidebar from "$lib/components/sidebar.svelte";
</script>

<Header />
<Sidebar />
<slot />
<Footer />
