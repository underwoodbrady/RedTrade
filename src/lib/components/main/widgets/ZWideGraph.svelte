<script lang="ts">
	import WidgetWide from '../WidgetWide.svelte';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto'; //Not optimal fix

	let canvas: any;

	Chart.defaults.borderColor = '#383838';
	Chart.defaults.color = '#e5e5e5';
	Chart.defaults.font.size = 11;
	Chart.defaults.font.weight = '400';
	Chart.defaults.font.family = 'ui-sans-serif, system-ui';

	onMount(() => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 160);
		gradient.addColorStop(0, 'rgba(244, 63, 94, 0.4)');
		gradient.addColorStop(1, 'rgba(244, 63, 94, 0)');
		const gradient2 = ctx.createLinearGradient(0, 0, 0, 160);
		gradient2.addColorStop(0, 'rgba(94, 63, 244, 0.4)');
		gradient2.addColorStop(1, 'rgba(94, 63, 244, 0)');
		(async function () {
			const data = [
				{ year: 2010, count: 10 },
				{ year: 2011, count: 20 },
				{ year: 2012, count: 15 },
				{ year: 2013, count: 25 },
				{ year: 2014, count: 22 },
				{ year: 2015, count: 30 },
				{ year: 2016, count: 28 },
				{ year: 2017, count: 24 },
				{ year: 2018, count: 18 },
				{ year: 2019, count: 20 },
				{ year: 2020, count: 24 },
				{ year: 2021, count: 16 },
				{ year: 2022, count: 18 },
				{ year: 2023, count: 20 },
				{ year: 2024, count: 24 },
				{ year: 2025, count: 16 }
			];

			new Chart(canvas, {
				type: 'line',
				options: {
					responsive: true,
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							intersect: false
						}
					}
				},
				data: {
					labels: data.map((row) => row.year),
					datasets: [
						{
							data: data.map((row) => row.count),
							fill: {
								target:'origin',
								above: gradient, // Area will be red above the origin
							},
							borderColor: 'rgb(244, 63, 94)',
							tension: 0.2,
							pointHoverBorderWidth: 2,
							pointHoverRadius: 4,
							stepped: true
						}
					]
				}
			});
		})();
	});
</script>

<WidgetWide>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">~Wide Graph~</h4>

		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">Select</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<div class="mt-auto h-52 w-full">
		<canvas bind:this={canvas} />
	</div>
</WidgetWide>
