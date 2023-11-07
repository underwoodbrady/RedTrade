<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto'; //Not optimal fix

	let canvas: any;
	let startingCost: number = 10;
	let currentCost: number = 13.8;
	let displayedCost: number = currentCost;
	let changeInCost: number = Math.round((currentCost - startingCost) * 100) / 100;
	let changeInCostPercentage: number =
		Math.round(((currentCost - startingCost) / startingCost) * 100);

	const data = [
		{ year: '10:00am', count: 10 },
		{ year: '10:15am', count: 10.25 },
		{ year: '10:30am', count: 10.8 },
		{ year: '10:45am', count: 11.8 },
		{ year: '11:00am', count: 12 },
		{ year: '11:15am', count: 12.4 },
		{ year: '11:30am', count: 11.8 },
		{ year: '11:45am', count: 11.7 },
		{ year: '12:00pm', count: 11.4 },
		{ year: '12:15pm', count: 12.7 },
		{ year: '12:30pm', count: 12.2 },
		{ year: '12:45pm', count: 12.3 },
		{ year: '1:00pm', count: 12.5 },
		{ year: '1:15pm', count: 13.3 },
		{ year: '1:30pm', count: 13.8 },
		{ year: '1:45pm', count: 14.2 },
		{ year: '2:00pm', count: 14 },
		{ year: '2:15pm', count: 12.9 },
		{ year: '2:30pm', count: 13.3 },
		{ year: '2:45pm', count: 14 },
		{ year: '3:00pm', count: 13.8 }
	];

	Chart.defaults.borderColor = '#383838';
	Chart.defaults.color = '#e5e5e5';
	Chart.defaults.font.size = 11;
	Chart.defaults.font.weight = '400';
	Chart.defaults.font.family = 'ui-sans-serif, system-ui';

	onMount(() => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 160);
		gradient.addColorStop(0, 'rgba(74, 222, 128, 0.4)');
		gradient.addColorStop(1, 'rgba(74, 222, 128, 0)');
		(async function () {
			new Chart(canvas, {
				type: 'line',
				options: {
					responsive: true,
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							intersect: false,
							callbacks: {
								label: function (context) {
									if (!(typeof context.raw == 'number')) return;
									displayedCost = context.raw;
									changeInCost = Math.round((context.raw - startingCost) * 100) / 100;
									changeInCostPercentage =
										Math.round(((context.raw - startingCost) / startingCost) * 100);
								}
							}
						}
					},
					scales: {
						y: {
							grace: '20%',
							ticks: {
								count: 6
							}
						},
						x: {
							ticks: {
								maxTicksLimit: 4
							}
						}
					}
				},
				data: {
					labels: data.map((row) => row.year),
					datasets: [
						{
							data: data.map((row) => row.count),
							fill: {
								target: 'origin',
								above: gradient // Area will be red above the origin
							},
							borderColor: 'rgb(74, 222, 128)',
							tension: 0.2,
							pointStyle: 'circle',
							pointBackgroundColor: 'rgb(74, 222, 128)',
							pointRadius: 1
						}
					]
				}
			});
		})();
	});
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Single Graph</h4>
		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">GME</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<div class="relative mt-auto">
		<div class="absolute top-2 left-12 flex flex-col items-start">
			<h5 class="text-base font-semibold mr-2">${displayedCost}</h5>
			<div class="flex items-center">
				<img src="arrow-green.svg" alt="Arrow Green" class="h-2 mr-1" />
				<h5 class="text-xs font-semibold text-green-500">
					{changeInCost} ({changeInCostPercentage}%)
				</h5>
			</div>

		</div>
		<canvas bind:this={canvas} height="240" />
	</div>
</WidgetSquare>
