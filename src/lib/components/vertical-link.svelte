<script>
    export let href;
    export let target = "_self";
</script>

<a
    {href}
    class="flex flex-col gap-y-1 justify-center items-center text-xs font-bold p-2 text-responsive"
    {target}
>
    <slot name="icon" />
    <slot />
</a>
