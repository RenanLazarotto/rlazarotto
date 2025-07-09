<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} class="font-bold text-cyan-500 transition-colors duration-200 hover:text-cyan-300">
	{@render children?.()}
</a>
