<script lang="ts">
	import { pb } from '../pocketbase';

	let username: string;
	let password: string;
	let loading: boolean;

	async function login() {
		try {
			loading = true;
			await pb.collection('users').authWithPassword(username, password);
			window.location.assign(`http://${window.location.host}/app`);
			loading = false;
		} catch (err) {
			console.error(err);
			alert(err);
			pb.cancelAllRequests();
			loading = false;
		}
	}
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
		<h2 class="mt-2 sm:mt-0 text-2xl sm:text-3xl font-semibold text-center mb-5">Log In</h2>
		<form on:submit|preventDefault class="flex flex-col">
			<label for="email" class="text-neutral-300 font-semibold mb-2 text-md">Username</label>
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
				on:click={login}
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
			Need an account? <a class="text-brand font-semibold underline" href="/signup">Sign up Now</a>
		</p>
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
