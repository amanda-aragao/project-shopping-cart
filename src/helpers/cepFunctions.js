export const getAddress = async (cep) => {
  const api1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const api2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const apis = [api1, api2];
  const promiseFetch = apis.map((pms) => fetch(pms));
  const returnPromise = await Promise.any(promiseFetch);
  const response = await returnPromise.json();
  console.log(response);
  return response;
};
export const searchCep = () => {
  const adress = document.querySelector('cart__address');
  const inputCep = document.querySelector('.cep-input');
  console.log(inputCep);
  // seu código aqui
  try {
    getAddress(inputCep);
  } catch (error) {
    adress.innerHTML = 'CEP não encontrado';
  }
};
