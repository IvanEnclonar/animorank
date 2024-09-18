<script lang="ts">
    import loader from '@monaco-editor/loader';
    import { onDestroy, onMount } from 'svelte';
    import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
    import { restoreHistory, updateHistory } from '$lib/history'

    export let value : string = "#include<stdio.h>\n\nint main(){ \n\n  return 0;\n}"
    export const setValue = () => {value = editor.getValue()} //this function allows us to update the value prop with a function
    export let problem : string
    
    let editor: Monaco.editor.IStandaloneCodeEditor;
    let monaco: typeof Monaco;
    let editorContainer: HTMLElement;

    let mounted = false
    let totalSize = 0.0


    onMount(async () => {

        //restore user history
        value = restoreHistory(problem, value)

        // Remove the next two lines to load the monaco editor from a CDN
        // see https://www.npmjs.com/package/@monaco-editor/loader#config
        const monacoEditor = await import('monaco-editor');
        loader.config({ monaco: monacoEditor.default });

        monaco = await loader.init();

        // Define a custom theme based on vs-dark with a lighter background
        monaco.editor.defineTheme('custom-vs-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#1f1f1f', // Lighter background color
            }
        });

        // Your monaco instance is ready, let's display some code!
        editor = monaco.editor.create(editorContainer, {
            value: value,
            language: "c", 
            automaticLayout: true,
            theme: "custom-vs-dark", // Use the custom theme
        });

        editor.onDidChangeModelContent(e => {
            //console.log(e.changes[0])

            //make your object that optimized

            /**
             * change[0] = number of characters that will be replaced
             * change[1] = string/character that will be inserted at index
             * change[2] = index of change
             * change[3] = timestamp
             */
            const change = [
                e.changes[0].rangeLength,
                e.changes[0].text,
                e.changes[0].rangeOffset,
                Date.now()
            ]
            console.log(JSON.stringify(change))
            /*
            const size = new TextEncoder().encode(JSON.stringify(change)).length
            const kiloBytes = size / 1024;
            totalSize += kiloBytes
            console.log("total size of history (MB): " + (totalSize / 1000))
            */
            updateHistory(problem, JSON.stringify(change))

        })
       
        mounted = true
    });

</script>


<div class="grow shadow-inner border-t-2 overflow-hidden">
    <div class="w-full h-full" bind:this={editorContainer} />
</div>  