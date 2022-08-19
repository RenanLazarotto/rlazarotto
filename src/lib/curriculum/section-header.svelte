<script>
    export let text;
    export let component;
</script>

<div class="flex items-center justify-start mb-2">
    <div class="bg-purple-200 rounded-full my-2 mr-2">
        <svelte:component
            this={component}
            class="text-purple-600 text-5xl p-3"
            weight="duotone"
        />
    </div>
    <h2 class="text-purple-800 font-bold uppercase text-xl">{text}</h2>
</div>
