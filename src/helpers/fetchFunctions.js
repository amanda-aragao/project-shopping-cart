export const fetchProduct = async (productID) => {
  if (!productID) {
    throw new Error('ID não informado');
  }
  const api = `https://api.mercadolibre.com/items/${productID}`;
  const getFetch = await fetch(api);
  const response = await getFetch.json();
  return response;
};

export const fetchProductsList = async (parameter) => {
  if (!parameter) {
    throw new Error('Termo de busca não informado');
  }
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`;
  const getFetch = await fetch(api);
  const response = await getFetch.json();
  return response.results;
};
