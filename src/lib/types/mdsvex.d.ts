import type { SvelteComponent } from 'svelte';
declare module '*.md' {
	const component: typeof SvelteComponent;
	export default component;

	export const metadata: Omit<Post, 'slug'>;
}

type MarkdownModule = {
	default: SvelteComponent;
	metadata: Omit<Post, 'slug'>;
};
