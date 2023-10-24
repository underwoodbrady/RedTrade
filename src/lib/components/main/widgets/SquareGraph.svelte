<script lang="ts">
	import WidgetSquare from '../WidgetSquare.svelte';
</script>

<WidgetSquare>
    <div class="absolute right-7 top-7">
        <img src="/hamburger-menu.svg" alt="Grab and drop hamburger" class="w-4" />
    </div>
    <div class="flex items-center space-x-6">
        <h4 class="font-semibold text-neutral-200">Single Graph</h4>
        <div
            class="relative rounded-full bg-neutral-700 w-24 py-1 px-4 flex justify-between items-center font-semibold"
        >
            <p class="text-sm text-neutral-200">GME</p>
            <img src="/chevron.svg" alt="Down Icon" class="h-4" />
        </div>
    </div>
    <img src="/square-graph.png" alt="Mock graph" class=" absolute left-5 bottom-5 w-[290px]"/>
</WidgetSquare>