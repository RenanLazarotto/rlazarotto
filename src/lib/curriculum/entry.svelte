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

<div class="flex flex-col md:flex-row">
    <div class="hidden md:flex flex-col items-center justify-center w-1/6">
        <div class="flex items-center">
            <CalendarBlank class="mr-1 text-purple-700" />
            {dataInicial} – {dataFinal}
        </div>
        <div class="flex items-center text-xs">
            <MapPin class="mr-1 text-purple-700" />
            {localizacao}
        </div>
    </div>
    <div class="md:w-5/6 md:border-l-2 border-purple-300 pl-2 py-4">
        <h3
            class="font-bold mb-3 text-lg border-b-2 border-purple-300 md:border-0 text-center md:text-left"
        >
            {cargo} - {empresa}
        </h3>
        <div class="md:hidden mb-3 flex justify-around text-xs">
            <div class="flex justify-center items-center">
                <CalendarBlank class="mr-1 text-purple-700" />
                {dataInicial} – {dataFinal}
            </div>
            <div class="flex justify-center items-center">
                <MapPin class="mr-1 text-purple-700" />
                {localizacao}
            </div>
        </div>
        {#each descricao as linha}
            <p class="text-sm mb-2 text-justify">{linha}</p>
        {/each}
    </div>
</div>
