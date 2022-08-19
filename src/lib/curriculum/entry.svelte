<script>
    import CalendarBlank from "phosphor-svelte/lib/CalendarBlank/CalendarBlank.svelte";
    import MapPin from "phosphor-svelte/lib/MapPin/MapPin.svelte";

    export let dataInicial;
    export let dataFinal;
    export let localizacao;
    export let cargo;
    export let empresa;
    export let descricao;
</script>

<div class="mx-2 rounded border border-gray-300 p-2.5 border-l-8 border-l-purple-600 shadow-lg">
    <div class="flex justify-between pb-3">
        <div class="w-4/6">
            <h3 class="font-bold text-lg">
                {cargo}
            </h3>
            <p class="text-sm font-medium">{empresa}</p>
        </div>

        <div class="w-2/6 flex flex-col justify-around text-xs text-gray-600">
            <div class="flex items-center">
                <CalendarBlank class="mr-1 text-purple-700" />
                {dataInicial} até {dataFinal}
            </div>
            <div class="flex items-center">
                <MapPin class="mr-1 text-purple-700" />
                {localizacao}
            </div>
        </div>
    </div>

    {#each descricao as linha}
        {#if Array.isArray(linha)}
            <ul class="list-disc list-inside">
                {#each linha as li}
                    <li class="text-sm text-justify">{li}</li>
                {/each}
            </ul>
        {:else}
            <p class="text-sm mb-2 text-justify">{linha}</p>
        {/if}
    {/each}
</div>
