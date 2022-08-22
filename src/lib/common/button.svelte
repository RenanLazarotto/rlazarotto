<script>
    export let href;
</script>

<a {href} class="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-800 dark:text-white hover:bg-purple-200 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-300" target="_blank">
    <slot name="icon"></slot>
    <slot></slot>
</a>