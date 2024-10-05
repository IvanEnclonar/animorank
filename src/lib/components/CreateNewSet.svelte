<script>
	import Modal from './Modal.svelte';
	import done from '$lib/assets/done.svg';

	export let closeModal;
	export let show = false;
	let AccessibleWithLink = false;
</script>

<Modal {show} {closeModal}>
	<input type="text" placeholder="Problem Set Name" class="input input-bordered w-full max-w-xs" />
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Accessible with link</span>
			<input type="checkbox" class="checkbox" bind:checked={AccessibleWithLink} />
		</label>
	</div>
	<div class="flex justify-end mt-5">
		<button class="btn btn-s bg-[#006239] border-0 hover:bg-[#004327]">
			<img src={done} alt="edit" class="h-6 cursor-pointer" />
		</button>
	</div>
</Modal>
