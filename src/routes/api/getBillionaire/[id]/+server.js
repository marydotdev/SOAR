const annualListUrl = 'https://www.forbes.com/forbesapi/person/billionaires/2023/position/true.json';
const realTimeListUrl = 'https://www.forbes.com/forbesapi/person/rtb/0/position/true.json'


export const GET = async ({ params }) => {
  const uri = params.id;
  const res = await fetch(realTimeListUrl)
  const { personList } = await res.json();
  const billionaire = personList.personsLists.find((/** @type {{ uri: String; }} */ b) => b.uri === uri); // Find the billionaire with the matching uri

  return new Response(JSON.stringify(billionaire), { status: 200 })
}

