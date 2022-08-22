<script>
    export let href;
</script>

<a
    {href}
    class="font-bold text-purple-500 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
    target="_blank"
>
    <slot />
</a>
