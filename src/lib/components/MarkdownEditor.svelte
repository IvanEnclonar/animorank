<script>
	import { onMount } from 'svelte';

	/** @type {any}*/
	let editor = $state();

	let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image', 'video'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }]
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		let quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write the description of the problem here...'
		});
	});
</script>

<div class="w-full">
	<div bind:this={editor}></div>
</div>

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
