<script>
	/** @type {{openLogin: any}} */
	let { openLogin = $bindable() } = $props();

	const closeModal = () => {
		openLogin = false;
	};
</script>
<div class="fixed grid place-items-center w-full h-full">
    <div
        class="bg-[#1E1E1E] shadow-xl flex flex-col justify-center items-center z-10 rounded-md relative w-80 pt-10 pb-5"
    >
        <button
            class="btn btn-square btn-ghost absolute top-2 right-2"
            onclick={closeModal}
            aria-label="Close"
        >
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
        <h1 class="text-3xl font-bold mt-2">Hi there!</h1>
        <div class="card-body w-full">
            <p class="text-center mb-8">Please sign in/up to continue</p>
            <form method="POST" action="?/login">
                <button
                    type="submit"
                    class="bg-[#1E1E1E] btn w-full gap-2 border-[#0A875E] text-[#0A875E] hover:bg-[#006239] hover:text-white transition-all duration-300"
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
                    Continue with Google
                </button>
				<p class="text-center text-xs text-gray-400 mt-2">
                    By continuing, you agree to our
                    <a href="#" class="text-[#0A875E] hover:text-[#006239]"> Terms of Service </a>
                    and
                    <a href="#" class="text-[#0A875E] hover:text-[#006239]"> Privacy Policy</a>
                </p>
            </form>
        </div>
    </div>
    <button
        onclick={() => {
            openLogin = false;
        }}
        class="bg-black/50 absolute w-full h-full z-9"
        aria-label="Hidden Close"
    ></button>
</div>
