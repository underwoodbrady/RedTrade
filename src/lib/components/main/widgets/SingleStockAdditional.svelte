<script lang="ts">
	import Widget from '../Widget.svelte';

	export let symbol: string;
</script>

<Widget>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-5" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Stats</h4>
		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">{symbol}</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<section class="flex justify-between">
        <div class="flex flex-col mt-1">
            <div class="flex items-center space-x-10">
                <h3 class="text-sm font-semibold text-neutral-200">4-wk</h3>
				<h3 class="text-base  text-neutral-400">$14.70 <span class="text-neutral-200">-</span> $16.09</h3>
            </div>
            <div class="flex items-center space-x-8">
				<h3 class="text-sm font-semibold text-neutral-200">52-wk</h3>
                <h3 class="text-base  text-neutral-400">$14.44 <span class="text-neutral-200">-</span> $34.99</h3>
            </div>
        </div>

		<div class="flex flex-col items-center space-y-1">
			<div
				class="relative border-2 border-neutral-300 rounded-full h-14 w-14 flex items-center justify-center"
			>
				<img
					src="/percentportfolio.svg"
					alt="Rounded Ellipse"
					class="h-[calc(100%+1px)] w-[calc(100%+1px)] absolute -left-[1px] -top-[1px] rounded-full"
				/>
				<h3 class="text-indigo-500 font-bold text-xs">67.2%</h3>
				<div class="absolute -top-[2px] -right-[2px] bg-[#303030] rounded-full w-[10px] h-[10px]">
					<img src="/info-white.svg" alt="Info Icon" class="w-full" />
				</div>
			</div>
		</div>
	</section>
	<section class="text-base flex items-center space-x-10">
		<div class="flex flex-col">
			<div class="flex items-center space-x-4">
				<p class="text-neutral-200 font-semibold text-sm">Mkt Cap</p>
				<p class="text-neutral-400">4.83B</p>
			</div>
			<div class="flex items-center space-x-4">
				<p class="text-neutral-200 font-semibold text-sm">Avg Vol</p>
				<p class="text-neutral-400">3.55M</p>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="flex items-center space-x-4">
				<p class="text-neutral-200 font-semibold text-sm">P/E Ratio</p>
				<p class="text-neutral-400">-</p>
			</div>
			<div class="flex items-center space-x-4">
				<p class="text-neutral-200 font-semibold text-sm">Div Yield</p>
				<p class="text-neutral-400">-</p>
			</div>
		</div>
	</section>
</Widget>
