<script>
    import MapPin from "phosphor-svelte/lib/MapPin/MapPin.svelte";

    const activeClasses = "text-purple-500 border-b-purple-500 sm:border-l-purple-500 hover:border-b-purple-500 sm:hover:border-l-purple-500";

    export let jobs = [];

    let items = [];

    jobs.forEach((job) => {
        let item = {
            trigger: job.key + "-button",
            target: job.key + "-tab",
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

<section class="mb-20">
    <div class="flex items-center gap-x-2 mt-3 mb-9">
        <span class="h-px block relative w-8 bg-purple-500" />
        <p
            id="experiences"
            class="font-bold text-lg sm:text-2xl whitespace-nowrap"
        >
            Experiências profissionais
        </p>
        <span class="h-px block relative w-32 bg-purple-500" />
    </div>
    <div class="sm:flex items-start gap-2">
        <ul
            class="flex sm:flex-col overflow-x-auto text-sm text-center font-medium sm:w-1/5"
            role="tablist"
        >
            {#each jobs as li, i}
                <li class="flex text-center" role="presentation">
                    <button
                        class="whitespace-nowrap flex-1 px-4 py-2 mb-1 sm:mb-0 border-b-2 sm:border-l-2 md:border-b-0 border-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:text-purple-600 {i ===
                        0
                            ? activeClasses
                            : ''}"
                        id={`${li.key}-button`}
                        type="button"
                        role="tab"
                        aria-controls={`${li.key}-tab`}
                        aria-selected={i == 0 ? true : false}
                        on:click={toggleTab}
                    >
                        {li.company}
                    </button>
                </li>
            {/each}
        </ul>
        {#each jobs as job, i}
            <div
                class="transition-opacity {i == 0 ? '' : 'hidden'} sm:w-4/5"
                id={`${job.key}-tab`}
                role="tabpanel"
                aria-labelledby={`${job.key}-button`}
            >
                <p class="text-md sm:text-lg mb-2">
                    {job.title}
                    <a
                        href={job.companyUrl}
                        class="font-bold text-responsive"
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
                        <MapPin
                            weight="duotone"
                            class="text-purple-400 mr-1"
                        />
                        {job.location}
                    </div>
                </div>
                <ul class="list-disc list-inside">
                    {#each job.description as li}
                        <li class="my-1">{li}</li>
                    {/each}
                </ul>
            </div>
        {/each}
        <slot />
    </div>
</section>
