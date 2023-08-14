const annualListUrl = 'https://www.forbes.com/forbesapi/person/billionaires/2023/position/true.json';
const realTimeListUrl = 'https://www.forbes.com/forbesapi/person/rtb/0/position/true.json'

export const GET = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const res = await fetch(annualListUrl)
  const data = await res.json()

  const filteredData = data.personList.personsLists.filter(b => b.person.name.toLowerCase().includes(search.toLowerCase()));

  return new Response(JSON.stringify({ personList: { personsLists: filteredData }}), { status: 200 });
}
