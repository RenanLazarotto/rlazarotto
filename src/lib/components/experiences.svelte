<script>
    import Link from "./link.svelte";
    import SectionTitle from "./section-title.svelte";

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
        gap: 1.5rem;
    }

    .jobs {
        display: flex;
        font-size: 0.875rem;
        font-weight: 500;
        gap: 0.5rem;
        line-height: 1.25rem;
        margin-bottom: 0.25rem;
        overflow-x: auto;
        padding-bottom: 0.5rem;
    }

    .jobs li button {
        border-radius: 4px;
        color: var(--gray);
        font-weight: 600;
        margin-bottom: 0.25rem;
        padding: 0.5rem 1rem;
        text-align: left;
        transition: all ease-in-out 300ms;
        white-space: nowrap;
        width: 100%;
    }

    .jobs li button.active {
        background-color: var(--background-hover);
        color: var(--accent);
    }

    .jobs li button:hover {
        color: var(--white);
        cursor: pointer;
        text-shadow: 0 0 8px var(--gray);
    }

    .details > p {
        color: var(--white);
        font-size: var(--font-size);
        font-weight: 500;
        line-height: var(--line-height);
    }

    .details div {
        color: var(--gray);
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        margin-bottom: 0.25rem;
    }

    .details ul {
        color: var(--white);
    }

    .details ul li {
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        position: relative;
    }

    .details ul li::before {
        color: var(--accent);
        content: '»';
        left: 0;
        position: absolute;
    }

    @media (min-width: 640px) {
        section > div {
            align-items: flex-start;
            display: flex;
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
