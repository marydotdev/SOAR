<script>
	export let data;
	import { navigating } from '$app/stores';
	const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
	// console.log($navigating?.from);
	const backLink = $navigating?.from?.params.page || '1';
</script>

<div class="max-w-6xl mx-auto p-4 flex flex-col gap-8">
	<div class="flex gap-8">
		<div class="relative">
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
		<div class="border-2 border-black w-full">
			<div class="flex gap-4">
				<p>Rank: {data.rank}</p>
				<!-- <p>Age: {data.age}</p> -->
			</div>
			<div class="flex justify-between">
				<h1 class="text-4xl font-bold">{data.personName}</h1>
				<h3 class="text-3xl">{formatter.format(data.finalWorth * 1000000)}</h3>
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
						<li class="text-xl">{about}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="border-2 border-black max-w-2xl">
		<h4 class="font-bold text-2xl">Bio</h4>
		<ul class="flex flex-col gap-4 pt-4">
			{#each data.bios as bio}
				<li class="text-lg">{bio}</li>
			{/each}
		</ul>
	</div>
	<div>
		<a href={`/billionaires/${backLink}`} class="text-xl font-bold">&larr; Back to billionaires</a>
	</div>
</div>
