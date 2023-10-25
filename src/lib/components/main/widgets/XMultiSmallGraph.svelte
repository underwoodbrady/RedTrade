<script>
	import WidgetWide from '../WidgetWide.svelte';
</script>

<WidgetWide>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center space-x-6">
		<h4 class="font-semibold text-neutral-200">Watchlist</h4>

		<div
			class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
		>
			<p class="text-sm text-neutral-200">Select</p>
			<img src="/chevron.svg" alt="Down Icon" class="h-4" />
		</div>
	</div>
	<section class="text-base flex items-center justify-between w-full mx-auto mb-6">

		<div class="flex flex-col items-center space-y-6">
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">AMC</h5>
					<p class="text-sm text-green-300">Rising Fast</p>
				</div>
				<div class="w-28">
					<img src="/green-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div class="w-16 text-right">
					<div>
						<!--Arrow Up/Down-->
						<p class="text-green-500">+2.24%</p>
					</div>
					<p class="font-semibold text-sm">$9.37</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">T</h5>
					<p class="text-sm text-green-300">Rising fast</p>
				</div>
				<div class="w-28">
					<img src="/green-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div  class="w-16 text-right">
					<div>
						<!--Arrow Up/Down-->
						<p class="text-green-500">+6.46%</p>
					</div>
					<p class="font-semibold text-sm">$130.23</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">DJI</h5>
					<p class="text-sm text-neutral-200">Dow Jones ...</p>
				</div>
				<div class="w-28">
					<img src="/red-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div  class="w-16 text-right"> 
					<div>
						<!--Arrow Up/Down-->
						<p class="text-red-500">-0.74%</p>
					</div>
					<p class="font-semibold text-sm">$33,414.17</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center space-y-6">
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">INX</h5>
					<p class="text-sm text-neutral-200">S&P 500 I...</p>
				</div>
				<div class="w-28">
					<img src="/red-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div  class="w-16 text-right">
					<div>
						<!--Arrow Up/Down-->
						<p class="text-red-500">-0.85%</p>
					</div>
					<p class="font-semibold text-sm">$4,278.00</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">COMP</h5>
					<p class="text-sm text-neutral-200">NASDAQ ...</p>
				</div>
				<div class="w-28">
					<img src="/red-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div  class="w-16 text-right">
					<div>
						<!--Arrow Up/Down-->
						<p class="text-red-500">-0.96%</p>
					</div>
					<p class="font-semibold text-sm">$130.23</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<div class="w-20">
					<h5 class="font-semibold">HD</h5>
					<p class="text-sm text-neutral-200">Home Depot</p>
				</div>
				<div class="w-28">
					<img src="/green-small-graph.svg" alt="" class="w-full"/>
				</div>
				<div  class="w-16 text-right">
					<div>
						<!--Arrow Up/Down-->
						<p class="text-green-500">+2.47%</p>
					</div>
					<p class="font-semibold text-sm">$139.85</p>
				</div>
			</div>
		</div>
	</section>
</WidgetWide>
