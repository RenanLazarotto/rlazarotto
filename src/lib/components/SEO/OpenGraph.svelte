<script>
    export let pathname;
    export let article;
    export let pageTitle;
    export let description;
    export let imgUrl;
    export let imgAlt;
    export let imgWidth;
    export let imgHeight;
    export let fbAuthor;
    export let fbPage;
    export let datePublished;
    export let lastUpdated;
</script>

<!-- OpenGraph -->
<meta property="og:site_name" content="renan.lazarotto" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:url" content={pathname} />
<meta property="og:type" content={article ? "article" : "website"} />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={description} />
<meta property="og:image" content={imgUrl} />
<meta property="og:image:width" content={imgWidth} />
<meta property="og:image:height" content={imgHeight} />
<meta property="og:image:alt" content={imgAlt} />
{#if article}
    <meta property="article:publisher" content={fbPage} />
    <meta property="article:author" content={fbAuthor} />
    <meta property="article:published_time" content={datePublished} />
    <meta property="article:modified_time" content={lastUpdated} />
{/if}