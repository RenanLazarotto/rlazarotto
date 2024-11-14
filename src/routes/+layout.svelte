<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SVG from '$lib/components/SVG.svelte';
	import '@fontsource-variable/outfit';

	import '../app.css';

	let { children, data } = $props();
</script>

<SVG />
<div class="max-w-7xl mx-auto flex flex-col min-h-screen px-8 md:px-4 lg:px-0">
	<Header url={data.url} />
	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
