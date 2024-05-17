<script lang="ts">
    export let href: string;
    export let target: string = "_self";
</script>

<a
    {href}
    {target}
    class={`font-bold underline underline-offset-2 decoration-1 text-mint-500 hover:text-mint-300 ${$$props.class}`}
>
    <slot />
</a>
