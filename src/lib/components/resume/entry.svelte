<script>
    import MapPin from "phosphor-svelte/lib/MapPin/MapPin.svelte";

    export let title;
    export let companyUrl;
    export let company;
    export let startDate;
    export let endDate;
    export let location;
    export let description;
</script>

<div class="mb-4">
    <p class="text-lg">
        {title}
        <a href={companyUrl} class="font-bold text-responsive" target="_blank">
            @ {company}
        </a>
    </p>
    <div class="text-sm flex gap-x-4 mb-4">
        <div>
            {startDate.toLocaleString("pt-BR", { year: "numeric" })} - {endDate.toLocaleString(
                "pt-BR",
                { year: "numeric" }
            )}
        </div>
        <div class="flex items-center">
            <MapPin
                weight="duotone"
                class="text-purple-600 dark:text-purple-400 mr-1"
            />
            {location}
        </div>
    </div>

    {#if Array.isArray(description)}
        <ul class="list-disc list-inside">
            {#each description as li}
                <li class="my-1">{li}</li>
            {/each}
        </ul>
    {:else}
        <p>{description}</p>
    {/if}
</div>
