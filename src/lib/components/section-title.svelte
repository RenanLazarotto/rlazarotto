<script>
    export let id;
</script>

<div class="flex items-center gap-x-2 mt-3 mb-6">
    <span class="h-px w-8 bg-purple-500" />
    <p {id} class="font-medium font-mono text-lg sm:text-2xl tracking-widest"><slot /></p>
    <span class="h-px w-32 bg-purple-500" />
</div>