<script lang="ts">
	import Widget from '$lib/components/main/Widget.svelte';
	import WidgetSquare from '$lib/components/main/WidgetSquare.svelte';
	import WidgetTall from '$lib/components/main/WidgetTall.svelte';
	import WidgetWide from '$lib/components/main/WidgetWide.svelte';

	import Clock from '$lib/components/main/widgets/Clock.svelte';
	import SingleStock from '$lib/components/main/widgets/SingleStock.svelte';
	import SquareGraph from '$lib/components/main/widgets/SquareGraph.svelte';
	import Summary from '$lib/components/main/widgets/Summary.svelte';
	import StocksTall from '$lib/components/main/widgets/StocksTall.svelte';
	import SectorAllocation from '$lib/components/main/widgets/SectorAllocation.svelte';
	import SingleStockAdditional from '$lib/components/main/widgets/SingleStockAdditional.svelte';
	import RelevantNews from '$lib/components/main/widgets/RelevantNews.svelte';
	import WideGraph from '$lib/components/main/widgets/WideGraph.svelte';
	import LargestGains from '$lib/components/main/widgets/XLargestGains.svelte';
	import LargestLoses from '$lib/components/main/widgets/XLargestLoses.svelte';

</script>

<section
	class="grid small-grid gap-8 bg-neutral-800 text-white text-lg px-12 py-4 min-h-screen min-w-0"
>
	<Clock />
	<Summary />
	<SingleStock
		symbol="GME"
		tradePrice="23.12"
		highPrice="24.99"
		lowPrice="19.60"
		openPrice="20.01"
		closePrice="23.12"
		last24HourChange="1.2"
	/>
	<StocksTall />
	<SectorAllocation />
	<SquareGraph />
	<SingleStock
	symbol="AMC"
	tradePrice="5.56"
	highPrice="6.51"
	lowPrice="4.90"
	openPrice="6.51"
	closePrice="5.56"
	last24HourChange="-3.6"
/>
<SingleStockAdditional symbol="GME"/>
	<RelevantNews />
	<WideGraph/>
	<LargestGains/>
	<LargestLoses/>
	<SquareGraph/>

</section>


<style>
	.small-grid{
		grid-template-columns: repeat(3, min-content);
	}
</style>