// export const load = ({ fetch }) => {

//   const fetchBillionaires= async () => {
//     const res = await fetch('/api/getBillionaires')
//     const data = await res.json()
//     return data
//   }

//   return {
//     data: fetchBillionaires()
//   }

// }
import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, '/billionaires/1');
}
