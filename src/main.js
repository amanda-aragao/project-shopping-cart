import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
fetchProductsList('computador');

const getProduts = document.querySelector('.products');

const loadingMessage = async () => {
  const element = document.createElement('p');
  element.innerHTML = 'carregando...';
  element.className = 'loading';
  getProduts.appendChild(element);
};

const clearMessage = () => {
  getProduts.innerHTML = '';
};

const products = async () => {
  loadingMessage();
  const response = await fetchProductsList('computador');
  clearMessage();

  response.forEach((element) => {
    const item = createProductElement(element);
    item.className = 'item';
    getProduts.appendChild(item);
  });
};

const testApi = async () => {
  try {
    await products();
  } catch (error) {
    const errorApi = document.createElement('p');
    errorApi.className = 'error';
    errorApi.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    getProduts.appendChild(errorApi);
  }
};

testApi();
