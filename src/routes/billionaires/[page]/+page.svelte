<script>
  export let data;
  import { page } from '$app/stores';

  const totalItems = data.totalBillionaires;
  const totalPages = Math.ceil(totalItems / 10);
  const formatter = new Intl.NumberFormat('en', { notation: 'compact'})

	$: billionaires = data.billionaires;
  $: currentPage = Number($page.params.page)
  $: visiblePages = calculateVisiblePages(currentPage, totalPages, 4);

  /**
	 * @param {number} currentPage
	 * @param {number} totalPages
	 * @param {number} surroundingPages
	 */
  function calculateVisiblePages(currentPage, totalPages, surroundingPages) {
    let pages = [];

    // Always add the first page
    pages.push(1);

    // Add an ellipsis if there are pages skipped before the current surrounding pages
    if (currentPage - surroundingPages > 2) {
      pages.push('...');
    }

    // Add the pages surrounding the current page
    for (let i = Math.max(2, currentPage - surroundingPages); i <= Math.min(totalPages - 1, currentPage + surroundingPages); i++) {
      pages.push(i);
    }

    // Add an ellipsis if there are pages skipped after the current surrounding pages
    if (currentPage + surroundingPages < totalPages - 1) {
      pages.push('...');
    }

    // Always add the last page
    pages.push(totalPages);

    return pages;
  }
</script>

<svelte:head>
	<title>Socialist Orcas Against Ramming - Orca HIT List</title>
</svelte:head>

<div class="relative mx-auto">
	<div class="hero">
		<div class="relative max-w-4xl mx-auto w-full flex justify-center pt-12">
			<div>
				<h1 class="text-4xl sm:text-7xl font-bold text-center">ORCA H.I.T. LIST</h1>
			</div>
		</div>

		<div class="max-w-6xl mx-auto py-8">
			<p class="text-xl text-justify">
				The Orca H.I.T. (High Income Targets) List is intended for academic research purposes only
				and has been compiled by S.O.A.R (Socialist Orcas Against Ramming) in order to support
				efforts to reduce wealth inequality around the world. S.O.A.R is against yacht ramming and
				firmly condemns all acts of violence against human property and means of transportation.
			</p>
		</div>
	</div>

	<div class="max-w-6xl mx-auto">
		{#if billionaires}
			<ul class="text-xl grid grid-cols-4 gap-4">
				{#each billionaires as billionaire}
					<li class="border-2 border-blue-300">
						<div class="flex flex-col items-center gap-2">
							<div class="flex justify-between">

								<div class="w-48 h-48">
									{#if billionaire.person.squareImage}
										<img
											src={billionaire.person.squareImage}
											alt={billionaire.person.name}
											class="w-full"
										/>
									{:else if billionaire.squareImage}
                    <img
											src={billionaire.squareImage}
											alt={billionaire.person.name}
											class="w-full"
										/>
                  {:else}
										<div class="w-24 h-24 bg-blue-800" />
									{/if}
								</div>
							</div>
							<div class="border-2 border-black w-full h-full">
								<div>
									<h3 class="text-2xl text-center">{billionaire.person.name}</h3>
									<p>{billionaire.source}</p>
								</div>
								<div>
									<h3>{formatter.format(billionaire.finalWorth * 1000000)}</h3>
								</div>
								<div>
									<h3>{billionaire.countryOfCitizenship}</h3>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="w-full flex justify-center py-8">
			<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
				<a
					href={`${currentPage - 1}`}
					class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				>
					<span class="sr-only">Previous</span>
					<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>

        {#each visiblePages as pageNumber}
          {#if pageNumber === '...'}
            <span
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
            >...</span>
          {:else}
            <a
              href={String(pageNumber)}
              class={currentPage === pageNumber ? 'bg-soar relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 hover:bg-soar/80 focus:z-20 focus:outline-offset-0' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}
            >{pageNumber}</a>
          {/if}
        {/each}
				<a
					href={`${currentPage + 1}`}
					class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
				>
					<span class="sr-only">Next</span>
					<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</nav>
		</div>
	</div>
</div>
