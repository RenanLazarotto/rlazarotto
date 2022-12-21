<script>
    export let data;
</script>

<svelte:head>
    <!-- OpenGraph -->
    <meta property="og:site_name" content="renan.lazarotto" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:url" content={data.url} />
    <meta property="og:type" content={data.article ? "article" : "website"} />
    <meta property="og:title" content={data.pageTitle} />
    <meta property="og:description" content={data.description} />
    {#if data.imgUrl}
        <meta property="og:image" content={data.imgUrl} />
    {/if}
    {#if data.imgWidth}
        <meta property="og:image:width" content={data.imgWidth} />
    {/if}
    {#if data.imgHeight}
        <meta property="og:image:height" content={data.imgHeight} />
    {/if}
    {#if data.imgAlt}
        <meta property="og:image:alt" content={data.imgAlt} />
    {/if}
    {#if data.article}
        <meta property="article:publisher" content={data.publisher} />
        <meta property="article:author" content={data.author} />
        <meta property="article:published_time" content={data.datePublished} />
        <meta property="article:modified_time" content={data.lastUpdated} />
    {/if}
</svelte:head>
