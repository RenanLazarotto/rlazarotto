<section class="mb-6 text-justify">
    {#if $$slots.header}
        <slot name="header" />
    {/if}

    <slot />
</section>
