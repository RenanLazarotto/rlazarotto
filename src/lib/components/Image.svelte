<script lang="ts">
	import type { Snippet } from 'svelte';
	import { X } from '@lucide/svelte';

	interface Props {
		src: string;
		alt: string;
		children?: Snippet;
	}

	let { src, alt, children }: Props = $props();

	let isOpen: boolean = $state(false);

	const keyboardClose = (e: KeyboardEvent) => {
		if (e.code == 'Escape' || e.key == 'Escape') {
			close();
		}
	};

	const disableTab = (e: KeyboardEvent) => {
		if (e.code == 'Tab') {
			e.preventDefault();
		}
	};

	const open = () => {
		isOpen = true;
		document.addEventListener('keydown', keyboardClose);
	};

	const close = () => {
		isOpen = false;
		document.removeEventListener('keydown', keyboardClose);
	};
</script>

<div class="not-prose my-6">
	<div class="flex flex-col justify-center">
		<button onclick={open} class="max-h-[500px]">
			<img
				{src}
				{alt}
				class="mx-auto h-full max-h-[500px] cursor-pointer rounded-sm object-contain"
			/>
		</button>
		{#if children}
			<p class="mt-2 text-center text-sm text-neutral-400">
				{@render children?.()}
			</p>
		{/if}
	</div>
</div>

<div
	role="dialog"
	class:hidden={!isOpen}
	aria-label={alt}
	class="not-prose fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center overscroll-contain bg-black/60 p-4 backdrop-blur-md"
>
	<img {src} {alt} class="h-auto max-h-full max-w-full self-center rounded-lg" />
	<button
		onclick={close}
		onkeydown={disableTab}
		class="bg-mint-950/75 hover:bg-mint-800 absolute top-4 right-4 flex cursor-pointer items-center rounded-lg px-3 py-2 font-bold text-white backdrop-blur-sm transition-all ease-in-out select-none sm:top-auto sm:right-auto sm:bottom-4 sm:left-4"
	>
		<X size={24} />
		<p class="hidden sm:contents">Fechar</p>
	</button>
</div>

<style>
	div[role='dialog'].hidden {
		transition:
			display 300ms allow-discrete,
			overlay 300ms allow-discrete;
		animation: close 300ms forwards;
	}

	div[role='dialog'] {
		animation: open 300ms forwards;
	}
</style>
