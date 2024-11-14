<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Link from './Link.svelte';

	let { url }: Props.Header = $props();
</script>

<header class:mb-12={url == '/'} class="flex justify-between items-center mt-12">
	{#if url != '/'}
		<Link href="/" classes="flex items-center gap-2">
			<Icon id="arrow-left" width={16} height={16} />
			Home
		</Link>
	{:else}
		<Link href="/" classes="text-5xl">Renan Lazarotto</Link>
	{/if}
</header>
