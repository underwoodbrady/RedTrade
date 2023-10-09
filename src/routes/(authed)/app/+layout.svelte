<script>
	import Dropdown from "$lib/components/util/Dropdown.svelte";

</script>
<div class="relative w-full h-full">
	<section
		class="h-screen bg-[#303030] w-20 drop-shadow-md flex items-center py-6 flex-col fixed left-0 top-0 z-50"
	>
		<h1 class="text-2xl font-extrabold text-brand mb-12">R<span class="text-white font-bold">ed</span></h1>
		<!--SIDEBAR-->
		<div class="flex flex-col space-y-8">
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
				<Dropdown/>
			</div>
			<div class="flex items-center space-x-8">
				<div
					class="rounded-full w-52 py-2 px-4 bg-neutral-900 text-neutral-500 text-sm font-semibold flex space-x-4 items-center"
				>
					<img src="/search.svg" alt="Search Icon" class="h-4" />
					<p>Search</p>
				</div>
				<div class="relative py-2 px-2 bg-neutral-900 rounded-full">
					<img src="/bell.svg" alt="Bell" class="h-[18px]" />
					<div class="absolute -right-1 -top-1 bg-red-500 rounded-full w-4 h-4 text-xs font-semibold text-white flex items-center justify-center">2</div>
				</div>
				<div
					class="rounded-full bg-neutral-900 text-neutral-200 font-semibold pl-4 pr-1 py-2 text-sm flex justify-between items-center space-x-8"
				>
					<h3>Brady</h3>
					<img src="/pfp.png" alt="Profile" class="w-7 h-7 -my-2 rounded-full" />
				</div>
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
