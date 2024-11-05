<script type="module">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import { defaultExtensions } from '@tiptap/starter-kit';
	import BubbleMenu from '@tiptap/extension-bubble-menu';

	let bubbleMenu = $state();
	let element = $state();
	let editor = $state();

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				...defaultExtensions(),
				BubbleMenu.configure({
					element: bubbleMenu
				})
			],
			content: `
                  <h1>Hello Svelte! 🌍️ </h1>
                  <p>This editor is running in Svelte.</p>
                  <p>Select some text to see the bubble menu popping up.</p>
              `,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		editor.destroy();
	});
</script>

<div style="position: relative" class="app">
	{#if editor}
		<div class="fixed-menu">
			<button
				onclick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				class:active={editor.isActive('heading', { level: 1 })}
			>
				H1
			</button>
			<button
				onclick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editor.isActive('heading', { level: 2 })}
			>
				H2
			</button>
			<button
				onclick={() => editor.chain().focus().setParagraph().run()}
				class:active={editor.isActive('paragraph')}
			>
				P
			</button>
		</div>
	{/if}

	<div class="bubble-menu" bind:this={bubbleMenu}>
		{#if editor}
			<button
				onclick={() => editor.chain().focus().toggleBold().run()}
				class:active={editor.isActive('bold')}
			>
				Bold
			</button>
			<button
				onclick={() => editor.chain().focus().toggleItalic().run()}
				class:active={editor.isActive('italic')}
			>
				Italic
			</button>
			<button
				onclick={() => editor.chain().focus().toggleStrike().run()}
				class:active={editor.isActive('strike')}
			>
				Strike
			</button>
		{/if}
	</div>

	<div bind:this={element}></div>
</div>

<style lang="scss">
	.app {
		margin: 2rem;
	}

	button.active {
		background: black;
		color: white;
	}

	.bubble-menu {
		display: flex;
		background-color: #0d0d0d;
		padding: 0.2rem;
		border-radius: 0.5rem;
		transition:
			visibility 0.1s ease,
			opacity 0.1s ease;
	}

	.bubble-menu button {
		border: none;
		background: none;
		color: #fff;
		font-weight: 500;
		padding: 0 0.2rem;
		opacity: 0.6;
		margin: 0;
	}

	.bubble-menu button:hover,
	.bubble-menu button.is-active {
		opacity: 1;
	}
</style>
