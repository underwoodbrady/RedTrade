<script lang="ts">
    let searchVal:string = "";
</script>

<div
	class="relative rounded-full w-52 h-9 py-2 px-4 bg-neutral-900 flex space-x-4 items-center"
>
	<img src="/search.svg" alt="Search Icon" class="h-4" />
	{#if searchVal == ""}<p class="text-neutral-500 text-sm font-semibold">Search</p>{/if}
    <input bind:value={searchVal} class="absolute bg-transparent rounded-full -left-4 top-0 w-full h-full pl-12 outline-none text-neutral-200 text-sm pr-4"/>
</div>
