<script lang="ts">
    export let currentPage:string;
    export let updateCurrentPage:(page:any) => void;
</script>

<section
		class="h-screen bg-[#303030] w-20 drop-shadow-md flex items-center py-8 flex-col fixed left-0 top-0 z-50"
	>
		<img src="/temp-logo-condensed.svg" alt="Temporary Shortened Logo" class="w-11 mb-12" />
		<!--SIDEBAR-->
		<div class="flex flex-col space-y-10">
			<button on:click={() => updateCurrentPage("app")}>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 800 800"
					style="enable-background:new 0 0 800 800;"
					xml:space="preserve"
					class={currentPage == 'app'
						? 'fill-white w-8'
						: 'fill-[#878787] w-8 hover:fill-white duration-75'}
				>
					<path
						class="st0"
						d="M72.3,351.8c-10.2-15.3-6.1-36,9.3-46.2c0,0,0,0,0,0l300-200c11.2-7.5,25.8-7.5,37,0l300,200
	c15.3,10.2,19.5,30.9,9.2,46.2c-6.2,9.3-16.6,14.9-27.8,14.8h-66.7v300c0,18.4-14.9,33.3-33.3,33.3H200c-18.4,0-33.3-14.9-33.3-33.3
	v-300H100l0.6-0.6C89.4,366.5,78.6,361.1,72.3,351.8z"
					/>
				</svg>
			</button>
			<button on:click={() => updateCurrentPage("settings")}>
				<svg
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 785.1 800"
					class={currentPage == 'settings' ? "fill-white w-7" : "fill-[#878787] w-7 hover:fill-white duration-75"}
					><defs
						><style>
							.cls-1 {
								fill-rule: evenodd;
								stroke-width: 0px;
							}
						</style></defs
					><path
						class="cls-1"
						d="m702.3,400c0-17.4-1.6-35.2-4.8-53l87.6-75.9-83.1-142-110.5,36.8c-27.9-23.2-59.7-41.4-93.3-53.5L475.4,0h-165.8l-22.8,112.4c-33.9,12.1-65.2,30.1-93.3,53.5l-110.4-36.8L0,271.1l87.6,75.9c-3.2,17.8-4.8,35.6-4.8,53s1.6,35.2,4.8,53L0,528.9l83.1,142,110.5-36.8c27.9,23.2,59.7,41.4,93.3,53.5l22.7,112.4h165.7l22.8-112.4c33.9-12.1,65.2-30.1,93.3-53.5l110.5,36.9,83.1-142-87.5-76c3.2-17.8,4.8-35.6,4.8-53m-309.8,164.7c-90.8,0-164.7-73.9-164.7-164.7s73.9-164.7,164.7-164.7,164.7,73.9,164.7,164.7-73.9,164.7-164.7,164.7"
					/></svg
				>
			</button>
			<button on:click={() => updateCurrentPage('community')}>
				<svg
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 800 600"
					class={currentPage == 'community' ? "fill-white w-7" : "fill-[#878787] w-7 hover:fill-white duration-75"}
					><defs
						><style>
							.cls-1 {
								fill-rule: evenodd;
							}
							.cls-1,
							.cls-2 {
								stroke-width: 0px;
							}
						</style></defs
					><path
						class="cls-2"
						d="m350,600s-50,0-50-50,50-200,250-200,250,150,250,200-50,50-50,50h-400Zm200-300c82.8,0,150-67.2,150-150S632.8,0,550,0s-150,67.2-150,150,67.2,150,150,150Z"
					/><path
						class="cls-1"
						d="m260.8,600c-7.4-15.6-11.1-32.7-10.8-50,0-67.8,34-137.5,96.8-186-31.3-9.7-64-14.4-96.8-14C50,350,0,500,0,550s50,50,50,50h210.8Z"
					/><path
						class="cls-2"
						d="m225,300c69,0,125-56,125-125s-56-125-125-125-125,56-125,125,56,125,125,125Z"
					/></svg
				>
			</button>
		</div>
		<div />
	</section>