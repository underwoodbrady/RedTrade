<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';

	let trades = [
		{
			type: 'BUY',
			ticker: 'GME',
			amount: '520',
			shares: 29,
			change: '22.5'
		},
		{
			type: 'SELL',
			ticker: 'AMC',
			amount: '100',
			shares: 10,
			change: '-5.5'
		},
		{
			type: 'BUY',
			ticker: 'F',
			amount: '2202',
			shares: 40,
			change: '1.02'
		},
		{
			type: 'BUY',
			ticker: 'AMZN',
			amount: '400',
			shares: 1,
			change: '-2.02'
		},
		{
			type: 'SELL',
			ticker: 'AMC',
			amount: '100',
			shares: 10,
			change: '-4.5'
		},
	];
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Recent Trades</h4>
	</div>
	<table class="w-full border-collapse border-spacing-y-2 mb-auto mt-3">
		<thead>
			<tr class="text-left text-sm font-semibold text-neutral-400 h-10">
				<th>Amount</th>
				<th>Type</th>
				<th class="text-right">Ticker</th>
				<th class="text-right">Change</th>
			</tr>
		</thead>
		<tbody class="text-sm">
			{#each trades as trade}
				<tr class="text-left border-b border-neutral-600 h-9">
					<td>
						<p class="font-semibold mr-1">
							${trade.amount}<span class="text-[10px] leading-[12px] text-neutral-400 font-semibold"
								>/{trade.shares}</span
							>
						</p>
					</td>
					<td>
						<p
							class={trade.type == 'BUY'
								? 'text-[10px] leading-3 py-1 px-2 text-center w-11 rounded-md bg-indigo-400 font-extrabold text-[#303030]'
								: 'text-[10px] leading-3 py-1 px-2 text-center w-11 rounded-md bg-pink-400 font-extrabold text-[#303030]'}
						>
							{trade.type.toUpperCase()}
						</p>
					</td>
					<td class="text-right text-neutral-200 text-sm">{trade.ticker}</td>
					<td class="flex items-center justify-end mt-[6px] space-x-1">
						{#if trade.change[0] == '-'}
							<img src="/arrow-red.svg" alt="stock grew" class="w-2" />
							<p class="text-right text-red-500">{trade.change.substring(1)}%</p>
						{:else}
							<img src="/arrow-green.svg" alt="stock grew" class="w-2" />
							<p class="text-right text-green-500">{trade.change}%</p>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<!-- <section class="flex flex-col mt-2">
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
		
		
	</section> -->
</WidgetSquare>
