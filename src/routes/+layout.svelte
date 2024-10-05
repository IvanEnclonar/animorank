<script lang="ts">
	import '../app.css';
	import menu from '$lib/assets/menu.svg';
	import MobileLoginModal from '$lib/components/MobileLoginModal.svelte';
	import MobileSettingsModal from '$lib/components/MobileSettingsModal.svelte';

	let openSettings = false;
	let openLogin = false;
	export let data;
	const { user } = data;

	$: loggedIn = user !== null;
</script>

<div class="flex flex-col h-screen bg-[#121212] text-white">
	<!--Navbar start-->
	<div class="navbar h-16 border-b-2 px-3 border-borderColor flex justify-between">
		<div class="">
			<a href="/" class="cursor-pointer font-bold text-xl font-poppins_h">Animorank</a>
		</div>

		{#if loggedIn}
			<button class="btn btn-ghost md:hidden" on:click={() => (openSettings = true)}>
				<img src={menu} alt="menu" class="h-10 cursor-pointer" />
			</button>
			<button
				class="btn btn-ghost hidden md:grid md:place-items-center overflow-hidden btn-circle"
				on:click={() => (openSettings = true)}
			>
				<img
					src={user.picture}
					alt="profile"
					class="h-10 w-10 object-cover rounded-full cursor-pointer"
				/>
			</button>
		{:else}
			<button class="btn btn-outline" on:click={() => (openLogin = true)}> Login </button>
		{/if}
	</div>
	<!--Navbar ends and body begins-->
	<slot></slot>
	{#if openLogin && !loggedIn}
		<MobileLoginModal bind:openLogin />
	{/if}

	{#if openSettings && loggedIn}
		<MobileSettingsModal bind:openSettings {user} />
	{/if}
</div>
