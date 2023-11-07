<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto'; //Not optimal fix

	let canvas: any;
	let sectorAllocationLabelDefault: string = 'Total';
	let sectorAllocationLabel: string = sectorAllocationLabelDefault;
	let sectorAllocationDefault: string = '$3203.12';
	let sectorAllocationAmount: string = sectorAllocationDefault;

	const data = {
		labels: ['Home+Auto', 'Misc', 'Consumer'],
		datasets: [
			{
				data: [1671.16, 557.05, 974.84],
				backgroundColor: ['#10b981', '#ec4899', '#6366f1'],
				hoverBackgroundColor: ['#10b981', '#ec4899', '#6366f1'],
				borderColor: ['#10b981', '#ec4899', '#6366f1'],
				hoverBorderColor: '#fff',
				borderWidth: 0,
				hoverBorderWidth: 2
			}
		]
	};

	function handleHover(e: any, activeEl: any) {
		if (activeEl[0]) {
            document.body.style.cursor = 'pointer';
			sectorAllocationAmount = `$${data.datasets[0].data[activeEl[0].index]}`;
			sectorAllocationLabel = `${data.labels[activeEl[0].index]}`;
		} else {
            document.body.style.cursor = 'default';
			sectorAllocationAmount = sectorAllocationDefault;
			sectorAllocationLabel = sectorAllocationLabelDefault;
		}
	}

	onMount(() => {
		(async function () {
			new Chart(canvas, {
				type: 'doughnut',
				options: {
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							enabled: false
						}
					},
                    layout: {
                        padding:4
                    },
					onHover: (e, activeEl) => handleHover(e, activeEl),
					borderColor: 'white',
					offset: 4,
					cutout: '78%'
				},
				data: data
			});
		})();
	});
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Sector Allocation</h4>
	</div>
	<div class="my-auto mx-auto w-44 h-44 relative">
		<div
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-7 flex flex-col items-center"
		>
			<h6 class="text-sm text-neutral-200">
				{sectorAllocationLabel}
			</h6>
			<h5 class="text-xl font-semibold">
				{sectorAllocationAmount}
			</h5>
		</div>

		<canvas bind:this={canvas} />
	</div>
	<div class="text-sm text-neutral-200 flex justify-around mb-2">
		<div class="flex items-center space-x-1">
			<div class="w-2 h-2 bg-indigo-500 rounded-full mt-[2px]" />
			<p class={sectorAllocationLabel == 'Consumer' ? 'font-semibold' : ''}>Consumer</p>
		</div>
		<div class="flex items-center space-x-1">
			<div class="w-2 h-2 bg-emerald-500 rounded-full mt-[2px]" />
			<p class={sectorAllocationLabel == 'Home+Auto' ? 'font-semibold' : ''}>Home+Auto</p>
		</div>
		<div class="flex items-center space-x-1">
			<div class="w-2 h-2 bg-pink-500 rounded-full mt-[2px]" />
			<p class={sectorAllocationLabel == 'Misc' ? 'font-semibold' : ''}>Misc</p>
		</div>
	</div>
</WidgetSquare>
