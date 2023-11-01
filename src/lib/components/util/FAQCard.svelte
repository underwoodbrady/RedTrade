<script lang="ts">
	export let question: string;
	export let answer: string;
	export let opened: boolean = false;
	export let openedOnce: boolean = false; //Probably dumb solution but whatever
</script>

<button
	on:click={() => {
		opened = !opened;
		openedOnce = true;
	}}
	class={!openedOnce
		? 'text-neutral-200 bg-darker/90 w-full rounded-md drop-shadow-md flex flex-col px-10 py-8 cursor-pointer'
		: opened
		? 'open-anim text-neutral-200 bg-darker/90 w-full rounded-md drop-shadow-md flex flex-col px-10 py-8 cursor-pointer'
		: 'close-anim text-neutral-200 bg-darker/90 w-full rounded-md drop-shadow-md flex flex-col px-10 py-8 cursor-pointer'}
>
	<div class="relative flex justify-left w-full">
		<h4 class=" text-2xl font-semibold">{question}</h4>
		{#if opened && openedOnce}
			<img
				src="/minus-white.svg"
				alt="
        Minus Icon"
				class="absolute w-6 right-2 top-4"
			/>
		{:else}
			<img src="/plus-white.svg" alt="Plus Icon" class="absolute w-9 right-0 top-0" />
		{/if}
	</div>

	<div
		class={!openedOnce
			? 'h-0 overflow-hidden'
			: opened
			? 'stretch-anim overflow-hidden'
			: 'thin-anim h-0 overflow-hidden'}
	>
		<p class="text-white text-xl">{answer}</p>
	</div>
</button>

<style>
	.open-anim {
		animation-name: open;
		animation-duration: 0.05s;
		animation-direction: normal;
		animation-timing-function: linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	.stretch-anim {
		animation-name: stretch;
		animation-duration: 0.05s;
		animation-direction: normal;
		animation-timing-function: linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	.close-anim {
		animation-name: close;
		animation-duration: 0.05s;
		animation-direction: normal;
		animation-timing-function: linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	.thin-anim {
		animation-name: thin;
		animation-duration: 0.05s;
		animation-direction: normal;
		animation-timing-function: linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes open {
		0% {
			color: white;
			background-color: rgb(107 60 60 / 0.9);
		}
		100% {
			color: #eb3d3d;
			background-color: rgba(122, 66, 66, 0.9);
		}
	}

	@keyframes close {
		0% {
			color: #eb3d3d;
			background-color: rgba(122, 66, 66, 0.9);
		}
		100% {
			color: white;
			background-color: rgb(107 60 60 / 0.9);
		}
	}

	@keyframes stretch {
		0% {
			margin-top: 0px;
			height: 0px;
		}
		100% {
			margin-top: 24px;
			height: auto;
		}
	}

	@keyframes thin {
		0% {
			margin-top: 24px;
			height: auto;
		}
		100% {
			margin-top: 0px;
			height: 0px;
		}
	}
</style>
