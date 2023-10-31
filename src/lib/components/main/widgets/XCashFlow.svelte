<script>
	import WidgetWide from '../WidgetWide.svelte';
</script>

<WidgetWide>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Cash Flow</h4>
	</div>
	<section class="flex justify-between h-full mt-5">
		<div class="w-1/3 h-full">
			<h5 class=" text-sm text-neutral-400 font-semibold mb-3">Recurring Expenses</h5>
			<div class="flex flex-col h-[190px]">

				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Rent</p>
					<p class="text-sm font-semibold">-$830<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Car Payments</p>
					<p class="text-sm font-semibold">-$420<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Planet Fitness</p>
					<p class="text-sm font-semibold">-$15<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Midjourney</p>
					<p class="text-sm font-semibold">-$10<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Amazon Prime</p>
					<p class="text-sm font-semibold">-$8<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1 mt-auto">
					<p class="text-base font-semibold">Total</p>
					<p class="text-base text-red-500 font-bold">-$1800<span class="font-normal text-xs">/mo</span></p>
				</div>
			</div>
		</div>
		<div class="w-1/3 rounded-md">
			<h5 class=" text-sm text-neutral-400 font-semibold mb-3">Recurring Payments</h5>
			<div class="flex flex-col h-[190px]">

				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Chipotle</p>
					<p class="text-sm  font-semibold">+$1000<span class="font-normal text-xs">/mo</span></p>
				</div>
				<div class="flex justify-between mr-10 border-neutral-600 py-1">
					<p class="text-sm text-neutral-200">Side Project</p>
					<p class="text-sm  font-semibold">+$910<span class="font-normal text-xs">/mo</span></p>
				</div>

				<div class="flex justify-between mr-10 border-neutral-600 py-1 mt-auto">
					<p class="text-base font-semibold">Total</p>
					<p class="text-base text-green-500 font-bold">+$1910<span class="font-normal text-xs">/mo</span></p>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-between w-1/3">
			<!--
			<div>
				<h5 class=" text-sm text-neutral-400 font-semibold mb-2">Projected Balance</h5>
				<div class="flex items-center space-x-2">
					<p class="text-4xl font-semibold tracking-wide">$8603</p>
					<div class="flex flex-col">
						<p class="text-neutral-400 text-sm leading-5">1y from now</p>
						<p class="text-green-500 text-sm leading-4">+20.5%</p>
					</div>
				</div>
			</div>
			-->
			<div class="mb-1">
				<h5 class=" text-sm text-neutral-400 font-semibold mb-4">Suggestions</h5>
				<div class="w-full h-[52px] rounded-md border-indigo-400 border-2 mb-3 p-2 flex items-center">
                    <img src="/subscription.svg" alt="Auto Subscription" class="h-full"/>
                    <div class="flex flex-col ml-3">
                        <h6 class="text-sm font-semibold text-indigo-400">End Subscriptions</h6>
                        <p class="text-xs text-indigo-200">8 Costing $250/mo</p>
                    </div>
                </div>
				<div class="w-full h-[52px] rounded-md border-pink-400 border-2 mb-3 p-3 flex items-center">
                    <img src="/invest-pink.svg" class="h-full" alt="Invest"/>
                    <div class="flex flex-col ml-3">
                        <h6 class="text-sm font-semibold text-pink-400">Set Goals</h6>
                        <p class="text-xs text-pink-200">Set budgetting goals</p>
                    </div>
                </div>
				<div class="w-full h-[52px] rounded-md border-emerald-400 border-2 p-3 flex items-center">
                    <img src="/graph-emerald.svg" class="h-full" alt="Invest"/>
                    <div class="flex flex-col ml-3">
                        <h6 class="text-sm font-semibold text-emerald-400">Invest More</h6>
                        <p class="text-xs text-emerald-200">20% out of each paycheck</p>
                    </div>
                </div>
			</div>
		</div>
	</section>
</WidgetWide>
