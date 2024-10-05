<script lang="ts">
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';
	let innerWidth: number = 0; //gets the width of the page

	let offset = 0; //offset state, determines how much more pixels should be taken by the right panel.

	$: leftWidth = innerWidth / 2 + offset;
	$: rightWidth = innerWidth - leftWidth;

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

<svelte:window on:mouseup={abortResize} bind:innerWidth />

<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative">
	<div class="w-8.5/10">
		<MarkdownEditor />
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="w-2 cursor-col-resize flex justify-center items-center bg-black/30"
		id="divider"
		on:mousedown={startResize}
	>
		<button class="w-full" title="reset sizing" on:click={resetResize}> | </button>
	</div>

	<div class="flex flex-col" style={`width : ${rightWidth}px`}>
		<span class="flex items-end justify-between gap-3 px-3 w-full pt-1 pb-2 grow">
			<div class="self-center justify-self-center">code.c</div>

			<div class="flex gap-3">
				<button class="btn bg-primary text-white"> Submit </button>
			</div>
		</span>
	</div>
</div>
