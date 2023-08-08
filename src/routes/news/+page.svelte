<script>
  const newsLinks = [
    {
      "title": "Why killer whales won’t stop ramming boats in Spain",
      "url": "https://www.cnn.com/2023/06/27/world/killer-whale-boat-attacks-mystery-scn/index.html"
    },
    {
      "title": "Why Has a Group of Orcas Suddenly Started Attacking Boats?",
      "url": "https://www.scientificamerican.com/article/why-has-a-group-of-orcas-suddenly-started-attacking-boats/"
    },
    {
      "title": "Are the orcas out to get us? What to know about recent attacks.",
      "url": "https://www.washingtonpost.com/wellness/2023/07/14/orcas-boats-attacks-spain/"
    },
    {
      "title": "Horrifying footage shows orcas attacking British couple’s yacht",
      "url": "https://nypost.com/2023/05/17/horrifying-footage-of-orcas-attacking-british-couples-yacht/"
    },
    {
      "title": "Orcas Won't Stop Attacking Boats. They Officially Have Our Attention.",
      "url": "https://www.popularmechanics.com/science/animals/a44389793/why-are-orcas-attacking-boats/"
    },
    {
      "title": "Why are killer whales going 'Moby-Dick' on yachts lately? Experts doubt it's revenge",
      "url": "https://www.latimes.com/environment/story/2023-06-19/why-are-killer-whales-going-moby-dick-on-yachts-suddenly"
    },
    {
      "title": "Orca Rams Into Yacht Near Scotland, Suggesting the Behavior May Be Spreading",
      "url": "https://www.smithsonianmag.com/smart-news/orca-rams-into-yacht-near-scotland-behavior-may-be-spreading-180982429/"
    }
  ]
</script>

<div class="max-w-6xl mx-auto">
  <div class="py-12">
    <h2 class="text-2xl font-bold">Recent Press</h2>
  </div>
  <div class="flex flex-col gap-8">
    {#each newsLinks as news}
    <a href={news.url} target="_blank">
      <p>{news.title}</p>
    </a>
  {/each}
  </div>
</div>


