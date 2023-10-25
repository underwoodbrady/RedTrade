<!--List of accounts paired and money saved in each as well as total money-->
<script lang="ts">
	import WidgetTall from '../WidgetTall.svelte';
</script>

<WidgetTall>
	<div class="absolute right-7 top-8">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center justify-between mr-10">
		<h4 class="font-semibold text-neutral-200">Paired Accounts</h4>
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 802.68 802.68" class="h-4"
				><defs
					><style>
						.cls-69 {
							fill: #d4d4d4;
							stroke-width: 0px;
						}
					</style></defs
				><path
					class="cls-69"
					d="m746.68,313.68l-25-4.67c-6.93-23.9-16.55-46.93-28.67-68.67l14.67-21c18.46-26.09,15.8-61.61-6.33-84.67l-33.33-33.33c-22.77-22.73-58.53-25.96-85-7.67l-21,14.67c-21.73-12.12-44.77-21.73-68.67-28.67l-4.67-25C482.81,22.6,454.61-.52,422.01,0h-43c-32.6-.53-60.8,22.59-66.67,54.67l-4.67,25c-23.9,6.93-46.93,16.55-68.67,28.67l-21-14.67c-26.12-17.37-60.82-14.18-83.33,7.67l-33.33,33.33c-22.73,22.77-25.96,58.53-7.67,85l14.67,21c-12.12,21.73-21.73,44.77-28.67,68.67l-25,4.67C22.6,319.87-.52,348.08,0,380.68v44.33c-.53,32.6,22.59,60.8,54.67,66.67l25,4.67c6.93,23.9,16.55,46.93,28.67,68.67l-14.67,21c-16.65,25.83-13.49,59.7,7.67,82l33.33,33.33c22.77,22.73,58.53,25.96,85,7.67l21-14.67c21.73,12.12,44.77,21.73,68.67,28.67l4.67,25c5.86,32.07,34.07,55.2,66.67,54.67h44.33c32.6.53,60.8-22.59,66.67-54.67l4.67-25c23.9-6.93,46.93-16.55,68.67-28.67l21,14.67c25.83,16.65,59.7,13.49,82-7.67l33.33-33.33c22.73-22.77,25.96-58.53,7.67-85l-14.67-21c12.12-21.73,21.73-44.77,28.67-68.67l25-4.67c32.07-5.86,55.2-34.07,54.67-66.67v-43c-.23-32.52-23.9-60.13-56-65.33Zm-12,110l-46,8.33c-13.26,2.38-23.78,12.51-26.67,25.67-6.79,31.31-19.21,61.13-36.67,88-7.47,11.2-7.47,25.8,0,37l26.67,38.67-31.33,31.33-38.67-26.67c-11.2-7.47-25.8-7.47-37,0-26.87,17.45-56.69,29.88-88,36.67-13.16,2.89-23.29,13.41-25.67,26.67l-7.67,45.33h-44.67l-8.33-46c-2.38-13.26-12.51-23.78-25.67-26.67-31.31-6.79-61.13-19.21-88-36.67-11.2-7.47-25.8-7.47-37,0l-38.67,26.67-31.33-31.33,26.67-38.67c7.47-11.2,7.47-25.8,0-37-17.45-26.87-29.88-56.69-36.67-88-2.89-13.16-13.41-23.29-26.67-25.67l-45.33-7.67v-44.67l46-8.33c13.26-2.38,23.78-12.51,26.67-25.67,6.79-31.31,19.21-61.13,36.67-88,7.47-11.2,7.47-25.8,0-37l-27.33-38.67,31.33-31.33,38.67,26.67c11.2,7.47,25.8,7.47,37,0,26.87-17.45,56.69-29.88,88-36.67,13.16-2.89,23.29-13.41,25.67-26.67l8.33-45.33h44.33l8.33,46c2.38,13.26,12.51,23.78,25.67,26.67,31.31,6.79,61.13,19.21,88,36.67,11.2,7.47,25.8,7.47,37,0l38.67-26.67,31.33,31.33-26.67,38.67c-7.47,11.2-7.47,25.8,0,37,17.45,26.87,29.88,56.69,36.67,88,2.89,13.16,13.41,23.29,26.67,25.67l46,8.33-.33,44Z"
				/><path
					class="cls-69"
					d="m401.34,234.68c-92.05,0-166.67,74.62-166.67,166.67s74.62,166.67,166.67,166.67,166.67-74.62,166.67-166.67-74.62-166.67-166.67-166.67Zm0,266.67c-55.23,0-100-44.77-100-100s44.77-100,100-100,100,44.77,100,100-44.77,100-100,100Z"
				/></svg
			></button
		>
	</div>

	<section class="flex flex-col mb-auto mt-6">
		<button
			class="text-left flex justify-between items-center border-b border-neutral-600 py-3 rounded-t-md hover:bg-neutral-700 px-2 -mx-2 duration-75"
		>
			<div class="flex items-center space-x-4">
				<div class="w-9 h-9 rounded-md bg-green-600 flex items-center justify-center">
					<img src="/piggy-bank-white.svg" alt="piggy bank" class="h-5" />
				</div>
				<div>
					<h5 class="text-neutral-200 font-semibold text-base">Capital One</h5>
					<h6 class="text-neutral-400 font-semibold text-sm">Savings</h6>
				</div>
			</div>
			<p class="">$2500<span class="text-xs">.60</span></p>
		</button>
		<button
			class="text-left flex justify-between items-center border-b border-neutral-600 py-3 hover:bg-neutral-700 px-2 -mx-2 duration-75"
		>
			<div class="flex items-center space-x-4">
				<div class="w-9 h-9 rounded-md bg-rose-600 flex items-center justify-center">
					<img src="/invest.svg" alt="piggy bank" class="h-5" />
				</div>
				<div>
					<h5 class="text-neutral-200 font-semibold text-base">Charles Schwab</h5>
					<h6 class="text-neutral-400 font-semibold text-sm">Investment</h6>
				</div>
			</div>
			<p class="">$705<span class="text-xs">.08</span></p>
		</button>
		<div
			class="group w-full flex justify-center mt-3 text-neutral-400 hover:text-white py-2 hover:bg-neutral-700 rounded-md"
		>
			<div class="flex space-x-2 items-center">
				<p class="text-sm font-semibold cursor-pointer">Add More</p>
				<svg
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 533.37 466.67"
					class="group-hover:stroke-white stroke-neutral-400 w-3 mt-[1px]"
					><defs
						><style>
							.cls-5 {
								fill: none;
								stroke-linecap: round;
								stroke-linejoin: round;
								stroke-width: 76.67px;
							}
						</style></defs
					><path class="cls-5" d="m33.33,233.33h466.7m-.1,0L299.93,33.33m200,200l-200,200" /></svg
				>
			</div>
		</div>
	</section>
	<div class="flex justify-between items-center">
		<h5 class="text-neutral-200 text-base">Total Investments</h5>
		<p class="text-white font-semibold text-xl">$3205<span class="text-sm">.68</span></p>
	</div>
</WidgetTall>
