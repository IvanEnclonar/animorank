<script>
	import dropdown from '$lib/assets/dropdown.svg';
	import edit from '$lib/assets/edit.svg';
	import done from '$lib/assets/done.svg';
	import close from '$lib/assets/close.svg';
	import add from '$lib/assets/add-plus.svg';
	import del from '$lib/assets/delete.svg';

	let toggle = false;
</script>

<!-- <div class="w-screen bg-[#121212]">
	<div class="mt-12 px-3 flex justify-between">
		<h2 class="font-arial text-2xl">Dashboard</h2>
		<button class="btn btn-xs bg-[#006239] text-white hover:bg-[#004327] mt-1"
			>Create new set</button
		>
	</div>

	<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
		<div class="flex justify-between border-b border-borderColor p-2">
			<div class="">CCPROG3 S12</div>
			<button class="btn btn-ghost btn-xs"
				><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
			</button>
		</div>
	</div>

	<div class="w-9/10 mx-auto border mt-5 rounded border-borderColor">
		<div class="flex justify-between border-b border-borderColor p-2">
			<div class="">CCPROG3 S13</div>
			<button class="btn btn-ghost btn-xs"
				><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
			</button>
		</div>
		<div>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Two Sum</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Reverse linked list</h3>
			<h3 class="px-6 pt-2 pb-2 cursor-pointer hover:bg-[#252525]">Valid Parentheses</h3>
		</div>
	</div>
</div> -->

<!-- teacher dashboard -->
<div class="w-screen bg-[#121212] flex flex-col">
	<div class="mt-12 px-3 flex justify-between">
		<h2 class="font-arial text-2xl">Dashboard</h2>
		<button class="btn btn-xs bg-[#006239] text-white hover:bg-[#004327] mt-1"
			>Create new set</button
		>
	</div>
	<!-- content -->
	<div class="flex flex-row flex-wrap justify-start w-8.5/10 mx-auto">
		<div
			class="w-full mt-8 min-h-72 p-3 bg-[#1F1F1F] rounded cursor-pointer flex flex-col justify-between"
		>
			<h2 class="text-2xl mb-4">CCPROG S13</h2>
			<div class="px-3 pb-10">
				<p class="mt-2">34 students</p>
				<p class="mt-2">10/12 active problems</p>
				<p class="mt-2">84% student completion</p>
			</div>
			<div class="mt-5 mb-5">
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
									bind:checked={toggle}
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
									bind:checked={toggle}
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
									bind:checked={toggle}
								/>
							</div>
							<button class="btn btn-s ml-2 bg-[#121212] border-0 hover:bg-[#090909]">
								<img src={edit} alt="edit" class="h-4 cursor-pointer" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-row justify-start flex-wrap w-full pl-[7.5%] pr-[7.5%]">
				<div class="mt-5 mb-5">
					<div class="flex align-middle justify-between border-b border-borderColor p-3">
						<div class="text-xl">Students</div>
						<div class="flex align-middle">
							<button class="btn btn-xs ml-2 mt-1 bg-[#006239] border-0 hover:bg-[#004327]">
								Add Student
							</button>
							<button class="btn btn-ghost btn-xs"
								><img src={dropdown} alt="dropdown" class="h-7 cursor-pointer" />
							</button>
						</div>
					</div>
					<div>
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

				<div class="flex justify-end mt-5">
					<button class="btn btn-s mr-2 bg-[#121212] border-0 hover:bg-[#090909]">
						<img src={close} alt="edit" class="h-6 cursor-pointer" />
					</button>
					<button class="btn btn-s bg-[#006239] border-0 hover:bg-[#004327]">
						<img src={done} alt="edit" class="h-6 cursor-pointer" />
					</button>
				</div>
			</div>
		</div>
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
				<button class="btn btn-s bg-[#121212] border-0 hover:bg-[#090909]">
					<img src={edit} alt="edit" class="h-6 cursor-pointer" />
				</button>
			</div>
		</div>
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
				<button class="btn btn-s bg-[#121212] border-0 hover:bg-[#090909]">
					<img src={edit} alt="edit" class="h-6 cursor-pointer" />
				</button>
			</div>
		</div>
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
				<button class="btn btn-s bg-[#121212] border-0 hover:bg-[#090909]">
					<img src={edit} alt="edit" class="h-6 cursor-pointer" />
				</button>
			</div>
		</div>
	</div>
</div>
