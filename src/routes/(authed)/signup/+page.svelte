<script lang="ts">
	import { onDestroy } from 'svelte';
	import { currentUser, pb } from '../pocketbase';

	let email: string;
	let verifyEmail: string = 'underwood.brady@gmail.com';
	let username: string;
	let password: string;
	let loading: boolean;

	type signUpStages =
		| 'start'
		| 'verify-email'
		| 'personal-information'
		| 'experience'
		| 'pair-accounts';

	let signUpStage: signUpStages = 'start';
	let selectedExperienceLevel: number = 1;

	let unsubscribe = currentUser.subscribe((val) => {
		if (val != null) {
			window.location.assign(`http://${window.location.host}/app`);
		}
	});

	async function login() {
		try {
			await pb.collection('users').authWithPassword(username, password);
		} catch (err) {
			console.error(err);
			alert(err);
			pb.cancelAllRequests();
			loading = false;
		}
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				email,
				passwordConfirm: password
			};
			loading = true;
			const createdUser = await pb.collection('users').create(data);
			verifyEmail = email;
			await login();
			loading = false;
		} catch (err) {
			console.error(err);
			alert(err);
			pb.cancelAllRequests();
			loading = false;
		}
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<main class="relative bg-[#2d2d2d] w-full min-h-screen flex items-center justify-center">
	<div class="absolute left-0 right-0 top-0 bottom-0 backgroundimg opacity-[0.1]">
		<div class="backgroundgrad w-full h-full" />
	</div>
	<a href="/"
		><img src="/temp-logo.svg" alt="Red Trade Logo" class="absolute top-8 left-8 w-36" /></a
	>
	<div
		class="bg-[#303030] text-white sm:rounded-md p-8 sm:w-[500px] w-full drop-shadow-md h-full sm:h-auto sm:mt-0 z-10 select-none"
	>
		{#if signUpStage == 'start'}
			<h2 class="mt-2 sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-5">
				Create an Account
			</h2>
			<form on:submit|preventDefault class="flex flex-col">
				<label for="email" class="text-neutral-300 font-semibold mb-2 text-md">Email</label>
				<input
					placeholder=""
					type="text"
					bind:value={email}
					class="bg-[#232323] p-2 rounded-[4px] mb-4"
				/>
				<label for="username" class="text-neutral-300 font-semibold mb-2 text-md">Username</label>
				<input
					placeholder=""
					type="text"
					bind:value={username}
					class="bg-[#232323] p-2 rounded-[4px] mb-4"
				/>
				<label for="password" class="text-neutral-300 font-semibold mb-2 text-md">Password</label>
				<input
					placeholder=""
					type="password"
					bind:value={password}
					class="bg-[#232323] p-2 rounded-[4px] mb-4"
				/>
				<!--<button on:click={login}>Login</button>-->
				<button
					on:click={signUp}
					class="bg-brand text-[#303030] p-3 rounded-[4px] font-semibold mt-5 mb-3 text-center"
				>
					{#if loading}
						<img class="w-6 animate-spin mx-auto" src="/spinner.svg" alt="loading spinner" />
					{:else}
						Continue
					{/if}
				</button>
			</form>
			<p class="text-sm text-neutral-400 text-center">
				Have an account? <a class="text-brand font-semibold underline" href="/login">Log in Now</a>
			</p>
		{:else if signUpStage == 'verify-email'}
			<div class="w-full flex justify-center mb-5">
				<div class="h-20 w-20 bg-red-500/10 rounded-full p-5">
					<img src="/email-red.svg" alt="Email" class="w-full" />
				</div>
			</div>
			<h2 class="mt-2 sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-5">Verify Email</h2>
			<p class="text-neutral-400 text-center mb-8">
				Click the link that was sent to <span class="text-sm text-neutral-200">{verifyEmail}</span>
			</p>
			<div class="w-full flex justify-center">
				<a href="/signup" class="text-brand underline">Resend Email</a>
			</div>
		{:else if signUpStage == 'personal-information'}
			<div class="w-full flex justify-center mb-5 -mt-2">
				<div class="flex items-center space-x-2">
					<div class="w-2 h-2 rounded-full bg-brand" />
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
				</div>
			</div>
			<h2 class="sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-8">
				Account Information
			</h2>

			<form on:submit|preventDefault class="flex flex-col">
				<div class="flex justify-between space-x-5">
					<div class="flex flex-col w-full">
						<label for="first" class="text-neutral-300 font-semibold mb-2 text-md"
							>First Name <span class="text-brand">*</span></label
						>
						<input
							placeholder=""
							type="text"
							bind:value={email}
							class="bg-[#232323] p-2 rounded-[4px] mb-4"
						/>
					</div>
					<div class="flex flex-col w-full">
						<label for="last" class="text-neutral-300 font-semibold mb-2 text-md"
							>Last Name <span class="text-brand">*</span></label
						>
						<input
							placeholder=""
							type="text"
							bind:value={username}
							class="bg-[#232323] p-2 rounded-[4px] mb-4"
						/>
					</div>
				</div>

				<label for="password" class="text-neutral-300 font-semibold mb-2 text-md"
					>Birthday <span class="text-brand">*</span></label
				>
				<input
					placeholder=""
					type="password"
					bind:value={password}
					class="bg-[#232323] p-2 rounded-[4px] mb-4"
				/>
				<div class="flex justify-between space-x-5">
					<div class="flex flex-col w-full">
						<label for="first" class="text-neutral-300 font-semibold mb-2 text-md">Country</label>
						<input
							placeholder=""
							type="text"
							bind:value={email}
							class="bg-[#232323] p-2 rounded-[4px] mb-4"
						/>
					</div>
					<div class="flex flex-col w-full">
						<label for="last" class="text-neutral-300 font-semibold mb-2 text-md">Phone #</label>
						<input
							placeholder=""
							type="text"
							bind:value={username}
							class="bg-[#232323] p-2 rounded-[4px] mb-4"
						/>
					</div>
				</div>

				<button
					on:click={signUp}
					class="bg-brand text-[#303030] py-3 w-full rounded-[4px] font-semibold mt-5 text-center"
				>
					{#if loading}
						<img class="w-6 animate-spin mx-auto" src="/spinner.svg" alt="loading spinner" />
					{:else}
						Continue
					{/if}
				</button>
			</form>
		{:else if signUpStage == 'experience'}
			<div class="w-full flex justify-center mb-5 -mt-2">
				<div class="flex items-center space-x-2">
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
					<div class="w-2 h-2 rounded-full bg-brand" />
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
				</div>
			</div>
			<h2 class="sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-5">Experience Level</h2>

			<p class="text-neutral-400 text-center mb-8">
				What is your experience level with personal finance?
			</p>

			<div class="flex space-x-3 mb-3">
				<button
					on:click={() => {
						selectedExperienceLevel = 1;
					}}
					class={selectedExperienceLevel == 1
						? 'relative rounded-md p-4 border border-brand bg-neutral-700 duration-75 text-left'
						: 'bg-neutral-800 rounded-md p-4 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-700 duration-75 text-left'}
				>
					<h3 class="font-semibold text-neutral-200 mb-1">Novice</h3>
					<p class="text-neutral-400">Little to no experience</p>
					{#if selectedExperienceLevel == 1}<img src="/check-small.svg" alt="Check it out" class="absolute right-4 top-4 w-3" />{/if}
				</button>
				<button
					on:click={() => {
						selectedExperienceLevel = 2;
					}}
					class={selectedExperienceLevel == 2
						? 'relative rounded-md p-4 border border-brand bg-neutral-700 duration-75 text-left'
						: 'bg-neutral-800 rounded-md p-4 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-700 duration-75 text-left'}
				>
					<h3 class="font-semibold text-neutral-200 mb-1">Amateur</h3>
					<p class="text-neutral-400">Moderate experience</p>
					{#if selectedExperienceLevel == 2}<img src="/check-small.svg" alt="Check it out" class="absolute right-4 top-4 w-3" />{/if}

				</button>
				<button
					on:click={() => {
						selectedExperienceLevel = 3;
					}}
					class={selectedExperienceLevel == 3
						? 'relative rounded-md p-4 border border-brand bg-neutral-700 duration-75 text-left'
						: 'bg-neutral-800 rounded-md p-4 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-700 duration-75 text-left'}
				>
					<h3 class="font-semibold text-neutral-200 mb-1">Pro</h3>
					<p class="text-neutral-400">Considerable experience</p>
					{#if selectedExperienceLevel == 3}<img src="/check-small.svg" alt="Check it out" class="absolute right-4 top-4 w-3" />{/if}

				</button>
			</div>

			<form on:submit|preventDefault class="flex flex-col">
				<button
					on:click={signUp}
					class="bg-brand text-[#303030] py-3 w-full rounded-[4px] font-semibold mt-5 text-center"
				>
					{#if loading}
						<img class="w-6 animate-spin mx-auto" src="/spinner.svg" alt="loading spinner" />
					{:else}
						Continue
					{/if}
				</button>
			</form>
			{:else if signUpStage == 'pair-accounts'}
			<div class="w-full flex justify-center mb-5 -mt-2">
				<div class="flex items-center space-x-2">
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
					<div class="w-2 h-2 rounded-full bg-neutral-800" />
					<div class="w-2 h-2 rounded-full bg-brand" />
				</div>
			</div>
			<h2 class="sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-5">Pair Accounts</h2>

			<p class="text-neutral-400 text-center mb-8">
				You can optionally pair accounts from the list below
			</p>
		{/if}
	</div>
	<p
		class="hidden sm:inline-block text-sm text-center absolute left-1/2 bottom-4 -translate-x-1/2 text-neutral-200"
	>
		By continuing you agree to the <span class="underline">Terms of Service</span> and
		<span class="underline">Privacy Policy</span>
	</p>
</main>

<style>
	.backgroundimg {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f04646' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
	.backgroundgrad {
		background: linear-gradient(
			to bottom,
			rgba(100, 100, 100, 0) 0%,
			rgba(100, 100, 100, 0.4) 100%
		);
	}
</style>
