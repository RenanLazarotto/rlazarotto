import { writable } from 'svelte/store';
import { browser } from "$app/env";

export const localStore = (key, initial) => {
    let storedValue = initial;

    if (browser) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, JSON.stringify(initial));
        }

        storedValue = JSON.parse(localStorage.getItem(key));
    }

    const { subscribe, set, update } = writable(storedValue);

    return {
        subscribe,
        set: (value) => {
            if (browser) {
                localStorage.setItem(key, JSON.stringify(value));
            }

            return set(value);
        },
        update
    }
} 