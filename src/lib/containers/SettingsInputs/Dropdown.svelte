<script lang="ts">
	export let options: string[];
	export let defaultOption: string = '';
	export let onOptionSelected: (option: string) => void;

	let dropdownOpen: boolean = false;
</script>

<button
	class={dropdownOpen
		? 'relative rounded-tr-md rounded-tl-md rounded-br-none rounded-bl-none w-44 py-2 px-4 bg-neutral-700 flex space-x-4 items-center justify-between z-20'
		: 'relative rounded-md w-44 py-2 px-4 bg-[#303030] flex space-x-4 items-center justify-between drop-shadow-sm hover:bg-neutral-700'}
	on:click={() => {
		dropdownOpen = !dropdownOpen;
	}}
>
	<p class="text-neutral-300 text-sm font-semibold">{defaultOption}</p>
    <img src="/chevron.svg" alt="Down Icon" class={dropdownOpen ? 'h-4 rotate-180' : 'h-4'} />
	{#if dropdownOpen}
		<div
			class="absolute top-full -left-4 bg-neutral-700 w-full py-2 px-2 rounded-tr-none rounded-tl-none rounded-br-md rounded-bl-md drop-shadow-sm"
		>
			<ul>
				{#each options as option}
					<li>
						<button
							class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-neutral-200 text-sm"
							on:click={() => onOptionSelected(option)}>{option}</button
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</button>

