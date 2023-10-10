import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

const devDatabase = "http://127.0.0.1:8090/";
const prodDatabase = "tbd";

export const pb = new PocketBase(devDatabase);

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth)
    currentUser.set(pb.authStore.model);
})