<script>
	import dropdown from '$lib/assets/dropdown.svg';
</script>

<div class="w-screen bg-[#121212]">
	<div class="mt-12 px-3 flex justify-between">
		<h2 class="font-arial text-2xl">Dashboard</h2>
		<!-- <button class="btn btn-xs bg-[#006239] text-white hover:bg-[#004327] mt-1"
			>Create new set</button
		> -->
	</div>

	<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
		<div class="flex justify-between border-b border-borderColor p-2">
			<div class="">CCPROG3 S12</div>
			<button class="btn btn-ghost btn-xs"
				><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
			</button>
		</div>
	</div>

	<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
		<div class="flex justify-between border-b border-borderColor p-2">
			<div class="">CCPROG3 S13</div>
			<button class="btn btn-ghost btn-xs"
				><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
			</button>
		</div>
		<div>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Two Sum</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Reverse linked list</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Valid Parentheses</h3>
		</div>
	</div>
</div>
