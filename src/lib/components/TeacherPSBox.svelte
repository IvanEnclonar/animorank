<script>
	import dropdown from '../assets/dropdown.svg';
	import edit from '../assets/edit.svg';
	import del from '../assets/delete.svg';
	import close from '../assets/close.svg';
	import done from '../assets/done.svg';
	import link from '../assets/link.svg';

	let togglebttn = false;
	let openEdit = false;
</script>

{#if openEdit}
	<div class="w-full mt-8 min-h-72 p-3 bg-[#1F1F1F] rounded cursor-pointer flex flex-wrap">
		<h2 class="text-2xl mb-4 w-full">CCPROG S13</h2>
		<div class="px-3 pb-10 w-full">
			<p class="mt-2">34 students</p>
			<p class="mt-2">10/12 active problems</p>
			<p class="mt-2">84% student completion</p>
		</div>
		<div class="flex justify-between w-full flex-wrap">
			<div class="mt-5 mb-5 w-ful md:w-[600px]">
				<div class="flex align-middle justify-between border-b border-borderColor p-3">
					<div class="text-xl">Problems</div>
					<div class="flex align-middle">
						<button class="btn btn-xs ml-2 mt-1 bg-[#006239] border-0 hover:bg-[#004327]">
							Add Problem
						</button>
						<button class="btn btn-ghost btn-xs"
							><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
						</button>
					</div>
				</div>
				<div>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">Two Sum</h3>
						<div class="flex">
							<div class=" grid place-items-center">
								<input
									type="checkbox"
									class="toggle toggle-md toggle-accent checked:bg-[#1f845a]"
									bind:checked={togglebttn}
								/>
							</div>
							<button class="btn btn-s ml-2 bg-[#121212] border-0 hover:bg-[#090909]">
								<img src={edit} alt="edit" class="h-4 cursor-pointer" />
							</button>
						</div>
					</div>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">Linear Search</h3>
						<div class="flex">
							<div class=" grid place-items-center">
								<input
									type="checkbox"
									class="toggle toggle-md toggle-accent checked:bg-[#1f845a]"
									bind:checked={togglebttn}
								/>
							</div>
							<button class="btn btn-s ml-2 bg-[#121212] border-0 hover:bg-[#090909]">
								<img src={edit} alt="edit" class="h-4 cursor-pointer" />
							</button>
						</div>
					</div>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">Valid Parentheses</h3>
						<div class="flex">
							<div class=" grid place-items-center">
								<input
									type="checkbox"
									class="toggle toggle-md toggle-accent checked:bg-[#1f845a]"
									bind:checked={togglebttn}
								/>
							</div>
							<button class="btn btn-s ml-2 bg-[#121212] border-0 hover:bg-[#090909]">
								<img src={edit} alt="edit" class="h-4 cursor-pointer" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5 mb-5 w-full md:w-[600px]">
				<div class="flex align-middle justify-between border-b border-borderColor p-3">
					<div class="text-xl">Students</div>
				</div>
				<div>
					<h3 class="p-3">Pending</h3>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">paulivanenclonar@gmail.com</h3>
						<button class="btn btn-s bg-[#006239] border-0 hover:bg-[#004327]">
							<img src={done} alt="edit" class="h-6 cursor-pointer" />
						</button>
					</div>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">paul_enclonar@dlsu.edu.ph</h3>
						<button class="btn btn-s bg-[#006239] border-0 hover:bg-[#004327]">
							<img src={done} alt="edit" class="h-6 cursor-pointer" />
						</button>
					</div>
					<h3 class="p-3">Current</h3>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">paulivanenclonar@gmail.com</h3>
						<button class="btn btn-error btn-s ml-2">
							<img src={del} alt="delete" class="h-4 cursor-pointer" />
						</button>
					</div>
					<div class="flex justify-between p-2 align-middle text-center">
						<h3 class="mt-auto mb-auto ml-4">paul_enclonar@dlsu.edu.ph</h3>
						<button class="btn btn-error btn-s ml-2">
							<img src={del} alt="delete" class="h-4 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-end w-full mt-8 sm:mt-20">
			<button
				class="btn btn-s mr-2 bg-[#121212] border-0 hover:bg-[#090909]"
				on:click={() => (openEdit = false)}
			>
				<img src={close} alt="edit" class="h-6 cursor-pointer" />
			</button>
			<button
				class="btn btn-s bg-[#006239] border-0 hover:bg-[#004327]"
				on:click={() => (openEdit = false)}
			>
				<img src={done} alt="edit" class="h-6 cursor-pointer" />
			</button>
		</div>
	</div>
{:else}
	<div
		class="mt-8 min-h-72 w-96 sm:mr-5 p-3 bg-[#1F1F1F] rounded cursor-pointer flex flex-col justify-between"
	>
		<h2 class="text-2xl mb-4">CCPROG S13</h2>
		<div class="px-4 pb-10">
			<p class="mt-2">34 students</p>
			<p class="mt-2">10/12 active problems</p>
			<p class="mt-2">84% student completion</p>
		</div>
		<div class="flex justify-end">
			<button class="btn btn-s mr-2 bg-[#121212] border-0 hover:bg-[#090909]">
				<img src={link} alt="edit" class="h-6 cursor-pointer" />
			</button>
			<button
				class="btn btn-s bg-[#121212] border-0 hover:bg-[#090909]"
				on:click={() => (openEdit = true)}
			>
				<img src={edit} alt="edit" class="h-6 cursor-pointer" />
			</button>
		</div>
	</div>
{/if}
