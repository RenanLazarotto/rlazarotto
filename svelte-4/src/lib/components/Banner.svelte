<script lang="ts">
    import Icon from "./Icon.svelte";

    export let color: "orange" | "red" | "blue" | "rose" | "green" | "yellow" | "purple" = "purple";
    export let icon: string | undefined;

    const classes = {
        blue: "border-blue-700 text-blue-400 bg-blue-800/20",
        green: "border-green-500 text-green-400 bg-green-800/20",
        gray: "border-gray-500 text-gray-400 bg-gray-800/20",
        mint: "border-mint-500 text-mint-400 bg-mint-800/20",
        orange: "border-orange-500 text-orange-400 bg-orange-800/20",
        purple: "border-purple-500 text-purple-400 bg-purple-800/20",
        red: "border-red-500 text-red-400 bg-red-800/20",
        rose: "border-rose-700 text-rose-400 bg-rose-800/20",
        yellow: "border-yellow-500 text-yellow-400 bg-yellow-800/20",
    };
</script>

<blockquote
    class="border rounded px-3 py-2 not-prose text-sm font-medium relative overflow-hidden {$$props.class} {classes[
        color
    ]} {$$props.class}"
>
    {#if icon != undefined}
        <Icon id={icon} width={64} height={64} class="absolute -bottom-3 -right-3 opacity-10 -rotate-12" />
    {/if}
    <slot />
</blockquote>
