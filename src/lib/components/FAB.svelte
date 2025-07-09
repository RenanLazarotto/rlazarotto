<script>
	import { Home, User, Activity, Goal, Menu } from '@lucide/svelte';

	let open = false;

	const links = [
		{ href: '/', label: 'Início', icon: Home },
		{ href: '/sobre', label: 'Sobre', icon: User },
		{ href: '/agora', label: 'Agora', icon: Activity },
		{ href: '/um-dia', label: 'Um dia', icon: Goal }
	];

	function toggle() {
		open = !open;
	}
</script>

<div class="fab-container fixed right-8 bottom-8 z-50">
	<div class="relative">
		<!-- Dropup menu -->
		{#if open}
			<ul
				class="animate-fade-in absolute right-0 bottom-16 space-y-2 rounded-lg bg-white p-2 whitespace-nowrap shadow-lg transition-opacity duration-200 dark:bg-zinc-800"
			>
				{#each links as { href, label, icon: Icon }}
					<li>
						<a
							{href}
							class="flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700"
							on:click={() => (open = false)}
						>
							<Icon size={16} />
							{label}
						</a>
					</li>
				{/each}
			</ul>
		{/if}

		<!-- FAB button -->
		<button
			on:click={toggle}
			class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-purple-500/20 bg-purple-950/50 text-cyan-500 shadow-md transition-colors duration-200 hover:border-cyan-300/50 hover:bg-gradient-to-b hover:from-purple-800/25 hover:to-cyan-600/50 hover:text-cyan-300 hover:shadow-lg"
			aria-label="Abrir menu"
		>
			<Menu size={24} />
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
