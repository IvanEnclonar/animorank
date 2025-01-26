<script>
	// @ts-nocheck
	import close from '../../../lib/assets/close.svg';
	import done from '../../../lib/assets/done.svg';
	import add from '../../../lib/assets/add-plus.svg';
	import deleteButton from '../../../lib/assets/delete.svg';
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import edit from 'svelte-awesome/icons/edit';
	import { goto } from '$app/navigation';

	let innerWidth = $state(0); //gets the width of the page
	let offset = $state(0); //offset state, determines how much more pixels should be taken by the right panel.
	let leftWidth = $derived(innerWidth / 2 + offset);
	let rightWidth = $derived(innerWidth - leftWidth);

	let title = $state('');
	let editorRef;
	let codeEditorRef = $state('');
	let codeEditorProblem = $state({
		id: "createProblem",
		starter_code: "int is_prime(int n) { \n // Write your code here \n}",
	});

	let testFunctionRef = $state('');
	let testFunctionProblem = $state({
		id: "createProblemTestFunction",
		starter_code: '#include <stdio.h>\nint is_prime(int n) { if (n <= 1) return 0; for (int i = 2; i * i <= n; i++) { if (n % i == 0) return 0; } return 1; }\nint main() { int test_cases[5] = {2, 4, 17, 18, 29}; int expected_results[5] = {1, 0, 1, 0, 1}; for (int i = 0; i < 5; i++) { if (is_prime(test_cases[i]) != expected_results[i]) { printf("Test case %d failed.\\n", test_cases[i]); return 1; } } printf("All test cases passed.\\n"); return 0; }',
	});

	let toggleConsole = $state(false);
	let consoleContent = $state([]);
	let unreadConsole = $state(false);
	let isPassed = $state(-1);
	let isTestCase = $state(true);
	let testCasesVals = $state([0]);
	let handleReset = $state(() => {});


	//start resize, called when the mouse is held down on the resize bar. assigns a listener on mousemove which modifies the offset state.
	const startResize = (e) => {
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

	const runCode = async () => {
		let toSubmit = testFunctionRef + '\n' + codeEditorRef;
		const res = await fetch('/api/compile', { method: 'POST', body: JSON.stringify(toSubmit) });
		const data = await res.json();

		let now = new Date();
		let timeString = now.toLocaleTimeString();
		let output = timeString + ' : ' + data.run.output;
		// @ts-ignore
		consoleContent = [...consoleContent, output];
		if(data.run.code == 0) {
			isPassed = 0;
		} else {
			isPassed = 1;
		}

		if (toggleConsole == false) {
			unreadConsole = true;
		}
	};

	const submit = async () => {
		const description = editorRef.getContent();

		const formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('test_function', testFunctionRef);
		formData.append('starterCode', codeEditorRef);

		const res = await fetch('?/createProblem', {
			method: 'POST',
			body: formData
		});

		if (res.ok) {
			goto('/');
		} else {
			alert('Problem creation failed');
		}
	};
</script>

<svelte:window onmouseup={abortResize} bind:innerWidth />

<!--Use grow class on your divs if you want no scroll bar, otherwise the content will just overflow all good-->
<div class="flex justify-start grow overflow-auto relative">
	<div class=" pl-5 pt-5 pr-3 pb-10 overflow-auto" style={`width : ${leftWidth}px`}>
		<div class="w-9/10 m-auto">
			<h2 class="text-2xl mb-3">Problem Title</h2>
			<input
				type="text"
				class="input input-bordered w-full bg-inherit"
				placeholder="Problem Title"
				bind:value={title}
			/>
		</div>

		<div class="w-9/10 m-auto mt-10">
			<h2 class="text-2xl mb-3">Edit Problem Description</h2>
			<div class="m-auto">
				<Editor bind:this={editorRef} />
			</div>
		</div>
		<div class="w-9/10 m-auto mt-10">
			<div class="dropdown dropdown-hover mb-3">
				<div tabindex="0" role="button" class="text-2xl underline">{isTestCase ? 'Test Cases' : 'Test Function'}</div>
				<ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				  <li><button type="button" onclick={() => { isTestCase = true; }} class={isTestCase ? 'btn btn-disabled' : 'btn'}>Test Cases</button></li>
				  <li><button type="button" onclick={() => { isTestCase = false; }} class={!isTestCase ? 'btn btn-disabled' : 'btn'}>Test Function</button></li>	
				</ul>
			</div>
			{#if isTestCase}
			<div class="flex flex-col gap-3">
			{#each testCasesVals as number, index}
				<div class="flex flex-row items-center gap-3">		
					<div class="join">
						<select class="select select-bordered w-24 join-item">
							<option disabled selected>Type</option>
							<option>int</option>
							<option>float</option>
							<option>char</option>
							<option>string</option>
							<option>bool</option>
						</select>
						<input type="text" placeholder="Input" class="input input-bordered max-w-1/4 join-item" />
						<select class="select select-bordered w-32 join-item">
							<option disabled selected>Operator</option>
							<option>==</option>
							<option>!=</option>
							<option>&gt;</option>
							<option>&lt;</option>
							<option>&gt;=</option>
							<option>&lt;=</option>
						</select>
							<select class="select select-bordered w-24 join-item">
								<option disabled selected>Type</option>
								<option>int</option>
								<option>float</option>
								<option>char</option>
								<option>string</option>
								<option>bool</option>
							</select>
						<input type="text" placeholder="Output" class="input input-bordered max-w-1/4 join-item" />
					</div>
					{#if index == testCasesVals.length - 1}
					<button class="btn btn-outline btn-circle btn-sm" onclick={() => {testCasesVals.push(testCasesVals[testCasesVals.length - 1] + 1);}}>
						<img src={add} alt="add" class="h-6" />
					</button>
					{:else}
					<button class="btn btn-outline btn-circle btn-sm" onclick={() => {testCasesVals.splice(index, 1);}}>
						<img src={deleteButton} alt="delete" class="h-5" />
					</button>
					{/if}
				</div>
			{/each}
			</div>
			{:else}
			<div class="h-96 w-full border flex flex-col">
				<CodeEditor bind:value={testFunctionRef} bind:problem={testFunctionProblem} bind:handleReset/>
			</div>
			{/if}
		</div>
	</div>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="w-2 cursor-col-resize flex justify-center items-center bg-black/30"
		id="divider"
		onmousedown={startResize}
	>
		<!-- <button class="w-full" title="reset sizing" onclick={resetResize}> | </button> -->
	</div>

	<div class="flex flex-col" style={`width : ${rightWidth}px`}>
		<span class="flex items-end justify-between gap-3 px-3 w-full pt-1 pb-2 grow">
			<div class="self-center justify-self-center">Starter Code</div>

			<div class="flex gap-3">
				{#if isPassed == 1} 
				<div class="grid place-items-center tooltip tooltip-bottom" data-tip="Test Cases Failed">
					<div class="border-2 rounded-full grid place-items-center p-1">
						<img src={close} alt="delete" class="h-4" />
					</div>
				</div>
				{:else if isPassed == 0}
				<div class="grid place-items-center tooltip tooltip-bottom" data-tip="Test Cases Passed">
					<div class="border-2 rounded-full grid place-items-center p-1">
						<img src={done} alt="delete" class="h-5" />
					</div>
				</div>
				{/if}
				<button class="btn btn-outline border border-gray-700" onclick={runCode}> Run </button>
				<button class="btn bg-[#006239] text-white hover:bg-[#004327]" onclick={submit}>
					Finish
				</button>
			</div>
		</span>

		<CodeEditor bind:value={codeEditorRef} bind:problem={codeEditorProblem} bind:handleReset/>

		{#if toggleConsole}
		<span class='w-full h-56 overflow-y-auto'>
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
