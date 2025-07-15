<script>
	import { Menu } from '@lucide/svelte';
	import { links } from '$lib/links';
	import LinkCard from './LinkCard.svelte';

	let open = false;

	function toggle() {
		open = !open;
	}
</script>

<div class="fab-container fixed right-8 bottom-6 z-50 md:hidden">
	<div class="relative">
		<!-- Dropup menu -->
		{#if open}
			<ul
				class="animate-fade-in absolute right-0 bottom-16 w-96 space-y-2 rounded-lg border-2 border-purple-500/20 bg-purple-950/50 px-4 py-6 shadow-lg backdrop-blur-xs transition-opacity duration-200"
			>
				{#each links as link}
					<li>
						<LinkCard href={link.href} classes="flex flex-col gap-1">
							<div
								class="font-bold text-cyan-500 transition-colors duration-200 group-hover:text-cyan-300"
							>
								{link.title}
							</div>
							{#if link.desc}
								<p
									class="text-xs text-white/50 transition-colors duration-200 group-hover:text-white/75"
								>
									{link?.desc}
								</p>
							{/if}
						</LinkCard>
					</li>
				{/each}
			</ul>
		{/if}

		<!-- FAB button -->
		<button
			on:click={toggle}
			class="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-purple-500/20 bg-purple-950/50 text-cyan-500 shadow-md transition-colors duration-200 hover:border-cyan-300/50 hover:bg-gradient-to-b hover:from-purple-800/25 hover:to-cyan-600/50 hover:text-cyan-300 hover:shadow-lg"
			aria-label="Abrir menu"
		>
			<Menu size={48} />
		</button>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.2s ease-out;
	}
</style>
