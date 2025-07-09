import type { Component } from 'svelte';

export type Contact = {
	href: string;
	icon: Component;
};

export type Contacts = Contact[];
