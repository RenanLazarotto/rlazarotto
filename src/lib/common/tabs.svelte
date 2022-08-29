<script>
    import MapPin from "phosphor-svelte/lib/MapPin/MapPin.svelte";

    const activeClasses =
        "text-purple-600 dark:text-purple-400 border-l-purple-600 dark:border-l-purple-400";

    export let flex = false;
    export let data = [];

    let items = [];

    data.forEach(job => {
        let item = {
            trigger: job.key + '-button',
            target: job.key + '-tab'
        };
        items.push(item);
    });

    const toggleTab = (el) => {
        let tab = items.filter((item) => item.trigger === el.target.id)[0];

        let target = document.getElementById(tab.target);
        let trigger = document.getElementById(tab.trigger);

        items.map((item) => {
            if (item.target !== el.target.getAttribute("aria-controls")) {
                let target = document.getElementById(item.target);
                let trigger = document.getElementById(item.trigger);

                target.classList.add("hidden");
                trigger.classList.remove(...activeClasses.split(" "));
                trigger.setAttribute("aria-selected", false);
            }
        });

        trigger.classList.add(...activeClasses.split(" "));
        trigger.setAttribute("aria-selected", true);
        target.classList.remove("hidden");
    };
</script>

<div class:flex class:items-start={flex} class="gap-2 mx-4">
    <ul
        class="flex flex-col flex-wrap text-sm text-center font-medium w-1/5"
        role="tablist"
    >
        {#each data as li, i}
            <li class="flex text-center" role="presentation">
                <button
                    class="block flex-1 px-4 py-2 border-l-2 border-purple-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-800 dark:hover:text-purple-400 {i === 0 ? activeClasses : ''}"
                    id={`${li.key}-button`}
                    type="button"
                    role="tab"
                    aria-controls={`${li.key}-tab`}
                    aria-selected="{i == 0 ? true : false}"
                    on:click={toggleTab}>
                    {li.company}
                    </button>
            </li>
        {/each}
    </ul>
    {#each data as job, i}
        <div
            class="transition-opacity {i == 0 ? '' : 'hidden'} w-4/5"
            id={`${job.key}-tab`}
            role="tabpanel"
            aria-labelledby={`${job.key}-button`}
        >
            <p class="font-bold text-lg">
                {job.title}
                <a
                    href={job.companyUrl}
                    class="text-purple-600 dark:text-purple-400"
                    target="_blank">@ {job.company}</a
                >
            </p>
            <div class="text-sm flex gap-x-4 mb-4">
                <div>
                    {job.startDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })} - {job.endDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })}
                </div>
                <div class="flex items-center">
                    <MapPin weight="duotone" class="text-purple-600 dark:text-purple-400 mr-1" />
                    {job.location}
                </div>
            </div>
            <ul class="list-disc list-inside">
                {#each job.description as li}
                    <li>{li}</li>
                {/each}
            </ul>
        </div>
    {/each}
    <slot />
</div>
