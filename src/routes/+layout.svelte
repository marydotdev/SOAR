<script>
	import '../app.css';
	import Soar from '$lib/Soar.svelte';
</script>

<svelte:head>
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Socialist Orcas Against Ramming - SOAR" />
<meta name="twitter:description" content="SOAR H.I.T. List" />
<meta name="twitter:image" content="/SOARcard.png" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Socialist Orcas Against Ramming - SOAR" />
<meta property="og:description" content="SOAR H.I.T. List" />
<meta property="og:url" content="https://soar.vercel.app" />
<meta property="og:image" content="/SOARcard.png" />
</svelte:head>
<div class="w-full">
  <div class="border-b-2 border-black px-4 py-2 sm:py-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
      <Soar />
      <div class="max-w-2xl">
        <nav class="text-xl font-semibold">
          <div class="hidden sm:flex gap-8">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/news">News</a>
          </div>
          <div class="block sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-grid">
    <slot />
  </div>
  <footer class="border-t-2 border-black px-4 py-2 sm:py-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="max-w-2xl">
          <div class="text-xl font-semibold">
            <div class="flex gap-8">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/news">News</a>
            </div>
          </div>
        </div>
        <Soar />
      </div>
      <div class="py-2 text-center">
        <p>SOAR &copy; {new Date().getFullYear()}</p>
      </div>
  </footer>
</div>
