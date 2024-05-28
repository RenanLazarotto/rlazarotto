<script lang="ts">
    export let date: Date;

    const formatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeZone: "UTC" });
</script>

<time datetime={date.toISOString()} class={$$props.class}>
    {formatter.format(date)}
</time>
