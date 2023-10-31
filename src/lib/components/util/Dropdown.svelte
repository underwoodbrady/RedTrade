<script lang="ts">
	export let dropDownOpen: boolean = false;
	export let itemSelected: (item: string) => void;
</script>

<button
	class={dropDownOpen
		? 'relative rounded-tr-md rounded-tl-md rounded-br-none rounded-bl-none w-44 py-2 px-4 bg-neutral-700 flex space-x-4 items-center justify-between'
		: 'relative rounded-full w-44 py-2 px-4 bg-[#303030] flex space-x-4 items-center justify-between drop-shadow-sm hover:bg-neutral-700'}
	on:click={() => {
		dropDownOpen = !dropDownOpen;
	}}
>
	<p class="text-neutral-300 text-sm font-semibold">Select</p>
	<img src="/chevron.svg" alt="Down Icon" class={dropDownOpen ? 'h-4 rotate-180' : 'h-4'} />
	{#if dropDownOpen}
		<div
			class="absolute top-full -left-4 bg-neutral-700 w-full py-2 px-2 rounded-tr-none rounded-tl-none rounded-br-md rounded-bl-md drop-shadow-sm"
		>
			<ul class="flex flex-col">
				<li
					class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full"
				>
					<button on:click={() => itemSelected('demo')} class = " text-left flex items-center space-x-2">
						<img src="/graph-up.svg" alt="Beaker Icon" class="h-3 mt-[1px]" />
						<p class="text-neutral-200 text-sm font-semibold">Day Trading</p>
					</button>
				</li>
				<li
					class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left flex items-center space-x-2"
				>
					<button on:click={() => itemSelected('day trading')} class = " text-left flex items-center space-x-2">
						<img src="/coins.svg" alt="Beaker Icon" class="h-3 mt-[1px]" />
						<p class="text-neutral-200 text-sm font-semibold">Short Term</p>
					</button>
				</li>
				<li
					class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left flex items-center space-x-2"
				>
					<button on:click={() => itemSelected('long term')} class = " text-left flex items-center space-x-2">
						<img src="/piggy-bank.svg" alt="Beaker Icon" class="h-3 mt-[1px]" />
						<p class="text-neutral-200 text-sm font-semibold">Long Term</p>
					</button>
				</li>
				<li
					class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left flex items-center space-x-2"
				>
					<button on:click={() => itemSelected('research')} class = " text-left flex items-center space-x-2">
						<img src="/beaker.svg" alt="Beaker Icon" class="h-3 mt-[1px]" />
						<p class="text-neutral-200 text-sm font-semibold">Testing</p>
					</button>
				</li>
				<li
					class="h-9 my-1 hover:bg-neutral-600 rounded-md w-full flex items-center justify-center bg-neutral-600 hover:border-2 border-neutral-500"
				>
					<img src="/add.svg" alt="Add Icon" class="h-4 mt-[1px]" />
				</li>
			</ul>
		</div>
	{/if}
</button>
