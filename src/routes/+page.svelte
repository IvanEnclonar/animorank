<script>
	import dropdown from '$lib/assets/dropdown.svg';
	import edit from '$lib/assets/edit.svg';
	import done from '$lib/assets/done.svg';
	import close from '$lib/assets/close.svg';
	import add from '$lib/assets/add-plus.svg';
	import del from '$lib/assets/delete.svg';
	import StudentPSBox from '$lib/components/StudentPSBox.svelte';
	import TeacherPSBox from '$lib/components/TeacherPSBox.svelte';
	import CreateNewSet from '$lib/components/CreateNewSet.svelte';

	let showCreatePSetModal = false;
</script>

<div class="w-screen bg-[#121212]">
	<div class="mt-12 px-3 flex justify-between">
		<h2 class="font-arial text-2xl">Dashboard</h2>
		<button
			class="btn btn-s bg-[#006239] text-white hover:bg-[#004327] mt-1"
			on:click={() => (showCreatePSetModal = true)}>Create new set</button
		>
	</div>
	<div class="flex flex-row flex-wrap justify-start w-8.5/10 mx-auto">
		<TeacherPSBox />
		<TeacherPSBox />
		<TeacherPSBox />
	</div>
	<CreateNewSet closeModal={() => (showCreatePSetModal = false)} show={showCreatePSetModal} />
</div>
