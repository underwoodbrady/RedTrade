<script lang="ts">
	export let bannerOpen: boolean = true;
</script>

{#if true}
	<section
		class={bannerOpen
			? 'w-full flex py-2 bg-brand justify-center text-neutral-800'
			: 'w-full flex py-2 bg-brand justify-center text-neutral-800 hide-anim'}
	>
		<p class="">
			📈 Red Trade BETA is now live for testing. <span class="underline cursor-pointer"
				>Sign Up Now!</span
			> 📈
		</p>
		<button
			on:click={() => {
				bannerOpen = false;
			}}
			><span class="font-bold absolute right-12 top-3 font cursor-pointer"
				><img src="/close-x.svg" alt="close banner" class="w-4" /></span
			>
		</button>
	</section>
{/if}
<section class="sticky left-0 top-0 mt-0 drop-shadow-md z-50">
	<header class="flex bg-neutral-800 h-20 items-center px-12 justify-between">
		<nav class="flex space-x-12 items-center">
			<a href="/"><img src="/temp-logo.svg" alt="Red Trade Logo" class="h-10" /></a>
			<ul class="flex text-white items-center font-semibold">
				<li
					class="relative cursor-pointer flex items-center py-2 px-3 hover:bg-[#2d2d2d] duration-150 rounded-md group"
				>
					<a href="/services">Services</a>
					<img src="/arrow-down.svg" alt="down arrow" class="h-3 ml-2 mt-[2px]" />
					<div class="absolute top-14 left-0 rounded-md bg-neutral-800 border border-neutral-600 p-2 scale-0 group-hover:scale-100 transition-all origin-top font-normal text-neutral-300 flex flex-col">
						<span class="absolute left-0 -top-4 h-4 w-full"/>
						<p class="py-2 px-4 my-1 hover:bg-[#2d2d2d] rounded-md">Dashboard</p>
						<p class="py-2 px-4 my-1 hover:bg-[#2d2d2d] rounded-md">Learning</p>
						<p class="py-2 px-4 my-1 hover:bg-[#2d2d2d] rounded-md">Automation</p>
					</div>
				</li>
				<li class="hover:text-neutral-300 py-2 px-3 cursor-pointer">
					<a href="/pricing">Pricing</a>
				</li>
				<li class="hover:text-neutral-300 py-2 px-3 cursor-pointer"><a href="/FAQ">FAQ</a></li>
				<li class="hover:text-neutral-300 py-2 px-3 cursor-pointer">
					<a href="/company">Company</a>
				</li>
			</ul>
		</nav>
		<div class="flex items-center space-x-4">
			<div class="flex items-center space-x-4 mr-4">
				<div
					class="border border-neutral-600 rounded-full bg-neutral-700 w-8 h-8 flex items-center justify-center drop-shadow-sm"
				>
					<img src="/discord.svg" alt="discord" class="w-4/6" />
				</div>
				<div
					class="border border-neutral-600 rounded-full bg-neutral-700 w-8 h-8 flex items-center justify-center drop-shadow-sm"
				>
					<img src="/instagram.svg" alt="instagram" class="w-5/12" />
				</div>
			</div>
			<button
				class="px-4 py-1 text-white border-white border font-semibold rounded-md drop-shadow-sm"
				>Login</button
			>
			<button class="px-4 py-1 text-neutral-800 bg-brand font-semibold rounded-md drop-shadow-sm"
				>Sign Up</button
			>
		</div>
	</header>
</section>

<style>
	.hide-anim {
		animation-name: hide;
		animation-duration: 0.1s;
		animation-direction: normal;
		animation-timing-function: ease-in;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes hide {
		0% {
			height: 40px;
			padding-top: 8px;
			padding-bottom: 8px;
		}
		99% {
			height: 0px;
			padding-top: 0px;
			padding-bottom: 0px;
		}
		100% {
			height: 0px;
			padding-top: 0px;
			padding-bottom: 0px;
			display: hidden;
		}
	}
</style>
