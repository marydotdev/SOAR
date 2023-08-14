<script>
	export let data;
	import { navigating } from '$app/stores';

	const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
	// console.log($navigating?.from);
  //console.log(data)
	const backLink = $navigating?.from?.params.page || '1';
</script>

<div class="bg-white">
  <div class="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="relative max-w-xs mx-auto md:w-full">
        {#if data.person.squareImage}
          <img src={data.person.squareImage} alt={data.person.name} class="w-full" />
        {:else if data.squareImage}
          <img src={data.squareImage} alt={data.person.name} class="w-full" />
        {:else if data.thumbnail}
          <img src={data.thumbnail} alt={data.person.name} class="w-full" />
        {:else}
          <div class="w-64 h-64 bg-gray-900" />
        {/if}
      </div>
      <div class="w-full p-4 border border-black">
        <div class="flex gap-4">
          <p>Rank {data.rank}</p>
          <!-- <p>Age: {data.age}</p> -->
        </div>
        <div class="flex flex-col-reverse sm:flex-row justify-between">
          <h1 class="text-2xl lg:text-4xl font-bold">{data.personName}</h1>
          <h3 class="text-xl lg:text-3xl">{formatter.format(data.finalWorth * 1000000)}</h3>
        </div>
        <div>
          <p class="text-sm uppercase">{data.source}</p>

          <p>
            {#if data.city && data.state}
              <span>{data.city},</span>
            {:else if !data.city}
              <span />
            {:else}
              <span>{data.city}</span>
            {/if}
            {#if data.state}
              <span>{data.state}</span>
            {:else if !data.state}
              <span />
            {/if}
          </p>
        </div>
        <p class="">{data.countryOfCitizenship}</p>
        {#if data.abouts}
          <ul class="flex flex-col gap-4 pt-4">
            {#each data.abouts as about}
              <li class="text-lg md:text-xl">{about}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
    <div class="max-w-6xl mx-auto flex justify-between">
      <div>
        <ul class="flex flex-col gap-4">
          {#each data.bios as bio}
            <li class="text-lg">{bio}</li>
          {/each}
        </ul>
      </div>

    </div>

    <div class="pt-12">
      <a href={`/billionaires/${backLink}`} class="text-xl font-bold">&larr; Back to billionaires</a>
    </div>
  </div>

</div>
