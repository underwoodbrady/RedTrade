<script lang="ts">
	import { onMount } from 'svelte';
	import WidgetSquare from '../WidgetSquare.svelte';

	let activity = [
		{
			type: 'PAIR',
			accountType: 'Savings',
			accountOwner: 'Capital One',
			amount: 3052,
			date: '10/31'
		},
		{
			type: 'BUY',
			ticker: 'GME',
			amount: '520',
			shares: 29,
			date: '10/28'
		},
		{
			type: 'SELL',
			ticker: 'AMC',
			amount: '100',
			shares: 10,
			date: '10/28'
		},
		{
			type: 'BUY',
			ticker: 'F',
			amount: '2202',
			shares: 40,
			date: '10/28'
		},
		{
			type: 'PAIR',
			accountType: 'Checking',
			accountOwner: 'Fidelity',
			amount: 503,
			date: '10/23'
		}
	];
</script>

<WidgetSquare >
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Recent Activity</h4>
	</div>
	<table class="w-full border-collapse border-spacing-y-2 mb-auto mt-3">
		<thead>
			<tr class="text-left text-sm font-semibold text-neutral-400 h-10">
				<th>Date</th>
				<th>Amount</th>
				<th />
				<th class="text-right">Details</th>
			</tr>
		</thead>
		<tbody class="text-sm">
			{#each activity as activity}
				{#if activity.type == 'PAIR'}
					<tr class="text-left border-b border-neutral-600 h-9">
						<td class="text-neutral-400">
							{activity.date}
						</td>
						<td class="text-white font-semibold">
							${activity.amount}
						</td>
						<td colspan="2">
							<div class="flex items-center justify-between">
								<p
									class="text-[10px] leading-3 py-1 px-2 text-center w-11 rounded-md bg-emerald-400 font-extrabold text-[#303030]"
								>
									{activity.type.toUpperCase()}
								</p>
								{#if activity.accountOwner}
									<img
										src={`/${activity.accountOwner.replace(/ /g, '')}.svg`}
										class="w-12"
										alt="Capital One Logo"
									/>
								{/if}
							</div>
						</td>
					</tr>
				{:else}
					<tr class="text-left border-b border-neutral-600 h-9">
						<td class="text-neutral-400">
							{activity.date}
						</td>
						<td>
							<p class="font-semibold mr-1">
								${activity.amount}<span
									class="text-[10px] leading-[12px] text-neutral-400 font-semibold"
									>/{activity.shares}</span
								>
							</p>
						</td>
						<td>
							<p
								class={activity.type == 'BUY'
									? 'text-[10px] leading-3 py-1 px-2 text-center w-11 rounded-md bg-indigo-400 font-extrabold text-[#303030]'
									: 'text-[10px] leading-3 py-1 px-2 text-center w-11 rounded-md bg-pink-400 font-extrabold text-[#303030]'}
							>
								{activity.type.toUpperCase()}
							</p>
						</td>
						<td class="text-right text-neutral-200 text-sm">{activity.ticker}</td>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</WidgetSquare>
