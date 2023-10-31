<!--Wide widget-->
<script lang="ts">
	import WidgetWide from '../WidgetWide.svelte';
</script>

<WidgetWide>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Financials</h4>
        <div class="flex items-center bg-neutral-700 hover:bg-neutral-600 rounded-md py-1 px-2 space-x-2 cursor-pointer">
            <p class="text-sm font-semibold text-neutral-300 ">Set Goals</p>
            <img src="/arrow-right-grey.svg" alt="Arrow to the right" class="h-2 mt-[1px]"/>
        </div>
	</div>
	<section class="text-base flex items-center justify-between w-full mx-auto mb-2">
		<div class="flex flex-col items-center space-y-10">
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-indigo-500 h-10 rounded-md flex items-center justify-center">
					<img src="/piggy-bank-white.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Savings</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-full h-2 bg-indigo-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$540</span>
						</p>
					</div>
					<div class="relative w-3/4 h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$320</span>
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-indigo-500 h-10 rounded-md flex items-center justify-center">
					<img src="/shopping-bag.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Lifestyle</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-8/12 h-2 bg-indigo-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$240</span>
						</p>
					</div>
					<div class="relative w-full h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$360</span>
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-indigo-500 h-10 rounded-md flex items-center justify-center">
					<img src="/invest.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Investing</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-full h-2 bg-indigo-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$540</span>
						</p>
					</div>
					<div class="relative w-3/4 h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$320</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center space-y-10">
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-emerald-500 h-10 rounded-md flex items-center justify-center">
					<img src="/piggy-bank-white.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Savings</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-full h-2 bg-emerald-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$540</span>
						</p>
					</div>
					<div class="relative w-3/4 h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$320</span>
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-emerald-500 h-10 rounded-md flex items-center justify-center">
					<img src="/shopping-bag.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Lifestyle</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-8/12 h-2 bg-emerald-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$240</span>
						</p>
					</div>
					<div class="relative w-full h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$360</span>
						</p>
					</div>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="relative w-10 bg-emerald-500 h-10 rounded-md flex items-center justify-center">
					<img src="/invest.svg" alt="piggy bank" class="h-5" />
					<h5 class="absolute left-0 -top-7 font-semibold text-neutral-200 text-sm">Investing</h5>
				</div>
				<div class="w-56 flex flex-col space-y-2 text-xs">
					<div class="relative w-full h-2 bg-emerald-500 rounded-sm">
						<p class="absolute -top-5 right-2">
							This Month: <span class="font-semibold">$540</span>
						</p>
					</div>
					<div class="relative w-3/4 h-2 bg-neutral-600 rounded-sm">
						<p class="absolute -bottom-5 right-2 text-neutral-400">
							Goal: <span class="font-semibold">$320</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</WidgetWide>
