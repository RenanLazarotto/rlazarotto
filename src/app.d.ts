// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Snippet } from 'svelte';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Types {
		type Page = {
			title: string;
			description: string;
			slug: string;
			published: Date;
			updated: Date;
		};

		type Post = Page & {
			category: string;
		};

		type Category = {
			title: string;
			href: string;
			count: number;
		};

		type Image = {
			title: string;
			src: string;
			alt: string;
		};

		type Experience = {
			company: string;
			href?: string;
			position: string;
			start: string;
			end?: string;
		};

		type Project = {
			title: string;
			description: string[];
			year: number;
			company: string;
			stack: string[];
			link?: string;
			source?: string;
		};
	}

	namespace Props {
		interface Link {
			href: string;
			target?: string;
			children?: Snippet;
			classes?: string;
		}

		interface Icon {
			id: string;
			width: number;
			height: number;
			classes?: string;
		}

		interface Header {
			url: string;
		}
	}
}

export {};
