export const fetchProduct = (productID) => {
  const api = `https://api.mercadolibre.com/items/${productID}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const resultApi = data;
      if (!productID) {
        throw new Error('ID não informado');
      }
      return resultApi;
    });
};
fetchProduct('MLB1405519561');

export const fetchProductsList = (parameter) => {
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`;
  return fetch(api)
    .then((response) => response.json())
    .then((data) => {
      if (!parameter) {
        throw new Error('Termo de busca não informado');
      }
      return data.results;
    });
};
