// export const load = async ({ fetch, params }) => {
//   const page = Number(params.page) || 1;
//   const limit = 10;
//   const startIndex = (page - 1) * limit;
//   const endIndex = startIndex + limit;

//   const fetchBillionaires = async () => {
//     const res = await fetch('/api/getBillionaires');
//     const data = await res.json();
//     const billionaires = data.personList.personsLists;
//     console.log(billionaires.length)
//     const totalBillionaires = billionaires.length;
//     const billionairesPerPage = billionaires.slice(startIndex, endIndex);
//     return billionairesPerPage;
//   };

//   return {
//     billionaires: await fetchBillionaires()
//   };
// };


export const load = async ({ fetch, params }) => {
  const page = Number(params.page) || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const res = await fetch('/api/getBillionaires');
  // const res = await fetch(`/api/searchBillionaires?search=${params.search || ''}`);
  const data = await res.json();
  const billionaires = data.personList.personsLists;
  const totalBillionaires = billionaires.length;
  const billionairesPerPage = billionaires.slice(startIndex, endIndex);

  return {
    billionaires: billionairesPerPage,
    totalBillionaires: totalBillionaires // Include the total length here
  };
};

