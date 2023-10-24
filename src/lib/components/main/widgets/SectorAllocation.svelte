<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
    <div class="absolute right-7 top-7">
        <img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
    </div>
    <div class="flex items-center">
        <h4 class="font-semibold text-neutral-200">Sector Allocation</h4>
    </div>
    <img src="/sector-allocation.svg" alt="Mock Sector Allocation" class="absolute left-1/2 -translate-x-1/2 top-20 w-[160px]"/>
    <h3 class="font-semibold absolute left-1/2 -translate-x-1/2 top-36 text-xl">$3203.12</h3>
    <div class="text-sm text-neutral-200 flex justify-around mb-2">
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-indigo-500 rounded-full mt-[2px]"></div>
            <p>Consumer</p>
        </div>
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-[2px]"></div>
            <p>House+Auto</p>
        </div>
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-pink-500 rounded-full mt-[2px]"></div>
            <p>Misc</p>
        </div>
    </div>
</WidgetSquare>