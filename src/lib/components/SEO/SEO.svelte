<script>
	import { config } from "$lib/config";
    import Img from "../blog/img.svelte";
    import OpenGraph from "./OpenGraph.svelte";

	export let description;
	export let pageTitle;
	export let url;

	export let article = false;
	export let datePublished = "";
	export let lastUpdated = "";
	export let imgUrl = "";
	export let imgWidth = "";
	export let imgHeight = "";
	export let imgAlt = "";

	let data = {
		description: description,
		pageTitle: `${config.siteTitle} | ${pageTitle}`,
		url: url,
		article: article
	};

	if (article != false) {
		data.author = config.author;
		data.publisher = config.facebook;
	}

	if(datePublished != "") {
		data.datePublished = datePublished;
	}

	if(lastUpdated != "") {
		data.lastUpdated = lastUpdated;
	}

	if(imgUrl != "") {
		data.imgUrl = imgUrl;
	}

	if(imgAlt != "") {
		data.imgAlt = imgAlt;
	}

	if(imgWidth != "") {
		data.imgWidth = imgWidth;
	}

	if(imgHeight != "") {
		data.imgHeight = imgHeight;
	}
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
    <meta name="description" content={data.description} />
    <link rel="canonical" href={data.url} />
</svelte:head>
<OpenGraph data={data} />