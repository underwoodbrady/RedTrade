<script lang="ts">
    export let dropDownOpen:boolean = false;
</script>

<button
	class="relative rounded-full w-44 py-2 px-4 bg-[#303030] text-neutral-300 text-sm font-semibold flex space-x-4 items-center justify-between drop-shadow-sm hover:bg-neutral-700"
    on:click={() => {
        dropDownOpen = !dropDownOpen;
    }}
>
	<p>Select</p>
	<img src="/chevron.svg" alt="Down Icon" class="h-4" />
    {#if dropDownOpen}
        <div class="absolute top-full -left-4 bg-neutral-700 w-full py-2 px-4 rounded-md drop">
            <ul class="flex flex-col">
                <li class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left">
                    Option one
                </li>
                <li class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left">
                    Option two
                </li>
                <li class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left">
                    Option three
                </li>
                <li class="py-2 px-4 my-1 hover:bg-neutral-600 rounded-md w-full text-left">
                    Option four
                </li>
            </ul>
        </div>
    {/if}
</button>
