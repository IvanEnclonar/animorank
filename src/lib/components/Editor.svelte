<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import paragraph from 'svelte-awesome/icons/paragraph';

	let element = $state();
	let editor = $state();

	let active = $state({
		bold: false,
		italic: false,
		strike: false,
		code: false,
		paragraph: false,
		h1: false,
		h2: false,
		h3: false,
		bulletList: false,
		orderedList: false,
		codeBlock: false,
		blockquote: false
	});

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️ </p>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});

	const updateButtonStatus = () => {
		active.bold = editor.isActive('bold');
		active.italic = editor.isActive('italic');
		active.strike = editor.isActive('strike');
		active.code = editor.isActive('code');
		active.paragraph = editor.isActive('paragraph');
		active.h1 = editor.isActive('heading', { level: 1 });
		active.h2 = editor.isActive('heading', { level: 2 });
		active.h3 = editor.isActive('heading', { level: 3 });
		active.bulletList = editor.isActive('bulletList');
		active.orderedList = editor.isActive('orderedList');
		active.codeBlock = editor.isActive('codeBlock');
		active.blockquote = editor.isActive('blockquote');
	};
</script>

{#if editor}
	<div class="mb-3">
		<button
			onclick={() => {
				editor.chain().focus().toggleBold().run();
				updateButtonStatus();
			}}
			disabled={!editor.can().chain().focus().toggleBold().run()}
			class={active.bold ? 'editor-button-active' : 'editor-button'}
		>
			Bold
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleItalic().run();
				updateButtonStatus();
			}}
			disabled={!editor.can().chain().focus().toggleItalic().run()}
			class={active.italic ? 'editor-button-active' : 'editor-button'}
		>
			Italic
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleStrike().run();
				updateButtonStatus();
			}}
			disabled={!editor.can().chain().focus().toggleStrike().run()}
			class={active.strike ? 'editor-button-active' : 'editor-button'}
		>
			Strike
		</button>
		<button
			onclick={() => {
				editor.chain().focus().setParagraph().run();
				updateButtonStatus();
			}}
			class={active.paragraph ? 'editor-button-active' : 'editor-button'}
		>
			Paragraph
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleHeading({ level: 1 }).run();
				updateButtonStatus();
			}}
			class={active.h1 ? 'editor-button-active' : 'editor-button'}
		>
			H1
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleHeading({ level: 2 }).run();
				updateButtonStatus();
			}}
			class={active.h2 ? 'editor-button-active' : 'editor-button'}
		>
			H2
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleHeading({ level: 3 }).run();
				updateButtonStatus();
			}}
			class={active.h3 ? 'editor-button-active' : 'editor-button'}
		>
			H3
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleBulletList().run();
				updateButtonStatus();
			}}
			class={active.bulletList ? 'editor-button-active' : 'editor-button'}
		>
			Bullet list
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleOrderedList().run();
				updateButtonStatus();
			}}
			class={active.orderedList ? 'editor-button-active' : 'editor-button'}
		>
			Ordered list
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleCodeBlock().run();
				updateButtonStatus();
			}}
			class={active.codeBlock ? 'editor-button-active' : 'editor-button'}
		>
			Code block
		</button>
		<button
			onclick={() => {
				editor.chain().focus().toggleBlockquote().run();
				updateButtonStatus();
			}}
			class={active.blockquote ? 'editor-button-active' : 'editor-button'}
		>
			Blockquote
		</button>
		<button onclick={() => editor.chain().focus().setHorizontalRule().run()} class="editor-button">
			Horizontal rule
		</button>
		<button onclick={() => editor.chain().focus().setHardBreak().run()} class="editor-button"
			>Hard break</button
		>
	</div>
{/if}

<div bind:this={element}></div>

<style>
</style>
