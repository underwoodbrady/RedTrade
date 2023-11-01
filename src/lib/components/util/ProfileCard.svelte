<script lang="ts">
	export let onPressLogout:()=>void;
</script>

<div
	class="group relative rounded-full bg-neutral-900 pl-4 pr-1 py-2 text-sm flex justify-between items-center space-x-8 hover:bg-[#353535] hover:border border-neutral-600 hover:-m-[1px] cursor-pointer"
>
	<h3 class="text-neutral-200 font-semibold">Brady</h3>
	<img src="/pfp.png" alt="Profile" class="w-7 h-7 -my-2 rounded-full" />
	<div
		class="absolute top-12 -left-8 rounded-md bg-[#353535] p-2 scale-0 group-hover:scale-100 transition-all origin-top text-sm text-neutral-300 border border-neutral-600 flex flex-col w-full drop-shadow-sm"
	>
		<span class="absolute left-0 -top-4 h-4 w-full" />
		<div class="flex items-center py-2 px-3 my-1 hover:bg-[#484848] rounded-md space-x-2">
			<img src="./settings-hollow.svg" alt="Graduate" class="h-3 mt-[1px]" />
			<p class="">Settings</p>
		</div>
		<div class="flex items-center py-2 px-3 my-1 hover:bg-[#484848] rounded-md space-x-2">
			<img src="/logout.svg" alt="Automation" class="h-3" />
			<button on:click={onPressLogout} class="font-semibold">Logout</button>
		</div>
	</div>
</div>
