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
    <div>
        <ul class="jobs" role="tablist">
            {#each jobs as li, i}
                <li role="presentation">
                    <button
                        class:active={i == 0}
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
                class="details"
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
        margin-bottom: var(--section-margin);
    }

    section > div {
        gap: 0.5rem;
    }

    .jobs {
        display: flex;
        overflow-x: auto;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        padding-bottom: 0.5rem;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }

    .jobs li button {
        white-space: nowrap;
        width: 100%;
        text-align: left;
        padding: 0.5rem 1rem;
        margin-bottom: 0.25rem;
        transition: all ease-in-out 300ms;
        border-radius: 4px;
        color: var(--gray);
        font-weight: 600;
    }

    .jobs li button.active {
        color: var(--accent);
        background-color: var(--background-hover);
    }

    .jobs li button:hover {
        color: var(--white);
        text-shadow: 0 0 8px var(--gray);
        cursor: pointer;
    }

    .details > p {
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--white);
        font-weight: 500;
    }

    .details div {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: var(--gray);
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .details ul {
        color: var(--white);
    }

    .details ul li {
        position: relative;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
    }

    .details ul li::before {
        content: '»';
        position: absolute;
        left: 0;
        color: var(--accent);
    }

    @media (min-width: 640px) {
        section > div {
            display: flex;
            align-items: flex-start;
        }

        .jobs {
            flex-direction: column;
            width: 20%;
        }

        .jobs li button {
            margin-bottom: 0;
        }

        .details {
            width: 80%;
        }
    }
</style>
