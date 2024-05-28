<script lang="ts">
    export let href: string;
    export let target: string = "_self";
    export let showBackground: boolean = false;

    let background = showBackground ? "py-1 px-2 rounded-md bg-mint-700/20 hover:bg-purple-700/20" : "";
</script>

<a
    {href}
    {target}
    class:text-mint-300={!showBackground}
    class:text-mint-500={showBackground}
    class={`font-bold hover:text-purple-400 ${background} ${$$props.class}`}
>
    <slot />
</a>
