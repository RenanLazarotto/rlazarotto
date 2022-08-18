<script>
    export let href;
    export let className;
    export let text;
</script>

<a {href} class={`text-purple-600 dark:text-purple-200 font-bold ${className}`} target="_blank">{text}</a>
