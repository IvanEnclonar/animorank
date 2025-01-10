<script lang="ts">
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	import { marked } from 'marked';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();

	let problem = $state(data.Problem?.[0] ?? {});
	let innerWidth: number = $state(0); //gets the width of the page
	let toggleConsole: boolean = $state(false); //toggles the console
	let offset = $state(0); //offset state, determines how much more pixels should be taken by the right panel.	
	let consoleContent = $state([]); //console content

	let leftWidth = $derived(innerWidth / 2 + offset);
	let rightWidth = $derived(innerWidth - leftWidth);
	let problemBody = $state(undefined);
	let value = $state(undefined);
	let handleReset : () => void = $state(() => {});

	//this function sends a post request to the api.
	const handleSubmit = async () => {
		const res = await fetch('/api/compile', { method: 'POST', body: JSON.stringify(value) });
		const data = await res.json();

		let now = new Date();
		let timeString = now.toLocaleTimeString();
		let output = timeString + ' : ' + data.run.output;
		// @ts-ignore
		consoleContent = [...consoleContent, output];
	};

	//start resize, called when the mouse is held down on the resize bar. assigns a listener on mousemove which modifies the offset state.
	const startResize = (e: MouseEvent) => {
		let initial = e.clientX;
		document.onmousemove = (e) => {
			offset -= leftWidth - e.clientX;
		};
	};

	//stops resize, called on mouseUp, removes the listener for mousemove.
	const abortResize = () => {
		document.onmousemove = null;
	};

	//resets resize. this function is called when the middle button of the resize bar is clicked. setting offset back to 0.
	const resetResize = () => {
		offset = 0;
	};


	$effect( () => {
		problemBody = problem.body;
		value = problem.starter_code;
	})

</script>

<svelte:window onmouseup={abortResize} bind:innerWidth />

<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative">
	{#if problemBody && value}
	<div class=" pl-5 pt-5 pr-3 pb-10 overflow-auto" style={`width : ${leftWidth}px`}>
		<div
			class="prose prose-headings:text-white prose-p:text-white prose-a:text-blue-500 prose-code:text-white prose-code:bg-gray-700 prose-code:rounded prose-code:px-1 prose-code:font-normal"
		>
			{@html marked(problemBody)}
		</div>
	</div>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="w-2 cursor-col-resize flex justify-center items-center bg-black/30"
		id="divider"
		onmousedown={startResize}
	>
		<button class="w-full" title="reset sizing" onclick={resetResize}> | </button>
	</div>

	<div class="flex flex-col" style={`width : ${rightWidth}px`}>
		<span class="flex items-end justify-between gap-3 px-3 w-full pt-1 pb-2 grow">
			<div class="self-center justify-self-center">code.c</div>

			<div class="flex gap-3">
				<button class="btn" onclick={handleReset}> Reset Code </button>
				<button class="btn" onclick={handleSubmit}> Run </button>
				<button class="btn bg-primary text-white"> Submit </button>
			</div>
		</span>

		<CodeEditor bind:value bind:problem bind:handleReset/>
		
		<span class={ toggleConsole ? 'w-full h-56 overflow-y-auto' : 'w-full overflow-y-auto' }>
			<div class="h-4 bg-black/30 flex flex-row items-center justify-center p-2" ><button class="text-xs cursor-pointer" onclick={() => { toggleConsole=!toggleConsole}}>{toggleConsole ? 'Close Console' : 'Open Console'}</button></div>
			{#if toggleConsole}
				{#each consoleContent as line}
				<div class="h-4 px-2 pt-3 pb-3">
					<p class="text-xs">{line}</p>
				</div>
				{/each}
			{/if}
		</span>
	</div>
	{/if}
</div>
