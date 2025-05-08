<script lang="ts">
	import close from '../../../lib/assets/close.svg';
	import done from '../../../lib/assets/done.svg';
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	import { marked } from 'marked';
	import {onMount, onDestroy} from 'svelte';
	import TestCaseDisplay from '$lib/components/TestCaseDisplay.svelte';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();


	let problem = $state(data.Problem?.[0] ?? {});
	let innerWidth: number = $state(0); //gets the width of the page
	let toggleConsole: boolean = $state(false); //toggles the console
	let offset = $state(0); //offset state, determines how much more pixels should be taken by the right panel.	
	let consoleContent = $state([]); //console content
	let unreadConsole = $state(false); //unread console content flag

	let leftWidth = $derived(innerWidth / 2 + offset);
	let rightWidth = $derived(innerWidth - leftWidth);
	let problemBody = $state(undefined);
	let value = $state("");
	let handleReset : () => void = $state(() => {});
	let readProblem = $state(true);

	let toggleTestResults = $state(false);
	let test_passed = $state([]);
	let test_failed = $state([]);
	let test_failed_count = $derived(test_failed.length);
	let test_passed_count = $derived(test_passed.length);
	let isPassed = $state(-1); //flag for the test case

	//this function sends a post request to the api.
	const handleSubmit = async () => {
		let toSubmit = problem.test_function + '\n' + value;
		const res = await fetch('/api/compile', { method: 'POST', body: JSON.stringify(toSubmit) });
		const data = await res.json();

		let now = new Date();
		let timeString = now.toLocaleTimeString();
		let output = timeString + ' : ' + data.run.output;
		// @ts-ignore
		consoleContent = [...consoleContent, output];
		test_failed = data.run.test_failed;
		test_passed = data.run.test_passed;

		if(data.run.test_failed.length == 0) {
			isPassed = 0;
		} else {
			isPassed = 1;
		}

		if (toggleConsole == false) {
			unreadConsole = true;
		}
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
		value = problem.starter_code
	})
	

	const runEveryFiveSeconds = async () =>{
		let oldHistory = [];
		if (data.Problem[0]?.Session.length > 0) {
			oldHistory = data.Problem[0].Session[0].history;
		}
		let history = localStorage.getItem(problem.id);
		let combinedHistory = oldHistory;
		if(history){
			history = JSON.parse(history);
			combinedHistory = [...oldHistory, ...(history || [])];
		}

		let body = {
			id: problem.id,
			history: combinedHistory,
			last_state: value,
			student_email: data.user.email
		}

		
		const res = await fetch('/api/updateHistory', { method: 'POST', body: JSON.stringify(body) });
		if(res.ok){
			console.log('History Updated');
		} else {
			console.log('History Update Failed'); 
		}
			
	}

  	let interval: string | number | NodeJS.Timeout | undefined;

	// Set up the interval when the component is mounted
	onMount(() => {
		localStorage.clear();
		interval = setInterval(runEveryFiveSeconds, 10000); // Run every 5 seconds
	});

	// Clean up the interval when the component is destroyed
	onDestroy(() => {
		clearInterval(interval);
	});

</script>

<svelte:window onmouseup={abortResize} bind:innerWidth />
{#if problemBody}
<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative ">

	<div class={readProblem ? "pl-5 pt-5 pr-3 pb-10 overflow-auto w-full" : "pl-5 pt-5 pr-3 pb-10 overflow-auto w-full hidden md:block"} style={leftWidth >=  384 ? `width : ${leftWidth}px` : ''}>
		<div
			class="prose prose-headings:text-white prose-p:text-white prose-a:text-blue-500 prose-code:text-white prose-code:bg-gray-700 prose-code:rounded prose-code:px-1 prose-code:font-normal"
		>
			{@html marked(problemBody)}			
		</div>
	</div>


	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="w-2 cursor-col-resize justify-center items-center bg-black/30 hidden md:flex"
		id="divider"
		onmousedown={startResize}
	>
		<button class="w-full" title="reset sizing" onclick={resetResize}> | </button>
	</div>

	<div class={readProblem ? 'hidden md:flex flex-col' : 'flex flex-col w-full'} style={rightWidth >= 384 ? `width : ${rightWidth}px` : ''}>
		<span class="flex items-end justify-between gap-3 px-3 max-h-fit w-full pt-1 pb-2 grow">
			<div></div>

			<div class="flex gap-2">
				{#if isPassed == 1} 
				<div class="grid place-items-center tooltip tooltip-bottom cursor-pointer" data-tip="Test Cases Failed">
					<button class="w-9 h-9 border-2 rounded-full grid place-items-center p-1 border-red-500 text-red-500" onclick={() => toggleTestResults = !toggleTestResults}>
						{test_failed_count}
					</button>
				</div>
				{:else if isPassed == 0}
				<div class="grid place-items-center tooltip tooltip-bottom cursor-pointer" data-tip="Test Cases Passed">
					<button class="w-9 h-9 border-2 rounded-full grid place-items-center p-1 border-green-500 text-green-500" onclick={() => toggleTestResults = !toggleTestResults}>
						{test_passed_count}
					</button>
				</div>
				{/if}
				<button class="btn" onclick={handleReset}> Reset Code </button>
				<button class="btn bg-[#006239] text-white hover:bg-[#004327]" onclick={handleSubmit}> Run </button>
			</div>
		</span>

		<CodeEditor bind:value bind:problem bind:handleReset/>

		{#if toggleTestResults}
			<TestCaseDisplay bind:toggleTestResults test_passed={test_passed} test_failed={test_failed} />
		{/if}
		

		{#if toggleConsole}
		<span class='w-full h-56 overflow-y-auto flex flex-col'>
			<div class="h-4 bg-black/30 flex flex-row items-center justify-center p-2" ><button class="text-xs cursor-pointer" onclick={() => { toggleConsole=!toggleConsole}}>Close Console</button></div>
			{#each consoleContent as line}
				<div class="px-2 pt-1">
					<p class="text-xs">{line}</p>
				</div>
			{/each}
		</span>
		{:else}
		<span class='w-full'>
			<div class=" bg-black/30 flex flex-row items-center justify-center " > 
				<button class="text-xs cursor-pointer relative" onclick={() => { toggleConsole=!toggleConsole; unreadConsole=false}}>
					Open Console {unreadConsole ? '🚨' : ''}
				</button>
			</div>
		</span>
		{/if}
	</div>
</div>
<div class="grid md:hidden place-items-center h-10">
	<div class="flex flex-row gap-2 pb-3 pt-3">
		<p class={ readProblem ? "text-sm text-gray-500" : "text-sm text-white"}>Show code</p>
		<input type="checkbox" class="toggle toggle-md" bind:checked={readProblem} />
		<p class={ readProblem ? "text-sm text-white" : "text-sm text-gray-500"}>Show problem</p>
	</div>
</div>	
{/if}
