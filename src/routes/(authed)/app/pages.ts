import { writable } from 'svelte/store';

export type pages = 'app' | 'settings' | 'community';

export const currentPage = writable<pages>("app");

currentPage.subscribe((value)=>{
    console.log(`Current Page: ${value}`)
})