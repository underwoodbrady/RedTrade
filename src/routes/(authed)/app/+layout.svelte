<script lang="ts">
	import Alert from '$lib/components/util/Alert.svelte';
	import Dropdown from '$lib/components/util/Dropdown.svelte';
	import ProfileCard from '$lib/components/util/ProfileCard.svelte';
	import Search from '$lib/components/util/Search.svelte';
	import SettingsSidebar from '$lib/containers/SettingsSidebar.svelte';
	import Sidebar from '$lib/containers/Sidebar.svelte';

	import { currentPage, currentSetting } from './pages';

	let modules = {};

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
					<h2 class="font-semibold text-2xl text-white">Dashboard #1</h2>
					<Dropdown
						itemSelected={() => {
							modules = {
								change: 'something in here'
							};
						}}
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
			<SettingsSidebar selectedSetting={$currentSetting} updateSelectedSetting={(setting)=>{currentSetting.set(setting)}}/>
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
