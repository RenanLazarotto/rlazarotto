import { writable } from "svelte/store";

export const sidebar = writable(false);
export const url = writable("");