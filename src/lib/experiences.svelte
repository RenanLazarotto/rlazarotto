<script>
    import Link from "./components/link.svelte";
    import SectionTitle from "./components/section-title.svelte";

    const activeClasses =
        "text-purple-500 bg-gray-800 border-b-purple-500";

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
                trigger.classList.add("border-b-gray-900");
                trigger.setAttribute("aria-selected", false);
            }
        });

        trigger.classList.add(...activeClasses.split(" "));
        trigger.classList.remove("border-b-gray-900");
        trigger.setAttribute("aria-selected", true);
        target.classList.remove("hidden");
    };
</script>

<section class="mb-24 sm:mb-48">
    <SectionTitle id="experiences">Experiências</SectionTitle>
    <div class="sm:flex items-start gap-2">
        <ul
            class="flex sm:flex-col overflow-x-auto text-sm font-medium sm:w-1/5 pb-2 gap-2"
            role="tablist"
        >
            {#each jobs as li, i}
                <li class="flex" role="presentation">
                    <button
                        class="whitespace-nowrap w-full text-left px-4 py-2 mb-1 sm:mb-0 hover:bg-gray-800 hover:text-purple-500 transition-all duration-300 border-b-2 {i ===
                        0
                            ? activeClasses
                            : 'border-b-gray-900'}"
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
                <p class="text-lg">
                    {job.title}
                    <Link href={job.companyUrl}>@ {job.company}</Link>
                </p>
                <div class="text-sm text-gray-400 font-medium mb-1">
                    {job.startDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })} - {job.endDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })}
                </div>
                <ul class="text-gray-400 list-inside">
                    {#each job.description as li}
                        <li class="relative pl-3 before:[content:'»'] before:absolute before:left-0">{li}</li>
                    {/each}
                </ul>
            </div>
        {/each}
        <slot />
    </div>
</section>
