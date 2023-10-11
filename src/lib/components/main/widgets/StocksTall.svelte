<script lang="ts">
	import WidgetTall from '../WidgetTall.svelte';

    let stocks = [
        {
            ticker:'GME',
            name:'Game Stop',
            last:23.12,
            change:1.2,
        },
        {
            ticker:'AMC',
            name:'AMC Enter',
            last:5.56,
            change:-3.6,
        },
        {
            ticker:'AAPL',
            name:'Apple Inc',
            last:179.80,
            change:0.8,
        },
        {
            ticker:'TSLA',
            name:'Tesla Inc',
            last:262.99,
            change:-0.2,
        },
        {
            ticker:'NKE',
            name:'Nike Inc',
            last:98.65,
            change:1.06,
        },
        {
            ticker:'MSFT',
            name:'Microsoft',
            last:332.42,
            change:1.23,
        },
    ]
</script>

<WidgetTall>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-5" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">My Stocks</h4>
	</div>
    <table class="w-full border-collapse border-spacing-y-2 mb-auto mt-3">
        <thead>
            <tr class="text-left text-sm font-medium text-neutral-400 h-10">
                <th>Ticker</th>
                <th>Name</th>
                <th class="text-right">Last</th>
                <th class="text-right">Change</th>
            </tr>
        </thead>
        <tbody class="text-sm">
            {#each stocks as stock}
                <tr class="text-left border-b border-neutral-600 h-9">
                    <td>
                        <p class="text-neutral-400 text-sm">{stock.ticker}</p>
                    </td>
                    <td>
                        <h5 class="text-neutral-200 text-sm">{stock.name}</h5>
                    </td>
                    <td class="text-right">
                        <p class="text-neutral-200 font-semibold text-base">${stock.last}</p>
                    </td>
                    <td class="text-right">
                        <p class={stock.change>0 ? "text-green-500 text-sm" : "text-red-500 text-sm"}>{stock.change}%</p>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
	<section class="text-sm text-neutral-400 flex justify-between w-full items-center px-20">
        <img src="/chevron.svg" alt="Arrow Left" class="h-4 rotate-90 cursor-pointer"/>
	1/1
    <img src="/chevron.svg" alt="Arrow Left" class="h-4 rotate-[-90deg] cursor-pointer"/>

	</section>
</WidgetTall>