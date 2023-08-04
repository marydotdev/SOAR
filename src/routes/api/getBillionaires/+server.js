const annualListUrl = 'https://www.forbes.com/forbesapi/person/billionaires/2023/position/true.json';
const realTimeListUrl = 'https://www.forbes.com/forbesapi/person/rtb/0/position/true.json'

export const GET = async () => {
  const res = await fetch(realTimeListUrl)
  const data = await res.json()

  return new Response(JSON.stringify(data), { status: 200 })
}
