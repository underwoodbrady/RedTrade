<script lang="ts">
	import FAQCard from "$lib/components/util/FAQCard.svelte";

</script>

<main class="relative bg-[#2d2d2d] w-full min-h-screen flex items-center flex-col px-20 py-24">
	<div class="absolute left-0 right-0 top-0 bottom-0">
		<div class="backgroundgrad w-full h-full" />
	</div>
	<h3 class="text-white font-bold text-5xl mb-20 z-20">Frequently Asked Questions</h3>
    <section class="flex flex-col space-y-8 w-full max-w-6xl">
        <FAQCard question="What is Red Trade?" answer="Red Trade is a portfolio visualization company specifically for retail investors"/>
        <FAQCard question="How is my money managed?" answer="Your money is managed through your prefered broker, we just find new ways to display it to you."/>
        <FAQCard question="Why is it better than other platforms?" answer="Figure it out for yourself"/>
        <FAQCard question="What's on the roadmap?" answer="Every day a new feature is added. Click here to see what's been added recently"/>
    </section>
</main>

<style>
	.backgroundgrad {
		background: linear-gradient(
			to bottom right,
			rgba(238, 133, 133, 0.3) 0%,
			rgba(238, 133, 133, 0) 100%
		);
	}
</style>