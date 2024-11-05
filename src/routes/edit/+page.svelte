<script lang="ts">
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	let innerWidth: number = $state(0); //gets the width of the page

	let offset = $state(0); //offset state, determines how much more pixels should be taken by the right panel.
	let problem = $state('problem');
	let value = $state('Test this code');

	let leftWidth = $derived(innerWidth / 2 + offset);
	let rightWidth = $derived(innerWidth - leftWidth);

	let setValue: () => void = $state();
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
</script>

<svelte:window onmouseup={abortResize} bind:innerWidth />

<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative">
	<div class="w-1/2">
		<div class="flex justify-between w-9/10 mx-auto mt-4">
			<input type="text" placeholder="Problem title here" class="input w-full bg-[#121212]" />
		</div>
		<div class="w-9/10 mx-auto mt-4">
			<Editor />
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
			<div class="self-center justify-self-center">Starter code</div>
		</span>
		<CodeEditor bind:value bind:setValue bind:problem />
		<div class="w-full h-2/5 flex flex-col align-middle items-center">
			<textarea
				class="textarea bg-[#121212] textarea-bordered w-9/10 mt-10"
				placeholder="Return statement"
			></textarea>
			<div class="w-9/10 flex justify-end mt-4">
				<button class="btn bg-[#006239] text-white hover:bg-[#004327]">Finish</button>
			</div>
		</div>
	</div>
</div>
