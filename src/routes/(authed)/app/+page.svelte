<script lang="ts">

	import App from "$lib/containers/App.svelte";
	import Settings from "$lib/containers/Settings.svelte";
	import Community from "$lib/containers/Community.svelte";

	import { currentPage, currentDashboard, type dashboard, type pages } from "./pages";

	let selectedPage:pages = $currentPage;

	currentPage.subscribe((page:pages)=>{
		selectedPage = page;
	})

</script>

{#if selectedPage == 'app'}
	<App dashboard = {$currentDashboard}/>
{:else if selectedPage == 'settings'}
	<Settings/>
{:else if selectedPage == 'community'}
	<Community/>
{/if}
