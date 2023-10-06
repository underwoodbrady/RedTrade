<div class="relative flex w-full h-full">
    <section class="h-screen bg-[#303030] w-20 z-20 drop-shadow-md flex items-center py-6 flex-col">
        <h1 class="text-2xl font-bold text-brand mb-10">R<span class="text-white">ed</span></h1>
		<!--SIDEBAR-->
        <div class="flex flex-col space-y-8">
            <img src="/home-white.svg" alt="Home Icon" class="w-8"/>
            <img src="/settings.svg" alt="Settings Icon" class="w-7"/>
            <img src="/people.svg" alt="People Icon" class="w-7"/>
        </div>
		<div />
	</section>
	<section class="flex flex-col w-full flex-1">
		<header class="flex items-center z-20 px-12 justify-between py-6 bg-neutral-800 ">
            <div class="flex items-center space-x-8">
                <h2 class="font-semibold text-2xl text-white">Dashboard #1</h2>
                <div class="rounded-full w-44 py-2 px-4 bg-[#303030] text-neutral-300 text-sm font-semibold flex space-x-4 items-center justify-between drop-shadow-sm">
                    <p>Select</p>
                    <img src="/chevron.svg" alt="Down Icon" class="h-4"/>
                </div>
            </div>
            <div class="flex items-center space-x-8">
                <div class="rounded-full w-52 py-2 px-4 bg-neutral-900 text-neutral-500 text-sm font-semibold flex space-x-4 items-center">
                    <img src="/search.svg" alt="Search Icon" class="h-4"/>
                    <p>Search</p>
                </div>
                <div class="py-2 px-2 bg-neutral-900 rounded-full">
                    <img src="/bell.svg" alt="Bell" class="h-[18px]"/>
                </div>
                <div class="rounded-full bg-neutral-900 text-neutral-200 font-semibold pl-4 pr-1 py-2 text-sm flex justify-between items-center space-x-8">
                    <h3>Brady</h3>
                    <img src="/pfp.png" alt="Profile" class="w-7 h-7 -my-2 rounded-full"/>
                </div>
            </div>
		</header>
		<slot />
	</section>
</div>

<footer class="absolute right-2 bottom-2 text-white text-sm">
	<p>Copyright 2023</p>
</footer>
