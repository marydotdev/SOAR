<script>
  export let data;
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let searchTerm = '';
  let searchedBillionaires = [];

  async function fetchData() {
    const res = await fetch(`/api/searchBillionaires?search=${searchTerm}`);
    const data = await res.json();
    searchedBillionaires = data.personList.personsLists;
  }

  onMount(fetchData); // Load data on component mount

  function handleSearch() {
    fetchData(); // Re-fetch data when search term changes
  }

  const totalItems = data.totalBillionaires;
  const totalPages = Math.ceil(totalItems / 10);
  const formatter = new Intl.NumberFormat('en', { notation: 'compact'})

	$: billionaires = data.billionaires;
  $: currentPage = Number($page.params.page)
  $: visiblePages = calculateVisiblePages(currentPage, totalPages, 4);

  console.log(data);
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
			<!-- <div>
				<h1 class="text-4xl sm:text-7xl font-bold text-center">ORCA H.I.T. LIST</h1>
			</div> -->
      <div>
				<h1 class="text-4xl sm:text-7xl font-bold text-center">DO NOT RAM</h1>
			</div>
		</div>
    <!-- <div class="relative max-w-4xl mx-auto w-full flex justify-center pt-12">
			<div>
				<h1 class="text-4xl sm:text-7xl font-bold text-center">World Billionaire Index</h1>
			</div>
		</div> -->

		<!-- <div class="max-w-6xl mx-auto py-8">
			<p class="text-xl text-justify">
				The Orca H.I.T. (High Income Targets) List is intended for academic research purposes only
				and has been compiled by S.O.A.R (Socialist Orcas Against Ramming) in order to support
				efforts to reduce wealth inequality around the world. S.O.A.R is against yacht ramming and
				firmly condemns all acts of violence against human property and means of transportation.
			</p>
		</div> -->
	</div>


	<div class="max-w-6xl mx-auto">
    <!-- <div class="max-w-xl mx-auto">
      <div class="relative mt-2 flex items-center gap-2">
        <input type="text" bind:value={searchTerm} placeholder="Search by name..." name="search" id="search" class="block w-full rounded-md border-0 py-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6">

        <button on:click={handleSearch} type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
      </div>
    </div> -->
		{#if billionaires}
			<ul class="text-xl grid grid-cols-1 lg:grid-cols-2 px-2 py-12 gap-x-12 gap-y-12">
				{#each billionaires as billionaire}
					<a href={`/billionaire/${billionaire.person.uri}`}>
            <li class="max-w-2xl mx-auto bg-white hover:shadow-lg sm:hover:scale-[1.05] transition-all duration-200 ease-in-out">
              <div class="w-full h-full flex items-start gap-2">
                <div class="flex justify-between">
                  <div class="w-28 h-28 md:w-48 md:h-48 isolate">
                    <div class="absolute z-10">
                      <p class="w-fit min-w-[2rem] md:min-w-[3rem] h-8 md:h-12 text-center text-white drop-shadow-lg backdrop-brightness-50 text-xl md:text-4xl font-serif">{billionaire.rank}</p>
                    </div>
                    <div class="relative">
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
                      {:else if billionaire.thumbnail}
                        <img
                          src={billionaire.thumbnail}
                          alt={billionaire.person.name}
                          class="w-full"
                        />
                      {:else}
                        <div class="w-24 h-24 md:w-48 md:h-48 bg-gray-900" />
                      {/if}
                      </div>
                  </div>
                </div>
                <div class="w-full md:h-48 p-2 md:p-4 flex flex-col justify-between">
                  <div class="w-full h-full flex justify-between">
                    <div>
                      <h3 class="text-lg md:text-2xl">{billionaire.person.name}</h3>
                      <p class="text-xs md:text-sm uppercase">{billionaire.source}</p>
                      <p class="text-base md:text-lg">
                        {#if (billionaire.city && billionaire.state)}
                          <span>{billionaire.city},</span>
                          {:else if (!billionaire.city)}
                          <span></span>
                          {:else}
                            <span>{billionaire.city}</span>
                        {/if}
                        {#if (billionaire.state)}
                          <span>{billionaire.state}</span>
                        {:else if (!billionaire.state)}
                          <span></span>
                        {/if}
                      </p>
                    </div>

                    <div>
                      <h3 class="text-sm md:text-2xl">{formatter.format(billionaire.finalWorth * 1000000)}</h3>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xs md:text-sm text-right">{billionaire.countryOfCitizenship}</h3>
                  </div>
                  </div>
              </div>
            </li>
          </a>
				{/each}
			</ul>
		{/if}

		<div class="w-full flex justify-center py-8">
			<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white" aria-label="Pagination">
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

        <span class="hidden md:block">
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
        </span>
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
