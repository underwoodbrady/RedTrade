<main class="relative bg-[#2d2d2d] w-full min-h-screen flex items-left flex-col px-20 py-24">
	<div class="absolute left-0 right-0 top-0 bottom-0">
		<div class="backgroundgrad w-full h-full" />
	</div>
	<div class="flex w-full max-w-6xl mx-auto">
		<div class="w-1/2 pr-6 flex flex-col justify-between">
			<div>
                <div class="flex items-center space-x-4 mb-4 z-20">
					<img src="../dashboard-comp.svg" alt="dashboard icon red" class="w-5" />
					<h3 class="text-complementary font-bold text-xl uppercase">Dashboard</h3>
				</div>
                <h2 class="text-white text-6xl font-semibold mb-8">Custom Widgets</h2>
				<p class="text-lg text-neutral-200 font-semibold">
					Our all-in-one solution to managing your financial portfolio. We bring the power of your
					favorite broker to the modern age of UI and automation.
				</p>
			</div>
			<button
				class="px-4 py-2 text-neutral-800 bg-brand font-semibold rounded-md w-64 text-left flex items-center justify-between drop-shadow-md"
				>Try It Out <img src="/arrow-right-bg.svg" alt="arrow-right" class="h-3" />
			</button>
		</div>
		<div class="w-1/2 pl-6">
			<div class="bg-[#303030] w-full h-80 rounded-md drop-shadow-md" />
		</div>
	</div>
</main>

<style>
	.backgroundgrad {
		background: linear-gradient(
			to bottom,
			rgba(238, 133, 133, 0.05) 0%,
			rgba(238, 133, 133, 0) 100%
		);
	}
</style>
