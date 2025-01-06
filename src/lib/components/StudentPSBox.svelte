<script>
	import dropdown from '$lib/assets/dropdown.svg';
	let {title, Problems} = $props();

	let toggle = $state(false);
</script>

<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
	<div class="flex justify-between border-b border-borderColor p-2">
		<div class="">{title}</div>
		<button class="btn btn-ghost btn-xs" onclick={() => (toggle = !toggle)}
			><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
		</button>
	</div>

	{#if toggle}
		<div class="flex flex-col">
		{#each Problems as Problem}
		<a href="/problem/{Problem.id}" class="px-6 pt-2 pb-2 w-full cursor-pointer hover:bg-[#252525]">{Problem.problem_name}</a>
		{/each}	
		</div>
	{/if}
</div>
