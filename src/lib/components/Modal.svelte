<script>
	export let show = false; // To toggle modal visibility
	export let closeModal; // To handle closing modal
</script>

<!-- Modal Background -->
<div class="fixed top-0 left-0 grid place-items-center w-full h-full" class:hidden={!show}>
	<div class="card bg-base-100 shadow-xl w-96 flex flex-col justify-center items-center z-10">
		<div class="flex justify-end w-full p-1">
			<button class="btn btn-square btn-ghost" on:click={closeModal}>
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
		<div class="px-8 mb-5 w-full mt-2">
			<slot></slot>
		</div>
	</div>
	<button on:click={closeModal} class="bg-black/50 absolute w-full h-full z-2"></button>
</div>
