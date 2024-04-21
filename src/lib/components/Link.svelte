<script lang="ts">
    export let href: string;
    export let target: string = "_self";
</script>

<a
    {href}
    {target}
    class={`text-purple-400 underline underline-offset-4 decoration-dotted decoration-purple-400 hover:text-purple-600 hover:decoration-purple-600 ${$$props.class}`}
>
    {#if target == "_blank"}
        <slot /> <span class="material-symbols-rounded text-xs"> open_in_new </span>
    {:else}
        <slot />
    {/if}
</a>
