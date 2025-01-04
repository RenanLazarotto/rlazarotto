<script lang="ts">
    let { id, width = 36, height = 36 }: Props.Icon = $props();
</script>

<svg class="pointer-events-none" {width} {height}>
    <use href="#icon-{id}" />
</svg>
