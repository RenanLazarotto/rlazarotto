<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	import '@fontsource-variable/dm-sans';
	import '../app.css';

	import { links } from '$lib/links';
	import { contacts } from '$lib/contacts';

	import Fab from '$lib/components/FAB.svelte';
	import LinkCard from '$lib/components/LinkCard.svelte';
	import Link from '$lib/components/Link.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
	console.log(page);
</script>

<div class="flex h-full max-h-full flex-1 gap-8 p-8">
	<aside class="left-0 hidden w-96 flex-col overflow-y-auto md:flex">
		<div class="mb-8">
			<a
				href="/"
				class="group mb-8 flex items-center gap-4 text-4xl font-bold transition-colors duration-200"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded border-2 border-white text-xl transition-all duration-200 group-hover:border-cyan-600"
				>
					RL
				</div>
				<div>
					<span class="uppercase">R. Lazarotto </span>
					<div class="h-0.5 w-0 bg-cyan-600 transition-all duration-200 group-hover:w-full"></div>
				</div>
			</a>

			<p class="leading-relaxed">
				E aí, tudo bão? Eu sou analista de sistemas curitibano, focado mais pra backends em Go, ou
				fronts em Svelte — e aqui é o meu pequeno refúgio na internet.
			</p>
		</div>

		<nav class="flex flex-1 flex-col gap-4">
			{#each links as link}
				<LinkCard href={link.href}>
					<div
						class="text-lg font-bold text-cyan-500 transition-colors duration-200 group-hover:text-cyan-300"
					>
						{link.title}
					</div>
					{#if link.desc}
						<p
							class="text-sm text-white/50 transition-colors duration-200 group-hover:text-white/75"
						>
							{link?.desc}
						</p>
					{/if}
				</LinkCard>
			{/each}
		</nav>
		<footer class="flex flex-col items-center justify-between gap-4 p-8">
			<p class="font-bold text-cyan-400 text-shadow-lg">
				&copy; {new Date().getFullYear()} - Renan Lazarotto
			</p>
			<div class="flex gap-4">
				{#each contacts as contact}
					{@const Icon = contact.icon}
					<Link href={contact.href}>
						<Icon />
					</Link>
				{/each}
			</div>
		</footer>
	</aside>
	<main class="scrollbar-none flex-1 overflow-y-scroll">
		{#if page.url.pathname == '/'}
			<div class="mb-8 md:hidden">
				<a
					href="/"
					class="group mb-8 flex items-center gap-4 text-4xl font-bold transition-colors duration-200"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded border-2 border-white text-xl transition-all duration-200 group-hover:border-cyan-600"
					>
						RL
					</div>
					<div>
						<span class="uppercase">R. Lazarotto </span>
						<div class="h-0.5 w-0 bg-cyan-600 transition-all duration-200 group-hover:w-full"></div>
					</div>
				</a>

				<p class="leading-relaxed">
					E aí, tudo bão? Eu sou analista de sistemas curitibano, focado mais pra backends em Go, ou
					fronts em Svelte — e aqui é o meu pequeno refúgio na internet.
				</p>
			</div>
		{/if}
		<div class="mx-auto md:max-w-7xl">
			{@render children?.()}
		</div>
		<footer class="mt-8 flex items-center justify-between gap-4 md:hidden">
			<div class="flex flex-col">
				<p class="font-bold text-cyan-400 text-shadow-lg">Renan Lazarotto</p>
				<p class="text-xs font-bold text-cyan-400 text-shadow-lg">
					&copy; {new Date().getFullYear()}
				</p>
			</div>
			<div class="flex gap-4 pr-20">
				{#each contacts as contact}
					{@const Icon = contact.icon}
					<Link href={contact.href}>
						<Icon />
					</Link>
				{/each}
			</div>
		</footer>
	</main>
</div>

<Fab />
