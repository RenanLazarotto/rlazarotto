<script lang="ts">
    export let id: string;
    export let width: number = 36;
    export let height: number = 36;
</script>

<svg class="pointer-events-none {$$props.class}" {width} {height}>
    <use href="#icon-{id}" />
</svg>
