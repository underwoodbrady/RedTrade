import { writable } from 'svelte/store';

export type pages = 'app' | 'settings' | 'community';

export type dashboards = 'demo' | 'day trading' | 'long term' | 'research'; // Hook up to database for real profile data
/** Should not be needed once its a real site */

export type widgets = 'clock' | 'relevant-news' | 'sector-allocation' | 'single-stock' | 'single-stock-additional' | 'single-stock-allin' | 'square-graph' | 'list-of-stocks' | 'portfolio-summary' | 'wide-graph' | 'accounts-paired' | 'asset-mix' | 'primary-asset-list' | 'budgeting' | 'cash-flow' | 'credit-tracking' | 'financial-analysis' | 'goal-planning' | 'market-movers' | 'loan-payments' | 'multi-small-graphs' | 'net-worth' | 'recent-activity' | 'recent-trades' | 'retirement';

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

currentPage.subscribe((value) => {
    console.log(`Current Page: ${value}`)
})

currentSetting.subscribe((value) => {
    console.log(`Current Setting: ${value}`)
})