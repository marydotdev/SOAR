<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, linear, quintOut } from 'svelte/easing';

	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="z-30 sm:hidden">
	<button
		aria-label="Toggle menu"
		type="button"
    class="px-2"
		on:click={() => (isOpen = !isOpen)}
	>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>

	</button>

	{#if isOpen}
		<div
			class="z-50 flex flex-col fixed inset-0 overflow-hidden p-4 w-full h-screen bg-white"
			in:fly={{ delay: 0, duration: 500, x: 0, y: 500, opacity: 1, easing: quintOut }}
			out:fly={{ delay: 0, duration: 400, x: 0, y: 600, opacity: 1, easing: cubicIn }}
		>
      <button
        aria-label="Toggle menu"
        type="button"
        class="ml-auto p-2"
        on:click={() => (isOpen = !isOpen)}
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
			<div
				class="flex flex-col p-8 gap-y-8 text-lg font-medium"
				class:menuRendered={isMenuRendered}
			>
				<a
						href="/"
						class="relative block rounded-md"
						on:click={() => setTimeout(() => (isOpen = false), 200)}
					>
						Home
					</a>
        <a
						href="/about"
						class=""
						on:click={() => setTimeout(() => (isOpen = false), 200)}
					>
						About
					</a>

				<a
						href="/news"
						class=""
						on:click={() => setTimeout(() => (isOpen = false), 200)}
					>
						News
					</a>
			</div>
		</div>
	{/if}
</div>
