<!--Tall Widget NEEDS TO BE SEVERLY UPDATED IT LOOKS LIKE DOGSHIT-->
<script lang="ts">
	import WidgetTall from '../WidgetTall.svelte';

	export let symbol: string;

	export let tradePrice: string; /* Should these be consts always? Idk*/
	export let openPrice: string;
	export let closePrice: string;
	export let highPrice: string;
	export let lowPrice: string;
	export let last24HourChange: string;

	let negative: boolean = last24HourChange[0] == '-' ? true : false;

	if (negative) last24HourChange = last24HourChange.slice(1);
</script>

<WidgetTall>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Stock Detailed</h4>
		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">{symbol}</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<section class="flex flex-col space-y-3 mt-3">
		<div class="flex items-center justify-between border-b border-neutral-600 pb-4 -mb-1">
			<h2 class="text-4xl font-bold tracking-wide">${tradePrice}</h2>
			<div class="flex flex-col">
				<div class="flex items-center space-x-2">
					{#if negative}
						<img src="/arrow-red.svg" alt="Arrow Green Up" class="w-3" />
						<h5 class="text-xl text-red-500 font-semibold">{last24HourChange}%</h5>
					{:else}
						<img src="/arrow-green.svg" alt="Arrow Green Up" class="w-3" />
						<h5 class="text-xl text-green-500 font-semibold">{last24HourChange}%</h5>
					{/if}
				</div>
				<p class="text-neutral-400 font-normal text-sm leading-3">Last 24hr</p>
			</div>
		</div>
        <div class="flex items-center justify-between text-sm font-semibold text-neutral-200 -mb-3">
            <p class="rounded-md bg-neutral-700 px-[5px] py-[2px]">1D</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">1W</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">2W</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">1M</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">3M</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">6M</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">YTD</p>
            <p class="rounded-md px-[5px] py-[2px] hover:bg-neutral-700 duration-75 cursor-pointer">1Y</p>
        </div>
        <img src="/graph-condensed.svg" alt="Graph of Stock"/>
        <div class="flex items-center justify-between text-base">
            <div class="flex flex-col">
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Open</p>
                    <p class="text-neutral-200">${openPrice}</p>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Close</p>
                    <p class="text-neutral-200">${closePrice}</p>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">High</p>
                    <p class="text-neutral-200">${highPrice}</p>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Low</p>
                    <p class="text-neutral-200">${lowPrice}</p>
                </div>
            </div>
            <div class="relative flex flex-col items-center ml-2">
                <img src="/color-scale.svg" alt="Color Scale" class="h-10 rounded-full mb-1" />
                <p class="text-xs font-semibold text-neutral-400 -mb-4">Low</p>
                <img
                    src="/arrow-left.svg"
                    alt="White Arrow Ticker"
                    class="absolute left-[2px] top-2 h-2 rotate-180"
                />
            </div>
        </div>
        <div class="text-base flex items-center space-x-10">
            <div class="flex flex-col">
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Mkt Cap</p>
                    <p class="text-neutral-200">4.83B</p>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Avg Vol</p>
                    <p class="text-neutral-200">3.55M</p>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">P/E Ratio</p>
                    <p class="text-neutral-200">-</p>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-neutral-400 font-semibold text-sm">Div Yield</p>
                    <p class="text-neutral-200">-</p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex flex-col mt-1">
                <div class="flex items-center space-x-8">
                    <h3 class="text-sm font-semibold text-neutral-400">4-wk</h3>
                    <h3 class="text-base  text-neutral-200">$14.70 <span class="text-neutral-200">-</span> $16.09</h3>
                </div>
                <div class="flex items-center space-x-6">
                    <h3 class="text-sm font-semibold text-neutral-400">52-wk</h3>
                    <h3 class="text-base  text-neutral-200">$14.44 <span class="text-neutral-200">-</span> $34.99</h3>
                </div>
            </div>
    
            <div class="mr-1">
                <div
                    class="relative border-2 border-neutral-300 rounded-full h-12 w-12"
                >
                    <div class="relative border-4 -rotate-45 w-full h-full border-indigo-500 border-r-transparent rounded-full flex items-center justify-center">
                        <h3 class="text-indigo-500 font-bold text-[10px] rotate-45">67.2%</h3>
    
                    </div>
                    <div class="absolute -top-[2px] -right-[2px] bg-[#303030] rounded-full w-[10px] h-[10px]">
                        <img src="/info-white.svg" alt="Info Icon" class="w-full" />
                    </div>
                </div>
            </div>
        </div>
        
	</section>
</WidgetTall>
