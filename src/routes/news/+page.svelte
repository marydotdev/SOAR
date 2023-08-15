<script>
  const newsLinks = [
    {
      "source": "CNN",
      "title": "Why killer whales won’t stop ramming boats in Spain",
      "url": "https://www.cnn.com/2023/06/27/world/killer-whale-boat-attacks-mystery-scn/index.html"
    },
    {
      "source": "Scientific American",
      "title": "Why Has a Group of Orcas Suddenly Started Attacking Boats?",
      "url": "https://www.scientificamerican.com/article/why-has-a-group-of-orcas-suddenly-started-attacking-boats/"
    },
    {
      "source": "Washington Post",
      "title": "Are the orcas out to get us? What to know about recent attacks.",
      "url": "https://www.washingtonpost.com/wellness/2023/07/14/orcas-boats-attacks-spain/"
    },
    {
      "source": "NY Post",
      "title": "Horrifying footage shows orcas attacking British couple’s yacht",
      "url": "https://nypost.com/2023/05/17/horrifying-footage-of-orcas-attacking-british-couples-yacht/"
    },
    {
      "source": "Popular Mechanics",
      "title": "Orcas Won't Stop Attacking Boats. They Officially Have Our Attention.",
      "url": "https://www.popularmechanics.com/science/animals/a44389793/why-are-orcas-attacking-boats/"
    },
    {
      "source": "LA Times",
      "title": "Why are killer whales going 'Moby-Dick' on yachts lately? Experts doubt it's revenge",
      "url": "https://www.latimes.com/environment/story/2023-06-19/why-are-killer-whales-going-moby-dick-on-yachts-suddenly"
    },
    {
      "source": "Smithsonian Mag",
      "title": "Orca Rams Into Yacht Near Scotland, Suggesting the Behavior May Be Spreading",
      "url": "https://www.smithsonianmag.com/smart-news/orca-rams-into-yacht-near-scotland-behavior-may-be-spreading-180982429/"
    }
  ]
</script>

<div class="max-w-6xl mx-auto px-4 py-12">
  <h2 class="text-2xl font-bold">Recent Press</h2>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="flex flex-col gap-8 pt-12">
    {#each newsLinks as news}
      <a href={news.url} target="_blank">
        <p class="text-xl">{news.title}</p>
        <p>{news.source}</p>
      </a>
    {/each}
    </div>

    <div class="w-fit mt-12 ml-auto">
      <img src="/threewhales.png" alt="Three orcas jumping majestically" class="grayscale opacity-70 transform -scale-x-100 rotate-12 "  />
    </div>
  </div>

</div>


