<script lang="ts">
	import Widget from '../Widget.svelte';
</script>

<Widget>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-5" />
	</div>
	<div class="flex items-center space-x-4">
		<h4 class="font-semibold text-neutral-200">Market Time</h4>
		<div class="relative rounded-full bg-green-500 w-3 h-3">
			<div class="absolute -top-1 -right-1 bg-[#303030] rounded-full w-[10px] h-[10px]">
				<img src="/info-white.svg" alt="Info Icon" class="w-full" />
			</div>
		</div>
	</div>
	<div class="flex items-baseline space-x-2">
		<h2 class="text-6xl font-bold tracking-wide">12:31</h2>
		<p class="font-semibold">45</p>
	</div>
	<div>
		<p class="text-neutral-400 font-normal">Friday October 6th</p>
	</div>
</Widget>
