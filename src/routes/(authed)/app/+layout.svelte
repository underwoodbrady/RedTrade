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
			{ name: 'clock', id:1},
			{ name: 'portfolio-summary', id:2 },
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
				}, id:3
			},
			{ name: 'list-of-stocks' , id:4},
			{ name: 'sector-allocation', id:5 },
			{ name: 'square-graph' , id:6},
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
				, id:7
			},
			{ name: 'single-stock-additional', params: { symbol: 'GME' }, id:8 },
			{ name: 'relevant-news' , id:9},
			{ name: 'wide-graph' , id:10},
			{ name: 'market-movers' , id:11},
			{ name: 'market-movers' , id:12},
			{ name: 'square-graph' , id:13},
			{ name: 'accounts-paired' , id:14},
			{ name: 'asset-mix' , id:15},
			{ name: 'multi-small-graphs' , id:16},
			{ name: 'net-worth' , id:17},
			{ name: 'credit-tracking' , id:18},
			{ name: 'recent-trades' , id:19},
			{ name: 'financial-analysis' , id:20},
			{ name: 'loan-payments' , id:21},
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
				}, id:47
			},
			{name:'cash-flow', id:22},
			{name:'budgeting', id:23},
			{name:'recent-activity',id:24},
			{name:'goal-planning',id:25}
		]
	};

	let dayTradingDashboard: dashboard = {
		name: 'Day Trading',
		widgetList: [
			{ name: 'clock' ,id:26},
			{ name: 'portfolio-summary',id:27 },
			{ name: 'relevant-news',id:28 },
			{ name: 'multi-small-graphs',id:29 }, //House
			{ name: 'recent-trades',id:30 },
			{ name: 'wide-graph',id:31 },
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
				,id:32
			},
			{ name: 'list-of-stocks',id:33 },
			{ name: 'market-movers',id:34 }
		]
	};

	let shortTermDashboard: dashboard = {
		name: 'Short Term',
		widgetList: [
			{ name: 'recent-activity',id:35 },
			{ name: 'cash-flow',id:36 },
			{ name: 'sector-allocation',id:37 },
			{ name: 'budgeting',id:38 },
			{ name: 'credit-tracking',id:39 },
			{ name: 'loan-payments',id:40 } //House
		]
	};

	let longTermDashboard: dashboard = {
		name: 'Long Term',
		widgetList: [
			{ name: 'net-worth',id:41 },
			{ name: 'asset-mix',id:42 },
			{ name: 'financial-analysis',id:43 },
			{ name: 'loan-payments',id:44 }, //House
			{ name: 'accounts-paired',id:45 },
			{ name: 'goal-planning',id:46 }
		]
	};

	let dashboards = [dayTradingDashboard, shortTermDashboard, longTermDashboard, testingDashboard];

	onMount(() => {
		currentDashboard.set(shortTermDashboard)
	});

	//Can probably do some sort of svelte:fragment named slot nonsense
</script>

<svelte:head>
	<title>(2) {$currentDashboard.name} - Red Trade</title>
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
