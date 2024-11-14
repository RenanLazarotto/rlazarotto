<script lang="ts">
	let { id, width, height, classes }: Props.Icon = $props();
</script>

<svg class="pointer-events-none {classes}" {width} {height}>
	<use href="#icon-{id}" />
</svg>
