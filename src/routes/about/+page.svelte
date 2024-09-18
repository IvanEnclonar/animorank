<!-- src/routes/+page.svelte -->
<script>
    // You may need to import your auth store here if you implement it later
</script>
  
<svelte:head>
<title>Animorank - Advanced Coding Platform</title>
</svelte:head>
  
<style>
    :global(body) {
    background-color: #121212;
    color: #d6d6d6;
  }

  .bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
  
  <div class="min-h-screen bg-[#1e1e1e]">
    <header class="container mx-auto px-4 py-8">
      <nav class="flex justify-between items-center">
        <div class="text-2xl font-bold text-[#3ecf8e]">Animorank</div>
        <div class="space-x-4">
          <a 
            href="/signin" 
            class="bg-[#3ecf8e] hover:bg-[#35b87c] text-[#121212] px-4 py-2 rounded-md transition duration-300"
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  
    <main>
      <section class="container mx-auto px-4 py-20 text-center bg-[#1e1e1e]">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 text-[#3ecf8e]">
          Elevate Your Coding Experience
        </h1>
        <p class="text-xl md:text-2xl mb-8">
          Animorank: Where innovation meets education in the world of coding.
        </p>
        <div class="space-x-4">
          <a 
            href="/signin" 
            class="bg-[#3ecf8e] hover:bg-[#35b87c] text-[#121212] px-8 py-3 rounded-md text-lg font-semibold transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </section>
  
      <section class="py-20 bg-gradient-to-b from-[#1e1e1e] to-[#252525]" id="features">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#3ecf8e] to-[#45e0a0] text-transparent bg-clip-text">Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-[#121212] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#3ecf8e] to-[#45e0a0]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4 bg-gradient-to-r from-[#3ecf8e] to-[#45e0a0] text-transparent bg-clip-text">Interactive Code Editor</h3>
              <p>Experience coding like never before with our state-of-the-art editor.</p>
            </div>
            <div class="bg-[#121212] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#3ecf8e] to-[#45e0a0]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4 bg-gradient-to-r from-[#3ecf8e] to-[#45e0a0] text-transparent bg-clip-text">Real-time Collaboration</h3>
              <p>Code together, learn together. Seamless collaboration tools at your fingertips.</p>
            </div>
            <div class="bg-[#121212] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#3ecf8e] to-[#45e0a0]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4 bg-gradient-to-r from-[#3ecf8e] to-[#45e0a0] text-transparent bg-clip-text">AI-Powered Insights</h3>
              <p>Gain valuable insights and improve your coding skills with our AI assistant.</p>
            </div>
          </div>
        </div>
      </section>
  
  
    <footer class="bg-[#1e1e1e] py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Animorank.</p>
      </div>
    </footer>
  </div>