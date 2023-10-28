<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Net Worth</h4>
		<div
		class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
	>
		<p class="text-sm text-neutral-200">Select</p>
		<img src="/chevron.svg" alt="Down Icon" class="h-4" />
	</div>
	</div>
    <section class="flex text-sm items-center justify-around mt-4 text-neutral-400 font-semibold">
        <h5>Jan</h5>
		<h5>Feb</h5>
		<h5>Mar</h5>
		<h5>Apr</h5>
		<h5>May</h5>
		<h5>Jun</h5>
    </section>
    <section class="w-full h-32 mt-4">
		<!--Image HERE-->
		<img src="/networth.svg" alt="Net Worth" class="w-[250px] mx-auto"/>
	</section>
	<section class="">
		<div class="flex space-x-3 items-center mb-2">
			<p class="font-semibold text-3xl">$3045.67</p>
            <p class="text-base text-neutral-200">(+2.4%)</p>
		</div>
		<div class="flex justify-between items-center">
			<div class="flex items-center space-x-1">
				<div class="w-2 h-2 rounded-full bg-green-500 mt-[1px]" />
				<h5 class="text-neutral-200 font-semibold text-sm">Assets</h5>
			</div>
			<p class="font-medium text-base">$7063.23</p>
		</div>
		<div class="flex justify-between items-center">
			<div class="flex items-center space-x-1">
				<div class="w-2 h-2 rounded-full bg-sky-500 mt-[1px]" />
				<h5 class="text-neutral-200 font-semibold text-sm">Liabilities</h5>
			</div>
			<p class="font-medium text-base">4017.56</p>
		</div>
	</section>

</WidgetSquare>
