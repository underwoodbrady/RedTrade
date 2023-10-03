<script lang="ts">
	export let title: string;
	export let price: number = 0;
	export let cents: string = '00';
	export let features: string[] = [];
	export let actionText: string = 'Purchase';
	export let checks: boolean = false;
	export let discount: boolean = false;
	export let discountAmount: number = 0;
	export let infinity: number[] = [];
</script>

<div
	class="relative px-10 py-12 rounded-md drop-shadow-md bg-[#303030]/90 w-80 flex flex-col justify-between"
>
	<div class="flex justify-between items-center mb-8">
		<h4 class="text-white font-semibold text-4xl">{title}</h4>
		<div class="relative text-neutral-200 flex items-baseline font-semibold">
			{#if discount}
				<div class="absolute left-0 top-1/2 bg-brand h-1 w-full rotate-12 rounded-full" />
				<div class="absolute left-0 top-full text-brand flex items-baseline font-bold">
					<h6 class="text-2xl textglow">${price - discountAmount}</h6>
					<p class="text-sm textglow">.{cents} /mo</p>
				</div>
			{/if}
			<h6 class="text-3xl">${price}</h6>
			<p>.{cents} /mo</p>
		</div>
	</div>
	<ul class="flex space-y-3 text-neutral-200 flex-col mb-8">
		{#each features as feature, count}
			<li class="flex items-center">
				{#if infinity.includes(count)}
					<img src="/infinity-brand.svg" alt="infinity symbol" class="h-2 mr-3" />
				{:else if checks}<img src="/check-brand.svg" alt="check mark" class="h-2 mr-3" />{:else}
					<span class="font-bold text-brand mr-3">●</span>{/if}
				{feature}
			</li>
		{/each}
	</ul>
	<div class="flex flex-col space-y-4">
		<button
			class="px-4 py-2 text-white border-white border font-semibold rounded-md text-left flex items-center justify-between drop-shadow-md"
			>Learn More <img src="/book-open.svg" alt="book open" class="h-3" /></button
		>
		<button
			class="px-4 py-2 text-neutral-800 bg-brand font-semibold rounded-md text-left flex items-center justify-between drop-shadow-md"
			>{actionText} <img src="/arrow-right-bg.svg" alt="arrow-right" class="h-3" /></button
		>
	</div>
</div>

<style>
	.textglow {
		animation: glow 2s ease-in-out infinite alternate;

	}

	@keyframes glow {
  from {
	text-shadow: 0 0 1px rgba(235, 61, 61,0), 0 0 1.5px rgba(235, 61, 61,0), 0 0 2.5px rgba(235, 61, 61,0), 0 0 5px rgba(235, 61, 61,0);
  }
  
  to {
	text-shadow: 0 0 1px rgba(235, 61, 61,0.3), 0 0 1.5px rgba(235, 61, 61,0.3), 0 0 2.5px rgba(235, 61, 61,0.3), 0 0 5px rgba(235, 61, 61,0.3);
  }
}


</style>
