<script>
    export let href;
    export let vertical = false;
    export let newTab = false
    export let bordered = false;
</script>

<a
    {href}
    class:flex-col={vertical}
    class:gap-y-1={vertical}
    class:justify-center={vertical}
    class:border={bordered}
    class:border-purple-600={bordered}
    class:dark:border-gray-700={bordered}
    class="flex 
items-center 
text-xs 
font-bold
text-purple-600 
hover:text-purple-800 
dark:text-gray-200 
hover:bg-purple-200 
dark:hover:bg-gray-700 
p-2 
rounded 
transition-colors 
duration-300"
    target={newTab ? "_blank" : "_self"}
>
    <slot name="icon" />
    <slot />
</a>
