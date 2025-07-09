<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children?: Snippet;
		classes?: string;
	}
	let { href, children, classes }: Props = $props();
</script>

<a
	class={[
		'group rounded-lg border-2 border-purple-500/20 bg-purple-950/50 px-3 py-2 shadow-md transition-colors duration-200 hover:border-cyan-300/50 hover:bg-gradient-to-b hover:from-purple-800/25 hover:to-cyan-600/50 hover:shadow-lg',
		classes
	]}
	{href}
>
	{@render children?.()}
</a>
