<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<blockquote
	class="border rounded px-3 py-2 not-prose text-sm font-medium relative overflow-hidden border-purple-500 text-purple-400 bg-purple-800/20"
>
	<Icon id="info" width={64} height={64} classes="absolute -bottom-3 -right-3 opacity-10 -rotate-12" />
	{@render children?.()}
</blockquote>
