<script>
	import Alert from '$lib/components/util/Alert.svelte';
	import Dropdown from '$lib/components/util/Dropdown.svelte';
	import ProfileCard from '$lib/components/util/ProfileCard.svelte';
	import Search from '$lib/components/util/Search.svelte';
</script>

<svelte:head>
	<title>(2) Dashboard #1</title>
</svelte:head>

<div class="relative w-full h-full">
	<section
		class="h-screen bg-[#303030] w-20 drop-shadow-md flex items-center py-8 flex-col fixed left-0 top-0 z-50"
	>
		<img src="/temp-logo-condensed.svg" alt="Temporary Shortened Logo" class="w-11 mb-12"/>
		<!--SIDEBAR-->
		<div class="flex flex-col space-y-10">
			<img src="/home-white.svg" alt="Home Icon" class="w-8" />
			<img src="/settings.svg" alt="Settings Icon" class="w-7" />
			<img src="/people.svg" alt="People Icon" class="w-7" />
		</div>
		<div />
	</section>
	<section>
		<header
			class="flex items-center z-30 px-12 justify-between py-6 bg-neutral-800 fixed left-20 top-0 w-[calc(100%-80px)]"
		>
			<div class="flex items-center space-x-8">
				<h2 class="font-semibold text-2xl text-white">Dashboard #1</h2>
				<Dropdown />
			</div>
			<div class="flex items-center space-x-8">
				<Search />
				<Alert />
				<ProfileCard/>
			</div>
		</header>
		<main class="ml-20 pt-[84px]">
			<slot />
		</main>
	</section>
</div>

<footer class="fixed right-2 bottom-2 text-neutral-400 text-sm">
	<p>Copyright 2023</p>
</footer>
