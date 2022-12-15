<script>
	export let author;
	export let image;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	{#if image}
		<meta name="twitter:image" content={image.url} />
	{/if}
	<meta name="twitter:label1" content="Escrito por" />
	<meta name="twitter:data1" content={author} />
</svelte:head>
