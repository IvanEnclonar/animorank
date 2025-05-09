<script>
    import { openLogin } from '$lib/state/login.svelte';

</script>
  
<svelte:head>
    <title>Animorank</title>
</svelte:head>


<div class="w-full flex flex-col items-center justify-center min-h-[120%] overflow-auto bg-[#121212]">
    <div class="flex flex-col items-center justify-center w-full h-full p-4">
        <div class="bg-[#121D18] rounded-2xl p-2 px-4 flex w-fit text-forestGreen text-xs">DLSU's Official Coding Platform</div>
        <div class="font-sans text-7xl font-bold mt-4 flex flex-col justify-center items-center lg:flex-row"><p class="text-center">Practice with&nbsp;</p><h1 class="text-accentColor">Animorank</h1></div>
        <div class="mt-4 text-gray-400 text-xl block md:hidden text-center">Practice, and improve your programming skills with challenges</div>
        <div class="mt-4 text-gray-400 text-xl hidden md:block ">Practice, and improve your programming skills with challenges</div>
        <div class="text-gray-400 text-xl hidden md:block"> designed for DLSU students</div>
        <button class="btn btn-outline mt-5" onclick={() => {openLogin.open = true}}>Get started</button>
    </div>
    <!-- <div class="w-full p-2 bg-[#040605]">
        <div class="w-full bg-[#000000] py-2 px-4 overflow-hidden">
            <div class="text-md font-mono text-gray-400 whitespace-nowrap">
              <span class="text-purple-400">const</span> <span class="text-blue-400">solution</span> = <span class="text-blue-400">analyze</span>(<span class="text-orange-400">input</span>);<span class="text-blue-400">return</span> solution.<span class="text-blue-400">optimize</span>();<span class="text-gray-500">// DLSU Animorank Platform</span><span class="text-purple-400">const</span> <span class="text-blue-400">rank</span> = <span class="text-purple-400">await</span> <span class="text-blue-400">submitSolution</span>(solveProblem); console.<span class="text-blue-400">log</span>(rank);
            </div>
        </div>
    </div> -->
    <footer class="bg-black py-8 px-8 w-full">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <span class="font-semibold">Animorank</span>
            </div>
            <p class="text-gray-400 text-sm">
              DLSU's official practice coding platform for students who want to enhance their
              programming skills.
            </p>
          </div>
          
          <div class="flex flex-col md:items-end">
            <ul class="text-gray-400 text-sm">
                <li class="font-semibold mb-2 text-white">Connect</li>
              <li class="mb-1 hover:text-white cursor-pointer">Contact Us</li>
              <li class="mb-1 hover:text-white cursor-pointer">DLSU Website</li>
              <li class="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>
        </div>
        
        <div class="text-center text-gray-500 text-xs mt-10">
          © 2025 AnimoRank. All rights reserved. De La Salle University.
        </div>
      </footer>
</div>