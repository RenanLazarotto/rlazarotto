<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Renan Lazarotto</title>
</svelte:head>

<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
	{#each data.posts as post}
		<a
			class="group rounded-lg border-2 border-purple-500/20 bg-purple-950/50 px-3 py-2 shadow-lg transition-colors duration-200 hover:border-cyan-300/50 hover:bg-gradient-to-b hover:from-purple-800/25 hover:to-cyan-600/50"
			href={`/posts/${post.slug}`}
		>
			<h2
				class="text-2xl font-bold text-cyan-500 transition-colors duration-200 group-hover:text-cyan-300"
			>
				{post.title}
			</h2>

			<time
				datetime={post.published.toISOString()}
				class="mb-2 text-xs text-white/50 transition-colors duration-200 group-hover:text-white/75"
			>
				{post.published.toLocaleString('pt-BR', {
					dateStyle: 'short',
					timeZone: 'America/Sao_Paulo'
				})}
			</time>

			<p class="leading-relaxed text-white/75">
				{post.description}
			</p>
		</a>
	{/each}
</div>
