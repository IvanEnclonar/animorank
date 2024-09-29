<script lang="ts">
	import '../app.css';
	import menu from '$lib/assets/menu.svg';
	let openLogin = false;
	export let data;
	const { user } = data;

	const logout = async () => {
		//remove cookies and refresh
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		window.location.reload();
	};

	$: loggedIn = user !== null;
</script>

<div class="flex flex-col h-screen bg-[#121212] text-white">
	<!--Navbar start-->
	<div class="navbar h-16 border-b-2 px-3 border-borderColor flex justify-between">
		<div class="">
			<a href="/" class="cursor-pointer font-bold text-xl font-poppins_h">Animorank</a>
		</div>

		<!-- <div class="flex gap-2 flex-none ml-auto dropdown dropdown-bottom dropdown-end">
			{#if loggedIn}
				<button class="btn btn-primary text-white" on:click={logout}>Log out</button>
			{:else}
				<button
					on:click={() => {
						openLogin = true;
					}}
					class="btn btn-primary text-white">Sign In</button
				>
			{/if}
		</div> -->
		<div>
			<img src={menu} alt="menu" class="h-12 cursor-pointer" />
		</div>
	</div>
	<!--Navbar end-->
	<slot></slot>
	{#if openLogin}
		<div class="fixed grid place-items-center w-full h-full">
			<div
				class="card bg-base-100 shadow-xl w-96 p-8 flex flex-col justify-center items-center z-10"
			>
				<h1 class="text-3xl font-bold mb-6">Hi there!</h1>
				<div class="card-body w-full">
					<p class="text-center text-gray-400 mb-4">Please sign in to continue</p>
					<form method="POST" action="?/login">
						<button
							type="submit"
							class="btn btn-outline btn-primary w-full gap-2 hover:bg-primary hover:text-white transition-all duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
								class="w-5 h-5 fill-current"
							>
								<path
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								/>
							</svg>
							Sign in with Google
						</button>
					</form>
				</div>
			</div>
			<button
				on:click={() => {
					openLogin = false;
				}}
				class="bg-black/50 absolute w-full h-full z-2"
			></button>
		</div>
	{/if}
</div>
