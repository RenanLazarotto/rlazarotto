<script>
    export let href;
    export let target = "_self";
</script>

<a
    {href}
    class="font-bold text-gray-800 hover:text-purple-500 dark:text-gray-200 dark:hover:text-purple-600 transition-colors duration-300"
    {target}
>
    <slot />
</a>
