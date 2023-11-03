<script lang="ts">
	export let title: string;
	export let text: string;
	type actionTypes = 'warning' | 'error' | 'info' | 'question';
	export let type: actionTypes;
	export let actionText: string = 'Continue';
	export let cancelText: string = 'Go Back';
	export let onPressAction: () => void = () => {};
	export let onPressCancel: () => void = () => {};
	export let cancelButton: boolean = false;

	function mapActionTypeToImage(type: actionTypes): string {
		switch (type) {
			case 'error':
				return '/error.svg';
			case 'warning':
				return '/warning.svg';
			case 'info':
				return '/info.svg';
			case 'question':
				return '/question.svg';
			default:
				return '';
		}
	}
</script>

<div
	class="fixed top-0 left-0 w-full h-full flex flex-wrap items-center justify-center z-50 fade-in-anim select-none"
>
	<div class="bg-[#303030] -translate-y-full rounded-md drop-shadow-md p-6 w-[480px] h-60 text-white space-x-5 flex drop-down-anim">
		<div
			class={'w-12 h-12 rounded-full p-3 ' +
				(type == 'warning'
					? 'bg-yellow-500/10'
					: type == 'error'
					? 'bg-red-500/10'
					: type == 'question'
					? 'bg-green-500/10'
					: 'bg-blue-500/10')}
		>
			<img src={mapActionTypeToImage(type)} alt="modal symbol" class="w-full h-full" />
		</div>
		<div class="flex flex-col justify-between h-full flex-1">
			<div class="flex flex-col space-y-2">
				<h2 class="font-semibold text-xl">{title}</h2>
				<p class="text-neutral-400">{text}</p>
			</div>
			<div class="flex ml-auto items-center space-x-4">
				{#if cancelButton}
				<button
					on:click={onPressCancel}
					class="px-4 py-2 text-neutral-200 border-neutral-400 border font-semibold rounded-md text-left flex items-center justify-between drop-shadow-md"
				>
					{cancelText}
				</button>
				{/if}
				<button
					on:click={onPressAction}
					class="px-4 py-2 text-neutral-800 bg-brand font-semibold rounded-md text-left flex items-center justify-between drop-shadow-md"
				>
					{actionText}
				</button>
			</div>
		</div>
	</div>	
</div>

<style>
	.fade-in-anim {
		animation-name: fade-in;
		animation-duration: 0.2s;
		animation-direction: normal;
		animation-timing-function: ease-in;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	.drop-down-anim {
		animation-name: drop-down;
		animation-duration: 0.4s;
		animation-delay: 0.05s;
		animation-direction: normal;
		animation-timing-function:ease;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes fade-in {
		0% {
			background-color: rgba(0,0,0,0);
		}
		100% {
			background-color: rgba(0,0,0,0.25)
		}
	}

	@keyframes drop-down {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>
