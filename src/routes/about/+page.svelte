<!-- src/routes/+page.svelte -->
<script>
    // You may need to import your auth store here if you implement it later
</script>
  
<svelte:head>
    <title>About Animorank - AI-Powered Coding Education Platform</title>
</svelte:head>
  
<style>
    :global(body) {
        background-color: #121212;
        color: white;
    }

    .stat-card {
        transition: transform 0.2s ease-in-out;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }
</style>
  
<div class="min-h-screen bg-[#121212]">
    <main>
        <section class="container mx-auto px-4 py-16 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-[#006239]">
                About Animorank
            </h1>
            <p class="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                Animorank is an innovative coding platform developed specifically for university students 
                to enhance their programming skills through practical problem-solving and AI-assisted learning.
            </p>
            
            <!-- Stats Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <div class="stat-card bg-[#1e1e1e] p-6 rounded-lg border">
                    <h3 class="text-3xl font-bold text-[#006239]">1000+</h3>
                    <p class="text-gray-300">Active Students</p>
                </div>
                <div class="stat-card bg-[#1e1e1e] p-6 rounded-lg border">
                    <h3 class="text-3xl font-bold text-[#006239]">500+</h3>
                    <p class="text-gray-300">Coding Problems</p>
                </div>
                <div class="stat-card bg-[#1e1e1e] p-6 rounded-lg border">
                    <h3 class="text-3xl font-bold text-[#006239]">50+</h3>
                    <p class="text-gray-300">University Courses</p>
                </div>
                <div class="stat-card bg-[#1e1e1e] p-6 rounded-lg border">
                    <h3 class="text-3xl font-bold text-[#006239]">24/7</h3>
                    <p class="text-gray-300">AI Support</p>
                </div>
            </div>
        </section>
  
       

        <section class="bg-[#1e1e1e] py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 text-center text-[#006239]">Getting Started</h2>
                <div class="max-w-3xl mx-auto space-y-6">
                    <div class="bg-[#121212] p-6 rounded-lg border-l-4 border-[#006239]">
                        <h3 class="text-xl font-semibold mb-2 text-[#006239]">1. Sign Up</h3>
                        <p>Create an account using your university email to get started.</p>
                    </div>
                    <div class="bg-[#121212] p-6 rounded-lg border-l-4 border-[#006239]">
                        <h3 class="text-xl font-semibold mb-2 text-[#006239]">2. Choose Problems</h3>
                        <p>Select from various programming challenges or access your course-specific problems.</p>
                    </div>
                    <div class="bg-[#121212] p-6 rounded-lg border-l-4 border-[#006239]">
                        <h3 class="text-xl font-semibold mb-2 text-[#006239]">3. Code & Learn</h3>
                        <p>Write your solutions in our interactive code editor with real-time AI assistance.</p>
                    </div>
                    <div class="bg-[#121212] p-6 rounded-lg border-l-4 border-[#006239]">
                        <h3 class="text-xl font-semibold mb-2 text-[#006239]">4. Get Feedback</h3>
                        <p>Receive immediate feedback and suggestions to improve your code.</p>
                    </div>
                </div>
            </div>
        </section>  
    </main>
  
    <footer class="py-8 bg-[#121212]">
        <div class="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 Animorank. All rights reserved.</p>
        </div>
    </footer>
</div>