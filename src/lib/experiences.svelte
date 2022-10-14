<script>
    import Link from "./components/link.svelte";
    import SectionTitle from "./components/section-title.svelte";

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
                trigger.classList.remove("active");
                trigger.setAttribute("aria-selected", false);
            }
        });

        trigger.classList.add("active");
        trigger.setAttribute("aria-selected", true);
        target.classList.remove("hidden");
    };
</script>

<section>
    <SectionTitle id="experiences">Experiências</SectionTitle>
    <div class="wrapper">
        <ul class="job-list" role="tablist">
            {#each jobs as li, i}
                <li class="job" role="presentation">
                    <button
                        class:active={i == 0}
                        class="job-button"
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
                class:hidden={i != 0}
                class="job-details"
                id={`${job.key}-tab`}
                role="tabpanel"
                aria-labelledby={`${job.key}-button`}
            >
                <p>
                    {job.title}
                    <Link href={job.companyUrl}>@ {job.company}</Link>
                </p>
                <div>
                    {job.startDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })} - {job.endDate.toLocaleString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })}
                </div>
                <ul>
                    {#each job.description as li}
                        <li>
                            {li}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
        <slot />
    </div>
</section>

<style>
    *:focus-visible {
        outline: none;
    }
    section {
        margin-bottom: 6rem;
    }

    .wrapper {
        gap: 0.5rem;
    }

    .job-list {
        display: flex;
        overflow-x: auto;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        padding-bottom: 0.5rem;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }

    .job {
        display: flex;
        font-weight: 600;
    }

    .job-button {
        white-space: nowrap;
        width: 100%;
        text-align: left;
        padding: 0.5rem 1rem;
        margin-bottom: 0.25rem;
        border-bottom-color: rgb(17 24 39);
        border-bottom-width: 2px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    .job-button.active {
        color: rgb(139 92 246);
        background-color: rgb(31 41 55 / 0.5);
        border-bottom-color: rgb(139 92 246);
    }

    .job-button:hover {
        background-color: rgb(31 41 55 / 0.5);
        color: rgb(139 92 246);
    }

    .job-details {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    .job-details > p {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .job-details div {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(156 163 175);
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .job-details ul {
        color: rgb(209 213 219);
        list-style-position: inside;
    }

    .job-details ul li {
        position: relative;
        padding-left: 0.75rem;
    }

    .job-details ul li::before {
        content: '»';
        position: absolute;
        left: 0;
    }

    @media (min-width: 640px) {
        .wrapper {
            display: flex;
            align-items: flex-start;
        }

        .job-list {
            flex-direction: column;
            width: 20%;
        }

        .job-button {
            margin-bottom: 0;
        }

        .job-details {
            width: 80%;
        }
    }
</style>
