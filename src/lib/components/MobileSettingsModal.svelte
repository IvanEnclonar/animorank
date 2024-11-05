<script>
	/** @type {{openSettings: any, user: any}} */
	let { openSettings = $bindable(), user } = $props();

	const logout = async () => {
		//remove cookies and refresh
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		window.location.reload();
	};
</script>

<div class="fixed grid place-items-center w-full h-full">
	<div class="shadow-xl w-96 p-8 flex flex-col justify-center items-center z-10">
		<div class="grid place-items-center w-48 h-48 bg-gray-100 rounded-full mb-2 overflow-hidden">
			<img src={user.picture} alt="profile" class="w-full h-full rounded-full" />
		</div>
		<h2 class="mb-10">{user.email}</h2>
		<button class="mb-2 underline cursor-pointer" onclick={logout}>Logout</button>
		<button class="mb-2 underline cursor-pointer">About</button>
		<button class="mb-2 underline cursor-pointer">Support</button>
		<button class="btn mt-4 btn-square btn-ghost" onclick={() => (openSettings = false)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
	<button
		onclick={() => {
			openSettings = false;
		}}
		class="bg-black/75 absolute w-full h-full z-2"
	></button>
</div>
