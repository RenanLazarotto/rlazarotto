<script>
	import { config } from "$lib/config";

	export let pageTitle;
	export let description;
	export let url;
</script>

<svelte:head>
    <title>{`${config.siteTitle} | ${pageTitle}`}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
</svelte:head>