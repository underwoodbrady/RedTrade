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
	</div>
	<section class="text-base flex items-center justify-between w-full mx-auto mb-6">
        <div class="flex flex-col items-center space-y-6">
			<div class="flex items-center space-x-2">
				<div class="w-10 bg-green-600 h-10 rounded-md flex items-center justify-center">
                    <img src="/piggy-bank-white.svg" alt="piggy bank" class="h-5" />
				</div>
				<div class="w-28">
					<h5>Savings</h5>
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
