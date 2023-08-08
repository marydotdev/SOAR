export const load = async ({ fetch, params }) => {
  const uri = params.id;

  const res = await fetch(`/api/getBillionaire/${uri}`);
  const billionaire = await res.json();

  return billionaire;
};

