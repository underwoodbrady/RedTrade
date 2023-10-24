<script lang="ts">
	import WidgetWide from '../WidgetWide.svelte';
</script>

<WidgetWide>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Multi-Graph</h4>
		
            <div
                class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
            >
                <p class="text-sm text-neutral-200">Select</p>
                <img src="/chevron.svg" alt="Down Icon" class="h-4" />
            </div>
     
	</div>
    <img src="/wide-graph.png" alt="Mock graph" class=" absolute left-5 bottom-5 w-[535px]"/>
	<section class="absolute bottom-24 right-8 flex flex-col space-y-4">
		<div class="text-sm flex flex-col">
			<div class="flex items-center space-x-1">
				<div class="w-2 h-2 bg-indigo-500/80 rounded-full mt-[2px]"></div>
				<p class="text-neutral-200/80 font-semibold">AMC</p>
			</div>
			<p class="text-neutral-400/80">15.32</p>
		</div>
		<div class="text-sm flex flex-col">
			<div class="flex items-center space-x-1">
				<div class="w-2 h-2 bg-pink-500 rounded-full mt-[2px]"></div>
				<p class="text-neutral-200 font-semibold">GME</p>
			</div>
			<p class="text-neutral-400">15.08</p>
		</div>
	</section>
</WidgetWide>
