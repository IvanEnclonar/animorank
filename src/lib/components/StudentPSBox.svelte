<script>
	import dropdown from '$lib/assets/dropdown.svg';

	let toggle = $state(false);
</script>

<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
	<div class="flex justify-between border-b border-borderColor p-2">
		<div class="">CCPROG3 S13</div>
		<button class="btn btn-ghost btn-xs" onclick={() => (toggle = !toggle)}
			><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
		</button>
	</div>

	{#if toggle}
		<div>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Two Sum</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Reverse linked list</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Valid Parentheses</h3>
		</div>
	{/if}
</div>
