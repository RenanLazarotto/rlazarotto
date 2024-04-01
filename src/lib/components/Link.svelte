<script lang="ts">
    export let href: string;
    export let target: string = "_self";
</script>

<a
    {href}
    {target}
    class="text-rose-300 underline underline-offset-4 decoration-dotted decoration-purple-400 hover:text-purple-400"
>
    <slot />
</a>
