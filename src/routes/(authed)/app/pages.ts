import { writable } from 'svelte/store';

export type pages = 'app' | 'settings' | 'community';

export type dashboards = 'demo' | 'day trading' | 'long term' | 'research'; // Hook up to database for real profile data
/** Should NOT be needed once its a real site */

export type settings =
| 'display'
| 'functionality'
| 'pairedaccounts'
| 'personalinfo'
| 'privacy'
| 'payments';

export const currentPage = writable<pages>("app");

export const currentDashboard = writable<dashboards>('demo');

export const currentSetting = writable<settings>('display')

currentPage.subscribe((value)=>{
    console.log(`Current Page: ${value}`)
})

currentSetting.subscribe((value)=>{
    console.log(`Current Setting: ${value}`)
})