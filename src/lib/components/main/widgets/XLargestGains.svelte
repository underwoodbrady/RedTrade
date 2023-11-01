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
    ]
</script>

<WidgetTall>
    <div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Market Movers</h4>
	</div>

	<table class="w-full border-collapse border-spacing-y-2 mb-auto mt-3">
        <thead>
            <tr class="text-left text-sm font-semibold text-neutral-400 h-10">
                <th>Comp</th>
                <th>Ticker</th>
                <th class="text-right">Volume</th>
                <th class="text-right">Change</th>
            </tr>
        </thead>
        <tbody class="text-sm">
            {#each stocks as stock (stock.ticker)}
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