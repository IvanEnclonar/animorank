<script>
	// @ts-nocheck

	let { data } = $props();

	console.log(data);
</script>

{#if data}
	<div class="w-screen bg-[#121212]">
		<div class="mx-auto border mt-8 rounded border-borderColor w-8/12">
			<div class="flex flex-col justify-between border-b border-borderColor p-5">
				<div class="text-2xl">{data?.pset[0].title}</div>
				<p class="indent-10 mt-5">{data?.pset[0].description}</p>
				<div class="flex flex-row justify-end gap-3 mt-6">
					<button class="btn bg-[#006239] text-white hover:bg-[#004327]"> Subscribe</button>
				</div>
			</div>

			<div>
				{#each data?.problems as problem}
					<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">{problem.problem_name}</h3>
				{/each}
			</div>
		</div>
	</div>
{/if}
