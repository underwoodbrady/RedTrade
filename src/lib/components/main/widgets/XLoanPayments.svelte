<!--Square widget-->
<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6 text-green-500">
		<h4 class="font-semibold text-neutral-200">Payments</h4>
		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">Select</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<section class="text-base flex flex-col justify-between mt-4 h-full">
        <div class="flex items-center justify-between">
            <h5 class="font-semibold"><span class="text-neutral-400 font-normal">Auto |</span>  Hyundai Kona</h5>
            <div class="relative w-8 h-8">
                <img src="/loan-circle.svg" alt="Loan Circle Bro" class="w-full h-full"/>
                <p class="text-[10px] absolute left-[18px] -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-green-500">85%</p>
            </div>
        </div>
		<img src="/kona.png" alt="Hyundai Kona" class="w-full mt-2" />
		<div class="flex justify-between items-cente">
			<div>
                <p class="font-semibold">$420<span class="font-normal">/mo</span></p>
				<p class="text-neutral-400 text-sm">Payments</p>
			</div>
			<div>
                <p class="font-semibold">March 14th, 2025</p>
				<p class="text-neutral-400 text-sm">Final Payment</p>
			</div>
		</div>
	</section>
</WidgetSquare>
