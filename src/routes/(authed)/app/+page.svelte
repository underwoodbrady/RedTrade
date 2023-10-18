<script lang="ts">

	import App from "$lib/containers/App.svelte";
	import Settings from "$lib/containers/Settings.svelte";
	import Community from "$lib/containers/Community.svelte";

	let selectedPage:string = 'app';

</script>

{#if selectedPage == 'app'}
	<App/>
{:else if selectedPage == 'settings'}
	<Settings/>
{:else if selectedPage == 'community'}
	<Community/>
{:else}
	<App/>
{/if}
