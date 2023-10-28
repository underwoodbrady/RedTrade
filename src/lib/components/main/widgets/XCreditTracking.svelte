<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
	<div class="absolute right-7 top-7">
		<img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
	</div>
	<div class="flex items-center">
		<h4 class="font-semibold text-neutral-200">Credit Tracking</h4>
	</div>
	<section class="mx-auto">
        <div class="w-44 h-44 rounded-full p-[2px] overflow-hidden">
            <div
                class="bg-gradient-to-tr from-red-500 via-yellow-500 to-green-500 w-full h-full rounded-full flex items-center justify-center"
            >
                <div class="relative rounded-full w-36 h-36 bg-[#303030] flex justify-center items-center">
                    <img src="/cover.svg" alt="Cover" class="absolute left-12 top-8 w-44 h-44" />
                    <div class="flex flex-col items-center z-20">
                        <h5 class="font-bold text-white text-4xl">721</h5>
                        <p class="text-neutral-200">Good</p>
                    </div>
                </div>
            </div>
        </div>
	</section>
    <section class="mx-auto">
        <p class="text-neutral-400 text-sm font-semibold">History Here...</p>
    </section>
</WidgetSquare>
