<script>
	import WidgetWide from "../WidgetWide.svelte";

</script>
<WidgetWide>
    <div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Asset Mix</h4>
		
            <div
                class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
            >
                <p class="text-sm text-neutral-200">Select</p>
                <img src="/chevron.svg" alt="Down Icon" class="h-4" />
            </div>
	</div>
	<section class="flex flex-col space-y-4">
		<div class="flex items-center">
			<h5 class="text-base text-neutral-200 w-20">Current:</h5>
			<div class="h-10 w-full bg-gradient-to-r from-indigo-500 to-indigo-500 to-[70%] rounded-sm">

			</div>
		</div>
		<div class="flex items-center">
			<h5 class="text-base text-neutral-200 w-20 ">Goal:</h5>
			<div class="h-10 w-full border border-dashed border-neutral-500 flex items-center justify-between px-4 space-x-4 rounded-sm">
				<p class="text-neutral-400 text-sm font-semibold">You don't currently have a goal set</p>
				<a class="text-neutral-200 text-sm font-semibold flex items-center" href="/app">Set now <img src="/arrow-right-grey.svg" alt="Arrow to the right" class="w-3 ml-2"/> </a>
			</div>
		</div>
	</section>
	<div class="text-sm text-neutral-200 flex justify-around mb-2">
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-indigo-500 rounded-full mt-[2px]"></div>
            <p>Long-term savings<span class="text-neutral-400 pl-1"> (100%)</span></p>
        </div>
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-[2px]"></div>
            <p>Stocks <span class="text-neutral-400 pl-1"> (0%)</span></p>
        </div>
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-pink-500 rounded-full mt-[2px]"></div>
            <p>Bonds <span class="text-neutral-400 pl-1"> (0%)</span></p>
        </div>
        <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mt-[2px]"></div>
            <p>Short-term reserves <span class="text-neutral-400 pl-1"> (0%)</span></p>
        </div>
    </div>
</WidgetWide>
