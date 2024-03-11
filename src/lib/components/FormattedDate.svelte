<script lang="ts">
    export let date: Date;

    import { formatDateToString } from "$lib/utils";
</script>

<time datetime={date.toISOString()} class={$$props.class}>
    {formatDateToString(date)}
</time>
