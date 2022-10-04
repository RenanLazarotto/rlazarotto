<script>
    export let href;
    export let target = "_self";
</script>

<a
    {href}
    class="flex flex-col gap-y-1 justify-center items-center text-xs font-bold p-2 hover:text-purple-600 transition-colors duration-300"
    {target}
>
    <slot name="icon" />
    <slot />
</a>
