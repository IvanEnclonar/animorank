<script>
	let sets = [
		{
			name: 'S13 CCPROG 1',
			expanded: true,
			items: [
				'Two sum',
				'Reverse Linked List',
				'Valid Parentheses',
				'Merge Two Sorted Lists',
				'Merge Two Sorted Lists'
			]
		},
		{
			name: 'S13 CCPROG 2',
			expanded: false,
			items: []
		}
	];

	function toggleSet(index) {
		sets[index].expanded = !sets[index].expanded;
		sets = sets;
	}
</script>

<div class="bg-[#121212] text-white min-h-screen">
	<div class="container mx-auto px-4 py-8">
		<header class="flex justify-between items-center mb-6">
			<h1 class="text-2xl font-bold">Dashboard</h1>
			<button class="bg-green-600 text-white px-4 py-2 rounded">create new set</button>
		</header>

		<div>
			{#each sets as set, index}
				<div class="mb-4">
					<button
						on:click={() => toggleSet(index)}
						class="w-full text-left py-2 px-4 bg-gray-800 hover:bg-gray-700 flex justify-between items-center"
					>
						<span>{set.name}</span>
						<span>{set.expanded ? '▲' : '▼'}</span>
					</button>
					{#if set.expanded}
						<ul class="bg-gray-800">
							{#each set.items as item}
								<li class="py-2 px-8 hover:bg-gray-700">{item}</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
