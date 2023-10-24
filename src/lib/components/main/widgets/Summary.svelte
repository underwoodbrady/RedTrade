<script lang="ts">
	import Widget from '../Widget.svelte';
</script>

<Widget>
    <div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-4">
		<h4 class="font-semibold text-neutral-200">Summary</h4>
	</div>
	<div class="flex">
		<h2 class="text-5xl font-bold tracking-wide">$3203.12</h2>
	</div>
	<div class="flex space-x-6">
		<div class="flex flex-col">
			<div class="flex items-center space-x-2">
				<img src="/arrow-green.svg" alt="Arrow Green Up" class="h-[14px]" />
				<h5 class="text-xl text-green-500 font-semibold">1.2%</h5>
			</div>
			<p class="text-neutral-400 font-normal text-sm">Last 24hr</p>
		</div>
		<div class="flex flex-col">
			<div class="flex items-center space-x-2">
				<img src="/arrow-red.svg" alt="Arrow Red Down" class="h-[14px]" />

				<h5 class="text-xl text-red-500 font-semibold">0.6%</h5>
			</div>
			<p class="text-neutral-400 font-normal text-sm">Last Week</p>
		</div>
		<div class="flex flex-col">
			<div class="flex items-center space-x-2">
				<img src="/arrow-green.svg" alt="Arrow Green Up" class="h-[14px]" />
				<h5 class="text-xl text-green-500 font-semibold">5.6%</h5>
			</div>
			<p class="text-neutral-400 font-normal text-sm">Last Month</p>
		</div>
	</div>
</Widget>