<script lang="ts">
	import Alert from '$lib/components/util/Alert.svelte';
	import Dropdown from '$lib/components/util/Dropdown.svelte';
	import ProfileCard from '$lib/components/util/ProfileCard.svelte';
	import Search from '$lib/components/util/Search.svelte';
	import SettingsSidebar from '$lib/containers/SettingsSidebar.svelte';
	import Sidebar from '$lib/containers/Sidebar.svelte';
	import { onMount } from 'svelte';

	import { currentPage, currentSetting, currentDashboard, type dashboard } from './pages';

	let testingDashboard: dashboard = {
		name: 'Testing',
		widgetList: [
			{ name: 'clock' },
			{ name: 'portfolio-summary' },
			{
				name: 'single-stock',
				params: {
					symbol: 'GME',
					tradePrice: '23.12',
					highPrice: '24.99',
					lowPrice: '19.60',
					openPrice: '20.01',
					closePrice: '23.12',
					last24HourChange: '1.2'
				}
			},
			{ name: 'list-of-stocks' },
			{ name: 'sector-allocation' },
			{ name: 'square-graph' },
			{
				name: 'single-stock',
				params: {
					symbol: 'AMC',
					tradePrice: '5.56',
					highPrice: '6.51',
					lowPrice: '4.90',
					openPrice: '6.51',
					closePrice: '5.56',
					last24HourChange: '-3.6'
				}
			},
			{ name: 'single-stock-additional', params: { symbol: 'GME' } },
			{ name: 'relevant-news' },
			{ name: 'wide-graph' },
			{ name: 'market-movers' },
			{ name: 'market-movers' },
			{ name: 'square-graph' },
			{ name: 'accounts-paired' },
			{ name: 'asset-mix' },
			{ name: 'multi-small-graphs' },
			{ name: 'net-worth' },
			{ name: 'credit-tracking' },
			{ name: 'recent-trades' },
			{ name: 'financial-analysis' },
			{ name: 'loan-payments' },
			{
				name: 'single-stock-allin',
				params: {
					symbol: 'GME',
					tradePrice: '23.12',
					highPrice: '24.99',
					lowPrice: '19.60',
					openPrice: '20.01',
					closePrice: '23.12',
					last24HourChange: '1.2'
				}
			},
			{name:'cash-flow'},
			{name:'budgeting'},
			{name:'recent-activity'},
			{name:'goal-planning'}
		]
	};

	let dayTradingDashboard: dashboard = {
		name: 'Day Trading',
		widgetList: [
			{ name: 'clock' },
			{ name: 'portfolio-summary' },
			{ name: 'relevant-news' },
			{ name: 'multi-small-graphs' }, //House
			{ name: 'recent-trades' },
			{ name: 'wide-graph' },
			{
				name: 'single-stock-allin',
				params: {
					symbol: 'GME',
					tradePrice: '23.12',
					highPrice: '24.99',
					lowPrice: '19.60',
					openPrice: '20.01',
					closePrice: '23.12',
					last24HourChange: '1.2'
				}
			},
			{ name: 'list-of-stocks' },
			{ name: 'market-movers' }
		]
	};

	let shortTermDashboard: dashboard = {
		name: 'Short Term',
		widgetList: [
			{ name: 'recent-activity' },
			{ name: 'cash-flow' },
			{ name: 'sector-allocation' },
			{ name: 'budgeting' },
			{ name: 'credit-tracking' },
			{ name: 'loan-payments' } //House
		]
	};

	let longTermDashboard: dashboard = {
		name: 'Long Term',
		widgetList: [
			{ name: 'net-worth' },
			{ name: 'asset-mix' },
			{ name: 'financial-analysis' },
			{ name: 'loan-payments' }, //House
			{ name: 'accounts-paired' },
			{ name: 'goal-planning' }
		]
	};

	let dashboards = [dayTradingDashboard, shortTermDashboard, longTermDashboard, testingDashboard];

	onMount(() => {
		currentDashboard.set(testingDashboard)
	});

	//Can probably do some sort of svelte:fragment named slot nonsense
</script>

<svelte:head>
	<title>(2) Dashboard #1 - Red Trade</title>
</svelte:head>

<div class="relative w-full h-full">
	<Sidebar
		currentPage={$currentPage}
		updateCurrentPage={(page) => {
			currentPage.set(page);
		}}
	/>
	<section class="bg-neutral-800">
		{#if $currentPage == 'app'}
			<header
				class="flex items-center z-30 px-12 justify-between pt-6 pb-4 bg-neutral-800 fixed left-20 top-0 w-[calc(100%-80px)]"
			>
				<div
					class="absolute left-0 top-full w-full h-4 bg-gradient-to-b from-neutral-800 to-transparent"
				/>
				<div class="flex items-center space-x-8">
					<h2 class="font-semibold text-2xl text-white">{$currentDashboard.name}</h2>
					<Dropdown
						itemSelected={(item) => {
							currentDashboard.set(dashboards[item]);
						}}
						items={dashboards}
					/>
				</div>
				<div class="flex items-center space-x-8">
					<Search />
					<Alert />
					<ProfileCard />
				</div>
			</header>
			<main class="ml-20 pt-[84px]">
				<slot />
			</main>
		{:else if $currentPage == 'settings'}
			<SettingsSidebar
				selectedSetting={$currentSetting}
				updateSelectedSetting={(setting) => {
					currentSetting.set(setting);
				}}
			/>
			<main class="ml-[288px]">
				<slot />
			</main>
		{:else}
			<main class="ml-20">
				<slot />
			</main>
		{/if}
	</section>
</div>

<footer class="fixed right-2 bottom-2 text-neutral-400 text-sm">
	<p>Copyright 2023</p>
</footer>
