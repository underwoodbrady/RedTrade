<script lang="ts">
	import Widget from '../Widget.svelte';

    export let symbol:string;

    export let tradePrice:string; /* Should these be consts always? Idk*/
    export let openPrice:string;
    export let closePrice:string;
    export let highPrice:string;
    export let lowPrice:string;
    export let last24HourChange:string;

    let negative:boolean = last24HourChange[0] == "-" ? true : false;

    if (negative) last24HourChange = last24HourChange.slice(1);

</script>

<Widget>
    <div class="absolute right-7 top-7">
        <img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-5" />
    </div>
    <div class="flex items-center space-x-6">
        <h4 class="font-semibold text-neutral-200">Single Stock</h4>
        <div
            class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
        >
            <p class="text-sm text-neutral-200">{symbol}</p>
            <img src="/chevron.svg" alt="Down Icon" class="h-4" />
        </div>
    </div>
    <div class="flex items-center justify-between">
        <h2 class="text-5xl font-bold tracking-wide">${tradePrice}</h2>
        <div class="flex flex-col">
            <div class="flex items-center space-x-2">
                {#if negative}
                    <img src="/arrow-red.svg" alt="Arrow Green Up" class="h-3" />
                    <h5 class="text-lg text-red-500 font-semibold">{last24HourChange}%</h5>
                {:else}
                    <img src="/arrow-green.svg" alt="Arrow Green Up" class="h-3" />
                    <h5 class="text-lg text-green-500 font-semibold">{last24HourChange}%</h5>
                {/if}
               
            </div>
            <p class="text-neutral-400 font-normal text-sm">Last 24hr</p>
        </div>
    </div>
    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <div class="flex items-center space-x-4">
                <p class="text-neutral-200 font-semibold text-sm">Open</p>
                <p class="text-neutral-400">${openPrice}</p>
            </div>
            <div class="flex items-center space-x-4">
                <p class="text-neutral-200 font-semibold text-sm">Close</p>
                <p class="text-neutral-400">${closePrice}</p>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex items-center space-x-4">
                <p class="text-neutral-200 font-semibold text-sm">High</p>
                <p class="text-neutral-400">${highPrice}</p>
            </div>
            <div class="flex items-center space-x-4">
                <p class="text-neutral-200 font-semibold text-sm">Low</p>
                <p class="text-neutral-400">${lowPrice}</p>
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
</Widget>