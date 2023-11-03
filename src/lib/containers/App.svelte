<script lang="ts">

	import { currentDashboard } from '../../routes/(authed)/app/pages';

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
	import Accounts from '$lib/components/main/widgets/Accounts.svelte';
	import AssetMix from '$lib/components/main/widgets/AssetMix.svelte';
	import MultiSmallGraph from '$lib/components/main/widgets/MultiSmallGraph.svelte';
	import NetWorth from '$lib/components/main/widgets/NetWorth.svelte';
	import XCreditTracking from '$lib/components/main/widgets/XCreditTracking.svelte';
	import RecentTrades from '$lib/components/main/widgets/RecentTrades.svelte';
	import XStockAllInOne from '$lib/components/main/widgets/XStockAllInOne.svelte';
	import LoanPayments from '$lib/components/main/widgets/LoanPayments.svelte';
	import FinancialAnalysis from '$lib/components/main/widgets/FinancialAnalysis.svelte';
	import XRecentActivity from '$lib/components/main/widgets/XRecentActivity.svelte';
	import XCashFlow from '$lib/components/main/widgets/XCashFlow.svelte';
	import XBudgeting from '$lib/components/main/widgets/XBudgeting.svelte';

</script>

<section class="grid small-grid gap-6 text-white text-lg px-12 py-4 min-h-screen min-w-0">
	{#each $currentDashboard.widgetList as widget (widget.id)}
		{#if widget.name == 'accounts-paired'}
			<Accounts />
		{:else if widget.name == 'asset-mix'}
			<AssetMix />
		{:else if widget.name == 'budgeting'}
			<XBudgeting/>
		{:else if widget.name == 'cash-flow'}
			<XCashFlow/>
		{:else if widget.name == 'clock'}
			<Clock />
		{:else if widget.name == 'credit-tracking'}
			<XCreditTracking />
		{:else if widget.name == 'financial-analysis'}
			<FinancialAnalysis />
		{:else if widget.name == 'goal-planning'}
			<span />
		{:else if widget.name == 'list-of-stocks'}
			<StocksTall />
		{:else if widget.name == 'loan-payments'}
			<LoanPayments />
		{:else if widget.name == 'market-movers'}
			<LargestGains />
		{:else if widget.name == 'multi-small-graphs'}
			<MultiSmallGraph />
		{:else if widget.name == 'net-worth'}
			<NetWorth />
		{:else if widget.name == 'portfolio-summary'}
			<Summary />
		{:else if widget.name == 'primary-asset-list'}
			<span />
		{:else if widget.name == 'recent-activity'}
			<XRecentActivity/>
		{:else if widget.name == 'recent-trades'}
			<RecentTrades />
		{:else if widget.name == 'relevant-news'}
			<RelevantNews />
		{:else if widget.name == 'retirement'}
			<span />
		{:else if widget.name == 'sector-allocation'}
			<SectorAllocation />
		{:else if widget.name == 'single-stock'}
			<SingleStock {...widget.params} />
		{:else if widget.name == 'single-stock-additional'}
			<SingleStockAdditional {...widget.params} />
		{:else if widget.name == 'single-stock-allin'}
			<XStockAllInOne {...widget.params} />
		{:else if widget.name == 'square-graph'}
			<SquareGraph />
		{:else if widget.name == 'wide-graph'}
			<WideGraph />
		{/if}
	{/each}
</section>

<style>
	.small-grid {
		grid-template-columns: repeat(3, 320px); /**FIX - Don't hard set 320px*/
	}
</style>
