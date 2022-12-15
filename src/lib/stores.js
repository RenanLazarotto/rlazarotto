import { writable } from "svelte/store";

export const sidebar = writable(false);
export const samePageLinks = writable([]);
export const navLinks = writable([]);
export const url = writable("");