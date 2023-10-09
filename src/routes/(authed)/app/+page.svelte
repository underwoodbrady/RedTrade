<script lang="ts">
	import Clock from "$lib/components/main/widgets/Clock.svelte";
	import SingleStock from "$lib/components/main/widgets/SingleStock.svelte";
	import SmallGraph from "$lib/components/main/widgets/SmallGraph.svelte";
	import Summary from "$lib/components/main/widgets/Summary.svelte";

</script>
<section class="flex flex-1 flex-wrap bg-neutral-800 text-white text-lg px-12 py-4 min-h-screen">
	<Clock/>
	<div class="mx-8">
		<Summary/>
	</div>
	<SingleStock symbol="GME" tradePrice="23.12" highPrice="24.99" lowPrice="19.60" openPrice="20.01" closePrice="23.12" last24HourChange="1.2"/>
	<div class="my-8 flex">
		<SmallGraph/>
		<div class="mx-8">
			<SingleStock symbol="AMC" tradePrice="5.56" highPrice="6.51" lowPrice="4.90" openPrice="6.51" closePrice="5.56" last24HourChange="-3.6"/>
		</div>
	</div>	
</section>
