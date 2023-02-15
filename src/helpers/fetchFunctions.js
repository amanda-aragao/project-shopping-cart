export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (parameter) => {
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const resultApi = data;
      if (!parameter) {
        throw new Error('Termo de busca não informado');
      }
      return resultApi;
    });
};
