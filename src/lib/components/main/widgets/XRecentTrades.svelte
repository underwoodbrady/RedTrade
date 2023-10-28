<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Recent Trades</h4>
	</div>
	<section class="flex flex-col mt-2">
		<!--Maybe make table?-->
		<div class="flex items-center justify-between text-sm text-neutral-300 font-semibold mb-2">
			<p>Type</p>
			<p>Ticker</p>
			<p>Amount</p>
			<p>Change(%)</p>
		</div>

		<div class="flex items-center space-x-4 border-b border-neutral-600 py-2">
			<p class=" text-[10px] leading-3 py-1 px-2 rounded-md bg-indigo-400 font-extrabold text-[#303030]">BUY</p>
			<div class="flex text-base justify-between w-full">
				<p class="text-neutral-200 font-semibold">GME</p>
				<div class="flex items-center">
					<p class="text-neutral-400">20</p>
					<span class="mx-1 text-neutral-400">-</span>
					<p class="font-semibold">$450</p>
				</div>

				<p class=" text-neutral-400 text-sm">10/26</p>
			</div>
		</div>
		<div class="flex items-center space-x-4 border-b border-neutral-600 py-2">
			<p class=" text-[10px] leading-3 py-1 px-2 rounded-md bg-pink-400 font-extrabold text-[#303030]">SELL</p>
			<div class="flex text-base justify-between w-full">
				<p class="text-neutral-200 font-semibold">AMC</p>
				<div class="flex items-center">
					<p class="text-neutral-400">20</p>
					<span class="mx-1 text-neutral-400">-</span>
					<p class="font-semibold">$450</p>
				</div>

				<p class=" text-neutral-400 text-sm">10/26</p>
			</div>
		</div>
		<div class="flex items-center space-x-4 border-b border-neutral-600 py-2">
			<p class=" text-[10px] leading-3 py-1 px-2 rounded-md bg-pink-400 font-extrabold text-[#303030]">SELL</p>
			<div class="flex text-base justify-between w-full">
				<p class="text-neutral-200 font-semibold">AMC</p>
				<div class="flex items-center">
					<p class="text-neutral-400">20</p>
					<span class="mx-1 text-neutral-400">-</span>
					<p class="font-semibold">$450</p>
				</div>

				<p class=" text-neutral-400 text-sm">10/26</p>
			</div>
		</div>
		<div class="flex items-center space-x-4 border-b border-neutral-600 py-2">
			<p class=" text-[10px] leading-3 py-1 px-2 rounded-md bg-pink-400 font-extrabold text-[#303030]">SELL</p>
			<div class="flex text-base justify-between w-full">
				<p class="text-neutral-200 font-semibold">AMC</p>
				<div class="flex items-center">
					<p class="text-neutral-400">20</p>
					<span class="mx-1 text-neutral-400">-</span>
					<p class="font-semibold">$450</p>
				</div>

				<p class=" text-neutral-400 text-sm">10/26</p>
			</div>
		</div>
		<div class="flex items-center space-x-4 border-b border-neutral-600 py-2">
			<p class=" text-[10px] leading-3 py-1 px-2 rounded-md bg-pink-400 font-extrabold text-[#303030]">SELL</p>
			<div class="flex text-base justify-between w-full">
				<p class="text-neutral-200 font-semibold">AMC</p>
				<div class="flex items-center">
					<p class="text-neutral-400">20</p>
					<span class="mx-1 text-neutral-400">-</span>
					<p class="font-semibold">$450</p>
				</div>

				<p class=" text-neutral-400 text-sm">10/26</p>
			</div>
		</div>
		
		
	</section>
</WidgetSquare>
