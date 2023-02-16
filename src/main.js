import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
fetchProductsList('computador');

const getProduts = document.querySelector('.products');

const products = async () => {
  const response = await fetchProductsList('computador');
  response.forEach((element) => {
    const item = createProductElement(element);
    item.className = 'item';
    getProduts.appendChild(item);
  });
};

const loadingMessage = async () => {
  const element = document.createElement('p');
  element.innerHTML = 'carregando...';
  element.className = 'loadingMessage';
  getProduts.appendChild(element);
  await products();
};

const clearMessage = () => {
  getProduts.innerHTML = '';
};

loadingMessage();
clearMessage();
products();
